import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export const DataContext = React.createContext(null);
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Raleway", "sans-serif"].join(","),
    },
  });
  const [cardImage, setCardImage] = React.useState(null);
  const [cardId, setCardId] = React.useState(null);
  const [itemsNum, setItemsNum] = React.useState(null);
  const [cardsReload, setCardsReload] = React.useState(null);
  return (
    <ThemeProvider theme={theme}>
      <DataContext.Provider
        value={{
          itemsNum,
          setItemsNum,
          cardId,
          setCardId,
          cardImage,
          setCardImage,
          cardsReload,
          setCardsReload,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </DataContext.Provider>
    </ThemeProvider>
  );
}

export default App;
