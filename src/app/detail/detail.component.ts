import { GetDetail } from './../actions/movie.actions';
import { MovieState } from './../state/movie.state';
import { Movie } from './../models/movie.model';
import { Store, Select } from '@ngxs/store';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details$ = this.store.select(state => state.movies.detailMovie);
  isLoading = false;

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.isLoading = true;
  }
  ngAfterViewInit() {
    this.activatedRoute.params.subscribe(params => {
      this.store.dispatch(new GetDetail({query: params["id"]}));
      this.isLoading = false;
    });
  }

  ngOnDestroy() {

  }

}
