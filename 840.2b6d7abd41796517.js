"use strict";(self.webpackChunkangular_libraries=self.webpackChunkangular_libraries||[]).push([[840],{840:(D,s,a)=>{a.r(s),a.d(s,{TransliterationModule:()=>h});var c=a(895),l=a(322),e=a(256);const u={geo:{a:"\u10d0",b:"\u10d1",g:"\u10d2",d:"\u10d3",e:"\u10d4",v:"\u10d5",z:"\u10d6",T:"\u10d7",i:"\u10d8",k:"\u10d9",l:"\u10da",m:"\u10db",n:"\u10dc",o:"\u10dd",p:"\u10de",J:"\u10df",r:"\u10e0",s:"\u10e1",t:"\u10e2",u:"\u10e3",f:"\u10e4",q:"\u10e5",R:"\u10e6",y:"\u10e7",S:"\u10e8",C:"\u10e9",c:"\u10ea",Z:"\u10eb",w:"\u10ec",W:"\u10ed",x:"\u10ee",j:"\u10ef",h:"\u10f0",A:"\u10d0",B:"\u10d1",G:"\u10d2",D:"\u10d3",E:"\u10d4",V:"\u10d5",I:"\u10d8",K:"\u10d9",L:"\u10da",M:"\u10db",N:"\u10dc",O:"\u10dd",P:"\u10de",U:"\u10e3",F:"\u10e4",Q:"\u10e5",Y:"\u10e7",X:"\u10ee",H:"\u10f0"},eng:{\u10d0:"a",\u10d1:"b",\u10d2:"g",\u10d3:"d",\u10d4:"e",\u10d5:"v",\u10d6:"z",\u10d7:"t",\u10d8:"i",\u10d9:"k",\u10da:"l",\u10db:"m",\u10dc:"n",\u10dd:"o",\u10de:"p",\u10df:"j",\u10e0:"r",\u10e1:"s",\u10e2:"t",\u10e3:"u",\u10e4:"f",\u10e5:"q",\u10e6:"r",\u10e7:"y",\u10e8:"sh",\u10e9:"ch",\u10ea:"c",\u10eb:"z",\u10ec:"w",\u10ed:"ch",\u10ee:"x",\u10ef:"j",\u10f0:"h"}};let d=(()=>{class t{constructor(n){this.el=n,this.transliterationOptions={to:"geo"},n.nativeElement.addEventListener("keydown",this.onKeyDown.bind(this))}onKeyDown(n){return!this.isCharClicked(n)||(n.preventDefault(),this.replaceLastChar(this.transformFromTo(n,this.findCorrectEnum())),!1)}transformFromTo(n,i){return i[n.key.charCodeAt(0).toString()]||i[n.key]||n.key}isCharClicked(n){return n.code.includes("Key")}findCorrectEnum(){return this.transliterationOptions.language?this.transliterationOptions.language:u[this.transliterationOptions.to]||{}}replaceLastChar(n){this.el.nativeElement.value=this.el.nativeElement.value.slice(0,this.el.nativeElement.value.length)+n}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq))},t.\u0275dir=e.lG2({type:t,selectors:[["transliteration"]],inputs:{transliterationOptions:"transliterationOptions"}}),t})(),g=(()=>{class t extends d{}return t.\u0275fac=function(){let r;return function(i){return(r||(r=e.n5z(t)))(i||t)}}(),t.\u0275dir=e.lG2({type:t,selectors:[["input","transliterate",""]],features:[e.qOj]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({}),t})();const v=function(){return{to:"geo"}},T=function(){return{to:"eng"}},p=[{path:"",pathMatch:"full",component:(()=>{class t{static#t=this.\u0275fac=function(i){return new(i||t)};static#e=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-transliteration"]],decls:9,vars:4,consts:[["for","toGeo"],["id","toGeo","transliterate","",3,"transliterationOptions"],["for","toEng"],["id","toEng","transliterate","",3,"transliterationOptions"]],template:function(i,o){1&i&&(e.TgZ(0,"div")(1,"label",0),e._uU(2,"to Georgian: "),e.qZA(),e._UZ(3,"input",1),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"div")(6,"label",2),e._uU(7,"to English: "),e.qZA(),e._UZ(8,"input",3),e.qZA()),2&i&&(e.xp6(3),e.Q6J("transliterationOptions",e.DdM(2,v)),e.xp6(5),e.Q6J("transliterationOptions",e.DdM(3,T)))},dependencies:[g]})}return t})()}];let x=(()=>{class t{static#t=this.\u0275fac=function(i){return new(i||t)};static#e=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(p),l.Bz]})}return t})(),h=(()=>{class t{static#t=this.\u0275fac=function(i){return new(i||t)};static#e=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[c.ez,x,f]})}return t})()}}]);