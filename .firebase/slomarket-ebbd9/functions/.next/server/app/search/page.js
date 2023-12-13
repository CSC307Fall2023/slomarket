(()=>{var e={};e.id=2797,e.ids=[2797],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},77655:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>l});var s=r(67096),i=r(16132),a=r(37284),n=r.n(a),o=r(32564),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);r.d(t,c);let l=["",{children:["search",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,85487)),"/Users/jlau/Code-2023/cpmarketplace/src/app/search/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,96109)),"/Users/jlau/Code-2023/cpmarketplace/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/jlau/Code-2023/cpmarketplace/src/app/search/page.js"],u="/search/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/search/page",pathname:"/search",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},62606:(e,t,r)=>{Promise.resolve().then(r.bind(r,38826))},38826:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>page,dynamic:()=>U});var s=r(30784),i=r(9885),a=r(57114),n=r(61522),o=r(76151),c=r(70436),l=r(71214),d=r(16854),u=r(16614),p=r.n(u),h=r(64832),x=r.n(h),g=r(81932),m=r.n(g),f=r(58111),j=r.n(f),y=r(97445),v=r.n(y),q=r(51892),_=r.n(q),w=r(88707),C=r.n(w);let Filters_SortFilter=({value:e,onChange:t})=>(0,s.jsxs)(j(),{variant:"outlined",sx:{mb:2,minWidth:120},children:[s.jsx(v(),{children:"Sort By"}),(0,s.jsxs)(_(),{value:e,onChange:e=>t(e.target.value),label:"Sort By",children:[s.jsx(C(),{value:"priceLowest",children:"Price: Lowest First"}),s.jsx(C(),{value:"priceHighest",children:"Price: Highest First"}),s.jsx(C(),{value:"newest",children:"Newly Listed"})]})]});var F=r(26017),P=r.n(F),S=r(16061),b=r.n(S);let Filters_VerifiedFilter=({checked:e,onChange:t})=>s.jsx(P(),{control:s.jsx(b(),{checked:e,onChange:e=>t(e.target.checked)}),label:"Verified User Only"}),components_FilterComponent=({onFilterChange:e})=>{let[t,r]=(0,i.useState)(""),[a,n]=(0,i.useState)(""),[o,c]=(0,i.useState)(!1),[l,u]=(0,i.useState)(null),[h,g]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{""!==a&&navigator.geolocation.getCurrentPosition(e=>{u({latitude:e.coords.latitude,longitude:e.coords.longitude})},e=>{console.error("Error getting location: ",e)})},[a]),(0,s.jsxs)(d.default,{direction:"row",spacing:3,display:"flex",flexDirection:"row",p:2,alignItems:"center",children:[s.jsx(Filters_SortFilter,{value:t,onChange:r}),s.jsx(Filters_VerifiedFilter,{checked:o,onChange:c}),s.jsx(p(),{onClick:()=>{if(""!==a&&!l){alert("Location is not available.");return}e({sort:t,radius:""!==a?a:null,verified:o,userLocation:""!==a?l:null}),g(!0)},variant:"contained",color:"primary",sx:{mt:2},children:"Apply Filters"}),s.jsx(x(),{open:h,autoHideDuration:6e3,onClose:()=>g(!1),anchorOrigin:{vertical:"top",horizontal:"left"},children:s.jsx(m(),{onClose:()=>g(!1),severity:"success",sx:{width:"100%"},children:"Filters applied successfully!"})})]})};var M=r(11605),k=r(43872),L=r(99360),A=r.n(L),E=r(33987),Z=r.n(E),G=r(21971),H=r.n(G),I=r(53531),V=r.n(I),B=r(59853);let U="force-static";function deg2rad(e){return e*(Math.PI/180)}let page=()=>{let e=(0,a.useSearchParams)(),[t,r]=(0,i.useState)([]),[u,h]=(0,i.useState)(!1),[x,g]=(0,i.useState)(1),[m,f]=(0,i.useState)({sort:"",radius:5,verified:!1});(0,i.useEffect)(()=>{let t=e.get("query");t&&performSearch(t)},[e]);let performSearch=async e=>{h(!0);try{let t=(0,n.hJ)(o.db,"listings"),s=[],i=await (0,n.PL)(t);i.forEach(t=>{try{let r=t.data();passesFilters(r,e)&&s.push({id:t.id,...r})}catch(e){console.error("Error processing document",t.id,e)}}),s=applyAdditionalFilters(s),r(s)}catch(e){console.error("Error fetching search results: ",e)}h(!1)},passesFilters=(e,t)=>{let r=t.toLowerCase(),s=e.description.toLowerCase().includes(r)||e.category.toLowerCase().includes(r)||e.title.toLowerCase().includes(r),i=!m.verified||m.verified&&e.studentVerification;return s&&i&&!0},applyAdditionalFilters=e=>("priceLowest"===m.sort?e.sort((e,t)=>parseFloat(e.price)-parseFloat(t.price)):"priceHighest"===m.sort&&e.sort((e,t)=>parseFloat(t.price)-parseFloat(e.price)),"newest"===m.sort&&e.sort((e,t)=>new Date(t.createdAt)-new Date(e.createdAt)),m.userLocation&&m.radius&&(e=e.filter(e=>{let t=function(e,t,r,s){let i=deg2rad(r-e),a=deg2rad(s-t),n=Math.sin(i/2)*Math.sin(i/2)+Math.cos(deg2rad(e))*Math.cos(deg2rad(r))*Math.sin(a/2)*Math.sin(a/2);return 3958.8*(2*Math.atan2(Math.sqrt(n),Math.sqrt(1-n)))}(m.userLocation.latitude,m.userLocation.longitude,e.location.latitude,e.location.longitude);return t<=parseFloat(m.radius)})),e);return(0,s.jsxs)(k.Z,{p:3,children:[s.jsx(components_FilterComponent,{onFilterChange:t=>{f(t),performSearch(e.get("query"))}}),s.jsx(M.Z,{}),s.jsx(Z(),{variant:"h4",sx:{marginBottom:2,color:"#2B7257"},children:(0,s.jsxs)("strong",{children:["Searching for: ",e.get("query")]})}),u?s.jsx(k.Z,{display:"flex",justifyContent:"center",alignItems:"center",children:s.jsx(A(),{})}):0===t.length?(0,s.jsxs)(k.Z,{textAlign:"center",p:30,children:[(0,s.jsxs)(Z(),{variant:"h5",gutterBottom:!0,children:["No listings for ",e.get("query"),". Make one from here!"]}),s.jsx(p(),{variant:"contained",color:"primary",startIcon:s.jsx(B.Z,{}),onClick:()=>{},children:"Create Listing"})]}):(0,s.jsxs)(k.Z,{p:0,children:[s.jsx(H(),{container:!0,spacing:2,children:t.slice((x-1)*20,20*x).map((e,t)=>s.jsx(H(),{item:!0,xs:12,sm:12,md:4,lg:3,xl:2.4,children:s.jsx(c.Z,{loading:u,listingId:e.id,title:e.title,createdAt:e.createdAt,updatedAt:e.updatedAt,description:e.description,images:e.images,location:e.location,price:e.price,studentVerification:e.studentVerification,priceHistory:e.priceHistory})},e.id))}),s.jsx(d.default,{spacing:2,alignItems:"center",marginY:5,children:s.jsx(V(),{count:Math.ceil(t.length/20),page:x,onChange:(e,t)=>{g(t)}})})]}),s.jsx(l.Z,{})]})}},85487:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>l,dynamic:()=>c});var s=r(95153);let i=(0,s.createProxy)(String.raw`/Users/jlau/Code-2023/cpmarketplace/src/app/search/page.js`),{__esModule:a,$$typeof:n}=i,o=i.default,c=i.dynamic,l=o}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[6126,3657,1827,1323,4359,3234,2133,9234,8557,9360,1895,2684,402,436,3580],()=>__webpack_exec__(77655));module.exports=r})();