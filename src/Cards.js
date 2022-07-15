import Card from "./Card"
import Grid from '@mui/material/Grid';
import React from "react";
import { logDOM } from "@testing-library/dom";

export default function Cards({results, typeOfUrl}) {
  let display
  let arts = results.data
  const [cardsLoaded, setCardsLoaded] = React.useState(0)
  
  if (arts) {
    if (arts.length != 0) {
    console.log(arts, 'arersults')
    function dis() {
      display = arts.map((el) => {
        
        return(
          <Card key={el.image_id} cardsLoaded={setCardsLoaded} data={el} typeOfUrl={typeOfUrl}></Card>
        )

      })
    }
    dis()
  }
  else {
    display = 'no results'
    console.log(arts, 'no results');
  }
}
  else {
    display = 'no results'
    console.log(arts, 'no results');
  }
  return(
    <div className="cards" onLoad={console.log('yefw')}>
      {display}
    </div>
  )
}