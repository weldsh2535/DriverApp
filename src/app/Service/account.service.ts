import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Account } from 'src/Table/table';
import { catchError, tap } from 'rxjs/operators';
import { Http, HttpOptions } from '@capacitor-community/http';
import { from } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  readonly APIURL = environment.apiURL;
  constructor(private http: HttpClient
  ) {
  }
  doGet(url) {
    const options: HttpOptions = {
      url
    };
    return from(Http.get(options));
  }
  doPost(url): Observable<any> {
    const options: HttpOptions = {
      url,
      method: 'POST'
    };
    return from(Http.request(options));
  }
  // create(val: any) {
  //   return this.http.post(this.APIURL + '/account', val);
  // }
  create(user: Account): Observable<any> {
    return this.http.post(this.APIURL + '/account', user);
  }
  getAllAccount(): Observable<Account[]> {
    return this.http.get<Account[]>(this.APIURL + '/account')
      .pipe(
        tap(users => console.log('Users retrieved!')),
        catchError(this.handleError<Account[]>('Get user', []))
      );
  }
  updateAccount(val: any) {
    return this.http.put(this.APIURL + '/account', val);
  }
  removeAccount(id) {
    return this.http.delete(this.APIURL + '/account/' + id).toPromise();
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
