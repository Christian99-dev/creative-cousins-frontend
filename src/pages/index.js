// IndexPage.js
import React, { useEffect, useState } from "react";
import { fetchWelcome } from "../api/fetch";
import { styled } from "styled-components";
import Layout from "../components/Layout";

const IndexPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchWelcome()
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    data && (
      <Layout>
        <IndexPageStyle>
        </IndexPageStyle>
      </Layout>
    )
  );
};

const IndexPageStyle = styled.div`
`;

export default IndexPage;
