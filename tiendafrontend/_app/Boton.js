import{L as t,S as s,i as e,s as n,e as a,t as c,c as i,b as o,d as l,f as r,h as u,j as h,k as d,v as p,w as b,n as f,M as y,N as m,H as k,I as j,J as O,K as T}from"./start.js";const v=t([]);function E(t){let s,e,n,y,m;return{c(){s=a("label"),e=c("Buscar\n  "),n=a("input"),this.h()},l(t){s=i(t,"LABEL",{});var a=o(s);e=l(a,"Buscar\n  "),n=i(a,"INPUT",{type:!0}),a.forEach(r),this.h()},h(){u(n,"type","search")},m(a,c){h(a,s,c),d(s,e),d(s,n),p(n,t[0]),y||(m=b(n,"input",t[1]),y=!0)},p(t,[s]){1&s&&p(n,t[0])},i:f,o:f,d(t){t&&r(s),y=!1,m()}}}function B(t,s,e){let{busqueda:n}=s;return t.$$set=t=>{"busqueda"in t&&e(0,n=t.busqueda)},[n,function(){n=this.value,e(0,n)}]}class K extends s{constructor(t){super(),e(this,t,B,E,n,{busqueda:0})}}function L(t){let s,e,n,c;return{c(){s=a("button"),this.h()},l(t){s=i(t,"BUTTON",{class:!0}),o(s).forEach(r),this.h()},h(){u(s,"class",e=y(t[1])+" svelte-19kak50")},m(e,a){h(e,s,a),n||(c=b(s,"click",(function(){m(t[0])&&t[0].apply(this,arguments)})),n=!0)},p(n,[a]){t=n,2&a&&e!==(e=y(t[1])+" svelte-19kak50")&&u(s,"class",e)},i:f,o:f,d(t){t&&r(s),n=!1,c()}}}function N(t,s,e){let n;k(t,v,(t=>e(6,n=t)));let{tipo:a="insertar"}=s,{coleccion:c="articulos"}=s,{documento:i={}}=s,o=()=>{},l="",r="";const u=j("URL");function h(){Object.keys(i).length>1&&Object.values(i).every((t=>void 0!==t&&""!=t))&&fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((t=>t.json())).then((t=>{T(v,n=[...n,t],n),b()})).catch((t=>f()))}function d(){fetch(r+i._id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((t=>t.json())).then((t=>b())).catch((t=>f()))}function p(){fetch(r+i._id,{method:"DELETE"}).then((t=>t.json())).then((t=>{T(v,n=n.filter((s=>s._id!==t._id)),n),b()})).catch((t=>f()))}O((()=>{switch(a){case"insertar":e(0,o=h),e(1,l="btn btn-insertar");break;case"modificar":e(0,o=d),e(1,l="btn btn-modificar");break;case"eliminar":e(0,o=p),e(1,l="btn btn-eliminar")}switch(c){case"articulos":r=u.articulos;break;case"clientes":r=u.clientes}}));let b=()=>{OK.style.display="block",setTimeout((()=>OK.style.display="none"),1500)},f=()=>{KO.style.display="block",setTimeout((()=>KO.style.display="none"),1500)};return t.$$set=t=>{"tipo"in t&&e(2,a=t.tipo),"coleccion"in t&&e(3,c=t.coleccion),"documento"in t&&e(4,i=t.documento)},[o,l,a,c,i]}class q extends s{constructor(t){super(),e(this,t,N,L,n,{tipo:2,coleccion:3,documento:4})}}export{K as B,q as a,v as j};
