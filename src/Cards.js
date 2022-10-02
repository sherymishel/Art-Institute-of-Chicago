import Card from "./Card";
import Grid from "@mui/material/Grid";
import React from "react";
import { logDOM } from "@testing-library/dom";

export default function Cards({ results }) {
  const [arr, setArr] = React.useState([]);
  const [cardsLoaded, setCardsLoaded] = React.useState(0);

  const renderCardsOrMessage = (data) => {
    if (!data) {
      return "No results";
    }
    return data.map((el) => {
      return (
        <Card
          setArr={setArr}
          arr={arr}
          setCardsLoaded={setCardsLoaded}
          key={el.image_id !== null ? el.image_id : el.id}
          data={el}
        />
      );
    });
  };
  return <div className="cards">{renderCardsOrMessage(results.data)}</div>;
}
