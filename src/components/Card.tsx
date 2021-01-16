//rsc
import React from "react";
import styled from "@emotion/styled";

// import iconCalculator from "../images/icon-calculator.svg";
// import iconkarma from "../images/icon-karma.svg";
// import iconSupervisor from "../images/icon-supervisor.svg";
// import iconTeamBuilder from "../images/icon-team-builder.svg";

const S: any = {};

S.Card = styled.section`
  max-width: 311px;
  height: 222px;
  background-color: #ffffff;
  border-radius: 8px;

  border-top: ${(props) => `3px solid ${props.color}`};
  /* box-shadow: 10px 0px 2px 2px red; */
  margin-bottom: 27px;
  padding: 27px;
  position: relative;

  box-shadow: 0px 15px 30px -11px rgba(131, 166, 210, 0.5);

  @media (min-width: 376px) {
    max-width: 350px;
    height: 250px;
    margin-bottom: 33px;
  }

  .title {
    font-size: 20px;
    line-height: 30px;
    font-weight: 600;
  }

  .description {
    font-weight: 200;
    font-size: 13px;
    line-height: 23px;
    padding-top: 3px;
  }

  .caption {
    position: absolute;
    bottom: 27px;
    right: 27px;
  }
`;

interface iCard {
  title: string;
  description: string;
  caption: string;
  color: string;
  altText?: string;
}

interface iCardProps {
  card: iCard;
}

const Card: React.FC<iCardProps> = ({ card }: { card: iCard }) => {
  // const [icon, setIcon] = React.useState<any>(null);

  // React.useEffect(() => {
  //   const getIcon = async () => {
  //     const icon = await import("../images/icon-calculator.svg");
  //     console.log("icon:", typeof iconCalculator);
  //     setIcon(icon);
  //   };
  //   getIcon();
  // }, []);
  return (
    <S.Card color={card.color}>
      <h2 className="title">{card.title}</h2>
      <p className="description">{card.description}</p>
      {/* {icon && <img src={icon} alt="" />} */}
      <img className="caption" src={card.caption} alt={card.altText} />
    </S.Card>
  );
};

export default Card;
