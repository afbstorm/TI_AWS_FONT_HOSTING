import { Component } from '@angular/core';
import {MatDialog, MatDialogContent} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {MoviesService} from "../../services/movies.service";
import {MovieModalComponent} from "../movie-modal/movie-modal.component";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    MatDialogContent,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatList,
    MatListItem,
    MatLabel
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies: any[] = [];

  constructor(private dialog: MatDialog, private moviesService: MoviesService) {
    this.loadMovies();
  }

  loadMovies() {
    this.moviesService.getMovies().subscribe((data: any[]) => {
      this.movies = data;
    });
  }

  openMovieModal(movie: any) {
    const dialogRef = this.dialog.open(MovieModalComponent, {
      data: movie
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadMovies();
      }
    });
  }
}
