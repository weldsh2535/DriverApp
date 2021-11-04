(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-history-driver-history-module"], {
    /***/
    "BcYB":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver-history/driver-history.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function BcYB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Orders history</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <!-- <div class=\"container\">  \n    <form (ngSubmit)=\"searchdate()\" novalidate>  \n        <div class=\"col-sm-3 form-group\">  \n            <input type=\"text\" #startdate=\"ngModel\" name=\"startdate\" [(ngModel)]=\"model.startdate\"  \n                placeholder=\"From Date\" bsDatepicker class=\"form-control\" />  \n        </div>  \n        <div class=\"col-sm-3 form-group\">  \n            <button type=\"submit\" class=\"btn btn-success\">Find Date</button>  \n        </div>  \n    </form>  \n</div>  \n<div></div>  \n<div class=\"container\">  \n    <div class=\"  row\" style=\"margin-top:10px;margin-bottom: 10px;\">  \n        <div class=\"col-sm-6 form-group\">  \n            <b> Week Start Day and Date :</b> {{startdateofweek}}  \n        </div>  \n        <div class=\"col-sm-6 form-group\">  \n            <b> Week End Day and Date : </b>{{Enddateofweek}}  \n        </div>  \n    </div>  \n</div>  -->\n  <ion-segment  (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"daily\">\n      <ion-label>Daily</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"week\">\n      <ion-label>Weekly</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"month\">\n      <ion-label>Monthly</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"year\">\n      <ion-label>Yearly</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div class=\"message\" *ngIf=\"massge\" >\n    <ion-grid >\n      <ion-row>\n        <ion-label>{{message}}</ion-label>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class=\"orders\">\n    <ion-row *ngFor=\"let meal of listOfOrder ; let i = index\" class=\"ion-padding meal-row\">\n      <ion-col size=\"8\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.restaurantName }}\n          <p>{{ meal.DateTime|date:'short' }}</p>\n          <ion-button fill=\"clear\" >\n            Delivered\n          </ion-button>\n        </ion-label>\n       </ion-col>\n      <ion-col size=\"4\" class=\"border-bottom\">\n        <ion-label>\n          {{ meal.Customer }}\n          <p>{{ meal.PhoneNumber }}</p>\n        </ion-label>\n        <p>Payment</p>\n        <ion-label color=\"dark\"\n        ><b> {{ meal.Total | currency:'ETB' }}</b></ion-label\n      >\n     </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "H0Wu":
    /*!*******************************************************!*\
      !*** ./src/app/driver-history/driver-history.page.ts ***!
      \*******************************************************/

    /*! exports provided: DriverHistoryPage */

    /***/
    function H0Wu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverHistoryPage", function () {
        return DriverHistoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_driver_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./driver-history.page.html */
      "BcYB");
      /* harmony import */


      var _driver_history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./driver-history.page.scss */
      "NeWc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Service_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../Service/account.service */
      "6wYF");
      /* harmony import */


      var _Service_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Service/order.service */
      "VNSQ");
      /* harmony import */


      var _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../Service/restaurant.service */
      "+cje");

      var DriverHistoryPage = /*#__PURE__*/function () {
        function DriverHistoryPage(orderService, accountService, restaurantService, datepipe) {
          var _this = this;

          _classCallCheck(this, DriverHistoryPage);

          this.orderService = orderService;
          this.accountService = accountService;
          this.restaurantService = restaurantService;
          this.datepipe = datepipe;
          this.listOfOrder = [];
          this.model = {};
          this.date = new Date(); //this.currentDate = new Date().toDateString();

          this.currentMonth = new Date().getMonth() + 1;
          this.currentYear = new Date().getFullYear();
          this.currentDate = new Date().getDate();
          console.log(this.currentDate);
          console.log(this.currentMonth);
          console.log(this.currentYear);
          console.log(new Date().getDay());
          this.restaurantService.getAllRestaurant().subscribe(function (res) {
            _this.listOfRestaurant = res;
          });
        }

        _createClass(DriverHistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.model.startdate = new Date(); // debugger;

            this.getOrderByDriverId();
            this.getRestaurant();
            this.searchdate();
          }
        }, {
          key: "searchdate",
          value: function searchdate() {
            //debugger;
            console.log(this.model.startdate);
            var getdate = this.datepipe.transform(this.model.startdate, 'yyyy,M,d');

            function startOfWeek(date) {
              var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
              return new Date(date.setDate(diff));
            }

            function endofweek(date) {
              var lastday = date.getDate() - (date.getDay() - 1) + 6;
              return new Date(date.setDate(lastday));
            }

            var dt = new Date(getdate);
            this.startdateofweek = this.datepipe.transform(startOfWeek(dt)); //convertion of currentStartDate

            this.startMonth = new Date(this.startdateofweek).getMonth() + 1;
            this.startYear = new Date(this.startdateofweek).getFullYear();
            this.startDate = new Date(this.startdateofweek).getDate();
            console.log(this.startdateofweek);
            this.Enddateofweek = this.datepipe.transform(endofweek(dt)); //convertion of currentEndDate

            this.endMonth = new Date(this.Enddateofweek).getMonth() + 1;
            this.endYear = new Date(this.Enddateofweek).getFullYear();
            this.endDate = new Date(this.Enddateofweek).getDate();
            console.log(this.Enddateofweek);

            function addDays(date, days) {
              var find = new Date(Number(date));
              find.setDate(date.getDate() + days);
              return find;
            }

            var date = new Date(startOfWeek(dt));
            this.mon = this.datepipe.transform(startOfWeek(dt), 'EEEE, MMMM d');
            this.Tuesday = this.datepipe.transform(addDays(date, 1), 'EEEE, MMMM d');
            this.Wednedday = this.datepipe.transform(addDays(date, 2), 'EEEE, MMMM d');
            this.Thruds = this.datepipe.transform(addDays(date, 3), 'EEEE, MMMM d');
            this.Friday = this.datepipe.transform(addDays(date, 4), 'EEEE, MMMM d');
            this.Sat = this.datepipe.transform(addDays(date, 5), 'EEEE, MMMM d');
            this.Sun = this.datepipe.transform(endofweek(dt), 'EEEE, MMMM d');
          }
        }, {
          key: "getRestaurant",
          value: function getRestaurant() {
            var _this2 = this;

            this.restaurantService.getAllRestaurant().subscribe(function (res) {
              _this2.listOfRestaurant = res;
            });
          }
        }, {
          key: "getOrderByDriverId",
          value: function getOrderByDriverId() {
            var _this3 = this;

            this.listOfOrder = [];
            var userId = localStorage.getItem("userId");
            this.orderService.getAllOrder().subscribe(function (result) {
              var res = result.filter(function (c) {
                return c.driver == userId;
              });

              if (res.length > 0) {
                var order = res.filter(function (c) {
                  return c.orderStatuses.find(function (c) {
                    return c.isChecked == true && c.val == "delivered";
                  });
                });

                if (order.length > 0 && _this3.listOfRestaurant != undefined) {
                  order.forEach(function (element) {
                    _this3.accountService.getAllAccount().subscribe(function (result) {
                      var restaurant = _this3.listOfRestaurant.find(function (c) {
                        return c.id == element.restaurantId;
                      });

                      var data = {
                        id: element.id,
                        restaurantName: restaurant.name,
                        DateTime: element.dateTime,
                        Customer: result.find(function (c) {
                          return c.id == element.customer;
                        }).fullName,
                        PhoneNumber: result.find(function (c) {
                          return c.id == element.customer;
                        }).phonenumber,
                        CLocation: result.find(function (c) {
                          return c.id == element.customer;
                        }).location,
                        RLocation: element.location,
                        OrderStatus: element.orderStatuses,
                        Total: element.total,
                        Driver: element.driver,
                        Vehicle: element.vehicle,
                        orderLocation: element.orderLocation,
                        restaurantStatus: element.restaurantStatuses
                      };

                      _this3.listOfOrder.push(data);

                      _this3.listOfOrder.sort(function (a, b) {
                        return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                      }); // console.log(this.listOfOrder)

                    });
                  });
                } else {
                  _this3.getRefresh();
                }
              } else {
                _this3.massge = true;
                _this3.message = "no order history";
              }
            });
          }
        }, {
          key: "getRefresh",
          value: function getRefresh() {
            var _this4 = this;

            setTimeout(function () {
              _this4.getOrderByDriverId();
            }, 200);
          } // Dummy refresher function

        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this5 = this;

            setTimeout(function () {
              _this5.getOrderByDriverId();

              event.target.complete();
            }, 2000);
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev) {
            // console.log('Segment changed', ev.detail.value);
            if (ev.detail.value == "daily") {
              this.scheduleOrder(this.currentDate, "daily");
            } else if (ev.detail.value == "week") {
              this.scheduleOrder(this.currentWeek, "week");
            } else if (ev.detail.value == "month") {
              this.scheduleOrder(this.currentMonth, "month");
            } else if (ev.detail.value == "year") {
              this.scheduleOrder(this.currentYear, "year");
            }
          }
        }, {
          key: "scheduleOrder",
          value: function scheduleOrder(date, event) {
            var _this6 = this;

            this.listOfOrder = [];
            var userId = localStorage.getItem("userId");
            this.orderService.getAllOrder().subscribe(function (result) {
              var res = result.filter(function (c) {
                return c.driver == userId;
              });

              if (res.length > 0) {
                var order = res.filter(function (c) {
                  return c.orderStatuses.find(function (c) {
                    return c.isChecked == true && c.val == "delivered";
                  });
                });

                if (order.length > 0 && _this6.listOfRestaurant != undefined) {
                  order.forEach(function (element) {
                    _this6.accountService.getAllAccount().subscribe(function (result) {
                      var restaurant = _this6.listOfRestaurant.find(function (c) {
                        return c.id == element.restaurantId;
                      });

                      var data = {
                        id: element.id,
                        restaurantName: restaurant.name,
                        DateTime: element.dateTime,
                        Customer: result.find(function (c) {
                          return c.id == element.customer;
                        }).fullName,
                        PhoneNumber: result.find(function (c) {
                          return c.id == element.customer;
                        }).phonenumber,
                        CLocation: result.find(function (c) {
                          return c.id == element.customer;
                        }).location,
                        RLocation: element.location,
                        OrderStatus: element.orderStatuses,
                        Total: element.total,
                        Driver: element.driver,
                        Vehicle: element.vehicle,
                        orderLocation: element.orderLocation,
                        restaurantStatus: element.restaurantStatuses
                      };
                      var dateOfOrders = new Date(element.dateTime).getDate(); // to calculate week convertion

                      _this6.orderMonth = new Date(element.dateTime).getMonth() + 1;
                      _this6.orderYear = new Date(element.dateTime).getFullYear();
                      _this6.orderDate = new Date(element.dateTime).getDate();
                      var monthlyOrders = new Date(element.dateTime).getMonth() + 1;
                      var yearlyOrdes = new Date(element.dateTime).getFullYear(); //  console.log("date  =="+dateOfOrders + "month==" +monthlyOrders +"year=="+yearlyOrdes);

                      if (event == "daily") {
                        _this6.increament = 0;

                        if (date == dateOfOrders) {
                          _this6.increament = _this6.increament + 1;

                          _this6.listOfOrder.push(data);

                          _this6.listOfOrder.sort(function (a, b) {
                            return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                          });
                        }

                        if (_this6.increament == 0) {
                          _this6.massge = true;
                          _this6.message = "no orders in this daily";
                        } else {
                          _this6.massge = false;
                        }
                      } else if (event == "week") {
                        _this6.increament = 0;

                        if (_this6.startDate <= _this6.orderDate && _this6.startMonth == _this6.orderMonth && _this6.startYear == _this6.orderYear && _this6.endDate >= _this6.orderDate && _this6.endMonth == _this6.orderMonth && _this6.endYear == _this6.orderYear) {
                          _this6.increament = _this6.increament + 1;

                          _this6.listOfOrder.push(data);

                          _this6.listOfOrder.sort(function (a, b) {
                            return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                          });
                        }

                        if (_this6.increament == 0) {
                          _this6.massge = true;
                          _this6.message = "no orders in this week";
                        } else {
                          _this6.massge = false;
                        }
                      } else if (event == "month") {
                        _this6.increament = 0;

                        if (date == monthlyOrders) {
                          _this6.increament = _this6.increament + 1;

                          _this6.listOfOrder.push(data);

                          _this6.listOfOrder.sort(function (a, b) {
                            return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                          });
                        }

                        if (_this6.increament == 0) {
                          _this6.massge = true;
                          _this6.message = "no orders in this month";
                        } else {
                          _this6.massge = false;
                        }
                      } else if (event == "year") {
                        _this6.increament = 0;

                        if (date == yearlyOrdes) {
                          _this6.increament = _this6.increament + 1;

                          _this6.listOfOrder.push(data);

                          _this6.listOfOrder.sort(function (a, b) {
                            return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
                          });
                        }

                        if (_this6.increament == 0) {
                          _this6.massge = true;
                          _this6.message = "no orders in this year";
                        } else {
                          _this6.massge = false;
                        }
                      }
                    });
                  });
                } else {
                  _this6.getRefresh();
                }
              } else {
                _this6.massge = true;
                _this6.message = "no order history";
              }
            });
          }
        }]);

        return DriverHistoryPage;
      }();

      DriverHistoryPage.ctorParameters = function () {
        return [{
          type: _Service_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]
        }, {
          type: _Service_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]
        }, {
          type: _Service_restaurant_service__WEBPACK_IMPORTED_MODULE_7__["RestaurantService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }];
      };

      DriverHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-driver-history',
        template: _raw_loader_driver_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_driver_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DriverHistoryPage);
      /***/
    },

    /***/
    "NeWc":
    /*!*********************************************************!*\
      !*** ./src/app/driver-history/driver-history.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function NeWc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".message {\n  padding-top: 3px;\n  padding-left: 12px;\n  color: #337ab7;\n  font-size: 27px;\n}\n\nion-segment {\n  padding-left: 165px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRyaXZlci1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7QUFDbkI7O0FBQ0U7RUFDRSxtQkFBbUI7QUFFdkIiLCJmaWxlIjoiZHJpdmVyLWhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2V7XHJcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgY29sb3I6ICMzMzdhYjc7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgfVxyXG4gIGlvbi1zZWdtZW50IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTY1cHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "odG3":
    /*!*********************************************************!*\
      !*** ./src/app/driver-history/driver-history.module.ts ***!
      \*********************************************************/

    /*! exports provided: DriverHistoryPageModule */

    /***/
    function odG3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverHistoryPageModule", function () {
        return DriverHistoryPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _driver_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./driver-history-routing.module */
      "vg3a");
      /* harmony import */


      var _driver_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./driver-history.page */
      "H0Wu");

      var DriverHistoryPageModule = function DriverHistoryPageModule() {
        _classCallCheck(this, DriverHistoryPageModule);
      };

      DriverHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _driver_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["DriverHistoryPageRoutingModule"]],
        declarations: [_driver_history_page__WEBPACK_IMPORTED_MODULE_6__["DriverHistoryPage"]]
      })], DriverHistoryPageModule);
      /***/
    },

    /***/
    "vg3a":
    /*!*****************************************************************!*\
      !*** ./src/app/driver-history/driver-history-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: DriverHistoryPageRoutingModule */

    /***/
    function vg3a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverHistoryPageRoutingModule", function () {
        return DriverHistoryPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _driver_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./driver-history.page */
      "H0Wu");

      var routes = [{
        path: '',
        component: _driver_history_page__WEBPACK_IMPORTED_MODULE_3__["DriverHistoryPage"]
      }];

      var DriverHistoryPageRoutingModule = function DriverHistoryPageRoutingModule() {
        _classCallCheck(this, DriverHistoryPageRoutingModule);
      };

      DriverHistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DriverHistoryPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=driver-history-driver-history-module-es5.js.map