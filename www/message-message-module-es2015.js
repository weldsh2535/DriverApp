(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["message-message-module"],{

/***/ "3tpA":
/*!*******************************************!*\
  !*** ./src/app/message/message.module.ts ***!
  \*******************************************/
/*! exports provided: MessagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message-routing.module */ "DEAg");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.page */ "46tz");







// import { AutosizeModule } from 'ngx-autosize';
let MessagePageModule = class MessagePageModule {
};
MessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _message_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_message_page__WEBPACK_IMPORTED_MODULE_6__["MessagePage"]]
    })
], MessagePageModule);



/***/ }),

/***/ "46tz":
/*!*****************************************!*\
  !*** ./src/app/message/message.page.ts ***!
  \*****************************************/
/*! exports provided: MessagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePage", function() { return MessagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_message_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./message.page.html */ "Fyet");
/* harmony import */ var _message_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.page.scss */ "zaat");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Service_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Service/message.service */ "KzId");
/* harmony import */ var _Service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Service/shared.service */ "ldse");







let MessagePage = class MessagePage {
    constructor(sharedService, messageService) {
        this.sharedService = sharedService;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.customerName = this.sharedService.getCustomerName().value;
        this.driverId = this.sharedService.getDriverId().value;
        this.customerId = this.sharedService.getCustomerId().value;
        this.currentUser = this.customerId;
        this.getMessage();
    }
    getMessage() {
        this.messageService.getAllMessage().subscribe(res => {
            let messages = res.filter(c => c.driverId == localStorage.getItem('userId')
                && c.driverId == this.driverId && c.userId == this.customerId);
            this.listOfMessage = messages.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            this.currentUser = localStorage.getItem("userId");
        });
    }
    sendMessage() {
        let data = {
            msgcontent: this.newMsg,
            date: new Date(),
            userId: this.customerId,
            driverId: this.driverId,
            sessionId: localStorage.getItem("userId")
        };
        this.listOfMessage.push(data);
        this.listOfMessage.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        this.messageService.create(data).subscribe(res => {
            // alert(res.toString());
        });
        this.newMsg = '';
        setTimeout(() => {
            this.content.scrollToBottom(200);
        });
    }
};
MessagePage.ctorParameters = () => [
    { type: _Service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _Service_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
];
MessagePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"],] }]
};
MessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-message',
        template: _raw_loader_message_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_message_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MessagePage);



/***/ }),

/***/ "DEAg":
/*!***************************************************!*\
  !*** ./src/app/message/message-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MessagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageRoutingModule", function() { return MessagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message.page */ "46tz");




const routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_3__["MessagePage"]
    }
];
let MessagePageRoutingModule = class MessagePageRoutingModule {
};
MessagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MessagePageRoutingModule);



/***/ }),

/***/ "Fyet":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"detail\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{this.customerName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row *ngFor=\"let message of listOfMessage\">\n   <ion-col size=\"9\"  *ngIf=\"currentUser !== message.sessionId\"  class=\"message other-message\">\n     <b>{{message.user}}</b>\n     <span>{{message.msgcontent}}</span>\n     <div class=\"time\" text-right><br>\n     {{message.date|date:'short'}}\n     </div>\n   </ion-col>\n   <ion-col offset=\"3\" size=\"9\" *ngIf=\"currentUser === message.sessionId\" class=\"message my-message\">\n    <b>{{message.user}}</b>\n    <span>{{message.msgcontent}}</span>\n    <div class=\"time\" text-right><br>\n    {{message.date|date:'short'}}\n    </div>\n  </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-footer>\n  <ion-toolbar >\n   <ion-row align-items-center no-padding>\n     <ion-col size=\"10\">\n       <textarea autosize maxRows=\"4\" [(ngModel)]=\"newMsg\" class=\"message-input\"></textarea>\n     </ion-col>\n     <ion-col size=\"2\">\n      <ion-button expand=\"block\" fill=\"clear\" color=\"primary\" [disabled]=\"newMsg===''\"\n      class=\"msg-btn\" (click)=\"sendMessage()\">\n      <ion-icon name=\"send-outline\"></ion-icon>\n    </ion-button>\n    </ion-col>\n   </ion-row>\n  </ion-toolbar>\n</ion-footer>\n</ion-content>\n");

/***/ }),

/***/ "KzId":
/*!********************************************!*\
  !*** ./src/app/Service/message.service.ts ***!
  \********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");




let MessageService = class MessageService {
    constructor(http) {
        this.http = http;
        this.APIURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL;
    }
    create(val) {
        return this.http.post(this.APIURL + '/Message', val);
    }
    getAllMessage() {
        return this.http.get(this.APIURL + '/Message');
    }
    updateMessage(val) {
        return this.http.put(this.APIURL + '/Message/', val);
    }
    removeMessage(id) {
        return this.http.delete(this.APIURL + '/Message/' + id).toPromise();
    }
};
MessageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MessageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "zaat":
/*!*******************************************!*\
  !*** ./src/app/message/message.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n\n.other-message {\n  background: var(--ion-color-tertiary);\n  color: #fff;\n}\n\n.my-message {\n  background: var(--ion-color-secondary);\n  color: #fff;\n}\n\n.time {\n  color: #dfdfdf;\n  float: right;\n  font-size: small;\n}\n\n.msg-btn {\n  --padding-start:0.5em;\n  --padding-end:0.5em;\n  margin-top: 10px;\n}\n\n.message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIscUJBQXFCO0FBQ3RCOztBQUNBO0VBQ0kscUNBQXFDO0VBQ3JDLFdBQVc7QUFFZjs7QUFBQTtFQUNJLHNDQUFzQztFQUN0QyxXQUFVO0FBR2Q7O0FBREE7RUFDSSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtBQUlwQjs7QUFGQTtFQUNFLHFCQUFnQjtFQUNoQixtQkFBYztFQUNkLGdCQUFnQjtBQUtsQjs7QUFIQTtFQUNJLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQU12QiIsImZpbGUiOiJtZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdle1xyXG4gcGFkZGluZzoxMHB4O1xyXG4gYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gbWFyZ2luLWJvdHRvbTo0cHg7XHJcbiB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuLm90aGVyLW1lc3NhZ2V7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm15LW1lc3NhZ2V7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuLnRpbWV7XHJcbiAgICBjb2xvcjogI2RmZGZkZjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuLm1zZy1idG57XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OjAuNWVtO1xyXG4gIC0tcGFkZGluZy1lbmQ6MC41ZW07XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ubWVzc2FnZS1pbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=message-message-module-es2015.js.map