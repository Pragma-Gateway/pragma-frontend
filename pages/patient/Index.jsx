import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { useAuth } from "../../contexts/authContext";
import {
  DatasetFrontendSchema,
  getContributions,
} from "../../components/helpers";
import {
  LayoutContainer,
  TitleSection,
  ListingSection,
} from "../../components/dataPage/DataPage";

const ContributionsPage = () => {
  const [token] = useAuth();
  const [contributions, setContributions] = useState([]);
  const router = useRouter();
  console.log({ contributions });

  useEffect(() => {
    if (token) {
      getContributions(token).then((data) => {
        let newData = data.map((item) => DatasetFrontendSchema({ item }));
        console.log({ data, newData });
        setContributions(newData);
      });
    } else router.push("/login");
  }, [router, token]);
  return (
    <LayoutContainer title="Your Contributions">
      <TitleSection
        title="Your Contributions"
        subtitle="What datasets you've contributed to"
      />
      {contributions ? (
        <ListingSection btnName="View Dataset" listings={contributions} />
      ) : (
        <p>None yet</p>
      )}
    </LayoutContainer>
  );
};

export default ContributionsPage;
