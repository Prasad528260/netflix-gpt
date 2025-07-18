import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackgroung from "./VideoBackgroung";

const MainCOntainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (movies == null) {
    return;
  }
  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview,id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackgroung  movieId={id}/>
    </div>
  );
};

export default MainCOntainer;
