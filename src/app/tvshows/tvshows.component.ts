import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieModel } from '../movies/movies.model';
import { Service } from '../service.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit, OnDestroy {
  tvShows: MovieModel[];
  unSub: Subscription;
  constructor(private service: Service, private router: Router) { }


  ngOnInit(): void {
    // this.service.topMovies('tv');
    this.unSub = this.service.videoData.subscribe(resp => {
      this.tvShows = resp;
    });
  }
  ngOnDestroy(): void {
    this.unSub.unsubscribe();
  }
}
