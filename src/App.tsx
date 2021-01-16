import React from "react";
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

import CardsSection from "./components/CardsSection";
import colors from "./theme/colors";

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");
  * {
    box-sizing: border-box;
    padding: 0px;
    font-size: 15px;
    line-height: 15px;
    font-family: "Poppins", sans-serif;
    color: ${colors.grey};
  }
  body {
    background-color: #fafafa;
  }
`;

const S: any = {};
S.Footer = styled.footer`
  background-color: violet;
  text-align: center;
  padding: 2px;
  /* position: fixed;
  bottom: 0;
  width: 100%; */
  .attribution {
    color: white;
    a {
      color: white;
      font-weight: bold;
    }
  }
`;

function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <CardsSection />
      <S.Footer>
        <p className="attribution">
          Built by Carlos Loureda on{" "}
          <a href="https://www.twitch.tv/balanze">Twitch</a> for{" "}
          <a href="https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK">
            FrontendMentor
          </a>
          .
        </p>
      </S.Footer>
    </>
  );
}

export default App;
