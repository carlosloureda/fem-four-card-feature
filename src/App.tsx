import React from "react";
import { Global, css } from "@emotion/react";

import CardsSection from "./components/CardsSection";
import colors from "./theme/colors";

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-size: 15px;
    line-height: 15px;
    font-family: "Poppins", sans-serif;
    color: ${colors.grey};
  }
`;

function App() {
  return (
    <div>
      <Global styles={GlobalStyles} />
      <CardsSection />
    </div>
  );
}

export default App;
