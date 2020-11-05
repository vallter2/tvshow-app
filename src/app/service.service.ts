import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieModel } from './movies/movies.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { SingleVideoModel } from './single-video/singleVideo.model';
import { ThrowStmt } from '@angular/compiler';
import { Params } from '@angular/router';

@Injectable()
export class Service {
    singleVideoData: SingleVideoModel;
    movies: MovieModel[] = [];
    // moviesData = new Subject<MovieModel[]>();
    keyWord = new Subject<SingleVideoModel>();
    videoData = new BehaviorSubject<MovieModel[]>(this.movies);
    constructor(private http: HttpClient) { }

    topMovies(show: string): void {
        const api = 'https://api.themoviedb.org/3/' + show + '/top_rated?api_key=0faa38712671d829d45de7da3d172fee';
        this.http.get<{ page: number, results: MovieModel[], total_results: number, total_pages: number }>(api)
            .subscribe(resp => {
                console.log(resp.page);
                console.log(resp.results);
                console.log(resp.total_results);
                console.log(resp.total_pages);
                this.movies = resp.results.slice(0, -10);
                this.videoData.next(this.movies);
            });
    }

    search(query: string, show: string): void {
        // this.keyWord.next(query);
        if (query.length < 3) {
            this.topMovies(show);
            return;
        }
        const api = 'https://api.themoviedb.org/3/search/' + show + '?api_key=0faa38712671d829d45de7da3d172fee&query=';
        this.http.get<{ page: number, results, total_results: number, total_pages: number }>(api + query)
            .subscribe(resp => {
                this.movies = resp.results;
                this.videoData.next(this.movies);
            });
    }

    singleVideo(show: string, id: Params): void {
        const api = 'https://api.themoviedb.org/3/' + show + '/' + id + '?api_key=0faa38712671d829d45de7da3d172fee&language=en-US';
        this.http.get<{
            id: number, original_title: string, overview: string, poster_path: string,
            release_date: string, runtime: number, name: string, number_of_episodes: number, number_of_seasons: number
        }>(api)
            .subscribe(resp => {
                this.singleVideoData = {
                    id: resp.id,
                    original_title: resp.original_title,
                    overview: resp.overview,
                    poster_path: resp.poster_path,
                    release_date: resp.release_date,
                    runtime: resp.runtime,
                    name: resp.name,
                    number_of_episodes: resp.number_of_episodes,
                    number_of_seasons: resp.number_of_seasons
                }
                this.keyWord.next(this.singleVideoData);
            });
    }
}

