"use strict";(()=>{var e={};e.id=8384,e.ids=[8384],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},18908:(e,r,a)=>{a.r(r),a.d(r,{headerHooks:()=>c,originalPathname:()=>h,requestAsyncStorage:()=>d,routeModule:()=>u,serverHooks:()=>p,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>m});var i={};a.r(i),a.d(i,{GET:()=>GET}),a(78976);var t=a(10884),s=a(16132),o=a(95798),n=a(59187);async function GET(e){let r=new URL(e.url),a=r.searchParams.get("query");if(!a)return o.Z.json({error:"No search query provided"},{status:400});let i=await n.Z.listing.findMany({where:{OR:[{title:{contains:a,mode:"insensitive"}},{description:{contains:a,mode:"insensitive"}}]},include:{user:!0,category:!0}});return o.Z.json(i)}let u=new t.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/search/[id]/route",pathname:"/api/search/[id]",filename:"route",bundlePath:"app/api/search/[id]/route"},resolvedPagePath:"/Users/jlau/Code-2023/cpmarketplace/src/app/api/search/[id]/route.js",nextConfigOutput:"",userland:i}),{requestAsyncStorage:d,staticGenerationAsyncStorage:l,serverHooks:p,headerHooks:c,staticGenerationBailout:m}=u,h="/api/search/[id]/route"},59187:(e,r,a)=>{a.d(r,{Z:()=>s});let i=require("@prisma/client");globalThis.prisma||(globalThis.prisma=new i.PrismaClient({log:["query"]}));let t=globalThis.prisma,s=t}};var r=require("../../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),a=r.X(0,[6126,4933,6449,5798],()=>__webpack_exec__(18908));module.exports=a})();