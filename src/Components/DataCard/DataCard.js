import React from "react";

import "./datacard.css";

export const DataCard = (props) => {
  return (
    <>
      <div className="dataCard">
        <div className="dataTitle">{props.dataName}</div>
        <span>___________________________</span>
        <div className="dataValue">{props.dataValue}</div>
      </div>
    </>
  );
};

export default DataCard;
