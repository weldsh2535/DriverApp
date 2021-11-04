import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Order, Restaurant } from 'src/Table/table';
import { AccountService } from '../Service/account.service';
import { OrderService } from '../Service/order.service';
import { RestaurantService } from '../Service/restaurant.service';

@Component({
  selector: 'app-driver-history',
  templateUrl: './driver-history.page.html',
  styleUrls: ['./driver-history.page.scss'],
})
export class DriverHistoryPage implements OnInit {
  listOfOrder: any[] = [];
  listOfRestaurant: Restaurant[];
  message: string;
  massge: boolean;
  // currentDate: string;
  currentMonth: number;
  currentYear: number;
  currentDate: number;
  currentWeek: number;
  //to decare week calculate
  startdateofweek: any;
  Enddateofweek: any;
  model: any = {};
  date = new Date()
  name: string;
  Friday: any;
  Thruds: any;
  mon: any;
  Tuesday: any;
  Wednedday: any;
  Sat: any;
  Sun: any;
  orderMonth: number;
  orderYear: number;
  orderDate: number;
  startMonth: number;
  startYear: number;
  startDate: number;
  endMonth: number;
  endYear: number;
  endDate: number;
  increament: number;
  constructor(private orderService: OrderService,
    private accountService: AccountService,
    private restaurantService: RestaurantService,
    public datepipe: DatePipe) {
    //this.currentDate = new Date().toDateString();
    this.currentMonth = new Date().getMonth() + 1;
    this.currentYear = new Date().getFullYear();
    this.currentDate = new Date().getDate();
    console.log(this.currentDate);
    console.log(this.currentMonth);
    console.log(this.currentYear);
    console.log(new Date().getDay());
    this.restaurantService.getAllRestaurant().subscribe(res => {
      this.listOfRestaurant = res;
    })
  }

