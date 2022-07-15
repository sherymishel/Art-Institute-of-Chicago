import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
export const DataContext = React.createContext(null)
function App() {
  
  const [cardImage, setCardImage] = React.useState(null)
  const [cardId, setCardId] = React.useState(null)
  return (
    <DataContext.Provider value = {{cardId, setCardId, cardImage, setCardImage}}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </DataContext.Provider>
  );
}

export default App

