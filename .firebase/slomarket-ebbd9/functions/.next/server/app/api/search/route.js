"use strict";(()=>{var e={};e.id=280,e.ids=[280],e.modules={92509:e=>{e.exports=require("firebase-admin")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},87085:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>p,originalPathname:()=>m,requestAsyncStorage:()=>c,routeModule:()=>u,serverHooks:()=>d,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>h});var a={};t.r(a),t.d(a,{GET:()=>GET}),t(78976);var s=t(10884),o=t(16132),i=t(95798);let n=require("firebase-admin/firestore");async function GET(e){let r=new URL(e.url),t=r.searchParams.get("query");if(!t)return i.Z.json({error:"No search query provided"},{status:400});let a=t.toLowerCase(),s=(0,n.query)(listingsRef,(0,n.where)("title_lower",">=",a),(0,n.where)("title_lower","<=",a+"")),o=(0,n.query)(listingsRef,(0,n.where)("description_lower",">=",a),(0,n.where)("description_lower","<=",a+""));try{let[e,r]=await Promise.all([(0,n.getDocs)(s),(0,n.getDocs)(o)]),t=e.docs.map(e=>({id:e.id,...e.data()})),a=r.docs.map(e=>({id:e.id,...e.data()})),u=[...t,...a],c=Array.from(new Map(u.map(e=>[e.id,e])).values());return console.log("Fetched Listings: ",c),i.Z.json(c)}catch(e){return console.error("Error fetching search results:",e),i.Z.json({error:"Error fetching search results"},{status:500})}}t(3082);let u=new s.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/search/route",pathname:"/api/search",filename:"route",bundlePath:"app/api/search/route"},resolvedPagePath:"/Users/jlau/Code-2023/cpmarketplace/src/app/api/search/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:d,headerHooks:p,staticGenerationBailout:h}=u,m="/api/search/route"}};var r=require("../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[6126,4933,6449,5798,3082],()=>__webpack_exec__(87085));module.exports=t})();