import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { SingleVideoComponent } from './single-video/single-video.component';
import { TvshowsComponent } from './tvshows/tvshows.component';


const routes: Routes = [
    { path: '', redirectTo: '/tv',  pathMatch: 'full' },
    { path: 'tv', component: TvshowsComponent },
    { path: 'tv/:id', component: SingleVideoComponent },
    { path: 'movie', component: MoviesComponent },
    { path: 'movie/:id', component: SingleVideoComponent },
    { path: '**', redirectTo: '/tv'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }