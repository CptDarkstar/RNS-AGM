import{s as C,v as D,c as O,a as b,n as h}from"../chunks/scheduler.ZABxAMYF.js";import{S as x,i as y,d as k,v as A,e as g,t as E,s as G,c as S,a as $,b as w,f as p,g as M,h as d,j as R,k as N}from"../chunks/index.Qd1TfXfj.js";import{s as q}from"../chunks/entry.A2K3OjCX.js";const B=()=>{const t=q;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},m={subscribe(t){return B().page.subscribe(t)}},j="C:/Users/cptda/OneDrive/Documents/RNS Website/RNS AGM svelte/RNS-AGM-Voting/node_modules/@sveltejs/kit/src/runtime/components/error.svelte";function _(t){let e,i=t[0].status+"",o,l,n,c=t[0].error?.message+"",a;const v={c:function(){e=g("h1"),o=E(i),l=G(),n=g("p"),a=E(c),this.h()},l:function(s){e=S(s,"H1",{});var r=$(e);o=w(r,i),r.forEach(p),l=M(s),n=S(s,"P",{});var f=$(n);a=w(f,c),f.forEach(p),this.h()},h:function(){b(e,j,4,0,57),b(n,j,5,0,81)},m:function(s,r){d(s,e,r),R(e,o),d(s,l,r),d(s,n,r),R(n,a)},p:function(s,[r]){r&1&&i!==(i=s[0].status+"")&&N(o,i),r&1&&c!==(c=s[0].error?.message+"")&&N(a,c)},i:h,o:h,d:function(s){s&&(p(e),p(l),p(n))}};return k("SvelteRegisterBlock",{block:v,id:_.name,type:"component",source:"",ctx:t}),v}function H(t,e,i){let o;D(m,"page"),O(t,m,a=>i(0,o=a));let{$$slots:l={},$$scope:n}=e;A("Error",l,[]);const c=[];return Object.keys(e).forEach(a=>{!~c.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Error> was created with unknown prop '${a}'`)}),t.$capture_state=()=>({page:m,$page:o}),[o]}let W=class extends x{constructor(e){super(e),y(this,e,H,_,C,{}),k("SvelteRegisterComponent",{component:this,tagName:"Error",options:e,id:_.name})}};export{W as component};