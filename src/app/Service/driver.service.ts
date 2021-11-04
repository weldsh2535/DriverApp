import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  readonly APIURL = environment.apiURL;
  constructor( private http: HttpClient) {
  }
  create(val: any) {
    return this.http.post(this.APIURL + '/Driver', val);
  }
  getAllDriver(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/Driver');
  }
  updateDriver(val: any) {
    return this.http.put(this.APIURL + '/Driver/', val);
  }
  removeDriver(id) {
    return this.http.delete(this.APIURL + '/Driver/' + id).toPromise();
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }

    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }

    return Observable.throw(new AppError(error));
  }
}
