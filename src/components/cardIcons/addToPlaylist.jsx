import { useContext, useState } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Snackbar from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert";


const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const [open, setOpen] = useState(false);

  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);
    setOpen(true);
  };
  
//Added snackbar and alert mui options
  return (
    <>
    <IconButton aria-label="add to playlist" onClick={handleAddToPlaylist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
    >
      <Alert severity="success" onClose={() => setOpen(false)}>
        Added to playlist
      </Alert>
      </Snackbar>
    </>
  );
};

export default AddToPlaylistIcon;
