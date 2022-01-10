!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{X3zk:function(r,n,o){"use strict";o.r(n),o.d(n,"LoginPageModule",function(){return w});var i=o("ofXK"),s=o("3Pt+"),a=o("TEn/"),c=o("tyNb"),u=o("mrSG"),l=o("fXoL"),b=o("enR7");function f(e,t){1&e&&l.Rb(0,"small",21)}function p(e,t){1&e&&l.Rb(0,"small",21)}var d,m,g,h=function(e,t){return{"fa-eye-slash":e,"fa-eye":t}},v=[{path:"",component:(d=function(){function r(t,n,o,i,s){e(this,r),this.authServices=t,this.router=n,this.alertCtrl=o,this.fb=i,this.platform=s,this.regform=this.fb.group({})}var n,o,i;return n=r,(o=[{key:"ngOnInit",value:function(){this.regform=this.fb.group({email:["",s.o.compose([s.o.required,s.o.email])],password:["",s.o.required]})}},{key:"signIn",value:function(){var e=this,t=this.regform.get("email").value,r=this.regform.get("password").value;this.regform.valid?this.authServices.getAllAccount().subscribe(function(n){return Object(u.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.filter(function(e){return e.email==t&&e.password==r});case 2:(o=e.sent).length>0?(localStorage.setItem("userId",o[0].id),localStorage.setItem("fullName",o[0].fullName),localStorage.setItem("roleType",o[0].type),localStorage.setItem("active",o[0].active),"driver"==o[0].type?"true"==o[0].active?(this.presentAlert("Login successfully."),this.router.navigate(["/menu/driver-home"]),this.regform.reset()):this.presentAlert("Please contact your system administrator"):this.presentAlert("Please enter correct username and password!!")):this.presentAlert("Please enter correct username and password!!");case 4:case"end":return e.stop()}},e,this)}))},function(t){return Object(u.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loader.dismiss().then();case 2:console.log(t);case 3:case"end":return e.stop()}},e,this)}))}):this.errorAlert()}},{key:"ionViewDidEnter",value:function(){this.subscription=this.platform.backButton.subscribe(function(){navigator.app.exitApp()})}},{key:"ionViewWillLeave",value:function(){this.subscription.unsubscribe()}},{key:"presentAlert",value:function(e){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertCtrl.create({cssClass:"my-custom-class",header:"Login",message:e,buttons:["OK"]});case 2:return r=t.sent,t.next=5,r.present();case 5:case"end":return t.stop()}},t,this)}))}},{key:"errorAlert",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertCtrl.create({cssClass:"my-custom-class",header:"Login",message:"Please Enter All field.",buttons:["OK"]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"toggleFieldTextType",value:function(){this.fieldTextType=!this.fieldTextType}},{key:"register",value:function(){this.router.navigate(["/signup"])}}])&&t(n.prototype,o),i&&t(n,i),r}(),d.\u0275fac=function(e){return new(e||d)(l.Qb(b.a),l.Qb(c.g),l.Qb(a.a),l.Qb(s.b),l.Qb(a.P))},d.\u0275cmp=l.Kb({type:d,selectors:[["app-login"]],decls:34,vars:9,consts:[[3,"translucent"],["color","primary"],[2,"text-align","center"],["padding",""],[1,"container","pt-3"],[1,"row","justify-content-sm-center"],[1,"col-sm-10","col-md-6"],[1,"card","border-info"],[1,"card-header",2,"text-align","center"],[1,"card-body"],[1,"row"],[1,"col-md-12"],[3,"formGroup"],["name","mail"],["type","text","formControlName","email","placeholder","Enter your email",3,"required"],["class","form-text text-muted",4,"ngIf"],["name","lock-closed"],["placeholder","Enter your password","formControlName","password",3,"type","required"],[1,"fa",3,"ngClass","click"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block","mb-1",2,"margin-top","12px","border-top-left-radius","20px","border-top-right-radius","20px",3,"click"],[2,"margin-left","-37px","color","#234ada","background-color","#f8f9fa",3,"click"],[1,"form-text","text-muted"]],template:function(e,t){1&e&&(l.Vb(0,"ion-header",0),l.Vb(1,"ion-toolbar",1),l.Vb(2,"ion-title",2),l.Ec(3,"Login "),l.Ub(),l.Ub(),l.Ub(),l.Vb(4,"ion-content",3),l.Vb(5,"div",4),l.Vb(6,"div",5),l.Vb(7,"div",6),l.Vb(8,"div",7),l.Vb(9,"div",8),l.Ec(10,"Login"),l.Ub(),l.Vb(11,"div",9),l.Vb(12,"div",10),l.Vb(13,"div",11),l.Vb(14,"form",12),l.Vb(15,"ion-item"),l.Rb(16,"ion-icon",13),l.Ec(17,"\xa0\xa0 "),l.Rb(18,"ion-input",14),l.Cc(19,f,1,0,"small",15),l.Ub(),l.Vb(20,"ion-item"),l.Rb(21,"ion-icon",16),l.Ec(22,"\xa0\xa0 "),l.Rb(23,"ion-input",17),l.Cc(24,p,1,0,"small",15),l.Vb(25,"i",18),l.gc("click",function(){return t.toggleFieldTextType()}),l.Ub(),l.Ub(),l.Vb(26,"button",19),l.gc("click",function(){return t.signIn()}),l.Ec(27," Login "),l.Ub(),l.Vb(28,"ion-item"),l.Vb(29,"ion-label"),l.Ec(30,"Don't have an account ?"),l.Ub(),l.Vb(31,"button",20),l.gc("click",function(){return t.register()}),l.Ec(32," Register "),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Ub(),l.Rb(33,"router-outlet")),2&e&&(l.oc("translucent",!0),l.Eb(14),l.oc("formGroup",t.regform),l.Eb(5),l.oc("ngIf",!t.regform.get("email").valid&&t.regform.get("email").touched),l.Eb(4),l.oc("type",t.fieldTextType?"text":"password"),l.Eb(1),l.oc("ngIf",!t.regform.get("password").valid&&t.regform.get("password").touched),l.Eb(1),l.oc("ngClass",l.sc(6,h,!t.fieldTextType,t.fieldTextType)))},directives:[a.p,a.K,a.I,a.k,s.p,s.j,s.d,a.t,a.q,a.s,a.S,s.i,s.c,s.n,i.n,i.l,a.u,c.k],styles:[".login-button[_ngcontent-%COMP%]{border-top-left-radius:20px;border-top-right-radius:20px}"]}),d)}],y=((g=function t(){e(this,t)}).\u0275fac=function(e){return new(e||g)},g.\u0275mod=l.Ob({type:g}),g.\u0275inj=l.Nb({imports:[[c.j.forChild(v)],c.j]}),g),w=((m=function t(){e(this,t)}).\u0275fac=function(e){return new(e||m)},m.\u0275mod=l.Ob({type:m}),m.\u0275inj=l.Nb({imports:[[i.c,s.e,a.L,y,s.m]]}),m)}}])}();