import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import LocationPicker from 'location-picker';
import { Account, Driver, Order, OrderDetail, Restaurant } from 'src/Table/table';
import { AccountService } from '../Service/account.service';
import { DriverService } from '../Service/driver.service';
import { FoodService } from '../Service/food.service';
import { OrderDetailService } from '../Service/order-detail.service';
import { OrderService } from '../Service/order.service';
import { RestaurantService } from '../Service/restaurant.service';
import { SharedService } from '../Service/shared.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { IonContent, LoadingController, } from '@ionic/angular';
@Component({
  selector: 'app-driver-home',
  templateUrl: './driver-home.page.html',
  styleUrls: ['./driver-home.page.scss'],
})
export class DriverHomePage implements OnInit {
  id: string;
  listOfFood: any;
  picture: any;
  name: any;
  listOfOrder: any[] = [];
  listOfAccount: Account[];
  listOfOrderDetails: OrderDetail[];
  cart: any[] = [];
  lp: LocationPicker;
  listOfRestaurant: Restaurant[];
  btnDisabled: boolean;
  regform = this.fb.group({});
  listOfAllOrder: Order[];
  defaultStatusIndex: string;
  defaultValue: { val: string; };
  listOfDriver: Driver[];
  selectedIng: Array<any> = [];
  numberOfChecks: number = 1;
  checkBoxLimit: any = 1;
  dayFinished = [];
  checked: boolean;
  driverstatus: any[] = [];
  status: any;
  order: Order[];
  restaurantStatus: any;
  showLocationDetail = false;
  @ViewChild('pageTop') pageTop: IonContent;
  currentDate = new Date().toISOString();
  message: string;
  massge: boolean;
  increment: number = 0;
  loader: HTMLIonLoadingElement;
  showScroll: boolean = false;
  public pageScroller() {
    this.pageTop.scrollToTop();
  }
  constructor(private fb: FormBuilder,
    private foodService: FoodService,
    private orderService: OrderService,
    private accountService: AccountService,
    private orderDetailsService: OrderDetailService,
    private router: Router,
    private sharedService: SharedService,
    private restaurantService: RestaurantService,
    private driverservice: DriverService,
    private callNumber: CallNumber,
    private loadingController: LoadingController
  ) {
    // console.log(new Date(this.currentDate).getDate())
    // console.log(new Date(this.currentDate).getFullYear())
    // console.log(new Date(this.currentDate).getMonth())
    this.currentDate = new Date(this.currentDate).toDateString();
    console.log(this.currentDate);
    this.restaurantService.getAllRestaurant().subscribe(res => {
      this.listOfRestaurant = res;
    });
    this.accountService.getAllAccount().subscribe(res => {
      this.listOfAccount = res;
    });
  }
  async ngOnInit() {
    this.loader = await this.loadingController.create({
      message: 'loading ...',
      spinner: "bubbles",
      animated: true
    });
    await this.loader.present().then();
    this.regform = this.fb.group({
      status: [""],
      currentDate: [""]
    })
    this.getFood();
    this.getOrder();
    this.getAllOrder();
    this.getAccount();
    this.getOrderDetails();
    this.getRestaurant();
    this.getDriver();
    // this.id = this._Activatedroute.snapshot.paramMap.get("id");
    //this.lp = new LocationPicker('map');
  }
  async getDriver() {
    this.driverservice.getAllDriver().subscribe(async res => {
      await this.loader.dismiss().then();
      this.listOfDriver = await res;
    }, async (err) => {
      await this.loader.dismiss().then();
      console.log(err);
    });
  }

