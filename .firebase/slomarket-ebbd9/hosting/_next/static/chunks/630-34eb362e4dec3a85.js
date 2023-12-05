"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[630],{47827:function(e,a,t){t.d(a,{Z:function(){return I}});var o=t(20791),l=t(13428),r=t(2265),i=t(7216),n=t(95600),c=t(89975),s=t(59782),d=t(57437),p=(0,s.Z)((0,d.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),v=t(37663),u=t(28702),m=t(16659),b=t(87927),g=t(35843),C=t(26520),$=t(25702);function getChipUtilityClass(e){return(0,$.Z)("MuiChip",e)}let h=(0,C.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),y=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],useUtilityClasses=e=>{let{classes:a,disabled:t,size:o,color:l,iconColor:r,onDelete:i,clickable:c,variant:s}=e,d={root:["root",s,t&&"disabled",`size${(0,u.Z)(o)}`,`color${(0,u.Z)(l)}`,c&&"clickable",c&&`clickableColor${(0,u.Z)(l)}`,i&&"deletable",i&&`deletableColor${(0,u.Z)(l)}`,`${s}${(0,u.Z)(l)}`],label:["label",`label${(0,u.Z)(o)}`],avatar:["avatar",`avatar${(0,u.Z)(o)}`,`avatarColor${(0,u.Z)(l)}`],icon:["icon",`icon${(0,u.Z)(o)}`,`iconColor${(0,u.Z)(r)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,u.Z)(o)}`,`deleteIconColor${(0,u.Z)(l)}`,`deleteIcon${(0,u.Z)(s)}Color${(0,u.Z)(l)}`]};return(0,n.Z)(d,getChipUtilityClass,a)},f=(0,g.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:t}=e,{color:o,iconColor:l,clickable:r,onDelete:i,size:n,variant:c}=t;return[{[`& .${h.avatar}`]:a.avatar},{[`& .${h.avatar}`]:a[`avatar${(0,u.Z)(n)}`]},{[`& .${h.avatar}`]:a[`avatarColor${(0,u.Z)(o)}`]},{[`& .${h.icon}`]:a.icon},{[`& .${h.icon}`]:a[`icon${(0,u.Z)(n)}`]},{[`& .${h.icon}`]:a[`iconColor${(0,u.Z)(l)}`]},{[`& .${h.deleteIcon}`]:a.deleteIcon},{[`& .${h.deleteIcon}`]:a[`deleteIcon${(0,u.Z)(n)}`]},{[`& .${h.deleteIcon}`]:a[`deleteIconColor${(0,u.Z)(o)}`]},{[`& .${h.deleteIcon}`]:a[`deleteIcon${(0,u.Z)(c)}Color${(0,u.Z)(o)}`]},a.root,a[`size${(0,u.Z)(n)}`],a[`color${(0,u.Z)(o)}`],r&&a.clickable,r&&"default"!==o&&a[`clickableColor${(0,u.Z)(o)})`],i&&a.deletable,i&&"default"!==o&&a[`deletableColor${(0,u.Z)(o)}`],a[c],a[`${c}${(0,u.Z)(o)}`]]}})(({theme:e,ownerState:a})=>{let t="light"===e.palette.mode?e.palette.grey[700]:e.palette.grey[300];return(0,l.Z)({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${h.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${h.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:t,fontSize:e.typography.pxToRem(12)},[`& .${h.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${h.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${h.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${h.icon}`]:(0,l.Z)({marginLeft:5,marginRight:-6},"small"===a.size&&{fontSize:18,marginLeft:4,marginRight:-4},a.iconColor===a.color&&(0,l.Z)({color:e.vars?e.vars.palette.Chip.defaultIconColor:t},"default"!==a.color&&{color:"inherit"})),[`& .${h.deleteIcon}`]:(0,l.Z)({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:(0,c.Fq)(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,c.Fq)(e.palette.text.primary,.4)}},"small"===a.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==a.color&&{color:e.vars?`rgba(${e.vars.palette[a.color].contrastTextChannel} / 0.7)`:(0,c.Fq)(e.palette[a.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].contrastText}})},"small"===a.size&&{height:24},"default"!==a.color&&{backgroundColor:(e.vars||e).palette[a.color].main,color:(e.vars||e).palette[a.color].contrastText},a.onDelete&&{[`&.${h.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},a.onDelete&&"default"!==a.color&&{[`&.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}})},({theme:e,ownerState:a})=>(0,l.Z)({},a.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${h.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},a.clickable&&"default"!==a.color&&{[`&:hover, &.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}}),({theme:e,ownerState:a})=>(0,l.Z)({},"outlined"===a.variant&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${h.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${h.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${h.avatar}`]:{marginLeft:4},[`& .${h.avatarSmall}`]:{marginLeft:2},[`& .${h.icon}`]:{marginLeft:4},[`& .${h.iconSmall}`]:{marginLeft:2},[`& .${h.deleteIcon}`]:{marginRight:5},[`& .${h.deleteIconSmall}`]:{marginRight:3}},"outlined"===a.variant&&"default"!==a.color&&{color:(e.vars||e).palette[a.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:(0,c.Fq)(e.palette[a.color].main,.7)}`,[`&.${h.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[a.color].main,e.palette.action.hoverOpacity)},[`&.${h.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:(0,c.Fq)(e.palette[a.color].main,e.palette.action.focusOpacity)},[`& .${h.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:(0,c.Fq)(e.palette[a.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].main}}})),Z=(0,g.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{let{ownerState:t}=e,{size:o}=t;return[a.label,a[`label${(0,u.Z)(o)}`]]}})(({ownerState:e})=>(0,l.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"outlined"===e.variant&&{paddingLeft:11,paddingRight:11},"small"===e.size&&{paddingLeft:8,paddingRight:8},"small"===e.size&&"outlined"===e.variant&&{paddingLeft:7,paddingRight:7}));function isDeleteKeyboardEvent(e){return"Backspace"===e.key||"Delete"===e.key}let k=r.forwardRef(function(e,a){let t=(0,b.Z)({props:e,name:"MuiChip"}),{avatar:n,className:c,clickable:s,color:u="default",component:g,deleteIcon:C,disabled:$=!1,icon:h,label:k,onClick:I,onDelete:S,onKeyDown:x,onKeyUp:R,size:O="medium",variant:z="filled",tabIndex:w,skipFocusWhenDisabled:D=!1}=t,E=(0,o.Z)(t,y),F=r.useRef(null),L=(0,v.Z)(F,a),handleDeleteIconClick=e=>{e.stopPropagation(),S&&S(e)},P=!1!==s&&!!I||s,N=P||S?m.Z:g||"div",T=(0,l.Z)({},t,{component:N,disabled:$,size:O,color:u,iconColor:r.isValidElement(h)&&h.props.color||u,onDelete:!!S,clickable:P,variant:z}),V=useUtilityClasses(T),M=N===m.Z?(0,l.Z)({component:g||"div",focusVisibleClassName:V.focusVisible},S&&{disableRipple:!0}):{},q=null;S&&(q=C&&r.isValidElement(C)?r.cloneElement(C,{className:(0,i.Z)(C.props.className,V.deleteIcon),onClick:handleDeleteIconClick}):(0,d.jsx)(p,{className:(0,i.Z)(V.deleteIcon),onClick:handleDeleteIconClick}));let K=null;n&&r.isValidElement(n)&&(K=r.cloneElement(n,{className:(0,i.Z)(V.avatar,n.props.className)}));let U=null;return h&&r.isValidElement(h)&&(U=r.cloneElement(h,{className:(0,i.Z)(V.icon,h.props.className)})),(0,d.jsxs)(f,(0,l.Z)({as:N,className:(0,i.Z)(V.root,c),disabled:!!P&&!!$||void 0,onClick:I,onKeyDown:e=>{e.currentTarget===e.target&&isDeleteKeyboardEvent(e)&&e.preventDefault(),x&&x(e)},onKeyUp:e=>{e.currentTarget===e.target&&(S&&isDeleteKeyboardEvent(e)?S(e):"Escape"===e.key&&F.current&&F.current.blur()),R&&R(e)},ref:L,tabIndex:D&&$?-1:w,ownerState:T},M,E,{children:[K||U,(0,d.jsx)(Z,{className:(0,i.Z)(V.label),ownerState:T,children:k}),q]}))});var I=k},89158:function(e,a,t){var o=t(2265);a.Z=e=>{let a=o.useRef({});return o.useEffect(()=>{a.current=e}),a.current}}}]);