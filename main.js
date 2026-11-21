var COLORS=["#19e3b1","#4cc9f0","#f5c542","#ff7a90","#a78bfa","#ff9f45"];
var S=[],pick=COLORS[0],KEY="study-subjects-v2";
{S=["محاسبة ضريبية (٢)","محاسبة مالية متقدمة","نظم محاسبة تكاليف","تحليل وتقييم الشركات","الإحصاء التطبيقي","الأعمال الإلكترونية"].map(function(n,i){return{id:"s"+i,name:n,color:COLORS[i],sections:[]}})}
var IMGS={b2:"img/b2.jpg",b3:"img/b3.jpg",b4:"img/b4.jpg",b5a:"img/b5a.jpg",b5b:"img/b5b.jpg",b6a:"img/b6a.jpg",b6b:"img/b6b.jpg",b7:"img/b7.jpg",st1:"img/st1.jpg",st2:"img/st2.jpg",st3:"img/st3.jpg",st4a:"img/st4a.jpg",st4b:"img/st4b.jpg",st4c:"img/st4c.jpg",st5:"img/st5.jpg",st7a:"img/st7a.jpg",st7b:"img/st7b.jpg",st6a:"img/st6a.jpg",st6b:"img/st6b.jpg",st6c:"img/st6c.jpg",st6d:"img/st6d.jpg",eb1:"img/eb1.jpg",eb2a:"img/eb2a.jpg",eb2b:"img/eb2b.jpg",eb2c:"img/eb2c.jpg",eb3a:"img/eb3a.jpg",eb3b:"img/eb3b.jpg",eb4:"img/eb4.jpg",eb5:"img/eb5.jpg",fa1:"img/fa1.jpg",fa2a:"img/fa2a.jpg",fa2b:"img/fa2b.jpg",fa2c:"img/fa2c.jpg",fa2d:"img/fa2d.jpg",fa4:"img/fa4.jpg",fa5a:"img/fa5a.jpg",fa5b:"img/fa5b.jpg",fa5c:"img/fa5c.jpg",fa5d:"img/fa5d.jpg",fa6a:"img/fa6a.jpg",fa6b:"img/fa6b.jpg",fa6c:"img/fa6c.jpg",fa6d:"img/fa6d.jpg",fa6e:"img/fa6e.jpg",fa7a:"img/fa7a.jpg",fa7b:"img/fa7b.jpg",fa7c:"img/fa7c.jpg",ct1:"img/ct1.jpg",ct2:"img/ct2.jpg",ct3:"img/ct3.jpg",ct4:"img/ct4.jpg",ct5:"img/ct5.jpg",ct6:"img/ct6.jpg"};
var tx=S.find(function(x){return x.id==="s0"||x.name.indexOf("ضريب")>-1});
if(tx){var sc=tx.sections.find(function(y){return y.id==="s0-sec2"});
if(!sc){tx.sections.push({id:"s0-sec2",name:"Section 2",done:false,img:"b2"})}else if(sc){sc.img="b2"}}
if(tx){tx.sections.push({id:"s0-sec3",name:"Section 3",done:false,img:"b3"})}
if(tx){tx.sections.push({id:"s0-sec4",name:"Section 4",done:false,img:"b4"})}
if(tx){tx.sections.push({id:"s0-sec5",name:"Section 5",done:false,img:"b5a,b5b"})}
if(tx){tx.sections.push({id:"s0-sec6",name:"Section 6",done:false,img:"b6a,b6b"})}
if(tx){tx.sections.push({id:"s0-sec7",name:"Section 7",done:false,img:"b7"})}
var st=S.find(function(x){return x.id==="s4"});if(st){st.sections.push({id:"s4-sec1",name:"Section 1",done:false,img:"st1"})}
if(st){st.sections.push({id:"s4-sec2",name:"Section 2",done:false,img:"st2"})}
if(st){st.sections.push({id:"s4-sec3",name:"Section 3",done:false,img:"st3"})}
if(st){st.sections.push({id:"s4-sec4",name:"Section 4",done:false,img:"st4a,st4b,st4c"})}
if(st){st.sections.push({id:"s4-sec5",name:"Section 5",done:false,img:"st5"})}
if(st){st.sections.push({id:"s4-sec6",name:"Section 6",done:false,img:"st6a,st6b,st6c,st6d"})}
if(st){st.sections.push({id:"s4-sec7",name:"Section 7",done:false,img:"st7a,st7b"})}
var eb=S.find(function(x){return x.id==="s5"});
if(eb){eb.sections.push({id:"s5-sec1",name:"Section 1",done:false,img:"eb1"})}
if(eb){eb.sections.push({id:"s5-sec2",name:"Section 2",done:false,img:"eb2a,eb2b,eb2c"})}
if(eb){eb.sections.push({id:"s5-sec3",name:"Section 3",done:false,img:"eb3a,eb3b"})}
if(eb){eb.sections.push({id:"s5-sec4",name:"Section 4",done:false,img:"eb4"})}
if(eb){eb.sections.push({id:"s5-sec5",name:"Section 5",done:false,img:"eb5"})}
var fa=S.find(function(x){return x.id==="s1"});
if(fa){fa.sections.push({id:"s1-sec1",name:"Section 1",done:false,img:"fa1"})}
if(fa){fa.sections.push({id:"s1-sec2",name:"Section 2",done:false,img:"fa2a,fa2b,fa2c,fa2d"})}
if(fa){fa.sections.push({id:"s1-sec4",name:"Section 4",done:false,img:"fa4"})}
if(fa){fa.sections.push({id:"s1-sec5",name:"Section 5",done:false,img:"fa5a,fa5b,fa5c,fa5d"})}
if(fa){fa.sections.push({id:"s1-sec6",name:"Section 6",done:false,img:"fa6a,fa6b,fa6c,fa6d,fa6e"})}
if(fa){fa.sections.push({id:"s1-sec7",name:"Section 7",done:false,img:"fa7a,fa7b,fa7c"})}
var ct=S.find(function(x){return x.id==="s2"});
if(ct){ct.sections.push({id:"s2-sec1",name:"Section 1",done:false,img:"ct1"})}
if(ct){ct.sections.push({id:"s2-sec2",name:"Section 2",done:false,img:"ct2"})}
if(ct){ct.sections.push({id:"s2-sec3",name:"Section 3",done:false,img:"ct3"})}
if(ct){ct.sections.push({id:"s2-sec4",name:"Section 4",done:false,img:"ct4"})}
if(ct){ct.sections.push({id:"s2-sec5",name:"Section 5",done:false,img:"ct5"})}
if(ct){ct.sections.push({id:"s2-sec6",name:"Section 6",done:false,img:"ct6",note:"المثال صفحة 202"})}
var RECS={};
RECS["s0-sec2"]=[{t:"شرح Section 2 (تسجيل صوتي)",src:"audio/sec2.mp4"}];
RECS["s0-sec3"]=[{t:"شرح Section 3 (تسجيل صوتي)",src:"audio/sec3.mp4"}];
RECS["s0-sec4"]=[{t:"شرح Section 4 (تسجيل صوتي)",src:"audio/sec4.mp4"}];
RECS["s0-sec5"]=[{t:"شرح Section 5 (تسجيل صوتي)",src:"audio/sec5.mp4"}];
RECS["s0-sec6"]=[{t:"شرح Section 6 (تسجيل صوتي)",src:"audio/sec6.mp4"}];
RECS["s0-sec7"]=[{t:"شرح Section 7 (تسجيل صوتي)",src:"audio/sec7.mp4"}];

