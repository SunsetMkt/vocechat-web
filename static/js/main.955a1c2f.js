/*! For license information please see main.955a1c2f.js.LICENSE.txt */
(()=>{var __webpack_modules__={5254:(e,t,r)=>{"use strict";r.d(t,{Ax:()=>h,IB:()=>a,Ie:()=>c,JE:()=>u,OP:()=>f,Pb:()=>s,Wv:()=>l,YM:()=>n,ZP:()=>p,bT:()=>i,kK:()=>d,rs:()=>o});const n="0.3",i={text:"text/plain",markdown:"text/markdown",image:"image/png",imageJPG:"image/jpeg",file:"rustchat/file",formData:"multipart/form-data",json:"application/json"},a="418687074928-naojba82n9ktf0rkvnqoor4nhr54ql1b.apps.googleusercontent.com",o="X-API-Key",s=16e5,u="RUSTCHAT_TOKEN",l="RUSTCHAT_TOKEN_EXPIRE",c="RUSTCHAT_REFRESH_TOKEN",d="RUSTCHAT_CURR_UID",f="RUSTCHAT_DEVICE_KEY",h=["\ud83d\udc4d","\u2764\ufe0f","\ud83d\ude04","\ud83d\udc40","\ud83d\udc4e","\ud83c\udf89","\ud83d\ude41","\ud83d\ude80"],p="https://dev.rustchat.com/api"},2592:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(255),i=r(6140),a=r(7892),o=r.n(a),s=r(8198),u=r(5254);const l=["login","register","checkInviteTokenValid","getServer","getOpenid","getMetamaskNonce","renew"],c=(0,n.ni)({baseUrl:u.ZP,prepareHeaders:(e,t)=>{let{getState:r,endpoint:n}=t;const{token:i}=r().authData;return i&&!l.includes(n)&&e.set(u.rs,i),e}});let d=null;const f=async(e,t,r)=>{var n;d&&await d;const{token:a,refreshToken:u,expireTime:f=(new Date).getTime()}=t.getState().authData;let h=null;if(!l.includes(t.endpoint)&&o()().isAfter(new Date(f-2e4))?(d=c({url:"/token/renew",method:"POST",body:{token:a,refresh_token:u}},t,r),h=await d,d=null,h.data&&(t.dispatch((0,s.jM)(h.data)),h=await c(e,t,r))):h=await c(e,t,r),null!==(n=h)&&void 0!==n&&n.error)switch(h.error.originalStatus||h.error.status){case"FETCH_ERROR":i.ZP.error(`${t.endpoint}: Failed to fetch`);break;case 404:i.ZP.error("Request Not Found");break;case 500:i.ZP.error(h.error.data||"server error");break;case 401:t.dispatch((0,s.sQ)()),location.href="/#/login",i.ZP.error("API Not Authenticated");break;case 403:i.ZP.error("Request Not Allowed")}return h}},251:(e,t,r)=>{"use strict";r.d(t,{C0:()=>f,QQ:()=>c,Uk:()=>p,bm:()=>g,eJ:()=>l,g$:()=>d,l4:()=>m});var n=r(1465),i=r(5254),a=r(2592),o=r(8198),s=r(7271),u=r(3609);const l=(0,n.LC)({reducerPath:"contactApi",baseQuery:a.Z,endpoints:e=>({getContacts:e.query({query:()=>({url:"user"}),transformResponse:e=>e.map((e=>{const t=0==e.avatar_updated_at?"":`${i.ZP}/resource/avatar?uid=${e.uid}&t=${e.avatar_updated_at}`;return e.avatar=t,e})),async onQueryStarted(e,t){let{dispatch:r,queryFulfilled:n}=t;const a=localStorage.getItem(i.kK);try{const{data:e}=await n,t=e.find((e=>e.uid==a));if(t){const n=e.map((e=>e.uid==t.uid?{...e,online:!0}:e));r((0,o.fs)(t.uid)),r((0,s.g5)(n))}else r((0,o.sQ)())}catch{}}}),deleteContact:e.query({query:e=>({url:`/admin/user/${e}`,method:"DELETE"})}),updateAvatar:e.mutation({query:e=>({headers:{"content-type":"image/png"},url:"user/avatar",method:"POST",body:e})}),updateInfo:e.mutation({query:e=>({url:"user",method:"PUT",body:e})}),register:e.mutation({query:e=>({url:"user/register",method:"POST",body:e})}),sendMsg:e.mutation({query:e=>{let{id:t,content:r,type:n="text",properties:a=""}=e;return{headers:{"content-type":i.bT[n],"X-Properties":a?btoa(JSON.stringify(a)):""},url:`user/${t}/send`,method:"POST",body:r}},async onQueryStarted(e,t){await u.s.call(this,e,t,"user")}})})}),{useLazyDeleteContactQuery:c,useUpdateInfoMutation:d,useUpdateAvatarMutation:f,useGetContactsQuery:h,useLazyGetContactsQuery:p,useSendMsgMutation:g,useRegisterMutation:m}=l},3609:(e,t,r)=>{"use strict";r.d(t,{s:()=>l});var n=r(6140),i=r(2978),a=r(5254),o=r(7642),s=r(860),u=r(658);const l=async function(e,t){let{id:r,content:l,type:c="text",from_uid:d,reply_mid:f=null,properties:h={local_id:(new Date).getTime()}}=e,{dispatch:p,queryFulfilled:g}=t,m=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"channel";const _=h.local_id||(new Date).getTime(),v={content:"image"==c?URL.createObjectURL(l):l,content_type:a.bT[c],created_at:_,properties:h,from_uid:d,reply_mid:f,read:!0,sending:!0},y="channel"==m?o.p_:s.ZK,b="channel"==m?o.nF:s.Fs;(0,i.dC)((()=>{p((0,u.Hz)({mid:_,...v})),p(y({id:r,mid:_}))}));try{const{data:e}=await g;(0,i.dC)((()=>{p(b({id:r,mid:_})),p((0,u.Gd)(_)),p((0,u.Hz)({mid:e,...v})),p(y({id:r,mid:e}))}))}catch{n.ZP.error("Send Message Failed"),p(b({id:r,mid:_})),p((0,u.Gd)(_))}}},8198:(e,t,r)=>{"use strict";r.d(t,{A3:()=>u,ZP:()=>f,fs:()=>c,jM:()=>d,sQ:()=>l});var n=r(5273),i=r(5254);const a={uid:null,token:localStorage.getItem(i.JE),expireTime:localStorage.getItem(i.Wv)||(new Date).getTime(),refreshToken:localStorage.getItem(i.Ie)},o={uid:null,token:null,expireTime:(new Date).getTime(),refreshToken:null},s=(0,n.oM)({name:"authData",initialState:a,reducers:{setAuthData(e,t){const{user:{uid:r},token:n,refresh_token:a,expired_in:o=0}=t.payload;e.uid=r,e.token=n,e.refreshToken=a;const s=(new Date).getTime()+1e3*Number(o);e.expireTime=s,localStorage.setItem(i.Wv,s),localStorage.setItem(i.JE,n),localStorage.setItem(i.Ie,a),localStorage.setItem(i.kK,r)},resetAuthData:()=>(localStorage.removeItem(i.Wv),localStorage.removeItem(i.JE),localStorage.removeItem(i.Ie),localStorage.removeItem(i.kK),o),setUid(e,t){const r=t.payload;e.uid=r},updateToken(e,t){const{token:r,refresh_token:n,expired_in:a}=t.payload;e.token=r;const o=(new Date).getTime()+1e3*Number(a);e.expireTime=o,e.refreshToken=n,localStorage.setItem(i.Wv,o),localStorage.setItem(i.JE,r),localStorage.setItem(i.Ie,n)}}}),{setAuthData:u,resetAuthData:l,setUid:c,updateToken:d}=s.actions,f=s.reducer},7271:(e,t,r)=>{"use strict";r.d(t,{T9:()=>u,ZP:()=>f,_D:()=>d,g5:()=>l,ii:()=>c});var n=r(5273),i=r(4170),a=r(5254);const o={ids:[],byId:{}},s=(0,n.oM)({name:"contacts",initialState:o,reducers:{resetContacts:()=>o,fullfillContacts(e,t){const r=t.payload||[];e.ids=r.map((e=>{let{uid:t}=e;return t})),e.byId=Object.fromEntries(r.map((e=>{const{uid:t}=e;return[t,e]})))},removeContact(e,t){const r=t.payload;e.ids=e.ids.filter((e=>e!=r)),delete e.byId[r]},updateUsersByLogs(e,t){t.payload.forEach((t=>{let{action:r,uid:n,...o}=t;switch(r){case"update":{const t=(0,i.lg)(o);e.byId[n]&&Object.keys(t).forEach((r=>{e.byId[n][r]=t[r],"avatar_updated_at"==r&&(e.byId[n].avatar=`${a.ZP}/resource/avatar?uid=${n}&t=${t[r]}`)}))}break;case"create":e.byId[n]={uid:n,...o};-1==e.ids.findIndex((e=>e==n))&&e.ids.push(n);break;case"delete":{const t=e.ids.findIndex((e=>e==n));t>-1&&(e.ids.splice(t,1),delete e.byId[n])}}}))},updateUsersStatus(e,t){t.payload.forEach((t=>{const{uid:r,online:n=!1}=t;e.byId[r]&&(e.byId[r].online=n)}))}}}),{resetContacts:u,fullfillContacts:l,updateUsersByLogs:c,updateUsersStatus:d}=s.actions,f=s.reducer},7642:(e,t,r)=>{"use strict";r.d(t,{Ie:()=>u,XK:()=>s,YZ:()=>o,ZP:()=>d,nF:()=>c,p_:()=>l});var n=r(5273);const i={},a=(0,n.oM)({name:"channelMessage",initialState:i,reducers:{resetChannelMsg:()=>i,fullfillChannelMsg:(e,t)=>t.payload,addChannelMsg(e,t){const{id:r,mid:n,local_id:i=null}=t.payload;if(e[r]){const t=e[r].findIndex((e=>e==n))>-1,a=e[r].findIndex((e=>e==i))>-1;if(t||a)return;e[r].push(+n)}else e[r]=[+n]},removeChannelMsg(e,t){const{id:r,mid:n}=t.payload;if(e[r]){const t=e[r].findIndex((e=>e==n));t>-1&&e[r].splice(t,1)}},removeChannelSession(e,t){(Array.isArray(t.payload)?t.payload:[t.payload]).forEach((t=>{delete e[t]}))}}}),{removeChannelSession:o,resetChannelMsg:s,fullfillChannelMsg:u,addChannelMsg:l,removeChannelMsg:c}=a.actions,d=a.reducer},658:(e,t,r)=>{"use strict";r.d(t,{Gd:()=>f,Hz:()=>d,MQ:()=>h,TB:()=>s,XS:()=>p,ZP:()=>g,Zl:()=>u,o6:()=>c});var n=r(5273),i=r(5254);const a={replying:{}},o=(0,n.oM)({name:"message",initialState:a,reducers:{resetMessage:()=>a,fullfillMessage:(e,t)=>Object.assign({...a},t.payload),updateMessage(e,t){const{mid:r,...n}=t.payload;e[r]={...e[r],...n}},addMessage(e,t){const r=t.payload,{mid:n,sending:a,content_type:o,content:s}=r;if(a&&e[n])return;const u=o.startsWith("image"),l=o==i.bT.file;!a&&l&&(r.file_path=s,r.content=`${i.ZP}/resource/file?file_path=${encodeURIComponent(r.file_path)}`),!a&&u&&(r.image_id=s,r.content=`${i.ZP}/resource/image?id=${encodeURIComponent(r.image_id)}`,r.thumbnail=`${i.ZP}/resource/thumbnail?id=${encodeURIComponent(r.image_id)}`),e[n]=r},removeMessage(e,t){(Array.isArray(t.payload)?t.payload:[t.payload]).forEach((t=>{delete e[t]}))},addReplyingMessage(e,t){const{id:r,mid:n}=t.payload;e.replying[r]=n},removeReplyingMessage(e,t){const r=t.payload;e.replying[r]&&delete e.replying[r]}}}),{resetMessage:s,fullfillMessage:u,setMessage:l,updateMessage:c,addMessage:d,removeMessage:f,addReplyingMessage:h,removeReplyingMessage:p}=o.actions,g=o.reducer},860:(e,t,r)=>{"use strict";r.d(t,{Fs:()=>c,Qc:()=>u,So:()=>o,ZK:()=>l,ZP:()=>d,af:()=>s});var n=r(5273);const i={ids:[],byId:{}},a=(0,n.oM)({name:"userMessage",initialState:i,reducers:{resetUserMsg:()=>i,fullfillUserMsg(e,t){e.ids=Object.keys(t.payload),e.byId=t.payload},addUserMsg(e,t){const{id:r,mid:n,local_id:i}=t.payload;if(e.byId[r]){const t=e.byId[r].findIndex((e=>e==n))>-1,a=e.byId[r].findIndex((e=>e==i))>-1;if(t||a)return;e.byId[r].push(+n),-1==e.ids.findIndex((e=>e==r))&&e.ids.push(+r)}else e.byId[r]=[+n],e.ids.push(+r)},removeUserMsg(e,t){const{id:r,mid:n}=t.payload;if(e.byId[r]){const t=e.byId[r].findIndex((e=>e==n));t>-1&&e.byId[r].splice(t,1)}},removeUserSession(e,t){const r=Array.isArray(t.payload)?t.payload:[t.payload];e.ids=e.ids.filter((e=>-1==r.findIndex((t=>t==e))))}}}),{removeUserSession:o,resetUserMsg:s,fullfillUserMsg:u,addUserMsg:l,removeUserMsg:c}=a.actions,d=a.reducer},6247:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(2791),i=r(5751),a=r(9957),o=r(4170),s=r(184);const u=i.ZP.div`
  width: 96px;
  height: 96px;
  position: relative;
  cursor: pointer;
  .avatar {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
    /* border: 1px solid #eee; */
    img {
      width: 100%;
      height: 100%;
    }
    input[type="file"] {
      cursor: pointer;
      display: block;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .tip {
      white-space: nowrap;
      padding: 4px;
      display: none;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      font-weight: bold;
      font-size: 12px;
      line-height: 18px;
    }
    &:hover .tip {
      display: flex;
    }
  }
  .icon {
    width: 28px;
    height: 28px;
    position: absolute;
    top: 0;
    right: 0;
  }
`;function l(e){let{url:t="",name:r="",uploadImage:i,disabled:l=!1}=e;const[c,d]=(0,n.useState)(!1),[f,h]=(0,n.useState)("");(0,n.useEffect)((()=>{if(t)h(t);else{const e=(0,o.eD)({initials:(0,o.Qm)(r)});h(e)}}),[t,r]);return f?(0,s.jsxs)(u,{children:[(0,s.jsxs)("div",{className:"avatar",children:[(0,s.jsx)("img",{src:f,alt:"avatar"}),!l&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"tip",children:c?"Uploading":"Change Avatar"}),(0,s.jsx)("input",{multiple:!1,onChange:async e=>{if(c)return;const[t]=e.target.files;d(!0),await i(t),d(!1)},type:"file",accept:"image/*",name:"avatar",id:"avatar"})]})]}),!l&&(0,s.jsx)("img",{src:a,alt:"icon",className:"icon"})]}):null}},5114:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(2791),i=r(4164);function a(e){let{id:t="root-modal",children:r}=e;const[a,o]=(0,n.useState)(null);return(0,n.useEffect)((()=>{const e=document.getElementById(t),r=document.createElement("div");return r.classList.add("wrapper"),e.appendChild(r),o(r),()=>{e.removeChild(r)}}),[t]),a?(0,i.createPortal)(r,a):null}},5786:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MyAccount});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2791),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(5751),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2978),react_hot_toast__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(6140),_app_services_contact__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(251),_AvatarUploader__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6247),_ProfileBasicEditModal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6310),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(184);const StyledWrapper=styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  .card {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 512px;
    background: #f3f4f6;
    border-radius: 20px;
    .name {
      margin-top: 8px;
      margin-bottom: 64px;
      font-weight: bold;
      font-size: 18px;
      line-height: 28px;
      color: #27272a;
      .uid {
        font-weight: normal;
        color: #52525b;
      }
    }
    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
      .info {
        display: flex;
        flex-direction: column;
        .label {
          font-weight: 600;
          font-size: 12px;
          line-height: 20px;
          text-transform: uppercase;
          color: #52525b;
        }
        .txt {
          font-weight: 500;
          font-size: 14px;
          line-height: 20px;
          color: #52525b;
          .gray {
            color: #78787c;
          }
        }
      }
      .btn {
        background: #1fe1f9;
        border: 1px solid #1fe1f9;
      }
    }
  }
  .danger {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .head {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #374151;
    }
    .desc {
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      color: #616161;
      margin-bottom: 16px;
    }
    .btn {
      background: #ef4444;
      border: 1px solid #ef4444;
    }
  }
  .btn {
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 8px 14px;
    background: #1fe1f9;
    border: 1px solid #1fe1f9;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
  }
`,EditModalInfo={name:{label:"Username",title:"Change your username",intro:"Enter a new username."},email:{label:"Email",title:"Change your email",intro:"Enter a new email."}};function MyAccount(){const[editModal,setEditModal]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[uploadAvatar,{isSuccess:uploadSuccess}]=(0,_app_services_contact__WEBPACK_IMPORTED_MODULE_2__.C0)(),loginUser=(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.v9)((e=>e.contacts.byId[e.authData.uid]));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{uploadSuccess&&react_hot_toast__WEBPACK_IMPORTED_MODULE_7__.ZP.success("update avatar successfully!")}),[uploadSuccess]);const handleBasicEdit=e=>{const{edit:t}=e.target.dataset;setEditModal(t)},closeBasicEditModal=()=>{setEditModal(null)};if(!loginUser)return null;const{uid:uid,avatar:avatar,name:name,email:email}=loginUser;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledWrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"card",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AvatarUploader__WEBPACK_IMPORTED_MODULE_3__.Z,{url:avatar,name:name,uploadImage:uploadAvatar}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"name",children:[name," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span",{className:"uid",children:["#",uid]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"label",children:"username"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span",{className:"txt",children:[name," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span",{className:"gray",children:[" #",uid]})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{"data-edit":"name",onClick:handleBasicEdit,className:"btn",children:"Edit"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"info",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"label",children:"email"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{className:"txt",children:email})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{"data-edit":"email",onClick:handleBasicEdit,className:"btn",children:"Edit"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"danger",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4",{className:"head",children:"Account Removal"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"desc",children:"Disabling your account means you can recover it at any time after taking this action."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{className:"btn",children:"Delete Account"})]})]}),editModal&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ProfileBasicEditModal__WEBPACK_IMPORTED_MODULE_4__.Z,{valueKey:editModal,...EditModalInfo[editModal],value:eval(editModal),closeModal:closeBasicEditModal})]})}},6310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(2791),i=r(5751),a=r(2216),o=r(251),s=r(3929),u=r(9356),l=r(5114),c=r(6140),d=r(184);const f=(0,i.ZP)(s.Z)`
  .input {
    margin: 48px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    label {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #6b7280;
    }
  }
`;function h(e){let{label:t="Username",valueKey:r="name",value:i="",title:s="Change your username",intro:h="Enter a new username and your existing password.",closeModal:p}=e;const[g,m]=(0,n.useState)(i),[_,{isLoading:v,isSuccess:y}]=(0,o.g$)();return(0,n.useEffect)((()=>{y&&(c.ZP.success("update user info successfully"),p())}),[y]),(0,d.jsx)(l.Z,{id:"modal-modal",children:(0,d.jsx)(f,{title:s,description:h,buttons:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u.Z,{onClick:p,children:"Cancel"}),(0,d.jsx)(u.Z,{onClick:()=>{_({[r]:g})},children:v?"Updating":"Done"})]}),className:"animate__animated animate__fadeInDown animate__faster",children:(0,d.jsxs)("div",{className:"input",children:[(0,d.jsx)("label",{htmlFor:r,children:t}),(0,d.jsx)(a.Z,{name:r,value:g,onChange:e=>{m(e.target.value)}})]})})})}},9356:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r(5751).ZP.button`
  cursor: pointer;
  padding: 10px 18px;
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: var(--br, 4px);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  background-color: #22ccee;
  &:hover,
  &:active {
    background-color: #06aed4;
  }
  &:focus {
    background-color: #22ccee;
  }
  &:disabled {
    background-color: #a5f0fc;
  }
  &.small {
    padding: 8px 14px;
    font-size: 14px;
    line-height: 20px;
  }
  &.danger {
    border: none;
    background-color: #ef4444;
    color: #fff;
  }
  &.ghost {
    border-color: #1fe1f9;
    background: none;
    color: #1fe1f9;
  }
`},2216:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(2791),i=r(9983);function a(e){return(0,i.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"}},{tag:"path",attr:{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"}}]})(e)}function o(e){return(0,i.w_)({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"}}]})(e)}var s=r(5751),u=r(184);const l=s.ZP.div`
  width: 100%;
  position: relative;
  .view {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`,c=s.ZP.input`
  width: 100%;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
  border-radius: 4px;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  padding: 8px;
  &.large {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 10px 14px;
  }
  &.none {
    outline: none;
    border: none;
    background: none;
    box-shadow: none;
  }
  &:disabled {
    color: #78787c;
    background-color: #f9fafb;
  }
  &::placeholder {
    color: #78787c;
  }
  &[type="password"] {
    padding-right: 30px;
  }
`;function d(e){let{type:t="text",...r}=e;const[i,s]=(0,n.useState)(t);return"password"==t?(0,u.jsxs)(l,{children:[(0,u.jsx)(c,{type:i,...r}),(0,u.jsx)("div",{className:"view",onClick:()=>{s((e=>"password"==e?"text":"password"))},children:"password"==i?(0,u.jsx)(a,{color:"#78787c"}):(0,u.jsx)(o,{color:"#78787c"})})]}):(0,u.jsx)(c,{type:i,...r})}},3929:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(5751),i=r(184);const a=n.ZP.div`
  padding: 32px;
  filter: drop-shadow(0px 25px 50px rgba(31, 41, 55, 0.25));
  border-radius: 8px;
  background-color: #fff;
  min-width: 440px;
  .title {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    color: #374151;
    margin-bottom: 16px;
  }
  .desc {
    text-align: center;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #6b7280;
    padding-bottom: 32px;
  }
  .btns {
    padding-top: 32px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    align-items: center;
  }
[class^='toastui-editor-']{
  .toastui-editor-md-container{
      border-bottom: none;
    .toastui-editor-md-splitter{
      background-color:#D0D5DD ;
    }
  }
    *{
        /* white-space: nowrap; */
        margin: 0 ;
        padding: 0;
    }
    p {
        margin:0 ;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #475467;
    margin-bottom: 16px;
  }
  a{
      background-color: transparent;
  }
  pre{
    width: 100%;
  }
  blockquote {
      border-left:none;
    display: flex;
    margin-top:0;
    margin-bottom: 10px;
    padding: 0;
    padding: 16px;
    color: #98a2b3;
    opacity: 0.8;
    box-shadow: inset 2px 0px 0px #a8b0bd;
    display: flex;
    align-items: center;
    > p{
      padding-right: 10px ;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 0;
    }
    > blockquote{
      padding: 14px;
    }
  }
  img{
    cursor: pointer;
      max-width:300px;
  }
  ul {
     white-space: nowrap;
      margin-top:0;
      margin-bottom:10px;
      /* display: flex;
      flex-direction:column;
      margin-left: 20px; */
      > li:before{
        margin-top: 8px;
        margin-left: -14px;
        background-color: #475467;
      }
    /* list-style-type: disc; */

  }
  ul,
  ol {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #475467;
    /* list-style-position: inside; */
  }
  h1,
  h2,
  h3,[class*='heading']{
    margin-block-start: 0;
    margin-block-end: 0;
      padding: 0;
      margin: 0;
      border-bottom: none;
      font-weight: 700;
      color: #475467;
  }
  h1,[class*='heading1'] {
    margin-top: 0 !important;
    font-size: 24px;
    line-height: 32px;
  }
  h2,[class*='heading2'] {
    font-size: 20px;
    line-height: 30px;
  }
  h3,[class*='heading3'] {
    font-size: 16px;
    line-height: 24px;
  }
}
`;var br,Fr=__webpack_require__(7462);!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(br||(br={}));var wr=function(e){return e};var kr="beforeunload",Er="popstate";function xr(e){void 0===e&&(e={});var t=e.window,r=void 0===t?document.defaultView:t,n=r.history;function i(){var e=Tr(r.location.hash.substr(1)),t=e.pathname,i=void 0===t?"/":t,a=e.search,o=void 0===a?"":a,s=e.hash,u=void 0===s?"":s,l=n.state||{};return[l.idx,wr({pathname:i,search:o,hash:u,state:l.usr||null,key:l.key||"default"})]}var a=null;function o(){if(a)f.call(a),a=null;else{var e=br.Pop,t=i(),r=t[0],n=t[1];if(f.length){if(null!=r){var o=l-r;o&&(a={action:e,location:n,retry:function(){v(-1*o)}},v(o))}}else _(e)}}r.addEventListener(Er,o),r.addEventListener("hashchange",(function(){Ar(i()[1])!==Ar(c)&&o()}));var s=br.Pop,u=i(),l=u[0],c=u[1],d=Dr(),f=Dr();function h(e){return function(){var e=document.querySelector("base"),t="";if(e&&e.getAttribute("href")){var n=r.location.href,i=n.indexOf("#");t=-1===i?n:n.slice(0,i)}return t}()+"#"+("string"===typeof e?e:Ar(e))}function p(e,t){return void 0===t&&(t=null),wr((0,Fr.Z)({pathname:c.pathname,hash:"",search:""},"string"===typeof e?Tr(e):e,{state:t,key:Sr()}))}function g(e,t){return[{usr:e.state,key:e.key,idx:t},h(e)]}function m(e,t,r){return!f.length||(f.call({action:e,location:t,retry:r}),!1)}function _(e){s=e;var t=i();l=t[0],c=t[1],d.call({action:s,location:c})}function v(e){n.go(e)}null==l&&(l=0,n.replaceState((0,Fr.Z)({},n.state,{idx:l}),""));var y={get action(){return s},get location(){return c},createHref:h,push:function e(t,i){var a=br.Push,o=p(t,i);if(m(a,o,(function(){e(t,i)}))){var s=g(o,l+1),u=s[0],c=s[1];try{n.pushState(u,"",c)}catch(d){r.location.assign(c)}_(a)}},replace:function e(t,r){var i=br.Replace,a=p(t,r);if(m(i,a,(function(){e(t,r)}))){var o=g(a,l),s=o[0],u=o[1];n.replaceState(s,"",u),_(i)}},go:v,back:function(){v(-1)},forward:function(){v(1)},listen:function(e){return d.push(e)},block:function(e){var t=f.push(e);return 1===f.length&&r.addEventListener(kr,Cr),function(){t(),f.length||r.removeEventListener(kr,Cr)}}};return y}function Cr(e){e.preventDefault(),e.returnValue=""}function Dr(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function Sr(){return Math.random().toString(36).substr(2,8)}function Ar(e){var t=e.pathname,r=void 0===t?"/":t,n=e.search,i=void 0===n?"":n,a=e.hash,o=void 0===a?"":a;return i&&"?"!==i&&(r+="?"===i.charAt(0)?i:"?"+i),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:"#"+o),r}function Tr(e){var t={};if(e){var r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));var n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Or(e,t){if(!e)throw new Error(t)}const Pr=(0,c.createContext)(null);const Nr=(0,c.createContext)(null);const Mr=(0,c.createContext)({outlet:null,matches:[]});function Rr(e){let{to:t,replace:r,state:n}=e;zr()||Or(!1);let i=Wr();return(0,c.useEffect)((()=>{i(t,{replace:r,state:n})})),null}function jr(e){return function(e){let t=(0,c.useContext)(Mr).outlet;if(t)return(0,c.createElement)(Vr.Provider,{value:e},t);return t}(e.context)}function Ir(e){Or(!1)}function Br(e){let{basename:t="/",children:r=null,location:n,navigationType:i=br.Pop,navigator:a,static:o=!1}=e;zr()&&Or(!1);let s=on(t),u=(0,c.useMemo)((()=>({basename:s,navigator:a,static:o})),[s,a,o]);"string"===typeof n&&(n=Tr(n));let{pathname:l="/",search:d="",hash:f="",state:h=null,key:p="default"}=n,g=(0,c.useMemo)((()=>{let e=nn(l,s);return null==e?null:{pathname:e,search:d,hash:f,state:h,key:p}}),[s,l,d,f,h,p]);return null==g?null:(0,c.createElement)(Pr.Provider,{value:u},(0,c.createElement)(Nr.Provider,{children:r,value:{location:g,navigationType:i}}))}function Lr(e){let{children:t,location:r}=e;return function(e,t){zr()||Or(!1);let{matches:r}=(0,c.useContext)(Mr),n=r[r.length-1],i=n?n.params:{},a=(n&&n.pathname,n?n.pathnameBase:"/");n&&n.route;0;let o,s=Hr();if(t){var u;let e="string"===typeof t?Tr(t):t;"/"===a||(null==(u=e.pathname)?void 0:u.startsWith(a))||Or(!1),o=e}else o=s;let l=o.pathname||"/",d="/"===a?l:l.slice(a.length)||"/",f=function(e,t,r){void 0===r&&(r="/");let n=nn(("string"===typeof t?Tr(t):t).pathname||"/",r);if(null==n)return null;let i=Zr(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let r=e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]));return r?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let o=0;null==a&&o<i.length;++o)a=Jr(i[o],n);return a}(e,{pathname:d});0;return en(f&&f.map((e=>Object.assign({},e,{params:Object.assign({},i,e.params),pathname:an([a,e.pathname]),pathnameBase:"/"===e.pathnameBase?a:an([a,e.pathnameBase])}))),r)}(Kr(t),r)}function qr(e){zr()||Or(!1);let{basename:t,navigator:r}=(0,c.useContext)(Pr),{hash:n,pathname:i,search:a}=Gr(e),o=i;if("/"!==t){let r=function(e){return""===e||""===e.pathname?"/":"string"===typeof e?Tr(e).pathname:e.pathname}(e),n=null!=r&&r.endsWith("/");o="/"===i?t+(n?"/":""):an([t,i])}return r.createHref({pathname:o,search:a,hash:n})}function zr(){return null!=(0,c.useContext)(Nr)}function Hr(){return zr()||Or(!1),(0,c.useContext)(Nr).location}function Ur(e){zr()||Or(!1);let{pathname:t}=Hr();return(0,c.useMemo)((()=>tn(e,t)),[t,e])}function Wr(){zr()||Or(!1);let{basename:e,navigator:t}=(0,c.useContext)(Pr),{matches:r}=(0,c.useContext)(Mr),{pathname:n}=Hr(),i=JSON.stringify(r.map((e=>e.pathnameBase))),a=(0,c.useRef)(!1);return(0,c.useEffect)((()=>{a.current=!0})),(0,c.useCallback)((function(r,o){if(void 0===o&&(o={}),!a.current)return;if("number"===typeof r)return void t.go(r);let s=rn(r,JSON.parse(i),n);"/"!==e&&(s.pathname=an([e,s.pathname])),(o.replace?t.replace:t.push)(s,o.state)}),[e,t,i,n])}const Vr=(0,c.createContext)(null);function $r(){let{matches:e}=(0,c.useContext)(Mr),t=e[e.length-1];return t?t.params:{}}function Gr(e){let{matches:t}=(0,c.useContext)(Mr),{pathname:r}=Hr(),n=JSON.stringify(t.map((e=>e.pathnameBase)));return(0,c.useMemo)((()=>rn(e,JSON.parse(n),r)),[e,n,r])}function Kr(e){let t=[];return c.Children.forEach(e,(e=>{if(!(0,c.isValidElement)(e))return;if(e.type===c.Fragment)return void t.push.apply(t,Kr(e.props.children));e.type!==Ir&&Or(!1);let r={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(r.children=Kr(e.props.children)),t.push(r)})),t}function Zr(e,t,r,n){return void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n=""),e.forEach(((e,i)=>{let a={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(a.relativePath.startsWith(n)||Or(!1),a.relativePath=a.relativePath.slice(n.length));let o=an([n,a.relativePath]),s=r.concat(a);e.children&&e.children.length>0&&(!0===e.index&&Or(!1),Zr(e.children,t,s,o)),(null!=e.path||e.index)&&t.push({path:o,score:Qr(o,e.index),routesMeta:s})})),t}const Yr=/^:\w+$/,Xr=e=>"*"===e;function Qr(e,t){let r=e.split("/"),n=r.length;return r.some(Xr)&&(n+=-2),t&&(n+=2),r.filter((e=>!Xr(e))).reduce(((e,t)=>e+(Yr.test(t)?3:""===t?1:10)),n)}function Jr(e,t){let{routesMeta:r}=e,n={},i="/",a=[];for(let o=0;o<r.length;++o){let e=r[o],s=o===r.length-1,u="/"===i?t:t.slice(i.length)||"/",l=tn({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u);if(!l)return null;Object.assign(n,l.params);let c=e.route;a.push({params:n,pathname:an([i,l.pathname]),pathnameBase:on(an([i,l.pathnameBase])),route:c}),"/"!==l.pathnameBase&&(i=an([i,l.pathnameBase]))}return a}function en(e,t){return void 0===t&&(t=[]),null==e?null:e.reduceRight(((r,n,i)=>(0,c.createElement)(Mr.Provider,{children:void 0!==n.route.element?n.route.element:r,value:{outlet:r,matches:t.concat(e.slice(0,i+1))}})),null)}function tn(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1);void 0===r&&(r=!0);let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(n.push(t),"([^\\/]+)")));e.endsWith("*")?(n.push("*"),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=r?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";return[new RegExp(i,t?void 0:"i"),n]}(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1),u=n.reduce(((e,t,r)=>{if("*"===t){let e=s[r]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(r){return e}}(s[r]||""),e}),{});return{params:u,pathname:a,pathnameBase:o,pattern:e}}function rn(e,t,r){let n,i="string"===typeof e?Tr(e):e,a=""===e||""===i.pathname?"/":i.pathname;if(null==a)n=r;else{let e=t.length-1;if(a.startsWith("..")){let t=a.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}n=e>=0?t[e]:"/"}let o=function(e,t){void 0===t&&(t="/");let{pathname:r,search:n="",hash:i=""}="string"===typeof e?Tr(e):e,a=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:a,search:sn(n),hash:un(i)}}(i,n);return a&&"/"!==a&&a.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function nn(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=e.charAt(t.length);return r&&"/"!==r?null:e.slice(t.length)||"/"}const an=e=>e.join("/").replace(/\/\/+/g,"/"),on=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),sn=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",un=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function ln(){return ln=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ln.apply(this,arguments)}function cn(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}const dn=["onClick","reloadDocument","replace","state","target","to"],fn=["aria-current","caseSensitive","className","end","style","to","children"];function hn(e){let{basename:t,children:r,window:n}=e,i=(0,c.useRef)();null==i.current&&(i.current=xr({window:n}));let a=i.current,[o,s]=(0,c.useState)({action:a.action,location:a.location});return(0,c.useLayoutEffect)((()=>a.listen(s)),[a]),(0,c.createElement)(Br,{basename:t,children:r,location:o.location,navigationType:o.action,navigator:a})}const pn=(0,c.forwardRef)((function(e,t){let{onClick:r,reloadDocument:n,replace:i=!1,state:a,target:o,to:s}=e,u=cn(e,dn),l=qr(s),d=function(e,t){let{target:r,replace:n,state:i}=void 0===t?{}:t,a=Wr(),o=Hr(),s=Gr(e);return(0,c.useCallback)((t=>{if(0===t.button&&(!r||"_self"===r)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)){t.preventDefault();let r=!!n||Ar(o)===Ar(s);a(e,{replace:r,state:i})}}),[o,a,s,n,i,r,e])}(s,{replace:i,state:a,target:o});return(0,c.createElement)("a",ln({},u,{href:l,onClick:function(e){r&&r(e),e.defaultPrevented||n||d(e)},ref:t,target:o}))}));const gn=(0,c.forwardRef)((function(e,t){let{"aria-current":r="page",caseSensitive:n=!1,className:i="",end:a=!1,style:o,to:s,children:u}=e,l=cn(e,fn),d=Hr(),f=Gr(s),h=d.pathname,p=f.pathname;n||(h=h.toLowerCase(),p=p.toLowerCase());let g,m=h===p||!a&&h.startsWith(p)&&"/"===h.charAt(p.length),_=m?r:void 0;g="function"===typeof i?i({isActive:m}):[i,m?"active":null].filter(Boolean).join(" ");let v="function"===typeof o?o({isActive:m}):o;return(0,c.createElement)(pn,ln({},l,{"aria-current":_,className:g,ref:t,style:v,to:s}),"function"===typeof u?u({isActive:m}):u)}));var mn=__webpack_require__(2978);const _n=fe.ZP.div`
 display: flex;
`;function vn(){return(0,ve.jsx)(_n,{children:"404 page"})}var yn=__webpack_require__(5254),bn=__webpack_require__(9356);const Fn=(0,fe.ZP)(bn.Z)`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #344054;
  border: 1px solid #d0d5dd;
  background: none !important;
  .icon {
    width: 24px;
    height: 24px;
  }
`,wn=fe.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .form {
    padding: 36px 40px 32px 40px;
    /* border: 1px solid #eee; */
    box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
      0px 2px 4px -2px rgba(16, 24, 40, 0.06);
    border-radius: 12px;
    .tips {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 24px;
      .logo {
        width: 56px;
        height: 56px;
        margin-bottom: 28px;
        border-radius: 50%;
      }
      .title {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #101828;
        margin-bottom: 8px;
      }
    }
    .desc {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #667085;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 360px;
    }
    .or {
      border: none;
      position: relative;
      height: 1px;
      background-color: #e4e7ec;
      margin: 26px 0;
      &:after {
        padding: 4px;
        background-color: #fff;
        content: "OR";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        font-size: 14px;
        line-height: 20px;
        color: #667085;
      }
    }
  }
`;var kn=__webpack_require__(5524),En=__webpack_require__.n(kn);function xn(e,t,r,n){return new(r||(r=Promise))((function(i,a){function o(e){try{u(n.next(e))}catch(pf){a(pf)}}function s(e){try{u(n.throw(e))}catch(pf){a(pf)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,s)}u((n=n.apply(e,t||[])).next())}))}function Cn(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(pf){a=[6,pf],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}var Dn="INSTALLED",Sn="NOT_INSTALLED",An="REGISTERED",Tn="REGISTERING",On="RELOADING",Pn={CHROME:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",FIREFOX:"https://addons.mozilla.org/firefox/addon/ether-metamask/",DEFAULT:"https://metamask.io"},Nn="REGISTRATION_IN_PROGRESS",Mn="FORWARDER_ID",Rn=function(){function e(t){var r=void 0===t?{}:t,n=r.forwarderOrigin,i=void 0===n?"https://fwd.metamask.io":n,a=r.forwarderMode,o=void 0===a?e.FORWARDER_MODE.INJECT:a;this.forwarderOrigin=i,this.forwarderMode=o,this.state=e.isMetaMaskInstalled()?Dn:Sn;var s=e._detectBrowser();this.downloadUrl=s?Pn[s]:Pn.DEFAULT,this._onMessage=this._onMessage.bind(this),this._onMessageFromForwarder=this._onMessageFromForwarder.bind(this),this._openForwarder=this._openForwarder.bind(this),this._openDownloadPage=this._openDownloadPage.bind(this),this.startOnboarding=this.startOnboarding.bind(this),this.stopOnboarding=this.stopOnboarding.bind(this),window.addEventListener("message",this._onMessage),o===e.FORWARDER_MODE.INJECT&&"true"===sessionStorage.getItem(Nn)&&e._injectForwarder(this.forwarderOrigin)}return e.prototype._onMessage=function(e){if(e.origin===this.forwarderOrigin)return"metamask:reload"===e.data.type?this._onMessageFromForwarder(e):void 0},e.prototype._onMessageUnknownStateError=function(e){throw new Error("Unknown state: '"+e+"'")},e.prototype._onMessageFromForwarder=function(t){return xn(this,void 0,void 0,(function(){return Cn(this,(function(r){switch(r.label){case 0:switch(this.state){case On:return[3,1];case Sn:return[3,2];case Dn:return[3,3];case Tn:return[3,5];case An:return[3,6]}return[3,7];case 1:return[3,8];case 2:return this.state=On,location.reload(),[3,8];case 3:return this.state=Tn,[4,e._register()];case 4:return r.sent(),this.state=An,t.source.postMessage({type:"metamask:registrationCompleted"},t.origin),this.stopOnboarding(),[3,8];case 5:case 6:return[3,8];case 7:this._onMessageUnknownStateError(this.state),r.label=8;case 8:return[2]}}))}))},e.prototype.startOnboarding=function(){sessionStorage.setItem(Nn,"true"),this._openDownloadPage(),this._openForwarder()},e.prototype.stopOnboarding=function(){"true"===sessionStorage.getItem(Nn)&&(this.forwarderMode===e.FORWARDER_MODE.INJECT&&e._removeForwarder(),sessionStorage.setItem(Nn,"false"))},e.prototype._openForwarder=function(){this.forwarderMode===e.FORWARDER_MODE.OPEN_TAB?window.open(this.forwarderOrigin,"_blank"):e._injectForwarder(this.forwarderOrigin)},e.prototype._openDownloadPage=function(){window.open(this.downloadUrl,"_blank")},e.isMetaMaskInstalled=function(){return Boolean(window.ethereum&&window.ethereum.isMetaMask)},e._register=function(){return window.ethereum.request({method:"wallet_registerOnboarding"})},e._injectForwarder=function(e){var t=document.body,r=document.createElement("iframe");r.setAttribute("height","0"),r.setAttribute("width","0"),r.setAttribute("style","display: none;"),r.setAttribute("src",e),r.setAttribute("id",Mn),t.insertBefore(r,t.children[0])},e._removeForwarder=function(){var e;null===(e=document.getElementById(Mn))||void 0===e||e.remove()},e._detectBrowser=function(){var e=En().parse(window.navigator.userAgent);return"Firefox"===e.browser.name?"FIREFOX":["Chrome","Chromium"].includes(e.browser.name||"")?"CHROME":null},e.FORWARDER_MODE={INJECT:"INJECT",OPEN_TAB:"OPEN_TAB"},e}();const jn=Rn;var In=__webpack_require__(1465),Bn=__webpack_require__(5273),Ln=__webpack_require__(2592),qn=__webpack_require__(8198);const zn=()=>{let e=localStorage.getItem(yn.OP);return e||(e=`web:${(0,Bn.x0)()}`,localStorage.setItem(yn.OP,e)),e},Hn=(0,In.LC)({reducerPath:"authApi",baseQuery:Ln.Z,endpoints:e=>({login:e.mutation({query:e=>({url:"token/login",method:"POST",body:{credential:e,device:zn(),device_token:"test"}}),transformResponse:e=>{const{avatar_updated_at:t}=e.user;return e.user.avatar=0==t?"":`${yn.ZP}/resource/avatar?uid=${e.user.uid}&t=${t}`,e}}),renew:e.mutation({query:e=>{let{token:t,refreshToken:r}=e;return{url:"/token/renew",method:"POST",body:{token:t,refresh_token:r}}},async onQueryStarted(e,t){let{dispatch:r,queryFulfilled:n}=t;try{const{data:e}=await n;r((0,qn.jM)(e))}catch{r((0,qn.sQ)())}}}),getOpenid:e.mutation({query:e=>{let{issuer:t,redirect_uri:r}=e;return{url:"/token/openid/authorize",method:"POST",body:{issuer:t,redirect_uri:r}}}}),checkInviteTokenValid:e.mutation({query:e=>({url:"user/check_invite_magic_token",method:"POST",body:{magic_token:e}})}),getMetamaskNonce:e.query({query:e=>({url:`/token/metamask/nonce?public_address=${e}`})}),logout:e.query({query:()=>({url:"token/logout"})})})}),{useGetOpenidMutation:Un,useRenewMutation:Wn,useLazyGetMetamaskNonceQuery:Vn,useLoginMutation:$n,useLazyLogoutQuery:Gn,useCheckInviteTokenValidMutation:Kn}=Hn;var Zn=__webpack_require__(6724);function Yn(e){let{login:t}=e;const[r,n]=(0,c.useState)(!1),[i]=Vn(),a=(0,c.useRef)();(0,c.useEffect)((()=>{a.current||(a.current=new jn)}),[]);return(0,ve.jsxs)(Fn,{disabled:r,onClick:async()=>{if(jn.isMetaMaskInstalled()){n(!0);const[e]=await ethereum.request({method:"eth_requestAccounts"}),{data:r,isSuccess:a}=await i(e);if(a){const i=await(async(e,t)=>await ethereum.request({method:"personal_sign",params:[t,e,"hello from rustchat"]}))(e,r);t({public_address:e,nonce:r,signature:i,type:"metamask"}),n(!1)}}else a.current.startOnboarding()},href:"#",children:[(0,ve.jsx)("img",{className:"icon",src:Zn,alt:"meta mask icon"}),"Sign in with MetaMask"]})}var Xn=__webpack_require__(944);function Qn(){const[e,{data:t,isLoading:r,isSuccess:n}]=Un();return(0,c.useEffect)((()=>{if(n){const{url:e}=t;location.href=e}}),[t,n]),(0,ve.jsxs)(Fn,{disabled:r,onClick:()=>{e({issuer:"broker.pod.inrupt.com",redirect_uri:`${location.origin}/#/login`})},href:"#",children:[(0,ve.jsx)("img",{src:Xn,className:"icon",alt:"solid icon"}),r?"Redirecting...":"Sign in with Solid"]})}var Jn=__webpack_require__(2216),ei=__webpack_require__(929),ti=__webpack_require__(2594);function ri(e){let{login:t}=e;const{signIn:r,loaded:n}=(0,ei.useGoogleLogin)({onScriptLoadFailure:e=>{},clientId:yn.IB,onSuccess:e=>{let{tokenId:r,...n}=e;t({id_token:r,type:"google"})},onFailure:e=>{}});return(0,ve.jsxs)(Fn,{onClick:()=>{r()},href:"#",children:[(0,ve.jsx)("img",{className:"icon",src:ti,alt:"google icon"}),"Sign in with Google"]})}function ni(){const[e,{data:t,isSuccess:r,isLoading:i,error:a}]=$n(),o=Wr(),s=(0,mn.I0)(),[u,l]=(0,c.useState)({email:"",password:""});(0,c.useEffect)((()=>{const t=new URLSearchParams(location.search),r=t.get("code"),n=t.get("state");r&&n&&e({code:r,state:n,type:"oidc"})}),[]),(0,c.useEffect)((()=>{if(a)switch(a.status){case"PARSING_ERROR":n.ZP.error(a.data);break;case 401:n.ZP.error("username or password incorrect");break;case 404:n.ZP.error("account not exsit");break;default:n.ZP.error("something error")}else;}),[a]),(0,c.useEffect)((()=>{r&&t&&(n.ZP.success("login success"),s((0,qn.A3)(t)),o("/"))}),[r,t]);const d=e=>{const{type:t}=e.target.dataset,{value:r}=e.target;l((e=>(e[t]=r,{...e})))},{email:f,password:h}=u;return(0,ve.jsx)(wn,{children:(0,ve.jsxs)("div",{className:"form",children:[(0,ve.jsxs)("div",{className:"tips",children:[(0,ve.jsx)("img",{src:`${yn.ZP}/resource/organization/logo`,alt:"logo",className:"logo"}),(0,ve.jsx)("h2",{className:"title",children:"Login to Rustchat"}),(0,ve.jsx)("span",{className:"desc",children:"Please enter your details."})]}),(0,ve.jsxs)("form",{onSubmit:t=>{t.preventDefault(),e({...u,type:"password"})},children:[(0,ve.jsx)(Jn.Z,{className:"large",name:"email",value:f,required:!0,placeholder:"Enter your email","data-type":"email",onChange:d}),(0,ve.jsx)(Jn.Z,{className:"large",type:"password",value:h,name:"password",required:!0,"data-type":"password",onChange:d,placeholder:"Enter your password"}),(0,ve.jsx)(bn.Z,{type:"submit",disabled:i,children:i?"Signing":"Sign in"})]}),(0,ve.jsx)("hr",{className:"or"}),(0,ve.jsx)(ri,{login:e}),(0,ve.jsx)(Yn,{login:e}),(0,ve.jsx)(Qn,{})]})})}const ii={online:!0,ready:!1,inputMode:"text",menuExpand:!1,setting:!1,channelSetting:null},ai=(0,Bn.oM)({name:"ui",initialState:ii,reducers:{fullfillUI:(e,t)=>({...ii,...t.payload}),setReady(e){e.ready=!0},updateOnline(e,t){e.online=t.payload},toggleMenuExpand(e){e.menuExpand=!e.menuExpand},updateInputMode(e,t){e.inputMode=t.payload},toggleSetting(e){e.setting=!e.setting},toggleChannelSetting(e,t){const r=t.payload;e.channelSetting=e.channelSetting?null:r}}}),{fullfillUI:oi,setReady:si,updateOnline:ui,updateInputMode:li,toggleSetting:ci,toggleMenuExpand:di,toggleChannelSetting:fi}=ai.actions,hi=ai.reducer,pi=fe.ZP.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #f5f6f7;
  > .col {
    height: 100%;
    display: flex;
    flex-direction: column;
    &.left {
      position: relative;
      background: #e5e7eb;
      width: 64px;
      box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.5s ease-in;
      > .divider {
        width: -webkit-fill-available;
        height: 1px;
        background-color: #d4d4d4;
        margin: 8px 16px;
      }
      &.expand {
        width: 180px;
      }
    }
    &.right {
      width: 100%;
    }
    > .nav {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding: 24px 8px 10px 8px;
      .link {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        padding: 8px;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #4b5563;
        border-radius: 8px;
        &:hover,
        &.active {
          background-color: rgba(0, 0, 0, 0.08);
        }
      }
    }
  }
`,gi=fe.ZP.div`
  min-height: 56px;
  padding: 0 20px;
  padding-right: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  &.expand {
    padding-right: 16px;
  }
  .server {
    display: flex;
    align-items: center;
    gap: 10px;
    .logo {
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 4px;
      white-space: nowrap;
      .title {
        font-weight: bold;
        font-size: 14px;
        line-height: 100%;
        color: #374151;
        text-transform: capitalize;
      }
      .count {
        font-weight: normal;
        font-size: 12px;
        line-height: 100%;
        color: #78787c;
      }
    }
  }
`;function mi(e){let{data:t,memberCount:r,expand:n=!0}=e;return t?(0,ve.jsx)(gi,{className:n?"expand":"",children:(0,ve.jsxs)("div",{className:"server",children:[(0,ve.jsx)("img",{className:"logo",src:t.logo,alt:"logo"}),n&&(0,ve.jsxs)("div",{className:"info",children:[(0,ve.jsx)("h2",{className:"title animate__animated animate__fadeIn",children:t.name}),(0,ve.jsxs)("span",{className:"count",children:[r," members"]})]})]})}):null}const _i={usersVersion:0,afterMid:0,readUsers:{},readChannels:{}},vi=(0,Bn.oM)({name:"footprint",initialState:_i,reducers:{resetFootprint:()=>_i,fullfillFootprint(e,t){const{usersVersion:r=0,afterMid:n=0,readUsers:i={},readChannels:a={}}=t.payload;return{usersVersion:r,afterMid:n,readUsers:i,readChannels:a}},updateUsersVersion(e,t){const r=t.payload;e.usersVersion=r},updateAfterMid(e,t){const r=t.payload;e.afterMid=r},updateReadUsers(e,t){const r=t.payload||[];0!=r.length&&r.forEach((t=>{let{uid:r,mid:n}=t;e.readUsers[r]=n}))},updateReadChannels(e,t){const r=t.payload||[];0!=r.length&&r.forEach((t=>{let{gid:r,mid:n}=t;e.readChannels[r]=n}))}}}),{resetFootprint:yi,fullfillFootprint:bi,updateAfterMid:Fi,updateUsersVersion:wi,updateReadChannels:ki,updateReadUsers:Ei}=vi.actions,xi=vi.reducer,Ci={ids:[],byId:{}},Di=(0,Bn.oM)({name:"channels",initialState:Ci,reducers:{resetChannels:()=>Ci,fullfillChannels(e,t){const r=t.payload||[];e.ids=r.map((e=>{let{gid:t}=e;return t})),e.byId=Object.fromEntries(r.map((e=>{const{gid:t}=e;return[t,e]})))},addChannel(e,t){const r=t.payload,{gid:n,...i}=r;e.ids.push(n),e.byId[n]=i},updateChannel(e,t){const{id:r,...n}=t.payload;e.byId[r]={...e.byId[r],...n}},removeChannel(e,t){const r=t.payload,n=e.ids.findIndex((e=>e==r));n>-1&&(e.ids.splice(n,1),delete e.byId[r])}}}),{resetChannels:Si,fullfillChannels:Ai,addChannel:Ti,updateChannel:Oi,removeChannel:Pi}=Di.actions,Ni=Di.reducer;var Mi=__webpack_require__(7271),Ri=__webpack_require__(7642),ji=__webpack_require__(860);const Ii={},Bi=(0,Bn.oM)({name:"reactionMessage",initialState:Ii,reducers:{resetReactionMessage:()=>Ii,fullfillReactionMessage:(e,t)=>t.payload,removeReactionMessage(e,t){(Array.isArray(t.payload)?t.payload:[t.payload]).forEach((t=>{delete e[t]}))},toggleReactionMessage(e,t){const{from_uid:r,mid:n,action:i}=t.payload;if(e[n]||(e[n]={}),e[n][i]){const t=e[n][i],a=t.findIndex((e=>e==r));a>-1?(t.splice(a,1),0==t.length&&delete e[n][i]):t.push(r)}else e[n][i]=[r]}}}),{removeReactionMessage:Li,resetReactionMessage:qi,fullfillReactionMessage:zi,toggleReactionMessage:Hi}=Bi.actions,Ui=Bi.reducer;var Wi=__webpack_require__(658);function Vi(){const e=(0,mn.I0)(),[t,{isLoading:r,isSuccess:n}]=Gn();return(0,c.useEffect)((()=>{n&&e((0,qn.sQ)())}),[n]),{clearLocalData:()=>{(0,mn.dC)((()=>{e(yi()),e((0,Ri.XK)()),e((0,ji.af)()),e(Si()),e((0,Mi.T9)()),e((0,Wi.TB)()),e(qi())}))},logout:t,exited:n,exiting:r}}const $i=fe.ZP.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    padding: 10px;
    border: 4px solid #999;
    border-radius: 50%;
  }
  .reload {
    visibility: hidden;
    &.visible {
      visibility: visible;
    }
  }
`;function Gi(){const[e,t]=(0,c.useState)(!1),{clearLocalData:r}=Vi();return(0,c.useEffect)((()=>{const e=setTimeout((()=>{t(!0)}),15e3);return()=>{clearTimeout(e)}}),[]),(0,ve.jsxs)($i,{children:[(0,ve.jsx)("div",{className:"loading",children:"Loading..."}),e&&(0,ve.jsx)(bn.Z,{className:"reload danger "+(e?"visible":""),onClick:()=>{r(),location.reload(!0)},children:"Reload"})]})}var Ki=__webpack_require__(6151),Zi=__webpack_require__(2310),Yi=__webpack_require__(5989);const Xi=fe.ZP.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 8px 12px;
  .menu {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 10px;
    .icon {
      width: 24px;
      height: 24px;
      transition: all 0.5s ease;
    }
    .txt {
      color: #4b5563;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;function Qi(e){let{toggle:t,expand:r=!0}=e;const n=(0,mn.I0)();return(0,ve.jsxs)(Xi,{children:[(0,ve.jsxs)("li",{className:"menu",onClick:()=>{n(ci())},children:[(0,ve.jsx)("img",{src:Ki,alt:"setting icon",className:"icon"}),r&&(0,ve.jsx)("span",{className:"txt animate__animated animate__fadeIn",children:"Settings"})]}),(0,ve.jsxs)("li",{className:"menu",onClick:t,children:[(0,ve.jsx)("img",{src:r?Zi:Yi,alt:"expand icon",className:"icon"}),r&&(0,ve.jsx)("span",{className:"txt animate__animated animate__fadeIn",children:"Expand"})]})]})}var Ji=__webpack_require__(1842),ea=__webpack_require__.n(Ji);const ta={name:"",description:"",logo:"",inviteLink:{link:"",expire:0}},ra=(0,Bn.oM)({name:"server",initialState:ta,reducers:{resetServer:()=>ta,fullfillServer(e,t){const{inviteLink:r={link:"",expire:0},name:n="",description:i=""}=t.payload||{};return{name:n,description:i,inviteLink:r}},updateInfo(e,t){const r=t.payload||{};Object.keys(r).forEach((t=>{e[t]=r[t]}))},updateInviteLink(e,t){const{link:r,expire:n=604800}=t.payload;e.inviteLink={link:r,expire:n}}}}),{updateInfo:na,resetServer:ia,fullfillServer:aa,updateInviteLink:oa}=ra.actions,sa=ra.reducer,ua=[],la=(0,Bn.oM)({name:"fileMessage",initialState:ua,reducers:{resetFileMessage:()=>ua,fullfillFileMessage:(e,t)=>t.payload||[],addFileMessage(e,t){const r=t.payload;-1==e.findIndex((e=>e==r))&&e.unshift(+r)},removeFileMessage(e,t){(Array.isArray(t.payload)?t.payload:[t.payload]).forEach((t=>{const r=e.fileMessages.findIndex((e=>e==t));r>-1&&e.splice(r,1)}))}}}),{removeFileMessage:ca,resetFileMessage:da,fullfillFileMessage:fa,addFileMessage:ha}=la.actions,pa=la.reducer,ga=()=>{const[e,t]=(0,c.useState)(!1),r=(0,mn.I0)();return{rehydrate:async()=>{const e={channels:[],contacts:[],fileMessage:{},channelMessage:{},userMessage:{},reactionMessage:{},message:{replying:{}},footprint:{},ui:{},server:{}},n=Object.keys(window.CACHE);await Promise.all(n.map((t=>window.CACHE[t].iterate(((r,n)=>{switch(t){case"channels":r&&e.channels.push(r);break;case"contacts":r&&e.contacts.push(r);break;case"footprint":e.footprint[n]=r;break;case"ui":e.ui[n]=r;break;case"messageChannel":e.channelMessage[n]=r;break;case"messageFile":e.fileMessage[n]=r||[];break;case"messageDM":e.userMessage[n]=r;break;case"messageReaction":e.reactionMessage[n]=r;break;case"message":e.message[n]=r;break;case"server":e.server[n]=r}})))));(0,mn.dC)((()=>{r((0,Mi.g5)(e.contacts)),r(aa(e.server)),r(Ai(e.channels)),r(fa(e.fileMessage.list)),r((0,Ri.Ie)(e.channelMessage)),r((0,ji.Qc)(e.userMessage)),r((0,Wi.Zl)(e.message)),r(bi(e.footprint)),r(oi(e.ui)),r(zi(e.reactionMessage))})),t(!0)},rehydrated:e}},ma=[{storeName:"channels",description:"store channel list"},{storeName:"contacts",description:"store contact list"},{storeName:"messageDM",description:"store DM message with IDs"},{storeName:"messageChannel",description:"store channel message with IDs"},{storeName:"message",description:"store message with key-val full data"},{storeName:"messageFile",description:"store file message list refs"},{storeName:"messageReaction",description:"store message reaction with key-val full data"},{storeName:"footprint",description:"store user visit data"},{storeName:"server",description:"store server data"},{storeName:"ui",description:"store UI state"}],_a=()=>{const e=`local_db_${localStorage.getItem(yn.kK)||""}_v_${yn.YM.split(".").join("_")}`;window.CACHE={},ma.forEach((t=>{let{storeName:r,description:n}=t;window.CACHE[r]=ea().createInstance({name:e,storeName:r,description:n})}))};var va=__webpack_require__(251);const ya=604800,ba=(0,In.LC)({reducerPath:"serverApi",baseQuery:Ln.Z,endpoints:e=>({getServer:e.query({query:()=>({url:"admin/system/organization"}),transformResponse:e=>(e.logo=`${yn.ZP}/resource/organization/logo?t=${(new Date).getTime()}`,e),async onQueryStarted(e,t){let{dispatch:r,queryFulfilled:n}=t;try{const{data:e}=await n;r(na(e))}catch{}}}),getMetrics:e.query({query:()=>({url:"/admin/system/metrics"})}),getFirebaseConfig:e.query({query:()=>({url:"admin/fcm/config"})}),sendTestEmail:e.mutation({query:e=>({url:"/admin/system/send_mail",method:"POST",body:e})}),updateFirebaseConfig:e.mutation({query:e=>({url:"admin/fcm/config",method:"POST",body:e})}),getAgoraConfig:e.query({query:()=>({url:"admin/agora/config"})}),updateAgoraConfig:e.mutation({query:e=>({url:"admin/agora/config",method:"POST",body:e})}),getSMTPConfig:e.query({query:()=>({url:"admin/smtp/config"})}),updateSMTPConfig:e.mutation({query:e=>({url:"admin/smtp/config",method:"POST",body:e})}),updateLogo:e.mutation({query:e=>({headers:{"content-type":"image/png"},url:"admin/system/organization/logo",method:"POST",body:e}),async onQueryStarted(e,t){let{dispatch:r,queryFulfilled:n}=t;try{await n,r(na({logo:`${yn.ZP}/resource/organization/logo?t=${(new Date).getTime()}`}))}catch{}}}),createInviteLink:e.query({query:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ya;return{headers:{"content-type":"text/plain",accept:"text/plain"},url:`/admin/user/create_invite_link?expired_in=${e}`,responseHandler:e=>e.text()}},transformResponse:e=>{const t=new URL(e);return`${location.origin}${t.pathname}${t.search}${t.hash}`},async onQueryStarted(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ya,{dispatch:t,queryFulfilled:r}=arguments.length>1?arguments[1]:void 0;try{const{data:n}=await r;t(oa({expire:e,link:n}))}catch{}}}),updateServer:e.mutation({query:e=>({url:"admin/system/organization",method:"POST",body:e}),async onQueryStarted(e,t){let{dispatch:r,queryFulfilled:n,getState:i}=t;const{name:a,description:o}=i().server;r(na(e));try{await n}catch{r(na({name:a,description:o}))}}})})}),{useSendTestEmailMutation:Fa,useUpdateFirebaseConfigMutation:wa,useGetFirebaseConfigQuery:ka,useGetSMTPConfigQuery:Ea,useUpdateSMTPConfigMutation:xa,useGetAgoraConfigQuery:Ca,useUpdateAgoraConfigMutation:Da,useGetServerQuery:Sa,useLazyGetMetricsQuery:Aa,useLazyGetServerQuery:Ta,useUpdateServerMutation:Oa,useUpdateLogoMutation:Pa,useLazyCreateInviteLinkQuery:Na}=ba;function Ma(e){let t,r,n,i=!1;return function(a){void 0===t?(t=a,r=0,n=-1):t=function(e,t){const r=new Uint8Array(e.length+t.length);return r.set(e),r.set(t,e.length),r}(t,a);const o=t.length;let s=0;for(;r<o;){i&&(10===t[r]&&(s=++r),i=!1);let a=-1;for(;r<o&&-1===a;++r)switch(t[r]){case 58:-1===n&&(n=r-s);break;case 13:i=!0;case 10:a=r}if(-1===a)break;e(t.subarray(s,a),n),s=r,n=-1}s===o?t=void 0:0!==s&&(t=t.subarray(s),r-=s)}}var Ra=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};const ja="text/event-stream",Ia="last-event-id";function Ba(e,t){var{signal:r,headers:n,onopen:i,onmessage:a,onclose:o,onerror:s,openWhenHidden:u,fetch:l}=t,c=Ra(t,["signal","headers","onopen","onmessage","onclose","onerror","openWhenHidden","fetch"]);return new Promise(((t,d)=>{const f=Object.assign({},n);let h;function p(){h.abort(),document.hidden||b()}f.accept||(f.accept=ja),u||document.addEventListener("visibilitychange",p);let g=1e3,m=0;function _(){document.removeEventListener("visibilitychange",p),window.clearTimeout(m),h.abort()}null===r||void 0===r||r.addEventListener("abort",(()=>{_(),t()}));const v=null!==l&&void 0!==l?l:window.fetch,y=null!==i&&void 0!==i?i:La;async function b(){var r;h=new AbortController;try{const r=await v(e,Object.assign(Object.assign({},c),{headers:f,signal:h.signal}));await y(r),await async function(e,t){const r=e.getReader();let n;for(;!(n=await r.read()).done;)t(n.value)}(r.body,Ma(function(e,t,r){let n={data:"",event:"",id:"",retry:void 0};const i=new TextDecoder;return function(a,o){if(0===a.length)null===r||void 0===r||r(n),n={data:"",event:"",id:"",retry:void 0};else if(o>0){const r=i.decode(a.subarray(0,o)),s=o+(32===a[o+1]?2:1),u=i.decode(a.subarray(s));switch(r){case"data":n.data=n.data?n.data+"\n"+u:u;break;case"event":n.event=u;break;case"id":e(n.id=u);break;case"retry":const r=parseInt(u,10);isNaN(r)||t(n.retry=r)}}}}((e=>{e?f[Ia]=e:delete f[Ia]}),(e=>{g=e}),a))),null===o||void 0===o||o(),_(),t()}catch(n){if(!h.signal.aborted)try{const e=null!==(r=null===s||void 0===s?void 0:s(n))&&void 0!==r?r:g;window.clearTimeout(m),m=window.setTimeout(b,e)}catch(i){_(),d(i)}}}b()}))}function La(e){const t=e.headers.get("content-type");if(!(null===t||void 0===t?void 0:t.startsWith(ja)))throw new Error(`Expected content-type to be text/event-stream, Actual: ${t}`)}var qa=__webpack_require__(7892),za=__webpack_require__.n(qa);const Ha=(e,t,r)=>{const{mid:n,from_uid:i,created_at:a,target:o,detail:{mid:s,content:u,content_type:l,type:c,properties:d,expires_in:f,detail:h}}=e,p={from_uid:i,created_at:a,content:u,content_type:l,properties:d,expires_in:f};switch(c){case"normal":case"reply":t(Fi(n))}const{ready:g,loginUid:m,readUsers:_={},readChannels:v={}}=r,y="undefined"!==typeof o.gid?"channel":"user",b="user"==y?ji.ZK:Ri.p_,F=i==m,w="user"==y?F?o.uid:i:o.gid,k=("user"==y?_[w]:v[w])||0,E=!!F||n<k;switch(c){case"normal":(0,mn.dC)((()=>{t((0,Wi.Hz)({mid:n,read:E,...p})),t(b({id:w,mid:n,local_id:d?d.local_id:null})),l==yn.bT.file&&t(ha(n))}));break;case"reply":(0,mn.dC)((()=>{t((0,Wi.Hz)({mid:n,reply_mid:s,read:E,...p})),t(b({id:w,mid:n,local_id:d?d.local_id:null}))}));break;case"reaction":{const e="user"==y?ji.Fs:Ri.nF,{type:r,action:n,content:a,content_type:o,properties:u}=h;switch(r){case"like":t(Hi({from_uid:i,mid:s,action:n}));break;case"delete":(0,mn.dC)((()=>{t(e({id:w,mid:s})),t((0,Wi.Gd)(s))})),o==yn.bT.file&&t(ca(s));break;case"edit":t((0,Wi.o6)({mid:s,content:a,content_type:o,properties:u,edited:!0}))}}}};var Ua=__webpack_require__(255);const Wa=async e=>{const t=window.CACHE[e];t&&await t.iterate(((e,r)=>{t.removeItem(r)}))};const Va=["__rtkq","channels","channelMessage","contacts","userMessage","reactionMessage","fileMessage","message","ui","footprint","server"],$a=(0,Bn.e)();$a.startListening({predicate:e=>{const{type:t=""}=e,[r]=t.split("/");return Va.includes(r)},effect:async(e,t)=>{const{type:r="",payload:n}=e,[i,a]=r.split("/");if(!window.CACHE&&"__rtkq"!==i)return;const o=t.getState()[i];switch(i){case"__rtkq":!async function(e){let{dispatch:t,operation:r}=e;switch(r){case"offline":t(ui(!1));break;case"online":t(ui(!0))}}({operation:a,payload:n,dispatch:t.dispatch});break;case"channels":await async function(e){let{operation:t,data:r,payload:n}=e;const i=window.CACHE.channels;if(t.startsWith("reset"))Wa("channels");else switch(t){case"fullfillChannels":{const e=n;await Promise.all(e.map((e=>{let{gid:t,...r}=e;return i.setItem(t+"",{gid:t,...r})})))}break;case"addChannel":{const{gid:e}=n;await i.setItem(e+"",n)}break;case"removeChannel":{const e=n;await i.removeItem(e+"")}break;case"updateChannel":{const{id:e}=n;await i.setItem(e+"",r.byId[e])}}}({operation:a,payload:n,data:o});break;case"contacts":await async function(e){let{operation:t,data:r,payload:n}=e;const i=window.CACHE.contacts;if(t.startsWith("reset"))Wa("contacts");else switch(t){case"fullfillContacts":{const e=n;await Promise.all(e.map((e=>{let{uid:t,...r}=e;return i.setItem(t+"",{uid:t,...r})})))}break;case"updateUsersByLogs":{const e=n;await Promise.all(e.map((async e=>{let{action:t,uid:n}=e;switch(t){case"update":case"create":await i.setItem(n+"",r.byId[n]);break;case"delete":await i.removeItem(n+"")}})))}break;case"addContact":{const{uid:e}=n;await i.setItem(e+"",n)}break;case"removeContact":{const e=n;await i.removeItem(e+"")}}}({operation:a,payload:n,data:o});break;case"channelMessage":await async function(e){let{operation:t,data:r={},payload:n}=e;const i=window.CACHE.messageChannel;if(t.startsWith("reset"))Wa("messageChannel");else switch(t){case"addChannelMsg":case"removeChannelMsg":{const{id:e}=n;await i.setItem(e+"",r[e])}break;case"removeChannelSession":{const e=Array.isArray(n)?n:[n];await Promise.all(e.map((async e=>{await i.removeItem(e+"")})))}}}({operation:a,payload:n,data:o});break;case"userMessage":await async function(e){let{operation:t,data:r={},payload:n}=e;const i=window.CACHE.messageDM;if(t.startsWith("reset"))Wa("messageDM");else switch(t){case"addUserMsg":case"removeUserMsg":{const{id:e}=n;await i.setItem(e+"",r.byId[e])}break;case"removeUserSession":{const e=Array.isArray(n)?n:[n];await Promise.all(e.map((async e=>{await i.removeItem(e+"")})))}}}({operation:a,payload:n,data:o});break;case"fileMessage":await async function(e){let{operation:t,data:r={}}=e;const n=window.CACHE.messageFile;if(t.startsWith("reset"))Wa("messageFile");else switch(t){case"addFileMessage":case"removeFileMessage":await n.setItem("list",r)}}({operation:a,data:o});break;case"message":await async function(e){let{operation:t,data:r={},payload:n}=e;const i=window.CACHE.message;if(t.startsWith("reset"))Wa("message");else switch(t){case"addMessage":case"updateMessage":{const{mid:e}=n;await i.setItem(e+"",r[e])}break;case"removeMessage":{const e=Array.isArray(n)?n:[n];await Promise.all(e.map((async e=>{await i.removeItem(e+"")})))}}}({operation:a,payload:n,data:o});break;case"reactionMessage":await async function(e){let{operation:t,data:r={},payload:n}=e;const i=window.CACHE.messageReaction;if(t.startsWith("reset"))Wa("messageReaction");else switch(t){case"toggleReactionMessage":{const{mid:e}=n;await i.setItem(e+"",r[e])}break;case"removeReactionMessage":{const e=Array.isArray(n)?n:[n];await Promise.all(e.map((async e=>{await i.removeItem(e+"")})))}}}({operation:a,payload:n,data:o});break;case"footprint":await async function(e){let{operation:t,data:r={},payload:n}=e;const i=window.CACHE.footprint;if(t.startsWith("reset"))Wa("footprint");else switch(t){case"updateUsersVersion":{const e=n;await i.setItem("usersVersion",e)}break;case"updateAfterMid":{const e=n;await i.setItem("afterMid",e)}break;case"updateReadChannels":await i.setItem("readChannels",r.readChannels);break;case"updateReadUsers":await i.setItem("readUsers",r.readUsers)}}({operation:a,payload:n,data:o});break;case"ui":await async function(e){let{operation:t,data:r={}}=e;const n=window.CACHE.ui;if(t.startsWith("reset"))Wa("ui");else switch(t){case"toggleMenuExpand":await n.setItem("menuExpand",r.menuExpand);break;case"updateInputMode":await n.setItem("inputMode",r.inputMode)}}({operation:a,payload:n,data:o});break;case"server":await async function(e){let{operation:t,payload:r}=e;const n=window.CACHE.server;if(t.startsWith("reset"))Wa("server");else switch(t){case"updateInviteLink":{const e=r;await n.setItem("inviteLink",e)}break;case"updateInfo":{const e=r;await Promise.all(Object.entries(e).map((e=>{let[t,r]=e;return n.setItem(t,r)})))}}}({operation:a,payload:n,data:o})}}});const Ga=$a;var Ka=__webpack_require__(3609);const Za=(0,In.LC)({reducerPath:"channelApi",baseQuery:Ln.Z,refetchOnFocus:!0,endpoints:e=>({getChannels:e.query({query:()=>({url:"group"})}),getChannel:e.query({query:e=>({url:`group/${e}`})}),createChannel:e.mutation({query:e=>({url:"group",method:"POST",body:e})}),updateChannel:e.mutation({query:e=>{let{id:t,...r}=e;return{url:`group/${t}`,method:"PUT",body:r}},async onQueryStarted(e,t){let{id:r,name:n,description:i}=e,{dispatch:a,queryFulfilled:o}=t;const s=a(Oi({id:r,name:n,description:i}));try{await o}catch{s.undo()}}}),removeChannel:e.query({query:e=>({url:`group/${e}`,method:"DELETE"}),async onQueryStarted(e,t){let{dispatch:r,getState:n,queryFulfilled:i}=t;const{ui:{channelSetting:a},channelMessage:o}=n();try{await i,r(Pi(e)),e==a&&r(fi());const t=o[e];t&&(r((0,Ri.YZ)(e)),r((0,Wi.Gd)(t)),r(Li(t)))}catch{}}}),sendChannelMsg:e.mutation({query:e=>{let{id:t,content:r,type:n="text",properties:i=""}=e;return{headers:{"content-type":yn.bT[n],"X-Properties":i?btoa(JSON.stringify(i)):""},url:`group/${t}/send`,method:"POST",body:r}},async onQueryStarted(e,t){await Ka.s.call(this,e,t,"channel")}}),addMembers:e.mutation({query:e=>{let{id:t,members:r}=e;return{url:`group/${t}/members/add`,method:"POST",body:r}}}),removeMembers:e.mutation({query:e=>{let{id:t,members:r}=e;return{url:`group/${t}/members/remove`,method:"POST",body:r}}})})}),{useGetChannelQuery:Ya,useUpdateChannelMutation:Xa,useLazyRemoveChannelQuery:Qa,useGetChannelsQuery:Ja,useCreateChannelMutation:eo,useSendChannelMsgMutation:to,useAddMembersMutation:ro,useRemoveMembersMutation:no}=Za,io=(0,In.LC)({reducerPath:"messageApi",baseQuery:Ln.Z,endpoints:e=>({editMessage:e.mutation({query:e=>{let{mid:t,content:r,type:n="text"}=e;return{headers:{"content-type":yn.bT[n]},url:`/message/${t}/edit`,method:"PUT",body:r}}}),reactMessage:e.mutation({query:e=>{let{mid:t,action:r}=e;return{url:`/message/${t}/like`,method:"PUT",body:{action:r}}}}),deleteMessage:e.query({query:e=>({url:`/message/${e}`,method:"DELETE"})}),prepareUploadFile:e.mutation({query:()=>({url:"/resource/file/prepare",method:"POST"})}),uploadFile:e.mutation({query:e=>({url:"/resource/file/upload",method:"POST",body:e}),transformResponse:e=>e||{}}),uploadImage:e.mutation({query:e=>({headers:{"content-type":yn.bT.image},url:"/resource/image",method:"POST",body:e}),transformResponse:e=>`${yn.ZP}/resource/image?id=${encodeURIComponent(e)}`}),replyMessage:e.mutation({query:e=>{let{reply_mid:t,content:r,type:n="text"}=e;return{headers:{"content-type":yn.bT[n]},url:`/message/${t}/reply`,method:"POST",body:r}},async onQueryStarted(e,t){await Ka.s.call(this,e,t,e.context)}}),readMessage:e.mutation({query:e=>({url:"/user/read-index",method:"POST",body:e}),async onQueryStarted(e,t){let{dispatch:r,queryFulfilled:n}=t;const{users:i=null,groups:a=null}=e;i&&r(Ei(i)),a&&r(ki(a));try{await n}catch{}}})})}),{usePrepareUploadFileMutation:ao,useUploadFileMutation:oo,useUploadImageMutation:so,useEditMessageMutation:uo,useReactMessageMutation:lo,useReplyMessageMutation:co,useLazyDeleteMessageQuery:fo,useReadMessageMutation:ho}=io,po=(0,Je.UY)({authData:qn.ZP,ui:hi,footprint:xi,server:sa,contacts:Mi.ZP,channels:Ni,reactionMessage:Ui,userMessage:ji.ZP,channelMessage:Ri.ZP,fileMessage:pa,message:Wi.ZP,[Hn.reducerPath]:Hn.reducer,[io.reducerPath]:io.reducer,[va.eJ.reducerPath]:va.eJ.reducer,[Za.reducerPath]:Za.reducer,[ba.reducerPath]:ba.reducer}),go=(0,Bn.xC)({reducer:po,middleware:e=>e().concat(Hn.middleware,va.eJ.middleware,Za.middleware,ba.middleware,io.middleware).prepend(Ga.middleware)});let mo=!1;(0,Ua.sj)(go.dispatch,((e,t)=>{let{onOnline:r,onOffline:n,onFocus:i,onFocusLost:a}=t;const o=()=>e(i()),s=()=>e(r()),u=()=>e(n()),l=()=>{"visible"===window.document.visibilityState?o():e(a())};mo||"undefined"!==typeof window&&window.addEventListener&&(window.addEventListener("visibilitychange",l,!1),window.addEventListener("focus",o,!1),window.addEventListener("online",s,!1),window.addEventListener("offline",u,!1),mo=!0);return()=>{window.removeEventListener("focus",o),window.removeEventListener("visibilitychange",l),window.removeEventListener("online",s),window.removeEventListener("offline",u),mo=!1}}));const _o=go;class vo extends Error{}class yo extends Error{}let bo=null;function Fo(){const[e,t]=(0,c.useState)(!1),{authData:{uid:r},channels:{byId:i},ui:{ready:a,online:o},footprint:{afterMid:s,usersVersion:u,readUsers:l,readChannels:d}}=(0,mn.v9)((e=>e)),[f]=Wn(),h=(0,mn.I0)();let p=!1,g=!1,m=new AbortController;const _=async()=>{if(p||g)return;const{authData:{token:e,expireTime:t=(new Date).getTime(),refreshToken:o}}=_o.getState();let c=e;if(za()().isAfter(new Date(t-2e4))){const{data:{token:t},isError:r}=await f({token:e,refreshToken:o});if(r)return;c=t}return g=!0,await Ba(`${yn.ZP}/user/events?${function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=new URLSearchParams;return Object.entries(e).forEach((e=>{let[r,n]=e;n&&t.append(r,n)})),t.toString()}({"api-key":c,users_version:u,after_mid:s})}`,{openWhenHidden:!0,signal:m.signal,async onopen(e){if(g=!1,!e.ok||e.headers.get("content-type")!==ja)throw e.status>=400&&e.status<500&&429!==e.status?new yo:new vo;p=!0},onmessage(e){if(g=!1,"FatalError"===e.event)throw new yo(e.data);const t=JSON.parse(e.data),{type:o}=t;switch(o){case"heartbeat":default:break;case"ready":h(si());break;case"users_snapshot":{const{version:e}=t;h(wi(e))}break;case"users_log":{const{logs:e}=t;h((0,Mi.ii)(e))}break;case"user_settings":case"user_settings_changed":{const{read_index_users:e=[],read_index_groups:r=[]}=t;h(ki(r)),h(Ei(e))}break;case"users_state":case"users_state_changed":{let{type:e,...r}=t;const n="users_state_changed"==e?[r]:r.users;h((0,Mi._D)(n))}break;case"kick":switch(t.reason){case"login_from_other_device":h((0,qn.sQ)()),(0,n.ZP)("kicked from the other device");break;case"delete_user":h((0,qn.sQ)()),(0,n.ZP)("sorry, your account has been deleted")}break;case"related_groups":h(Ai(t.groups));break;case"joined_group":h(Ti(t.group));break;case"user_joined_group":h(Oi({id:t.gid,members:[...i[t.gid].members,...t.uid].filter(((e,t,r)=>r.indexOf(e)===t))}));break;case"user_leaved_group":{const{gid:e,uid:r}=t,n=i[e].members.filter((e=>-1==r.findIndex((t=>e==t))));h(Oi({id:t.gid,members:[...n]}))}break;case"kick_from_group":h(Pi(t.gid));break;case"chat":Ha(t,h,{ready:a,loginUid:r,readUsers:l,readChannels:d})}},onclose(){throw g=!1,new vo},onerror(e){throw g=!1,e instanceof yo||(v(),bo&&clearTimeout(bo),bo=setTimeout((()=>{p=!1,_()}),2e3)),e}}),g=!1,m},v=()=>{m&&m.abort&&m.abort()};return(0,c.useEffect)((()=>(e&&(o?_():v()),()=>{v()})),[o,e]),{setStreamingReady:e=>{t(e)},startStreaming:_,stopStreaming:v}}var wo=__webpack_require__(5114),ko=__webpack_require__(1487);const Eo=fe.ZP.div`
  width: 100%;
  height: 100%;
  display: flex;
  > .left {
    padding: 32px 16px;
    min-width: 212px;
    background-color: #f5f6f7;
    > .title {
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #1c1c1e;
      margin-bottom: 32px;
      padding-left: 24px;
      background: url(${ko});
      background-size: 16px;
      background-repeat: no-repeat;
      background-position: left;
    }
    > .items {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-bottom: 36px;
      &:before {
        padding-left: 12px;
        content: attr(data-title);
        font-weight: bold;
        font-size: 12px;
        line-height: 18px;
        color: #6b7280;
        margin-bottom: 2px;
      }
      .item {
        cursor: pointer;
        padding: 4px 12px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #44494f;
        border-radius: 4px;
        &:hover,
        &.curr {
          background: #e7e5e4;
        }
      }
      &.danger .item {
        color: #ef4444;
        &:hover {
          background: none;
        }
      }
    }
  }
  > .right {
    background-color: #fff;
    width: 100%;
    max-height: 100%;
    /* max-height: -webkit-fill-available; */
    overflow: auto;
    padding: 32px;
    > .title {
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
      color: #374151;
      margin-bottom: 32px;
    }
  }
`;function xo(e){let{closeModal:t,title:r="Settings",navs:n=[],dangers:i=[],nav:a,updateNav:o,children:s}=e;const u=e=>{o(e)};return(0,ve.jsx)(wo.Z,{children:(0,ve.jsxs)(Eo,{children:[(0,ve.jsxs)("div",{className:"left",children:[(0,ve.jsx)("h2",{onClick:t,className:"title",children:r}),n.map((e=>{let{title:t,items:r}=e;return(0,ve.jsx)("ul",{"data-title":t,className:"items",children:r.map((e=>{let{name:t,title:r}=e;return(0,ve.jsx)("li",{onClick:u.bind(null,t),className:"item "+(t==(null===a||void 0===a?void 0:a.name)?"curr":""),children:r},t)}))},t)})),i.length?(0,ve.jsx)("ul",{className:"items danger",children:i.map((e=>{const{title:t,handler:r}=e;return(0,ve.jsx)("li",{onClick:r,className:"item",children:t},t)}))}):null]}),(0,ve.jsxs)("div",{className:"right",children:[a&&(0,ve.jsx)("h4",{className:"title",children:a.title}),s]})]})})}var Co=__webpack_require__(5786),Do=__webpack_require__(6247);const So=fe.ZP.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #6b7280;
`,Ao=fe.ZP.textarea`
  font-family: inherit;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
  border-radius: 4px;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  padding: 8px;
  color: #333;
  resize: unset;
  &:disabled {
    color: #78787c;
    background-color: #f9fafb;
  }
  &::placeholder {
    color: #78787c;
  }
`,To=fe.ZP.div`
  width: 100%;
  position: absolute;
  bottom: 64px;
  left: 0;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;
  background: #fff;
  /* gap: 20px; */
  border: 1px solid #e5e7eb;
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: 25px;
  .txt {
    padding: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
  .btns {
    display: flex;
    align-items: center;
    gap: 14px;
    .btn {
      color: #fff;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      padding: 8px 14px;
      background: #1fe1f9;
      border: 1px solid #1fe1f9;
      box-sizing: border-box;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 25px;
      &.reset {
        background: none;
        color: #667085;
        border: none;
        box-shadow: none;
      }
    }
  }
`;function Oo(e){let{saveHandler:t,resetHandler:r}=e;return(0,ve.jsxs)(To,{className:"animate__animated animate__flipInX animate__faster",children:[(0,ve.jsx)("span",{className:"txt",children:"You have unsaved changes!"}),(0,ve.jsxs)("div",{className:"btns",children:[(0,ve.jsx)("button",{className:"btn reset",onClick:r,children:"Reset"}),(0,ve.jsx)("button",{className:"btn",onClick:t,children:"Save Changes"})]})]})}const Po=fe.ZP.div`
  position: relative;
  width: 512px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  .logo {
    display: flex;
    gap: 16px;
    .preview {
      width: 96px;
      height: 96px;
    }
    .upload {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      .tip {
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #374151;
      }
      .btn {
        padding: 8px 14px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #1fe1f9;
        background: #ecfeff;
        border: 1px solid #ecfeff;
        box-sizing: border-box;
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
      }
    }
  }
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    .input {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }
  }
`;function No(){const e=(0,mn.v9)((e=>e.contacts.byId[e.authData.uid])),[t,r]=(0,c.useState)(!1),[i,a]=(0,c.useState)(null),{data:o,refetch:s}=Sa(),[u,{isSuccess:l}]=Oa(),[d,{isSuccess:f}]=Pa(),h=e=>{const t=e.target.value,{type:r}=e.target.dataset;a((e=>({...e,[r]:t})))};if((0,c.useEffect)((()=>{f&&(n.ZP.success("update logo successfully"),s())}),[f]),(0,c.useEffect)((()=>{o&&a(o)}),[o]),(0,c.useEffect)((()=>{if(o&&i){const{name:e,description:t}=i,{name:n,description:a}=o;r(n!==e||a!==t)}}),[o,i]),(0,c.useEffect)((()=>{l&&(n.ZP.success("Server updated!"),s())}),[l]),!i)return null;const{name:p,description:g,logo:m}=i,_=null===e||void 0===e?void 0:e.is_admin;return(0,ve.jsxs)(Po,{children:[(0,ve.jsxs)("div",{className:"logo",children:[(0,ve.jsx)("div",{className:"preview",children:(0,ve.jsx)(Do.Z,{disabled:!_,url:f?`${m}?t=${(new Date).getTime()}`:m,name:p,uploadImage:d})}),_&&(0,ve.jsxs)("div",{className:"upload",children:[(0,ve.jsx)("div",{className:"tip",children:"Minimum size is 128x128, We recommend at least 512x512 for the server. Max size limited to 5M."}),(0,ve.jsx)("button",{className:"btn",children:"Upload Image"})]})]}),(0,ve.jsxs)("div",{className:"inputs",children:[(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"name",children:"Server Name"}),(0,ve.jsx)(Jn.Z,{disabled:!_,"data-type":"name",onChange:h,value:p,name:"name",id:"name",placeholder:"Server Name"})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"desc",children:"Server Description"}),(0,ve.jsx)(Ao,{disabled:!_,"data-type":"description",onChange:h,value:null!==g&&void 0!==g?g:"",rows:4,name:"name",id:"name",placeholder:"Tell the world a bit about this server"})]})]}),t&&(0,ve.jsx)(Oo,{saveHandler:()=>{const{name:e,description:t}=i;u({name:e,description:t})},resetHandler:()=>{a(o)}})]})}const Mo=fe.ZP.div`
  position: relative;
  width: 512px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    .input {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      &.row {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
  .tip {
    display: flex;
    gap: 8px;
    align-items: center;
    .link {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #06b6d4;
    }
  }
`,Ro=fe.ZP.div`
  cursor: pointer;
  position: relative;
  width: 44px;
  height: 24px;
  background-color: #1fe1f9;
  border-radius: 12px;
  transition: all 0.2s ease-in;
  &:after {
    border-radius: 50%;
    background-color: #fff;
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 2px;
    right: 2px;
    transition: all 0.4s ease;
  }
  &[data-checked="false"] {
    background-color: #f2f4f7;
    &:after {
      transform: translateX(-100%);
    }
  }
  &[data-disabled="true"] {
    pointer-events: none;
  }
`;var jo=__webpack_require__(4170);function Io(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"smtp";const[t,r]=(0,c.useState)(!1),[i,a]=(0,c.useState)({}),{data:o,refetch:s}=Ea(),[u,{isSuccess:l}]=xa(),{data:d,refetch:f}=Ca(),[h,{isSuccess:p}]=Da(),{data:g,refetch:m}=ka(),[_,{isSuccess:v}]=wa(),y={smtp:o,agora:d,firebase:g},b={smtp:u,agora:h,firebase:_},F={smtp:s,agora:f,firebase:m},w={smtp:l,agora:p,firebase:v},k=y[e],E=b[e],x=F[e],C=w[e],D=()=>{a(null!==k&&void 0!==k?k:{})},S=()=>{a((e=>({...e,enabled:!e.enabled})))};return(0,c.useEffect)((()=>{C&&(n.ZP.success("Configuration Updated!"),x())}),[C]),(0,c.useEffect)((()=>{a(null!==k&&void 0!==k?k:{})}),[k]),(0,c.useEffect)((()=>{(0,jo.Z1)(k,i)?r(!1):r(!0)}),[k,i]),{reset:D,changed:t,updateConfig:E,values:i,setValues:a,toggleEnable:S}}function Bo(){const{values:e,toggleEnable:t,updateConfig:r,setValues:n,reset:i,changed:a}=Io("firebase"),o=e=>{const t=e.target.value,{type:r}=e.target.dataset;n((e=>({...e,[r]:t})))},{token_url:s,project_id:u,private_key:l,client_email:c,enabled:d=!1}=null!==e&&void 0!==e?e:{};return(0,ve.jsxs)(Mo,{children:[(0,ve.jsxs)("div",{className:"inputs",children:[(0,ve.jsxs)("div",{className:"input row",children:[(0,ve.jsx)(So,{children:"Enable"}),(0,ve.jsx)(Ro,{onClick:t,"data-checked":d})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"name",children:"Token Url"}),(0,ve.jsx)(Jn.Z,{disabled:!d,"data-type":"token_url",onChange:o,value:s||"https://oauth2.googleapis.com/token",name:"token_url",placeholder:"Token URL"})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"desc",children:"Project ID"}),(0,ve.jsx)(Jn.Z,{disabled:!d,type:"number","data-type":"project_id",onChange:o,value:u,name:"project_id",placeholder:"Project ID"})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"desc",children:"Private Key"}),(0,ve.jsx)(Ao,{rows:10,disabled:!d,"data-type":"private_key",onChange:o,value:l,name:"private_key",placeholder:"Private key"})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"desc",children:"Client Email"}),(0,ve.jsx)(Jn.Z,{disabled:!d,"data-type":"client_email",onChange:o,value:c,name:"client_email",placeholder:"Client Email address"})]})]}),a&&(0,ve.jsx)(Oo,{saveHandler:()=>{r(e)},resetHandler:i})]})}var Lo=__webpack_require__(4821);const qo=fe.ZP.div`
  display: flex;
  gap: 16px;
  white-space: nowrap;
  margin-top: 24px;
`;function zo(){const[e,t]=(0,c.useState)(""),[r,{isSuccess:i,isError:a}]=Fa(),{reset:o,updateConfig:s,values:u,setValues:l,changed:d,toggleEnable:f}=Io("smtp"),h=e=>{const t=e.target.value,{type:r}=e.target.dataset;l((e=>({...e,[r]:t})))};(0,c.useEffect)((()=>{i&&n.ZP.success("Send Test Email Successfully"),a&&n.ZP.error("Send Test Email Fail")}),[i,a]);const{host:p,port:g,from:m,username:_,password:v,enabled:y=!1}=null!==u&&void 0!==u?u:{};return(0,ve.jsxs)(Mo,{children:[(0,ve.jsxs)("div",{className:"inputs",children:[(0,ve.jsxs)("div",{className:"input row",children:[(0,ve.jsx)(So,{children:"Enable"}),(0,ve.jsx)(Ro,{onClick:f,"data-checked":y})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"name",children:"Host"}),(0,ve.jsx)(Jn.Z,{disabled:!y,"data-type":"host",onChange:h,value:p,name:"host",placeholder:"SMTP Host"})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"desc",children:"Port"}),(0,ve.jsx)(Jn.Z,{disabled:!y,type:"number","data-type":"port",onChange:h,value:g,name:"port",placeholder:"SMTP Port"})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"desc",children:"From"}),(0,ve.jsx)(Jn.Z,{disabled:!y,"data-type":"from",onChange:h,value:m,name:"from",placeholder:"SMTP From"})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"desc",children:"Username"}),(0,ve.jsx)(Jn.Z,{disabled:!y,"data-type":"username",onChange:h,value:_,name:"username",placeholder:"SMTP Username"})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"desc",children:"Password"}),(0,ve.jsx)(Jn.Z,{type:"password",disabled:!y,"data-type":"password",onChange:h,value:v,name:"password",placeholder:"SMTP Password"})]})]}),(0,ve.jsxs)("div",{className:"tip",children:[(0,ve.jsx)("img",{src:Lo,alt:"question icon"}),(0,ve.jsx)("a",{href:"https://rustchat.com/doc/smtp-setting",target:"_blank",className:"link",rel:"noreferrer",children:"How to set up SMTP?"})]}),(0,ve.jsxs)(qo,{children:[(0,ve.jsx)(Jn.Z,{type:"email",disabled:!y,onChange:e=>{const r=e.target.value;t(r)},value:e,name:"email",placeholder:"test@email.com"}),(0,ve.jsx)(bn.Z,{disabled:!y||!e,onClick:()=>{r({to:e,subject:"test title",content:"test content"})},children:"Send Test Email"})]}),d&&(0,ve.jsx)(Oo,{saveHandler:()=>{var e;s({...u,port:Number(null!==(e=u.port)&&void 0!==e?e:0)})},resetHandler:o})]})}const Ho=()=>navigator.userAgent.indexOf("Safari")>-1&&navigator.userAgent.indexOf("Chrome")<=-1;function Uo(){const[e,t]=(0,c.useState)(Notification.permission),[r,n]=(0,c.useState)(!0);(0,c.useEffect)((()=>{const e=()=>{n("visible"===document.visibilityState)},r=e=>{t(e)};return document.addEventListener("visibilitychange",e),Ho||navigator.permissions.query({name:"notifications"}).then((function(e){e.onchange=r.bind(null,e.state)})),()=>{document.removeEventListener("visibilitychange",e)}}),[]);return{status:e,enableNotification:()=>{"granted"!==e&&Notification.requestPermission().then((e=>{t(e)}))},showNotification:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("granted"!==e||r)return;const{title:n="New Message",body:i="You have one new message",icon:a="https://static.nicegoodthings.com/project/ext/webrowse.logo.png"}=t;new Notification(n,{body:i,icon:a})}}}const Wo=fe.ZP.div`
  display: flex;
  flex-direction: column;
`;function Vo(){const{status:e,enableNotification:t}=Uo();return(0,ve.jsxs)(Wo,{children:[(0,ve.jsx)(So,{children:"Notification Setting:"}),(0,ve.jsx)(Ro,{"data-checked":"granted"==e,onClick:()=>{"granted"!==e&&t()}})]})}function $o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Go(e){return e instanceof $o(e).Element||e instanceof Element}function Ko(e){return e instanceof $o(e).HTMLElement||e instanceof HTMLElement}function Zo(e){return"undefined"!==typeof ShadowRoot&&(e instanceof $o(e).ShadowRoot||e instanceof ShadowRoot)}var Yo=Math.max,Xo=Math.min,Qo=Math.round;function Jo(e,t){void 0===t&&(t=!1);var r=e.getBoundingClientRect(),n=1,i=1;if(Ko(e)&&t){var a=e.offsetHeight,o=e.offsetWidth;o>0&&(n=Qo(r.width)/o||1),a>0&&(i=Qo(r.height)/a||1)}return{width:r.width/n,height:r.height/i,top:r.top/i,right:r.right/n,bottom:r.bottom/i,left:r.left/n,x:r.left/n,y:r.top/i}}function es(e){var t=$o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ts(e){return e?(e.nodeName||"").toLowerCase():null}function rs(e){return((Go(e)?e.ownerDocument:e.document)||window.document).documentElement}function ns(e){return Jo(rs(e)).left+es(e).scrollLeft}function is(e){return $o(e).getComputedStyle(e)}function as(e){var t=is(e),r=t.overflow,n=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+n)}function ss(e,t,r){void 0===r&&(r=!1);var n=Ko(t),i=Ko(t)&&function(e){var t=e.getBoundingClientRect(),r=Qo(t.width)/e.offsetWidth||1,n=Qo(t.height)/e.offsetHeight||1;return 1!==r||1!==n}(t),a=rs(t),o=Jo(e,i),s={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(n||!n&&!r)&&(("body"!==ts(t)||as(a))&&(s=function(e){return e!==$o(e)&&Ko(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:es(e);var t}(t)),Ko(t)?((u=Jo(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):a&&(u.x=ns(a))),{x:o.left+s.scrollLeft-u.x,y:o.top+s.scrollTop-u.y,width:o.width,height:o.height}}function us(e){var t=Jo(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function ls(e){return"html"===ts(e)?e:e.assignedSlot||e.parentNode||(Zo(e)?e.host:null)||rs(e)}function cs(e){return["html","body","#document"].indexOf(ts(e))>=0?e.ownerDocument.body:Ko(e)&&as(e)?e:cs(ls(e))}function ds(e,t){var r;void 0===t&&(t=[]);var n=cs(e),i=n===(null==(r=e.ownerDocument)?void 0:r.body),a=$o(n),o=i?[a].concat(a.visualViewport||[],as(n)?n:[]):n,s=t.concat(o);return i?s:s.concat(ds(ls(o)))}function fs(e){return["table","td","th"].indexOf(ts(e))>=0}function hs(e){return Ko(e)&&"fixed"!==is(e).position?e.offsetParent:null}function ps(e){for(var t=$o(e),r=hs(e);r&&fs(r)&&"static"===is(r).position;)r=hs(r);return r&&("html"===ts(r)||"body"===ts(r)&&"static"===is(r).position)?t:r||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&Ko(e)&&"fixed"===is(e).position)return null;var r=ls(e);for(Zo(r)&&(r=r.host);Ko(r)&&["html","body"].indexOf(ts(r))<0;){var n=is(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}var gs="top",ms="bottom",_s="right",vs="left",ys="auto",bs=[gs,ms,_s,vs],Fs="start",ws="end",ks="viewport",Es="popper",xs=bs.reduce((function(e,t){return e.concat([t+"-"+Fs,t+"-"+ws])}),[]),Cs=[].concat(bs,[ys]).reduce((function(e,t){return e.concat([t,t+"-"+Fs,t+"-"+ws])}),[]),Ds=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Ss(e){var t=new Map,r=new Set,n=[];function i(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&i(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||i(e)})),n}function As(e){var t;return function(){return t||(t=new Promise((function(r){Promise.resolve().then((function(){t=void 0,r(e())}))}))),t}}var Ts={placement:"bottom",modifiers:[],strategy:"absolute"};function Os(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Ps(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,i=t.defaultOptions,a=void 0===i?Ts:i;return function(e,t,r){void 0===r&&(r=a);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ts,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],s=!1,u={state:i,setOptions:function(r){var s="function"===typeof r?r(i.options):r;l(),i.options=Object.assign({},a,i.options,s),i.scrollParents={reference:Go(e)?ds(e):e.contextElement?ds(e.contextElement):[],popper:ds(t)};var c=function(e){var t=Ss(e);return Ds.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}(function(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,i.options.modifiers)));return i.orderedModifiers=c.filter((function(e){return e.enabled})),i.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,a=e.effect;if("function"===typeof a){var s=a({state:i,name:t,instance:u,options:n}),l=function(){};o.push(s||l)}})),u.update()},forceUpdate:function(){if(!s){var e=i.elements,t=e.reference,r=e.popper;if(Os(t,r)){i.rects={reference:ss(t,ps(r),"fixed"===i.options.strategy),popper:us(r)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<i.orderedModifiers.length;n++)if(!0!==i.reset){var a=i.orderedModifiers[n],o=a.fn,l=a.options,c=void 0===l?{}:l,d=a.name;"function"===typeof o&&(i=o({state:i,options:c,name:d,instance:u})||i)}else i.reset=!1,n=-1}}},update:As((function(){return new Promise((function(e){u.forceUpdate(),e(i)}))})),destroy:function(){l(),s=!0}};if(!Os(e,t))return u;function l(){o.forEach((function(e){return e()})),o=[]}return u.setOptions(r).then((function(e){!s&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}var Ns={passive:!0};const Ms={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,i=n.scroll,a=void 0===i||i,o=n.resize,s=void 0===o||o,u=$o(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach((function(e){e.addEventListener("scroll",r.update,Ns)})),s&&u.addEventListener("resize",r.update,Ns),function(){a&&l.forEach((function(e){e.removeEventListener("scroll",r.update,Ns)})),s&&u.removeEventListener("resize",r.update,Ns)}},data:{}};function Rs(e){return e.split("-")[0]}function js(e){return e.split("-")[1]}function Is(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Bs(e){var t,r=e.reference,n=e.element,i=e.placement,a=i?Rs(i):null,o=i?js(i):null,s=r.x+r.width/2-n.width/2,u=r.y+r.height/2-n.height/2;switch(a){case gs:t={x:s,y:r.y-n.height};break;case ms:t={x:s,y:r.y+r.height};break;case _s:t={x:r.x+r.width,y:u};break;case vs:t={x:r.x-n.width,y:u};break;default:t={x:r.x,y:r.y}}var l=a?Is(a):null;if(null!=l){var c="y"===l?"height":"width";switch(o){case Fs:t[l]=t[l]-(r[c]/2-n[c]/2);break;case ws:t[l]=t[l]+(r[c]/2-n[c]/2)}}return t}const Ls={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=Bs({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var qs={top:"auto",right:"auto",bottom:"auto",left:"auto"};function zs(e){var t,r=e.popper,n=e.popperRect,i=e.placement,a=e.variation,o=e.offsets,s=e.position,u=e.gpuAcceleration,l=e.adaptive,c=e.roundOffsets,d=e.isFixed,f=o.x,h=void 0===f?0:f,p=o.y,g=void 0===p?0:p,m="function"===typeof c?c({x:h,y:g}):{x:h,y:g};h=m.x,g=m.y;var _=o.hasOwnProperty("x"),v=o.hasOwnProperty("y"),y=vs,b=gs,F=window;if(l){var w=ps(r),k="clientHeight",E="clientWidth";if(w===$o(r)&&"static"!==is(w=rs(r)).position&&"absolute"===s&&(k="scrollHeight",E="scrollWidth"),w=w,i===gs||(i===vs||i===_s)&&a===ws)b=ms,g-=(d&&w===F&&F.visualViewport?F.visualViewport.height:w[k])-n.height,g*=u?1:-1;if(i===vs||(i===gs||i===ms)&&a===ws)y=_s,h-=(d&&w===F&&F.visualViewport?F.visualViewport.width:w[E])-n.width,h*=u?1:-1}var x,C=Object.assign({position:s},l&&qs),D=!0===c?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:Qo(t*n)/n||0,y:Qo(r*n)/n||0}}({x:h,y:g}):{x:h,y:g};return h=D.x,g=D.y,u?Object.assign({},C,((x={})[b]=v?"0":"",x[y]=_?"0":"",x.transform=(F.devicePixelRatio||1)<=1?"translate("+h+"px, "+g+"px)":"translate3d("+h+"px, "+g+"px, 0)",x)):Object.assign({},C,((t={})[b]=v?g+"px":"",t[y]=_?h+"px":"",t.transform="",t))}const Hs={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,i=void 0===n||n,a=r.adaptive,o=void 0===a||a,s=r.roundOffsets,u=void 0===s||s,l={placement:Rs(t.placement),variation:js(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,zs(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:u})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,zs(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};const Us={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},i=t.elements[e];Ko(i)&&ts(i)&&(Object.assign(i.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});Ko(n)&&ts(n)&&(Object.assign(n.style,a),Object.keys(i).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]};const Ws={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,i=r.offset,a=void 0===i?[0,0]:i,o=Cs.reduce((function(e,r){return e[r]=function(e,t,r){var n=Rs(e),i=[vs,gs].indexOf(n)>=0?-1:1,a="function"===typeof r?r(Object.assign({},t,{placement:e})):r,o=a[0],s=a[1];return o=o||0,s=(s||0)*i,[vs,_s].indexOf(n)>=0?{x:s,y:o}:{x:o,y:s}}(r,t.rects,a),e}),{}),s=o[t.placement],u=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=o}};var Vs={left:"right",right:"left",bottom:"top",top:"bottom"};function $s(e){return e.replace(/left|right|bottom|top/g,(function(e){return Vs[e]}))}var Gs={start:"end",end:"start"};function Ks(e){return e.replace(/start|end/g,(function(e){return Gs[e]}))}function Zs(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Zo(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Ys(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Xs(e,t){return t===ks?Ys(function(e){var t=$o(e),r=rs(e),n=t.visualViewport,i=r.clientWidth,a=r.clientHeight,o=0,s=0;return n&&(i=n.width,a=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=n.offsetLeft,s=n.offsetTop)),{width:i,height:a,x:o+ns(e),y:s}}(e)):Go(t)?function(e){var t=Jo(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):Ys(function(e){var t,r=rs(e),n=es(e),i=null==(t=e.ownerDocument)?void 0:t.body,a=Yo(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=Yo(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),s=-n.scrollLeft+ns(e),u=-n.scrollTop;return"rtl"===is(i||r).direction&&(s+=Yo(r.clientWidth,i?i.clientWidth:0)-a),{width:a,height:o,x:s,y:u}}(rs(e)))}function Qs(e,t,r){var n="clippingParents"===t?function(e){var t=ds(ls(e)),r=["absolute","fixed"].indexOf(is(e).position)>=0&&Ko(e)?ps(e):e;return Go(r)?t.filter((function(e){return Go(e)&&Zs(e,r)&&"body"!==ts(e)})):[]}(e):[].concat(t),i=[].concat(n,[r]),a=i[0],o=i.reduce((function(t,r){var n=Xs(e,r);return t.top=Yo(n.top,t.top),t.right=Xo(n.right,t.right),t.bottom=Xo(n.bottom,t.bottom),t.left=Yo(n.left,t.left),t}),Xs(e,a));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Js(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function eu(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}function tu(e,t){void 0===t&&(t={});var r=t,n=r.placement,i=void 0===n?e.placement:n,a=r.boundary,o=void 0===a?"clippingParents":a,s=r.rootBoundary,u=void 0===s?ks:s,l=r.elementContext,c=void 0===l?Es:l,d=r.altBoundary,f=void 0!==d&&d,h=r.padding,p=void 0===h?0:h,g=Js("number"!==typeof p?p:eu(p,bs)),m=c===Es?"reference":Es,_=e.rects.popper,v=e.elements[f?m:c],y=Qs(Go(v)?v:v.contextElement||rs(e.elements.popper),o,u),b=Jo(e.elements.reference),F=Bs({reference:b,element:_,strategy:"absolute",placement:i}),w=Ys(Object.assign({},_,F)),k=c===Es?w:b,E={top:y.top-k.top+g.top,bottom:k.bottom-y.bottom+g.bottom,left:y.left-k.left+g.left,right:k.right-y.right+g.right},x=e.modifiersData.offset;if(c===Es&&x){var C=x[i];Object.keys(E).forEach((function(e){var t=[_s,ms].indexOf(e)>=0?1:-1,r=[gs,ms].indexOf(e)>=0?"y":"x";E[e]+=C[r]*t}))}return E}const ru={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var i=r.mainAxis,a=void 0===i||i,o=r.altAxis,s=void 0===o||o,u=r.fallbackPlacements,l=r.padding,c=r.boundary,d=r.rootBoundary,f=r.altBoundary,h=r.flipVariations,p=void 0===h||h,g=r.allowedAutoPlacements,m=t.options.placement,_=Rs(m),v=u||(_===m||!p?[$s(m)]:function(e){if(Rs(e)===ys)return[];var t=$s(e);return[Ks(e),t,Ks(t)]}(m)),y=[m].concat(v).reduce((function(e,r){return e.concat(Rs(r)===ys?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,i=r.boundary,a=r.rootBoundary,o=r.padding,s=r.flipVariations,u=r.allowedAutoPlacements,l=void 0===u?Cs:u,c=js(n),d=c?s?xs:xs.filter((function(e){return js(e)===c})):bs,f=d.filter((function(e){return l.indexOf(e)>=0}));0===f.length&&(f=d);var h=f.reduce((function(t,r){return t[r]=tu(e,{placement:r,boundary:i,rootBoundary:a,padding:o})[Rs(r)],t}),{});return Object.keys(h).sort((function(e,t){return h[e]-h[t]}))}(t,{placement:r,boundary:c,rootBoundary:d,padding:l,flipVariations:p,allowedAutoPlacements:g}):r)}),[]),b=t.rects.reference,F=t.rects.popper,w=new Map,k=!0,E=y[0],x=0;x<y.length;x++){var C=y[x],D=Rs(C),S=js(C)===Fs,A=[gs,ms].indexOf(D)>=0,T=A?"width":"height",O=tu(t,{placement:C,boundary:c,rootBoundary:d,altBoundary:f,padding:l}),P=A?S?_s:vs:S?ms:gs;b[T]>F[T]&&(P=$s(P));var N=$s(P),M=[];if(a&&M.push(O[D]<=0),s&&M.push(O[P]<=0,O[N]<=0),M.every((function(e){return e}))){E=C,k=!1;break}w.set(C,M)}if(k)for(var R=function(e){var t=y.find((function(t){var r=w.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},j=p?3:1;j>0;j--){if("break"===R(j))break}t.placement!==E&&(t.modifiersData[n]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function nu(e,t,r){return Yo(e,Xo(t,r))}const iu={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,i=r.mainAxis,a=void 0===i||i,o=r.altAxis,s=void 0!==o&&o,u=r.boundary,l=r.rootBoundary,c=r.altBoundary,d=r.padding,f=r.tether,h=void 0===f||f,p=r.tetherOffset,g=void 0===p?0:p,m=tu(t,{boundary:u,rootBoundary:l,padding:d,altBoundary:c}),_=Rs(t.placement),v=js(t.placement),y=!v,b=Is(_),F="x"===b?"y":"x",w=t.modifiersData.popperOffsets,k=t.rects.reference,E=t.rects.popper,x="function"===typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,C="number"===typeof x?{mainAxis:x,altAxis:x}:Object.assign({mainAxis:0,altAxis:0},x),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(w){if(a){var A,T="y"===b?gs:vs,O="y"===b?ms:_s,P="y"===b?"height":"width",N=w[b],M=N+m[T],R=N-m[O],j=h?-E[P]/2:0,I=v===Fs?k[P]:E[P],B=v===Fs?-E[P]:-k[P],L=t.elements.arrow,q=h&&L?us(L):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},H=z[T],U=z[O],W=nu(0,k[P],q[P]),V=y?k[P]/2-j-W-H-C.mainAxis:I-W-H-C.mainAxis,$=y?-k[P]/2+j+W+U+C.mainAxis:B+W+U+C.mainAxis,G=t.elements.arrow&&ps(t.elements.arrow),K=G?"y"===b?G.clientTop||0:G.clientLeft||0:0,Z=null!=(A=null==D?void 0:D[b])?A:0,Y=N+$-Z,X=nu(h?Xo(M,N+V-Z-K):M,N,h?Yo(R,Y):R);w[b]=X,S[b]=X-N}if(s){var Q,J="x"===b?gs:vs,ee="x"===b?ms:_s,te=w[F],re="y"===F?"height":"width",ne=te+m[J],ie=te-m[ee],ae=-1!==[gs,vs].indexOf(_),oe=null!=(Q=null==D?void 0:D[F])?Q:0,se=ae?ne:te-k[re]-E[re]-oe+C.altAxis,ue=ae?te+k[re]+E[re]-oe-C.altAxis:ie,le=h&&ae?function(e,t,r){var n=nu(e,t,r);return n>r?r:n}(se,te,ue):nu(h?se:ne,te,h?ue:ie);w[F]=le,S[F]=le-te}t.modifiersData[n]=S}},requiresIfExists:["offset"]};const au={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,i=e.options,a=r.elements.arrow,o=r.modifiersData.popperOffsets,s=Rs(r.placement),u=Is(s),l=[vs,_s].indexOf(s)>=0?"height":"width";if(a&&o){var c=function(e,t){return Js("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:eu(e,bs))}(i.padding,r),d=us(a),f="y"===u?gs:vs,h="y"===u?ms:_s,p=r.rects.reference[l]+r.rects.reference[u]-o[u]-r.rects.popper[l],g=o[u]-r.rects.reference[u],m=ps(a),_=m?"y"===u?m.clientHeight||0:m.clientWidth||0:0,v=p/2-g/2,y=c[f],b=_-d[l]-c[h],F=_/2-d[l]/2+v,w=nu(y,F,b),k=u;r.modifiersData[n]=((t={})[k]=w,t.centerOffset=w-F,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!==typeof n||(n=t.elements.popper.querySelector(n)))&&Zs(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ou(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function su(e){return[gs,_s,ms,vs].some((function(t){return e[t]>=0}))}const uu={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,o=tu(t,{elementContext:"reference"}),s=tu(t,{altBoundary:!0}),u=ou(o,n),l=ou(s,i,a),c=su(u),d=su(l);t.modifiersData[r]={referenceClippingOffsets:u,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}};var lu=Ps({defaultModifiers:[Ms,Ls,Hs,Us,Ws,ru,iu,au,uu]}),cu="tippy-content",du="tippy-backdrop",fu="tippy-arrow",hu="tippy-svg-arrow",pu={passive:!0,capture:!0},gu=function(){return document.body};function mu(e,t,r){if(Array.isArray(e)){var n=e[t];return null==n?Array.isArray(r)?r[t]:r:n}return e}function _u(e,t){var r={}.toString.call(e);return 0===r.indexOf("[object")&&r.indexOf(t+"]")>-1}function vu(e,t){return"function"===typeof e?e.apply(void 0,t):e}function yu(e,t){return 0===t?e:function(n){clearTimeout(r),r=setTimeout((function(){e(n)}),t)};var r}function bu(e){return[].concat(e)}function Fu(e,t){-1===e.indexOf(t)&&e.push(t)}function wu(e){return e.split("-")[0]}function ku(e){return[].slice.call(e)}function Eu(e){return Object.keys(e).reduce((function(t,r){return void 0!==e[r]&&(t[r]=e[r]),t}),{})}function xu(){return document.createElement("div")}function Cu(e){return["Element","Fragment"].some((function(t){return _u(e,t)}))}function Du(e){return _u(e,"MouseEvent")}function Su(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function Au(e){return Cu(e)?[e]:function(e){return _u(e,"NodeList")}(e)?ku(e):Array.isArray(e)?e:ku(document.querySelectorAll(e))}function Tu(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function Ou(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function Pu(e){var t,r=bu(e)[0];return null!=r&&null!=(t=r.ownerDocument)&&t.body?r.ownerDocument:document}function Nu(e,t,r){var n=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[n](t,r)}))}function Mu(e,t){for(var r=t;r;){var n;if(e.contains(r))return!0;r=null==r.getRootNode||null==(n=r.getRootNode())?void 0:n.host}return!1}var Ru={isTouch:!1},ju=0;function Iu(){Ru.isTouch||(Ru.isTouch=!0,window.performance&&document.addEventListener("mousemove",Bu))}function Bu(){var e=performance.now();e-ju<20&&(Ru.isTouch=!1,document.removeEventListener("mousemove",Bu)),ju=e}function Lu(){var e=document.activeElement;if(Su(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}var qu=!!("undefined"!==typeof window&&"undefined"!==typeof document)&&!!window.msCrypto;var zu={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Hu=Object.assign({appendTo:gu,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},zu,{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),Uu=Object.keys(Hu);function Wu(e){var t=(e.plugins||[]).reduce((function(t,r){var n,i=r.name,a=r.defaultValue;i&&(t[i]=void 0!==e[i]?e[i]:null!=(n=Hu[i])?n:a);return t}),{});return Object.assign({},e,t)}function Vu(e,t){var r=Object.assign({},t,{content:vu(t.content,[e])},t.ignoreAttributes?{}:function(e,t){var r=(t?Object.keys(Wu(Object.assign({},Hu,{plugins:t}))):Uu).reduce((function(t,r){var n=(e.getAttribute("data-tippy-"+r)||"").trim();if(!n)return t;if("content"===r)t[r]=n;else try{t[r]=JSON.parse(n)}catch(pf){t[r]=n}return t}),{});return r}(e,t.plugins));return r.aria=Object.assign({},Hu.aria,r.aria),r.aria={expanded:"auto"===r.aria.expanded?t.interactive:r.aria.expanded,content:"auto"===r.aria.content?t.interactive?null:"describedby":r.aria.content},r}function $u(e,t){e.innerHTML=t}function Gu(e){var t=xu();return!0===e?t.className=fu:(t.className=hu,Cu(e)?t.appendChild(e):$u(t,e)),t}function Ku(e,t){Cu(t.content)?($u(e,""),e.appendChild(t.content)):"function"!==typeof t.content&&(t.allowHTML?$u(e,t.content):e.textContent=t.content)}function Zu(e){var t=e.firstElementChild,r=ku(t.children);return{box:t,content:r.find((function(e){return e.classList.contains(cu)})),arrow:r.find((function(e){return e.classList.contains(fu)||e.classList.contains(hu)})),backdrop:r.find((function(e){return e.classList.contains(du)}))}}function Yu(e){var t=xu(),r=xu();r.className="tippy-box",r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1");var n=xu();function i(r,n){var i=Zu(t),a=i.box,o=i.content,s=i.arrow;n.theme?a.setAttribute("data-theme",n.theme):a.removeAttribute("data-theme"),"string"===typeof n.animation?a.setAttribute("data-animation",n.animation):a.removeAttribute("data-animation"),n.inertia?a.setAttribute("data-inertia",""):a.removeAttribute("data-inertia"),a.style.maxWidth="number"===typeof n.maxWidth?n.maxWidth+"px":n.maxWidth,n.role?a.setAttribute("role",n.role):a.removeAttribute("role"),r.content===n.content&&r.allowHTML===n.allowHTML||Ku(o,e.props),n.arrow?s?r.arrow!==n.arrow&&(a.removeChild(s),a.appendChild(Gu(n.arrow))):a.appendChild(Gu(n.arrow)):s&&a.removeChild(s)}return n.className=cu,n.setAttribute("data-state","hidden"),Ku(n,e.props),t.appendChild(r),r.appendChild(n),i(e.props,e.props),{popper:t,onUpdate:i}}Yu.$$tippy=!0;var Xu=1,Qu=[],Ju=[];function el(e,t){var r,n,i,a,o,s,u,l,c=Vu(e,Object.assign({},Hu,Wu(Eu(t)))),d=!1,f=!1,h=!1,p=!1,g=[],m=yu(G,c.interactiveDebounce),_=Xu++,v=(l=c.plugins).filter((function(e,t){return l.indexOf(e)===t})),y={id:_,reference:e,popper:xu(),popperInstance:null,props:c,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:v,clearDelayTimeouts:function(){clearTimeout(r),clearTimeout(n),cancelAnimationFrame(i)},setProps:function(t){0;if(y.state.isDestroyed)return;N("onBeforeUpdate",[y,t]),V();var r=y.props,n=Vu(e,Object.assign({},r,Eu(t),{ignoreAttributes:!0}));y.props=n,W(),r.interactiveDebounce!==n.interactiveDebounce&&(j(),m=yu(G,n.interactiveDebounce));r.triggerTarget&&!n.triggerTarget?bu(r.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):n.triggerTarget&&e.removeAttribute("aria-expanded");R(),P(),w&&w(r,n);y.popperInstance&&(X(),J().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));N("onAfterUpdate",[y,t])},setContent:function(e){y.setProps({content:e})},show:function(){0;var e=y.state.isVisible,t=y.state.isDestroyed,r=!y.state.isEnabled,n=Ru.isTouch&&!y.props.touch,i=mu(y.props.duration,0,Hu.duration);if(e||t||r||n)return;if(S().hasAttribute("disabled"))return;if(N("onShow",[y],!1),!1===y.props.onShow(y))return;y.state.isVisible=!0,D()&&(F.style.visibility="visible");P(),q(),y.state.isMounted||(F.style.transition="none");if(D()){var a=T(),o=a.box,u=a.content;Tu([o,u],0)}s=function(){var e;if(y.state.isVisible&&!p){if(p=!0,F.offsetHeight,F.style.transition=y.props.moveTransition,D()&&y.props.animation){var t=T(),r=t.box,n=t.content;Tu([r,n],i),Ou([r,n],"visible")}M(),R(),Fu(Ju,y),null==(e=y.popperInstance)||e.forceUpdate(),N("onMount",[y]),y.props.animation&&D()&&function(e,t){H(e,t)}(i,(function(){y.state.isShown=!0,N("onShown",[y])}))}},function(){var e,t=y.props.appendTo,r=S();e=y.props.interactive&&t===gu||"parent"===t?r.parentNode:vu(t,[r]);e.contains(F)||e.appendChild(F);y.state.isMounted=!0,X(),!1}()},hide:function(){0;var e=!y.state.isVisible,t=y.state.isDestroyed,r=!y.state.isEnabled,n=mu(y.props.duration,1,Hu.duration);if(e||t||r)return;if(N("onHide",[y],!1),!1===y.props.onHide(y))return;y.state.isVisible=!1,y.state.isShown=!1,p=!1,d=!1,D()&&(F.style.visibility="hidden");if(j(),z(),P(!0),D()){var i=T(),a=i.box,o=i.content;y.props.animation&&(Tu([a,o],n),Ou([a,o],"hidden"))}M(),R(),y.props.animation?D()&&function(e,t){H(e,(function(){!y.state.isVisible&&F.parentNode&&F.parentNode.contains(F)&&t()}))}(n,y.unmount):y.unmount()},hideWithInteractivity:function(e){0;A().addEventListener("mousemove",m),Fu(Qu,m),m(e)},enable:function(){y.state.isEnabled=!0},disable:function(){y.hide(),y.state.isEnabled=!1},unmount:function(){0;y.state.isVisible&&y.hide();if(!y.state.isMounted)return;Q(),J().forEach((function(e){e._tippy.unmount()})),F.parentNode&&F.parentNode.removeChild(F);Ju=Ju.filter((function(e){return e!==y})),y.state.isMounted=!1,N("onHidden",[y])},destroy:function(){0;if(y.state.isDestroyed)return;y.clearDelayTimeouts(),y.unmount(),V(),delete e._tippy,y.state.isDestroyed=!0,N("onDestroy",[y])}};if(!c.render)return y;var b=c.render(y),F=b.popper,w=b.onUpdate;F.setAttribute("data-tippy-root",""),F.id="tippy-"+y.id,y.popper=F,e._tippy=y,F._tippy=y;var k=v.map((function(e){return e.fn(y)})),E=e.hasAttribute("aria-expanded");return W(),R(),P(),N("onCreate",[y]),c.showOnCreate&&ee(),F.addEventListener("mouseenter",(function(){y.props.interactive&&y.state.isVisible&&y.clearDelayTimeouts()})),F.addEventListener("mouseleave",(function(){y.props.interactive&&y.props.trigger.indexOf("mouseenter")>=0&&A().addEventListener("mousemove",m)})),y;function x(){var e=y.props.touch;return Array.isArray(e)?e:[e,0]}function C(){return"hold"===x()[0]}function D(){var e;return!(null==(e=y.props.render)||!e.$$tippy)}function S(){return u||e}function A(){var e=S().parentNode;return e?Pu(e):document}function T(){return Zu(F)}function O(e){return y.state.isMounted&&!y.state.isVisible||Ru.isTouch||a&&"focus"===a.type?0:mu(y.props.delay,e?0:1,Hu.delay)}function P(e){void 0===e&&(e=!1),F.style.pointerEvents=y.props.interactive&&!e?"":"none",F.style.zIndex=""+y.props.zIndex}function N(e,t,r){var n;(void 0===r&&(r=!0),k.forEach((function(r){r[e]&&r[e].apply(r,t)})),r)&&(n=y.props)[e].apply(n,t)}function M(){var t=y.props.aria;if(t.content){var r="aria-"+t.content,n=F.id;bu(y.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(r);if(y.state.isVisible)e.setAttribute(r,t?t+" "+n:n);else{var i=t&&t.replace(n,"").trim();i?e.setAttribute(r,i):e.removeAttribute(r)}}))}}function R(){!E&&y.props.aria.expanded&&bu(y.props.triggerTarget||e).forEach((function(e){y.props.interactive?e.setAttribute("aria-expanded",y.state.isVisible&&e===S()?"true":"false"):e.removeAttribute("aria-expanded")}))}function j(){A().removeEventListener("mousemove",m),Qu=Qu.filter((function(e){return e!==m}))}function I(t){if(!Ru.isTouch||!h&&"mousedown"!==t.type){var r=t.composedPath&&t.composedPath()[0]||t.target;if(!y.props.interactive||!Mu(F,r)){if(bu(y.props.triggerTarget||e).some((function(e){return Mu(e,r)}))){if(Ru.isTouch)return;if(y.state.isVisible&&y.props.trigger.indexOf("click")>=0)return}else N("onClickOutside",[y,t]);!0===y.props.hideOnClick&&(y.clearDelayTimeouts(),y.hide(),f=!0,setTimeout((function(){f=!1})),y.state.isMounted||z())}}}function B(){h=!0}function L(){h=!1}function q(){var e=A();e.addEventListener("mousedown",I,!0),e.addEventListener("touchend",I,pu),e.addEventListener("touchstart",L,pu),e.addEventListener("touchmove",B,pu)}function z(){var e=A();e.removeEventListener("mousedown",I,!0),e.removeEventListener("touchend",I,pu),e.removeEventListener("touchstart",L,pu),e.removeEventListener("touchmove",B,pu)}function H(e,t){var r=T().box;function n(e){e.target===r&&(Nu(r,"remove",n),t())}if(0===e)return t();Nu(r,"remove",o),Nu(r,"add",n),o=n}function U(t,r,n){void 0===n&&(n=!1),bu(y.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,r,n),g.push({node:e,eventType:t,handler:r,options:n})}))}function W(){var e;C()&&(U("touchstart",$,{passive:!0}),U("touchend",K,{passive:!0})),(e=y.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(U(e,$),e){case"mouseenter":U("mouseleave",K);break;case"focus":U(qu?"focusout":"blur",Z);break;case"focusin":U("focusout",Z)}}))}function V(){g.forEach((function(e){var t=e.node,r=e.eventType,n=e.handler,i=e.options;t.removeEventListener(r,n,i)})),g=[]}function $(e){var t,r=!1;if(y.state.isEnabled&&!Y(e)&&!f){var n="focus"===(null==(t=a)?void 0:t.type);a=e,u=e.currentTarget,R(),!y.state.isVisible&&Du(e)&&Qu.forEach((function(t){return t(e)})),"click"===e.type&&(y.props.trigger.indexOf("mouseenter")<0||d)&&!1!==y.props.hideOnClick&&y.state.isVisible?r=!0:ee(e),"click"===e.type&&(d=!r),r&&!n&&te(e)}}function G(e){var t=e.target,r=S().contains(t)||F.contains(t);if("mousemove"!==e.type||!r){var n=J().concat(F).map((function(e){var t,r=null==(t=e._tippy.popperInstance)?void 0:t.state;return r?{popperRect:e.getBoundingClientRect(),popperState:r,props:c}:null})).filter(Boolean);(function(e,t){var r=t.clientX,n=t.clientY;return e.every((function(e){var t=e.popperRect,i=e.popperState,a=e.props.interactiveBorder,o=wu(i.placement),s=i.modifiersData.offset;if(!s)return!0;var u="bottom"===o?s.top.y:0,l="top"===o?s.bottom.y:0,c="right"===o?s.left.x:0,d="left"===o?s.right.x:0,f=t.top-n+u>a,h=n-t.bottom-l>a,p=t.left-r+c>a,g=r-t.right-d>a;return f||h||p||g}))})(n,e)&&(j(),te(e))}}function K(e){Y(e)||y.props.trigger.indexOf("click")>=0&&d||(y.props.interactive?y.hideWithInteractivity(e):te(e))}function Z(e){y.props.trigger.indexOf("focusin")<0&&e.target!==S()||y.props.interactive&&e.relatedTarget&&F.contains(e.relatedTarget)||te(e)}function Y(e){return!!Ru.isTouch&&C()!==e.type.indexOf("touch")>=0}function X(){Q();var t=y.props,r=t.popperOptions,n=t.placement,i=t.offset,a=t.getReferenceClientRect,o=t.moveTransition,u=D()?Zu(F).arrow:null,l=a?{getBoundingClientRect:a,contextElement:a.contextElement||S()}:e,c={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(D()){var r=T().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?r.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?r.setAttribute("data-"+e,""):r.removeAttribute("data-"+e)})),t.attributes.popper={}}}},d=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!o}},c];D()&&u&&d.push({name:"arrow",options:{element:u,padding:3}}),d.push.apply(d,(null==r?void 0:r.modifiers)||[]),y.popperInstance=lu(l,F,Object.assign({},r,{placement:n,onFirstUpdate:s,modifiers:d}))}function Q(){y.popperInstance&&(y.popperInstance.destroy(),y.popperInstance=null)}function J(){return ku(F.querySelectorAll("[data-tippy-root]"))}function ee(e){y.clearDelayTimeouts(),e&&N("onTrigger",[y,e]),q();var t=O(!0),n=x(),i=n[0],a=n[1];Ru.isTouch&&"hold"===i&&a&&(t=a),t?r=setTimeout((function(){y.show()}),t):y.show()}function te(e){if(y.clearDelayTimeouts(),N("onUntrigger",[y,e]),y.state.isVisible){if(!(y.props.trigger.indexOf("mouseenter")>=0&&y.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&d)){var t=O(!1);t?n=setTimeout((function(){y.state.isVisible&&y.hide()}),t):i=requestAnimationFrame((function(){y.hide()}))}}else z()}}function tl(e,t){void 0===t&&(t={});var r=Hu.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",Iu,pu),window.addEventListener("blur",Lu);var n=Object.assign({},t,{plugins:r}),i=Au(e).reduce((function(e,t){var r=t&&el(t,n);return r&&e.push(r),e}),[]);return Cu(e)?i[0]:i}tl.defaultProps=Hu,tl.setDefaultProps=function(e){Object.keys(e).forEach((function(t){Hu[t]=e[t]}))},tl.currentInput=Ru;var rl=function(e){var t=void 0===e?{}:e,r=t.exclude,n=t.duration;Ju.forEach((function(e){var t=!1;if(r&&(t=Su(r)?e.reference===r:e.popper===r.popper),!t){var i=e.props.duration;e.setProps({duration:n}),e.hide(),e.state.isDestroyed||e.setProps({duration:i})}}))};Object.assign({},Us,{effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow)}});tl.setDefaultProps({render:Yu});const nl=tl;function il(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}var al="undefined"!==typeof window&&"undefined"!==typeof document;function ol(e,t){e&&("function"===typeof e&&e(t),{}.hasOwnProperty.call(e,"current")&&(e.current=t))}function sl(){return al&&document.createElement("div")}function ul(e,t){if(e===t)return!0;if("object"===typeof e&&null!=e&&"object"===typeof t&&null!=t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var r in e){if(!t.hasOwnProperty(r))return!1;if(!ul(e[r],t[r]))return!1}return!0}return!1}function ll(e){var t=[];return e.forEach((function(e){t.find((function(t){return ul(e,t)}))||t.push(e)})),t}function cl(e,t){var r,n;return Object.assign({},t,{popperOptions:Object.assign({},e.popperOptions,t.popperOptions,{modifiers:ll([].concat((null==(r=e.popperOptions)?void 0:r.modifiers)||[],(null==(n=t.popperOptions)?void 0:n.modifiers)||[]))})})}var dl=al?c.useLayoutEffect:c.useEffect;function fl(e){var t=(0,c.useRef)();return t.current||(t.current="function"===typeof e?e():e),t.current}function hl(e,t,r){r.split(/\s+/).forEach((function(r){r&&e.classList[t](r)}))}var pl={name:"className",defaultValue:"",fn:function(e){var t=e.popper.firstElementChild,r=function(){var t;return!!(null==(t=e.props.render)?void 0:t.$$tippy)};function n(){e.props.className&&!r()||hl(t,"add",e.props.className)}return{onCreate:n,onBeforeUpdate:function(){r()&&hl(t,"remove",e.props.className)},onAfterUpdate:n}}};function gl(e){return function(t){var n=t.children,i=t.content,a=t.visible,o=t.singleton,s=t.render,u=t.reference,l=t.disabled,d=void 0!==l&&l,f=t.ignoreAttributes,h=void 0===f||f,p=(t.__source,t.__self,il(t,["children","content","visible","singleton","render","reference","disabled","ignoreAttributes","__source","__self"])),g=void 0!==a,m=void 0!==o,_=(0,c.useState)(!1),v=_[0],y=_[1],b=(0,c.useState)({}),F=b[0],w=b[1],k=(0,c.useState)(),E=k[0],x=k[1],C=fl((function(){return{container:sl(),renders:1}})),D=Object.assign({ignoreAttributes:h},p,{content:C.container});g&&(D.trigger="manual",D.hideOnClick=!1),m&&(d=!0);var S=D,A=D.plugins||[];s&&(S=Object.assign({},D,{plugins:m&&null!=o.data?[].concat(A,[{fn:function(){return{onTrigger:function(e,t){var r=o.data.children.find((function(e){return e.instance.reference===t.currentTarget}));e.state.$$activeSingletonInstance=r.instance,x(r.content)}}}}]):A,render:function(){return{popper:C.container}}}));var T=[u].concat(n?[n.type]:[]);return dl((function(){var t=u;u&&u.hasOwnProperty("current")&&(t=u.current);var r=e(t||C.ref||sl(),Object.assign({},S,{plugins:[pl].concat(D.plugins||[])}));return C.instance=r,d&&r.disable(),a&&r.show(),m&&o.hook({instance:r,content:i,props:S,setSingletonContent:x}),y(!0),function(){r.destroy(),null==o||o.cleanup(r)}}),T),dl((function(){var e;if(1!==C.renders){var t=C.instance;t.setProps(cl(t.props,S)),null==(e=t.popperInstance)||e.forceUpdate(),d?t.disable():t.enable(),g&&(a?t.show():t.hide()),m&&o.hook({instance:t,content:i,props:S,setSingletonContent:x})}else C.renders++})),dl((function(){var e;if(s){var t=C.instance;t.setProps({popperOptions:Object.assign({},t.props.popperOptions,{modifiers:[].concat(((null==(e=t.props.popperOptions)?void 0:e.modifiers)||[]).filter((function(e){return"$$tippyReact"!==e.name})),[{name:"$$tippyReact",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t,r=e.state,n=null==(t=r.modifiersData)?void 0:t.hide;F.placement===r.placement&&F.referenceHidden===(null==n?void 0:n.isReferenceHidden)&&F.escaped===(null==n?void 0:n.hasPopperEscaped)||w({placement:r.placement,referenceHidden:null==n?void 0:n.isReferenceHidden,escaped:null==n?void 0:n.hasPopperEscaped}),r.attributes.popper={}}}])})})}}),[F.placement,F.referenceHidden,F.escaped].concat(T)),c.createElement(c.Fragment,null,n?(0,c.cloneElement)(n,{ref:function(e){C.ref=e,ol(n.ref,e)}}):null,v&&(0,r.createPortal)(s?s(function(e){var t={"data-placement":e.placement};return e.referenceHidden&&(t["data-reference-hidden"]=""),e.escaped&&(t["data-escaped"]=""),t}(F),E,C.instance):i,C.container))}}var ml=function(e,t){return(0,c.forwardRef)((function(r,n){var i=r.children,a=il(r,["children"]);return c.createElement(e,Object.assign({},t,a),i?(0,c.cloneElement)(i,{ref:function(e){ol(n,e),ol(i.ref,e)}}):null)}))};const _l=ml(gl(nl)),vl=()=>{const[e,t]=(0,c.useState)(!1);return[e,r=>{let n=0;return e||(t((e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const r=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select();const n=document.execCommand("copy");return document.body.removeChild(t),r&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(r)),n})(r)),n=setTimeout((()=>{t(!1)}),500)),()=>{clearTimeout(n)}}]};function yl(e){let{url:t,name:r="unkonw name",...n}=e;const[i,a]=(0,c.useState)("");return(0,c.useEffect)((()=>{if(t)a(t);else{const e=(0,jo.eD)({initials:(0,jo.Qm)(r)});a(e)}}),[t,r]),(0,ve.jsx)("img",{src:i,onError:()=>{const e=(0,jo.eD)({initials:(0,jo.Qm)(r)});a(e)},...n})}var bl=__webpack_require__(9983);function Fl(e){return(0,bl.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"}},{tag:"path",attr:{d:"M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"}}]})(e)}function wl(e){return(0,bl.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 6v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z"}}]}]})(e)}function kl(e){return(0,bl.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M336 192h40a40 40 0 0140 40v192a40 40 0 01-40 40H136a40 40 0 01-40-40V232a40 40 0 0140-40h40m160-64l-80-80-80 80m80 193V48"}}]})(e)}const El=fe.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 80px;
  width: 432px;
  gap: 4px;

  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .name {
    font-weight: bold;
    font-size: 18px;
    line-height: 100%;
    color: #1c1c1e;
  }
  .email {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #78787c;
  }
  .icons {
    display: flex;
    align-items: center;
    padding: 26px 0;
    gap: 28px;
    .icon {
    }
  }
  .line {
    width: 100%;
    height: 1px;
    border: none;
    background-color: rgba(0, 0, 0, 0.1);
  }
  &.card {
    padding: 16px;
    width: 332px;
    background: #ffffff;
    box-shadow: 0px 20px 25px 20px rgba(31, 41, 55, 0.1),
      0px 10px 10px rgba(31, 41, 55, 0.04);
    border-radius: 6px;
    .icons {
      padding-bottom: 2px;
    }
  }
`;function xl(e){let{uid:t=null,type:r="embed"}=e;const n=(0,mn.v9)((e=>e.contacts.byId[t]));if(!n)return null;const{name:i,email:a,avatar:o}=n;return(0,ve.jsxs)(El,{className:r,children:[(0,ve.jsx)(yl,{className:"avatar",url:o,name:i}),(0,ve.jsx)("h2",{className:"name",children:i}),(0,ve.jsx)("span",{className:"email",children:a}),(0,ve.jsxs)("ul",{className:"icons",children:[(0,ve.jsx)("li",{className:"icon chat",children:(0,ve.jsx)(gn,{to:`/chat/dm/${t}`,children:(0,ve.jsx)(Fl,{size:20,color:"#616161"})})}),(0,ve.jsx)("li",{className:"icon add",children:(0,ve.jsx)(wl,{size:20,color:"#616161"})}),(0,ve.jsx)("li",{className:"icon share",children:(0,ve.jsx)(kl,{size:20,color:"#616161"})})]}),"embed"==r&&(0,ve.jsx)("hr",{className:"line"})]})}const Cl=fe.ZP.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  user-select: none;
  &.compact {
    padding: 0;
  }
  &.interactive {
    &:hover,
    &.active {
      background: rgba(116, 127, 141, 0.1);
    }
  }
  .avatar {
    cursor: pointer;
    width: 32px;
    height: 32px;
    position: relative;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
    .status {
      position: absolute;
      bottom: 0;
      right: -2px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      outline: 2px solid #fff;
      &.online {
        background-color: #22c55e;
      }
      &.offline {
        background-color: #a1a1aa;
      }
      &.alert {
        background-color: #dc2626;
      }
    }
  }
  .name {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #52525b;
  }
`;function Dl(e){let{interactive:t=!0,uid:r="",popover:n=!1,compact:i=!1}=e;const a=(0,mn.v9)((e=>e.contacts.byId[r]));return a?(0,ve.jsxs)(Cl,{className:`${t?"interactive":""} ${i?"compact":""}`,children:[(0,ve.jsx)(_l,{inertia:!0,interactive:!0,disabled:!n,placement:"left",trigger:"click",content:(0,ve.jsx)(xl,{uid:r,type:"card"}),children:(0,ve.jsxs)("div",{className:"avatar",children:[(0,ve.jsx)(yl,{url:a.avatar,name:a.name,alt:"avatar"}),(0,ve.jsx)("div",{className:"status "+(a.online?"online":"offline")})]})}),!i&&(0,ve.jsx)("span",{className:"name",children:null===a||void 0===a?void 0:a.name})]}):null}const Sl=fe.ZP.ul`
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 4px;
  background-color: #fff;
  box-shadow: 0px 20px 25px 20px rgba(31, 41, 55, 0.1),
    0px 10px 10px rgba(31, 41, 55, 0.04);
  border-radius: var(--br);
  .item {
    white-space: nowrap;
    cursor: pointer;
    border-radius: 3px;
    padding: 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #616161;
    /* transition: color 0.2s ease; */
    &:hover {
      background-color: #22ccee;
      color: #fff;
    }
    &.underline {
      border-bottom: 1px solid #e5e5e5;
    }
    &.danger {
      color: #a11043;
    }
  }
`,Al=fe.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 32px;
  .tip {
    font-weight: 500;
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 8px;
  }
  .link {
    width: 512px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 4px;
    padding: 3px 4px 3px 8px;
    .content {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 512px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #78787c;
    }
  }
  .sub_tip {
    margin-left: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #616161;
    margin-bottom: 20px;
  }
`;function Tl(){const{data:e,isSuccess:t}=Ea(),[r,n]=vl(),{inviteLink:{link:i},loginUser:a}=(0,mn.v9)((e=>({inviteLink:e.server.inviteLink,loginUser:e.contacts.byId[e.authData.uid]}))),[o,{isLoading:s}]=Na();(0,c.useEffect)((()=>{!i&&a&&a.is_admin&&o()}),[i,a]);if(!a||!a.is_admin||!t)return null;let u=null;if(i){const t=new URL(i);t.searchParams.set("code",e.enabled),u=t.href}return(0,ve.jsxs)(Al,{children:[(0,ve.jsx)("span",{className:"tip",children:"Share this link to invite people to this server."}),(0,ve.jsxs)("div",{className:"link",children:[(0,ve.jsx)("span",{title:u,className:"content",children:u}),(0,ve.jsx)(bn.Z,{onClick:n.bind(null,u),className:"main",children:r?"Copied":"Copy"})]}),(0,ve.jsx)("span",{className:"sub_tip",children:"Invite link expires in 7 days."}),(0,ve.jsx)(bn.Z,{className:"ghost",disabled:s,onClick:()=>{o()},children:s?"Generating":"Generate New Link"})]})}var Ol=__webpack_require__(169);const Pl=fe.ZP.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 94px);
  overflow-y: scroll;
  .intro {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    .title {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #374151;
    }
    .desc {
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      color: #616161;
    }
  }
  .members {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 512px;
    margin-bottom: 176px;
    .member {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      .left {
        display: flex;
        gap: 8px;
        .info {
          display: flex;
          flex-direction: column;
          .name {
            font-weight: bold;
            font-size: 14px;
            line-height: 20px;
            color: #52525b;
          }
          .email {
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            color: #52525b;
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        gap: 28px;
        .role {
          font-weight: 500;
          font-size: 12px;
          line-height: 18px;
          text-align: right;
          color: #616161;
        }
        .opts {
          position: relative;
          width: 24px;
          height: 24px;

          .dots {
            cursor: pointer;
          }
          .menu {
            position: absolute;
          }
        }
      }
    }
  }
`;function Nl(e){var t;let{cid:r=null}=e;const{contacts:i,channels:a,loginUser:o}=(0,mn.v9)((e=>({contacts:e.contacts,channels:e.channels,loginUser:e.contacts.byId[e.authData.uid]}))),[s,u]=vl(),[l,{isSuccess:d}]=(0,va.QQ)(),[f,{isSuccess:h}]=no(),p=r?f:l,g=e=>{p(r?{id:r,members:[+e]}:e)};(0,c.useEffect)((()=>{d&&n.ZP.success("delete successfully")}),[d]),(0,c.useEffect)((()=>{h&&n.ZP.success("remove member successfully")}),[h]);const m=e=>{u(e),setTimeout((()=>{rl()}),800)},_=null!==(t=a.byId[r])&&void 0!==t?t:null,v=_?_.is_public?i.ids:_.members:i.ids;return(0,ve.jsxs)(Pl,{children:[(null===o||void 0===o?void 0:o.is_admin)&&(0,ve.jsx)(Tl,{}),(0,ve.jsxs)("div",{className:"intro",children:[(0,ve.jsx)("h4",{className:"title",children:"Manage Members"}),(0,ve.jsx)("p",{className:"desc",children:"Disabling your account means you can recover it at any time after taking this action."})]}),(0,ve.jsx)("ul",{className:"members",children:v.map((e=>{const{name:t,email:r,is_admin:n}=i.byId[e];return(0,ve.jsxs)("li",{className:"member",children:[(0,ve.jsxs)("div",{className:"left",children:[(0,ve.jsx)(Dl,{compact:!0,uid:e,interactive:!1}),(0,ve.jsxs)("div",{className:"info",children:[(0,ve.jsx)("span",{className:"name",children:t}),(0,ve.jsx)("span",{className:"email",children:r})]})]}),(0,ve.jsxs)("div",{className:"right",children:[(0,ve.jsx)("span",{className:"role",children:n?"Admin":"User"}),(0,ve.jsx)(_l,{interactive:!0,placement:"right-start",trigger:"click",content:(0,ve.jsxs)(Sl,{className:"menu",children:[r&&(0,ve.jsx)("li",{className:"item",onClick:m.bind(null,r),children:s?"Copied":"Copy Email"}),(null===o||void 0===o?void 0:o.is_admin)&&(0,ve.jsx)("li",{className:"item danger",onClick:g.bind(null,e),children:"Remove"})]}),children:(0,ve.jsx)("div",{className:"opts",children:(0,ve.jsx)("img",{className:"dots",src:Ol,alt:"dots icon"})})})]})]},e)}))})]})}function Ml(){return(0,ve.jsxs)("div",{children:["Build Timestamp: ","1648607004"]})}function Rl(){const{changed:e,reset:t,values:r,setValues:n,toggleEnable:i,updateConfig:a}=Io("agora"),o=e=>{const t=e.target.value,{type:r}=e.target.dataset;n((e=>({...e,[r]:t})))},{url:s,project_id:u,app_id:l,app_certificate:c,rtm_key:d,rtm_secret:f,enabled:h=!1}=null!==r&&void 0!==r?r:{};return(0,ve.jsxs)(Mo,{children:[(0,ve.jsxs)("div",{className:"inputs",children:[(0,ve.jsxs)("div",{className:"input row",children:[(0,ve.jsx)(So,{children:"Enable"}),(0,ve.jsx)(Ro,{onClick:i,"data-checked":h})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"url",children:"Agora Url"}),(0,ve.jsx)(Jn.Z,{disabled:!h,"data-type":"url",onChange:o,value:s||"https://api.agora.io",name:"url",placeholder:"Agora URL"})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"project_id",children:"Project ID"}),(0,ve.jsx)(Jn.Z,{disabled:!h,"data-type":"project_id",onChange:o,value:u,name:"project_id",placeholder:"Project ID"})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"app_id",children:"App ID"}),(0,ve.jsx)(Jn.Z,{disabled:!h,"data-type":"app_id",onChange:o,value:l,name:"app_id",placeholder:"APP ID"})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"app_certificate",children:"APP Certificate"}),(0,ve.jsx)(Jn.Z,{disabled:!h,"data-type":"app_certificate",onChange:o,value:c,name:"app_certificate",placeholder:"APP Certificate"})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"rtm_key",children:"RTM Key"}),(0,ve.jsx)(Ao,{disabled:!h,"data-type":"rtm_key",onChange:o,value:d,name:"rtm_key",placeholder:"RTM Key"})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"rtm_secret",children:"RTM Secret"}),(0,ve.jsx)(Ao,{disabled:!h,"data-type":"rtm_secret",onChange:o,value:f,name:"rtm_secret",placeholder:"RTM Secret"})]})]}),e&&(0,ve.jsx)(Oo,{saveHandler:()=>{a(r)},resetHandler:t})]})}const jl=[{title:"General",items:[{name:"overview",title:"Overview",component:(0,ve.jsx)(No,{})},{name:"members",title:"Members",component:(0,ve.jsx)(Nl,{}),admin:!0},{name:"notification",title:"Notification",component:(0,ve.jsx)(Vo,{})}]},{title:"User",items:[{name:"my_account",title:"My Account",component:(0,ve.jsx)(Co.Z,{})}]},{title:"Configuration",items:[{name:"firebase",title:"Firebase",component:(0,ve.jsx)(Bo,{})},{name:"agora",title:"Agora",component:(0,ve.jsx)(Rl,{})},{name:"smtp",title:"SMTP",component:(0,ve.jsx)(zo,{})}],admin:!0},{title:"About",items:[{name:"faq",title:"FAQ",component:(0,ve.jsx)(Ml,{})},{name:"terms",title:"Terms & Privacy",component:"Terms & Privacy"},{name:"feedback",title:"Feedback",component:"feedback"}]}],Il=()=>{const e=(0,mn.v9)((e=>e.contacts.byId[e.authData.uid]));return jl.filter((t=>!!e.is_admin||!t.admin))};var Bl=__webpack_require__(3929);const Ll=fe.ZP.input`
  -webkit-appearance: none;
  /* Remove most all native input styles */
  appearance: none;
  /* Not removed via appearance */
  margin: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #d0d5dd;
  border-radius: 6px;
  place-content: center;
  &::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    margin: 4px;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 10px 10px #1fe1f9;
  }
  &:checked {
    border-color: #1fe1f9;
    &:before {
      transform: scale(1);
    }
  }
  &:disabled {
    opacity: 0.4;
  }
`;function ql(e){return(0,ve.jsx)(Ll,{...e,type:"checkbox"})}const zl=(0,fe.ZP)(Bl.Z)`
  .clear {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #6b7280;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .txt {
      cursor: pointer;
      color: orange;
      margin-right: 12px;
    }
    input {
      cursor: pointer;
    }
  }
`;function Hl(e){let{closeModal:t}=e;const r=(0,mn.I0)(),[n,i]=(0,c.useState)(!1),{logout:a,exited:o,exiting:s,clearLocalData:u}=Vi();return(0,c.useEffect)((()=>{o&&(n&&u(),r(ci()))}),[o,n]),(0,ve.jsx)(wo.Z,{id:"modal-modal",children:(0,ve.jsx)(zl,{title:"Log Out",description:"Are you sure want to log out this account?",buttons:(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsx)(bn.Z,{onClick:t,children:"Cancel"}),(0,ve.jsx)(bn.Z,{onClick:()=>{a()},className:"danger",children:s?"Logging out":"Log Out"})]}),children:(0,ve.jsxs)("div",{className:"clear",children:[(0,ve.jsx)("label",{htmlFor:"clear_cb",className:"txt",children:"Clear local data"}),(0,ve.jsx)(ql,{name:"clear_cb",checked:n,onChange:e=>{i(e.target.checked)}})]})})})}function Ul(){const e=Il(),t=e.map((e=>{let{items:t}=e;return t})).flat(),[r,n]=(0,c.useState)(t[0]),[i,a]=(0,c.useState)(!1),o=(0,mn.I0)(),s=()=>{a((e=>!e))};return(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsx)(xo,{updateNav:e=>{const r=t.find((t=>t.name==e));r&&n(r)},nav:r,closeModal:()=>{o(ci())},title:"Settings",navs:e,dangers:[{title:"Log Out",handler:s}],children:r.component}),i&&(0,ve.jsx)(Hl,{closeModal:s})]})}function Wl(e){let{id:t,closeModal:r}=e;const i=Wr(),a=Ur(`/chat/channel/${t}`),[o,{isLoading:s,isSuccess:u}]=Qa();return(0,c.useEffect)((()=>{u&&(n.ZP.success("delete channel successfully!"),a&&i("/chat"),r())}),[u,t,a]),t?(0,ve.jsx)(wo.Z,{id:"modal-modal",children:(0,ve.jsx)(Bl.Z,{title:"Delete Channel",description:"Are you sure want to delete this channel?",buttons:(0,ve.jsxs)(ve.Fragment,{children:[" ",(0,ve.jsx)(bn.Z,{onClick:r.bind(null,void 0),children:"Cancel"}),(0,ve.jsx)(bn.Z,{onClick:()=>{o(t)},className:"danger",children:s?"Deleting":"Delete"})]})})}):null}var Vl=__webpack_require__(4721);const $l=fe.ZP.div`
  position: relative;
  width: 512px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  .inputs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    .input {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      .name {
        padding-left: 36px;
        background-image: url(${Vl});
        background-size: 20px;
        background-position-x: 8px;
        background-position-y: 8px;
        background-repeat: no-repeat;
      }
    }
  }
`;function Gl(e){let{id:t=0}=e;const r=(0,mn.v9)((e=>e.contacts.byId[e.authData.uid])),{data:i,refetch:a}=Ya(t),[o,s]=(0,c.useState)(!1),[u,l]=(0,c.useState)(null),[d,{isSuccess:f}]=Xa(),h=e=>{const t=e.target.value,{type:r}=e.target.dataset;l((e=>({...e,[r]:t})))};if((0,c.useEffect)((()=>{i&&l(i)}),[i]),(0,c.useEffect)((()=>{if(i&&u){const{name:e,description:t}=u,{name:r,description:n}=i;s(r!==e||n!==t)}}),[i,u]),(0,c.useEffect)((()=>{f&&(n.ZP.success("Channel updated!"),a())}),[f]),!u||!t)return null;const{name:p,description:g}=u,m=r.is_admin;return(0,ve.jsxs)($l,{children:[(0,ve.jsxs)("div",{className:"inputs",children:[(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"name",children:"Channel Name"}),(0,ve.jsx)(Jn.Z,{disabled:!m,className:"name","data-type":"name",onChange:h,value:p,name:"name",id:"name",placeholder:"Channel Name"})]}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)(So,{htmlFor:"desc",children:"Channel Topic"}),(0,ve.jsx)(Ao,{disabled:!m,"data-type":"description",onChange:h,value:null!==g&&void 0!==g?g:"",rows:4,name:"name",id:"name",placeholder:"Let everyone know how to use this channel."})]})]}),o&&(0,ve.jsx)(Oo,{saveHandler:()=>{const{name:e,description:r}=u;d({id:t,name:e,description:r})},resetHandler:()=>{l(i)}})]})}const Kl=e=>[{title:"General",items:[{name:"overview",title:"Overview",component:(0,ve.jsx)(Gl,{id:e})},{name:"members",title:"Members",component:(0,ve.jsx)(Nl,{cid:e})}]}];function Zl(e){let{id:t=0}=e;const r=Kl(t),n=r.map((e=>{let{items:t}=e;return t})).flat(),[i,a]=(0,c.useState)(n[0]),[o,s]=(0,c.useState)(!1),u=(0,mn.I0)(),l=()=>{s((e=>!e))};return t?(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsx)(xo,{updateNav:e=>{const t=n.find((t=>t.name==e));t&&a(t)},nav:i,closeModal:()=>{u(fi())},title:"Channel Setting",navs:r,dangers:[{title:"Delete Channel",handler:l}],children:i.component}),o&&(0,ve.jsx)(Wl,{closeModal:l,id:t})]}):null}var Yl=__webpack_require__(3246),Xl=__webpack_require__(2694),Ql=__webpack_require__(3449);function Jl(){var e;const t=(0,mn.I0)(),{ui:{ready:r,menuExpand:n,setting:i,channelSetting:a}}=(0,mn.v9)((e=>({ui:e.ui}))),{data:o,loading:s}=function(){const{rehydrate:e,rehydrated:t}=ga(),r=(0,mn.v9)((e=>e.authData.uid)),{setStreamingReady:n}=Fo(),[i,{isLoading:a,isSuccess:o,isError:s,data:u}]=(0,va.Uk)(),[l,{isLoading:d,isSuccess:f,isError:h,data:p}]=Ta();(0,c.useEffect)((()=>(_a(),e(),()=>{n(!1)})),[]),(0,c.useEffect)((()=>{t&&(i(),l())}),[t]);const g=r&&t;return(0,c.useEffect)((()=>{g&&n(!0)}),[g]),{loading:a||d||!t,error:s&&h,success:o&&f,data:{contacts:u,server:p}}}();return s||!r?(0,ve.jsx)(Gi,{}):(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsxs)(pi,{children:[(0,ve.jsxs)("div",{className:"col left "+(n?"expand":""),children:[(0,ve.jsx)(mi,{data:null===o||void 0===o?void 0:o.server,memberCount:null===(e=o.contacts)||void 0===e?void 0:e.length,expand:n}),(0,ve.jsxs)("nav",{className:"nav",children:[(0,ve.jsxs)(gn,{className:"link",to:"/chat",children:[(0,ve.jsx)("img",{src:Yl,alt:"chat icon"})," ",n&&(0,ve.jsx)("span",{className:"animate__animated animate__fadeIn",children:"Chat"})]}),(0,ve.jsxs)(gn,{className:"link",to:"/contacts",children:[(0,ve.jsx)("img",{src:Xl,alt:"contact icon"})," ",n&&(0,ve.jsx)("span",{className:"animate__animated animate__fadeIn",children:"Contacts"})]}),(0,ve.jsxs)(gn,{className:"link",to:"/files",children:[(0,ve.jsx)("img",{src:Ql,alt:"folder icon"})," ",n&&(0,ve.jsx)("span",{className:"animate__animated animate__fadeIn",children:"Files"})]})]}),(0,ve.jsx)("div",{className:"divider"}),(0,ve.jsx)(Qi,{toggle:()=>{t(di())},expand:n})]}),(0,ve.jsx)("div",{className:"col right",children:(0,ve.jsx)(jr,{})})]}),i&&(0,ve.jsx)(Ul,{}),a&&(0,ve.jsx)(Zl,{id:a})]})}function ec(e){return(0,bl.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(e)}function tc(e){return(0,bl.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(e)}const rc=fe.ZP.div`
  display: flex;
  height: 100%;
  > .left {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 260px;
    box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.1);
    .list {
      margin: 12px 8px;
      .title {
        padding: 0 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4px;
        cursor: pointer;
        > .txt {
          user-select: none;
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: bold;
          font-size: 12px;
          line-height: 20px;
          color: #78787c;
        }
        .icon {
          transition: transform 0.5s ease;
          transform-origin: center;
        }
      }
      > .nav {
        display: flex;
        flex-direction: column;
        gap: 4px;
        a {
          text-decoration: none;
        }
        .session {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 4px 8px;
          border-radius: 4px;
          &:hover,
          &.active {
            background: rgba(116, 127, 141, 0.1);
          }

          .avatar {
            /* todo */
          }
          .details {
            display: flex;
            flex-direction: column;
            width: 100%;
            .up {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .name {
                font-weight: 600;
                font-size: 14px;
                line-height: 20px;
                color: #52525b;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              time {
                white-space: nowrap;
                font-weight: 500;
                font-size: 12px;
                line-height: 18px;
                color: #78787c;
              }
            }
            .down {
              display: flex;
              justify-content: space-between;
              .msg {
                min-height: 18px;
                font-weight: normal;
                font-size: 12px;
                line-height: 18px;
                color: #78787c;
                white-space: nowrap;
                overflow: hidden;
                width: 140px;
                text-overflow: ellipsis;
              }
              > .badge {
                /* letter-spacing: -1px; */
                /* padding: 2px; */
                color: #fff;
                height: 20px;
                min-width: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                background: #1fe1f9;
                font-weight: 900;
                font-size: 10px;
                line-height: 10px;
                &.dot {
                  min-width: unset;
                  width: 6px;
                  height: 6px;
                  padding: 0;
                }
                &.mute {
                  background: #bfbfbf;
                }
              }
            }
          }
        }
        /* drop files effect */
        .drop_over {
          outline: 2px solid #52edff;
        }
      }
      &.collapse {
        .title .icon {
          transform: rotate(-90deg);
        }
        > .nav {
          display: none;
        }
      }
    }
  }
  > .right {
    width: 100%;
  }
`;var nc=__webpack_require__(562),ic=__webpack_require__(5953),ac=__webpack_require__(7913),oc=__webpack_require__(4374);function sc(e){let{personal:t=!1,...r}=e;return(0,ve.jsx)("img",{src:t?oc:Vl,alt:"channel icon",...r})}const uc=fe.ZP.div`
  display: flex;
  /* max-width: 604px; */
  max-height: 402px;
  background: #fff;
  box-shadow: 0px 25px 50px rgba(31, 41, 55, 0.25);
  border-radius: 8px;
  transition: all 0.5s ease;
  .left {
    width: 260px;
    /* height: 100%; */
    box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.1);
    overflow-y: scroll;
    .search {
      position: sticky;
      top: 0;
      z-index: 99;
      background: #fff;
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
      padding: 8px;
      width: calc(100% - 1px);
      input {
        outline: none;
        width: -webkit-fill-available;
        padding: 8px;
        font-size: 14px;
        line-height: 20px;
        border: none;
      }
    }
    .users {
      display: flex;
      flex-direction: column;
      /* height: 260px; */
      padding-bottom: 20px;
      /* overflow-y: scroll; */
      .user {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0 16px;
        /* margin: 0 4px; */
        width: -webkit-fill-available;
        border-radius: 4px;
        &:hover {
          background: rgba(116, 127, 141, 0.1);
        }
        > div {
          width: 100%;
        }
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    box-sizing: border-box;
    &.private {
      width: 344px;
      .desc {
        text-align: center;
        /* padding: 0 20px; */
      }
    }
    > .title {
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #374151;
      margin-bottom: 16px;
    }
    .desc {
      font-weight: normal;
      color: #6b7280;
      margin-bottom: 48px;
    }
    .name {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 8px;
      margin-bottom: 34px;
      .label {
        font-weight: 600;
        color: #6b7280;
      }
      .input {
        position: relative;
        input {
          width: -webkit-fill-available;
          border: 1px solid #e5e7eb;
          box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
          border-radius: 4px;
          padding: 8px;
          color: #78787c;
          padding-left: 36px;
        }
        .icon {
          position: absolute;
          left: 8px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    .private {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 50px;
      .txt {
        font-weight: 600;
        color: #6b7280;
      }
      input {
        cursor: pointer;
      }
    }
    .btns {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 16px;
    }
    .normal {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;function lc(){const[e,t]=(0,c.useState)(""),r=(0,mn.v9)((e=>Object.values(e.contacts.byId))),[n,i]=(0,c.useState)([]);(0,c.useEffect)((()=>{if(e){let t=["",...e.toLowerCase(),""].join(".*"),n=new RegExp(t);i(r.filter((e=>n.test(e.name.toLowerCase()))))}else i(r)}),[e]);return{input:e,contacts:n,updateInput:e=>{t(e)}}}function cc(e){let{personal:t=!1,closeModal:r}=e;const{conactsData:i,loginUid:a}=(0,mn.v9)((e=>({conactsData:e.contacts.byId,loginUid:e.authData.uid}))),o=Wr(),s=(0,mn.I0)(),[u,l]=(0,c.useState)({name:"",dsecription:"",members:[a],is_public:!t}),{contacts:d,input:f,updateInput:h}=lc(),[p,{isSuccess:g,isError:m,isLoading:_,data:v}]=eo();(0,c.useEffect)((()=>{m&&n.ZP.error("create new channel failed")}),[m]),(0,c.useEffect)((()=>{g&&(n.ZP.success("create new channel success"),r(),s(Ti(v)),o(`/chat/channel/${v.gid}`))}),[g,v]);const y=e=>{let{currentTarget:t}=e;const{members:r}=u,{uid:n}=t.dataset;let i=r.includes(+n)?r.filter((e=>e!=n)):[...r,+n];l((e=>({...e,members:i})))},b=i[a];if(!b)return null;const{name:F,members:w,is_public:k}=u;return(0,ve.jsx)(wo.Z,{children:(0,ve.jsxs)(uc,{children:[!k&&(0,ve.jsxs)("div",{className:"left",children:[(0,ve.jsx)("div",{className:"search",children:(0,ve.jsx)("input",{value:f,onChange:e=>{h(e.target.value)},placeholder:"Type username to search"})}),d&&(0,ve.jsx)("ul",{className:"users",children:d.map((e=>{const{uid:t}=e,r=w.includes(t);return(0,ve.jsxs)("li",{"data-uid":t,className:"user",onClick:a==t?null:y,children:[(0,ve.jsx)(ql,{disabled:a==t,readOnly:!0,checked:r,name:"cb",id:"cb"}),(0,ve.jsx)(Dl,{uid:t,interactive:!1})]},t)}))})]}),(0,ve.jsxs)("div",{className:"right "+(k?"":"private"),children:[(0,ve.jsx)("h3",{className:"title",children:"Create New Channel"}),(0,ve.jsx)("p",{className:"desc normal",children:k?"This is a public channel, everyone in this team can see it.":"This is a private channel, only select members will bee able to join."}),(0,ve.jsxs)("div",{className:"name",children:[(0,ve.jsx)("span",{className:"label normal",children:"Channel Name"}),(0,ve.jsxs)("div",{className:"input",children:[(0,ve.jsx)("input",{onChange:e=>{l((t=>({...t,name:e.target.value})))},value:F,placeholder:"new channel"}),(0,ve.jsx)(sc,{personal:!k,className:"icon"})]})]}),(0,ve.jsxs)("div",{className:"private",children:[(0,ve.jsx)("span",{className:"txt normal",children:"Private Channel"}),(0,ve.jsx)(Ro,{"data-checked":!k,"data-disabled":!(null!==b&&void 0!==b&&b.is_admin),onClick:()=>{const{is_public:e}=u;l((t=>({...t,is_public:!e})))}})]}),(0,ve.jsxs)("div",{className:"btns",children:[(0,ve.jsx)(bn.Z,{onClick:r,className:"normal cancel",children:"Cancel"}),(0,ve.jsx)(bn.Z,{disabled:_,onClick:()=>{u.name?(u.is_public&&delete u.members,p(u)):(0,n.ZP)("please input channel name")},className:"normal",children:"Create"})]})]})]})})}function dc(e,t,r){void 0===r&&(r=!0);var n=(0,c.useRef)(t),i=(0,c.useCallback)((function(t){e&&e.current&&!e.current.contains(t.target)&&n.current(t)}),[]);(0,c.useEffect)((function(){n.current=t})),(0,c.useEffect)((function(){if(r)return document.addEventListener("click",i,!0),document.addEventListener("ontouchstart",i,!0),function(){document.removeEventListener("click",i,!0),document.removeEventListener("ontouchstart",i,!0)}}),[e,t,r])}const fc=fe.ZP.div`
  display: flex;
  flex-direction: column;
  width: 440px;
  max-height: 402px;
  background: #fff;
  box-shadow: 0px 25px 50px rgba(31, 41, 55, 0.25);
  border-radius: 8px;
  transition: all 0.5s ease;
  overflow-y: scroll;
  .search {
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
    padding: 8px;
    width: -webkit-fill-available;
    input {
      outline: none;
      width: -webkit-fill-available;
      padding: 8px;
      font-size: 14px;
      line-height: 20px;
      border: none;
    }
  }
  .users {
    display: flex;
    flex-direction: column;
    height: 260px;
    padding: 16px 0;
    overflow-y: scroll;
    .user {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 0 8px;
      width: -webkit-fill-available;
      &:hover {
        background: rgba(116, 127, 141, 0.1);
      }
      > a {
        width: 100%;
      }
    }
  }
`;function hc(e){let{closeModal:t}=e;const r=(0,c.useRef)(),{contacts:n,updateInput:i,input:a}=lc();dc(r,t);return(0,ve.jsx)(wo.Z,{children:(0,ve.jsxs)(fc,{ref:r,children:[(0,ve.jsx)("div",{className:"search",children:(0,ve.jsx)("input",{value:a,onChange:e=>{i(e.target.value)},placeholder:"Type username to search"})}),n&&(0,ve.jsx)("ul",{className:"users",children:n.map((e=>{const{uid:r}=e;return(0,ve.jsx)("li",{className:"user",children:(0,ve.jsx)(gn,{onClick:t,to:`/chat/dm/${r}`,children:(0,ve.jsx)(Dl,{uid:r,interactive:!1})})},r)}))})]})})}const pc=fe.ZP.div`
  position: relative;
  min-height: 56px;
  padding: 0 10px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  .search {
    display: flex;
    align-items: center;
    gap: 5px;
    .input {
      width: 100%;
      border: none;
      outline: none;
      background: none;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .add {
    cursor: pointer;
  }
  .popup {
    z-index: 999;
    user-select: none;
    box-shadow: 0px 20px 25px rgba(31, 41, 55, 0.1),
      0px 10px 10px rgba(31, 41, 55, 0.04);
    border-radius: 8px;
    color: #616161;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 4px;
    .item {
      border-radius: 3px;
      display: flex;
      align-items: center;
      gap: 4px;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      cursor: pointer;
      padding: 10px 8px;
      &:hover {
        background: rgba(116, 127, 141, 0.2);
      }
    }
  }
`;function gc(){const e=(0,mn.v9)((e=>e.contacts.byId[e.authData.uid])),[t,r]=(0,c.useState)(!1),[n,i]=(0,c.useState)(!1),[a,o]=(0,c.useState)(!1),s=()=>{i((e=>(e||rl(),!e)))},u=e=>{o(e),r(!0),rl()};return(0,ve.jsxs)(pc,{children:[t&&(0,ve.jsx)(cc,{personal:a,closeModal:()=>{r(!1)}}),n&&(0,ve.jsx)(hc,{closeModal:s}),(0,ve.jsxs)("div",{className:"search",children:[(0,ve.jsx)("img",{src:nc}),(0,ve.jsx)("input",{placeholder:"Search...",className:"input"})]}),(0,ve.jsx)(_l,{interactive:!0,placement:"bottom-end",trigger:"click",content:(0,ve.jsxs)("ul",{className:"popup",children:[(null===e||void 0===e?void 0:e.is_admin)&&(0,ve.jsxs)("li",{className:"item",onClick:u.bind(null,!1),children:[(0,ve.jsx)(sc,{}),"New Channel"]}),(0,ve.jsxs)("li",{className:"item",onClick:u.bind(null,!0),children:[(0,ve.jsx)(sc,{personal:!0}),"New Private Channel"]}),(0,ve.jsxs)("li",{className:"item",onClick:s,children:[(0,ve.jsx)("img",{src:ac,alt:"icon mail"}),"New Message"]})]}),children:(0,ve.jsx)("img",{src:ic,alt:"add icon",className:"add"})})]})}var mc=__webpack_require__(5514),_c=__webpack_require__(1515);const vc=fe.ZP.div`
  background-color: #e5e5e5;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 8px;
  width: 94%;
  width: -webkit-fill-available;
  border-radius: 25px;
  padding: 7px 8px 7px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .profile {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
    .toggle {
    }
    .info {
      display: flex;
      flex-direction: column;
      .name {
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        color: #27272a;
      }
      .id {
        padding: 0 2px;
        font-size: 12px;
        line-height: 18px;
        color: #52525b;
      }
    }
  }
  .settings {
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
      cursor: pointer;
      width: 24px;
      height: 24px;
    }
  }
  position: relative;
  background: #e5e7eb;
  border-radius: var(--br);
  width: 100%;
  /* width: fit-content; */
  /* min-height: 54px; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;

  padding: 14px 18px;
  /* margin: 0 16px; */
  &.markdown {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 0;
    .input {
      grid-column: span 2;
    }
  }
  &.reply {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .input {
    width: 100%;
  }
`;var BG=__webpack_require__(8490),LG=__webpack_require__(7399);const qG=fe.ZP.div`
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #f3f4f6;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(-100%);
  width: 100%;
  padding: 12px 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  .prefix {
    color: #667085;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    em {
      font-weight: bold;
      color: #363f53;
    }
  }
  .content {
    font-weight: 500;
    color: #616161;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 30px;
    display: flex;
    align-items: center;
    .icon {
      width: 15px;
      height: 20px;
    }
    .name {
      margin-left: 5px;
      font-size: 10px;
      color: #555;
    }
  }
  .close {
    background: none;
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
  }
`,zG=e=>{const{content_type:t,content:r,properties:n}=e;let i=null;switch(t){case yn.bT.text:i=r;break;case yn.bT.image:case yn.bT.imageJPG:i=(0,ve.jsx)("img",{className:"pic",src:LG});break;case yn.bT.file:{const{file_type:e,name:t}=n,r=(0,jo.LP)(e,t);i=(0,ve.jsxs)(ve.Fragment,{children:[r,(0,ve.jsx)("span",{className:"name",children:t})]})}}return i};function HG(e){let{id:t,mid:r}=e;const{msg:n,contactsData:i}=(0,mn.v9)((e=>({contactsData:e.contacts.byId,msg:e.message[r]}))),a=(0,mn.I0)();if(!n)return null;const{from_uid:o}=n,s=i[o];return(0,ve.jsxs)(qG,{className:"reply",children:[(0,ve.jsxs)("span",{className:"prefix",children:["Replying to ",(0,ve.jsx)("em",{children:null===s||void 0===s?void 0:s.name})]}),(0,ve.jsx)("span",{className:"content",children:zG(n)}),(0,ve.jsx)("button",{className:"close",onClick:()=>{a((0,Wi.XS)(t))},children:(0,ve.jsx)("img",{src:BG,alt:"close icon"})})]})}function UG(e){let{file:t=null}=e;const[r,n]=(0,c.useState)(null);if((0,c.useEffect)((()=>{if(t){const{type:e,name:r}=t;if((0,jo.om)(t))return void n((0,ve.jsx)("img",{src:URL.createObjectURL(t),alt:"thumb",className:"thumb"}));n((0,jo.LP)(e,r))}}),[t]),!t)return null;const{name:i,size:a}=t;return(0,ve.jsxs)("li",{className:"item",children:[r,(0,ve.jsxs)("div",{className:"right",children:[(0,ve.jsx)("div",{className:"name",children:(0,ve.jsx)("span",{className:"input",children:i})}),(0,ve.jsx)("i",{className:"size",children:(0,jo.td)(a)})]})]})}const WG=(0,fe.ZP)(Bl.Z)`
  .list {
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    .item {
      padding: 16px;
      border: 1px solid rgba(116, 127, 141, 0.2);
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: 16px;
      min-width: 473px;
      .thumb {
        object-fit: cover;
        width: 64px;
        height: 64px;
        border-radius: 6px;
      }
      .right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        .name {
          font-style: normal;
          .input {
            user-select: text;
            line-height: 20px;
            font-size: 14px;
            font-weight: 600;
            margin-right: 8px;
          }
          .tip {
            line-height: 18px;
            font-size: 12px;
            color: #78787c;
          }
        }
        .size {
          font-size: 14px;
          line-height: 20px;
          color: #616161;
        }
      }
    }
  }
`;function VG(e){let{context:t="user",sendTo:r=0,files:n=[],closeModal:i}=e;const a=(0,mn.v9)((e=>e.authData.uid)),{sendImageMessage:o,isSending:s,isSuccess:u}=function(e){let{context:t="user",from:r=null,to:n=null}=e;const[i,{isLoading:a,isSuccess:o,isError:s}]=to(),[u,{isLoading:l,isSuccess:c,isError:d}]=(0,va.bm)(),f="user"==t?u:i;return{sendImageMessage:e=>{if(!e)return;const{name:t,size:i,type:a}=e;f({id:n,content:e,properties:{name:t,size:i,type:a,local_id:(new Date).getTime()},type:"image",from_uid:r})},isError:s||d,isSending:l||a,isSuccess:o||c}}({context:t,from:a,to:r}),{sendFileMessage:l,progress:d,isSending:f,isSuccess:h}=function(e){let{context:t="user",from:r=null,to:n=null}=e;const[i,a]=(0,c.useState)(!1),o=(0,c.useRef)(0),s=(0,c.useRef)(1),[u,{isLoading:l,isSuccess:d}]=ao(),[f,{isLoading:h,isSuccess:p,isError:g}]=oo(),[m,{isLoading:_,isSuccess:v,isError:y}]=to(),[b,{isLoading:F,isSuccess:w,isError:k}]=(0,va.bm)(),E="user"==t?b:m,x=async e=>{const{file_id:t,chunk:r,is_last:n}=e,i=new FormData;return i.append("file_id",t),i.append("chunk_data",r),i.append("chunk_is_last",n),f(i)},C=F||_||l||i;return{progress:C?o.current/s.current:1,sendFileMessage:async e=>{if(!e)return;const{name:t,type:i,size:l}=e,{data:c}=await u();let d=null;if(s.current=1,a(!0),l<=2e6)d=await x({file_id:c,chunk:e,is_last:!0}),o.current=1;else{s.current=Math.ceil(l/yn.Pb);const t=s.current,r=new Array(t);for await(const[n]of r.entries())try{const t=e.slice(yn.Pb*n,yn.Pb*(n+1),i);n==r.length-1?d=await x({file_id:c,chunk:t,is_last:!0}):await x({file_id:c,chunk:t,is_last:!1}),o.current=o.current+1}catch(m){return}}a(!1);const{data:{path:f,size:h,hash:p}}=d,g=JSON.stringify({name:t,size:h,hash:p,path:f});await E({id:n,content:g,type:"file",properties:{file_type:i},from_uid:r})},isError:y||k||g,isSending:C,isSuccess:(v||w)&&d}}({context:t,from:a,to:r});if((0,c.useEffect)((()=>{(h||u)&&i()}),[u,h]),!r)return null;const p=f||s;return(0,ve.jsx)(wo.Z,{children:(0,ve.jsx)(WG,{title:"Upload a file",description:"Photos accept jpg, png, max size limit to 10M.",buttons:(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsx)(bn.Z,{className:"cancel",onClick:i,children:"Cancel"}),(0,ve.jsx)(bn.Z,{className:"upload",disabled:p,onClick:()=>{const e=n[0];(0,jo.om)(e)?o(e):l(e)},children:p?`Uploading (${Math.floor(100*d)}%)`:"Upload"})]}),children:(0,ve.jsx)("ul",{className:"list",children:n.map(((e,t)=>(0,ve.jsx)(UG,{file:e},t)))})})})}var $G;function GG(){return GG=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},GG.apply(this,arguments)}const KG=(e,t)=>{let{title:r,titleId:n,...i}=e;return c.createElement("svg",GG({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?c.createElement("title",{id:n},r):null,$G||($G=c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z",fill:"#667085"})))},ZG=(0,c.forwardRef)(KG);var YG;function XG(){return XG=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},XG.apply(this,arguments)}const QG=(e,t)=>{let{title:r,titleId:n,...i}=e;return c.createElement("svg",XG({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?c.createElement("title",{id:n},r):null,YG||(YG=c.createElement("path",{d:"M3 2H21C21.2652 2 21.5196 2.11706 21.7071 2.32544C21.8946 2.53381 22 2.81643 22 3.11111V20.8889C22 21.1836 21.8946 21.4662 21.7071 21.6746C21.5196 21.8829 21.2652 22 21 22H3C2.73478 22 2.48043 21.8829 2.29289 21.6746C2.10536 21.4662 2 21.1836 2 20.8889V3.11111C2 2.81643 2.10536 2.53381 2.29289 2.32544C2.48043 2.11706 2.73478 2 3 2ZM7 15.8889V11.4444L9 13.6667L11 11.4444V15.8889H13V8.11111H11L9 10.3333L7 8.11111H5V15.8889H7ZM18 12.5556V8.11111H16V12.5556H14L17 15.8889L20 12.5556H18Z",fill:"#667085"})))},JG=(0,c.forwardRef)(QG),eK=fe.ZP.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  /* &.markdown {
    flex-direction: column;
  } */
  .md {
    cursor: pointer;
    display: flex;
    .markdown path {
      fill: #22ccee;
    }
  }
  .add {
    cursor: pointer;
    position: relative;
    width: 24px;
    height: 24px;
    input {
      opacity: 0;
      cursor: pointer;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  filter: drop-shadow(0px 25px 50px rgba(31, 41, 55, 0.25));
  border-radius: 12px;
  .emoji-mart {
    border: none;
    border-radius: 12px;
  }
  .emoji-mart-emoji {
    cursor: pointer;
    span {
      cursor: inherit;
    }
  }
`;function xZ(e){let{onSelect:t,...r}=e;return(0,ve.jsx)(EZ,{children:(0,ve.jsx)(bZ,{showPreview:!1,showSkinTones:!1,onSelect:t,...r})})}var CZ,DZ,SZ,AZ,TZ;function OZ(){return OZ=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},OZ.apply(this,arguments)}const PZ=(e,t)=>{let{title:r,titleId:n,...i}=e;return c.createElement("svg",OZ({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?c.createElement("title",{id:n},r):null,CZ||(CZ=c.createElement("path",{d:"M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z",fill:"#FFCC4D"})),DZ||(DZ=c.createElement("path",{d:"M7.99997 9.33326C6.38975 9.33326 5.32131 9.1457 3.99997 8.88881C3.6982 8.83059 3.11108 8.88881 3.11108 9.7777C3.11108 11.5555 5.15331 13.7777 7.99997 13.7777C10.8462 13.7777 12.8889 11.5555 12.8889 9.7777C12.8889 8.88881 12.3018 8.83015 12 8.88881C10.6786 9.1457 9.6102 9.33326 7.99997 9.33326Z",fill:"#664500"})),SZ||(SZ=c.createElement("path",{d:"M4 9.77783C4 9.77783 5.33333 10.2223 8 10.2223C10.6667 10.2223 12 9.77783 12 9.77783C12 9.77783 11.1111 11.5556 8 11.5556C4.88889 11.5556 4 9.77783 4 9.77783Z",fill:"white"})),AZ||(AZ=c.createElement("path",{d:"M5.33328 7.55545C5.94693 7.55545 6.44439 6.859 6.44439 5.99989C6.44439 5.14078 5.94693 4.44434 5.33328 4.44434C4.71963 4.44434 4.22217 5.14078 4.22217 5.99989C4.22217 6.859 4.71963 7.55545 5.33328 7.55545Z",fill:"#664500"})),TZ||(TZ=c.createElement("path",{d:"M10.6668 7.55545C11.2804 7.55545 11.7779 6.859 11.7779 5.99989C11.7779 5.14078 11.2804 4.44434 10.6668 4.44434C10.0531 4.44434 9.55566 5.14078 9.55566 5.99989C9.55566 6.859 10.0531 7.55545 10.6668 7.55545Z",fill:"#664500"})))},NZ=(0,c.forwardRef)(PZ),MZ=fe.ZP.button`
  outline: none;
  width: fit-content;
  background: none;
  display: flex;
  align-items: center;
  svg {
    width: 22px;
    height: 22px;
  }
  position: relative;
  width: 100%;
  width: -webkit-fill-available;
  margin-top: 16px;
  .toastui-editor-defaultUI {
    border-bottom: none;
    border-radius: 0;
    border-top: 1px solid #d0d5dd;
    border-left: none;
    border-right: none;
  }
  .toastui-editor {
    padding: 16px 0;
    [contenteditable="true"] {
      padding: 0;
    }
  }
  .toastui-editor-md-preview {
    padding-top: 16px;
    .toastui-editor-contents {
      padding: 0;
    }
  }
  .toastui-editor-toolbar {
    display: none;
  }
  .send {
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
`;const Hee=function(e){let{placeholder:t,sendMarkdown:r,setEditorInstance:n}=e;const i=(0,c.useRef)(null),[a]=so();return(0,c.useEffect)((()=>{if(i){const e=i.current.getInstance();e.removeHook("addImageBlobHook"),e.addHook("addImageBlobHook",(async(e,t)=>{const{data:r}=await a(e);t(r)})),n(e)}return()=>{if(i){i.current.getInstance().destroy()}}}),[]),(0,ve.jsxs)(zee,{className:"input",children:[(0,ve.jsx)(Lee,{placeholder:t,ref:i,toolbarItems:[],hideModeSwitch:!0,previewStyle:"vertical",height:"50vh",initialEditType:"markdown",useCommandShortcut:!0}),(0,ve.jsx)(bn.Z,{className:"send small",onClick:()=>{const e=i.current.getInstance();e.getMarkdown().trim()&&(r(e.getMarkdown()),e.reset())},children:"Send"})]})},Uee=fe.ZP.div`
  max-height: 50vh;
  overflow: auto;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #475467;
  > .box {
    display: flex;
    flex-direction: column;
    gap: 16px;
    p {
      padding: 0;
    }
  }
`,Wee=fe.ZP.picture`
  position: relative;
  display: flex;
  width: fit-content;
  max-width: 240px;
  max-height: 240px;
  img {
    width: 100%;
    object-fit: cover;
  }
  .remove {
    background: none;
    position: absolute;
    top: 0;
    right: -20px;
  }
`;const Vee={editableProps:{spellCheck:!1,autoFocus:!0,placeholder:"Type\u2026"},trailingBlock:{type:HD},softBreak:{options:{rules:[{hotkey:"shift+enter",query:{allow:[ES,HD]}}]}},exitBreak:{options:{rules:[{hotkey:"mod+enter",query:{allow:[ES,HD]}}]}},selectOnBackspace:{options:{query:{allow:[ES]}}}};let $ee=jG({[ES]:function(e){let{attributes:t,children:r,element:n}=e;const i=EC(),a=ap.findPath(i,n);return(0,ve.jsxs)(Wee,{...t,children:[r,(0,ve.jsx)("img",{src:n.url}),(0,ve.jsx)("button",{className:"remove",onClick:()=>{of.removeNodes(i,{at:a})},children:(0,ve.jsx)("img",{src:BG,alt:"icon close"})})]})}});const Gee=[{type:HD,children:[{text:""}]}],Kee=e=>{let{id:t="",placeholder:r="Write some markdown...",sendMessages:n}=e;const[i,a]=(0,c.useState)([]),[o,s]=(0,c.useState)(!1),u=(0,c.useRef)(null),l={...Vee.editableProps,className:"box",placeholder:r};nK("Enter",(e=>{if(e.shiftKey||e.ctrlKey||e.altKey||e.isComposing)return!0;e.preventDefault(),n(i);const r=lC(`rustchat_text_editor_${t}`);var a;a=r,of.delete(a,{at:{anchor:_d.start(a,[]),focus:_d.end(a,[])}})}),{target:u,when:!o}),nK([91,93],(e=>{s("keydown"==e.type)}),{eventTypes:["keydown","keyup"],target:u});const d=IC([UD(),xS(),XP(),uS(Vee.softBreak),eM(Vee.trailingBlock),sS(Vee.exitBreak)],{components:$ee}),f=(0,c.useCallback)((async e=>{const t=[];for await(const i of e)if("img"==i.type){const e=await fetch(i.url),r=await e.blob();t.push({type:"image",value:r})}else{const e=t[t.length-1];e&&Array.isArray(e)?t[t.length-1].push({type:"text",value:i.children[0].text}):t.push([{type:"text",value:i.children[0].text}])}const r=t.map((e=>Array.isArray(e)?{type:"text",value:e.map((e=>e.value)).join("\n")}:e)),n=r.filter((e=>{let{value:t}=e;return!!t}));a(n)}),[i]);return(0,ve.jsx)(Uee,{className:"input",ref:u,children:(0,ve.jsx)(OC,{edi:!0,onChange:f,id:`rustchat_text_editor_${t}`,editableProps:{...l,style:{userSelect:"text"}},initialValue:Gee,plugins:d})})},Zee={channel:"#",user:"@"},Yee="text",Xee="markdown";const Qee=function(e){let{name:t,context:r="channel",id:n=""}=e;const[i,a]=(0,c.useState)(null),[o]=co(),s=(0,mn.I0)(),{from_uid:u,replying_mid:l=null,mode:d}=(0,mn.v9)((e=>({mode:e.ui.inputMode,from_uid:e.authData.uid,replying_mid:e.message.replying[n]}))),[f]=(0,va.bm)(),[h]=to(),p="channel"==r?h:f;(0,c.useEffect)((()=>{if(l){const t=lC(`rustchat_text_editor_${r}_${n}`);t&&(e=t,ap.focus(e))}var e}),[l]);const g=`Send to ${Zee[r]}${t} `;return(0,ve.jsxs)(IG,{className:`send ${d} ${l?"reply":""} ${r}`,children:[l&&(0,ve.jsx)(HG,{mid:l,id:n}),(0,ve.jsx)(RZ,{selectEmoji:e=>{if(d==Xee&&i)i.insertText(e);else{const t=lC(`rustchat_text_editor_${r}_${n}`);t&&t.insertText(e)}}}),d==Yee&&(0,ve.jsx)(Kee,{id:`${r}_${n}`,placeholder:g,sendMessages:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(e&&0!=e.length&&n)for await(const t of e){const{type:e,value:i}=t;l?(await o({id:n,reply_mid:l,type:e,content:i,context:r,from_uid:u}),s((0,Wi.XS)(n))):await p({id:n,type:e,content:i,from_uid:u,properties:{local_id:(new Date).getTime()}})}}}),(0,ve.jsx)(tK,{context:r,to:n,mode:d,toggleMode:()=>{s(li(d==Yee?Xee:Yee))}}),d==Xee&&(0,ve.jsx)(Hee,{placeholder:g,setEditorInstance:a,sendMarkdown:e=>{p({id:n,type:"markdown",content:e,from_uid:u,properties:{local_id:(new Date).getTime()}})}})]})};function Jee(){const{dragDropManager:e}=(0,c.useContext)(Gt);return ye(null!=e,"Expected drag drop context"),e}const ete="undefined"!==typeof window?c.useLayoutEffect:c.useEffect;class tte{canDrop(){const e=this.spec,t=this.monitor;return!e.canDrop||e.canDrop(t.getItem(),t)}hover(){const e=this.spec,t=this.monitor;e.hover&&e.hover(t.getItem(),t)}drop(){const e=this.spec,t=this.monitor;if(e.drop)return e.drop(t.getItem(),t)}constructor(e,t){this.spec=e,this.monitor=t}}function rte(e,t,r){const n=Jee(),i=function(e,t){const r=(0,c.useMemo)((()=>new tte(e,t)),[t]);return(0,c.useEffect)((()=>{r.spec=e}),[e]),r}(e,t),a=function(e){const{accept:t}=e;return(0,c.useMemo)((()=>(ye(null!=e.accept,"accept must be defined"),Array.isArray(t)?t:[t])),[t])}(e);ete((function(){const[e,o]=function(e,t,r){const n=r.getRegistry(),i=n.addTarget(e,t);return[i,()=>n.removeTarget(i)]}(a,i,n);return t.receiveHandlerId(e),r.receiveHandlerId(e),o}),[n,t,i,r,a.map((e=>e.toString())).join("|")])}let nte=!1;class ite{receiveHandlerId(e){this.targetId=e}getHandlerId(){return this.targetId}subscribeToStateChange(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}canDrop(){if(!this.targetId)return!1;ye(!nte,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return nte=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{nte=!1}}isOver(e){return!!this.targetId&&this.internalMonitor.isOverTarget(this.targetId,e)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.targetId=null,this.internalMonitor=e.getMonitor()}}function ate(e){if("string"===typeof e.type)return;const t=e.type.displayName||e.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}function ote(e){const t={};return Object.keys(e).forEach((r=>{const n=e[r];if(r.endsWith("Ref"))t[r]=e[r];else{const e=function(e){return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!(0,c.isValidElement)(t)){const n=t;return e(n,r),n}const n=t;ate(n);return ute(n,r?t=>e(t,r):e)}}(n);t[r]=()=>e}})),t}function ste(e,t){"function"===typeof e?e(t):e.current=t}function ute(e,t){const r=e.ref;return ye("string"!==typeof r,"Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),r?(0,c.cloneElement)(e,{ref:e=>{ste(r,e),ste(t,e)}}):(0,c.cloneElement)(e,{ref:t})}class lte{get connectTarget(){return this.dropTarget}reconnect(){const e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();const t=this.dropTarget;this.handlerId&&(t?e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=t,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,t,this.dropTargetOptions)):this.lastConnectedDropTarget=t)}receiveHandlerId(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(e){this.dropTargetOptionsInternal=e}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!function(e,t,r,n){let i=r?r.call(n,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;const a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;const s=Object.prototype.hasOwnProperty.bind(t);for(let u=0;u<a.length;u++){const o=a[u];if(!s(o))return!1;const l=e[o],c=t[o];if(i=r?r.call(n,l,c,o):void 0,!1===i||void 0===i&&l!==c)return!1}return!0}(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(e){this.hooks=ote({dropTarget:(e,t)=>{var r;this.clearDropTarget(),this.dropTargetOptions=t,null!==(r=e)&&"object"===typeof r&&Object.prototype.hasOwnProperty.call(r,"current")?this.dropTargetRef=e:this.dropTargetNode=e,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=e}}function cte(e,t,r){const[n,i]=function(e,t,r){const[n,i]=(0,c.useState)((()=>t(e))),a=(0,c.useCallback)((()=>{const a=t(e);Rj(n,a)||(i(a),r&&r())}),[n,e,r]);return ete(a),[n,a]}(e,t,r);return ete((function(){const t=e.getHandlerId();if(null!=t)return e.subscribeToStateChange(i,{handlerIds:[t]})}),[e,i]),n}function dte(e,t,r){return cte(t,e||(()=>({})),(()=>r.reconnect()))}function fte(e){return(0,c.useMemo)((()=>e.hooks.dropTarget()),[e])}function hte(e,t){const r=function(e,t){const r=[...t||[]];return null==t&&"function"!==typeof e&&r.push(e),(0,c.useMemo)((()=>"function"===typeof e?e():e),r)}(e,t),n=function(){const e=Jee();return(0,c.useMemo)((()=>new ite(e)),[e])}(),i=function(e){const t=Jee(),r=(0,c.useMemo)((()=>new lte(t.getBackend())),[t]);return ete((()=>(r.dropTargetOptions=e||null,r.reconnect(),()=>r.disconnectDropTarget())),[e]),r}(r.options);return rte(r,n,i),[dte(r.collect,n,i),fte(i)]}const pte=fe.F4`
from{
background: transparent;
}
to{
  background: rgba(1, 1, 1, 0.9);
}
`,gte=fe.ZP.div`
  /* todo */
  transition: all 0.5s ease;
  width: 100vw;
  height: 100vh;
  /* background-color: rgba(1, 1, 1, 0.9); */
  animation: ${pte} 0.3s ease-in-out forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    img {
      max-width: 70vw;
      max-height: 80vh;
    }
    .origin {
      font-weight: bold;
      font-size: 14px;
      color: #aaa;
      &:hover {
        text-decoration: underline;
        color: #fff;
      }
    }
  }
`;function mte(e){let{image:t=null,closeModal:r}=e;const n=(0,c.useRef)();return dc(n,r),nK("Escape",(()=>{r()}),{eventTypes:["keyup"]}),t?(0,ve.jsx)(wo.Z,{children:(0,ve.jsx)(gte,{children:(0,ve.jsxs)("div",{className:"box",ref:n,children:[(0,ve.jsx)("img",{src:t,alt:"preview image",className:"animate__animated animate__fadeIn animate__faster"}),(0,ve.jsx)("a",{className:"origin",href:t,target:"_blank",rel:"noreferrer",children:"Download original"})]})})}):null}const _te=fe.ZP.article`
  position: relative;
  width: 100%;
  background: #fff;
  height: 100vh;
  > .head {
    height: 56px;
    padding: 0 20px;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
  }
  > .main {
    height: calc(100vh - 56px);
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
    .members {
      box-shadow: inset 0px 10px 2px -10px rgba(0, 0, 0, 0.1);
      /* margin-top: 1px; */
      /* border-top: 1px solid transparent; */
    }
  }
  .drag_tip {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    visibility: hidden;
    /* pointer-events: none; */
    &.visible {
      visibility: visible;
    }
    .box {
      padding: 16px;
      filter: drop-shadow(0px 25px 50px rgba(31, 41, 55, 0.25));
      border-radius: 8px;
      background: #52edff;
      .inner {
        padding: 16px;
        padding-top: 64px;
        border: 2px dashed #a5f3fc;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        .head {
          font-weight: 600;
          font-size: 20px;
          line-height: 30px;
        }
        .intro {
          font-weight: normal;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
`;function vte(e){let{children:t,header:r,contacts:n=null,dropFiles:i=[],context:a="channel",to:o=null}=e;const s=(0,c.useRef)(null),[u,l]=(0,c.useState)([]),[d,f]=(0,c.useState)(null),[{isActive:h},p]=hte((()=>({accept:[sr],drop(e){let{files:t}=e;t.length&&l((e=>[...e,...t]))},collect:e=>({isActive:e.canDrop()&&e.isOver()})})));(0,c.useEffect)((()=>{i.length&&l((e=>[...e,...i]))}),[i]);return(0,c.useEffect)((()=>{if(s){s.current.addEventListener("click",(e=>{const{target:t}=e;1==t.nodeType&&t.classList.contains("preview")&&f(t.dataset.origin||t.src)}),!0)}}),[]),(0,ve.jsxs)(ve.Fragment,{children:[d&&(0,ve.jsx)(mte,{image:d,closeModal:()=>{f(null)}}),(0,ve.jsxs)(_te,{ref:p,children:[(0,ve.jsx)("header",{className:"head",children:r}),(0,ve.jsxs)("main",{className:"main",ref:s,children:[t,n&&(0,ve.jsx)("div",{className:"members",children:n})]}),(0,ve.jsx)("div",{className:"drag_tip "+(h?"visible animate__animated animate__fadeIn":""),children:(0,ve.jsx)("div",{className:"box "+(h?"animate__animated animate__bounceIn":""),children:(0,ve.jsxs)("div",{className:"inner",children:[(0,ve.jsx)("h4",{className:"head",children:"Upload to #Channel"}),(0,ve.jsx)("span",{className:"intro",children:"Photos accept jpg, png, max size limit to 10M."})]})})})]}),0!==u.length&&(0,ve.jsx)(VG,{context:a,files:u,sendTo:o,closeModal:()=>{l([])}})]})}const yte=fe.ZP.hr`
  display: block;
  position: relative;
  border: 0;
  border-top: 1px solid #e3e5e8;
  margin: 25px 0;
  &:before {
    background: #fff;
    padding: 2px 4px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    content: attr(data-content);
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #78787c;
  }
`;function bte(e){let{content:t}=e;return t?(0,ve.jsx)(yte,{"data-content":t}):null}var Fte=__webpack_require__(5095),wte=__webpack_require__.n(Fte);var kte,Ete,xte={root:null,rootMargin:"0px 0px 0px 0px",threshold:[0,1]};function Cte(){return Cte=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Cte.apply(this,arguments)}const Dte=(e,t)=>{let{title:r,titleId:n,...i}=e;return c.createElement("svg",Cte({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?c.createElement("title",{id:n},r):null,kte||(kte=c.createElement("g",{clipPath:"url(#clip0_7924_2562)"},c.createElement("path",{d:"M15.5359 7.96249C15.5359 7.73893 15.4826 7.52916 15.3932 7.33849C14.7972 5.41582 12.007 5.55627 8.03811 5.46249C7.37455 5.44693 7.75411 4.66338 7.987 2.94338C8.13855 1.82471 7.41722 0.106934 6.20478 0.106934C4.20566 0.106934 6.12878 1.68382 4.36122 5.58338C3.41678 7.66693 1.30566 6.49982 1.30566 8.59271V13.3567C1.30566 14.1714 1.38566 14.9545 2.53144 15.0834C3.64211 15.2083 3.39233 15.9998 4.99455 15.9998H13.0141C13.831 15.9998 14.4954 15.3349 14.4954 14.518C14.4954 14.1794 14.3768 13.8709 14.1852 13.6212C14.6386 13.3674 14.9497 12.8883 14.9497 12.3327C14.9497 11.9949 14.8314 11.6865 14.6403 11.4372C15.095 11.1838 15.407 10.7043 15.407 10.1478C15.407 9.74382 15.2434 9.3776 14.9799 9.1096C15.3163 8.83805 15.5359 8.42738 15.5359 7.96249Z",fill:"#FFDB5E"}),c.createElement("path",{d:"M10.231 9.44411H14.055C14.575 9.44411 15.063 9.16589 15.3288 8.71833C15.4381 8.53389 15.3772 8.29522 15.1923 8.18545C15.0079 8.07567 14.7692 8.13745 14.6594 8.32189C14.5337 8.53478 14.3012 8.66633 14.0546 8.66633H10.139C9.751 8.66633 9.43545 8.35078 9.43545 7.96278C9.43545 7.57478 9.751 7.25922 10.139 7.25922H12.7554C12.9701 7.25922 13.1443 7.085 13.1443 6.87033C13.1443 6.65567 12.9701 6.48145 12.7554 6.48145H10.1386C9.32167 6.48145 8.65723 7.14589 8.65723 7.96278C8.65723 8.41833 8.86834 8.82144 9.19278 9.09345C8.91945 9.36233 8.74923 9.73567 8.74923 10.1481C8.74923 10.605 8.96167 11.0094 9.28789 11.281C9.01634 11.5494 8.84789 11.9214 8.84789 12.333C8.84789 12.8308 9.09634 13.2699 9.47412 13.5388C9.24123 13.8006 9.09545 14.1414 9.09545 14.5183C9.09545 15.3352 9.75989 15.9997 10.5768 15.9997H13.0141C13.5341 15.9997 14.0226 15.7219 14.2883 15.2743C14.3981 15.0899 14.3372 14.8512 14.1528 14.7414C13.9679 14.6326 13.7292 14.6926 13.6199 14.877C13.4932 15.0899 13.2608 15.2219 13.0141 15.2219H10.5768C10.1888 15.2219 9.87323 14.9063 9.87323 14.5183C9.87323 14.1303 10.1888 13.8148 10.5768 13.8148H13.4683C13.9883 13.8148 14.4772 13.5366 14.7426 13.089C14.8523 12.9041 14.7914 12.6654 14.607 12.5561C14.4208 12.4446 14.183 12.5072 14.0741 12.6917C13.9457 12.9081 13.719 13.037 13.4683 13.037H10.3292C9.94123 13.037 9.62567 12.721 9.62567 12.333C9.62567 11.945 9.94123 11.6294 10.3292 11.6294H13.9252C14.4452 11.6294 14.9337 11.3517 15.1994 10.9041C15.3092 10.7197 15.2483 10.481 15.0639 10.3712C14.8786 10.2619 14.6403 10.3223 14.531 10.5068C14.4026 10.7228 14.1759 10.8517 13.9252 10.8517H10.231C9.843 10.8517 9.52745 10.5361 9.52745 10.1481C9.52745 9.76011 9.84256 9.44411 10.231 9.44411Z",fill:"#EE9547"}))),Ete||(Ete=c.createElement("defs",null,c.createElement("clipPath",{id:"clip0_7924_2562"},c.createElement("rect",{width:16,height:16,fill:"white"})))))},Ste=(0,c.forwardRef)(Dte);var Ate,Tte;function Ote(){return Ote=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ote.apply(this,arguments)}const Pte=(e,t)=>{let{title:r,titleId:n,...i}=e;return c.createElement("svg",Ote({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?c.createElement("title",{id:n},r):null,Ate||(Ate=c.createElement("path",{d:"M15.5359 8.03733C15.5359 8.26089 15.4826 8.47067 15.3932 8.66133C14.7972 10.584 12.007 10.4436 8.03811 10.5373C7.37455 10.5529 7.75411 11.3364 7.987 13.0564C8.13855 14.1751 7.41722 15.8929 6.20478 15.8929C4.20566 15.8929 6.12878 14.316 4.36122 10.4164C3.41678 8.33289 1.30566 9.5 1.30566 7.40711V2.64356C1.30566 1.82889 1.38566 1.04578 2.53144 0.916889C3.64211 0.791556 3.39233 0 4.99455 0H13.0141C13.831 0 14.4954 0.664889 14.4954 1.48178C14.4954 1.82044 14.3768 2.12889 14.1852 2.37867C14.6386 2.63244 14.9497 3.11156 14.9497 3.66711C14.9497 4.00489 14.8314 4.31333 14.6403 4.56267C15.095 4.816 15.407 5.29556 15.407 5.852C15.407 6.256 15.2434 6.62222 14.9799 6.89022C15.3163 7.16178 15.5359 7.57244 15.5359 8.03733Z",fill:"#FFDB5E"})),Tte||(Tte=c.createElement("path",{d:"M10.231 6.55604H14.055C14.575 6.55604 15.063 6.83427 15.3288 7.28182C15.4381 7.46627 15.3772 7.70493 15.1923 7.81471C15.0079 7.92449 14.7692 7.86271 14.6594 7.67827C14.5337 7.46538 14.3012 7.33382 14.0546 7.33382H10.139C9.751 7.33382 9.43545 7.64938 9.43545 8.03738C9.43545 8.42538 9.751 8.74093 10.139 8.74093H12.7554C12.9701 8.74093 13.1443 8.91515 13.1443 9.12982C13.1443 9.34449 12.9701 9.51871 12.7554 9.51871H10.1386C9.32167 9.51871 8.65723 8.85427 8.65723 8.03738C8.65723 7.58182 8.86834 7.17871 9.19278 6.90671C8.91945 6.63782 8.74923 6.26449 8.74923 5.85204C8.74923 5.39515 8.96167 4.99071 9.28789 4.71915C9.01634 4.45071 8.84789 4.07871 8.84789 3.66715C8.84789 3.16938 9.09634 2.73027 9.47412 2.46138C9.24123 2.1996 9.09545 1.85871 9.09545 1.48182C9.09545 0.664933 9.75989 0.000488281 10.5768 0.000488281H13.0141C13.5341 0.000488281 14.0226 0.278266 14.2883 0.725822C14.3981 0.910266 14.3372 1.14893 14.1528 1.25871C13.9679 1.3676 13.7292 1.3076 13.6199 1.12315C13.4932 0.910266 13.2608 0.778266 13.0141 0.778266H10.5768C10.1888 0.778266 9.87323 1.09382 9.87323 1.48182C9.87323 1.86982 10.1888 2.18538 10.5768 2.18538H13.4683C13.9883 2.18538 14.4772 2.4636 14.7426 2.91115C14.8523 3.09604 14.7914 3.33471 14.607 3.44404C14.4208 3.5556 14.183 3.49293 14.0741 3.30849C13.9457 3.09204 13.719 2.96315 13.4683 2.96315H10.3292C9.94123 2.96315 9.62567 3.27915 9.62567 3.66715C9.62567 4.05515 9.94123 4.37071 10.3292 4.37071H13.9252C14.4452 4.37071 14.9337 4.64849 15.1994 5.09604C15.3092 5.28049 15.2483 5.51915 15.0639 5.62893C14.8786 5.73827 14.6403 5.67782 14.531 5.49338C14.4026 5.27738 14.1759 5.14849 13.9252 5.14849H10.231C9.843 5.14849 9.52745 5.46404 9.52745 5.85204C9.52745 6.24004 9.84256 6.55604 10.231 6.55604Z",fill:"#EE9547"})))},Nte=(0,c.forwardRef)(Pte);var Mte,Rte;function jte(){return jte=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},jte.apply(this,arguments)}const Ite=(e,t)=>{let{title:r,titleId:n,...i}=e;return c.createElement("svg",jte({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?c.createElement("title",{id:n},r):null,Mte||(Mte=c.createElement("g",{clipPath:"url(#clip0_7924_2577)"},c.createElement("path",{d:"M5.16703 3.32813C5.11725 3.37791 5.07947 3.43791 5.04792 3.50369L5.04436 3.50013L0.0594748 14.7295L0.0643636 14.7344C-0.0280808 14.9135 0.126586 15.2779 0.443475 15.5952C0.760364 15.9121 1.12481 16.0668 1.30392 15.9744L1.30836 15.9788L12.5377 10.9935L12.5341 10.9895C12.5995 10.9584 12.6595 10.9206 12.7097 10.8699C13.4039 10.1757 12.2781 7.92458 10.1959 5.84191C8.11281 3.75924 5.8617 2.63391 5.16703 3.32813Z",fill:"#DD2E44"}),c.createElement("path",{d:"M5.7777 5.3335L0.184808 14.4473L0.0594748 14.7295L0.0643636 14.7344C-0.0280808 14.9135 0.126586 15.2779 0.443475 15.5953C0.546586 15.6984 0.653697 15.7766 0.758586 15.8428L7.55548 7.55572L5.7777 5.3335Z",fill:"#EA596E"}),c.createElement("path",{d:"M10.2275 5.80713C12.3031 7.88358 13.4555 10.0969 12.8004 10.7511C12.1457 11.4062 9.93241 10.2542 7.85552 8.17869C5.77952 6.10224 4.62752 3.88802 5.28219 3.23335C5.9373 2.57869 8.15063 3.73069 10.2275 5.80713Z",fill:"#A0041E"}),c.createElement("path",{d:"M8.26223 6.04852C8.17379 6.12008 8.05823 6.15741 7.93601 6.14408C7.55023 6.1023 7.22579 5.96808 6.99868 5.75608C6.75823 5.53163 6.63956 5.2303 6.67201 4.92852C6.7289 4.39874 7.26045 3.91252 8.16668 4.0103C8.51912 4.04808 8.67645 3.93474 8.68179 3.88052C8.68801 3.82674 8.55868 3.6823 8.20623 3.64408C7.82045 3.6023 7.49601 3.46808 7.26845 3.25608C7.02801 3.03163 6.9089 2.7303 6.94179 2.42852C6.99957 1.89874 7.53068 1.41252 8.43601 1.51074C8.6929 1.5383 8.82845 1.48541 8.88579 1.45119C8.93157 1.42319 8.94979 1.39652 8.95157 1.38097C8.9569 1.32719 8.82934 1.18274 8.47601 1.14452C8.23201 1.11786 8.05512 0.899188 8.08223 0.654744C8.10845 0.410744 8.32668 0.2343 8.57156 0.260966C9.4769 0.3583 9.8929 0.9463 9.83556 1.47652C9.77779 2.00719 9.24668 2.49252 8.34045 2.39519C8.08357 2.36719 7.94934 2.42052 7.89157 2.45474C7.84579 2.4823 7.82712 2.50941 7.82534 2.52452C7.81957 2.57874 7.94801 2.72274 8.30134 2.76097C9.20668 2.85874 9.62268 3.4463 9.56534 3.97652C9.50801 4.5063 8.9769 4.99252 8.07112 4.8943C7.81423 4.86674 7.67912 4.92008 7.62134 4.95386C7.57512 4.9823 7.55734 5.00897 7.55556 5.02408C7.54979 5.07786 7.67823 5.2223 8.03112 5.26052C8.27468 5.28719 8.45201 5.5063 8.4249 5.7503C8.41245 5.87208 8.35068 5.97741 8.26223 6.04852Z",fill:"#AA8DD8"}),c.createElement("path",{d:"M13.6272 10.1588C14.504 9.91122 15.1089 10.3023 15.2529 10.8157C15.3969 11.3285 15.0849 11.9779 14.2085 12.2246C13.8663 12.3205 13.7636 12.4841 13.7774 12.5361C13.7925 12.5886 13.9663 12.6748 14.3076 12.5783C15.184 12.3317 15.7889 12.7228 15.9329 13.2357C16.0778 13.749 15.7649 14.3974 14.888 14.6446C14.5463 14.7406 14.4432 14.9046 14.4583 14.9566C14.4729 15.0086 14.6463 15.0948 14.988 14.9988C15.2236 14.9326 15.4698 15.0699 15.536 15.3059C15.6018 15.5423 15.4645 15.7877 15.228 15.8543C14.352 16.101 13.7467 15.7108 13.6018 15.197C13.4578 14.6841 13.7703 14.0357 14.6476 13.7885C14.9898 13.6921 15.0925 13.529 15.0774 13.4766C15.0632 13.4246 14.8898 13.3379 14.5485 13.4339C13.6712 13.681 13.0667 13.2908 12.9223 12.7766C12.7778 12.2637 13.0903 11.6152 13.9672 11.3677C14.3085 11.2721 14.4112 11.1077 14.3969 11.0561C14.3818 11.0037 14.2089 10.9174 13.8672 11.0134C13.6307 11.0801 13.3858 10.9423 13.3192 10.7063C13.2529 10.4708 13.3907 10.2254 13.6272 10.1588Z",fill:"#77B255"}),c.createElement("path",{d:"M10.2226 8.96008C10.092 8.96008 9.96309 8.90274 9.87509 8.79341C9.72176 8.60141 9.75331 8.32185 9.94443 8.16852C10.0413 8.09074 12.3524 6.27563 15.6186 6.74274C15.8618 6.77741 16.0306 7.0023 15.996 7.24541C15.9613 7.48808 15.7382 7.65874 15.4929 7.6223C12.6071 7.21252 10.5209 8.8463 10.5004 8.86274C10.4178 8.92852 10.32 8.96008 10.2226 8.96008Z",fill:"#AA8DD8"}),c.createElement("path",{d:"M2.55737 7.11115C2.51515 7.11115 2.47204 7.10493 2.42937 7.09249C2.19426 7.02182 2.06093 6.77426 2.1316 6.53915C2.63515 4.86226 3.0916 2.18626 2.53071 1.48848C2.46804 1.40937 2.37337 1.3316 2.15649 1.34804C1.7396 1.38004 1.77915 2.2596 1.7796 2.26848C1.79826 2.51337 1.61426 2.72671 1.36982 2.74493C1.12137 2.76004 0.911597 2.5796 0.893375 2.33471C0.847597 1.72182 1.03826 0.541373 2.08982 0.461818C2.55915 0.426262 2.94893 0.589373 3.22404 0.931596C4.27782 2.24315 3.20804 6.04537 2.98315 6.79471C2.92537 6.98715 2.74849 7.11115 2.55737 7.11115Z",fill:"#77B255"}),c.createElement("path",{d:"M11.3334 4.889C11.7016 4.889 12.0001 4.59052 12.0001 4.22233C12.0001 3.85414 11.7016 3.55566 11.3334 3.55566C10.9652 3.55566 10.6667 3.85414 10.6667 4.22233C10.6667 4.59052 10.9652 4.889 11.3334 4.889Z",fill:"#5C913B"}),c.createElement("path",{d:"M0.888889 8.88911C1.37981 8.88911 1.77778 8.49114 1.77778 8.00022C1.77778 7.5093 1.37981 7.11133 0.888889 7.11133C0.397969 7.11133 0 7.5093 0 8.00022C0 8.49114 0.397969 8.88911 0.888889 8.88911Z",fill:"#9266CC"}),c.createElement("path",{d:"M14.4445 9.33333C14.8127 9.33333 15.1112 9.03486 15.1112 8.66667C15.1112 8.29848 14.8127 8 14.4445 8C14.0763 8 13.7778 8.29848 13.7778 8.66667C13.7778 9.03486 14.0763 9.33333 14.4445 9.33333Z",fill:"#5C913B"}),c.createElement("path",{d:"M10.4445 14.6668C10.8127 14.6668 11.1112 14.3684 11.1112 14.0002C11.1112 13.632 10.8127 13.3335 10.4445 13.3335C10.0763 13.3335 9.77783 13.632 9.77783 14.0002C9.77783 14.3684 10.0763 14.6668 10.4445 14.6668Z",fill:"#5C913B"}),c.createElement("path",{d:"M12.4446 2.66645C12.9355 2.66645 13.3334 2.26848 13.3334 1.77756C13.3334 1.28664 12.9355 0.888672 12.4446 0.888672C11.9536 0.888672 11.5557 1.28664 11.5557 1.77756C11.5557 2.26848 11.9536 2.66645 12.4446 2.66645Z",fill:"#FFCC4D"}),c.createElement("path",{d:"M14.4445 4.44466C14.8127 4.44466 15.1112 4.14618 15.1112 3.77799C15.1112 3.4098 14.8127 3.11133 14.4445 3.11133C14.0763 3.11133 13.7778 3.4098 13.7778 3.77799C13.7778 4.14618 14.0763 4.44466 14.4445 4.44466Z",fill:"#FFCC4D"}),c.createElement("path",{d:"M13.111 6.22201C13.4792 6.22201 13.7777 5.92353 13.7777 5.55534C13.7777 5.18715 13.4792 4.88867 13.111 4.88867C12.7428 4.88867 12.4443 5.18715 12.4443 5.55534C12.4443 5.92353 12.7428 6.22201 13.111 6.22201Z",fill:"#FFCC4D"}),c.createElement("path",{d:"M3.33341 11.1112C3.7016 11.1112 4.00008 10.8127 4.00008 10.4445C4.00008 10.0763 3.7016 9.77783 3.33341 9.77783C2.96522 9.77783 2.66675 10.0763 2.66675 10.4445C2.66675 10.8127 2.96522 11.1112 3.33341 11.1112Z",fill:"#FFCC4D"}))),Rte||(Rte=c.createElement("defs",null,c.createElement("clipPath",{id:"clip0_7924_2577"},c.createElement("rect",{width:16,height:16,fill:"white"})))))},Bte=(0,c.forwardRef)(Ite);var Lte,qte,zte,Hte;function Ute(){return Ute=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ute.apply(this,arguments)}const Wte=(e,t)=>{let{title:r,titleId:n,...i}=e;return c.createElement("svg",Ute({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?c.createElement("title",{id:n},r):null,Lte||(Lte=c.createElement("path",{d:"M16 8C16 12.4182 12.4182 16 8 16C3.58222 16 0 12.4182 0 8C0 3.58222 3.58222 0 8 0C12.4182 0 16 3.58222 16 8Z",fill:"#FFCC4D"})),qte||(qte=c.createElement("path",{d:"M5.11111 8.88894C5.72476 8.88894 6.22222 8.1925 6.22222 7.33339C6.22222 6.47428 5.72476 5.77783 5.11111 5.77783C4.49746 5.77783 4 6.47428 4 7.33339C4 8.1925 4.49746 8.88894 5.11111 8.88894Z",fill:"#664500"})),zte||(zte=c.createElement("path",{d:"M10.8889 8.88894C11.5026 8.88894 12.0001 8.1925 12.0001 7.33339C12.0001 6.47428 11.5026 5.77783 10.8889 5.77783C10.2753 5.77783 9.77783 6.47428 9.77783 7.33339C9.77783 8.1925 10.2753 8.88894 10.8889 8.88894Z",fill:"#664500"})),Hte||(Hte=c.createElement("path",{d:"M5.33325 12.4443C6.22214 10.2221 11.111 10.2221 11.111 11.111C11.111 11.5554 7.55547 10.6666 5.33325 12.4443Z",fill:"#664500"})))},Vte=(0,c.forwardRef)(Wte);var $te;function Gte(){return Gte=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Gte.apply(this,arguments)}const Kte=(e,t)=>{let{title:r,titleId:n,...i}=e;return c.createElement("svg",Gte({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?c.createElement("title",{id:n},r):null,$te||($te=c.createElement("path",{d:"M15.9488 5.25931C15.9488 2.83709 13.9852 0.873535 11.5635 0.873535C10.0932 0.873535 8.79591 1.59931 7.99991 2.70865C7.20391 1.59931 5.90658 0.873535 4.4368 0.873535C2.01458 0.873535 0.0510254 2.83665 0.0510254 5.25931C0.0510254 5.60242 0.0945809 5.93487 0.169248 6.25531C0.778136 10.0389 4.9848 14.0304 7.99991 15.1264C11.0146 14.0304 15.2217 10.0389 15.8297 6.25576C15.9052 5.93531 15.9488 5.60287 15.9488 5.25931Z",fill:"#DD2E44"})))},Zte=(0,c.forwardRef)(Kte);var Yte,Xte,Qte,Jte,ere,tre;function rre(){return rre=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},rre.apply(this,arguments)}const nre=(e,t)=>{let{title:r,titleId:n,...i}=e;return c.createElement("svg",rre({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?c.createElement("title",{id:n},r):null,Yte||(Yte=c.createElement("path",{d:"M0.444336 7.55545L3.99989 4.44434L11.111 4.88878L11.5554 11.9999L8.44434 15.5554C8.44434 15.5554 8.44478 12.8892 5.77767 10.2221C3.11056 7.555 0.444336 7.55545 0.444336 7.55545Z",fill:"#A0041E"})),Xte||(Xte=c.createElement("path",{d:"M0.432382 15.5555C0.432382 15.5555 0.416382 12.0093 1.75905 10.6666C3.10171 9.32395 6.6666 9.41639 6.6666 9.41639C6.6666 9.41639 6.66616 12.8888 5.33283 14.2222C3.99949 15.5555 0.432382 15.5555 0.432382 15.5555Z",fill:"#FFAC33"})),Qte||(Qte=c.createElement("path",{d:"M3.99946 13.7777C4.9813 13.7777 5.77724 12.9818 5.77724 11.9999C5.77724 11.0181 4.9813 10.2222 3.99946 10.2222C3.01762 10.2222 2.22168 11.0181 2.22168 11.9999C2.22168 12.9818 3.01762 13.7777 3.99946 13.7777Z",fill:"#FFCC4D"})),Jte||(Jte=c.createElement("path",{d:"M15.9995 0C15.9995 0 11.5551 0 6.22175 4.44444C3.55509 6.66667 3.55509 10.6667 4.44398 11.5556C5.33287 12.4444 9.33287 12.4444 11.5551 9.77778C15.9995 4.44444 15.9995 0 15.9995 0Z",fill:"#55ACEE"})),ere||(ere=c.createElement("path",{d:"M11.9996 2.22217C11.2782 2.22217 10.6605 2.65372 10.3813 3.27106C10.6045 3.17017 10.8502 3.11106 11.1107 3.11106C12.0925 3.11106 12.8885 3.90706 12.8885 4.88883C12.8885 5.14928 12.8293 5.39506 12.7289 5.61772C13.3462 5.33906 13.7773 4.72128 13.7773 3.99995C13.7773 3.01817 12.9813 2.22217 11.9996 2.22217Z",fill:"black"})),tre||(tre=c.createElement("path",{d:"M3.55566 12.4444C3.55566 12.4444 3.55566 10.6666 4.00011 10.2222C4.44455 9.77772 9.77833 5.33372 10.2223 5.77772C10.6663 6.22172 6.22189 11.5555 5.77744 11.9999C5.333 12.4444 3.55566 12.4444 3.55566 12.4444Z",fill:"#A0041E"})))},ire=(0,c.forwardRef)(nre);var are,ore,sre,ure,lre,cre,dre,fre,hre,pre;function gre(){return gre=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},gre.apply(this,arguments)}const mre=(e,t)=>{let{title:r,titleId:n,...i}=e;return c.createElement("svg",gre({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?c.createElement("title",{id:n},r):null,are||(are=c.createElement("path",{d:"M3.92358 13.9025C5.87573 13.9025 7.45825 11.2598 7.45825 7.99984C7.45825 4.73988 5.87573 2.09717 3.92358 2.09717C1.97144 2.09717 0.388916 4.73988 0.388916 7.99984C0.388916 11.2598 1.97144 13.9025 3.92358 13.9025Z",fill:"#F5F8FA"})),ore||(ore=c.createElement("path",{d:"M3.92366 14.2362C1.75478 14.2362 0.0556641 11.497 0.0556641 8.00016C0.0556641 4.50327 1.75478 1.76416 3.92366 1.76416C6.09255 1.76416 7.79166 4.50327 7.79166 8.00016C7.79166 11.497 6.09255 14.2362 3.92366 14.2362ZM3.92366 2.43083C2.15833 2.43083 0.722331 4.92905 0.722331 8.00016C0.722331 11.0713 2.15833 13.5695 3.92366 13.5695C5.689 13.5695 7.125 11.0713 7.125 8.00016C7.125 4.92905 5.689 2.43083 3.92366 2.43083Z",fill:"#E1E8ED"})),sre||(sre=c.createElement("path",{d:"M2.93076 10.2043C4.14824 10.2043 5.13521 9.21734 5.13521 7.99985C5.13521 6.78237 4.14824 5.79541 2.93076 5.79541C1.71328 5.79541 0.726318 6.78237 0.726318 7.99985C0.726318 9.21734 1.71328 10.2043 2.93076 10.2043Z",fill:"#8899A6"})),ure||(ure=c.createElement("path",{d:"M2.93064 9.58442C3.8057 9.58442 4.51508 8.87504 4.51508 7.99997C4.51508 7.12491 3.8057 6.41553 2.93064 6.41553C2.05557 6.41553 1.34619 7.12491 1.34619 7.99997C1.34619 8.87504 2.05557 9.58442 2.93064 9.58442Z",fill:"#292F33"})),lre||(lre=c.createElement("path",{d:"M3.5161 7.49754C3.86613 7.49754 4.14988 7.21378 4.14988 6.86376C4.14988 6.51373 3.86613 6.22998 3.5161 6.22998C3.16608 6.22998 2.88232 6.51373 2.88232 6.86376C2.88232 7.21378 3.16608 7.49754 3.5161 7.49754Z",fill:"#F5F8FA"})),cre||(cre=c.createElement("path",{d:"M12.104 13.9025C14.0561 13.9025 15.6387 11.2598 15.6387 7.99984C15.6387 4.73988 14.0561 2.09717 12.104 2.09717C10.1519 2.09717 8.56934 4.73988 8.56934 7.99984C8.56934 11.2598 10.1519 13.9025 12.104 13.9025Z",fill:"#F5F8FA"})),dre||(dre=c.createElement("path",{d:"M12.1041 14.2362C9.93519 14.2362 8.23608 11.497 8.23608 8.00016C8.23608 4.50327 9.93519 1.76416 12.1041 1.76416C14.273 1.76416 15.9725 4.50327 15.9725 8.00016C15.9725 11.497 14.273 14.2362 12.1041 14.2362ZM12.1041 2.43083C10.3388 2.43083 8.90275 4.92949 8.90275 8.00016C8.90275 11.0713 10.3388 13.5695 12.1041 13.5695C13.8694 13.5695 15.3059 11.0713 15.3059 8.00016C15.3059 4.92905 13.8694 2.43083 12.1041 2.43083Z",fill:"#E1E8ED"})),fre||(fre=c.createElement("path",{d:"M11.1112 10.2043C12.3287 10.2043 13.3156 9.21734 13.3156 7.99985C13.3156 6.78237 12.3287 5.79541 11.1112 5.79541C9.8937 5.79541 8.90674 6.78237 8.90674 7.99985C8.90674 9.21734 9.8937 10.2043 11.1112 10.2043Z",fill:"#8899A6"})),hre||(hre=c.createElement("path",{d:"M11.1111 9.58442C11.9861 9.58442 12.6955 8.87504 12.6955 7.99997C12.6955 7.12491 11.9861 6.41553 11.1111 6.41553C10.236 6.41553 9.52661 7.12491 9.52661 7.99997C9.52661 8.87504 10.236 9.58442 11.1111 9.58442Z",fill:"#292F33"})),pre||(pre=c.createElement("path",{d:"M11.6965 7.49754C12.0465 7.49754 12.3303 7.21378 12.3303 6.86376C12.3303 6.51373 12.0465 6.22998 11.6965 6.22998C11.3465 6.22998 11.0627 6.51373 11.0627 6.86376C11.0627 7.21378 11.3465 7.49754 11.6965 7.49754Z",fill:"#F5F8FA"})))},_re=(0,c.forwardRef)(mre),vre={"\ud83d\udc4d":(0,ve.jsx)(Ste,{className:"emoji"}),"\ud83d\udc4e":(0,ve.jsx)(Nte,{className:"emoji"}),"\ud83d\ude04":(0,ve.jsx)(NZ,{className:"emoji"}),"\ud83d\udc40":(0,ve.jsx)(_re,{className:"emoji"}),"\ud83d\ude80":(0,ve.jsx)(ire,{className:"emoji"}),"\u2764\ufe0f":(0,ve.jsx)(Zte,{className:"emoji"}),"\ud83d\ude41":(0,ve.jsx)(Vte,{className:"emoji"}),"\ud83c\udf89":(0,ve.jsx)(Bte,{className:"emoji"})};function yre(e){let{native:t=""}=e;return t&&vre[t]?vre[t]:null}const bre=fe.ZP.div`
  background: none;
  z-index: 999;
  .emojis {
    padding: 4px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    background: #fff;
    filter: drop-shadow(0px 25px 50px rgba(31, 41, 55, 0.25));
    border-radius: 12px;
    &.reacting {
      opacity: 0.6;
    }
    .wrapper {
      display: flex;
      cursor: pointer;
      border-radius: 8px;
      padding: 4px;
      &:hover,
      &.reacted {
        background-color: #f5f6f7;
      }
      > .emoji {
        width: 16px;
        height: 16px;
      }
    }
  }
`;function Fre(e){let{mid:t,hidePicker:r}=e;const[n,{isLoading:i}]=lo(),{reactionData:a,currUid:o}=(0,mn.v9)((e=>({reactionData:e.reactionMessage[t]||{},currUid:e.authData.uid}))),s=e=>{n({mid:t,action:e}),r()};return(0,ve.jsx)(bre,{children:(0,ve.jsx)("ul",{className:"emojis "+(i?"reacting":""),children:yn.Ax.map((e=>{let t=a[e]&&a[e].findIndex((e=>e==o))>-1;return(0,ve.jsx)("li",{className:"wrapper "+(t?"reacted":""),onClick:s.bind(null,e),children:(0,ve.jsx)(yre,{native:e})},e)}))})})}var wre=__webpack_require__(4643);const kre=fe.ZP.span`
  /* z-index: 99; */
  position: relative;
  margin-top: 8px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  /* align-items: center; */
  .reaction {
    cursor: pointer;
    background-color: #ecfdff;
    border-radius: 6px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px;
    > .emoji {
      > * {
        display: flex;
      }
    }
    &:hover {
      background-color: #cff9fe;
    }
    &.reacted {
      border: 1px solid #06aed4;
      background-color: #a5f0fc;
    }

    > .count {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #06aed4;
    }
  }
  > .add {
    visibility: hidden;
    width: 24px;
    height: 24px;
    background-color: #ecfdff;
    border-radius: 6px;
    border: none;
    background-image: url(${wre});
    background-size: 16px;
    background-repeat: no-repeat;
    background-position: center;
    &:hover {
      background-color: #cff9fe;
    }
  }
  &:hover > .add {
    visibility: visible;
  }
`;function Ere(e){let{mid:t,reactions:r=null}=e;const[n]=lo(),{currUid:i}=(0,mn.v9)((e=>({currUid:e.authData.uid}))),a=e=>{n({mid:t,action:e})};return r&&0!=Object.entries(r).length?(0,ve.jsxs)(kre,{className:"reactions",children:[Object.entries(r).map((e=>{let[t,r]=e;const n=r.findIndex((e=>e==i))>-1;return r.length>0?(0,ve.jsxs)("span",{onClick:a.bind(null,t),className:"reaction "+(n?"reacted":""),children:[(0,ve.jsx)("i",{className:"emoji",children:(0,ve.jsx)(yre,{native:t})}),r.length>1?(0,ve.jsxs)("em",{className:"count",children:[`${r.length}`," "]}):null]},t):null})),(0,ve.jsx)(_l,{interactive:!0,placement:"right-start",trigger:"click",content:(0,ve.jsx)(Fre,{mid:t,hidePicker:rl}),children:(0,ve.jsx)("button",{className:"add"})})]}):null}const xre=fe.ZP.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 16px;
  background: #e5e7eb;
  border-radius: var(--br);
  gap: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  .user {
    display: flex;
    align-items: center;
    gap: 4px;
    .avatar {
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
    .name {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #06b6d4;
    }
  }
  .content {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #616161;
    display: flex;
    align-items: center;
    .pic {
      display: inherit;
      max-width: 34px;
    }
    .icon {
      width: 15px;
      height: 20px;
    }
    .name {
      margin-left: 5px;
      font-size: 10px;
      color: #555;
    }
  }
  /* padding-left: 10px; */
`,Cre=e=>{const{content_type:t,content:r,thumbnail:n,properties:i}=e;let a=null;switch(t){case yn.bT.text:a=r;break;case yn.bT.image:case yn.bT.imageJPG:a=(0,ve.jsx)("img",{className:"pic",src:n});break;case yn.bT.file:{const{file_type:e,name:t}=i,r=(0,jo.LP)(e,t);a=(0,ve.jsxs)(ve.Fragment,{children:[r,(0,ve.jsx)("span",{className:"name",children:t})]})}}return a};function Dre(e){let{mid:t}=e;const{data:r,users:n}=(0,mn.v9)((e=>({data:e.message[t],users:e.contacts.byId})));if(!r)return null;const i=n[r.from_uid];return i?(0,ve.jsxs)(xre,{"data-mid":t,className:"reply",onClick:e=>{const{mid:t}=e.currentTarget.dataset,r=document.querySelector(`[data-msg-mid='${t}']`);r&&(r.dataset.highlight=!0,r.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout((()=>{r.dataset.highlight=!1}),3e3))},children:[(0,ve.jsxs)("div",{className:"user",children:[(0,ve.jsx)(yl,{className:"avatar",url:i.avatar,name:i.name}),(0,ve.jsx)("span",{className:"name",children:i.name})]}),(0,ve.jsx)("div",{className:"content",children:Cre(r)})]}):null}const Sre=fe.ZP.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 4px 8px;
  margin: 8px 0;
  border-radius: 8px;
  content-visibility: auto;
  contain-intrinsic-size: auto 150px;
  &.in_view {
    content-visibility: visible;
  }
  &[data-highlight="true"] {
    background: #f5f6f7;
  }
  &:hover,
  &.preview {
    background: #f5f6f7;
    .cmds {
      visibility: visible;
    }
  }
  .avatar {
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  > .details {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .up {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
      .name {
        color: #06b6d4;
        font-style: normal;
        font-size: 14px;
        line-height: 20px;
      }
      .time {
        color: #bfbfbf;
        font-size: 12px;
        line-height: 18px;
      }
    }
    .down {
      user-select: text;
      color: #374151;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      word-break: break-all;
      white-space: break-spaces;
      .edited {
        margin-left: 5px;
        color: #999;
        font-size: 10px;
      }
      &.sending {
        opacity: 0.5;
      }
      .img {
        max-width: 400px;
        cursor: pointer;
      }
      a {
        text-decoration: none;
        border-radius: 2px;
        /* background-color: #f5feff; */
        padding: 2px;
        color: #1fe1f9;
      }
    }
  }
`;var Are=__webpack_require__(1052);const Tre=fe.ZP.div`
  * {
    user-select: text;
  }
  .toastui-editor-contents {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;function Ore(e){let{content:t}=e;const r=(0,c.useRef)(null),[n,i]=(0,c.useState)(null);(0,c.useEffect)((()=>{if(r){r.current.addEventListener("click",(e=>{const{target:t}=e;1==t.nodeType&&i(t.dataset.origin||t.src)}),!0)}}),[]);return(0,ve.jsxs)(ve.Fragment,{children:[n&&(0,ve.jsx)(mte,{image:n,closeModal:()=>{i(null)}}),(0,ve.jsx)(Tre,{ref:r,children:(0,ve.jsx)(qee,{initialValue:t})})]})}var Pre=__webpack_require__(130),Nre=__webpack_require__.n(Pre);const Mre=fe.ZP.div`
  background: #f3f4f6;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  border-radius: 6px;
  width: 370px;
  max-height: 281px;
  height: fit-content;
  overflow: hidden;
  &.flex {
    width: 100%;
  }
  .basic {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    .icon {
      width: 36px;
      height: 48px;
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
      .name {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #1c1c1e;
      }
      .details {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #616161;
        display: flex;
        gap: 16px;
        .from strong {
          font-weight: bold;
        }
      }
    }
    .download {
      white-space: nowrap;
    }
  }
  .preview {
    /* todo */
  }
`,Rre=fe.ZP.div`
  height: 218px;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;function jre(e){let{url:t=""}=e;return t?(0,ve.jsx)(Rre,{children:(0,ve.jsx)("video",{controls:!0,src:t})}):null}function Ire(e){let{url:t=""}=e;return t?(0,ve.jsx)("audio",{src:t}):null}const Bre=fe.ZP.div`
  height: 218px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;function Lre(e){let{url:t=""}=e;return t?(0,ve.jsx)(Bre,{children:(0,ve.jsx)("img",{src:t})}):null}var qre=__webpack_require__(2560);function zre(e,t){if(null==e)return{};var r,n,i=Uq(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var Hre=["onKeyDown","onKeyPress","onKeyUp"],Ure=["onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp"],Wre=["onTouchCancel","onTouchEnd","onTouchMove","onTouchStart"],Vre=[].concat(["onCopy","onCut","onPaste"],["onCompositionEnd","onCompositionStart","onCompositionUpdate"],Hre,["onFocus","onBlur"],["onChange","onInput","onInvalid","onReset","onSubmit"],["onError","onLoad"],Ure,["onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut"],["onSelect"],Wre,["onScroll"],["onWheel"],["onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting"],["onLoad","onError"],["onAnimationStart","onAnimationEnd","onAnimationIteration"],["onTransitionEnd"],["onToggle"]);const $re=function(e,t){var r={};return Vre.forEach((function(n){n in e&&(r[n]=t?function(r){return e[n](r,t(n))}:e[n])})),r};function Gre(e){var t=!1,r=new Promise((function(r,n){e.then((function(){return!t&&r.apply(void 0,arguments)})).catch((function(e){return!t&&n(e)}))}));return{promise:r,cancel:function(){t=!0}}}function Kre(){return Array.prototype.slice.call(arguments).reduce((function(e,t){return e.concat(t)}),[]).filter((function(e){return"string"===typeof e})).join(" ")}var Zre="Invariant failed";function Yre(e,t){if(!e)throw new Error(Zre)}const Xre=function(e,t){},Qre=(0,c.createContext)(null);function Jre(e){var t=e.children,r=e.type;return c.createElement("div",{className:"react-pdf__message react-pdf__message--".concat(r)},t)}Jre.propTypes={children:a().node,type:a().oneOf(["error","loading","no-data"]).isRequired};var ene=function(){function e(){aK(this,e),this.externalLinkTarget=null,this.externalLinkRel=null}return sK(e,[{key:"setDocument",value:function(e){this.pdfDocument=e}},{key:"setViewer",value:function(e){this.pdfViewer=e}},{key:"setExternalLinkRel",value:function(e){this.externalLinkRel=e}},{key:"setExternalLinkTarget",value:function(e){this.externalLinkTarget=e}},{key:"setHistory",value:function(){}},{key:"pagesCount",get:function(){return this.pdfDocument?this.pdfDocument.numPages:0}},{key:"page",get:function(){return this.pdfViewer.currentPageNumber},set:function(e){this.pdfViewer.currentPageNumber=e}},{key:"rotation",get:function(){return 0},set:function(e){}},{key:"goToDestination",value:function(e){var t=this;new Promise((function(r){"string"===typeof e?t.pdfDocument.getDestination(e).then(r):Array.isArray(e)?r(e):e.then(r)})).then((function(r){Yre(Array.isArray(r),'"'.concat(r,'" is not a valid destination array.'));var n=r[0];new Promise((function(e){n instanceof Object?t.pdfDocument.getPageIndex(n).then((function(t){e(t)})).catch((function(){Yre(!1,'"'.concat(n,'" is not a valid page reference.'))})):"number"===typeof n?e(n):Yre(!1,'"'.concat(n,'" is not a valid destination reference.'))})).then((function(r){var n=r+1;Yre(n>=1&&n<=t.pagesCount,'"'.concat(n,'" is not a valid page number.')),t.pdfViewer.scrollPageIntoView({dest:e,pageIndex:r,pageNumber:n})}))}))}},{key:"navigateTo",value:function(e){this.goToDestination(e)}},{key:"goToPage",value:function(){}},{key:"addLinkAttributes",value:function(e,t,r){e.href=t,e.rel=this.externalLinkRel||"noopener noreferrer nofollow",e.target=r?"_blank":this.externalLinkTarget||""}},{key:"getDestinationHash",value:function(){return"#"}},{key:"getAnchorUrl",value:function(){return"#"}},{key:"setHash",value:function(){}},{key:"executeNamedAction",value:function(){}},{key:"cachePageRef",value:function(){}},{key:"isPageVisible",value:function(){return!0}},{key:"isPageCached",value:function(){return!0}}]),e}();const tne={NEED_PASSWORD:1,INCORRECT_PASSWORD:2};function rne(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function nne(e,t){if(e){if("string"===typeof e)return rne(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?rne(e,t):void 0}}function ine(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(u){s=!0,i=u}finally{try{o||null==r.return||r.return()}finally{if(s)throw i}}return a}}(e,t)||nne(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ane="undefined"!==typeof window,one=ane&&"file:"===window.location.protocol;function sne(e){return"undefined"!==typeof e}function une(e){return sne(e)&&null!==e}function lne(e){return e instanceof ArrayBuffer}function cne(e){return Yre(ane),e instanceof Blob}function dne(e){return Yre(ane),e instanceof File}function fne(e){return"string"===typeof e&&/^data:/.test(e)}function hne(e){Yre(fne(e));var t=ine(e.split(","),2),r=t[0],n=t[1];return-1!==r.split(";").indexOf("base64")?atob(n):unescape(n)}var pne="On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";function gne(){Xre(!one,"Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ".concat(pne))}function mne(e){e&&e.cancel&&e.cancel()}function _ne(e,t){return Object.defineProperty(e,"width",{get:function(){return this.view[2]*t},configurable:!0}),Object.defineProperty(e,"height",{get:function(){return this.view[3]*t},configurable:!0}),Object.defineProperty(e,"originalWidth",{get:function(){return this.view[2]},configurable:!0}),Object.defineProperty(e,"originalHeight",{get:function(){return this.view[3]},configurable:!0}),e}function vne(e){return"RenderingCancelledException"===e.name}function yne(e){return new Promise((function(t,r){var n=new FileReader;return n.onload=function(){return t(new Uint8Array(n.result))},n.onerror=function(e){switch(e.target.error.code){case e.target.error.NOT_FOUND_ERR:return r(new Error("Error while reading a file: File not found."));case e.target.error.NOT_READABLE_ERR:return r(new Error("Error while reading a file: File not readable."));case e.target.error.SECURITY_ERR:return r(new Error("Error while reading a file: Security error."));case e.target.error.ABORT_ERR:return r(new Error("Error while reading a file: Aborted."));default:return r(new Error("Error while reading a file."))}},n.readAsArrayBuffer(e),null}))}function bne(e){return function(e){if(Array.isArray(e))return rne(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||nne(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Fne=function(){var e={};return[].concat(bne(Ure),bne(Wre),bne(Hre)).forEach((function(t){e[t]=a().func})),e}(),wne=[a().string,a().instanceOf(ArrayBuffer),a().shape({data:a().oneOfType([a().object,a().string]),httpHeaders:a().object,range:a().object,url:a().string,withCredentials:a().bool})];"undefined"!==typeof File&&wne.push(a().instanceOf(File)),"undefined"!==typeof Blob&&wne.push(a().instanceOf(Blob));var kne=a().oneOfType([a().string,a().arrayOf(a().string)]),Ene=a().oneOfType(wne),xne=a().instanceOf(ene),Cne=(a().oneOf(["_self","_blank","_parent","_top"]),a().shape({_transport:a().shape({fontLoader:a().object.isRequired}).isRequired,commonObjs:a().shape({_objs:a().object.isRequired}).isRequired,getAnnotations:a().func.isRequired,getTextContent:a().func.isRequired,getViewport:a().func.isRequired,render:a().func.isRequired})),Dne=a().oneOfType([a().shape({getDestination:a().func.isRequired,getOutline:a().func.isRequired,getPage:a().func.isRequired,numPages:a().number.isRequired}),a().bool]),Sne=a().oneOfType([a().func,a().shape({current:a().any})]),Ane=a().oneOf(["canvas","none","svg"]),Tne=a().oneOf([0,90,180,270]),One=["url"];function Pne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Nne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pne(Object(r),!0).forEach((function(t){(0,jK.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Mne(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(pf){return!1}}();return function(){var r,n=LK(e);if(t){var i=LK(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return BK(this,r)}}var Rne=qre.PDFDataRangeTransport,jne=function(e){zK(r,e);var t=Mne(r);function r(){var e;aK(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),(0,jK.Z)(IK(e),"state",{pdf:null}),(0,jK.Z)(IK(e),"viewer",{scrollPageIntoView:function(t){var r=t.dest,n=t.pageIndex,i=t.pageNumber,a=e.props.onItemClick;if(a)a({dest:r,pageIndex:n,pageNumber:i});else{var o=e.pages[n];o?o.scrollIntoView():Xre(!1,"An internal link leading to page ".concat(i," was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>."))}}}),(0,jK.Z)(IK(e),"linkService",new ene),(0,jK.Z)(IK(e),"loadDocument",(function(){e.findDocumentSource().then((function(t){if(e.onSourceSuccess(),t){e.setState((function(e){return e.pdf?{pdf:null}:null}));var r=e.props,n=r.options,i=r.onLoadProgress,a=r.onPassword;mne(e.runningTask),e.loadingTask&&e.loadingTask.destroy(),e.loadingTask=qre.getDocument(Nne(Nne({},t),n)),e.loadingTask.onPassword=a,i&&(e.loadingTask.onProgress=i);var o=Gre(e.loadingTask.promise);e.runningTask=o,o.promise.then((function(t){e.setState((function(e){return e.pdf&&e.pdf.fingerprint===t.fingerprint?null:{pdf:t}}),e.onLoadSuccess)})).catch((function(t){e.onLoadError(t)}))}})).catch((function(t){e.onSourceError(t)}))})),(0,jK.Z)(IK(e),"setupLinkService",(function(){var t=e.props,r=t.externalLinkRel,n=t.externalLinkTarget;e.linkService.setViewer(e.viewer),e.linkService.setExternalLinkRel(r),e.linkService.setExternalLinkTarget(n)})),(0,jK.Z)(IK(e),"onSourceSuccess",(function(){var t=e.props.onSourceSuccess;t&&t()})),(0,jK.Z)(IK(e),"onSourceError",(function(t){Xre(t);var r=e.props.onSourceError;r&&r(t)})),(0,jK.Z)(IK(e),"onLoadSuccess",(function(){var t=e.props.onLoadSuccess,r=e.state.pdf;t&&t(r),e.pages=new Array(r.numPages),e.linkService.setDocument(r)})),(0,jK.Z)(IK(e),"onLoadError",(function(t){e.setState({pdf:!1}),Xre(t);var r=e.props.onLoadError;r&&r(t)})),(0,jK.Z)(IK(e),"findDocumentSource",(function(){return new Promise((function(t){var r=e.props.file;if(r||t(null),"string"===typeof r){if(fne(r)){var n=hne(r);t({data:n})}gne(),t({url:r})}if(r instanceof Rne&&t({range:r}),lne(r)&&t({data:r}),ane&&(cne(r)||dne(r)))yne(r).then((function(e){t({data:e})}));else{if(Yre("object"===uK(r)),Yre(r.url||r.data||r.range),"string"===typeof r.url){if(fne(r.url)){var i=r.url,a=zre(r,One),o=hne(i);t(Nne({data:o},a))}gne()}t(r)}}))})),(0,jK.Z)(IK(e),"registerPage",(function(t,r){e.pages[t]=r})),(0,jK.Z)(IK(e),"unregisterPage",(function(t){delete e.pages[t]})),e}return sK(r,[{key:"componentDidMount",value:function(){this.loadDocument(),this.setupLinkService()}},{key:"componentDidUpdate",value:function(e){this.props.file!==e.file&&this.loadDocument()}},{key:"componentWillUnmount",value:function(){mne(this.runningTask),this.loadingTask&&this.loadingTask.destroy()}},{key:"childContext",get:function(){var e=this.linkService,t=this.registerPage,r=this.unregisterPage,n=this.props,i=n.imageResourcesPath,a=n.renderMode,o=n.rotate;return{imageResourcesPath:i,linkService:e,pdf:this.state.pdf,registerPage:t,renderMode:a,rotate:o,unregisterPage:r}}},{key:"eventProps",get:function(){var e=this;return $re(this.props,(function(){return e.state.pdf}))}},{key:"renderChildren",value:function(){var e=this.props.children;return c.createElement(Qre.Provider,{value:this.childContext},e)}},{key:"renderContent",value:function(){var e=this.props.file,t=this.state.pdf;if(!e){var r=this.props.noData;return c.createElement(Jre,{type:"no-data"},"function"===typeof r?r():r)}if(null===t){var n=this.props.loading;return c.createElement(Jre,{type:"loading"},"function"===typeof n?n():n)}if(!1===t){var i=this.props.error;return c.createElement(Jre,{type:"error"},"function"===typeof i?i():i)}return this.renderChildren()}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.inputRef;return c.createElement("div",(0,Fr.Z)({className:Kre("react-pdf__Document",t),ref:r},this.eventProps),this.renderContent())}}]),r}(c.PureComponent);jne.defaultProps={error:"Failed to load PDF file.",loading:"Loading PDF\u2026",noData:"No PDF file specified.",onPassword:function(e,t){switch(t){case tne.NEED_PASSWORD:e(prompt("Enter the password to open this PDF file."));break;case tne.INCORRECT_PASSWORD:e(prompt("Invalid password. Please try again."))}}};var Ine=a().oneOfType([a().func,a().node]);jne.propTypes=Nne(Nne({},Fne),{},{children:a().node,className:kne,error:Ine,externalLinkRel:a().string,externalLinkTarget:a().string,file:Ene,imageResourcesPath:a().string,inputRef:Sne,loading:Ine,noData:Ine,onItemClick:a().func,onLoadError:a().func,onLoadProgress:a().func,onLoadSuccess:a().func,onPassword:a().func,onSourceError:a().func,onSourceSuccess:a().func,rotate:a().number});const Bne=(0,c.createContext)(null);var Lne=function(){function e(t){var r=t.num,n=t.gen;aK(this,e),this.num=r,this.gen=n}return sK(e,[{key:"toString",value:function(){var e="".concat(this.num,"R");return 0!==this.gen&&(e+=this.gen),e}}]),e}(),qne=["item"];function zne(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(pf){return!1}}();return function(){var r,n=LK(e);if(t){var i=LK(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return BK(this,r)}}var Hne=function(e){zK(r,e);var t=zne(r);function r(){var e;aK(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),(0,jK.Z)(IK(e),"getDestination",(function(){return new Promise((function(t,r){var n=e.props,i=n.item,a=n.pdf;return sne(e.destination)||("string"===typeof i.dest?a.getDestination(i.dest).then(t).catch(r):t(i.dest)),e.destination})).then((function(t){return e.destination=t,t}))})),(0,jK.Z)(IK(e),"getPageIndex",(function(){return new Promise((function(t,r){var n=e.props.pdf;sne(e.pageIndex)&&t(e.pageIndex),e.getDestination().then((function(e){if(e){var i=ine(e,1)[0];n.getPageIndex(new Lne(i)).then(t).catch(r)}}))})).then((function(t){return e.pageIndex=t,e.pageIndex}))})),(0,jK.Z)(IK(e),"getPageNumber",(function(){return new Promise((function(t,r){sne(e.pageNumber)&&t(e.pageNumber),e.getPageIndex().then((function(e){t(e+1)})).catch(r)})).then((function(t){return e.pageNumber=t,t}))})),(0,jK.Z)(IK(e),"onClick",(function(t){var r=e.props.onClick;return t.preventDefault(),!!r&&Promise.all([e.getDestination(),e.getPageIndex(),e.getPageNumber()]).then((function(e){var t=ine(e,3),n=t[0],i=t[1],a=t[2];r({dest:n,pageIndex:i,pageNumber:a})}))})),e}return sK(r,[{key:"renderSubitems",value:function(){var e=this.props,t=e.item,n=zre(e,qne);if(!t.items||!t.items.length)return null;var i=t.items;return c.createElement("ul",null,i.map((function(e,t){return c.createElement(r,(0,Fr.Z)({key:"string"===typeof e.destination?e.destination:t,item:e},n))})))}},{key:"render",value:function(){var e=this.props.item;return c.createElement("li",null,c.createElement("a",{href:"#",onClick:this.onClick},e.title),this.renderSubitems())}}]),r}(c.PureComponent),Une=a().oneOfType([a().string,a().arrayOf(a().any)]);Hne.propTypes={item:a().shape({dest:Une,items:a().arrayOf(a().shape({dest:Une,title:a().string})),title:a().string}).isRequired,onClick:a().func,pdf:Dne.isRequired};const Wne=function(e){return c.createElement(Qre.Consumer,null,(function(t){return c.createElement(Bne.Consumer,null,(function(r){return c.createElement(Hne,(0,Fr.Z)({},t,r,e))}))}))};function Vne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $ne(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(pf){return!1}}();return function(){var r,n=LK(e);if(t){var i=LK(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return BK(this,r)}}var Gne=function(e){zK(r,e);var t=$ne(r);function r(){var e;aK(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),(0,jK.Z)(IK(e),"state",{outline:null}),(0,jK.Z)(IK(e),"loadOutline",(function(){var t=e.props.pdf;e.setState((function(e){return e.outline?{outline:null}:null}));var r=Gre(t.getOutline());e.runningTask=r,r.promise.then((function(t){e.setState({outline:t},e.onLoadSuccess)})).catch((function(t){e.onLoadError(t)}))})),(0,jK.Z)(IK(e),"onLoadSuccess",(function(){var t=e.props.onLoadSuccess,r=e.state.outline;t&&t(r)})),(0,jK.Z)(IK(e),"onLoadError",(function(t){e.setState({outline:!1}),Xre(t);var r=e.props.onLoadError;r&&r(t)})),(0,jK.Z)(IK(e),"onItemClick",(function(t){var r=t.dest,n=t.pageIndex,i=t.pageNumber,a=e.props.onItemClick;a&&a({dest:r,pageIndex:n,pageNumber:i})})),e}return sK(r,[{key:"componentDidMount",value:function(){Yre(this.props.pdf),this.loadOutline()}},{key:"componentDidUpdate",value:function(e){var t=this.props.pdf;e.pdf&&t!==e.pdf&&this.loadOutline()}},{key:"componentWillUnmount",value:function(){mne(this.runningTask)}},{key:"childContext",get:function(){return{onClick:this.onItemClick}}},{key:"eventProps",get:function(){var e=this;return $re(this.props,(function(){return e.state.outline}))}},{key:"renderOutline",value:function(){var e=this.state.outline;return c.createElement("ul",null,e.map((function(e,t){return c.createElement(Wne,{key:"string"===typeof e.destination?e.destination:t,item:e})})))}},{key:"render",value:function(){var e=this.props.pdf,t=this.state.outline;if(!e||!t)return null;var r=this.props,n=r.className,i=r.inputRef;return c.createElement("div",(0,Fr.Z)({className:Kre("react-pdf__Outline",n),ref:i},this.eventProps),c.createElement(Bne.Provider,{value:this.childContext},this.renderOutline()))}}]),r}(c.PureComponent);Gne.propTypes=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Vne(Object(r),!0).forEach((function(t){(0,jK.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Vne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({className:kne,inputRef:Sne,onItemClick:a().func,onLoadError:a().func,onLoadSuccess:a().func,pdf:Dne},Fne);function Kne(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t.filter(Boolean);return n.length<=1?n[0]:function(e){n.forEach((function(t){"function"===typeof t?t(e):t.current=e}))}}const Zne=(0,c.createContext)(null);function Yne(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(pf){return!1}}();return function(){var r,n=LK(e);if(t){var i=LK(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return BK(this,r)}}var Xne=qre.AnnotationMode,Qne=function(e){zK(r,e);var t=Yne(r);function r(){var e;aK(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),(0,jK.Z)(IK(e),"onRenderSuccess",(function(){e.renderer=null;var t=e.props,r=t.onRenderSuccess,n=t.page,i=t.scale;r&&r(_ne(n,i))})),(0,jK.Z)(IK(e),"onRenderError",(function(t){if(!vne(t)){Xre(t);var r=e.props.onRenderError;r&&r(t)}})),(0,jK.Z)(IK(e),"drawPageOnCanvas",(function(){var t=IK(e).canvasLayer;if(!t)return null;var r=IK(e),n=r.renderViewport,i=r.viewport,a=e.props,o=a.canvasBackground,s=a.page,u=a.renderForms;t.width=n.width,t.height=n.height,t.style.width="".concat(Math.floor(i.width),"px"),t.style.height="".concat(Math.floor(i.height),"px");var l={annotationMode:u?Xne.ENABLE_FORMS:Xne.ENABLE,get canvasContext(){return t.getContext("2d")},viewport:n};return o&&(l.background=o),e.cancelRenderingTask(),e.renderer=s.render(l),e.renderer.promise.then(e.onRenderSuccess).catch(e.onRenderError)})),e}return sK(r,[{key:"componentDidMount",value:function(){this.drawPageOnCanvas()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.canvasBackground,n=t.page,i=t.renderForms;r===e.canvasBackground&&i===e.renderForms||(n.cleanup(),this.drawPageOnCanvas())}},{key:"componentWillUnmount",value:function(){this.cancelRenderingTask(),this.canvasLayer&&(this.canvasLayer.width=0,this.canvasLayer.height=0,this.canvasLayer=null)}},{key:"cancelRenderingTask",value:function(){this.renderer&&(this.renderer.cancel(),this.renderer=null)}},{key:"renderViewport",get:function(){var e=this.props,t=e.page,r=e.rotate,n=e.scale,i=ane&&window.devicePixelRatio||1;return t.getViewport({scale:n*i,rotation:r})}},{key:"viewport",get:function(){var e=this.props,t=e.page,r=e.rotate,n=e.scale;return t.getViewport({scale:n,rotation:r})}},{key:"render",value:function(){var e=this,t=this.props.canvasRef;return c.createElement("canvas",{className:"react-pdf__Page__canvas",dir:"ltr",ref:Kne(t,(function(t){e.canvasLayer=t})),style:{display:"block",userSelect:"none"}})}}]),r}(c.PureComponent);function Jne(e){return c.createElement(Zne.Consumer,null,(function(t){return c.createElement(Qne,(0,Fr.Z)({},t,e))}))}function eie(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(pf){return!1}}();return function(){var r,n=LK(e);if(t){var i=LK(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return BK(this,r)}}Qne.propTypes={canvasBackground:a().string,canvasRef:Sne,onRenderError:a().func,onRenderSuccess:a().func,page:Cne.isRequired,renderForms:a().bool,rotate:Tne,scale:a().number.isRequired};var tie=function(e){zK(r,e);var t=eie(r);function r(){var e;aK(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),(0,jK.Z)(IK(e),"state",{svg:null}),(0,jK.Z)(IK(e),"onRenderSuccess",(function(){e.renderer=null;var t=e.props,r=t.onRenderSuccess,n=t.page,i=t.scale;r&&r(_ne(n,i))})),(0,jK.Z)(IK(e),"onRenderError",(function(t){if(!vne(t)){Xre(t);var r=e.props.onRenderError;r&&r(t)}})),(0,jK.Z)(IK(e),"renderSVG",(function(){var t=e.props.page;return e.renderer=t.getOperatorList(),e.renderer.then((function(r){var n=new qre.SVGGraphics(t.commonObjs,t.objs);e.renderer=n.getSVG(r,e.viewport).then((function(t){e.setState({svg:t},e.onRenderSuccess)})).catch(e.onRenderError)})).catch(e.onRenderError)})),(0,jK.Z)(IK(e),"drawPageOnContainer",(function(t){var r=e.state.svg;if(t&&r){t.firstElementChild||t.appendChild(r);var n=e.viewport,i=n.width,a=n.height;r.setAttribute("width",i),r.setAttribute("height",a)}})),e}return sK(r,[{key:"componentDidMount",value:function(){this.renderSVG()}},{key:"viewport",get:function(){var e=this.props,t=e.page,r=e.rotate,n=e.scale;return t.getViewport({scale:n,rotation:r})}},{key:"render",value:function(){var e=this,t=this.viewport,r=t.width,n=t.height;return c.createElement("div",{className:"react-pdf__Page__svg",ref:function(t){return e.drawPageOnContainer(t)},style:{display:"block",backgroundColor:"white",overflow:"hidden",width:r,height:n,userSelect:"none"}})}}]),r}(c.PureComponent);function rie(e){return c.createElement(Zne.Consumer,null,(function(t){return c.createElement(tie,(0,Fr.Z)({},t,e))}))}function nie(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(pf){return!1}}();return function(){var r,n=LK(e);if(t){var i=LK(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return BK(this,r)}}tie.propTypes={onRenderError:a().func,onRenderSuccess:a().func,page:Cne.isRequired,rotate:Tne,scale:a().number.isRequired};var iie=function(e){zK(r,e);var t=nie(r);function r(){var e;aK(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),(0,jK.Z)(IK(e),"getElementWidth",(function(t){var r=IK(e).sideways;return t.getBoundingClientRect()[r?"height":"width"]})),e}return sK(r,[{key:"componentDidMount",value:function(){this.alignTextItem()}},{key:"componentDidUpdate",value:function(){this.alignTextItem()}},{key:"unrotatedViewport",get:function(){var e=this.props,t=e.page,r=e.scale;return t.getViewport({scale:r})}},{key:"rotate",get:function(){var e=this.props,t=e.page;return e.rotate-t.rotate}},{key:"sideways",get:function(){return this.rotate%180!==0}},{key:"defaultSideways",get:function(){return this.unrotatedViewport.rotation%180!==0}},{key:"fontSize",get:function(){var e=this.props.transform,t=this.defaultSideways,r=ine(e,2),n=r[0],i=r[1];return t?i:n}},{key:"top",get:function(){var e=this.props.transform,t=this.unrotatedViewport,r=this.defaultSideways,n=ine(e,6),i=n[2],a=n[3],o=n[4],s=n[5],u=ine(t.viewBox,4),l=u[1],c=u[3];return r?o+i+l:c-(s+a)}},{key:"left",get:function(){var e=this.props.transform,t=this.unrotatedViewport,r=this.defaultSideways,n=ine(e,6),i=n[4],a=n[5],o=ine(t.viewBox,1)[0];return r?a-o:i-o}},{key:"getFontData",value:function(e){var t=this.props.page;return new Promise((function(r){t.commonObjs.get(e,r)}))}},{key:"alignTextItem",value:function(){var e=this,t=this.item;if(t){t.style.transform="";var r=this.props,n=r.fontName,i=r.scale,a=r.width;t.style.fontFamily="".concat(n,", sans-serif"),this.getFontData(n).then((function(r){var o=r?r.fallbackName:"sans-serif";t.style.fontFamily="".concat(n,", ").concat(o);var s=a*i,u=e.getElementWidth(t),l="scaleX(".concat(s/u,")"),c=r?r.ascent:0;c&&(l+=" translateY(".concat(100*(1-c),"%)")),t.style.transform=l,t.style.WebkitTransform=l}))}}},{key:"render",value:function(){var e=this,t=this.fontSize,r=this.top,n=this.left,i=this.props,a=i.customTextRenderer,o=i.scale,s=i.str;return c.createElement("span",{ref:function(t){e.item=t},style:{height:"1em",fontFamily:"sans-serif",fontSize:"".concat(t*o,"px"),position:"absolute",top:"".concat(r*o,"px"),left:"".concat(n*o,"px"),transformOrigin:"left bottom",whiteSpace:"pre",pointerEvents:"all"}},a?a(this.props):s)}}]),r}(c.PureComponent);function aie(e){return c.createElement(Zne.Consumer,null,(function(t){return c.createElement(iie,(0,Fr.Z)({},t,e))}))}function oie(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(pf){return!1}}();return function(){var r,n=LK(e);if(t){var i=LK(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return BK(this,r)}}iie.propTypes={customTextRenderer:a().func,fontName:a().string.isRequired,itemIndex:a().number.isRequired,page:Cne.isRequired,rotate:Tne,scale:a().number,str:a().string.isRequired,transform:a().arrayOf(a().number).isRequired,width:a().number.isRequired};var sie=function(e){zK(r,e);var t=oie(r);function r(){var e;aK(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),(0,jK.Z)(IK(e),"state",{textItems:null}),(0,jK.Z)(IK(e),"loadTextItems",(function(){var t=Gre(e.props.page.getTextContent());e.runningTask=t,t.promise.then((function(t){var r=t.items;e.setState({textItems:r},e.onLoadSuccess)})).catch((function(t){e.onLoadError(t)}))})),(0,jK.Z)(IK(e),"onLoadSuccess",(function(){var t=e.props.onGetTextSuccess,r=e.state.textItems;t&&t(r)})),(0,jK.Z)(IK(e),"onLoadError",(function(t){e.setState({textItems:!1}),Xre(t);var r=e.props.onGetTextError;r&&r(t)})),e}return sK(r,[{key:"componentDidMount",value:function(){Yre(this.props.page),this.loadTextItems()}},{key:"componentDidUpdate",value:function(e){var t=this.props.page;e.page&&t!==e.page&&this.loadTextItems()}},{key:"componentWillUnmount",value:function(){mne(this.runningTask)}},{key:"unrotatedViewport",get:function(){var e=this.props,t=e.page,r=e.scale;return t.getViewport({scale:r})}},{key:"rotate",get:function(){var e=this.props,t=e.page;return e.rotate-t.rotate}},{key:"renderTextItems",value:function(){var e=this.state.textItems;return e?e.map((function(e,t){return c.createElement(aie,(0,Fr.Z)({key:t,itemIndex:t},e))})):null}},{key:"render",value:function(){var e=this.unrotatedViewport,t=this.rotate;return c.createElement("div",{className:"react-pdf__Page__textContent",style:{position:"absolute",top:"50%",left:"50%",width:"".concat(e.width,"px"),height:"".concat(e.height,"px"),color:"transparent",transform:"translate(-50%, -50%) rotate(".concat(t,"deg)"),WebkitTransform:"translate(-50%, -50%) rotate(".concat(t,"deg)"),pointerEvents:"none"}},this.renderTextItems())}}]),r}(c.PureComponent);function uie(e){return c.createElement(Zne.Consumer,null,(function(t){return c.createElement(sie,(0,Fr.Z)({},t,e))}))}function lie(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(pf){return!1}}();return function(){var r,n=LK(e);if(t){var i=LK(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return BK(this,r)}}sie.propTypes={onGetTextError:a().func,onGetTextSuccess:a().func,page:Cne.isRequired,rotate:Tne,scale:a().number};var cie=function(e){zK(r,e);var t=lie(r);function r(){var e;aK(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),(0,jK.Z)(IK(e),"state",{annotations:null}),(0,jK.Z)(IK(e),"loadAnnotations",(function(){var t=Gre(e.props.page.getAnnotations());e.runningTask=t,t.promise.then((function(t){e.setState({annotations:t},e.onLoadSuccess)})).catch((function(t){e.onLoadError(t)}))})),(0,jK.Z)(IK(e),"onLoadSuccess",(function(){var t=e.props.onGetAnnotationsSuccess,r=e.state.annotations;t&&t(r)})),(0,jK.Z)(IK(e),"onLoadError",(function(t){e.setState({annotations:!1}),Xre(t);var r=e.props.onGetAnnotationsError;r&&r(t)})),(0,jK.Z)(IK(e),"onRenderSuccess",(function(){var t=e.props.onRenderAnnotationLayerSuccess;t&&t()})),(0,jK.Z)(IK(e),"onRenderError",(function(t){Xre(t);var r=e.props.onRenderAnnotationLayerError;r&&r(t)})),e}return sK(r,[{key:"componentDidMount",value:function(){Yre(this.props.page),this.loadAnnotations()}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.page,n=t.renderForms;(e.page&&r!==e.page||n!==e.renderForms)&&this.loadAnnotations()}},{key:"componentWillUnmount",value:function(){mne(this.runningTask)}},{key:"viewport",get:function(){var e=this.props,t=e.page,r=e.rotate,n=e.scale;return t.getViewport({scale:n,rotation:r})}},{key:"renderAnnotationLayer",value:function(){var e=this.state.annotations;if(e){var t=this.props,r=t.imageResourcesPath,n=t.linkService,i=t.page,a=t.renderForms,o=this.viewport.clone({dontFlip:!0}),s={annotations:e,div:this.annotationLayer,imageResourcesPath:r,linkService:n,page:i,renderForms:a,viewport:o};this.annotationLayer.innerHTML="";try{qre.AnnotationLayer.render(s),this.onRenderSuccess()}catch(u){this.onRenderError(u)}}}},{key:"render",value:function(){var e=this;return c.createElement("div",{className:"react-pdf__Page__annotations annotationLayer",ref:function(t){e.annotationLayer=t}},this.renderAnnotationLayer())}}]),r}(c.PureComponent);cie.propTypes={imageResourcesPath:a().string,linkService:xne.isRequired,onGetAnnotationsError:a().func,onGetAnnotationsSuccess:a().func,onRenderAnnotationLayerError:a().func,onRenderAnnotationLayerSuccess:a().func,page:Cne,renderForms:a().bool,rotate:Tne,scale:a().number};const die=function(e){return c.createElement(Qre.Consumer,null,(function(t){return c.createElement(Zne.Consumer,null,(function(r){return c.createElement(cie,(0,Fr.Z)({},t,r,e))}))}))};function fie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function hie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fie(Object(r),!0).forEach((function(t){(0,jK.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function pie(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(pf){return!1}}();return function(){var r,n=LK(e);if(t){var i=LK(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return BK(this,r)}}var gie=function(e){zK(r,e);var t=pie(r);function r(){var e;aK(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),(0,jK.Z)(IK(e),"state",{page:null}),(0,jK.Z)(IK(e),"onLoadSuccess",(function(){var t=e.props,r=t.onLoadSuccess,n=t.registerPage,i=e.state.page;r&&r(_ne(i,e.scale)),n&&n(e.pageIndex,e.ref)})),(0,jK.Z)(IK(e),"onLoadError",(function(t){e.setState({page:!1}),Xre(t);var r=e.props.onLoadError;r&&r(t)})),(0,jK.Z)(IK(e),"loadPage",(function(){var t=e.props.pdf,r=e.getPageNumber();if(r){e.setState((function(e){return e.page?{page:null}:null}));var n=Gre(t.getPage(r));e.runningTask=n,n.promise.then((function(t){e.setState({page:t},e.onLoadSuccess)})).catch((function(t){e.onLoadError(t)}))}})),e}return sK(r,[{key:"componentDidMount",value:function(){Yre(this.props.pdf),this.loadPage()}},{key:"componentDidUpdate",value:function(e){var t=this.props.pdf;if(e.pdf&&t!==e.pdf||this.getPageNumber()!==this.getPageNumber(e)){var r=this.props.unregisterPage;r&&r(this.getPageIndex(e)),this.loadPage()}}},{key:"componentWillUnmount",value:function(){var e=this.props.unregisterPage;e&&e(this.pageIndex),mne(this.runningTask)}},{key:"childContext",get:function(){var e=this.state.page;if(!e)return{};var t=this.props,r=t.canvasBackground,n=t.customTextRenderer,i=t.onGetAnnotationsError,a=t.onGetAnnotationsSuccess,o=t.onGetTextError,s=t.onGetTextSuccess,u=t.onRenderAnnotationLayerError,l=t.onRenderAnnotationLayerSuccess,c=t.onRenderError,d=t.onRenderSuccess,f=t.renderForms,h=t.renderInteractiveForms;return{canvasBackground:r,customTextRenderer:n,onGetAnnotationsError:i,onGetAnnotationsSuccess:a,onGetTextError:o,onGetTextSuccess:s,onRenderAnnotationLayerError:u,onRenderAnnotationLayerSuccess:l,onRenderError:c,onRenderSuccess:d,page:e,renderForms:null!==f&&void 0!==f?f:h,rotate:this.rotate,scale:this.scale}}},{key:"getPageIndex",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;return une(e.pageNumber)?e.pageNumber-1:une(e.pageIndex)?e.pageIndex:null}},{key:"getPageNumber",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;return une(e.pageNumber)?e.pageNumber:une(e.pageIndex)?e.pageIndex+1:null}},{key:"pageIndex",get:function(){return this.getPageIndex()}},{key:"pageNumber",get:function(){return this.getPageNumber()}},{key:"rotate",get:function(){var e=this.props.rotate;if(une(e))return e;var t=this.state.page;return t?t.rotate:null}},{key:"scale",get:function(){var e=this.state.page;if(!e)return null;var t=this.props,r=t.scale,n=t.width,i=t.height,a=this.rotate,o=1,s=null===r?1:r;if(n||i){var u=e.getViewport({scale:1,rotation:a});o=n?n/u.width:i/u.height}return s*o}},{key:"eventProps",get:function(){var e=this;return $re(this.props,(function(){var t=e.state.page;return t?_ne(t,e.scale):t}))}},{key:"pageKey",get:function(){var e=this.state.page;return"".concat(e.pageIndex,"@").concat(this.scale,"/").concat(this.rotate)}},{key:"pageKeyNoScale",get:function(){var e=this.state.page;return"".concat(e.pageIndex,"/").concat(this.rotate)}},{key:"renderMainLayer",value:function(){var e=this.props,t=e.canvasRef;switch(e.renderMode){case"none":return null;case"svg":return c.createElement(rie,{key:"".concat(this.pageKeyNoScale,"_svg")});default:return c.createElement(Jne,{key:"".concat(this.pageKey,"_canvas"),canvasRef:t})}}},{key:"renderTextLayer",value:function(){var e=this.props.renderTextLayer;return e?c.createElement(uie,{key:"".concat(this.pageKey,"_text")}):null}},{key:"renderAnnotationLayer",value:function(){var e=this.props.renderAnnotationLayer;return e?c.createElement(die,{key:"".concat(this.pageKey,"_annotations")}):null}},{key:"renderChildren",value:function(){var e=this.props.children;return c.createElement(Zne.Provider,{value:this.childContext},this.renderMainLayer(),this.renderTextLayer(),this.renderAnnotationLayer(),e)}},{key:"renderContent",value:function(){var e=this.pageNumber,t=this.props.pdf,r=this.state.page;if(!e){var n=this.props.noData;return c.createElement(Jre,{type:"no-data"},"function"===typeof n?n():n)}if(null===t||null===r){var i=this.props.loading;return c.createElement(Jre,{type:"loading"},"function"===typeof i?i():i)}if(!1===t||!1===r){var a=this.props.error;return c.createElement(Jre,{type:"error"},"function"===typeof a?a():a)}return this.renderChildren()}},{key:"render",value:function(){var e=this.pageNumber,t=this.props,r=t.className,n=t.inputRef;return c.createElement("div",(0,Fr.Z)({className:Kre("react-pdf__Page",r),"data-page-number":e,ref:Kne(n,this.ref),style:{position:"relative"}},this.eventProps),this.renderContent())}}]),r}(c.PureComponent);gie.defaultProps={error:"Failed to load the page.",loading:"Loading page\u2026",noData:"No page specified.",renderAnnotationLayer:!0,renderForms:!1,renderMode:"canvas",renderTextLayer:!0,scale:1};var mie=a().oneOfType([a().func,a().node]);function _ie(e,t){return c.createElement(Qre.Consumer,null,(function(r){return c.createElement(gie,(0,Fr.Z)({ref:t},r,e))}))}gie.propTypes=hie(hie({},Fne),{},{canvasBackground:a().string,children:a().node,className:kne,customTextRenderer:a().func,error:mie,height:a().number,imageResourcesPath:a().string,inputRef:Sne,loading:mie,noData:mie,onGetTextError:a().func,onGetTextSuccess:a().func,onLoadError:a().func,onLoadSuccess:a().func,onRenderError:a().func,onRenderSuccess:a().func,pageIndex:function(e,t,r){var n=e[t],i=e.pageNumber,a=e.pdf;if(!sne(a))return null;if(sne(n)){if("number"!==typeof n)return new Error("`".concat(t,"` of type `").concat(uK(n),"` supplied to `").concat(r,"`, expected `number`."));if(n<0)return new Error("Expected `".concat(t,"` to be greater or equal to 0."));var o=a.numPages;if(n+1>o)return new Error("Expected `".concat(t,"` to be less or equal to ").concat(o-1,"."))}else if(!sne(i))return new Error("`".concat(t,"` not supplied. Either pageIndex or pageNumber must be supplied to `").concat(r,"`."));return null},pageNumber:function(e,t,r){var n=e[t],i=e.pageIndex,a=e.pdf;if(!sne(a))return null;if(sne(n)){if("number"!==typeof n)return new Error("`".concat(t,"` of type `").concat(uK(n),"` supplied to `").concat(r,"`, expected `number`."));if(n<1)return new Error("Expected `".concat(t,"` to be greater or equal to 1."));var o=a.numPages;if(n>o)return new Error("Expected `".concat(t,"` to be less or equal to ").concat(o,"."))}else if(!sne(i))return new Error("`".concat(t,"` not supplied. Either pageIndex or pageNumber must be supplied to `").concat(r,"`."));return null},pdf:Dne,registerPage:a().func,renderAnnotationLayer:a().bool,renderForms:a().bool,renderInteractiveForms:a().bool,renderMode:Ane,renderTextLayer:a().bool,rotate:Tne,scale:a().number,unregisterPage:a().func,width:a().number});const vie=c.forwardRef(_ie);Xre(!one,"Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ".concat(pne)),qre.GlobalWorkerOptions.workerSrc="pdf.worker.js";const yie=fe.ZP.div`
  height: 218px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;function bie(e){let{url:t=""}=e;const[r,n]=(0,c.useState)(1),[i,a]=(0,c.useState)(null);if(!t)return null;return(0,ve.jsx)(yie,{children:(0,ve.jsx)(jne,{file:t,onLoadSuccess:e=>{let{numPages:t}=e;a(t)},children:(0,ve.jsx)(vie,{pageNumber:r})})})}const Fie=fe.ZP.div`
  background-color: #fff;
  height: 218px;
  padding: 15px 15px 0 15px;
  line-height: 1.4;
  overflow: scroll;
  white-space: pre-wrap;
  word-break: break-all;
`;function wie(e){let{url:t=""}=e;const[r,n]=(0,c.useState)("");return(0,c.useEffect)((()=>{(async e=>{if(!e)return;const t=await fetch(e),r=await t.text();n(r)})(t)}),[t]),r?(0,ve.jsx)(Fie,{children:r}):null}var kie;function Eie(){return Eie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Eie.apply(this,arguments)}const xie=(e,t)=>{let{title:r,titleId:n,...i}=e;return c.createElement("svg",Eie({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?c.createElement("title",{id:n},r):null,kie||(kie=c.createElement("path",{d:"M16.5303 11.7204L16.4462 11.6478C16.1526 11.4299 15.7359 11.4541 15.4697 11.7204L12.7503 14.4397L12.75 7.75003L12.7432 7.64826C12.6935 7.28218 12.3797 7.00003 12 7.00003L11.8982 7.00688C11.5322 7.05654 11.25 7.37033 11.25 7.75003L11.2503 14.4417L8.52961 11.7198L8.4455 11.6472C8.15193 11.4293 7.73527 11.4534 7.46895 11.7196C7.176 12.0124 7.17591 12.4873 7.46875 12.7803L11.4687 16.7818L11.5529 16.8544C11.8465 17.0724 12.2632 17.0482 12.5295 16.7819L16.5303 12.7811L16.6029 12.6969C16.8208 12.4033 16.7966 11.9867 16.5303 11.7204ZM6.25 3C4.45507 3 3 4.45507 3 6.25V17.75C3 19.5449 4.45507 21 6.25 21H17.75C19.5449 21 21 19.5449 21 17.75V6.25C21 4.45507 19.5449 3 17.75 3H6.25ZM4.5 6.25C4.5 5.2835 5.2835 4.5 6.25 4.5H17.75C18.7165 4.5 19.5 5.2835 19.5 6.25V17.75C19.5 18.7165 18.7165 19.5 17.75 19.5H6.25C5.2835 19.5 4.5 18.7165 4.5 17.75V6.25Z",fill:"#616161"})))},Cie=(0,c.forwardRef)(xie);za().extend(Nre());const Die=e=>{const{file_type:t,name:r,content:n}=e;let i=null;const a={image:/^image/gi,audio:/^audio/gi,video:/^video/gi,code:/(json|javascript|java|rb|c|php|xml|css|html)$/gi,doc:/^text/gi,pdf:/\/pdf$/gi},o=r.split("."),s=t||o[o.length-1];switch(!0){case a.image.test(s):i=(0,ve.jsx)(Lre,{url:n});break;case a.pdf.test(s):i=(0,ve.jsx)(bie,{url:n});break;case a.code.test(s):i=(0,ve.jsx)(wie,{url:n});break;case a.audio.test(s):i=(0,ve.jsx)(Ire,{url:n});break;case a.video.test(s):i=(0,ve.jsx)(jre,{url:n})}return i};function Sie(e){let{preview:t=!1,flex:r,file_type:n,name:i,size:a,created_at:o,from_uid:s,content:u}=e;const l=(0,mn.v9)((e=>e.contacts.byId[s])),c=(0,jo.LP)(n,i);return u&&l&&i?(0,ve.jsxs)(Mre,{className:r?"flex":"",children:[(0,ve.jsxs)("div",{className:"basic",children:[c,(0,ve.jsxs)("div",{className:"info",children:[(0,ve.jsx)("span",{className:"name",children:i}),(0,ve.jsxs)("span",{className:"details",children:[(0,ve.jsx)("i",{className:"size",children:(0,jo.td)(a)}),(0,ve.jsx)("i",{className:"time",children:za()(o).fromNow()}),(0,ve.jsxs)("i",{className:"from",children:["by ",(0,ve.jsx)("strong",{children:l.name})]})]})]}),(0,ve.jsx)("a",{className:"download",download:i,href:u,children:(0,ve.jsx)(Cie,{})})]}),t&&(0,ve.jsx)("div",{className:"preview",children:Die({file_type:n,content:u,name:i})})]}):null}const Aie=e=>{let{from_uid:t,created_at:r,properties:n,content_type:i,content:a,thumbnail:o,edited:s=!1}=e,u=null;switch(i){case"text/plain":u=(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsx)(Are.Z,{componentDecorator:(e,t,r)=>(0,ve.jsx)("a",{target:"_blank",href:e,rel:"noreferrer",children:t},r),children:a}),s&&(0,ve.jsx)("span",{className:"edited",title:za()(s).format("YYYY-MM-DD h:mm:ss A"),children:"(edited)"})]});break;case"text/markdown":u=(0,ve.jsx)(Ore,{content:a});break;case"image/png":case"image/jpeg":{const{width:e,height:t}=(0,jo.CW)(n);u=(0,ve.jsx)("img",{className:"img preview",style:{width:`${e}px`,height:`${t}px`},"data-origin":a,src:o||a})}break;case"rustchat/file":{const{size:e,name:i,file_type:o}=n;u=(0,ve.jsx)(Sie,{from_uid:t,created_at:r,content:a,size:e,name:i,file_type:o})}}return u};function Tie(e){let{mid:t=0}=e;const{msg:r,contactsData:n}=(0,mn.v9)((e=>({msg:e.message[t],contactsData:e.contacts.byId})));if(!r)return null;const{from_uid:i,created_at:a,content_type:o,content:s,thumbnail:u,properties:l}=r,{name:c,avatar:d}=n[i];return(0,ve.jsxs)(Sre,{className:"preview",children:[(0,ve.jsx)("div",{className:"avatar",children:(0,ve.jsx)(yl,{url:d,name:c})}),(0,ve.jsxs)("div",{className:"details",children:[(0,ve.jsxs)("div",{className:"up",children:[(0,ve.jsx)("span",{className:"name",children:c}),(0,ve.jsx)("i",{className:"time",children:za()(a).format("YYYY-MM-DD h:mm:ss A")})]}),(0,ve.jsx)("div",{className:"down",children:Aie({content_type:o,content:s,thumbnail:u,from_uid:i,properties:l})})]})]})}function Oie(e){let{closeModal:t,mid:r=0}=e;const[n,{isLoading:i,isSuccess:a}]=fo();return(0,c.useEffect)((()=>{a&&t()}),[a]),r?(0,ve.jsx)(wo.Z,{children:(0,ve.jsx)(Bl.Z,{buttons:(0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsx)(bn.Z,{onClick:t,children:"Cancel"}),(0,ve.jsx)(bn.Z,{"data-mid":r,onClick:e=>{const{mid:t}=e.target.dataset;t&&n(t)},className:"danger",children:i?"Deleting":"Delete"})]}),title:"Delete Message",description:"Are you sure want to delete this message?",children:(0,ve.jsx)(Tie,{mid:r})})}):null}var Pie=__webpack_require__(4820),Nie=__webpack_require__(8961),Mie=__webpack_require__(3955);const Rie=fe.ZP.ul`
  z-index: 9999;
  position: absolute;
  right: 10px;
  top: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  background-color: #fff;
  visibility: hidden;
  &.visible {
    visibility: visible;
  }
  .cmd {
    display: flex;
    cursor: pointer;
    padding: 4px;
    &:hover {
      background-color: #f3f4f6;
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
  > .picker {
    position: absolute;
    left: -10px;
    top: 0;
    transform: translateX(-100%);
  }
  .menu {
    position: absolute;
    top: 0;
    right: 36px;
  }
`;function jie(e){let{contextId:t=0,mid:r=0,from_uid:n=0,toggleEditMessage:i}=e;const a=(0,mn.I0)(),[o,s]=(0,c.useState)(!1),[u,l]=(0,c.useState)(!1),d=(0,mn.v9)((e=>e.authData.uid)),f=(0,c.useRef)(null),h=e=>{t&&a((0,Wi.MQ)({id:t,mid:r})),e&&rl()},p=()=>{rl(),s((e=>!e))},g=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];l(e)};return(0,ve.jsxs)(Rie,{ref:f,className:"cmds "+(u?"visible":""),children:[(0,ve.jsx)(_l,{onShow:g.bind(null,!0),onHide:g.bind(null,!1),interactive:!0,placement:"left-start",trigger:"click",content:(0,ve.jsx)(Fre,{mid:r,hidePicker:rl}),children:(0,ve.jsx)("li",{className:"cmd",children:(0,ve.jsx)("img",{src:Nie,className:"toggler",alt:"icon emoji"})})}),d==n?(0,ve.jsx)("li",{className:"cmd",onClick:i,children:(0,ve.jsx)("img",{src:Mie,alt:"icon edit"})}):(0,ve.jsx)("li",{className:"cmd",onClick:h,children:(0,ve.jsx)("img",{src:Pie,alt:"icon reply"})}),(0,ve.jsx)(_l,{onShow:g.bind(null,!0),onHide:g.bind(null,!1),interactive:!0,placement:"left-start",trigger:"click",content:(0,ve.jsxs)(Sl,{className:"menu",children:[(0,ve.jsx)("li",{className:"item underline",children:"Pin Message"}),(0,ve.jsx)("li",{className:"item",onClick:h.bind(null,!0),children:"Reply"}),d==n&&(0,ve.jsx)("li",{className:"item danger",onClick:p,children:"Delete Message"})]}),children:(0,ve.jsx)("li",{className:"cmd",children:(0,ve.jsx)("img",{src:Ol,alt:"icon more"})})}),o&&(0,ve.jsx)(Oie,{closeModal:p,mid:r})]})}const Iie=fe.ZP.div`
  width: 100%;
  .input {
    background: #e5e7eb;
    border-radius: 8px;
    padding: 16px;
    textarea {
      outline: none;
      width: 100%;
      background: none;
      resize: unset;
      user-select: text;
      color: #374151;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      word-break: break-all;
      white-space: break-spaces;
    }
  }
  .opts {
    padding: 4px;
    display: flex;
    align-items: center;
    gap: 16px;
    .opt {
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;
      button {
        padding: 0 4px;
        font-size: inherit;
        line-height: inherit;
        background: none;
        cursor: pointer;
        color: #06b6d4;
      }
    }
  }
`;function Bie(e){let{content:t,mid:r,cancelEdit:n}=e;const i=(0,c.useRef)(),[a,o]=(0,c.useState)(!1),[s,u]=(0,c.useState)(!1),[l,d]=(0,c.useState)(t),[f,{isLoading:h,isSuccess:p}]=uo();(0,c.useEffect)((()=>{p&&n()}),[p]),nK("Shift",(e=>{o("keydown"==e.type)}),{eventTypes:["keydown","keyup"],target:i}),nK("Escape",(()=>{n()}),{eventTypes:["keydown","keyup"],target:i});const g=()=>{f({mid:r,content:l})};return(0,ve.jsxs)(Iie,{children:[(0,ve.jsx)("div",{className:"input",children:(0,ve.jsx)(tz,{autoFocus:!0,onFocus:e=>e.currentTarget.setSelectionRange(e.currentTarget.value.length,e.currentTarget.value.length),ref:i,className:"content",maxRows:8,minRows:1,onKeyDown:e=>{u("Enter"===e.key)},onChange:e=>{s&&!a?g():d(e.target.value)},value:l,placeholder:"Edit Message"})}),(0,ve.jsxs)("div",{className:"opts",children:[(0,ve.jsxs)("span",{className:"opt",children:["esc to ",(0,ve.jsx)("button",{onClick:n,children:"cancel"})]}),(0,ve.jsxs)("span",{className:"opt",children:["enter to"," ",(0,ve.jsx)("button",{onClick:g,children:h?"saving":"save"})]})]})]})}function Lie(e){let{contextId:t=0,mid:r="",context:n="user"}=e;const[i]=ho(),a=function(e,t,r){var n=(0,c.useCallback)((function(e){return wte()(e,t,r)}),[t,r]),i=(0,c.useRef)(n(e));return(0,c.useEffect)((function(){i.current=n(e)}),[e,n]),i.current}(i,300),[o,s]=function(e,t){void 0===e&&(e=function(){}),void 0===t&&(t=xte);var r=t.root,n=void 0===r?null:r,i=t.rootMargin,a=t.threshold,o=(0,c.useState)(null),s=o[0],u=o[1],l=(0,c.useState)(!1),d=l[0],f=l[1];(0,c.useEffect)((function(){if(s){var r=new IntersectionObserver((function(t,r){t.forEach((function(e){var t=e.isIntersecting;return f(t)})),e(t,r)}),t);return r.observe(s),function(){r.disconnect()}}}),[s,e,n,i,a]);var h=(0,c.useCallback)((function(e){u(e)}),[]);return[h,d]}(),[u,l]=(0,c.useState)(!1),d=(0,c.useRef)(null),{footprint:f,message:h={},reactionMessageData:p,contactsData:g,loginUid:m}=(0,mn.v9)((e=>({footprint:e.footprint,loginUid:e.authData.uid,reactionMessageData:e.reactionMessage,message:e.message[r]||{},contactsData:e.contacts.byId}))),_=()=>{l((e=>!e))},{reply_mid:v,from_uid:y,created_at:b,sending:F=!1,content:w,thumbnail:k,content_type:E="text/plain",edited:x,properties:C}=h,D="user"==n?f.readUsers[t]:f.readChannels[t];(0,c.useEffect)((()=>{if(s&&!(y==m||r<=D)){a("user"==n?{users:[{uid:+t,mid:r}]}:{groups:[{gid:+t,mid:r}]})}}),[r,D,s,y,m]);const S=p[r],A=g[y]||{};return(0,ve.jsxs)(Sre,{"data-msg-mid":r,ref:o,className:"message "+(s?"in_view":""),children:[(0,ve.jsx)(_l,{interactive:!0,placement:"left",trigger:"click",content:(0,ve.jsx)(xl,{uid:y,type:"card"}),children:(0,ve.jsx)("div",{className:"avatar","data-uid":y,ref:d,children:(0,ve.jsx)(yl,{url:A.avatar,name:A.name})})}),(0,ve.jsxs)("div",{className:"details",children:[(0,ve.jsxs)("div",{className:"up",children:[(0,ve.jsx)("span",{className:"name",children:A.name}),(0,ve.jsx)("i",{className:"time",children:za()(b).format("YYYY-MM-DD h:mm:ss A")})]}),(0,ve.jsxs)("div",{className:"down "+(F?"sending":""),children:[v&&(0,ve.jsx)(Dre,{mid:v}),u?(0,ve.jsx)(Bie,{content:w,mid:r,cancelEdit:_}):Aie({from_uid:y,created_at:b,content_type:E,properties:C,content:w,thumbnail:k,edited:x}),S&&(0,ve.jsx)(Ere,{mid:r,reactions:S})]})]}),!u&&(0,ve.jsx)(jie,{contextId:t,mid:r,from_uid:y,toggleEditMessage:_})]})}const qie=c.memo(Lie,((e,t)=>e.mid==t.mid));function zie(e){let{mids:t=[],messageData:r={},loginUid:n=0,readIndex:i=0}=e;const a=t.filter((e=>{const{from_uid:t=0}=r[e]||{};return t!=n}));if(0==a.length)return 0;if(0==i)return a.length;const o=a.filter((e=>e>i));return o.length}const Hie=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!e)return null;const{content_type:t,content:r}=e;let n=null;switch(t){case yn.bT.text:n=r;break;case yn.bT.imageJPG:case yn.bT.image:n="[image]";break;case yn.bT.markdown:n="[markdown]";break;case yn.bT.file:n="[file]"}return n},Uie=e=>{let{prev:t=null,curr:r=null,contextId:n=0,context:i="user"}=e;if(!r)return null;let{created_at:a,mid:o}=r,s=null,u=za()(a).format("YYYY/MM/DD");if(t){let{created_at:e}=t;za()(e).isSame(a,"day")||(s=u)}else s=u;return(0,ve.jsxs)(c.Fragment,{children:[s&&(0,ve.jsx)(bte,{content:s}),(0,ve.jsx)(qie,{context:i,mid:o,contextId:n},o)]},o)};var Wie=__webpack_require__(9164),Vie=__webpack_require__(3376),$ie=__webpack_require__(5132);const Gie=fe.ZP.header`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .txt {
    display: flex;
    align-items: center;
    gap: 5px;
    .title {
      font-size: 16px;
      line-height: 24px;
      color: #1c1c1e;
    }
    .desc {
      margin-left: 8px;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #616161;
    }
  }
  .opts {
    display: flex;
    align-items: center;
    gap: 16px;
    .opt {
      cursor: pointer;
      width: 24px;
      height: 24px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`,Kie=(fe.ZP.div`
  padding: 3px 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
  position: absolute;
  top: 0;
  left: 10px;
  width: 900px;
  height: 24px;
  background: linear-gradient(135deg, #3c8ce7 0%, #00eaff 100%);
  border-radius: 0px 0px 8px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .clear {
    cursor: pointer;
    color: inherit;
    border: none;
    background: none;
    outline: none;
  }
`,fe.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* todo */
  width: 226px;
  height: calc(100vh - 56px);
  overflow-y: scroll;
  background: #f5f6f7;
  padding: 8px;
  > .add {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
    padding: 10px;
    border-radius: 8px;
    user-select: none;
    &:hover {
      background: rgba(116, 127, 141, 0.1);
    }
    .icon {
      width: 24px;
      height: 24px;
    }
    .txt {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      color: #52525b;
    }
  }
`),Zie=fe.ZP.article`
  position: relative;
  width: 100%;
  /* margin-bottom: 120px; */
  > .wrapper {
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    padding-bottom: 10px;
    height: calc(100vh - 56px);
    .chat {
      padding: 18px 0;
      height: 100%;
      height: -webkit-fill-available;
      overflow: auto;
      > .info {
        padding-top: 114px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        .title {
          font-weight: bold;
          font-size: 36px;
          line-height: 44px;
        }
        .desc {
          color: #78787c;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
        }
        .edit {
          color: #3c8ce7;
          padding: 0;
          border: none;
          outline: none;
          background: none;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
        }
      }
      > .feed {
        /* display: flex;
        flex-direction: column-reverse; */
      }
    }
  }
`;var Yie;function Xie(){return Xie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Xie.apply(this,arguments)}const Qie=(e,t)=>{let{title:r,titleId:n,...i}=e;return c.createElement("svg",Xie({width:14,height:15,viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?c.createElement("title",{id:n},r):null,Yie||(Yie=c.createElement("path",{d:"M7 6.7929L10.5355 3.25736C10.7308 3.0621 11.0474 3.0621 11.2426 3.25736C11.4379 3.45262 11.4379 3.76921 11.2426 3.96447L7.70711 7.5L11.2426 11.0355C11.4379 11.2308 11.4379 11.5474 11.2426 11.7426C11.0474 11.9379 10.7308 11.9379 10.5355 11.7426L7 8.20711L3.46447 11.7426C3.26921 11.9379 2.95262 11.9379 2.75736 11.7426C2.5621 11.5474 2.5621 11.2308 2.75736 11.0355L6.2929 7.5L2.75736 3.96447C2.5621 3.76921 2.5621 3.45262 2.75736 3.25736C2.95262 3.0621 3.26921 3.0621 3.46447 3.25736L7 6.7929Z",fill:"black",fillOpacity:.5})))},Jie=(0,c.forwardRef)(Qie),eae=fe.ZP.div`
  padding: 16px;
  filter: drop-shadow(0px 25px 50px rgba(31, 41, 55, 0.25));
  border-radius: 8px;
  background-color: #fff;
  min-width: 410px;
  > .head {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #374151;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .close {
      width: 12px;
      height: 12px;
      cursor: pointer;
    }
  }
  > .filter {
    width: 376px;
    min-height: 40px;
    padding: 6px 8px;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    background: #ffffff;
    border: 1px solid #e5e7eb;
    box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
    border-radius: 4px;
    .selects {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 5px;
      width: 100%;
      overflow: scroll;

      /* white-space: nowrap; */
      &::-webkit-scrollbar {
        width: 0; /* Remove scrollbar space */
        height: 0; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
      }
      .select {
        padding: 4px 6px;
        background: #52edff;
        border-radius: 4px;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
        .close {
          cursor: pointer;
          width: 12px;
          height: 12px;
          path {
            fill: #fff;
            fill-opacity: 1;
          }
          /* filter: invert(1); */
        }
      }
      .input {
        width: fit-content;
      }
    }
  }
  .users {
    display: flex;
    flex-direction: column;
    /* height: 260px; */
    padding-bottom: 20px;
    max-height: 364px;
    overflow: scroll;
    .user {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 4px 8px;
      /* margin: 0 4px; */
      width: -webkit-fill-available;
      border-radius: 8px;
      &:hover {
        background: rgba(116, 127, 141, 0.1);
      }
      > div {
        width: 100%;
      }
    }
  }
  > .btn {
    width: 100%;
    margin-top: 16px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`;function tae(e){let{uids:t=[],cid:r=null,closeModal:i}=e;const[a,{isLoading:o,isSuccess:s}]=ro(),[u,l]=(0,c.useState)([]),{channel:d,contactData:f}=(0,mn.v9)((e=>({channel:e.channels.byId[r],contactData:e.contacts.byId})));(0,c.useEffect)((()=>{s&&(n.ZP.success("Add members successfully!"),i())}),[s]);const{input:h,updateInput:p,contacts:g=[]}=lc(),m=e=>{let{currentTarget:t}=e;const{uid:r}=t.dataset;u.includes(+r)?l((e=>e.filter((e=>e!=r)))):l([...u,+r])};if(!d)return null;const _=g.map((e=>{let{uid:t}=e;return t}));return(0,ve.jsx)(wo.Z,{children:(0,ve.jsxs)(eae,{children:[(0,ve.jsxs)("div",{className:"head",children:["Add friends to #",d.name," ",(0,ve.jsx)(Jie,{onClick:i,className:"close"})]}),(0,ve.jsx)("div",{className:"filter",children:(0,ve.jsxs)("ul",{className:"selects",children:[u.map((e=>(0,ve.jsxs)("li",{className:"select",children:[f[e].name,(0,ve.jsx)(Jie,{"data-uid":e,onClick:m,className:"close"})]},e))),(0,ve.jsx)(Jn.Z,{autoFocus:!0,type:"text",className:"input none",value:h,onChange:e=>{p(e.target.value)}})]})}),(0,ve.jsx)("ul",{className:"users",children:_.map((e=>{const r=t.includes(e);return(0,ve.jsxs)("li",{"data-uid":e,className:"user",onClick:r?null:m,children:[(0,ve.jsx)(ql,{disabled:r,readOnly:!0,checked:r||u.includes(e),name:"cb",id:"cb"}),(0,ve.jsx)(Dl,{uid:e,interactive:!1})]},e)}))}),(0,ve.jsxs)(bn.Z,{disabled:0==u.length||o,className:"btn",onClick:()=>{a({id:r,members:u})},children:[o?"Adding":"Add"," to #",d.name]})]})})}function rae(e){let{cid:t="",dropFiles:r=[]}=e;const[n,i]=(0,c.useState)(!0),[a,o]=(0,c.useState)(!1),{msgIds:s,userIds:u,data:l,messageData:d}=(0,mn.v9)((e=>({msgIds:e.channelMessage[t]||[],userIds:e.contacts.ids,data:e.channels.byId[t]||{},messageData:e.message||{}}))),f=bc(s),h=()=>{o((e=>!e))},{name:p,description:g,is_public:m,members:_=[]}=l,v=0==_.length?u:_;return(0,ve.jsxs)(ve.Fragment,{children:[a&&(0,ve.jsx)(tae,{cid:t,uids:_,closeModal:h}),(0,ve.jsx)(vte,{to:t,context:"channel",dropFiles:r,header:(0,ve.jsxs)(Gie,{children:[(0,ve.jsxs)("div",{className:"txt",children:[(0,ve.jsx)(sc,{personal:!m}),(0,ve.jsx)("span",{className:"title",children:p}),(0,ve.jsx)("span",{className:"desc",children:g})]}),(0,ve.jsxs)("ul",{className:"opts",children:[(0,ve.jsx)("li",{className:"opt",children:(0,ve.jsx)("img",{src:Wie,alt:"opt icon"})}),(0,ve.jsx)("li",{className:"opt",children:(0,ve.jsx)("img",{src:$ie,alt:"opt icon"})}),(0,ve.jsx)("li",{className:"opt",onClick:()=>{i((e=>!e))},children:(0,ve.jsx)("img",{src:Vie,alt:"opt icon"})})]})]}),contacts:n?(0,ve.jsx)(ve.Fragment,{children:(0,ve.jsxs)(Kie,{children:[!m&&(0,ve.jsxs)("div",{className:"add",onClick:h,children:[(0,ve.jsx)("img",{className:"icon",src:ic}),(0,ve.jsx)("div",{className:"txt",children:"Add members"})]}),v.map((e=>(0,ve.jsx)(Dl,{uid:e,popover:!0},e)))]})}):null,children:(0,ve.jsx)(Zie,{children:(0,ve.jsxs)("div",{className:"wrapper",children:[(0,ve.jsxs)("div",{className:"chat",ref:f,children:[(0,ve.jsxs)("div",{className:"info",children:[(0,ve.jsxs)("h2",{className:"title",children:["Welcome to #",p," !"]}),(0,ve.jsxs)("p",{className:"desc",children:["This is the start of the #",p," channel."," "]})]}),(0,ve.jsx)("div",{className:"feed",children:[...s].sort(((e,t)=>Number(e)-Number(t))).map(((e,r)=>{const n=0==r?null:d[s[r-1]],i=d[e];return Uie({prev:n,curr:i,contextId:t,context:"channel"})}))})]}),(0,ve.jsx)(Qee,{id:t,type:"channel",name:p},t)]})})})]})}var nae=__webpack_require__(3757),iae=__webpack_require__(4825),aae=__webpack_require__(7176);const oae=fe.ZP.header`
  width: 100%;
  height: 100%;
  /* padding: 0 20px 0 10px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* tricky */
  > div {
    padding-left: 4px;
  }
  .txt {
    display: flex;
    align-items: center;
    gap: 5px;
    .title {
      font-size: 16px;
      line-height: 24px;
      color: #1c1c1e;
    }
    .desc {
      margin-left: 8px;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #616161;
    }
  }
  .opts {
    display: flex;
    align-items: center;
    gap: 16px;
    .opt {
      cursor: pointer;
      width: 24px;
      height: 24px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`,sae=fe.ZP.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;
  padding-bottom: 10px;
  height: calc(100vh - 56px);
  > .chat {
    padding: 18px 0;
    height: 100%;
    height: -webkit-fill-available;
    overflow: auto;
  }
`;function uae(e){let{uid:t="",dropFiles:r=[]}=e;const{msgIds:n,currUser:i,messageData:a}=(0,mn.v9)((e=>({currUser:e.contacts.byId[t],msgIds:e.userMessage.byId[t]||[],messageData:e.message}))),o=bc(n);return i?(0,ve.jsx)(vte,{to:t,context:"user",dropFiles:r,header:(0,ve.jsxs)(oae,{children:[(0,ve.jsx)(Dl,{interactive:!1,uid:i.uid}),(0,ve.jsxs)("ul",{className:"opts",children:[(0,ve.jsx)("li",{className:"opt",children:(0,ve.jsx)("img",{src:iae,alt:"opt icon"})}),(0,ve.jsx)("li",{className:"opt",children:(0,ve.jsx)("img",{src:aae,alt:"opt icon"})}),(0,ve.jsx)("li",{className:"opt",children:(0,ve.jsx)("img",{src:nae,alt:"opt icon"})})]})]}),children:(0,ve.jsxs)(sae,{children:[(0,ve.jsx)("div",{className:"chat",ref:o,children:[...n].sort(((e,t)=>Number(e)-Number(t))).map(((e,r)=>{const i=a[e],o=0==r?null:a[n[r-1]];return Uie({prev:o,curr:i,contextId:t,context:"user"})}))}),(0,ve.jsx)(Qee,{type:"user",name:null===i||void 0===i?void 0:i.name,id:null===i||void 0===i?void 0:i.uid},null===i||void 0===i?void 0:i.uid)]})}):null}function lae(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"right-start";const[t,r]=(0,c.useState)(!1),[n,i]=(0,c.useState)({x:0,y:0}),a=t=>{t.preventDefault();const{currentTarget:n,clientX:a,clientY:o}=t,{left:s,top:u,width:l,height:c}=n.getBoundingClientRect();let d,f;"right-start"==e?(d=a-(s+l),f=u+c-o):(d=a-s,f=u-o),i({x:d,y:f}),r(!0)},o=()=>{r(!1)};return{offset:n,visible:t,hideContextMenu:o,handleContextMenuEvent:a}}function cae(e){let{items:t=[],hideMenu:r}=e;return(0,ve.jsx)(Sl,{children:t.map((e=>{if(!e)return null;const{title:t,handler:n=(e=>{e.preventDefault(),r()}),underline:i=!1,danger:a=!1}=e;return(0,ve.jsx)("li",{className:`item ${i?"underline":""} ${a?"danger":""}`,onClick:e=>{n(e),r()},children:t},t)}))})}const dae=(0,fe.ZP)(gn)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: 4px;
  &:hover,
  &.active {
    background: rgba(116, 127, 141, 0.1);
  }
  > .name {
    display: flex;
    align-items: center;
    gap: 8px;
    .txt {
      color: #1c1c1e;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      width: 160px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &.read {
        color: #616161;
      }
    }
  }
  > .icons {
    display: flex;
    align-items: center;
    gap: 4px;
    > .setting {
      visibility: hidden;
      display: flex;
      width: 16px;
      height: 16px;
      background-image: url(${Ki});
      background-size: 16px;
    }
    > .badge {
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      min-width: 20px;
      border-radius: 50%;
      background: #bfbfbf;
      font-weight: 900;
      font-size: 10px;
      line-height: 10px;
      &.dot {
        min-width: unset;
        width: 6px;
        height: 6px;
        padding: 0;
      }
    }
  }
  &:hover > .icons > .setting {
    visibility: visible;
  }
`,fae=e=>{let{id:t,setFiles:r,toggleRemoveConfirm:n}=e;const i=(0,mn.I0)(),a=Wr(),[o]=ho(),{visible:s,offset:u,handleContextMenuEvent:l,hideContextMenu:c}=lae(),{channel:d,mids:f,messageData:h,readIndex:p,loginUid:g}=(0,mn.v9)((e=>({channel:e.channels.byId[t],mids:e.channelMessage[t],messageData:e.message,loginUid:e.authData.uid,readIndex:e.footprint.readChannels[t]}))),[{isActive:m},_]=hte((()=>({accept:[sr],drop(e){let{dataTransfer:n}=e;n.files.length&&(r([...n.files]),a(`/chat/channel/${t}`),setTimeout((()=>{r([])}),300))},collect:e=>({isActive:e.canDrop()&&e.isOver()})}))),{is_public:v,name:y}=d,b=zie({mids:f,messageData:h,readIndex:p,loginUid:g});return(0,ve.jsx)(_l,{interactive:!0,placement:"right-start",offset:[u.y,u.x],visible:s,onClickOutside:c,content:(0,ve.jsx)(cae,{hideMenu:c,items:[{title:"Mark As Read",underline:!0,handler:()=>{const e=f[f.length-1];if(e){o({groups:[{gid:t,mid:e}]})}}},{title:"Mute"},{title:"Notification Settings",underline:!0},v?null:{title:"Invite People"},{title:"Delete Channel",danger:!0,handler:n.bind(null,t)}]}),children:(0,ve.jsxs)(dae,{"data-cid":t,onContextMenu:l,ref:_,className:"link "+(m?"drop_over":""),to:`/chat/channel/${t}`,children:[(0,ve.jsxs)("div",{className:"name",title:y,children:[(0,ve.jsx)(sc,{personal:!v}),(0,ve.jsx)("span",{className:"txt "+(0==b?"read":""),children:y})]}),(0,ve.jsxs)("div",{className:"icons",children:[(0,ve.jsx)("i",{className:"setting",onClick:e=>{e.preventDefault(),e.stopPropagation(),i(fi(t))}}),b>0&&(0,ve.jsx)("i",{className:"badge "+(b>99?"dot":""),children:b>99?null:b})]})]},t)},t)};function hae(e){let{setDropFiles:t}=e;const[r,n]=(0,c.useState)(null),{channelIds:i}=(0,mn.v9)((e=>({channelIds:e.channels.ids,channelData:e.channels.byId}))),a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;n(e)};return(0,ve.jsxs)(ve.Fragment,{children:[i.map((e=>(0,ve.jsx)(fae,{toggleRemoveConfirm:a,id:e,setFiles:t},e))),"undefined"!==typeof r&&(0,ve.jsx)(Wl,{id:r,closeModal:a})]})}za().extend(Nre());const pae=e=>{let{uid:t,mid:r,unreads:n,setFiles:i}=e;const a=(0,mn.I0)(),o=Ur(`/chat/dm/${t}`),[s]=ho(),{currMsg:u,currUser:l}=(0,mn.v9)((e=>({currUser:e.contacts.byId[t],currMsg:e.message[r]}))),c=Wr(),{visible:d,offset:f,handleContextMenuEvent:h,hideContextMenu:p}=lae(),[{isActive:g},m]=hte((()=>({accept:[sr],drop(e){let{dataTransfer:r}=e;r.files.length&&(i([...r.files]),c(`/chat/dm/${t}`),setTimeout((()=>{i([])}),300))},collect:e=>({isActive:e.canDrop()&&e.isOver()})})));return l?(0,ve.jsx)(_l,{interactive:!0,placement:"right-start",offset:[f.y,f.x],visible:d,onClickOutside:p,content:(0,ve.jsx)(cae,{hideMenu:p,items:[{title:"Mark As Read",handler:()=>{s({users:[{uid:t,mid:r}]})}},{title:"Hide Session",danger:!0,handler:()=>{a((0,ji.So)(t)),o&&c("/chat")}}]}),children:(0,ve.jsxs)(gn,{ref:m,className:"session "+(g?"drop_over":""),to:`/chat/dm/${t}`,onContextMenu:h,children:[(0,ve.jsx)(Dl,{compact:!0,interactive:!1,className:"avatar",uid:t}),(0,ve.jsxs)("div",{className:"details",children:[(0,ve.jsxs)("div",{className:"up",children:[(0,ve.jsx)("span",{className:"name",children:l.name}),u&&(0,ve.jsx)("time",{children:za()(u.created_at).fromNow()})]}),(0,ve.jsxs)("div",{className:"down",children:[(0,ve.jsx)("div",{className:"msg",children:Hie(u)}),n>0&&(0,ve.jsx)("i",{className:"badge "+(n>99?"dot":""),children:n>99?null:n})]})]})]},t)},t):null};function gae(e){let{uids:t,setDropFiles:r}=e;const{userMessage:n,messageData:i,readUsers:a,loginUid:o}=(0,mn.v9)((e=>({loginUid:e.authData.uid,readUsers:e.footprint.readUsers,contactData:e.contacts.byId,userMessage:e.userMessage.byId,messageData:e.message})));return t.map((e=>{const t=n[e]||[];if(0==t.length)return{lastMid:null,unreads:0,uid:e};return{lastMid:[...t].pop(),unreads:zie({mids:t,readIndex:a[e],messageData:i,loginUid:o}),uid:e}})).sort(((e,t)=>e.lastMid?t.lastMid-e.lastMid:t.lastMid-1/0)).map((e=>{let{lastMid:t,uid:n,unreads:i}=e;return(0,ve.jsx)(pae,{uid:n,mid:t,unreads:i,setFiles:r},n)}))}function mae(){const[e,t]=(0,c.useState)([]),[r,n]=(0,c.useState)([]),{sessionUids:i}=(0,mn.v9)((e=>({sessionUids:e.userMessage.ids}))),[a,o]=(0,c.useState)(!1),[s,u]=(0,c.useState)(!1),{channel_id:l,user_id:d}=$r(),f=()=>{u((e=>!e))},h=()=>{o((e=>!e))},p=e=>{const{currentTarget:t}=e;t.parentElement.parentElement.classList.toggle("collapse")},g=i.findIndex((e=>e==d))>-1?null:d;return(0,ve.jsxs)(ve.Fragment,{children:[a&&(0,ve.jsx)(cc,{closeModal:h,personal:!0}),s&&(0,ve.jsx)(hc,{closeModal:f}),(0,ve.jsxs)(rc,{children:[(0,ve.jsxs)("div",{className:"left",children:[(0,ve.jsx)(gc,{}),(0,ve.jsxs)("div",{className:"list channels",children:[(0,ve.jsxs)("h3",{className:"title",children:[(0,ve.jsxs)("span",{className:"txt",onClick:p,children:[(0,ve.jsx)(tc,{className:"icon",size:18,color:"#78787C"}),"CHANNELS"]}),(0,ve.jsx)(ec,{onClick:h,size:18,color:"#78787C"})]}),(0,ve.jsx)("nav",{className:"nav",children:(0,ve.jsx)(hae,{setDropFiles:t})})]}),(0,ve.jsxs)("div",{className:"list dms",children:[(0,ve.jsxs)("h3",{className:"title",children:[(0,ve.jsxs)("span",{className:"txt",onClick:p,children:[(0,ve.jsx)(tc,{className:"icon",size:18,color:"#78787C"}),"DIRECT MESSAGE"]}),(0,ve.jsx)(ec,{size:18,color:"#78787C",onClick:f})]}),(0,ve.jsx)("nav",{className:"nav",children:(0,ve.jsx)(gae,{uids:g?[...i,g]:i,setDropFiles:n})})]}),(0,ve.jsx)(yc,{})]}),(0,ve.jsxs)("div",{className:"right",children:[l&&(0,ve.jsx)(rae,{cid:l,dropFiles:e}),d&&(0,ve.jsx)(uae,{uid:d,dropFiles:r})]})]})]})}const _ae=fe.ZP.div`
  display: flex;
  height: 100%;
  > .left {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 260px;
    box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.1);
    .list {
      margin: 12px 8px;
      overflow: scroll;
      padding-bottom: 50px;
      > .nav {
        display: flex;
        flex-direction: column;
        gap: 4px;
        a {
          text-decoration: none;
        }
        .session {
          &:hover,
          &.active {
            background: rgba(116, 127, 141, 0.1);
          }
        }
      }
    }
  }
  .right {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;function vae(){const{user_id:e}=$r(),t=(0,mn.v9)((e=>e.contacts.ids));return t?(0,ve.jsxs)(_ae,{children:[(0,ve.jsxs)("div",{className:"left",children:[(0,ve.jsx)(gc,{}),(0,ve.jsx)("div",{className:"list",children:(0,ve.jsx)("nav",{className:"nav",children:t.map((e=>(0,ve.jsx)(gn,{className:"session",to:`/contacts/${e}`,children:(0,ve.jsx)(Dl,{uid:e})},e)))})}),(0,ve.jsx)(yc,{})]}),e&&(0,ve.jsx)("div",{className:"right",children:(0,ve.jsx)(xl,{uid:e})})]}):null}function yae(e){let{children:t,redirectTo:r="/login"}=e;const{token:n}=(0,mn.v9)((e=>e.authData));return n?t:(0,ve.jsx)(Rr,{to:r,replace:!0})}function bae(e){let{children:t,redirectTo:r="/"}=e;const{token:n}=(0,mn.v9)((e=>e.authData));return n?(0,ve.jsx)(Rr,{to:r,replace:!0}):t}const Fae=fe.ZP.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 .form {
  padding: 36px 40px 32px 40px;
  /* border: 1px solid #eee; */
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: 12px;
  .tips {
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-bottom: 24px;
   .logo {
    width: 56px;
    height: 56px;
    margin-bottom: 28px;
   }
   .title {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #101828;
    margin-bottom: 8px;
   }
  }
  .desc {
   font-weight: normal;
   font-size: 16px;
   line-height: 24px;
   color: #667085;
  }
  form {
   display: flex;
   flex-direction: column;
   gap: 20px;
   input {
    width: 360px;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    padding: 10px 14px;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
   }
  }
  .btn {
   display: inline-block;
   text-align: center;
   width: 100%;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #ffffff;
   padding: 10px;
   background: #1fe1f9;
   border: 1px solid #1fe1f9;
   box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
   border-radius: 8px;
   &.google {
    color: #344054;
    border-color: #d0d5dd;
    background: none;
   }
  }
 }
`;function wae(){const[e,t]=(0,c.useState)(""),[r,i]=(0,c.useState)(!0),[a,o]=(0,c.useState)(""),[s,u]=(0,c.useState)(!1),l=Wr(),[d,{data:f,isLoading:h,isSuccess:p,isError:g,error:m}]=(0,va.l4)(),[_,{data:v,isLoading:y,isSuccess:b}]=Kn();(0,c.useEffect)((()=>{const e=new URLSearchParams(location.search);o(e.get("token"))}),[]),(0,c.useEffect)((()=>{a&&_(a)}),[a]),(0,c.useEffect)((()=>{u(!!b&&v)}),[b,v]);const[F,w]=(0,c.useState)({name:"",email:"",password:""}),k=e=>{const{type:t}=e.target.dataset,{value:r}=e.target;w((e=>(e[t]=r,{...e})))};(0,c.useEffect)((()=>{r||n.ZP.error("two passwords not same")}),[r]),(0,c.useEffect)((()=>{if(p&&f)n.ZP.success("register success, login please"),setTimeout((()=>{l("/login")}),500);else if(g)switch(m.status){case 412:n.ZP.error("register failed: invalid token or expired");break;case 409:{var e;const t={email_conflict:"email conflict",name_conflict:"name conflict"};n.ZP.error(`register failed: ${t[null===(e=m.data)||void 0===e?void 0:e.reason]}`);break}default:n.ZP.error("register failed")}}),[f,p,g,m]);const{email:E,password:x,name:C}=F;return a?y?"checking token valid":s?(0,ve.jsx)(Fae,{children:(0,ve.jsxs)("div",{className:"form animate__animated animate__fadeInDown animate__faster",children:[(0,ve.jsxs)("div",{className:"tips",children:[(0,ve.jsx)("img",{src:`${yn.ZP}/resource/organization/logo`,alt:"logo",className:"logo"}),(0,ve.jsx)("h2",{className:"title",children:"Sign Up to Rustchat"}),(0,ve.jsx)("span",{className:"desc",children:"Please enter your details."})]}),(0,ve.jsxs)("form",{onSubmit:e=>{e.preventDefault(),r?d({...F,magic_token:a,gender:1}):n.ZP.error("two passwords not same")},children:[(0,ve.jsx)("input",{name:"name",value:C,required:!0,placeholder:"Enter your name","data-type":"name",onChange:k}),(0,ve.jsx)("input",{name:"email",value:E,required:!0,placeholder:"Enter your email","data-type":"email",onChange:k}),(0,ve.jsx)("input",{type:"password",value:x,name:"password",required:!0,"data-type":"password",onChange:k,placeholder:"Enter your password"}),(0,ve.jsx)("input",{type:"password",value:e,name:"password",required:!0,"data-type":"password",onBlur:()=>{e&&i(e==F.password)},onChange:e=>{const{value:r}=e.target;t(r)},placeholder:"Enter your password again"}),(0,ve.jsx)("button",{disabled:h||p,className:"btn",type:"submit",children:"Sign Up"})]})]})}):"invite token expires or invalid":"token not found"}const kae=fe.ZP.div`
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 16px;
  .opts {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .list {
    height: 100%;
    overflow-y: scroll;
    width: 100%;
    gap: 8px;
    &.item {
      display: flex;
      flex-direction: column;
      /* align-items: flex-start; */
    }
    &.grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: auto;
    }
  }
`;var Eae;function xae(){return xae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},xae.apply(this,arguments)}const Cae=(e,t)=>{let{title:r,titleId:n,...i}=e;return c.createElement("svg",xae({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?c.createElement("title",{id:n},r):null,Eae||(Eae=c.createElement("path",{d:"M2 3.75C2 3.33579 2.33579 3 2.75 3H10.25C10.6642 3 11 3.33579 11 3.75C11 4.16421 10.6642 4.5 10.25 4.5H2.75C2.33579 4.5 2 4.16421 2 3.75ZM2 11.75C2 11.3358 2.33579 11 2.75 11H9.25C9.66421 11 10 11.3358 10 11.75C10 12.1642 9.66421 12.5 9.25 12.5H2.75C2.33579 12.5 2 12.1642 2 11.75ZM2.75 7C2.33579 7 2 7.33579 2 7.75C2 8.16421 2.33579 8.5 2.75 8.5H13.25C13.6642 8.5 14 8.16421 14 7.75C14 7.33579 13.6642 7 13.25 7H2.75Z",fill:"#344054"})))},Dae=(0,c.forwardRef)(Cae);var Sae;function Aae(){return Aae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Aae.apply(this,arguments)}const Tae=(e,t)=>{let{title:r,titleId:n,...i}=e;return c.createElement("svg",Aae({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?c.createElement("title",{id:n},r):null,Sae||(Sae=c.createElement("path",{d:"M3.5 2C2.67157 2 2 2.67157 2 3.5V5.5C2 6.32843 2.67157 7 3.5 7H5.5C6.32843 7 7 6.32843 7 5.5V3.5C7 2.67157 6.32843 2 5.5 2H3.5ZM10.5 2C9.67157 2 9 2.67157 9 3.5V5.5C9 6.32843 9.67157 7 10.5 7H12.5C13.3284 7 14 6.32843 14 5.5V3.5C14 2.67157 13.3284 2 12.5 2H10.5ZM3.5 9C2.67157 9 2 9.67157 2 10.5V12.5C2 13.3284 2.67157 14 3.5 14H5.5C6.32843 14 7 13.3284 7 12.5V10.5C7 9.67157 6.32843 9 5.5 9H3.5ZM10.5 9C9.67157 9 9 9.67157 9 10.5V12.5C9 13.3284 9.67157 14 10.5 14H12.5C13.3284 14 14 13.3284 14 12.5V10.5C14 9.67157 13.3284 9 12.5 9H10.5Z",fill:"#344054"})))},Oae=(0,c.forwardRef)(Tae),Pae=fe.ZP.ul`
  display: flex;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  box-sizing: border-box;

  .view {
    cursor: pointer;
    padding: 8px;
    box-sizing: border-box;
  }
  &.item .item,
  &.grid .grid {
    border: 1px solid #52edff;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    svg {
      transition: all 0.2s ease;
      path {
        fill: #52edff;
      }
    }
  }
`,Nae={item:"item",grid:"grid"};function Mae(e){let{view:t=Nae.item,toggleView:r}=e;const n=e=>{const{view:n}=e.currentTarget.dataset;n!=t&&r()};return(0,ve.jsxs)(Pae,{className:t,children:[(0,ve.jsx)("li",{className:"view item","data-view":Nae.item,onClick:n,children:(0,ve.jsx)(Dae,{})}),(0,ve.jsx)("li",{className:"view grid","data-view":Nae.grid,onClick:n,children:(0,ve.jsx)(Oae,{})})]})}const Rae=fe.ZP.div`
  padding: 6px 16px;
`;function jae(){return(0,ve.jsx)(Rae,{children:"s"})}const Iae=fe.ZP.div`
  /* padding: 20px 0; */
  display: flex;
  align-items: center;
  gap: 8px;
  .filter {
  }
`;function Bae(){return(0,ve.jsx)(Iae,{children:(0,ve.jsx)("div",{className:"filter",children:"filter item"})})}function Lae(){const e=(0,c.useRef)(null),[t,r]=(0,c.useState)(Nae.item),{fileMessages:n,message:i}=(0,mn.v9)((e=>({message:e.message,fileMessages:e.fileMessage})));return(0,ve.jsxs)(kae,{children:[(0,ve.jsx)(jae,{}),(0,ve.jsx)("div",{className:"divider"}),(0,ve.jsxs)("div",{className:"opts",children:[(0,ve.jsx)(Bae,{}),(0,ve.jsx)(Mae,{view:t,toggleView:()=>{r((e=>e==Nae.item?Nae.grid:Nae.item))}})]}),(0,ve.jsx)("div",{className:`list ${t}`,ref:e,children:n.map((e=>{const r=i[e];if(!r)return null;const{mid:n,content:a,created_at:o,from_uid:s,properties:{name:u,file_type:l,size:c}}=r;return(0,ve.jsx)(Sie,{preview:t==Nae.grid,flex:t==Nae.item,file_type:l,content:a,created_at:o,from_uid:s,size:c,name:u},n)}))})]})}const qae=()=>{const{online:e}=(0,mn.v9)((e=>e.ui));return(0,c.useEffect)((()=>{e?n.ZP.dismiss(0):n.ZP.error("Network Offline!",{duration:1/0})}),[e]),(0,ve.jsx)(hn,{children:(0,ve.jsxs)(Lr,{children:[(0,ve.jsx)(Ir,{path:"/login",element:(0,ve.jsx)(bae,{children:(0,ve.jsx)(ni,{})})}),(0,ve.jsx)(Ir,{path:"/invite",element:(0,ve.jsx)(wae,{})}),(0,ve.jsxs)(Ir,{path:"/",element:(0,ve.jsx)(yae,{children:(0,ve.jsx)(Jl,{})}),children:[(0,ve.jsx)(Ir,{index:!0,element:(0,ve.jsx)(mae,{})}),(0,ve.jsxs)(Ir,{path:"chat",children:[(0,ve.jsx)(Ir,{index:!0,element:(0,ve.jsx)(mae,{})}),(0,ve.jsx)(Ir,{path:"channel/:channel_id",element:(0,ve.jsx)(mae,{})}),(0,ve.jsx)(Ir,{path:"dm/:user_id",element:(0,ve.jsx)(mae,{})})]}),(0,ve.jsxs)(Ir,{path:"contacts",children:[(0,ve.jsx)(Ir,{index:!0,element:(0,ve.jsx)(vae,{})}),(0,ve.jsx)(Ir,{path:":user_id",element:(0,ve.jsx)(vae,{})})]}),(0,ve.jsx)(Ir,{path:"files",element:(0,ve.jsx)(Lae,{})})]}),(0,ve.jsx)(Ir,{path:"*",element:(0,ve.jsx)(vn,{})})]})})};function zae(){return(0,ve.jsx)(mn.zt,{store:_o,children:(0,ve.jsx)(qae,{})})}r.render((0,ve.jsxs)(ve.Fragment,{children:[(0,ve.jsx)(de,{children:(0,ve.jsx)("link",{rel:"icon",href:`${yn.ZP}/resource/organization/logo`})}),(0,ve.jsx)(ge,{}),(0,ve.jsx)(n.x7,{}),(0,ve.jsx)(Xt,{backend:function(e,t,r){return new vr(e,t,r)},children:(0,ve.jsx)(zae,{})}),(0,ve.jsx)(yr,{})]}),document.getElementById("root"))})()})();
//# sourceMappingURL=main.955a1c2f.js.map