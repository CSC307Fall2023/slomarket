"use strict";(()=>{var e={};e.id=7071,e.ids=[7071],e.modules={92509:e=>{e.exports=require("firebase-admin")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},51671:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>l,originalPathname:()=>v,requestAsyncStorage:()=>d,routeModule:()=>n,serverHooks:()=>c,staticGenerationAsyncStorage:()=>p,staticGenerationBailout:()=>m});var a={};r.r(a),r.d(a,{PUT:()=>PUT}),r(78976);var s=r(10884),i=r(16132),o=r(95798),u=r(3082);async function PUT(e,{params:t}){let r;let a=t.id;return await u.auth.getUser(a).then(async e=>{e.emailVerified&&"calpoly.edu"==e.email.split("@").pop()?await u.db.collection("users").doc(a).update({isStudent:!0}).then(async()=>{await u.auth.setCustomUserClaims(a,{student:!0}).then(()=>{r=o.Z.json({message:"verified student"},{status:200})}).catch(e=>{r=o.Z.json({error:`could not verify user: ${e.message}`},{status:500})})}).catch(e=>{r=(0,o.Z)({error:`could not update user: ${e.message}`},{status:500})}):r=o.Z.json({error:"the user does not have a verified calpoly email"},{status:403})}).catch(e=>{r=o.Z.json({error:`could not get user: ${e.message}`},{status:404})}),r}let n=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/verify/[id]/route",pathname:"/api/verify/[id]",filename:"route",bundlePath:"app/api/verify/[id]/route"},resolvedPagePath:"/Users/jlau/Code-2023/cpmarketplace/src/app/api/verify/[id]/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:d,staticGenerationAsyncStorage:p,serverHooks:c,headerHooks:l,staticGenerationBailout:m}=n,v="/api/verify/[id]/route"}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[6126,4933,6449,5798,3082],()=>__webpack_exec__(51671));module.exports=r})();