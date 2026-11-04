import React from "react";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import { getPopularMovies } from "../api/tmdb-api";

const PopularPage = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["popular"],
    queryFn: getPopularMovies,
  });

  if (isLoading) {
        return <Spinner />;
      }
    
      if (isError) {
        return <h1>{error.message}</h1>;
      }

  return (
    <PageTemplate
      title="Popular Movies"
      movies={data.results}
      action={(movie) => <></>}
    />
  );
};

export default PopularPage;