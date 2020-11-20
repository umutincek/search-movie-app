import { MovieStateModel } from './movie.state';
import { MovieServiceService } from './../movie-service.service';
import { SearchMovie, GetDetail } from './../actions/movie.actions';
import { Movie } from './../models/movie.model';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export class MovieStateModel {
  movies: Movie[];
  detailMovie: Movie[];
}

@State<MovieStateModel>({
  name: 'movies',
  defaults: {
    movies: [],
    detailMovie: []
  }
})
@Injectable()
export class MovieState {
  constructor(private movieService: MovieServiceService) {
  }

  @Selector()
  static getMovies(state: MovieStateModel) {
    return state.movies;
  }
  @Selector()
  static getDetail(state: MovieStateModel) {
    return state.detailMovie;
  }

  @Action(SearchMovie)
  searchMovie({getState, setState}: StateContext<MovieStateModel>, {payload}: SearchMovie) {
    return this.movieService.searchMovie(payload).pipe(tap((result) => {
      const state = getState();
      setState({
        ...state,
        movies: result
      });
    }));
  };
  @Action(GetDetail)
  getDetail({getState, setState}: StateContext<MovieStateModel>, {payload}: GetDetail) {
    return this.movieService.getDetail(payload).pipe(tap((result) => {
      const state = getState();
      if(state.detailMovie.length > 0) {
        state.detailMovie.splice(0,1);
      }
      state.detailMovie.push(result);
    }));
  }
}
