import"./modulepreload-polyfill-ec808ebb.js";const E=document.getElementById("cookie");document.getElementById("counter");document.getElementById("multiplicator");const _=document.getElementById("bonus-double"),v=document.getElementById("bonus-triple");document.getElementById("bonus-autoclick");document.getElementById("bonus-double-img");document.getElementById("bonus-triple-img");document.getElementById("bonus-auto-img");document.getElementById("bonus-boost");document.getElementById("bonus-boost-img");document.getElementById("spent");const w=document.getElementById("reset");document.getElementById("zero");document.getElementById("titre");let n=[!1,!1,!1,!1,!1,!1];const o={autoclicker:{price:10,base_price:10,duration:10,frequency:10,price_multiplier:1.1},double:{price:10,base_price:10,duration:0,price_multiplier:10},boost_200:{price:10,base_price:10,duration:20,price_multiplier:1.15}};let s=1,u=1,a=s*u,i=0,d=!1;const C=()=>{document.getElementById("numbers").textContent="0",a=1,o.autoclicker.price=o.autoclicker.base_price,o.double.price=o.double.base_price,o.boost_200.price=o.boost_200.base_price,s=1,u=1,M(document.querySelector("#logs")),location.reload()},m=()=>{let e=parseInt(document.querySelector("#numbers").textContent,10);return isNaN(e)?0:e},f=e=>{if(e<0)return;let t=m(),r=t-e<0?0:t-e;document.querySelector("#numbers").textContent=`${r}`},S=e=>{e<0||(document.querySelector("#numbers").textContent=`${m()+e}`)},y=(e,t)=>{let r=t[e].price*t[e].price_multiplier,l=0;for(;l<r;)l+=5;t[e].price=l},$=e=>{let t=document.createElement("p");return t.style=`
      margin-top: 5px; display: flex; justify-content: center; 
      font-size: 15px; flex-direction: column; font-weight: bold; 
      border-left: 2px solid black;
      padding-left: 3px; border-radius: 4px 0 0 4px;
      `,t.textContent=e,t},c=(e,t=document.querySelector("#logs"))=>{i>5&&t.firstChild&&(console.log(t),t.removeChild(t.firstChild),i=i-1>0?i-1:0);let r=$(e);t.appendChild(r),L(5e3,r,t),i++},L=(e,t,r)=>{setTimeout(()=>{!r||!t||(r.removeChild(t),i=i-1>0?i-1:0)},e)},b=(e,t)=>{let r=m();switch(e){case"autoclicker":if(t.autoclicker.price>r)return c(`Cant buy ${e} it cost ${t[e].price}`),!1;f(t[e].price),y(e,t),c(`U have bought ${e}`);break;case"double":if(t.double.price>r)return c(`Cant buy ${e} it cost ${t[e].price}`),!1;f(t[e].price),y(e,t),c(`U have bought ${e}`);break;case"boost_200":if(t.boost_200.price>r)return c(`Cant buy +200% it cost ${t[e].price}`),!1;f(t[e].price),y(e,t),c(`U have bought ${e}`);break}return!0},M=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};function T(e){let t=m();t+=e;var r=document.getElementById("numbers");r.innerHTML=t}const h=(e,t)=>Math.floor(Math.random()*t)+e,k=(e,t=10)=>t<1?Math.ceil(e*10/100):Math.ceil(e*t/100),B=(e,t,r)=>{if(d){r("done"),C();return}if(e<=0){r("done");return}S(a),I(),setTimeout(()=>{B(e-1,t,r)},Math.floor(1e3/t))},q=async(e,t)=>new Promise((r,l)=>{B(e*t,t,r)}),N=()=>{s+=3,g(),setTimeout(()=>{s-=3,n[2]=!1,g(),!d&&c("+200% Stoped")},o.boost_200.duration*1e3)},z=()=>{u*=2,g()},g=()=>{a=u*s},I=()=>{let e=document.createElement("span");e.classList.add("cookieFall");let t=window.innerWidth,r=window.innerHeight,l=k(t),x=k(r,5),p=Math.random()*(100-20+1)+20;e.style.left=h(l,t-l-p)+"px",e.style.top=h(x,Math.ceil(r/4))+"px",e.style.width=p+"px",e.style.height=p+"px",document.body.appendChild(e),setTimeout(()=>{e.remove()},2e3)};document.querySelector("#btn1").addEventListener("click",()=>{n[0]||!b("autoclicker",o)||(n[0]=!0,q(o.autoclicker.duration,o.autoclicker.frequency).then(()=>{c("autoclicker Stoped"),n[0]=!1}))});E.addEventListener("click",()=>{T(a)});E.addEventListener("click",e=>{I()});_.addEventListener("click",()=>{b("double",o)&&z()});w.addEventListener("click",()=>{confirm("Are sure you want to reset ?")&&(d=!0,(n[0]||n[2])&&(d=!0),C())});v.addEventListener("click",()=>{n[2]||!b("boost_200",o)||(n[2]=!0,N())});
