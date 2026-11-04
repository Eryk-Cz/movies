import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Spinner from "../components/spinner";
import { getMovieCredits } from "../api/tmdb-api";

const CreditsPage = () => {
  const { id } = useParams();
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["credits", { id }],
    queryFn: getMovieCredits,
  });

  if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
//Used Typography and list to make the Cast be run down a list showing all the actors and what characters they played
  return (
    <>
      <Typography variant="h4" sx={{ p: 2 }}>
        Cast
      </Typography>
      <List>
        {data.cast.map((person) => (
          <ListItem key={person.credit_id}>
            <ListItemText primary={person.name} secondary={person.character} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CreditsPage;