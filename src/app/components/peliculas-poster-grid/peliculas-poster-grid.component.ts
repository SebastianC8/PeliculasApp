import { Input, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies: Movie[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.movies);
  }

  clickMovie(movie: Movie): void {
    this.router.navigate(['/pelicula', movie.id]);
  }

}
