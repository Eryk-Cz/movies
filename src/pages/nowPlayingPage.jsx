import React from "react";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import { getNowPlayingMovies } from "../api/tmdb-api";

const NowPlayingPage = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["nowPlaying"],
    queryFn: getNowPlayingMovies,
  });

  if (isLoading) {
        return <Spinner />;
      }
    
      if (isError) {
        return <h1>{error.message}</h1>;
      }

  return (
    <PageTemplate
      title="Now Playing"
      movies={data.results}
      action={(movie) => <></>}
    />
  );
};

export default NowPlayingPage;