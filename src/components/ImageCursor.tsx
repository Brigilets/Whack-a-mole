import React, { MouseEvent } from "react";

type ImageProps = {
  src: string;
};

const ImageCursor: React.FC<ImageProps> = ({ src }) => {
  // Event handler for mousemove
  const handleMouseMove = (event: MouseEvent<HTMLImageElement>) => {
    // Get the mouse position
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Perform your desired logic with the mouse position
    console.log("Mouse X:", mouseX);
    console.log("Mouse Y:", mouseY);
  };

  return <img src={src} alt="cursor" onMouseMove={handleMouseMove} />;
};

export default ImageCursor;
