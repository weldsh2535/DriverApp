import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  readonly APIURL = 'http://localhost:49347/api';
  constructor( private http: HttpClient) {
  }
  create(val: any) {
    return this.http.post(this.APIURL + '/UserRole', val);
  }
  getAllUserRole(): Observable<any[]> {
    return this.http.get<any>(this.APIURL + '/UserRole');
  }
  updateUserRole(val: any) {
    return this.http.put(this.APIURL + '/UserRole/', val);
  }
  deleteUserRole(id) {
    return this.http.delete(this.APIURL + '/UserRole/' + id).toPromise();
  }

  getUerRoleId(userId: string) {
    return this.http.get<any>(this.APIURL + '/UserRole/' + userId);
  }
}
// import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/internal/operators/map';
// import { userRole } from 'src/Table/table';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserRoleService {

//   private userRoleCollectionList: AngularFirestoreCollection<any>;
//   private userRoleList: Observable<userRole[]>;
//   userRoleLists: Observable<{ id: string; funId: string; userId: string; remark: string; }[]>;
//   // db: any;
//   constructor(private db: AngularFirestore) {
//     this.userRoleCollectionList = db.collection<userRole>('userRole');

//    }

//    create(userR) {
//     return this.userRoleCollectionList.add(userR);
//   }
//   getAllUserRole(){
//     this.userRoleList = this.userRoleCollectionList.snapshotChanges().pipe(
//       map(actions => {
//         return actions.map(a => {
//           const data = a.payload.doc.data();
//           const id = a.payload.doc.id;
//           return { id, ...data };
//         });
//       })
//     );
//     return this.userRoleList;
//   }
//   getUerRoleId(id: string) {
//     const lookUpObj = this.db.collection('userRole', ref => ref.where('userId', '==', id)).snapshotChanges();
//     this.userRoleLists = lookUpObj.pipe(
//       map(changes => changes.map(a => {
//         const data = a.payload.doc.data() as userRole;
//         const id = a.payload.doc.id;
//         return { id, ...data };
//       }))
//     );
//     return this.userRoleLists;
//   }

//   deleteUserRole(id) {
//     return this.userRoleCollectionList.doc(id).delete();
//   }
// }
