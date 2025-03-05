import React from "react";
import { FormConfigContextProvider } from "./store/FormConfigContext";
import { Switcher } from "./components/Switcher";
function App() {
  return (
    <FormConfigContextProvider>
      <div className="layout-px pt-10">
        <Switcher />
      </div>
    </FormConfigContextProvider>
  );
}

export default App;
