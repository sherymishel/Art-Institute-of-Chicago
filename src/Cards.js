import Card from "./Card"
import Grid from '@mui/material/Grid';
import React from "react";

export default function Cards({results, typeOfUrl}) {
  let display
  let arts = results.data
  console.log(results)
  

  if (results) {
    function dis() {
      display = arts.map((el) => {

        return(
          <Card key={el.image_id} data={el} typeOfUrl={typeOfUrl}></Card>
        )

      })
    }
    dis()
  }
  else {
    display = 'no results'
  }
  return(
    <div>
      {display}
    </div>
  )
}