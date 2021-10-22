import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  readonly APIURL = 'http://localhost:49347/api';
  constructor( private http: HttpClient) {
  }
  create(val: any) {
    return this.http.post(this.APIURL + '/Message', val);
  }
  getAllMessage(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/Message');
  }
  updateMessage(val: any) {
    return this.http.put(this.APIURL + '/Message/', val);
  }
  removeMessage(id) {
    return this.http.delete(this.APIURL + '/Message/' + id).toPromise();
  }
}
