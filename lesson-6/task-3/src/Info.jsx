import React from "react";

const Info = ({ info }) => {
  if (!info) {
    return null;
  }

  return (
    <div className="info">
      {info}
    </div>
  );
}

export default Info;

