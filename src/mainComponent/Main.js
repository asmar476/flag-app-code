import React from "react";
import Cards from "../screens/Cards";
import Navbar from "../screens/Navbar";
import Searchbar from "../screens/Searchbar";
function Main() {
  return (
    <div className="Main">
       <Navbar />
       <Searchbar />
       <Cards />
    </div>
  );
}

export default Main;