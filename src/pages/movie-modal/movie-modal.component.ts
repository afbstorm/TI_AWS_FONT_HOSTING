import {Component, Inject} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-movie-modal',
  standalone: true,
  imports: [
    MatDialogContent,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    MatLabel,
    MatDialogTitle,
    MatDialogActions
  ],
  templateUrl: './movie-modal.component.html',
  styleUrl: './movie-modal.component.css'
})
export class MovieModalComponent {
  movieForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MovieModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private moviesService: MoviesService
  ) {
    this.movieForm = this.fb.group({
      title: [data.title],
      description: [data.description],
      distribution: [data.distribution],
      genres: [data.genres],
      duration: [data.duration]
    });
  }

  // updateMovie() {
  //   if (this.movieForm.valid) {
  //     const updatedMovie = { ...this.data, ...this.movieForm.value };
  //     this.moviesService.updateMovie(updatedMovie).subscribe(() => {
  //       this.dialogRef.close(updatedMovie);
  //     });
  //   }
  // }

  close() {
    this.dialogRef.close();
  }
}
