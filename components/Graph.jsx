import React from "react";
import { StaticMap } from "react-map-gl";
import DeckGL from "@deck.gl/react";
import { ScatterplotLayer } from "@deck.gl/layers";

// const MALE_COLOR = [0, 128, 255];
// const FEMALE_COLOR = [255, 0, 128];

// // Source data CSV
// const DATA_URL =
//   "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/scatterplot/manhattan.json"; // eslint-disable-line

// const INITIAL_VIEW_STATE = {
//   longitude: -74,
//   latitude: 40.7,
//   zoom: 11,
//   maxZoom: 16,
//   pitch: 0,
//   bearing: 0,
// };

// export default function Graph({
//   data = DATA_URL,
//   radius = 30,
//   maleColor = MALE_COLOR,
//   femaleColor = FEMALE_COLOR,
//   mapStyle = "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json",
// }) {
//   const layers = [
//     new ScatterplotLayer({
//       id: "scatter-plot",
//       data,
//       radiusScale: radius,
//       radiusMinPixels: 0.25,
//       getPosition: (d) => [d[0], d[1], 0],
//       getFillColor: (d) => (d[2] === 1 ? maleColor : femaleColor),
//       getRadius: 1,
//       updateTriggers: {
//         getFillColor: [maleColor, femaleColor],
//       },
//     }),
//   ];

//   return (
//     <DeckGL
//       layers={layers}
//       initialViewState={INITIAL_VIEW_STATE}
//       controller={true}
//     >
//       <StaticMap reuseMaps mapStyle={mapStyle} preventStyleDiffing={true} />
//     </DeckGL>
//   );
// }

import graphData from "./graphData";

const graphDataToPoints = (graphData) => {
  return graphData.map((d) => [d.x, d.y, 0]);
};

const MALE_COLOR = [0, 128, 255];
const FEMALE_COLOR = [255, 0, 128];

// Source data CSV
const DATA_URL =
  "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/scatterplot/manhattan.json"; // eslint-disable-line

const INITIAL_VIEW_STATE = {
  longitude: 200,
  latitude: 100,
  zoom: 11,
  maxZoom: 16,
  pitch: 0,
  bearing: 0,
};

export default function App({
  data = graphDataToPoints(graphData),
  radius = 30,
  maleColor = MALE_COLOR,
  femaleColor = FEMALE_COLOR,
  mapStyle = "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json",
}) {
  console.log(data);
  const layers = [
    new ScatterplotLayer({
      id: "scatter-plot",
      data,
      radiusScale: radius,
      radiusMinPixels: 0.25,
      getPosition: (d) => console.log({ x: d[0] }) || [d[0], d[1], 0],
      getFillColor: (d) => (d[2] === 1 ? maleColor : femaleColor),
      getRadius: 1,
      updateTriggers: {
        getFillColor: [maleColor, femaleColor],
      },
    }),
  ];

  return (
    <DeckGL
      layers={layers}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
    >
      {/* <StaticMap
        reuseMaps={false}
        mapStyle={mapStyle}
        preventStyleDiffing={false}
      /> */}
    </DeckGL>
  );
}
