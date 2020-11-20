import { Movie } from './models/movie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }

  searchMovie(payload: Movie) {
    return this.http.get<Movie>(`http://www.omdbapi.com/?apikey=506a74a5&type=movie&r=json&s=${payload.query}`);
  }
  getDetail(payload: Movie) {
    return this.http.get<Movie>(`http://www.omdbapi.com/?apikey=506a74a5&type=movie&r=json&i=${payload.query}`)
  }
}
