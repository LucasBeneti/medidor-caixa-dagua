import React from "react";
import DataCard from "./Components/DataCard/DataCard";

import "./App.css";

const App = () => {
  function getData() {
    // aqui que acontece os fetchs
  }

  return (
    <div className="App">
      <div className="container">
        <div className="grid">
          <div className="subgrid">
            <div style={{ padding: "2em 4em" }}>
              <DataCard dataName="Temperatura" dataValue="25°C" />
            </div>
            <div style={{ padding: "2em 4em" }}>
              <DataCard dataName="Capacidade" dataValue="88%" />
            </div>
          </div>
          <div className="subgrid">
            <div style={{ padding: "2em 4em" }}>
              <DataCard dataName="Volume" dataValue="765m2" />
            </div>
            <div style={{ padding: "2em 4em" }}>
              <DataCard dataName="Temperatura Externa" dataValue="18°C" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
