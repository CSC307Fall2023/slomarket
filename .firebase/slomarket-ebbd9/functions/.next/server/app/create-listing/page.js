(()=>{var e={};e.id=9108,e.ids=[9108],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},93164:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>g,tree:()=>c});var i=r(67096),s=r(16132),n=r(37284),a=r.n(n),o=r(32564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["create-listing",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,18967)),"/Users/jlau/Code-2023/cpmarketplace/src/app/create-listing/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,96109)),"/Users/jlau/Code-2023/cpmarketplace/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/jlau/Code-2023/cpmarketplace/src/app/create-listing/page.js"],d="/create-listing/page",p={require:r,loadChunk:()=>Promise.resolve()},g=new i.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/create-listing/page",pathname:"/create-listing",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},66747:(e,t,r)=>{Promise.resolve().then(r.bind(r,45111))},45111:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>CreateListing});var i=r(30784),s=r(9885),n=r(52694),a=r.n(n),o=r(48060),l=r.n(o),c=r(33987),u=r.n(c),d=r(16614),p=r.n(d),g=r(21971),x=r.n(g),m=r(92870),h=r.n(m),j=r(45003),f=r.n(j),b=r(62969),v=r.n(b),y=r(42153),C=r.n(y),q=r(16856),k=r.n(q),S=r(95915),_=r.n(S),w=r(64832),P=r.n(w),I=r(81932),L=r.n(I),U=r(64622),A=r(61522),T=r(76151),F=r(18282),D=r(96106),E=r(99280),G=r(94038),R=r(57114),O=r(52451),B=r.n(O);let M=["Furniture","Electronics","School Supplies","Home Decor","Clothing and Accessories","Appliances","Bicycles and Transportation","Textbooks","Sports and Fitness Equipment","Home Office","Miscellaneous"],z=["Los Angeles","San Diego","San Jose","San Francisco","San Luis Obispo","Pismo Beach","Morro Bay","Arroyo Grande","Atascadero","Paso Robles","Grover Beach","Cambria","Templeton","Nipomo","Cayucos"],ImageUploadSquare=({image:e,onRemove:t})=>i.jsx(a(),{elevation:3,sx:{width:250,height:250,backgroundImage:`url(${e.preview})`,backgroundSize:"cover",backgroundPosition:"center",position:"relative","&:hover":{boxShadow:"0 0 10px rgba(0, 0, 0, 0.5)"}},children:i.jsx(l(),{onClick:t,sx:{position:"absolute",top:8,right:8,backgroundColor:"rgba(255, 255, 255, 0.7)",color:"black","&:hover":{backgroundColor:"rgba(255, 255, 255, 0.9)"},zIndex:2},children:i.jsx(E.Z,{})})});function CreateListing(){let e=(0,R.useRouter)(),{getUser:t,isAuthenticated:r}=(0,F.useAuth)(),[n,a]=(0,s.useState)({title:"",description:"",created:"",price:0,location:""}),[o,c]=(0,s.useState)(null),[d,g]=(0,s.useState)([]),[m,j]=(0,s.useState)({open:!1,message:""}),[b,y]=(0,s.useState)(!1),[q,S]=(0,s.useState)([]),[w,I]=(0,s.useState)(!1),[E,O]=(0,s.useState)(null),$=(0,F.useAuth)(),N=null!==$.currentUser,[H,J]=(0,s.useState)(""),[W,V]=(0,s.useState)(!1);(0,s.useEffect)(()=>{if($.currentUser&&$.currentUser.reloadUserInfo){let e=$.currentUser.reloadUserInfo.customAttributes;if(e)try{let t=JSON.parse(e);V(!0===t.student)}catch(e){console.error("Error parsing customAttributes",e)}}},[$.currentUser]),(0,s.useEffect)(()=>{N||e.push("/login")},[N,e]);let handleChange=e=>{let{name:t,value:r}=e.target;if("price"===t){let e=parseFloat(r);if(0===e)j({open:!0,message:"The price will be registered as 'free'"});else if(e<0){j({open:!0,message:"Price cannot be negative."});return}a({...n,price:e})}else a({...n,[t]:r})},handleSubmit=async()=>{let r=validateForm();if(r){j({open:!0,message:r});return}try{if(!e||!N){console.error("Router is not defined or user is not logged in");return}let r=t();if(!r||!r.uid){console.error("No user found");return}let i=r.uid,s={title:n.title,description:n.description,price:n.price,location:n.location,images:[],createdAt:A.EK.fromDate(new Date),sellerId:i,studentVerification:W,category:H};if(d.length){let e=await (0,D.Ix)(i,d[0].file);s.images.push(e)}let a=await (0,A.ET)((0,A.hJ)(T.db,"listings"),s);j({open:!0,message:"Listing created successfully!"}),O(a.id),I(!0),e.push(`/listing/${a.id}`)}catch(e){console.log(e),j({open:!0,message:e.message})}},validateForm=()=>n.title.trim()?n.description.trim()?n.price?n.location?0===d.length?"At least one image is required.":n.price<0?"Price cannot be negative.":"":"Location is required.":"Price is required.":"Description is required.":"Title is required.",removeImage=e=>{g(t=>t.filter((t,r)=>r!==e))},Z=(0,s.useCallback)(e=>{g(t=>[...t,...e.map(e=>({file:e,preview:URL.createObjectURL(e)}))])},[]),{getRootProps:K,getInputProps:X}=(0,U.useDropzone)({onDrop:Z,maxFiles:10,accept:{"image/*":[".jpeg",".jpg",".png"]}});return w?(0,i.jsxs)("div",{style:{textAlign:"center",marginTop:"50px"},children:[i.jsx(B(),{src:"/../../assets/illustrations/sitting-4.svg",alt:"Listing Created",width:200,height:200}),i.jsx(u(),{variant:"h5",style:{marginTop:"20px"},children:"Listing Created Successfully!"}),i.jsx(p(),{variant:"contained",color:"primary",style:{marginTop:"20px"},onClick:()=>e.push(`/listing/${E}`),children:"View Listing"})]}):i.jsx(x(),{container:!0,justifyContent:"center",alignItems:"center",style:{padding:"40px"},children:i.jsx(x(),{item:!0,xs:12,md:8,lg:6,children:(0,i.jsxs)("form",{style:{display:"flex",flexDirection:"column"},children:[" ",i.jsx("h1",{children:"New Listing"}),$.currentUser&&i.jsx(u(),{variant:"body1",style:{marginBottom:"1rem"},children:W?"Your listing will be displayed with a student verification symbol.":"If you want to add student verification to your listing, please register your account as a student."}),i.jsx(h(),{autoFocus:!0,margin:"dense",id:"title",name:"title",label:"Listing Title",type:"text",variant:"outlined",onChange:handleChange,required:!0}),(0,i.jsxs)(x(),{container:!0,spacing:2,alignItems:"center",children:[i.jsx(x(),{item:!0,xs:4,children:i.jsx(h(),{autoFocus:!0,margin:"dense",id:"price",name:"price",label:"Price",type:"number",fullWidth:!0,variant:"outlined",onChange:handleChange,required:!0})}),i.jsx(x(),{item:!0,xs:4,children:i.jsx(f(),{id:"location",required:!0,options:z,getOptionLabel:e=>e,renderInput:e=>i.jsx(h(),{...e,label:"Choose a city",variant:"outlined",fullWidth:!0}),value:o,onChange:(e,t)=>{c(t),a({...n,location:t})}})}),i.jsx(x(),{item:!0,xs:4,children:i.jsx(f(),{id:"category",options:M,required:!0,getOptionLabel:e=>e,renderInput:e=>i.jsx(h(),{...e,label:"Category",variant:"outlined"}),value:H,onChange:(e,t)=>{J(t)}})})]}),i.jsx(h(),{autoFocus:!0,margin:"dense",id:"description",name:"description",label:"Description",type:"text",fullWidth:!0,variant:"outlined",onChange:handleChange,multiline:!0,rows:5,required:!0}),i.jsx("h3",{children:"Upload Images"}),(0,i.jsxs)(x(),{container:!0,spacing:2,alignItems:"center",children:[d.map((e,t)=>i.jsx(x(),{item:!0,children:i.jsx(ImageUploadSquare,{image:e,onRemove:()=>removeImage(t)})},t)),d.length<10&&i.jsx(x(),{item:!0,children:i.jsx(l(),{onClick:()=>{y(!0)},sx:{width:250,height:250,border:"1px dashed grey",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.04)"}},children:i.jsx(G.Z,{fontSize:"large"})})})]}),(0,i.jsxs)(v(),{open:b,onClose:()=>y(!1),children:[i.jsx(C(),{id:"responsive-dialog-title",children:"Upload Listing Image"}),i.jsx(k(),{children:(0,i.jsxs)("div",{...K(),style:{border:"1px dashed gray",padding:"6rem",cursor:"pointer"},children:[i.jsx("input",{...X()})," ",i.jsx(u(),{variant:"body1",children:"Drag & drop an image here, or click to select one"})]})}),i.jsx(_(),{children:i.jsx(p(),{autoFocus:!0,onClick:()=>{y(!1)},color:"primary",children:"Cancel"})})]}),(0,i.jsxs)("div",{align:"left",children:[i.jsx(p(),{sx:{marginTop:"3rem",backgroundColor:"grey"},variant:"contained",onClick:()=>{e.push("/")},children:"Cancel"}),i.jsx(p(),{sx:{marginTop:"3rem",marginLeft:"3rem",backgroundColor:"4FB18C"},onClick:handleSubmit,variant:"contained",children:"Create Listing"})]}),i.jsx(P(),{open:m.open,autoHideDuration:6e3,onClose:()=>j({...m,open:!1}),children:i.jsx(L(),{onClose:()=>j({...m,open:!1}),severity:"error",sx:{width:"100%"},children:m.message})})]})})})}},18967:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>l});var i=r(95153);let s=(0,i.createProxy)(String.raw`/Users/jlau/Code-2023/cpmarketplace/src/app/create-listing/page.js`),{__esModule:n,$$typeof:a}=s,o=s.default,l=o}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[6126,3657,1827,1323,4359,3234,2870,2133,1089,676,2451,5699,402,2291],()=>__webpack_exec__(93164));module.exports=r})();