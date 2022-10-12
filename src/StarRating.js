import { useState } from "react";
import Star from "./components/Star";

function StarRating({ n = 5, size = "small", color = "#FFCD3C" }) {
  var _ = require("lodash");
  const [temporaryStarFill, setTemporaryStarFill] = useState(-1);
  const [starFill, setStarFill] = useState(-1);

  const handleMouseEnter = (n) => {
    setTemporaryStarFill(n);
  };
  const handleMouseLeave = () => {
    setTemporaryStarFill(starFill);
  };
  const handleClickEvent = (n) => {
    setTemporaryStarFill(0);
    setStarFill(n);
  };
  return (
    <>
      {_.times(n, (i) => {
        return (
          <Star
            fill={i <= temporaryStarFill ? "fill" : "none"}
            size={size}
            color={color}
            key={i}
            n={i}
            mouseEnterHandler={handleMouseEnter}
            mouseLeaveHandler={handleMouseLeave}
            mouseClickHandler={handleClickEvent}
          />
        );
      })}
    </>
  );
}

export default StarRating;
