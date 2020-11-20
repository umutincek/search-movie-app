import { SearchMovie } from './../actions/movie.actions';
import { Store, Select } from '@ngxs/store';
import { MovieState } from './../state/movie.state';
import { Movie } from './../models/movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'MOVIE SEARCH APP';
  movies$ = this.store.select(state => state.movies.movies.Search);

  constructor(private store: Store) { }

  search(item) {
    this.store.dispatch(new SearchMovie({query: item}));
  }

}
