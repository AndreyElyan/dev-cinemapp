export interface IMovieNotParsed {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface IMovieParsed {
  poster: string;
  title: string;
  type: string;
  year: string;
  imdbID: string;
}

export interface IState {
  loading: boolean
  error: null | string;
  list: IMovieParsed[];
}

export interface IActions {
  searchMovies(search: string): void;
}
