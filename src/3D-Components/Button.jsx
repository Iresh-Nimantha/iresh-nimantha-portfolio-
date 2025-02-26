import React from "react";

function Button({ name, isBeam = false, continerClass }) {
  return (
    <button className={`btn ${continerClass}`}>
      {isBeam && (
        <span className="relative flex">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </button>
  );
}

export default Button;
