import React from "react"
import Button from "./Buttons"
import { useNavigate } from "react-router-dom"
import { DataContext } from "./App"

export default function Card({data}) {
  // const {setCardData} = React.useContext(DataContext)
  // const {setCardData} = React.useContext(DataContext)
  const {setCardImage} = React.useContext(DataContext)
  const {setCardId} = React.useContext(DataContext)
  let navigate = useNavigate()
  let dat = data
  let url = `https://www.artic.edu/iiif/2/${dat.image_id}/full/400,/0/default.jpg`
  const clicked = () => {
    // setCardData(dat)
    setCardImage(url)
    setCardId(dat.id)
    navigate("/about")
  }
  
    return (
       <div className="card" style={{background: `linear-gradient(rgba(255, 255, 255, 0) 100px,white), url('${url}') no-repeat`}}>
      <h2>{ dat.title }</h2>
     <span>{ dat.date_display }</span>
     <p>{ dat.artist_title }</p>
    <Button onClick={clicked} size="small" variant="outlined" buttonName="Learn more"/>
     </div>
    )

}