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
    altText: "A magnifying glass",
    color: "cyan",
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team to your project",
    caption: iconTeamBuilder,
    altText: "Web page with a home icon",
    color: "red",
  },
  {
    title: "Karma",
    description: "Regulary evaluates our talent to ensure quality",
    caption: iconkarma,
    altText: "A light bulb",
    color: "orange",
  },
  {
    title: "Calculator",
    description:
      "Uses data from past objects to provide better delivery estimates",
    caption: iconCalculator,
    altText: "A calculator",
    color: "blue",
  },
];

const S: any = {};

S.Section = styled.section`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 9%;
  /* padding: 87px 27px 27px 27px; */
  .header {
    // desktop
    max-width: 540px;
    text-align: center;
    margin: 60px 0px;

    &--title {
      font-size: 24px;
      line-height: 36px;
      font-weight: 200;

      @media (min-width: 376px) {
        font-size: 36px;
        line-height: 54px;
      }

      @media (max-width: 355px) {
        font-size: 21px;
        line-height: 36px;
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
        @media (max-width: 355px) {
          font-size: 21px;
          line-height: 36px;
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
  // MOBILE
  display: flex;
  flex-direction: column;
  align-items: center;

  // DESKTOP

  /* @media (min-width: 376px) { */
  @media (min-width: 1000px) {
    display: grid;
    /* TODO: I don't like this 350px dependency, is there any "fill"/"auto" opposite word? */
    grid-template-columns: auto max(auto, 350px) auto;
    grid-template-rows: 50% 50%;
    column-gap: 33px;

    .card-left {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 3;
      justify-self: end;
      align-self: center;
    }
    .card-above {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
      justify-self: center;
    }
    .card-down {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
      justify-self: center;
    }
    .card-right {
      grid-column-start: 3;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
      justify-self: start;
      align-self: center;
    }
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
        {/* {cards && cards.map((card) => <Card key={card.title} card={card} />)} */}

        <div className="card-left">
          <Card key={cards[0].title} card={cards[0]} />
        </div>
        <div className="card-above">
          <Card key={cards[1].title} card={cards[1]} />
        </div>
        <div className="card-down">
          <Card key={cards[2].title} card={cards[2]} />
        </div>
        <div className="card-right">
          <Card key={cards[3].title} card={cards[3]} />
        </div>
      </S.CardsSection>
    </S.Section>
  );
};

export default CardsSection;
