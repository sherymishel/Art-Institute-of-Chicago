import { Pagination } from "@mui/material";
import React from "react";
import { DataContext } from "../App";

const About = () => {
  const { cardImage, cardId } = React.useContext(DataContext);
  const [data, setData] = React.useState(null);

  if (cardId && cardImage) {
    localStorage.setItem("picture", cardImage);
    localStorage.setItem("id", cardId);
  }

  React.useEffect(() => {
    let url = `https://api.artic.edu/api/v1/artworks/${localStorage.getItem(
      "id"
    )}`;
    getInfo(url);
  }, [cardId]);

  async function getInfo(url) {
    const res = await fetch(url);
    const data = await res.json();
    setData(data.data);
    console.log(data);
  }

  return (
    <div className="about">
      <img
        className="about_img"
        style={{ maxHeight: "100vh" }}
        src={localStorage.getItem("picture")}
      />
      <div className="about_info">
        <h1 className="about_h1">{data && data.title}</h1>
        <p className="about_artist">Artist: {data && data.artist_title}</p>
        <p className="about_date">Date: {data && data.date_display}</p>
        <p className="about_type">
          Artwork type: {data && data.artwork_type_title}
        </p>
        <p className="about_department">
          Department title: {data && data.department_title}
        </p>
      </div>
    </div>
  );
};

export default About;
