import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
export abstract class AbstractApiService<T> {

  constructor(private _http: HttpClient) { }

  protected get(url: string, params?: HttpParams | { [ param: string ]: string | string[]}): Observable<T> {
    const httpOptions = {
      'params': params
    };
    return this._http.get<T>(url, httpOptions)
    .pipe(
      catchError(this.handleException)
    );
  }

  protected getAll(url: string): Observable<T[]> {
    return this._http.get<T[]>(url, HTTP_OPTIONS)
    .pipe(
      catchError(this.handleException)
    );
  }

   /**
  * manejo de excepciones 404.
  * @param error
  */
 protected handleException(error: HttpErrorResponse) {
  if (error.status === 404 || error.status === 500) {
    return of(null);
  }
  throw error;
}
}