  async getRestaurant() {
    this.restaurantService.getAllRestaurant().subscribe(async res => {
      await this.loader.dismiss().then();
      this.listOfRestaurant = await res;
    }, async (err) => {
      await this.loader.dismiss().then();
      console.log(err);
    });
  }
  async getFood() {
    this.foodService.getAllFood().subscribe(async res => {
      await this.loader.dismiss().then();
      this.listOfFood = await res;
    }, async (err) => {
      await this.loader.dismiss().then();
      console.log(err);
    });
  }
  // show or hide a location string later
  onScroll(ev) {
    const offset = ev.detail.scrollTop;
    this.showLocationDetail = offset > 40;
    this.showScroll = offset > 300;
  }
  async getAccount() {
    this.accountService.getAllAccount().subscribe(async res => {
      await this.loader.dismiss().then();
      this.listOfAccount = await res;
    }, async (err) => {
      await this.loader.dismiss().then();
      console.log(err);
    });
  }
  async getOrderDetails() {
    this.orderDetailsService.getAllOrderDetail().subscribe(async res => {
      await this.loader.dismiss().then();
      this.listOfOrderDetails = await res;
    }, async (err) => {
      await this.loader.dismiss().then();
      console.log(err);
    });
  }
  async getAllOrder() {
    this.orderService.getAllOrder().subscribe(async result => {
      await this.loader.dismiss().then();
      this.listOfAllOrder = await result;
    }, async (err) => {
      await this.loader.dismiss().then();
      console.log(err);
    });
  }
  setDisabled(meal) {
    return this.dayFinished.includes(meal);
  }
  driverStatus(event, meal) {
    this.driverstatus = [];
    this.status = event.detail.value;
    let status = meal.OrderStatus;
    let item = status.find(c => c.val == event.detail.value);
    if (this.dayFinished.includes(item)) {
      this.dayFinished.splice(this.dayFinished.indexOf(item), 1);
    }
    else {
      this.dayFinished.push(item);
    }
    let res = this.listOfAllOrder.find(c => c.id == meal.id);
    let userId = localStorage.getItem("userId");
    status.forEach(element => {
      if (element.val == item.val) {
        this.checked = true
      }
      else {
        this.checked = false
      }
      let driverS = {
        id: element.id,
        val: element.val,
        isChecked: this.checked
      }
      this.driverstatus.push(driverS);
    });
    let location = {
      latitude: res.location.latitude,
      longtude: res.location.longtude
    }
    if (this.driverstatus.length > 0) {
      let data = {
        id: res.id,
        dateTime: res.dateTime,
        customer: res.customer, //
        location: location, //Restaurant
        orderStatuses: this.driverstatus, //picked,start moving, delivered(finished)
        total: res.total,
        driver: userId, //Restaurant
        vehicle: res.vehicle, //Restaurant
        orderLocation: res.orderLocation,//or droupLocation
        restaurantStatuses: res.restaurantStatuses,
        restaurantId: res.restaurantId,
        customerStatus: res.customerStatus,
        statuses: res.statuses
      }
      // this.driverstatus.forEach(ele => {
      //   this.orderService.updateOrderStatus(ele).subscribe(res => {
      //     alert(res.toString());
      //   })
      // })
      this.orderService.updateOrder(data).subscribe(res => {
        console.log(res.toString());
        this.getOrder();
      })
    }
  }
  async getOrder() {
    this.listOfOrder = [];
    this.orderService.getAllOrder().subscribe(async res => {
      await this.loader.dismiss().then();
      if (res.length > 0 && this.listOfOrder.length == 0) {
        let sessionId = localStorage.getItem("userId");
        //  console.log(sessionId)
        let driverFound = await res.find(c => c.driver == sessionId);
        if (driverFound) {
          //To filter order based on orderstatus with driver and status of restaurant role 
          this.order = await res.filter(c => c.driver === sessionId &&
            c.orderStatuses.find(c => c.isChecked == false && c.val == "delivered") &&
            c.statuses.find(entry => entry.isChecked == false && entry.val == "Reject"))
          this.getListOrder();
          this.order = res.filter(c => c.orderStatuses.find(c => c.isChecked == false && c.val == "picked")
            && c.orderStatuses.find(c => c.isChecked == false && c.val == "delivered")
            && c.orderStatuses.find(c => c.isChecked == false && c.val == "start moving")
            && c.statuses.find(entry => entry.isChecked == false && entry.val == "Reject"))
          this.getListOrder();
        }
        else {
          this.order = await res.filter(c => c.orderStatuses.find(c => c.isChecked == false && c.val == "picked")
            && c.orderStatuses.find(c => c.isChecked == false && c.val == "delivered")
            && c.orderStatuses.find(c => c.isChecked == false && c.val == "start moving")
            && c.statuses.find(entry => entry.isChecked == false && entry.val == "Reject"))
          this.getListOrder();
        }

      }
    }, async (err) => {
      await this.loader.dismiss().then();
      console.log(err);
    })
  }
  async getListOrder() {
    //this.listOfOrder = [];
    this.increment = 0;
    this.order.forEach(async element => {
      if (this.listOfRestaurant != undefined) {
        let restaurant = this.listOfRestaurant.find(c => c.accountId == +element.restaurantId)
        if (restaurant) {
          for (let i = 0; i < element.restaurantStatuses.length; i++) {
            if (element.restaurantStatuses[i].isChecked == true) {
              this.restaurantStatus = element.restaurantStatuses[i].val
            }
          }
          let data = {
            id: element.id,
            restaurantName: restaurant.name,
            DateTime: element.dateTime,
            Customer: this.listOfAccount.find(c => c.id == +element.customer).fullName,
            PhoneNumber: this.listOfAccount.find(c => c.id == +element.customer).phonenumber,
            CLocation: this.listOfAccount.find(c => c.id == +element.customer).locationId,
            RLocation: element.location,
            status: element.orderStatuses,
            OrderStatus: element.orderStatuses,
            Total: element.total,
            Driver: element.driver,
            CustomerId: element.customer,
            Vehicle: element.vehicle,
            orderLocation: element.orderLocation,
            restaurantStatus: this.restaurantStatus
          }
          //console.log(element.dateTime)
          const dateOfOrders = new Date(element.dateTime).toDateString();
          //console.log(dateOfOrders);
          if (this.currentDate == dateOfOrders) {
            await this.listOfOrder.push(data);
            this.increment = this.increment + 1;
          }
          if (this.increment == 0) {
            this.massge = true
            this.message = "no orders"
          }
          else {
            this.massge = false
          }
          //console.log(this.listOfOrder)
          this.listOfOrder.sort((a, b) => new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime());
          let status = element.orderStatuses.find(c => c.isChecked == true);
          let index = element.orderStatuses.findIndex(c => c.isChecked == true);
          if (index == 0) {
            if (status !== undefined) {
              if (this.dayFinished.includes(status)) {
                this.dayFinished.splice(this.dayFinished.indexOf(status), 1);
              }
              else {
                this.dayFinished.push(status);
              }
              this.setDisabled(status);
            }
          }
          else if (index == 1) {
            let statusArray = element.orderStatuses;
            for (let i = 0; i <= statusArray.length; i++) {
              if (i <= 1) {
                let statusA = element.orderStatuses[i];
                if (statusA !== undefined) {
                  if (this.dayFinished.includes(statusA)) {
                    this.dayFinished.splice(this.dayFinished.indexOf(statusA), 1);
                  }
                  else {
                    this.dayFinished.push(statusA);
                  }
                  this.setDisabled(statusA);
                }
              }
            }
          }
        }
      }
      else {
        this.getRefresh();
      }
    });
  }
  viewOrder(id) {
    this.cart = [];
    let orderDetails = this.listOfOrderDetails.filter(c => c.orderId == id);
    orderDetails.forEach(el => {
      let data = {
        CookingTime: this.listOfFood.find(c => c.id == el.foodId).cookingTime,
        DeliveryTime: this.listOfFood.find(c => c.id == el.foodId).deliveryTime,
        Description: this.listOfFood.find(c => c.id == el.foodId).description,
        Name: this.listOfFood.find(c => c.id == el.foodId).name,
        Price: this.listOfFood.find(c => c.id == el.foodId).price,
        amount: el.qty,
        categoryId: this.listOfFood.find(c => c.id == el.foodId).categoryId,
        id: el.foodId,
        picture: this.listOfFood.find(c => c.id == el.foodId).picture,
        restaurantId: this.listOfFood.find(c => c.id == el.foodId).restaurantId,
        type: this.listOfFood.find(c => c.id == el.foodId).type,
        orderDetailsId: el.id,
        orderStatus: true
      }
      this.cart.push(data);
    });
    this.orderService.addOrder(this.cart);
    this.sharedService.status.next("driver");
    this.router.navigate(["/menu/order-history"]);
  }
  location(location) {
    this.sharedService.status.next("driver-home");
    this.sharedService.RestaurantLocation.next(location);
    this.router.navigate(["/menu/location"]);
  }
  sendMessage(customerId, Customer) {
    this.sharedService.customerName.next(Customer);
    this.sharedService.deriverId.next(localStorage.getItem("userId"));
    this.sharedService.customerId.next(customerId);
    this.router.navigate(["/message"]);
  }
  // Dummy refresher function
  doRefresh(event) {
    setTimeout(() => {
      this.getAllOrder();
      //   this.getListOrder();
      event.target.complete();
    }, 2000);
  }
  getRefresh() {
    setTimeout(() => {
      this.getOrder();
    }, 200);
  }
}
