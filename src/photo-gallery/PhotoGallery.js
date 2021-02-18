import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import GalleryImage from "../gallery-image";
import { useSwipe } from "../utils/hooks";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.div`
  height: 100%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  ${({ disabled }) => disabled && "color: red;"}
`;

const PhotoGallery = ({ photos, infiniteLoop }) => {
  const [focusedImage, setFocusedImage] = useState(0);

  const showLeftArrow = photos.length > 0 && focusedImage > 0;
  const showRightArrow = photos.length > 0 && focusedImage < photos.length - 1;

  const clickLeftArrow = () => {
    if (infiniteLoop && !showLeftArrow) {
      setFocusedImage(photos.length - 1);
    } else {
      showLeftArrow && setFocusedImage(focusedImage - 1);
    }
  };

  const clickRightArrow = () => {
    if (infiniteLoop && !showRightArrow) {
      setFocusedImage(0);
    } else {
      showRightArrow && setFocusedImage(focusedImage + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 37) {
        clickLeftArrow();
      }
      if (e.keyCode === 39) {
        clickRightArrow();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useSwipe(clickLeftArrow, clickRightArrow);

  return (
    <Container>
      <Arrow
        onClick={clickLeftArrow}
        disabled={!showLeftArrow && !infiniteLoop}
      >
        &#9664;
      </Arrow>
      {!!photos[focusedImage] && (
        <Fragment>
          <GalleryImage {...photos[focusedImage]} />
        </Fragment>
      )}
      <Arrow
        onClick={clickRightArrow}
        disabled={!showRightArrow && !infiniteLoop}
      >
        &#9654;
      </Arrow>
    </Container>
  );
};

export default PhotoGallery;
