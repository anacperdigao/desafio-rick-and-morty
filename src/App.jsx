// React and hooks
import React, { useContext } from "react";

// Components
import CharactersPage from "./components/CharactersPage";
import InitialPage from "./components/InitialPage";
import { GlobalStyle } from "./components/GlobalStyle";

// Context
import { MainContext } from "./context/main";


function App() {

  const [ pages, pageState, setPageState ] = useContext(MainContext);

  return (
    <div className="App">

      <GlobalStyle />
      { pageState === 'Initial' && <InitialPage /> }
      { pageState === 'Characters' && <CharactersPage /> }

    </div>
  );
};

export default App;
