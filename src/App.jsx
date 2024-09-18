import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Carousel from "./Components/Carousel/CarouselEffect";
import Category from "./Components/Category/Category";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Carousel />
      <Category />
    </>
  );
}

export default App;
