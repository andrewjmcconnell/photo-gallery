import React, { useState } from "react";

const PhotoGallery = ({ photos }) => {
  const [focusedImage, setFocusedImage] = useState(0);

  const showLeftArrow = photos.length > 0 && focusedImage > 0;
  const showRightArrow = photos.length > 0 && focusedImage < photos.length - 1;

  const clickLeftArrow = () => {
    setFocusedImage(focusedImage - 1);
  };

  const clickRightArrow = () => {
    setFocusedImage(focusedImage + 1);
  };

  console.log({ focusedImage });
  console.log({ photos });

  return (
    <div>
      {showLeftArrow && <div onClick={clickLeftArrow}>&#9664;</div>}
      <img
        key={photos[focusedImage].caption}
        src={photos[focusedImage].url}
        alt={photos[focusedImage].caption}
      />
      <figcaption>{photos[focusedImage].caption}</figcaption>
      {/* {photos.map(photo => (
        <img key={photo.caption} src={photo.url} alt={photo.caption} />
      ))} */}
      {showRightArrow && <div onClick={clickRightArrow}>&#9654;</div>}
    </div>
  );
};

export default PhotoGallery;
