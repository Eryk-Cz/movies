import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import { getSimilarMovies } from "../api/tmdb-api";

const SimilarPage = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["similar", { id }],
    queryFn: getSimilarMovies,
  });

  if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }

  return (
    <PageTemplate
      title="Similar Movies"
      movies={data.results}
      action={(movie) => <></>}
    />
  );
};

export default SimilarPage;