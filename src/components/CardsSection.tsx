import React from "react";
import Card from "./Card";
import styled from "@emotion/styled";

import iconCalculator from "../images/icon-calculator.svg";
import iconkarma from "../images/icon-karma.svg";
import iconSupervisor from "../images/icon-supervisor.svg";
import iconTeamBuilder from "../images/icon-team-builder.svg";

const cards = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    caption: iconSupervisor,
    color: "cyan",
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team to your project",
    caption: iconTeamBuilder,
    color: "red",
  },
  {
    title: "Karma",
    description: "Regulary evaluates our talent to ensure quality",
    caption: iconCalculator,
    color: "orange",
  },
  {
    title: "Calculator",
    description:
      "Uses data from past objects to provide better delivery estimates",
    caption: iconkarma,
    color: "blue",
  },
];

const S: any = {};

S.Section = styled.section`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 87px 27px 27px 27px;
  .header {
    // desktop
    max-width: 540px;

    text-align: center;

    margin-bottom: 87px;

    &--title {
      font-size: 24px;
      line-height: 36px;
      font-weight: 200;

      @media (min-width: 376px) {
        font-size: 36px;
        line-height: 54px;
      }

      &__highlighted {
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        display: block;
        @media (min-width: 376px) {
          font-size: 36px;
          line-height: 54px;
        }
      }
    }
    &--subtitle {
      font-weight: 200;
      font-size: 15px;
      line-height: 25px;
      padding-top: 16px;
    }
  }
`;

S.CardsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 87px 27px 27px 27px;

  @media (min-width: 376px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const CardsSection = () => {
  return (
    <S.Section>
      <div className="header">
        <h1 className="header--title">
          Reliable, efficient delivery
          <span className="header--title__highlighted">
            Powered by Technology
          </span>
        </h1>
        <p className="header--subtitle">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <S.CardsSection>
        {cards && cards.map((card) => <Card key={card.title} card={card} />)}
      </S.CardsSection>
    </S.Section>
  );
};

export default CardsSection;
