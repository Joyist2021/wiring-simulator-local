import{dy as o,N as a,V as r}from"#entry";const s=o(e=>{const t=a();if(t.session||t.loadFromStorage(),!t.isLoggedIn)return r({path:"/login",query:{returnTo:e.fullPath}})});export{s as default};
