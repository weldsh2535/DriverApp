(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{BjQp:function(t,n,e){"use strict";e.r(n),e.d(n,"ContactPageModule",function(){return u});var o=e("ofXK"),c=e("3Pt+"),i=e("TEn/"),r=e("tyNb"),s=e("fXoL"),a=e("6wYF");const b=[{path:"",component:(()=>{class t{constructor(t){this.accountService=t}ngOnInit(){this.accountService.getAllAccount().subscribe(t=>{let n=localStorage.getItem("userId");this.address=t.find(t=>t.id==+n).locationId,this.email=t.find(t=>t.id==+n).email})}buttonClick(){}}return t.\u0275fac=function(n){return new(n||t)(s.Qb(a.a))},t.\u0275cmp=s.Kb({type:t,selectors:[["app-contact"]],decls:15,vars:3,consts:[[3,"translucent"],["color","primary"],["slot","start"],["defaultHref","profile"],["button","","detail","",3,"click"]],template:function(t,n){1&t&&(s.Vb(0,"ion-header",0),s.Vb(1,"ion-toolbar",1),s.Vb(2,"ion-buttons",2),s.Rb(3,"ion-back-button",3),s.Ub(),s.Vb(4,"ion-title"),s.Ec(5,"Contact Us"),s.Ub(),s.Ub(),s.Ub(),s.Vb(6,"ion-content"),s.Vb(7,"ion-item"),s.Vb(8,"ion-label"),s.Ec(9,"Our Address"),s.Ub(),s.Ec(10),s.Ub(),s.Vb(11,"ion-item",4),s.gc("click",function(){return n.buttonClick()}),s.Vb(12,"ion-label"),s.Ec(13,"Email Us"),s.Ub(),s.Ec(14),s.Ub(),s.Ub()),2&t&&(s.oc("translucent",!0),s.Eb(10),s.Gc(" ",n.address," "),s.Eb(4),s.Gc(" ",n.email," "))},directives:[i.p,i.K,i.i,i.e,i.f,i.I,i.k,i.t,i.u],styles:["ion-input[_ngcontent-%COMP%]{--padding-start:85px}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{padding:0;--border-radius:14px}"]}),t})()}];let l=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({imports:[[r.j.forChild(b)],r.j]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.Ob({type:t}),t.\u0275inj=s.Nb({imports:[[o.c,c.e,i.L,l]]}),t})()}}]);