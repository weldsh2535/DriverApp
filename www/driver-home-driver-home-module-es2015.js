(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-home-driver-home-module"],{

/***/ "1D3i":
/*!*******************************************!*\
  !*** ./src/app/Service/driver.service.ts ***!
  \*******************************************/
/*! exports provided: DriverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverService", function() { return DriverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/app-error */ "/GcI");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/bad-input */ "XEKg");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/not-found-error */ "5Jak");








let DriverService = class DriverService {
    constructor(http) {
        this.http = http;
        this.APIURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL;
    }
    create(val) {
        return this.http.post(this.APIURL + '/Driver', val);
    }
    getAllDriver() {
        return this.http.get(this.APIURL + '/Driver');
    }
    updateDriver(val) {
        return this.http.put(this.APIURL + '/Driver/', val);
    }
    removeDriver(id) {
        return this.http.delete(this.APIURL + '/Driver/' + id).toPromise();
    }
    handleError(error) {
        if (error.status === 400) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_6__["BadInput"](error.json()));
        }
        if (error.status === 404) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_7__["NotFoundError"]());
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_5__["AppError"](error));
    }
};
DriverService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DriverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], DriverService);



/***/ }),

/***/ "8pzK":
/*!***********************************************************!*\
  !*** ./src/app/driver-home/driver-home-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DriverHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverHomePageRoutingModule", function() { return DriverHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _driver_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver-home.page */ "V5RG");




const routes = [
    {
        path: '',
        component: _driver_home_page__WEBPACK_IMPORTED_MODULE_3__["DriverHomePage"]
    }
];
let DriverHomePageRoutingModule = class DriverHomePageRoutingModule {
};
DriverHomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DriverHomePageRoutingModule);



/***/ }),

/***/ "R1vZ":
/*!***************************************************!*\
  !*** ./src/app/driver-home/driver-home.module.ts ***!
  \***************************************************/
/*! exports provided: DriverHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverHomePageModule", function() { return DriverHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _driver_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./driver-home-routing.module */ "8pzK");
/* harmony import */ var _driver_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./driver-home.page */ "V5RG");







let DriverHomePageModule = class DriverHomePageModule {
};
DriverHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _driver_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["DriverHomePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_driver_home_page__WEBPACK_IMPORTED_MODULE_6__["DriverHomePage"]]
    })
], DriverHomePageModule);



/***/ }),

/***/ "V5RG":
/*!*************************************************!*\
  !*** ./src/app/driver-home/driver-home.page.ts ***!
  \*************************************************/
/*! exports provided: DriverHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverHomePage", function() { return DriverHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_driver_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./driver-home.page.html */ "eptt");
/* harmony import */ var _driver_home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driver-home.page.scss */ "wzRR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Service_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/account.service */ "6wYF");
/* harmony import */ var _Service_driver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Service/driver.service */ "1D3i");
/* harmony import */ var _Service_food_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Service/food.service */ "Dkj+");
/* harmony import */ var _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Service/order-detail.service */ "8D9V");
/* harmony import */ var _Service_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Service/order.service */ "VNSQ");
/* harmony import */ var _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Service/restaurant.service */ "+cje");
/* harmony import */ var _Service_shared_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Service/shared.service */ "ldse");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");














