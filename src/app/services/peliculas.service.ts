import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { Cast, CreditsResponse } from '../interfaces/credits-response';
import { MovieResponse } from '../interfaces/movie-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private cartereleraPage = 1;
  public cargando = false;

  constructor(private http: HttpClient) { }

  get params(): any {
    return {
      api_key: '928068f00ccc85a768e9a458ca39a49d',
      language: 'es-ES',
      page: this.cartereleraPage.toString()
    };
  }

  getCartelera(): Observable<Movie[]> {

    if (this.cargando) {
      return of([]);
    }

    this.cargando = true;

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`, {
      params: this.params
    }).pipe(
      map((resp) => resp.results),
      tap(() => {
        this.cartereleraPage += 1;
        this.cargando = false;
      })
    );
  }

  buscarPeliculas(value: string): Observable<Movie[]> {

    const params = { ...this.params, page: 1, query: value };
    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`, {
      params
    }).pipe(
      map((resp) => resp.results)
    );

  }

  resetCarteleraPage(): void {
    this.cartereleraPage = 1;
  }

  getPeliculaDetalle(id: string) {
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`, {
      params: this.params
    }).pipe(
      catchError((err) => of(null))
    );
  }

  getCast(id: string): Observable<Cast[]> {
    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits`, {
      params: this.params
    }).pipe(
      map((resp) => resp.cast),
      catchError((err) => of([]))
    );
  }

}
