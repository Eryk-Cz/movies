import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import { getMovieRecommendations } from "../api/tmdb-api";

const RecommendationsPage = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["recommendations", { id }],
    queryFn: getMovieRecommendations,
  });

  if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }

  return (
    <PageTemplate
      title="Recommended Movies"
      movies={data.results}
      action={(movie) => <></>}
    />
  );
};

export default RecommendationsPage;