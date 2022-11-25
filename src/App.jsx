import React, { useContext } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import InitialPage from "./components/InitialPage";
import { MainContext } from "./context/main";


function App() {

  const [ pages, pageState, setPageState ] = useContext(MainContext)

  return (
    <div className="App">
      <GlobalStyle />

      { pageState === 'Initial' && <InitialPage /> }

    </div>
  );
}

export default App;
