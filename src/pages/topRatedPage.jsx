import React from "react";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import { getTopRatedMovies } from "../api/tmdb-api";

const TopRatedPage = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["topRated"],
    queryFn: getTopRatedMovies,
  });

  if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={data.results}
      action={(movie) => <></>}
    />
  );
};

export default TopRatedPage;