import React from "react";

function Image(props) {
  return (
    <div className="click-item">
      <img
        src={props.image.image}
        className="responsive-img"
        alt={`macaron ${props.image.id}`}
        onClick={() => props.imageClicked(props.image.id)}
      />
    </div>
  );
}

export default Image;
