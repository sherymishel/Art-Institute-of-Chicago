import React from "react"
import {Link} from 'react-router-dom'


export default function Card({data, typeOfUrl}) {
  //console.log(data)
  let dat = data
  let url = `https://www.artic.edu/iiif/2/${data.image_id}/full/400,/0/default.jpg`
  // let history = useHistory();
  
    return (
      <Link to='/about'>
      <div className="card" style={{background: `linear-gradient(rgba(255, 255, 255, 0) 150px,white), url('${url}') no-repeat`}}>
      
      <h2>{ dat ? dat.title : '' }</h2>
     <span>{ dat ? dat.date_display : '' }</span>
     <p>{ dat ? dat.artist_title : '' }</p>
     
     </div>
     </Link>
    )

}