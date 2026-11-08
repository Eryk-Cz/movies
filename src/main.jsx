import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router";
import HomePage from "./pages/homePage";
import UpcomingPage from "./pages/upcomingPage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PopularPage from "./pages/popularPage";
import TopRatedPage from "./pages/topRatedPage";
import NowPlayingPage from "./pages/nowPlayingPage";
import CreditsPage from "./pages/creditsPage";
import RecommendationsPage from "./pages/recommendationsPage";
import SimilarPage from "./pages/similarPage";
import PlaylistPage from "./pages/playlistPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

//My Assignment Addition 
const theme = createTheme({
  palette: {
    primary: { main: "#ff0101ef" },
    secondary: { main: "#11ece1" },
    background: { default: "#c3d172" },
  },
  shape: { borderRadius: 12 },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <MoviesContextProvider>
        <SiteHeader />
          <Routes>
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/movies/upcoming" element={<UpcomingPage />} />
            <Route path="/movies/popular" element={<PopularPage />} />
            <Route path="/movies/top_rated" element={<TopRatedPage />} />
            <Route path="/movies/now_playing" element={<NowPlayingPage />} />
            <Route path="/movies/:id/credits" element={<CreditsPage />} />
            <Route path="/movies/:id/recommendations" element={<RecommendationsPage />} />
            <Route path="/movies/:id/similar" element={<SimilarPage />} />
            <Route path="/movies/playlist" element={<PlaylistPage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
