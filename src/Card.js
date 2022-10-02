import React, { useCallback } from "react";
import Button from "./Buttons";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./App";
import LinearBuffer from "./Spinner";
import { red } from "@mui/material/colors";

export default function Card({ data, setCardsLoaded, arr, setArr }) {
  // console.log(data);
  const { setCardImage, setCardId } = React.useContext(DataContext);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [visibility, setVisibility] = React.useState("");
  const [overlay, setOverlay] = React.useState("card_overlay");
  const { cardsReload, setCardsReload } = React.useContext(DataContext);
  let image = new Image();
  let navigate = useNavigate();

  image.src = `https://www.artic.edu/iiif/2/${data.image_id}/full/400,/0/default.jpg`;
  const h = useCallback(async () => {
    console.log("hiiiii");
    const im = await fetch(image.src);
    if (im.status == 200) {
      console.log("okkk");
    }
    if (im.status == 404) {
      console.log("neok");
      setOverlay("card_error");
      setCardsReload("reload");
    }
  }, [image.src]);

  React.useEffect(() => {
    h();
  }, []);

  image.onload = () => {
    setIsLoaded(true);
    setVisibility("transparent");
    setOverlay("card_overlay_animation");
  };
  React.useEffect(() => {
    if (isLoaded) {
      setCardsLoaded((prev) => prev + 1);
      setArr((prev) => [...prev, image.src]);
    }
  }, [isLoaded]);

  const clicked = () => {
    setCardImage(image.src);
    setCardId(data.id);
    navigate("/about");
  };
  return (
    <div
      className="card"
      style={{
        background: isLoaded
          ? `linear-gradient(rgba(255, 255, 255, 0) 100px,white), url(${image.src &&
              image.src}) repeat`
          : null,
      }}
    >
      <div className="card_error">
        no image yet because api wasn't provided with it lol
      </div>
      <div className={overlay}></div>
      <h2>
        {data.title.length > 80 ? data.title.slice(0, 80) + "..." : data.title}
      </h2>
      <span>{data.date_display}</span>
      <p>{data.artist_title}</p>
      <Button
        onClick={clicked}
        size="small"
        variant="outlined"
        buttonName="Learn more"
      />
    </div>
  );
}
