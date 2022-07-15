import React from "react"
import { DataContext } from "../App"

const About = () => {
    const {cardImage} = React.useContext(DataContext)
    const {cardId} = React.useContext(DataContext)
    const [data, setData] = React.useState(null)
    
    if (cardId && cardImage) {
        localStorage.setItem('picture', cardImage)
        localStorage.setItem('id', cardId)
    }

    React.useEffect(()=> {
        let url = `https://api.artic.edu/api/v1/artworks/${localStorage.getItem('id')}`
        getInfo(url)
    }, [cardId])
    

    async function getInfo(url) {
        const res = await fetch(url);
        const data = await res.json();
        setData(data.data)
        console.log(data)
      }

    return (
        <div>
            <img src = {localStorage.getItem('picture')}/>
            <h1>{data && data.title}</h1>
            <p>Artist: {data && data.artist_title}</p>
            <p>Date: {data && data.date_display}</p>
            <p>Artwork type: {data && data.artwork_type_title}</p>
            <p>Department title: {data && data.department_title}</p>
        </div>
    )
}

export default About


    // const {cardData} = React.useContext(DataContext)
    // const {cardImage} = React.useContext(DataContext)
    // localStorage.setItem('img', cardImage)
    // localStorage.setItem('title', cardData.title)
    // localStorage.setItem('artist', cardData.artist_title)
    // localStorage.setItem('date', cardData.date_display)
    // localStorage.setItem('type', cardData.artwork_type_title)
    // localStorage.setItem('department', cardData.department_title)
    // let img_url = localStorage.getItem('img')
    // let title = localStorage.getItem('title')
    // let artist = localStorage.getItem('artist')
    // let date = localStorage.getItem('date')
    // let art_type = localStorage.getItem('type')
    // let department = localStorage.getItem('department')