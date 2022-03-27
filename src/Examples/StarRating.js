import React from "react";
import { Star, StarFill } from "react-bootstrap-icons";

function StarRating(props) {
    const starIcon = props.isFilled ? <StarFill /> : <Star />
    return (
        <div onClick={props.handleClick}>{starIcon}</div>
    )
}
export default StarRating;