/* ===== UI ===== */
Object.assign(IMGS,{acad:"img/acad_bg.jpg",me:"img/me.jpg",meBig:"img/me_big.jpg",hero:"img/hero.jpg",card_s5:"img/card_s5.jpg",card_s4:"img/card_s4.jpg",card_s1:"img/card_s1.jpg",card_s3:"img/card_s3.jpg",card_s0:"img/card_s0.jpg",card_s2:"img/card_s2.jpg"});
var LANG="ar",VIEW="home",SID=null,CUR=0,GI=0,DONE={};
var ORD=["الأول","الثاني","الثالث","الرابع","الخامس","السادس","السابع"];
var T={ar:{home:"الرئيسية",subjects:"المواد الدراسية",h1a:"كل موادك الدراسية",h1b:"في مكان واحد",tag:"Your Complete University Learning Hub",sub:"منصتك التعليمية للوصول إلى المواد والسكاشن والمحتوى الدراسي بسهولة.",explore:"استكشف المواد",enter:"دخول المادة",sh:"اكتشف جميع المواد وابدأ رحلتك التعليمية.",recent:"أحدث السكاشن المضافة",tab:"السكاشن",prev:"السابق",next:"التالي",done:"مكتمل",undone:"غير مكتمل",sec:"السكشن ",rec:"شرح السكشن (تسجيل صوتي)",soon:"السكاشن هتتضاف هنا قريب."},
en:{home:"Home",subjects:"Subjects",h1a:"All Your Study Subjects",h1b:"In One Place",tag:"Your Complete University Learning Hub",sub:"Your learning platform to access subjects, sections and study content with ease.",explore:"Explore Subjects",enter:"Enter Subject",sh:"Discover all subjects and start your learning journey.",recent:"Recently Added Sections",tab:"Sections",prev:"Previous",next:"Next",done:"Completed",undone:"Incomplete",sec:"Section ",rec:"Section explanation (audio)",soon:"Sections will be added here soon."}};
var M={s5:{ar:"الإلكترونيات",en:"Electronics",c:"#38bdf8"},s4:{ar:"إحصاء تطبيقية",en:"Applied Statistics",c:"#a78bfa"},s1:{ar:"محاسبة مالية متقدمة",en:"Advanced Financial Accounting",c:"#5eead4"},s3:{ar:"تحليل وتقييم الشركات",en:"Company Analysis & Valuation",c:"#60a5fa"},s0:{ar:"محاسبة ضريبية 2",en:"Tax Accounting II",c:"#fbbf24"},s2:{ar:"محاسبة التكاليف",en:"Cost Accounting",c:"#f59e0b"}};
var ORDR=["s5","s4","s1","s3","s0","s2"];
var ART={s5:'<rect x="70" y="25" width="60" height="60" rx="8"/><rect x="85" y="40" width="30" height="30" rx="4"/><path d="M80 25V12M100 25V12M120 25V12M80 85v13M100 85v13M120 85v13M70 40H58M70 60H58M70 78H58M130 40h12M130 60h12M130 78h12"/>',
s4:'<path d="M35 92V62M55 92V42M75 92V56M95 92V26"/><circle cx="148" cy="56" r="28"/><path d="M148 56V28M148 56l24 14"/>',
s1:'<rect x="70" y="12" width="60" height="86" rx="8"/><rect x="80" y="22" width="40" height="16" rx="3"/><path d="M82 54h4M98 54h4M114 54h4M82 68h4M98 68h4M114 68h4M82 82h4M98 82h4M114 82h4"/>',
s3:'<path d="M26 96V56h22v40M48 96V34h26v62M74 96V50h22v46M96 96V22h28v74M124 96V60h22v36M146 96V44h22v52M20 96h160"/>',
s0:'<rect x="52" y="28" width="96" height="54" rx="6"/><text x="100" y="66" text-anchor="middle" font-size="32" font-weight="800" fill="#eaf3ff" stroke="none">TAX</text>',
s2:'<ellipse cx="68" cy="88" rx="28" ry="8"/><ellipse cx="68" cy="75" rx="28" ry="8"/><ellipse cx="68" cy="62" rx="28" ry="8"/><ellipse cx="136" cy="88" rx="28" ry="8"/><ellipse cx="136" cy="75" rx="28" ry="8"/><ellipse cx="136" cy="62" rx="28" ry="8"/><ellipse cx="136" cy="49" rx="28" ry="8"/><ellipse cx="136" cy="36" rx="28" ry="8"/>'};
var HERO='<svg viewBox="0 0 400 300"><ellipse cx="205" cy="288" rx="190" ry="10" fill="rgba(58,160,255,.4)"/><rect x="70" y="236" width="270" height="42" rx="6" fill="#1d4f9c"/><rect x="70" y="252" width="270" height="5" fill="#f3d58a"/><rect x="85" y="198" width="240" height="38" rx="6" fill="#e9e2cf"/><rect x="85" y="212" width="240" height="4" fill="#c9a24a"/><rect x="100" y="160" width="210" height="38" rx="6" fill="#2a6ad0"/><rect x="100" y="174" width="210" height="4" fill="#f3d58a"/><path d="M205 28 85 72l120 46 120-46z" fill="#0b1224" stroke="#4a78c8" stroke-width="2"/><path d="M135 96v32c0 12 32 22 70 22s70-10 70-22V96l-70 26z" fill="#0b1224" stroke="#4a78c8" stroke-width="2"/><path d="M305 78v56" stroke="#f3d58a" stroke-width="4"/><circle cx="305" cy="140" r="7" fill="#f3d58a"/><g fill="rgba(60,140,255,.25)" stroke="#6bb4ff" stroke-width="2"><rect x="8" y="30" width="66" height="66" rx="16"/><rect x="326" y="20" width="66" height="66" rx="16"/><rect x="332" y="124" width="60" height="60" rx="16"/></g><g fill="none" stroke="#dfeeff" stroke-width="3" stroke-linecap="round"><path d="M22 52h17c6 0 10 3 10 8v22c0-4-4-6-10-6H22zM49 52h17v28H55c-4 0-6 2-6 6"/><path d="M344 70V52M356 70V40M368 70V46M344 38l24-12"/><rect x="350" y="136" width="28" height="36" rx="4"/><path d="M356 148h16M356 158h4M366 158h4M356 166h4M366 166h4"/></g></svg>';
var $=id=>document.getElementById(id),t=k=>T[LANG][k];
var h=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
var num=x=>parseInt(x.name.replace(/\D/g,""))||0;
var nm=x=>LANG=="ar"?t("sec")+ORD[num(x)-1]:t("sec")+num(x);
var imgs=x=>(x.img||"").split(",").filter(k=>IMGS[k]);
S.forEach(s=>s.sections.sort((a,b)=>num(a)-num(b)));
var sub=id=>S.find(s=>s.id==id);
function card(id){var m=M[id];return '<article class="sub glass" data-s="'+id+'" style="--c:'+m.c+'"><div class="art"><img src="'+IMGS["card_"+id]+'" alt=""></div><h3>'+m[LANG]+'</h3><small>'+m[LANG=="ar"?"en":"ar"]+'</small><button class="go">'+t("enter")+' →</button></article>'}
function home(){
  var c=ORDR.map(card).join("");
  return '<section class="hero" style="background-image:linear-gradient('+(LANG=="ar"?"to left":"to right")+',rgba(2,10,38,.86),rgba(6,30,90,.45)),url(\''+IMGS.acad+'\')"><div><div class="me" data-big><img src="'+IMGS.me+'" alt=""></div><h1><span>'+t("h1a")+'</span><em>'+t("h1b")+'</em></h1><p class="tg">'+t("tag")+'</p><p>'+t("sub")+'</p><button class="cta" data-go="subjects">'+t("explore")+' →</button></div><div class="hart"><img src="'+IMGS.hero+'" alt=""></div></section><section id="subs"><h2>'+t("subjects")+'</h2><p class="sh">'+t("sh")+'</p><div class="mq"><div class="trk">'+c+c+'</div></div></section>'}
