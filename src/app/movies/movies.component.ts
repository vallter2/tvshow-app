import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Service } from '../service.service';
import { MovieModel } from './movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies: MovieModel[] = [];
  unSub: Subscription;
  constructor(private service: Service) { }

  ngOnInit(): void {
      this.unSub = this.service.videoData.subscribe(resp => {
      this.movies = resp;
    });
  }
  ngOnDestroy(): void {
    this.unSub.unsubscribe();
  }
}
