(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{54010:function(e,t,r){Promise.resolve().then(r.bind(r,46497))},70148:function(e,t,r){"use strict";r.d(t,{I8:function(){return c},db:function(){return l},tO:function(){return u}});var n=r(20994);r(35073);var i=r(24086),a=r(69584),s=r(53085);let o=(0,n.ZF)({apiKey:"AIzaSyBjEHdFQZFsfN-RGa59n16XO7qQ4dhFsAo",authDomain:"slomarket-ebbd9.firebaseapp.com",projectId:"slomarket-ebbd9",storageBucket:"slomarket-ebbd9.appspot.com",messagingSenderId:"247606192779",appId:"1:247606192779:web:421bdc33c388c5c8e828e",measurementId:"G-E3DPKJ6L5V"}),c=(0,s.v0)(o),l=(0,i.ad)(o),u=(0,a.cF)(o)},35959:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return AuthProvider},useAuth:function(){return useAuth}});var n=r(57437),i=r(2265),a=r(70148),s=r(53085);let o=(0,i.createContext)();function useAuth(){return(0,i.useContext)(o)}function AuthProvider(e){let{children:t}=e,[r,c]=(0,i.useState)(),[l,u]=(0,i.useState)(!0);async function isAdmin(){return await a.I8.currentUser.getIdTokenResult().then(e=>!!e.claims.admin).catch(e=>{throw e})}return(0,i.useEffect)(()=>{let e=a.I8.onAuthStateChanged(e=>{c(e),u(!1)},e=>{console.error("Authentication error:",e),u(!1)});return e},[]),(0,n.jsx)(o.Provider,{value:{currentUser:r,getUser:function(){return a.I8.currentUser},isLoggedIn:function(){return null!==a.I8.currentUser},isAdmin,login:function(e,t){return a.I8.signInWithEmailAndPassword(e,t)},signOut:function(){return a.I8.signOut()},signUp:function(e,t){return(0,s.Xb)(a.I8,e,t)}},children:!l&&t})}},46497:function(e,t,r){"use strict";r.r(t);var n=r(57437),i=r(24033),a=r(2265),s=r(28874),o=r(6882),c=r(43226),l=r(96507),u=r(64898),d=r(25210),h=r(29872),f=r(15133),g=r(88469),m=r(49050),p=r(49932),v=r(3871),x=r(72467),b=r(70148),j=r(24086),I=r(55037);r(80853);var w=r(35959),y=r(94145);let U=(0,v.p6)(p.ZP);t.default=()=>{let e=(0,i.useRouter)(),{id:t}=(0,i.useParams)(),[r,p]=(0,a.useState)(null),[v,Z]=(0,a.useState)(!0),[S,A]=(0,a.useState)(""),[k,E]=(0,a.useState)(null),[L,J]=(0,a.useState)(!1),[C,P]=(0,a.useState)(!0),[O,B]=(0,a.useState)(!1),[F,M]=(0,a.useState)(!1),[Q,N]=(0,a.useState)({isAdmin:!1,isStudent:!1}),{getUser:R,isLoggedIn:T,isAdmin:V}=(0,w.useAuth)(),[_,H]=(0,a.useState)(0);(0,a.useEffect)(()=>{if(t){let fetchListing=async()=>{Z(!0);try{let e=(0,j.JU)(b.db,"listings",t),r=await (0,j.QT)(e);r.exists()?p({id:r.id,...r.data()}):A("Listing not found")}catch(e){A("An error occurred while fetching the listing"),console.error(e)}finally{Z(!1)}};fetchListing()}},[t]),(0,a.useEffect)(()=>{let fetchSellerInfo=async()=>{if(r&&r.sellerId){let e=(0,j.JU)(b.db,"users",r.sellerId),t=await (0,j.QT)(e);t.exists()?E(t.data()):console.error("Seller not found")}};fetchSellerInfo()},[r]),(0,a.useEffect)(()=>{let e=R();(0,y.PR)(e.uid).then(r=>{if(!r){N(r),P(!1);return}if(""==r.profileImage&&(r.profileImage=null),""==r.heroImage&&(r.heroImage=null),r.uid=e.uid,T()){let t=R();t.uid==e.uid?(J(!0),t.emailVerified&&"calpoly.edu"==t.email.split("@").pop()&&!r.isStudent&&fetch("/api/verify/".concat(e.uid),{method:"put"}).catch(e=>{console.error(e),setErrorMessage(e.message)})):V().then(e=>{e&&J(!0)}).catch(e=>{console.error(e),setErrorMessage(e.message)})}let checkAdminStatus=async()=>{let e=await V();B(e)};T()&&checkAdminStatus(),N(r),P(!1),console.log(r),r.favoriteListings.includes(t)&&M(!0)}).catch(e=>{console.error(e),setErrorMessage(e.message)}),console.log(e.favoriteListings)},[T,V]);let handleFavorite=async()=>{console.log(Q),Q.favoriteListings.push(t);let e=(0,j.JU)(b.db,"users",Q.uid,"private","favorites");await (0,j.r7)(e,{favoriteListings:Q.favoriteListings}),M(!0)},handleUnfavorite=async()=>{console.log(Q);let e=Q.favoriteListings.indexOf(t);Q.favoriteListings.splice(e);let r=(0,j.JU)(b.db,"users",Q.uid,"private","favorites");await (0,j.r7)(r,{favoriteListings:Q.favoriteListings}),M(!1)};return v?(0,n.jsx)(s.ZP,{container:!0,justifyContent:"center",alignItems:"center",style:{height:"100vh"},children:(0,n.jsx)(o.Z,{})}):S?(0,n.jsx)(c.Z,{variant:"h6",color:"error",textAlign:"center",children:S}):r?(0,n.jsxs)(l.Z,{sx:{padding:10},children:[(0,n.jsxs)(u.Z,{"aria-label":"breadcrumb",children:[(0,n.jsx)(d.Z,{underline:"hover",color:"inherit",href:"/",children:"Home"}),(0,n.jsx)(c.Z,{color:"text.primary",children:r.title})]}),(0,n.jsxs)(h.Z,{elevation:3,sx:{mt:2,p:2},children:[(0,n.jsx)(c.Z,{variant:"h4",gutterBottom:!0,children:r.title}),r.images&&r.images.length>0&&(0,n.jsx)(U,{slideRenderer:e=>{let{index:t,key:i}=e;return(0,n.jsx)("img",{src:r.images[t],alt:"".concat(r.title," - image ").concat(t+1),style:{width:"100%",height:"auto"}},i)}}),(0,n.jsx)(c.Z,{variant:"body1",gutterBottom:!0,children:r.description}),(0,n.jsxs)(c.Z,{variant:"h6",gutterBottom:!0,children:["Price: $",r.price]}),(0,n.jsxs)(c.Z,{variant:"body2",color:"textSecondary",gutterBottom:!0,children:["Location: ",r.location]}),k&&(0,n.jsx)(f.Z,{sx:{maxWidth:345,cursor:"pointer"},onClick:()=>e.push("/profile/".concat(k.id)),children:(0,n.jsxs)(g.Z,{children:[(0,n.jsx)(c.Z,{gutterBottom:!0,variant:"h5",component:"div",children:k.name}),(0,n.jsx)(c.Z,{variant:"body2",color:"text.secondary",children:k.email})]})}),(0,n.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between",mt:2},children:[(0,n.jsx)(m.Z,{variant:"contained",startIcon:(0,n.jsx)(I.Z,{}),onClick:()=>{},children:"View on Map"}),!F&&(0,n.jsx)(m.Z,{variant:"contained",onClick:handleFavorite,children:"Favorite"}),F&&(0,n.jsx)(m.Z,{variant:"contained",onClick:handleUnfavorite,children:"Unfavorite"}),(0,n.jsx)(m.Z,{variant:"outlined",startIcon:(0,n.jsx)(x.Z,{}),onClick:()=>{},children:"Share"})]})]})]}):null}},94145:function(e,t,r){"use strict";r.d(t,{Ix:function(){return uploadImage},Nq:function(){return updateUser},PR:function(){return getUser},r4:function(){return createUser}});var n=r(70148),i=r(24086),a=r(69584);async function uploadImage(e,t){if(t.size>5e6)throw Error("Image cannot be more than 5 MB large");if(!/\.(jpeg|jpg|png)$/i.test(t.name))throw Error("Image has an invalid extension. Allowed: jpg, png");let r="".concat(Math.floor(1e8+9e8*Math.random()),".").concat(t.name.split(".").pop()),i="images/".concat(e,"/").concat(r),s=(0,a.iH)(n.tO,i);try{await (0,a.KV)(s,t);let e=await (0,a.Jt)(s);return e}catch(e){throw console.error("Error uploading image:",e),e}}async function createUser(e,t){let r=(0,i.JU)(n.db,"users",e),a=(0,i.JU)(n.db,"users",e,"private","contact"),s=(0,i.JU)(n.db,"users",e,"private","favorites");await (0,i.pl)(r,{isAdmin:!1,isStudent:!1,isVerified:!1,name:"",profileImage:"",heroImage:"",contactInfoVisibility:!1}).catch(e=>{throw e}),await (0,i.pl)(a,{email:t,phoneNumber:"",location:""}).catch(e=>{throw e}),await (0,i.pl)(s,{favoriteListings:[],favoriteUsers:[]}).catch(e=>{throw e})}async function getUser(e){let t=(0,i.JU)(n.db,"users",e),r=(0,i.JU)(n.db,"users",e,"private","contact"),a=(0,i.JU)(n.db,"users",e,"private","favorites"),s=null,o=null,c=null;return(await (0,i.QT)(t).then(e=>{e.exists()&&(s=e.data())}).catch(e=>{throw e}),s)?(await (0,i.QT)(r).then(e=>{e.exists()&&(o=e.data())}).catch(()=>{}),await (0,i.QT)(a).then(e=>{e.exists()&&(c=e.data())}).catch(()=>{}),{...s,...o,...c}):null}async function updateUser(e,t){let{email:r,isVerified:a,isAdmin:s,name:o,phoneNumber:c,location:l,profileImage:u,heroImage:d,isStudent:h,contactInfoVisibility:f,favoriteListings:g,favoriteUsers:m}=t,p={isAdmin:s,isStudent:h,isVerified:a,name:o,profileImage:u,heroImage:d,contactInfoVisibility:f},v={email:r,phoneNumber:c,location:l},x={favoriteListings:g,favoriteUsers:m};Object.keys(p).forEach(e=>void 0===p[e]&&delete p[e]),Object.keys(v).forEach(e=>void 0===v[e]&&delete v[e]),Object.keys(x).forEach(e=>void 0===x[e]&&delete x[e]);let b=(0,i.JU)(n.db,"users",e),j=(0,i.JU)(n.db,"users",e,"private","contact"),I=(0,i.JU)(n.db,"users",e,"private","favorites");p&&await (0,i.r7)(b,p),v&&await (0,i.r7)(j,v),x&&await (0,i.r7)(I,x)}}},function(e){e.O(0,[358,565,978,866,826,971,472,744],function(){return e(e.s=54010)}),_N_E=e.O()}]);