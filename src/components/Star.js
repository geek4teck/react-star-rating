import { useState, useRef } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

const Star = ({
  color = "#FFCD3C",
  size = "small",
  fill = "none",
  mouseEnterHandler,
  mouseLeaveHandler,
  mouseClickHandler,
  n,
}) => {
  switch (size) {
    case "small":
      size = "1em";
      break;
    case "medium":
      size = "2em";
      break;
    case "large":
      size = "3em";
      break;
    case "2xlarge":
      size = "4em";
      break;
    case "3xlarge":
      size = "5em";
      break;
    case "4xlarge":
      size = "6em";
      break;
    case "5xlarge":
      size = "7em";
      break;
    default:
      size = "1em";
  }

  return (
    <>
      {fill === "fill" ? (
        <BsStarFill
          color={color}
          size={size}
          onMouseEnter={() => mouseEnterHandler(n)}
          onMouseLeave={() => mouseLeaveHandler(n)}
          onClick={() => mouseClickHandler(n)}
          
        />
      ) : (
        <BsStar
          color={color}
          size={size}
          onMouseEnter={() => mouseEnterHandler(n)}
          onMouseLeave={() => mouseLeaveHandler(n)}
          onClick={() => mouseClickHandler(n)}

        />
      )}
    </>
  );
};

export default Star;
