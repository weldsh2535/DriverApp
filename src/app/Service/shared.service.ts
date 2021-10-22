import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  restaurant = new BehaviorSubject<any>({});
  status= new BehaviorSubject<any>({});
  location = new BehaviorSubject<any>({});
  orderId = new BehaviorSubject<any> ({});
  RestaurantLocation = new BehaviorSubject<any>({});
  resId = new BehaviorSubject<any>({});
  listOfCatagoryFilter = new BehaviorSubject<any>({});
  deriverId = new BehaviorSubject<any>({});
  customerId = new BehaviorSubject<any>({});
  customerName = new BehaviorSubject<any>({});
  getMenuFilter(){
    return this.listOfCatagoryFilter
  }
  getLocation(){
    return this.location;
  }
  getStatus(){
    return this.status;
  }
  getRestaurantLocation(){
    return this.RestaurantLocation;
  }
  getRestaurantId(){
    return this.resId;
  }
  getDriverId(){
    return this.deriverId;
  }
  getCustomerId(){
    return this.customerId;
  }
  getCustomerName(){
    return this.customerName;
  }
  constructor() { }
}
