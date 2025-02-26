import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private apiUrl = 'https://gateway.marvel.com/v1/public';
  private apiKey = '147d17edae3f38746e6884c46587a92c';
  private hash = '9464129506c86e8d78fc9f97d7694e87';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error.message);
    return throwError(() => new Error('Algo salió mal. Por favor, inténtalo de nuevo más tarde.'));
  }

  getCharacters(): Observable<any> {
    const url = `${this.apiUrl}/characters?apikey=${this.apiKey}&hash=${this.hash}&ts=1`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  getCharacterById(id: string): Observable<any> {
    const url = `${this.apiUrl}/characters/${id}?apikey=${this.apiKey}&hash=${this.hash}&ts=1`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
}