function subj(){
  var m=M[SID],s=sub(SID),L=s.sections,x=L[CUR],body;
  if(!x)body='<div class="viewer glass soon">'+t("soon")+'</div>';
  else{var I=imgs(x),rc=RECS[x.id]||[];
    body='<div class="viewer glass"><h2>'+nm(x)+'</h2>'+(x.note?'<p class="note">'+h(x.note)+'</p>':'')+'<div class="stage">'+(I.length?'<img data-z src="'+IMGS[I[GI]]+'" alt="">':'')+'</div>'+(I.length>1?'<div class="ths">'+I.map((k,i)=>'<img data-g="'+i+'" class="'+(i==GI?"on":"")+'" src="'+IMGS[k]+'" alt="">').join("")+'</div>':'')+rc.map(r=>'<div class="rec"><b>'+t("rec")+'</b><audio controls preload="none" src="'+r.src+'"></audio></div>').join("")+'<div class="nav2"><button data-p>'+t("prev")+'</button><button data-n>'+t("next")+'</button></div></div>'}
  return '<div class="stitle glass"><svg viewBox="0 0 200 110" style="--c:'+m.c+'">'+ART[SID]+'</svg><span>'+m[LANG]+' - '+m[LANG=="ar"?"en":"ar"]+'</span></div><div class="tabs"><span class="tab">'+t("tab")+'</span></div><div class="sv"><aside class="list glass">'+L.map((y,i)=>'<div class="row'+(i==CUR?" on":"")+(DONE[y.id]?" d":"")+'" data-i="'+i+'"><b>'+nm(y)+'</b><small>'+t(DONE[y.id]?"done":"undone")+'</small><button class="ck'+(DONE[y.id]?" d":"")+'" data-k="'+i+'" aria-label="✓">'+(DONE[y.id]?"✓":"")+'</button></div>').join("")+'</aside>'+body+'</div>'}
