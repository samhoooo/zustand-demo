import { ConfigContextProvider } from "./context/configContext";
import { ReactContextDemo } from "./components/ReactContext/Demo";
import { ZustandDemo } from "./components/Zustand/Demo";
import { RenderCountConfig } from "./components/Config/RenderCount";

import "./App.css";
import { useState } from "react";

function App() {
  const [selectedMethod, setSelectedMethod] = useState("react-context");
  return (
    <>
      <label>
        Pick a method:
        <select
          name="selectedMethod"
          onChange={(e) => setSelectedMethod(e.target.value)}
        >
          <option value="react-context">React Context</option>
          <option value="zustand">Zustand</option>
        </select>
      </label>
      <ConfigContextProvider>
        <RenderCountConfig />
        {selectedMethod === "react-context" ? (
          <ReactContextDemo />
        ) : (
          <ZustandDemo />
        )}
      </ConfigContextProvider>
    </>
  );
}

export default App;
