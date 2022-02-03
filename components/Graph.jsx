import React from "react";
import DeckGL from "@deck.gl/react";
import { OrthographicView } from "@deck.gl/core";
import { ScatterplotLayer, TextLayer, PolygonLayer } from "@deck.gl/layers";

import graphData from "./graphData";

const graphDataToPoints = (graphData) => {
  return graphData.map((d) => [d.x, d.y, d.species]);
};

const MALE_COLOR = [0, 128, 255];
const FEMALE_COLOR = [255, 0, 128];
const OTHER_COLOR = [252, 186, 3];

// Source data CSV
const DATA_URL =
  "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/scatterplot/manhattan.json"; // eslint-disable-line

const INITIAL_VIEW_STATE = {
  target: [10, -3, 0],
  zoom: 4,
  minZoom: -2,
  maxZoom: 40,
};
// given a name and the data, find the mean that the text should be placed
const getCoordMean = (name, data) => {
  let xsum = 0;
  let ysum = 0;
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i][2] === name) {
      xsum += data[i][0];
      ysum += data[i][1];
      count++;
    }
  }
  return [xsum / count, ysum / count];
};

const getPolygonPoints = (name, data) => {
  let points = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][2] === name) {
      points.push([data[i][0], data[i][1]]);
    }
  }
  return points;
};

const flowerNames = ["setosa", "versicolor", "virginica"];

export default function App({
  data = graphDataToPoints(graphData),
  radius = 1,
  mapStyle = "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json",
}) {
  console.log(data);

  const views = [
    new OrthographicView({
      flipY: false,
      // near: 0.1,
      // far: 1000,
    }),
  ];

  const layers = [
    // scatter plot showing the clusters
    new ScatterplotLayer({
      id: "scatter-plot",
      data,
      radiusScale: radius,
      radiusMinPixels: 0.25,
      getPosition: (d) => [d[0], d[1], 0],
      getFillColor: (d) => {
        switch (d[2]) {
          case "setosa":
            return MALE_COLOR;
          case "versicolor":
            return FEMALE_COLOR;
          default:
            return OTHER_COLOR;
        }
      },
      getRadius: 1,
      sizeOnUnits: "pixels",
      // coordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
      // coordinateOrigin: [0, 0, 0],
      updateTriggers: {
        getFillColor: [MALE_COLOR, FEMALE_COLOR, OTHER_COLOR],
      },
    }),
    new PolygonLayer({
      id: "polygon-layer",
      data: flowerNames,
      pickable: true,
      stroked: true,
      filled: false,
      wireframe: true,
      lineWidthMinPixels: 1,
      getPolygon: (d) =>
        console.log({
          contour: getPolygonPoints(d, graphDataToPoints(graphData)),
        }) || getPolygonPoints(d, graphDataToPoints(graphData)),
      getElevation: (d) => 0,
      // getFillColor: (d) => [60, 140, 0, 0.5],
      getLineColor: [255, 255, 255, 25],
      getLineWidth: 1,
    }),
    // text layer for the group names
    new TextLayer({
      id: "text-layer",
      data: flowerNames,
      pickable: true,
      getPosition: (d) => getCoordMean(d, graphDataToPoints(graphData)),
      getText: (d) => d,
      getSize: 32,
      getAngle: 0,
      getTextAnchor: "middle",
      getAlignmentBaseline: "center",
    }),
  ];

  return (
    <DeckGL
      layers={layers}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      views={views}
    />
  );
}
