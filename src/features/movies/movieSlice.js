import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
    const response = await movieApi.get(`movie?api_key=${APIKey}`);
    return response.data.results;
});

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async () => {
    const response = await movieApi.get(`tv?api_key=${APIKey}`);
    return response.data.results;
});

const initialState = {
    movies: [],
    shows: []
};

const movieSlice = createSlice({ 
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, movies: payload };
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, shows: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected!");
        }
    },
})

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;

