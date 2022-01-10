!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(u){i=!0,o=u}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=r(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw s}}}}function r(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13,15,16],{"+cje":function(t,e,r){"use strict";r.d(e,"a",function(){return f});var n=r("HDdC"),o=r("XEKg"),a=r("5Jak"),u=r("/GcI"),c=r("cxbk"),d=r("fXoL"),l=r("tk/3"),f=function(){var t=function(){function t(e){i(this,t),this.http=e,this.APIURL=c.a.apiURL}return s(t,[{key:"create",value:function(t){return this.http.post(this.APIURL+"/restaurant",t)}},{key:"getAllRestaurant",value:function(){return this.http.get(this.APIURL+"/restaurant")}},{key:"updateRestaurant",value:function(t){return this.http.put(this.APIURL+"/restaurant/",t)}},{key:"removeRestaurant",value:function(t){return this.http.delete(this.APIURL+"/restaurant/"+t).toPromise()}},{key:"handleError",value:function(t){return n.a.throw(400===t.status?new o.a(t.json()):404===t.status?new a.a:new u.a(t))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(d.cc(l.a))},t.\u0275prov=d.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},R1vZ:function(t,e,r){"use strict";r.r(e),r.d(e,"DriverHomePageModule",function(){return V});var n,o=r("ofXK"),a=r("3Pt+"),u=r("TEn/"),c=r("tyNb"),d=r("mrSG"),l=r("fXoL"),f=r("Dkj+"),h=r("VNSQ"),v=r("6wYF"),m=r("8D9V"),g=r("ldse"),p=r("+cje"),b=r("HDdC"),k=r("cxbk"),y=r("/GcI"),O=r("XEKg"),w=r("5Jak"),x=r("tk/3"),R=((n=function(){function t(e){i(this,t),this.http=e,this.APIURL=k.a.apiURL}return s(t,[{key:"create",value:function(t){return this.http.post(this.APIURL+"/driver",t)}},{key:"getAllDriver",value:function(){return this.http.get(this.APIURL+"/driver")}},{key:"updateDriver",value:function(t){return this.http.put(this.APIURL+"/driver/",t)}},{key:"removeDriver",value:function(t){return this.http.delete(this.APIURL+"/driver/"+t).toPromise()}},{key:"handleError",value:function(t){return b.a.throw(400===t.status?new O.a(t.json()):404===t.status?new w.a:new y.a(t))}}]),t}()).\u0275fac=function(t){return new(t||n)(l.cc(x.a))},n.\u0275prov=l.Mb({token:n,factory:n.\u0275fac,providedIn:"root"}),n),I=r("Wwn5"),S=["pageTop"];function C(t,e){if(1&t&&(l.Vb(0,"div",12),l.Vb(1,"ion-grid"),l.Vb(2,"ion-row"),l.Vb(3,"ion-label"),l.Ec(4),l.Ub(),l.Ub(),l.Ub(),l.Ub()),2&t){var r=l.ic();l.Eb(4),l.Fc(r.message)}}function D(t,e){if(1&t&&(l.Vb(0,"ion-select-option",26),l.Ec(1),l.Ub()),2&t){var r=e.$implicit,n=l.ic(2);l.oc("disabled",n.setDisabled(r))("value",r.val),l.Eb(1),l.Gc(" ",r.val," ")}}function P(t,e){if(1&t){var r=l.Wb();l.Vb(0,"ion-row",13),l.Vb(1,"ion-col",14),l.Vb(2,"ion-label"),l.Ec(3),l.Vb(4,"p"),l.Ec(5),l.jc(6,"date"),l.Ub(),l.Vb(7,"span"),l.Vb(8,"ion-button",15),l.gc("click",function(){l.wc(r);var t=e.$implicit;return l.ic().location(t.RLocation)}),l.Rb(9,"ion-icon",16),l.Ub(),l.Ub(),l.Vb(10,"p",17),l.Ec(11),l.Ub(),l.Ub(),l.Vb(12,"ion-label",18),l.Vb(13,"b"),l.Ec(14),l.jc(15,"currency"),l.Ub(),l.Ub(),l.Vb(16,"ion-button",19),l.gc("click",function(){l.wc(r);var t=e.$implicit;return l.ic().viewOrder(t.id)}),l.Ec(17," view order "),l.Ub(),l.Ub(),l.Vb(18,"ion-col",20),l.Vb(19,"ion-label"),l.Ec(20),l.Vb(21,"p"),l.Ec(22),l.Ub(),l.Vb(23,"span"),l.Vb(24,"ion-button",15),l.gc("click",function(){l.wc(r);var t=e.$implicit;return l.ic().location(t.CLocation)}),l.Rb(25,"ion-icon",16),l.Ub(),l.Ub(),l.Ub(),l.Vb(26,"ion-row",21),l.Vb(27,"ion-label",22),l.Ec(28,"Status"),l.Ub(),l.Vb(29,"ion-select",23),l.gc("ionChange",function(t){l.wc(r);var n=e.$implicit;return l.ic().driverStatus(t,n)}),l.Cc(30,D,2,3,"ion-select-option",24),l.Ub(),l.Ub(),l.Vb(31,"button",25),l.gc("click",function(){l.wc(r);var t=e.$implicit;return l.ic().sendMessage(t.CustomerId,t.Customer)}),l.Ec(32," Send message "),l.Ub(),l.Ub(),l.Ub()}if(2&t){var n=e.$implicit;l.Eb(3),l.Gc(" ",n.restaurantName," "),l.Eb(2),l.Fc(l.lc(6,7,n.DateTime,"short")),l.Eb(6),l.Gc(" ",n.restaurantStatus,""),l.Eb(3),l.Gc("Total : ",l.lc(15,10,n.Total,"ETB"),""),l.Eb(6),l.Gc(" ",n.Customer," "),l.Eb(2),l.Fc(n.PhoneNumber),l.Eb(8),l.oc("ngForOf",n.OrderStatus)}}var U,A,j,L=function(t,e){return{"location-visible":t,"location-hidden":e}},F=[{path:"",component:(U=function(){function t(e,r,n,o,s,a,u,c,d,l,f){var h=this;i(this,t),this.fb=e,this.foodService=r,this.orderService=n,this.accountService=o,this.orderDetailsService=s,this.router=a,this.sharedService=u,this.restaurantService=c,this.driverservice=d,this.callNumber=l,this.loadingController=f,this.listOfOrder=[],this.cart=[],this.regform=this.fb.group({}),this.selectedIng=[],this.numberOfChecks=1,this.checkBoxLimit=1,this.dayFinished=[],this.driverstatus=[],this.showLocationDetail=!1,this.currentDate=(new Date).toISOString(),this.increment=0,this.showScroll=!1,this.currentDate=new Date(this.currentDate).toDateString(),console.log(this.currentDate),this.restaurantService.getAllRestaurant().subscribe(function(t){h.listOfRestaurant=t}),this.accountService.getAllAccount().subscribe(function(t){h.listOfAccount=t})}return s(t,[{key:"pageScroller",value:function(){this.pageTop.scrollToTop()}},{key:"ngOnInit",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingController.create({message:"loading ...",spinner:"bubbles",animated:!0});case 2:return this.loader=t.sent,t.next=5,this.loader.present().then();case 5:this.regform=this.fb.group({status:[""],currentDate:[""]}),this.getFood(),this.getOrder(),this.getAllOrder(),this.getAccount(),this.getOrderDetails(),this.getRestaurant(),this.getDriver();case 13:case"end":return t.stop()}},t,this)}))}},{key:"getDriver",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.driverservice.getAllDriver().subscribe(function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loader.dismiss().then();case 2:return e.next=4,t;case 4:this.listOfDriver=e.sent;case 5:case"end":return e.stop()}},e,this)}))},function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loader.dismiss().then();case 2:console.log(t);case 3:case"end":return e.stop()}},e,this)}))});case 1:case"end":return t.stop()}},t,this)}))}},{key:"getRestaurant",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.restaurantService.getAllRestaurant().subscribe(function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loader.dismiss().then();case 2:return e.next=4,t;case 4:this.listOfRestaurant=e.sent;case 5:case"end":return e.stop()}},e,this)}))},function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loader.dismiss().then();case 2:console.log(t);case 3:case"end":return e.stop()}},e,this)}))});case 1:case"end":return t.stop()}},t,this)}))}},{key:"getFood",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.foodService.getAllFood().subscribe(function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loader.dismiss().then();case 2:return e.next=4,t;case 4:this.listOfFood=e.sent;case 5:case"end":return e.stop()}},e,this)}))},function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loader.dismiss().then();case 2:console.log(t);case 3:case"end":return e.stop()}},e,this)}))});case 1:case"end":return t.stop()}},t,this)}))}},{key:"onScroll",value:function(t){var e=t.detail.scrollTop;this.showLocationDetail=e>40,this.showScroll=e>300}},{key:"getAccount",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.accountService.getAllAccount().subscribe(function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loader.dismiss().then();case 2:return e.next=4,t;case 4:this.listOfAccount=e.sent;case 5:case"end":return e.stop()}},e,this)}))},function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loader.dismiss().then();case 2:console.log(t);case 3:case"end":return e.stop()}},e,this)}))});case 1:case"end":return t.stop()}},t,this)}))}},{key:"getOrderDetails",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.orderDetailsService.getAllOrderDetail().subscribe(function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loader.dismiss().then();case 2:return e.next=4,t;case 4:this.listOfOrderDetails=e.sent;case 5:case"end":return e.stop()}},e,this)}))},function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loader.dismiss().then();case 2:console.log(t);case 3:case"end":return e.stop()}},e,this)}))});case 1:case"end":return t.stop()}},t,this)}))}},{key:"getAllOrder",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.orderService.getAllOrder().subscribe(function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loader.dismiss().then();case 2:return e.next=4,t;case 4:this.listOfAllOrder=e.sent;case 5:case"end":return e.stop()}},e,this)}))},function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loader.dismiss().then();case 2:console.log(t);case 3:case"end":return e.stop()}},e,this)}))});case 1:case"end":return t.stop()}},t,this)}))}},{key:"setDisabled",value:function(t){return this.dayFinished.includes(t)}},{key:"driverStatus",value:function(t,e){var r=this;this.driverstatus=[],this.status=t.detail.value;var n=e.OrderStatus,i=n.find(function(e){return e.val==t.detail.value});this.dayFinished.includes(i)?this.dayFinished.splice(this.dayFinished.indexOf(i),1):this.dayFinished.push(i);var o=this.listOfAllOrder.find(function(t){return t.id==e.id}),s=localStorage.getItem("userId");n.forEach(function(t){r.checked=t.val==i.val,r.driverstatus.push({id:t.id,val:t.val,isChecked:r.checked})}),this.driverstatus.length>0&&this.orderService.updateOrder({id:o.id,dateTime:o.dateTime,customer:o.customer,location:{latitude:o.location.latitude,longtude:o.location.longtude},orderStatuses:this.driverstatus,total:o.total,driver:s,vehicle:o.vehicle,orderLocation:o.orderLocation,restaurantStatuses:o.restaurantStatuses,restaurantId:o.restaurantId,customerStatus:o.customerStatus,statuses:o.statuses}).subscribe(function(t){console.log(t.toString()),r.getOrder()})}},{key:"getOrder",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.listOfOrder=[],this.orderService.getAllOrder().subscribe(function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loader.dismiss().then();case 2:if(!(t.length>0&&0==this.listOfOrder.length)){e.next=19;break}return r=localStorage.getItem("userId"),e.next=6,t.find(function(t){return t.driver==r});case 6:if(!e.sent){e.next=15;break}return e.next=9,t.filter(function(t){return t.driver===r&&t.orderStatuses.find(function(t){return 0==t.isChecked&&"delivered"==t.val})&&t.statuses.find(function(t){return 0==t.isChecked&&"Reject"==t.val})});case 9:this.order=e.sent,this.getListOrder(),this.order=t.filter(function(t){return t.orderStatuses.find(function(t){return 0==t.isChecked&&"picked"==t.val})&&t.orderStatuses.find(function(t){return 0==t.isChecked&&"delivered"==t.val})&&t.orderStatuses.find(function(t){return 0==t.isChecked&&"start moving"==t.val})&&t.statuses.find(function(t){return 0==t.isChecked&&"Reject"==t.val})}),this.getListOrder(),e.next=19;break;case 15:return e.next=17,t.filter(function(t){return t.orderStatuses.find(function(t){return 0==t.isChecked&&"picked"==t.val})&&t.orderStatuses.find(function(t){return 0==t.isChecked&&"delivered"==t.val})&&t.orderStatuses.find(function(t){return 0==t.isChecked&&"start moving"==t.val})&&t.statuses.find(function(t){return 0==t.isChecked&&"Reject"==t.val})});case 17:this.order=e.sent,this.getListOrder();case 19:case"end":return e.stop()}},e,this)}))},function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loader.dismiss().then();case 2:console.log(t);case 3:case"end":return e.stop()}},e,this)}))});case 1:case"end":return t.stop()}},t,this)}))}},{key:"getListOrder",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.increment=0,this.order.forEach(function(t){return Object(d.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){var r,n,i,o,s,a,u,c,d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null==this.listOfRestaurant){e.next=17;break}if(!(r=this.listOfRestaurant.find(function(e){return e.accountId==+t.restaurantId}))){e.next=15;break}for(n=0;n<t.restaurantStatuses.length;n++)1==t.restaurantStatuses[n].isChecked&&(this.restaurantStatus=t.restaurantStatuses[n].val);if(i={id:t.id,restaurantName:r.name,DateTime:t.dateTime,Customer:this.listOfAccount.find(function(e){return e.id==+t.customer}).fullName,PhoneNumber:this.listOfAccount.find(function(e){return e.id==+t.customer}).phonenumber,CLocation:this.listOfAccount.find(function(e){return e.id==+t.customer}).locationId,RLocation:t.location,status:t.orderStatuses,OrderStatus:t.orderStatuses,Total:t.total,Driver:t.driver,CustomerId:t.customer,Vehicle:t.vehicle,orderLocation:t.orderLocation,restaurantStatus:this.restaurantStatus},o=new Date(t.dateTime).toDateString(),e.t0=this.currentDate==o,!e.t0){e.next=11;break}return e.next=10,this.listOfOrder.push(i);case 10:this.increment=this.increment+1;case 11:if(0==this.increment?(this.massge=!0,this.message="no orders"):this.massge=!1,this.listOfOrder.sort(function(t,e){return new Date(e.DateTime).getTime()-new Date(t.DateTime).getTime()}),s=t.orderStatuses.find(function(t){return 1==t.isChecked}),0==(a=t.orderStatuses.findIndex(function(t){return 1==t.isChecked})))void 0!==s&&(this.dayFinished.includes(s)?this.dayFinished.splice(this.dayFinished.indexOf(s),1):this.dayFinished.push(s),this.setDisabled(s));else if(1==a)for(u=t.orderStatuses,c=0;c<=u.length;c++)c<=1&&void 0!==(d=t.orderStatuses[c])&&(this.dayFinished.includes(d)?this.dayFinished.splice(this.dayFinished.indexOf(d),1):this.dayFinished.push(d),this.setDisabled(d));case 15:e.next=18;break;case 17:this.getRefresh();case 18:case"end":return e.stop()}},e,this)}))});case 1:case"end":return t.stop()}},t,this)}))}},{key:"viewOrder",value:function(t){var e=this;this.cart=[],this.listOfOrderDetails.filter(function(e){return e.orderId==t}).forEach(function(t){var r={CookingTime:e.listOfFood.find(function(e){return e.id==t.foodId}).cookingTime,DeliveryTime:e.listOfFood.find(function(e){return e.id==t.foodId}).deliveryTime,Description:e.listOfFood.find(function(e){return e.id==t.foodId}).description,Name:e.listOfFood.find(function(e){return e.id==t.foodId}).name,Price:e.listOfFood.find(function(e){return e.id==t.foodId}).price,amount:t.qty,categoryId:e.listOfFood.find(function(e){return e.id==t.foodId}).categoryId,id:t.foodId,picture:e.listOfFood.find(function(e){return e.id==t.foodId}).picture,restaurantId:e.listOfFood.find(function(e){return e.id==t.foodId}).restaurantId,type:e.listOfFood.find(function(e){return e.id==t.foodId}).type,orderDetailsId:t.id,orderStatus:!0};e.cart.push(r)}),this.orderService.addOrder(this.cart),this.sharedService.status.next("driver"),this.router.navigate(["/menu/order-history"])}},{key:"location",value:function(t){this.sharedService.status.next("driver-home"),this.sharedService.RestaurantLocation.next(t),this.router.navigate(["/menu/location"])}},{key:"sendMessage",value:function(t,e){this.sharedService.customerName.next(e),this.sharedService.deriverId.next(localStorage.getItem("userId")),this.sharedService.customerId.next(t),this.router.navigate(["/message"])}},{key:"doRefresh",value:function(t){var e=this;setTimeout(function(){e.getAllOrder(),t.target.complete()},2e3)}},{key:"getRefresh",value:function(){var t=this;setTimeout(function(){t.getOrder()},200)}}]),t}(),U.\u0275fac=function(t){return new(t||U)(l.Qb(a.b),l.Qb(f.a),l.Qb(h.a),l.Qb(v.a),l.Qb(m.a),l.Qb(c.g),l.Qb(g.a),l.Qb(p.a),l.Qb(R),l.Qb(I.a),l.Qb(u.N))},U.\u0275cmp=l.Kb({type:U,selectors:[["app-driver-home"]],viewQuery:function(t,e){var r;1&t&&l.Ic(S,1),2&t&&l.uc(r=l.hc())&&(e.pageTop=r.first)},decls:16,vars:8,consts:[[3,"translucent"],["color","primary"],["slot","start"],["scrollEvents","true",3,"fullscreen","ionScroll"],["pageTop",""],["slot","fixed",3,"ionRefresh"],["class","message",4,"ngIf"],[1,"orders"],["class","ion-padding meal-row",4,"ngFor","ngForOf"],["horizontal","end","vertical","bottom","slot","fixed",3,"ngClass"],["color","light",3,"click"],["md","chevron-up-outline","ios","chevron-up-circle-outline"],[1,"message"],[1,"ion-padding","meal-row"],["size","6","id","restaurant-info",1,"border-bottom"],[3,"click"],["name","location-outline"],[2,"background-color","#f8f9fa","border-radius","5px","padding-top","3px","padding-left","7px","margin-top","5px"],["color","dark"],["fill","clear",3,"click"],["size","6",1,"border-bottom"],[1,"status"],[2,"padding-top","9px","padding-left","5px"],["interface","popover",3,"ionChange"],[3,"disabled","value",4,"ngFor","ngForOf"],[2,"background-color","#2185d0","border-color","#2185d0","color","#fff","border-radius","0.28571429rem","margin",".25rem .5rem .25rem 0",3,"click"],[3,"disabled","value"]],template:function(t,e){1&t&&(l.Vb(0,"ion-header",0),l.Vb(1,"ion-toolbar",1),l.Vb(2,"ion-buttons",2),l.Rb(3,"ion-menu-button"),l.Ub(),l.Vb(4,"ion-title"),l.Ec(5,"Driver Home"),l.Ub(),l.Ub(),l.Ub(),l.Vb(6,"ion-content",3,4),l.gc("ionScroll",function(t){return e.onScroll(t)}),l.Vb(8,"ion-refresher",5),l.gc("ionRefresh",function(t){return e.doRefresh(t)}),l.Rb(9,"ion-refresher-content"),l.Ub(),l.Cc(10,C,5,1,"div",6),l.Vb(11,"div",7),l.Cc(12,P,33,13,"ion-row",8),l.Ub(),l.Vb(13,"ion-fab",9),l.Vb(14,"ion-fab-button",10),l.gc("click",function(){return e.pageScroller()}),l.Rb(15,"ion-icon",11),l.Ub(),l.Ub(),l.Ub()),2&t&&(l.oc("translucent",!0),l.Eb(6),l.oc("fullscreen",!0),l.Eb(4),l.oc("ngIf",e.massge),l.Eb(2),l.oc("ngForOf",e.listOfOrder),l.Eb(1),l.oc("ngClass",l.sc(5,L,e.showScroll,!e.showScroll)))},directives:[u.p,u.K,u.i,u.x,u.I,u.k,u.z,u.A,o.n,o.m,u.l,o.l,u.m,u.q,u.o,u.C,u.u,u.j,u.h,u.F,u.R,u.G],pipes:[o.f,o.d],styles:["ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:25px}ion-content[_ngcontent-%COMP%]{position:absolute;--padding-bottom:50px}ion-content[_ngcontent-%COMP%]   .orders[_ngcontent-%COMP%]{margin-top:58px}.light-bg[_ngcontent-%COMP%]{background:#fff;z-index:10}.meal-row[_ngcontent-%COMP%]{padding-bottom:0}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid var(--ion-color-step-150,rgba(0,0,0,.07))}#map[_ngcontent-%COMP%]{width:60%;height:280px}ion-row[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{background-color:#dee2e6;border-radius:3px;margin-top:4px}ion-button[_ngcontent-%COMP%]{margin-top:2px}ion-row[_ngcontent-%COMP%]{border-radius:12px;background-color:#e9ecef;margin-top:4px}ion-row[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{padding-top:19px;padding-left:107px}ion-button[_ngcontent-%COMP%]{padding-left:0}ion-grid[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{border-radius:9px;background-color:#f5f5f5;height:139px;margin-top:60px}ion-label[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{padding-left:60px;padding-top:24px;text-align:center;font-size:28px;font-style:normal;font-family:cursive}.message[_ngcontent-%COMP%]{padding-top:70px;padding-left:12px;color:#337ab7;font-size:27px}.location-visible[_ngcontent-%COMP%]{opacity:1;transition:.5s}.location-hidden[_ngcontent-%COMP%]{opacity:0;transition:.5s}#restaurant-info[_ngcontent-%COMP%]{border-radius:6px;background-color:#dcdcdc;margin-left:-12px}"]}),U)}],E=((j=function t(){i(this,t)}).\u0275fac=function(t){return new(t||j)},j.\u0275mod=l.Ob({type:j}),j.\u0275inj=l.Nb({imports:[[c.j.forChild(F)],c.j]}),j),V=((A=function t(){i(this,t)}).\u0275fac=function(t){return new(t||A)},A.\u0275mod=l.Ob({type:A}),A.\u0275inj=l.Nb({imports:[[o.c,a.e,u.L,E,a.m]]}),A)},VNSQ:function(r,n,o){"use strict";o.d(n,"a",function(){return f});var a=o("2Vo4"),u=o("cxbk"),c=o("fXoL"),d=o("tk/3"),l=o("ldse"),f=function(){var r=function(){function r(t,e){i(this,r),this.http=t,this.sharedService=e,this.cart=[],this.cartItemCount=new a.a(0),this.RestaurantId=new a.a({}),this.orderStatus=new a.a({}),this.order=[],this.orderItemCount=new a.a(0),this.APIURL=u.a.apiURL}return s(r,[{key:"create",value:function(t){return this.http.post(this.APIURL+"/order",t)}},{key:"getAllOrder",value:function(){return this.http.get(this.APIURL+"/order")}},{key:"getOrderByDate",value:function(t){return this.http.get(this.APIURL+"/order/"+t)}},{key:"updateOrder",value:function(t){return this.http.put(this.APIURL+"/order/",t)}},{key:"removeOrder",value:function(t){return this.http.delete(this.APIURL+"/order/"+t).toPromise()}},{key:"updateOrderStatus",value:function(t){return this.http.put(this.APIURL+"/orderstatus/",t)}},{key:"getCart",value:function(){return this.cart}},{key:"getOrders",value:function(){return this.order}},{key:"getCartItemCount",value:function(){return this.cartItemCount}},{key:"getOrderItemCount",value:function(){return this.orderItemCount}},{key:"getRestaurantId",value:function(){return this.RestaurantId}},{key:"getOrderStatus",value:function(){return this.orderStatus}},{key:"addOrder",value:function(t){var e=this;this.order=[],this.amount=0,this.order.forEach(function(t){var r=e.order.indexOf(function(e){return e.orderDetailsId===t.orderDetailsId});e.order.splice(r,1)}),this.orderItemCount.next(0),t.forEach(function(t){e.amount=e.amount+t.amount,e.order.push({CookingTime:t.CookingTime,DeliveryTime:t.DeliveryTime,Description:t.Description,Name:t.Name,Price:t.Price,amount:t.amount,categoryId:t.categoryId,id:t.Food,picture:t.picture,restaurantId:t.restaurantId,type:t.type,orderDetailsId:t.orderDetailsId})}),this.orderItemCount.next(this.orderItemCount.value+this.amount)}},{key:"addProduct",value:function(t){var r,n=!1,i=e(this.cart);try{for(i.s();!(r=i.n()).done;){var o=r.value;if(o.id===t.id){o.amount+=1,n=!0;break}}}catch(s){i.e(s)}finally{i.f()}n||(t.amount=1,this.cart.push(t)),this.cartItemCount.next(this.cartItemCount.value+1)}},{key:"decreaseProduct",value:function(r){var n,i=e(this.cart.entries());try{for(i.s();!(n=i.n()).done;){var o=t(n.value,2),s=o[0],a=o[1];a.id===r.id&&(a.amount-=1,0==a.amount&&this.cart.splice(s,1))}}catch(u){i.e(u)}finally{i.f()}this.cartItemCount.next(this.cartItemCount.value-1)}},{key:"removeProduct",value:function(r){var n,i=e(this.cart.entries());try{for(i.s();!(n=i.n()).done;){var o=t(n.value,2),s=o[0],a=o[1];a.id===r.id&&(this.cartItemCount.next(this.cartItemCount.value-a.amount),this.cart.splice(s,1))}}catch(u){i.e(u)}finally{i.f()}}}]),r}();return r.\u0275fac=function(t){return new(t||r)(c.cc(d.a),c.cc(l.a))},r.\u0275prov=c.Mb({token:r,factory:r.\u0275fac,providedIn:"root"}),r}()},ldse:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r("2Vo4"),o=r("fXoL"),a=function(){var t=function(){function t(){i(this,t),this.restaurant=new n.a({}),this.status=new n.a({}),this.location=new n.a({}),this.orderId=new n.a({}),this.RestaurantLocation=new n.a({}),this.resId=new n.a({}),this.listOfCatagoryFilter=new n.a({}),this.deriverId=new n.a({}),this.customerId=new n.a({}),this.customerName=new n.a({})}return s(t,[{key:"getMenuFilter",value:function(){return this.listOfCatagoryFilter}},{key:"getLocation",value:function(){return this.location}},{key:"getStatus",value:function(){return this.status}},{key:"getRestaurantLocation",value:function(){return this.RestaurantLocation}},{key:"getRestaurantId",value:function(){return this.resId}},{key:"getDriverId",value:function(){return this.deriverId}},{key:"getCustomerId",value:function(){return this.customerId}},{key:"getCustomerName",value:function(){return this.customerName}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();