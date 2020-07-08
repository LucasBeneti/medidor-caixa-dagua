import React from "react";

import "./datacard.css";

export const DataCard = (props) => {
  //pelo props pega o tipo de dado e assim faz um fetch do data
  // de acordo com o tipo dele
  function wichDataFetch(dataName) {
    switch (dataName) {
      case "Temperatura Interna":
        return Math.floor(Math.random() * 100);
      // break;

      case "Temperatura Externa":
        return Math.floor(Math.random() * 100);
      // break;
      case "Volume":
        return Math.floor(Math.random() * 100);
      // break;
      case "Capacidade":
        return Math.floor(Math.random() * 100);
      // break;
      default:
        return NaN;
    }
  }

  return (
    <>
      <div className="dataCard">
        <div className="dataTitle">{props.dataName}</div>
        <div className="dataValue">
          {
            /* {setInterval(() => {
            wichDataFetch(props.dataName);
          }, 2000)} */ wichDataFetch(
              props.dataName
            )
          }
        </div>
      </div>
    </>
  );
};

export default DataCard;
