"use strict";exports.id=3580,exports.ids=[3580],exports.modules={11605:(e,t,i)=>{i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var s=i(30784);i(9885);var r=i(52694),a=i.n(r),n=i(16854),o=i(92133),c=i.n(o),l=i(57114);let __WEBPACK_DEFAULT_EXPORT__=()=>{let e=(0,l.useRouter)(),handleCategoryClick=t=>{e.push(`/search?query=${t}`)};return s.jsx(a(),{elevation:0,sx:{p:2,backgroundColor:"transparent",overflow:"auto"},children:s.jsx(n.default,{direction:"row",spacing:1,justifyContent:"flex-start",alignItems:"center",sx:{gap:{xs:"10px",sm:"20px"},justifyContent:"center",flexWrap:"wrap"},children:["Furniture","Electronics","School Supplies","Home Decor","Clothing and Accessories","Appliances","Bicycles and Transportation","Textbooks","Sports and Fitness Equipment","Home Office","Miscellaneous"].map((e,t)=>s.jsx(c(),{label:e,onClick:()=>handleCategoryClick(e),variant:"outlined"},t))})})}},71214:(e,t,i)=>{i.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var s=i(30784),r=i(9885),a=i(61522),n=i(76151),o=i(70436),c=i(43872),l=i(33987),d=i.n(l),_=i(21971),p=i.n(_);let __WEBPACK_DEFAULT_EXPORT__=({isHomePage:e})=>{let[t,i]=(0,r.useState)([]),[l,_]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let fetchNewItems=async()=>{_(!0);let e=(0,a.IO)((0,a.hJ)(n.db,"listings"),(0,a.Xo)("createdAt","desc"),(0,a.b9)(10)),t=await (0,a.PL)(e),s=[];t.forEach(e=>{s.push({id:e.id,...e.data()})}),i(s),_(!1)};fetchNewItems()},[]),(0,s.jsxs)(c.Z,{p:3,children:[!e&&s.jsx(d(),{variant:"h4",sx:{marginBottom:2,color:"#2B7257"},children:s.jsx("strong",{children:"New Listings"})}),s.jsx(p(),{container:!0,spacing:2,children:t.map(e=>s.jsx(p(),{item:!0,xs:12,sm:12,md:4,lg:3,xl:2.4,children:s.jsx(o.Z,{loading:l,listingId:e.id,id:e.id,title:e.title,createdAt:e.createdAt,updatedAt:e.updatedAt,description:e.description,images:e.images,location:e.location,price:e.price,studentVerification:e.studentVerification,priceHistory:e.priceHistory})},e.id))})]})}},73881:(e,t,i)=>{i.r(t),i.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=i(31323);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};