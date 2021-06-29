import {
  GET_GENRES_ERROR,
  GET_GENRES_SUCCESS,
  GET_GENRES_REQUESTED,
  GET_FILTERED_MOVIES_REQUESTED,
  GET_FILTERED_MOVIES_ERROR,
  GET_FILTERED_MOVIES_SUCCESS,
  GET_TOTAL_PAGES,
} from './actions';

export const initialMoviesState = {
  genres: {
    genresList: [],
    status: null,
    error: null,
  },
  filteredMovies: {
    movies: [],
    status: null,
    error: null,
    totalPages: 0,
  },
  totalPages: 0,
};

enum Status {
  Requested = 'requested',
  Success = 'success',
  Error = 'error',
}

export const movies = (state = initialMoviesState, action: any) => {
  switch (action.type) {
    case GET_GENRES_REQUESTED:
      return {
        ...state,
        genres: {
          genresList: [],
          status: Status.Requested,
          error: null,
        },
      };

    case GET_GENRES_SUCCESS:
      return {
        ...state,
        genres: {
          genresList: action.payload,
          status: Status.Success,
          error: null,
        },
      };

    case GET_GENRES_ERROR:
      return {
        ...state,
        genres: {
          genresList: [],
          status: Status.Error,
          error: action.payload,
        },
      };

    case GET_FILTERED_MOVIES_REQUESTED:
      return {
        ...state,
        filteredMovies: {
          movies: [],
          status: Status.Requested,
          error: null,
        },
      };

    case GET_FILTERED_MOVIES_SUCCESS:
      return {
        ...state,
        filteredMovies: {
          movies: action.payload,
          status: Status.Success,
          error: null,
        },
      };

    case GET_FILTERED_MOVIES_ERROR:
      return {
        ...state,
        filteredMovies: {
          movies: [],
          status: Status.Error,
          error: action.payload,
        },
      };

    case GET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};