let DriverHomePage = class DriverHomePage {
    constructor(fb, foodService, orderService, accountService, orderDetailsService, router, sharedService, restaurantService, driverservice, callNumber
    // private _Activatedroute:ActivatedRoute,
    ) {
        this.fb = fb;
        this.foodService = foodService;
        this.orderService = orderService;
        this.accountService = accountService;
        this.orderDetailsService = orderDetailsService;
        this.router = router;
        this.sharedService = sharedService;
        this.restaurantService = restaurantService;
        this.driverservice = driverservice;
        this.callNumber = callNumber;
        this.listOfOrder = [];
        this.cart = [];
        this.regform = this.fb.group({});
        this.selectedIng = [];
        this.numberOfChecks = 1;
        this.checkBoxLimit = 1;
        this.dayFinished = [];
        this.driverstatus = [];
        this.showLocationDetail = false;
        this.increment = 0;
        this.currentDate = new Date().toDateString();
        console.log(this.currentDate);
        this.restaurantService.getAllRestaurant().subscribe(res => {
            this.listOfRestaurant = res;
        });
        this.accountService.getAllAccount().subscribe(res => {
            this.listOfAccount = res;
        });
    }
    pageScroller() {
        this.pageTop.scrollToTop();
    }
    ngOnInit() {
        this.regform = this.fb.group({
            status: [""],
        });
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
    getDriver() {
        this.driverservice.getAllDriver().subscribe(res => {
            this.listOfDriver = res;
        });
    }
    getRestaurant() {
        this.restaurantService.getAllRestaurant().subscribe(res => {
            this.listOfRestaurant = res;
        });
    }
    getFood() {
        this.foodService.getAllFood().subscribe(res => {
            this.listOfFood = res;
        });
    }
    // show or hide a location string later
    onScroll(ev) {
        const offset = ev.detail.scrollTop;
        this.showLocationDetail = offset > 40;
    }
    getAccount() {
        this.accountService.getAllAccount().subscribe(res => {
            this.listOfAccount = res;
        });
    }
    getOrderDetails() {
        this.orderDetailsService.getAllOrderDetail().subscribe(res => {
            this.listOfOrderDetails = res;
        });
    }
    getAllOrder() {
        this.orderService.getAllOrder().subscribe(result => {
            this.listOfAllOrder = result;
        });
    }
    setDisabled(meal) {
        return this.dayFinished.includes(meal);
    }
    companyFormSelected(event, meal) {
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
                this.checked = true;
            }
            else {
                this.checked = false;
            }
            let driverS = {
                id: element.id,
                val: element.val,
                isChecked: this.checked
            };
            this.driverstatus.push(driverS);
        });
        let location = {
            latitude: res.location.latitude,
            longtude: res.location.longtude
        };
        if (this.driverstatus.length > 0) {
            let data = {
                id: res.id,
                dateTime: res.dateTime,
                customer: res.customer,
                location: location,
                orderStatuses: this.driverstatus,
                total: res.total,
                driver: userId,
                vehicle: res.vehicle,
                orderLocation: res.orderLocation,
                restaurantStatuses: res.restaurantStatuses,
                restaurantId: res.restaurantId,
                customerStatus: res.customerStatus,
                statuses: res.statuses
            };
            this.driverstatus.forEach(ele => {
                this.orderService.updateOrderStatus(ele).subscribe(res => {
                    //  alert(res.toString());
                });
            });
            this.orderService.updateOrder(data).subscribe(res => {
                //  alert(res.toString());
            });
        }
    }
    getOrder() {
        this.listOfOrder = [];
        this.orderService.getAllOrder().subscribe(res => {
            if (res.length > 0 && this.listOfOrder.length == 0) {
                let sessionId = localStorage.getItem("userId");
                let driverFound = res.find(c => c.driver == sessionId);
                if (driverFound) {
                    //To filter order based on orderstatus with driver and status of restaurant role 
                    this.order = res.filter(c => c.driver === sessionId && c.orderStatuses.find(c => c.isChecked == false && c.val == "delivered") && c.statuses.find(entry => entry.isChecked == false && entry.val == "Reject"));
                    this.getListOrder();
                    this.order = res.filter(c => c.orderStatuses.find(c => c.isChecked == false && c.val == "picked")
                        && c.orderStatuses.find(c => c.isChecked == false && c.val == "delivered")
                        && c.orderStatuses.find(c => c.isChecked == false && c.val == "start moving")
                        && c.statuses.find(entry => entry.isChecked == false && entry.val == "Reject"));
                    this.getListOrder();
                }
                else {
                    this.order = res.filter(c => c.orderStatuses.find(c => c.isChecked == false && c.val == "picked")
                        && c.orderStatuses.find(c => c.isChecked == false && c.val == "delivered")
                        && c.orderStatuses.find(c => c.isChecked == false && c.val == "start moving")
                        && c.statuses.find(entry => entry.isChecked == false && entry.val == "Reject"));
                    this.getListOrder();
                }
            }
        });
    }
    getListOrder() {
        this.listOfOrder = [];
        this.increment = 0;
        this.order.forEach(element => {
            this.accountService.getAllAccount().subscribe(result => {
                if (this.listOfRestaurant != undefined) {
                    let restaurant = this.listOfRestaurant.find(c => c.id == +element.restaurantId);
                    if (restaurant) {
                        for (let i = 0; i < element.restaurantStatuses.length; i++) {
                            if (element.restaurantStatuses[i].isChecked == true) {
                                this.restaurantStatus = element.restaurantStatuses[i].val;
                            }
                        }
                        let data = {
                            id: element.id,
                            restaurantName: restaurant.name,
                            DateTime: element.dateTime,
                            Customer: result.find(c => c.id == element.customer).fullName,
                            PhoneNumber: result.find(c => c.id == element.customer).phonenumber,
                            CLocation: result.find(c => c.id == element.customer).locationId,
                            RLocation: element.location,
                            status: element.orderStatuses,
                            OrderStatus: element.orderStatuses,
                            Total: element.total,
                            Driver: element.driver,
                            CustomerId: element.customer,
                            Vehicle: element.vehicle,
                            orderLocation: element.orderLocation,
                            restaurantStatus: this.restaurantStatus
                        };
                        const dateOfOrders = new Date(element.dateTime).toDateString();
                        // console.log(dateOfOrders);
                        if (this.currentDate == dateOfOrders) {
                            this.listOfOrder.push(data);
                            this.increment = this.increment + 1;
                            if (this.increment == 0) {
                                this.massge = true;
                                this.message = "no orders";
                            }
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
            };
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
    sendMessage(driverId, customerId, Customer) {
        this.sharedService.customerName.next(Customer);
        this.sharedService.deriverId.next(driverId);
        this.sharedService.customerId.next(customerId);
        this.router.navigate(["/message"]);
    }
    // Dummy refresher function
    doRefresh(event) {
        setTimeout(() => {
            this.getAllOrder();
            this.getListOrder();
            event.target.complete();
        }, 2000);
    }
    getRefresh() {
        setTimeout(() => {
            this.getOrder();
        }, 200);
    }
};
DriverHomePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _Service_food_service__WEBPACK_IMPORTED_MODULE_8__["FoodService"] },
    { type: _Service_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"] },
    { type: _Service_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
    { type: _Service_order_detail_service__WEBPACK_IMPORTED_MODULE_9__["OrderDetailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_12__["SharedService"] },
    { type: _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_11__["RestaurantService"] },
    { type: _Service_driver_service__WEBPACK_IMPORTED_MODULE_7__["DriverService"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_13__["CallNumber"] }
];
DriverHomePage.propDecorators = {
    pageTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['pageTop',] }]
};
DriverHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-driver-home',
        template: _raw_loader_driver_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_driver_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DriverHomePage);



/***/ }),

/***/ "eptt":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver-home/driver-home.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Driver Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\" #pageTop scrollEvents=\"true\"  (ionScroll)=\"onScroll($event)\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class=\"message\" *ngIf=\"massge\" >\n    <ion-grid >\n      <ion-row>\n        <ion-label>{{message}}</ion-label>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"orders\">\n    <ion-row *ngFor=\"let meal of listOfOrder ; let i = index\" class=\"ion-padding meal-row\">\n      <ion-col size=\"6\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.restaurantName }}\n          <p>{{ meal.DateTime|date:'short'}}</p>\n          <span>\n            <ion-button (click)=\"location(meal.RLocation)\">\n              <ion-icon name=\"location-outline\"></ion-icon>\n            </ion-button>\n          </span>\n          <p\n            style=\"background-color: #f8f9fa; border-radius: 5px; padding-top: 3px; padding-left: 7px; margin-top: 5px;\">\n            {{meal.restaurantStatus}}</p>\n        </ion-label>\n        <ion-label color=\"dark\"><b>Total : {{ meal.Total | currency:'ETB' }}</b></ion-label>\n        <ion-button fill=\"clear\" (click)=\"viewOrder(meal.id)\">\n          view order\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.Customer }}\n          <p>{{ meal.PhoneNumber }}</p>\n          <span>\n            <ion-button (click)=\"location(meal.CLocation)\">\n              <ion-icon name=\"location-outline\"></ion-icon>\n            </ion-button>\n          </span>\n        </ion-label>\n        <ion-row class=\"status\">\n          <ion-label style=\"padding-top: 9px; padding-left: 5px;\">Status</ion-label>\n          <ion-select interface=\"popover\" (ionChange)=\"companyFormSelected($event,meal)\">\n            <ion-select-option *ngFor=\"let value of meal.OrderStatus ;let j=index \" [disabled]=\"setDisabled(value)\"\n              [value]=\"value.val\">\n              {{value.val}}\n            </ion-select-option>\n          </ion-select>\n        </ion-row>\n        <button style=\"\n          background-color: #2185d0;\n          border-color: #2185d0;\n          color: #fff;\n          border-radius: 0.28571429rem;\n          margin: .25rem .5rem .25rem 0;\n        \" (click)=\"sendMessage(meal.Driver,meal.CustomerId,meal.Customer)\">\n          Send message\n        </button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"light\" (click)=\"pageScroller()\">\n      <ion-icon md=\"chevron-up-outline\" ios=\"chevron-up-circle-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "wzRR":
/*!***************************************************!*\
  !*** ./src/app/driver-home/driver-home.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar ion-icon {\n  font-size: 25px;\n}\n\nion-content {\n  position: absolute;\n  --padding-bottom: 50px;\n}\n\nion-content .orders {\n  margin-top: 58px;\n}\n\n.light-bg {\n  background: #ffffff;\n  z-index: 10;\n}\n\n.meal-row {\n  padding-bottom: 0px;\n}\n\n.border-bottom {\n  border-bottom: 1px solid var(--ion-color-step-150, rgba(0, 0, 0, 0.07));\n}\n\n#map {\n  width: 60%;\n  height: 280px;\n}\n\nion-row .status {\n  background-color: #dee2e6;\n  border-radius: 3px;\n  margin-top: 4px;\n}\n\nion-button {\n  margin-top: 2px;\n}\n\nion-row {\n  border-radius: 12px;\n  background-color: #e9ecef;\n  margin-top: 4px;\n}\n\n.message {\n  padding-top: 60px;\n  padding-left: 12px;\n  font-size: 27px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRyaXZlci1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVNLGVBQWU7QUFEckI7O0FBS0U7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQWlCO0FBRnJCOztBQUFFO0VBSU0sZ0JBQWdCO0FBQXhCOztBQUlFO0VBQ0ksbUJBQW1CO0VBQ25CLFdBQVc7QUFEakI7O0FBS0U7RUFDRSxtQkFBbUI7QUFGdkI7O0FBSUU7RUFDRSx1RUFBdUU7QUFEM0U7O0FBR0U7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUFqQjs7QUFFRTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNuQjs7QUFDQTtFQUNJLGVBQWU7QUFFbkI7O0FBQUE7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWU7QUFHakI7O0FBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBRWxCLGVBQWU7QUFFakIiLCJmaWxlIjoiZHJpdmVyLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi10b29sYmFyIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgICAub3JkZXJze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDU4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgLmxpZ2h0LWJnIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgfVxyXG4gICBcclxuICBcclxuICAubWVhbC1yb3cge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcbiAgLmJvcmRlci1ib3R0b20ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgcmdiYSgwLCAwLCAwLCAwLjA3KSk7XHJcbiAgfVxyXG4gICNtYXAge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgfVxyXG4gIGlvbi1yb3cgLnN0YXR1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5pb24tcm93e1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuLy90byBtZXNzYWdlIG9mIG9yZGVyIFxyXG4ubWVzc2FnZXtcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAvLyBjb2xvcjogIzMzN2FiNztcclxuICBmb250LXNpemU6IDI3cHg7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=driver-home-driver-home-module-es2015.js.map