import React, { useEffect, useState } from "react";
import { fetchAboutUs, fetchWelcome } from "../api/fetch";

const IndexPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchWelcome()
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    data && (
      <div>
        {/* <img src={data.backgroundMobile} alt="lule"></img> */}
        {data.backgroundMobile}
      </div>
    )
  );
};

export default IndexPage;
