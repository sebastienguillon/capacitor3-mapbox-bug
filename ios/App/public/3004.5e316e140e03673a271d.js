(self.webpackChunkcapacitor3_mapbox_bug=self.webpackChunkcapacitor3_mapbox_bug||[]).push([[3004],{3004:(e,t,n)=>{"use strict";n.r(t),n.d(t,{WithClickEventPageModule:()=>m});var o=n(8583),i=n(665),a=n(3083),c=n(2316),r=n(2958),s=n(639);const l=["mapContainer"],p=[{path:"",component:(()=>{class e{constructor(){}ngAfterViewInit(){console.log("WithClickEventPage ngAfterViewInit()"),this.initMap()}ngOnDestroy(){var e;console.log("WithClickEventPage ngOnDestroy(), remove map"),null===(e=this.map)||void 0===e||e.remove()}initMap(){if(console.log("WithClickEventPage initMap()"),this.mapContainer){const e=new r.Map({accessToken:"pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA",container:this.mapContainer.nativeElement,style:"mapbox://styles/mapbox/streets-v11"});console.log("WithClickEventPage, map created"),this.map=e,e.on("load",()=>{console.log('WithClickEventPage map "load" event'),e.resize()}),e.on("resize",()=>{console.log('WithClickEventPage map "resize" event')}),e.on("click",e=>{console.log('WithClickEventPage map "click" event',JSON.stringify(e))}),e.on("error",e=>{console.log('WithClickEventPage map "error" event',JSON.stringify(e))})}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-with-click-event"]],viewQuery:function(e,t){if(1&e&&s.Gf(l,5),2&e){let e;s.iGM(e=s.CRH())&&(t.mapContainer=e.first)}},decls:9,vars:1,consts:[[3,"translucent"],["slot","start"],["defaultHref","/"],["force-overscroll","false"],[1,"map"],["mapContainer",""]],template:function(e,t){1&e&&(s.TgZ(0,"ion-header",0),s.TgZ(1,"ion-toolbar"),s.TgZ(2,"ion-buttons",1),s._UZ(3,"ion-back-button",2),s.qZA(),s.TgZ(4,"ion-title"),s._uU(5," Click events (will crash on iOS) "),s.qZA(),s.qZA(),s.qZA(),s.TgZ(6,"ion-content",3),s._UZ(7,"div",4,5),s.qZA()),2&e&&s.Q6J("translucent",!0)},directives:[a.Gu,a.sr,a.Sm,a.oU,a.cs,a.wd,a.W2],styles:[".map[_ngcontent-%COMP%]{height:100%;width:100%;background-color:#f333}"]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[c.Bz.forChild(p)],c.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[o.ez,i.u5,a.Pc,g]]}),e})()}}]);