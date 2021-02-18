import React from "react";
import styled from "styled-components";

const Image = styled.div`
  background-image: url(${({ url }) => `${url}`});
  background-size: cover;
  background-position: center;
  height: 500px;
  width: 500px;
  min-width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5%;
`;
const Caption = styled.figcaption`
    font-size: 30px;
    font-weight: 700;
    color: white;
    text-shadow: 0 0 15px black;
`;

const GalleryImage = ({ url, caption }) => (
  <Image url={url}>
    <Caption>{caption}</Caption>
  </Image>
);

export default GalleryImage;