function render(){
  document.documentElement.lang=LANG;document.documentElement.dir=LANG=="ar"?"rtl":"ltr";
  $("app").innerHTML=VIEW=="home"?home():subj();
  document.querySelectorAll("[data-t]").forEach(e=>e.textContent=t(e.dataset.t));
  document.querySelectorAll("[data-l]").forEach(e=>e.classList.toggle("on",e.dataset.l==LANG));
  $("nh").classList.toggle("on",VIEW=="home");$("ns").classList.toggle("on",VIEW!="home")}
function open_(id,n){SID=id;var L=sub(id).sections,i=L.findIndex(y=>num(y)==n);CUR=i<0?0:i;GI=0;VIEW="sub";render();scrollTo(0,0)}
function toSubs(){if(VIEW!="home"){VIEW="home";render()}$("subs").scrollIntoView()}
document.onclick=e=>{
  var q=s=>e.target.closest(s),el;
  if(el=q("[data-l]")){LANG=el.dataset.l;render();return}
  if(el=q("[data-go]")){if(el.dataset.go=="home"){VIEW="home";render();scrollTo(0,0)}else toSubs();return}
  if(q("[data-big]")){$("lbi").src=IMGS.meBig;$("lb").hidden=false;return}
  if(el=q("[data-s]")){open_(el.dataset.s,1);return}
  if(el=q("[data-k]")){var y=sub(SID).sections[+el.dataset.k];DONE[y.id]=!DONE[y.id];render();return}
  if(el=q("[data-i]")){CUR=+el.dataset.i;GI=0;render();return}
  if(el=q("[data-g]")){GI=+el.dataset.g;render();return}
  if(q("[data-p]")){if(CUR>0){CUR--;GI=0;render()}return}
  if(q("[data-n]")){if(CUR<sub(SID).sections.length-1){CUR++;GI=0;render()}return}
  if(el=q("[data-z]")){$("lbi").src=el.src;$("lb").hidden=false;return}
  if(q("#lb"))$("lb").hidden=true};
render();
