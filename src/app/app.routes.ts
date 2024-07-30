import { Routes } from '@angular/router';
import {MoviesComponent} from "../pages/movies/movies.component";
import {LandingComponent} from "../pages/landing/landing.component";

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'movies', component: MoviesComponent }
];