  ngOnInit() {
    this.model.startdate = new Date();
   // debugger;
    this.getOrderByDriverId();
    this.getRestaurant();
    this.searchdate();
  }
  searchdate() {
    //debugger;
    console.log(this.model.startdate);
    let getdate = this.datepipe.transform(this.model.startdate, 'yyyy,M,d');
    function startOfWeek(date) {
      var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
      return new Date(date.setDate(diff));
    }
    function endofweek(date) {
      var lastday = date.getDate() - (date.getDay() - 1) + 6;
      return new Date(date.setDate(lastday));
    }
    var dt = new Date(getdate);
    this.startdateofweek = this.datepipe.transform(startOfWeek(dt));
    //convertion of currentStartDate
    this.startMonth = new Date(this.startdateofweek).getMonth() + 1;
    this.startYear = new Date(this.startdateofweek).getFullYear();
    this.startDate = new Date(this.startdateofweek).getDate();
    console.log(this.startdateofweek)
    this.Enddateofweek = this.datepipe.transform(endofweek(dt));
    //convertion of currentEndDate
    this.endMonth = new Date(this.Enddateofweek).getMonth() + 1;
    this.endYear = new Date(this.Enddateofweek).getFullYear();
    this.endDate = new Date(this.Enddateofweek).getDate();
    console.log(this.Enddateofweek)
    function addDays(date, days) {
      const find = new Date(Number(date))
      find.setDate(date.getDate() + days)
      return find
    }
    const date = new Date(startOfWeek(dt));
    this.mon = this.datepipe.transform(startOfWeek(dt), 'EEEE, MMMM d');
    this.Tuesday = this.datepipe.transform(addDays(date, 1), 'EEEE, MMMM d');
    this.Wednedday = this.datepipe.transform(addDays(date, 2), 'EEEE, MMMM d');
    this.Thruds = this.datepipe.transform(addDays(date, 3), 'EEEE, MMMM d');
    this.Friday = this.datepipe.transform(addDays(date, 4), 'EEEE, MMMM d');
    this.Sat = this.datepipe.transform(addDays(date, 5), 'EEEE, MMMM d');
    this.Sun = this.datepipe.transform(endofweek(dt), 'EEEE, MMMM d');
  }
  getRestaurant() {
    this.restaurantService.getAllRestaurant().subscribe(res => {
      this.listOfRestaurant = res;
    })
  }
  getOrderByDriverId() {
    this.listOfOrder = [];
    let userId = localStorage.getItem("userId");
    this.orderService.getAllOrder().subscribe(result => {
      let res = result.filter(c => c.driver == userId);
      if (res.length > 0) {
        let order = res.filter(c => c.orderStatuses.find(c => c.isChecked == true && c.val == "delivered"))
        if (order.length > 0 && this.listOfRestaurant != undefined) {
          order.forEach(element => {
            this.accountService.getAllAccount().subscribe(result => {
              let restaurant = this.listOfRestaurant.find(c => c.id == element.restaurantId)
              let data = {
                id: element.id,
                restaurantName: restaurant.name,
                DateTime: element.dateTime,
                Customer: result.find(c => c.id == element.customer).fullName,
                PhoneNumber: result.find(c => c.id == element.customer).phonenumber,
                CLocation: result.find(c => c.id == element.customer).location,
                RLocation: element.location,
                OrderStatus: element.orderStatuses,
                Total: element.total,
                Driver: element.driver,
                Vehicle: element.vehicle,
                orderLocation: element.orderLocation,
                restaurantStatus: element.restaurantStatuses
              }
              this.listOfOrder.push(data);
              this.listOfOrder.sort((a, b) => new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime());
              // console.log(this.listOfOrder)
            });
          });
        }
        else {
          this.getRefresh();
        }
      }
      else {
        this.massge = true
        this.message = "no order history"
      }
    });
  }
  getRefresh() {
    setTimeout(() => {
      this.getOrderByDriverId();
    }, 200);
  }
  // Dummy refresher function
  doRefresh(event) {
    setTimeout(() => {
      this.getOrderByDriverId();
      event.target.complete();
    }, 2000);
  }
  segmentChanged(ev: any) {
    // console.log('Segment changed', ev.detail.value);
    if (ev.detail.value == "daily") {
      this.scheduleOrder(this.currentDate, "daily");
    }
    else if (ev.detail.value == "week") {
      this.scheduleOrder(this.currentWeek, "week");
    }
    else if (ev.detail.value == "month") {
      this.scheduleOrder(this.currentMonth, "month");
    }
    else if (ev.detail.value == "year") {
      this.scheduleOrder(this.currentYear, "year");
    }
  }
  scheduleOrder(date, event) {
    this.listOfOrder = [];
    let userId = localStorage.getItem("userId");
    this.orderService.getAllOrder().subscribe(result => {
      let res = result.filter(c => c.driver == userId);
      if (res.length > 0) {
        let order = res.filter(c => c.orderStatuses.find(c => c.isChecked == true && c.val == "delivered"))
        if (order.length > 0 && this.listOfRestaurant != undefined) {
          order.forEach(element => {
            this.accountService.getAllAccount().subscribe(result => {
              let restaurant = this.listOfRestaurant.find(c => c.id == element.restaurantId)
              let data = {
                id: element.id,
                restaurantName: restaurant.name,
                DateTime: element.dateTime,
                Customer: result.find(c => c.id == element.customer).fullName,
                PhoneNumber: result.find(c => c.id == element.customer).phonenumber,
                CLocation: result.find(c => c.id == element.customer).location,
                RLocation: element.location,
                OrderStatus: element.orderStatuses,
                Total: element.total,
                Driver: element.driver,
                Vehicle: element.vehicle,
                orderLocation: element.orderLocation,
                restaurantStatus: element.restaurantStatuses
              }
              const dateOfOrders = new Date(element.dateTime).getDate();
              // to calculate week convertion
              this.orderMonth = new Date(element.dateTime).getMonth() + 1;
              this.orderYear = new Date(element.dateTime).getFullYear();
              this.orderDate = new Date(element.dateTime).getDate();
              const monthlyOrders = new Date(element.dateTime).getMonth() + 1;
              const yearlyOrdes = new Date(element.dateTime).getFullYear();
              //  console.log("date  =="+dateOfOrders + "month==" +monthlyOrders +"year=="+yearlyOrdes);
              if (event == "daily") {
                this.increament = 0;
                if (date == dateOfOrders) {
                  this.increament = this.increament+1;
                  this.listOfOrder.push(data);
                  this.listOfOrder.sort((a, b) => new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime());
                }
                if(this.increament == 0){
                  this.massge = true
                  this.message = "no orders in this daily"
                }
                else{
                  this.massge = false
                }
              }
              else if (event == "week") {
                this.increament = 0;
                if (this.startDate <= this.orderDate && this.startMonth == this.orderMonth && this.startYear == this.orderYear
                  && this.endDate>=this.orderDate && this.endMonth == this.orderMonth && this.endYear == this.orderYear){
                  this.increament = this.increament+1;
                  this.listOfOrder.push(data);
                  this.listOfOrder.sort((a, b) => new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime());
                }
                if(this.increament == 0){
                  this.massge = true
                  this.message = "no orders in this week"
                }
                else{
                  this.massge = false
                }
              }
              else if (event == "month") {
                this.increament = 0;
                if (date == monthlyOrders) {
                  this.increament = this.increament+1;
                  this.listOfOrder.push(data);
                  this.listOfOrder.sort((a, b) => new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime());
                }
                if(this.increament == 0){
                  this.massge = true
                  this.message = "no orders in this month"
                }
                else{
                  this.massge = false
                }
              }
              else if (event == "year") {
                this.increament = 0;
                if (date == yearlyOrdes) {
                  this.increament = this.increament+1;
                  this.listOfOrder.push(data);
                  this.listOfOrder.sort((a, b) => new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime());
                }
                if(this.increament == 0){
                  this.massge = true
                  this.message = "no orders in this year"
                }
                else{
                  this.massge = false
                }
              }
            });
          });
        }
        else {
          this.getRefresh();
        }
      }
      else {
        this.massge = true
        this.message = "no order history"
      }
    });
  }
}
