import{j as e,r as n,R as b}from"./react-ecb03444.js";import{c as $}from"./react-dom-8a2fca20.js";import{a as N}from"./axios-82afda87.js";import{B as T}from"./react-icons-a7f6411d.js";import{u as S}from"./react-intersection-observer-63860107.js";import{f as i}from"./@faker-js-4a193f06.js";import{c as P}from"./classnames-bc35a1ef.js";import"./scheduler-765c72db.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const I=N.create({baseURL:"https://jsonplaceholder.typicode.com/todos/"}),L=async(t=1)=>(await I.get(`?_page=${t}`)).data,D="_wrapper_1qyjq_1",E={wrapper:D},O=({num:t})=>e.jsx("div",{className:E.wrapper,children:t}),q="_wrapper_ydrp5_1",R="_wrapper__svg_ydrp5_18",h={wrapper:q,wrapper__svg:R},U=()=>e.jsx("button",{className:h.wrapper,children:e.jsx(T,{className:h.wrapper__svg})}),k="_wrapper_gros4_1",A="_wrapper__title_gros4_7",B="_wrapper__buttons_gros4_12",w={wrapper:k,wrapper__title:A,wrapper__buttons:B},M=({todosLength:t})=>e.jsxs("div",{className:w.wrapper,children:[e.jsx("div",{className:w.wrapper__title,children:"Today"}),e.jsxs("div",{className:w.wrapper__buttons,children:[e.jsx(U,{}),e.jsx(O,{num:t})]})]}),x=t=>{const s=+t.getDate(),o=i.date.month({abbreviated:!0}),c=t.toLocaleTimeString().slice(0,5),r=s>10?"PM":"AM";return`${o} ${s}, ${c} ${r}`},f=(t,s)=>{const o=t.trim();return o.length>s?`${o.slice(0,s)}...`:o},V="_wrapper_1rfqm_1",X="_wrapper__primary_1rfqm_11",C="_wrapper__normal_1rfqm_15",u={wrapper:V,wrapper__primary:X,wrapper__normal:C},j=({sheme:t,text:s})=>e.jsx("div",{className:P(u.wrapper,t==="primary"?u.wrapper__primary:u.wrapper__normal),children:e.jsx("p",{children:s})}),F="/assets/todo_avatar-e923e712.jpg",G="_wrapper_1d762_1",H="_wrapper__checkbox_1d762_11",K="_wrapper__title_1d762_15",z="_wrapper__dates_1d762_21",J="_wrapper__footer_1d762_27",Q="_wrapper__tags_1d762_32",W="_wrapper__avatar_1d762_36",_={wrapper:G,wrapper__checkbox:H,wrapper__title:K,wrapper__dates:z,wrapper__footer:J,wrapper__tags:Q,wrapper__avatar:W},Y=n.memo(({id:t,title:s,completed:o})=>{const[c,r]=n.useState(o),a=i.date.anytime(),p=i.date.future({refDate:a}),m=x(a),d=x(p),l=f(i.lorem.sentence(),30),g=i.lorem.word(),y=i.lorem.word();return e.jsxs("div",{className:_.wrapper,children:[e.jsxs("div",{children:[e.jsx("input",{id:`checkbox${t}`,type:"checkbox",checked:c,onChange:()=>r(v=>!v),className:_.wrapper__checkbox}),e.jsx("label",{htmlFor:`checkbox${t}`,className:_.wrapper__title,children:f(s,90)})]}),e.jsxs("div",{className:_.wrapper__dates,children:[e.jsx("div",{children:m}),e.jsx("div",{children:d})]}),e.jsx("div",{children:e.jsx("p",{children:l})}),e.jsxs("div",{className:_.wrapper__footer,children:[e.jsxs("div",{className:_.wrapper__tags,children:[e.jsx(j,{sheme:"primary",text:g}),e.jsx(j,{sheme:"normal",text:y})]}),e.jsx("div",{children:e.jsx("img",{className:_.wrapper__avatar,src:F,alt:"avatar",width:30,height:30})})]})]})}),Z="_wrapper_1c7el_1",ee={wrapper:Z},re=({todos:t,setIsVisible:s,error:o})=>{const{ref:c,inView:r}=S({threshold:.5});n.useEffect(()=>{s(r)},[r]);const a=t.map(p=>e.jsx(Y,{id:p.id,title:p.title,completed:p.completed},p.id));return e.jsxs("div",{ref:c,className:ee.wrapper,children:[o?e.jsx("h2",{children:"Усп, что-то пошло не так"}):"",a,t.length?e.jsx("div",{ref:c}):""]})},te="_wrapper_1f7nw_1",se={wrapper:te},ae=()=>{const[t,s]=n.useState([]),[o,c]=n.useState(""),[r,a]=n.useState(1),[p,m]=n.useState(!1);return n.useEffect(()=>{(async()=>{if(p&&r<=10)try{const d=await L(r);a(l=>l+1),s(l=>[...l,...d])}catch(d){c(d)}})()},[p]),e.jsxs("div",{className:se.wrapper,children:[e.jsx(M,{todosLength:t.length}),e.jsx(re,{todos:t,setIsVisible:m,error:o})]})},oe=()=>e.jsx("div",{children:e.jsx(ae,{})});$.createRoot(document.getElementById("root")).render(e.jsx(b.StrictMode,{children:e.jsx(oe,{})}));
