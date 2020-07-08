import React from "react";
import DataCard from "./Components/DataCard/DataCard";
import Menu from "./Components/Menu/Menu";

import "./App.css";

const App = () => {
  // talvez não seja aqui, se for o caso, fazer uma função assim com
  // switch dentro do componente DataCard dependendo do que for passado
  // pelas props dele

  return (
    <div className="App">
      <Menu />
      <div className="container">
        <div className="grid">
          <div className="subgrid">
            <div style={{ padding: "2em 4em" }}>
              <DataCard dataName="Temperatura Interna" dataValue="25°C" />
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
