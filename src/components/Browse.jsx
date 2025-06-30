import React, { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainCOntainer from "./MainCOntainer";
import SecondaryContainer from "./SecondaryContainer";

function Browse() {
  useNowPlayingMovies();
  return <div>
    <MainCOntainer/>
    <SecondaryContainer/>
  </div>;
}

export default Browse;
