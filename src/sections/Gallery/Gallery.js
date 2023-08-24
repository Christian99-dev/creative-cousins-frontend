import React from "react";
import { styled } from "styled-components";
import { FetchGallery } from "../../api/fetch";
import { device } from "../../theme/breakpoints";

const Gallery = () => {
  const { data, loading } = FetchGallery();

  return (
    <GalleryStyle>
      {!loading &&
        data.gallery.map((imgUrl) => (
          <img
            className="box"
            src={imgUrl}
            alt="Service der vom Unternehmen angeboten wird"
          />
        ))}
    </GalleryStyle>
  );
};

export default Gallery;

const GalleryStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px 10px;

  .box {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;
