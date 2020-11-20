import { Movie } from './../models/movie.model';

export class SearchMovie {
  static readonly type = '[MOVIE] Search';
  constructor(public payload: Movie) {}
}
export class GetDetail {
  static readonly type = '[MOVIE] Get Detail';
  constructor(public payload: Movie) {}
}
