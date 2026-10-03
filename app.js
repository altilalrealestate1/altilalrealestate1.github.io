'use strict';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const paths={save:'<circle cx="9" cy="7" r="4"/><path d="M2 21v-2a7 7 0 0 1 14 0v2m4-13v6m-3-3h6"/>',plus:'<path d="M12 5v14M5 12h14"/>',phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L9.1 10.9a16 16 0 0 0 4 4l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 2.7 3Z"/>',whatsapp:'<path d="M20.5 3.5a11 11 0 0 0-17 13L2 22l5.6-1.4a11 11 0 0 0 12.9-17.1Z"/><path d="m8 7 1.5 3-1 1c1 2 2.5 3.5 4.5 4.5l1-1 3 1.5c0 2-1.7 3-3.5 2-4-1.5-6.5-4-8-8C5 8.2 6 7 8 7Z" transform="translate(1 -1) scale(.92)"/>',building:'<path d="M4 21V8l7-4v17m0-10 9-5v15M2 21h20M7 10v1m0 3v1m8-3v1m2 3v1m-2 0v1M7 18v3"/>',pin:'<path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',facebook:'<path d="M14 22v-9h3l.5-4H14V6.5c0-1 .3-1.5 1.7-1.5H18V1.5c-.8-.1-2-.3-3.2-.3C11.7 1.2 10 3 10 6v3H7v4h3v9"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 7 9 6 9-6"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>'};
Object.assign(paths,{"phone": "<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.79a2 2 0 0 1-.45 2.11L8.09 9.89a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.35 1.83.58 2.79.7A2 2 0 0 1 22 16.92Z\"/>", "whatsapp": "<path fill=\"currentColor\" stroke=\"none\" d=\"M20.5 3.5A11.8 11.8 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.16 1.6 5.97L0 24l6.25-1.64a11.92 11.92 0 0 0 5.8 1.48h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.18-3.49-8.41Zm-8.44 18.32h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.71.98.99-3.62-.24-.37a9.88 9.88 0 1 1 8.36 4.6Zm5.42-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47a8.95 8.95 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z\"/>", "marketing": "<path d=\"m3 11 18-6v14L3 13v-2Zm4 3 2 7h3l-2-6M21 3v18\"/>", "valuation": "<path d=\"m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z\"/><path d=\"M9 14h6m-3-3v7\"/>", "management": "<rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"2\"/><path d=\"M8 7h2m4 0h2M8 11h2m4 0h2M10 21v-6h4v6\"/>", "key": "<circle cx=\"8\" cy=\"8\" r=\"5\"/><path d=\"m12 12 9 9m-4-4 3-3m-6 0 3-3\"/>", "contract": "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6M8 12h8m-8 4h5\"/>", "survey": "<path d=\"m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15\"/>", "gift": "<rect x=\"3\" y=\"8\" width=\"18\" height=\"4\" rx=\"1\"/><path d=\"M5 12v9h14v-9M12 8v13M12 8H8a3 3 0 1 1 3-3l1 3Zm0 0h4a3 3 0 1 0-3-3l-1 3Z\"/>", "copy": "<rect x=\"8\" y=\"8\" width=\"13\" height=\"13\" rx=\"2\"/><path d=\"M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3\"/>", "unlock": "<rect x=\"4\" y=\"11\" width=\"16\" height=\"10\" rx=\"2\"/><path d=\"M8 11V7a4 4 0 0 1 8 0m-4 8v2\"/>", "stamp": "<path d=\"M5 21h14M4 17h16v-3a2 2 0 0 0-2-2h-3V8a3 3 0 1 0-6 0v4H6a2 2 0 0 0-2 2v3Z\"/>", "license": "<rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"2\"/><path d=\"M8 7h8m-8 4h5m-4 5 2 2 4-4\"/>"});
const serviceIcons=[["marketing","valuation","management","key"],["contract","survey","gift","copy","unlock"],["stamp","license"]];
paths.arrow='<path d="M7 17 17 7M7 7h10v10"/>';
const icon=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${paths[n]||''}</svg>`;
$$('[data-icon]').forEach(e=>e.innerHTML=icon(e.dataset.icon));
let lang='ar',panel=null,serviceTab=0,lastFocus=null,closing=false;
try{const saved=localStorage.getItem('altilal-language');if(saved==='ar'||saved==='en'){lang=saved}}catch{}
const t=(ar,en)=>lang==='ar'?ar:en;
const companyAr='مؤسسة التلال الحديثة الشاملة للعقارات';
const companyEn='Al Tilal Modern Comprehensive Real Estate Establishment';
const serviceGroups=[{short:['عقارات','Property'],title:['خدماتنا العقارية','Real Estate Services'],items:[['الوساطة والتسويق العقاري','Real estate brokerage & marketing'],['البيع والتثمين','Sales & valuation'],['إدارة العقارات','Property management'],['تأجير العقارات','Property leasing']]},{short:['الإسكان','Housing'],title:['وزارة الإسكان والتخطيط العمراني','Ministry of Housing & Urban Planning'],items:[['عقود البيع','Sale contracts'],['تجديد الرسم المساحي','Survey plan renewal'],['حصر الإرث والهبة','Inheritance & gift transactions'],['بدل فاقد وبدل تالف','Replacement of lost or damaged documents'],['فك الرهن والمعاملات الأخرى','Mortgage release & other transactions']]},{short:['البلديات','Municipalities'],title:['خدمات البلديات','Municipal Services'],items:[['طباعة وتجديد وتصديق عقود الإيجار','Lease contract printing, renewal & attestation'],['إصدار وتجديد التراخيص','License issuance & renewal']]}];
function whatsAppLink(number,message){return 'https://api.whatsapp.com/send?phone='+number+'&text='+encodeURIComponent(message)}
function whatsApp(message){return whatsAppLink('96894898989',message)}
function whatsAppAttr(message){return whatsApp(message).replace(/&/g,'&amp;')}
function updateLanguage(){document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';$$('[data-ar]').forEach(e=>e.innerHTML=e.dataset[lang]);$('#main-nav').ariaLabel=t('التواصل والخدمات','Contact and services');$('#estate').ariaLabel=t('أبرز الخدمات العقارية','Real estate highlights');$('#brand-art').alt=t('شعار '+companyAr,'Al Tilal Real Estate emblem');$('#language').ariaLabel=t('Switch to English','التغيير إلى العربية');$('#close-panel').ariaLabel=t('إغلاق','Close');document.title=t('التلال للعقارات | بطاقة التواصل','Al Tilal Real Estate | Contact Card');if(panel)renderPanel()}
function selectLanguage(next){lang=next;try{localStorage.setItem('altilal-language',lang)}catch{}updateLanguage()}
$('#language').addEventListener('click',()=>selectLanguage(lang==='ar'?'en':'ar'));
$('#panel-language').addEventListener('click',()=>selectLanguage(lang==='ar'?'en':'ar'));
function openPanel(type,tab=0){panel=type;serviceTab=tab;lastFocus=document.activeElement;closing=false;$('#details').classList.remove('closing');renderPanel();$('#details').showModal();$('#close-panel').focus()}
function closePanel(){if(closing)return;closing=true;$('#details').classList.add('closing');setTimeout(()=>{$('#details').close();$('#details').classList.remove('closing');panel=null;closing=false;lastFocus?.focus({preventScroll:true})},matchMedia('(prefers-reduced-motion: reduce)').matches?0:280)}
$$('[data-panel]').forEach(b=>b.addEventListener('click',()=>openPanel(b.dataset.panel)));
$$('[data-open-service]').forEach(b=>b.addEventListener('click',()=>openPanel('services',Number(b.dataset.openService))));
$('#close-panel').addEventListener('click',closePanel);
$('#details').addEventListener('cancel',e=>{e.preventDefault();closePanel()});
$('#details').addEventListener('click',e=>{if(e.target===$('#details')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closePanel()}});
function heading(title,description=''){return `<h2 class="panel-title" id="panel-title">${title}</h2>${description?`<p class="panel-description">${description}</p>`:''}`}
function linkRow(label,value,url,type='mail'){return `<a class="detail-link" href="${url.replace(/&/g,'&amp;')}" ${url.startsWith('https:')?'target="_blank" rel="noopener noreferrer"':''}><span class="detail-icon">${icon(type)}</span><div><strong>${label}</strong><small dir="ltr">${value}</small></div></a>`}
function renderPanel(){
 $('#details').dataset.panel=panel;
 $('#details').dataset.category=String(serviceTab);
 $('#panel-eyebrow').textContent=t('التلال للعقارات','AL TILAL REAL ESTATE');
 let html='';
 if(panel==='services'){
  const group=serviceGroups[serviceTab];
  html=heading(t('خدماتنا','Our Services'),t('نسعد بتقديم مجموعة متكاملة من الخدمات العقارية وإنجاز المعاملات بكل احترافية واهتمام.','We are pleased to offer comprehensive real estate services and handle your transactions with professionalism and care.'));
  html+=`<div class="service-tabs" role="tablist" aria-label="${t('فئات الخدمات','Service categories')}">${serviceGroups.map((g,i)=>`<button role="tab" id="service-tab-${i}" aria-controls="service-content" aria-selected="${i===serviceTab}" tabindex="${i===serviceTab?0:-1}" data-service="${i}" class="${i===serviceTab?'active':''}">${t(...g.short)}</button>`).join('')}</div>`;
  html+=`<div class="service-content" id="service-content" role="tabpanel" aria-labelledby="service-tab-${serviceTab}" tabindex="0"><h3 class="service-heading">${t(...group.title)}</h3><ul class="service-list">${group.items.map((item,i)=>`<li style="animation-delay:${i*110+70}ms"><span class="service-icon">${icon(serviceIcons[serviceTab][i])}</span><span class="service-text">${t(...item)}</span></li>`).join('')}</ul></div><a class="panel-cta" target="_blank" rel="noopener noreferrer" href="${whatsAppAttr(t('مرحبًا، أود الاستفسار عن خدمات: ','Hello, I would like to enquire about: ')+t(...group.title))}">${icon('whatsapp')}${t('استفسر عن هذه الخدمات','Enquire about these services')}</a>`;
 }else if(panel==='email'){
  html=heading(t('البريد الإلكتروني','Email'),t('اختر القسم الذي ترغب بالتواصل معه.','Choose the team you would like to contact.'))+`<div class="detail-links">${linkRow(t('البريد الرسمي','General enquiries'),'info@altilal.om','mailto:info@altilal.om')}${linkRow(t('مدير الشركة','Company director'),'adil@altilal.om','mailto:adil@altilal.om')}${linkRow(t('الإدارة العامة','General management'),'mahmoud@altilal.om','mailto:mahmoud@altilal.om')}</div>`;
 }else if(panel==='whatsapp'||panel==='call'){
  const isWA=panel==='whatsapp';
  const url=number=>isWA?whatsAppLink(number,t('مرحبًا، أود الاستفسار عن خدمات التلال للعقارات.','Hello, I would like to enquire about Al Tilal Real Estate services.')):'tel:+'+number;
  html=heading(isWA?t('واتس أب','WhatsApp'):t('اتصال مباشر','Call Now'),t('اختر جهة التواصل المناسبة لك.','Choose who you would like to contact.'))+`<div class="detail-links">${linkRow(t('الاستفسارات والخدمات','Enquiries & services'),'+968 9489 8989',url('96894898989'),isWA?'whatsapp':'phone')}${linkRow(t('مدير الشركة','Company director'),'+968 9964 7482',url('96899647482'),isWA?'whatsapp':'phone')}</div>`;
 }else if(panel==='location'){
  html=heading(t('موقعنا وساعات العمل','Location & Opening Hours'),t('اختر عرض الموقع أو مواعيد زيارتنا.','Find us on the map or view our opening hours.'))+`<div class="detail-links">${linkRow(t('موقعنا على الخريطة','Find us on the map'),t('فتح خرائط Google','Open Google Maps'),'https://maps.app.goo.gl/egFAixnUZFZN1ZVo7?g_st=ic','pin')}<button class="detail-link" data-show-hours><span class="detail-icon">${icon('clock')}</span><div><strong>${t('ساعات العمل','Opening Hours')}</strong><small>${t('عرض المواعيد','View schedule')}</small></div></button></div>`;
 }else if(panel==='hours'){

  html=`<button class="panel-back" data-back-location>${t('العودة إلى موقعنا','Back to location')}</button>`+heading(t('أوقات العمل','Opening Hours'),t('بتوقيت سلطنة عُمان','Oman time (GMT+4)'))+`<div class="schedule"><div class="schedule-row"><h3>${t('الأحد – الأربعاء','Sunday – Wednesday')}</h3><p>${t('8:30 ص – 2:00 م','8:30 AM – 2:00 PM')}</p><p>${t('5:00 م – 7:30 م','5:00 PM – 7:30 PM')}</p></div><div class="schedule-row"><h3>${t('الخميس','Thursday')}</h3><p>${t('8:30 ص – 2:00 م','8:30 AM – 2:00 PM')}</p></div><div class="schedule-row"><h3>${t('الجمعة والسبت','Friday & Saturday')}</h3><p>${t('مغلق','Closed')}</p></div></div>`;
 }
 $('#panel-body').innerHTML=html;
}
$('#panel-body').addEventListener('click',e=>{if(e.target.closest('[data-show-hours]')){swapPanel('hours','.panel-back');return}if(e.target.closest('[data-back-location]')){swapPanel('location','[data-show-hours]');return}const tab=e.target.closest('[data-service]');if(tab){serviceTab=Number(tab.dataset.service);renderPanel();$(`#service-tab-${serviceTab}`).focus()}});
$('#panel-body').addEventListener('keydown',e=>{if(!e.target.matches('[data-service]'))return;let next=serviceTab;if(e.key==='Home')next=0;else if(e.key==='End')next=2;else if(e.key==='ArrowRight')next=(serviceTab+(lang==='ar'?2:1))%3;else if(e.key==='ArrowLeft')next=(serviceTab+(lang==='ar'?1:2))%3;else return;e.preventDefault();serviceTab=next;renderPanel();$(`#service-tab-${next}`).focus()});
let swapping=false;
function swapPanel(next,focusSelector){
 if(swapping)return;
 const dialog=$('#details'),body=$('#panel-body');
 const finish=()=>{panel=next;renderPanel();$(focusSelector)?.focus({preventScroll:true})};
 if(matchMedia('(prefers-reduced-motion: reduce)').matches||!dialog.animate){finish();return}
 swapping=true;
 const from=dialog.getBoundingClientRect().height;
 body.classList.add('swap-out');
 setTimeout(()=>{
  finish();
  body.classList.remove('swap-out');body.classList.add('swap-in');
  const to=dialog.getBoundingClientRect().height;
  dialog.classList.add('resizing');
  const grow=dialog.animate([{height:from+'px'},{height:to+'px'}],{duration:340,easing:'cubic-bezier(.22,.61,.36,1)'});
  const done=()=>{dialog.classList.remove('resizing');swapping=false};
  grow.onfinish=done;grow.oncancel=done;
  requestAnimationFrame(()=>requestAnimationFrame(()=>body.classList.remove('swap-in')));
 },220);
}
let toastTimer;
function toast(text){$('#toast').textContent=text;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),5200)}
function vEscape(text){return text.replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/;/g,'\\;').replace(/,/g,'\\,')}
function foldLine(line){let result='',current='',bytes=0;const encoder=new TextEncoder();for(const character of line){const size=encoder.encode(character).length;if(bytes+size>75){result+=current+'\r\n';current=' ';bytes=1}current+=character;bytes+=size}return result+current}
function makeVCard(){const name=t('عادل الحضرمي','Adil Al Hadhrami');return ['BEGIN:VCARD','VERSION:3.0','N;CHARSET=UTF-8:'+t('الحضرمي;عادل;;;','Al Hadhrami;Adil;;;'),'FN;CHARSET=UTF-8:'+name,'ORG;CHARSET=UTF-8:'+vEscape(companyAr),'TEL;TYPE=CELL,VOICE,PREF:+96899647482','item1.TEL;TYPE=CELL:+96899647482','item1.X-ABLabel:WhatsApp','EMAIL;TYPE=WORK,INTERNET,PREF:info@altilal.om','URL:https://www.instagram.com/altilal.re/','X-SOCIALPROFILE;TYPE=instagram:https://www.instagram.com/altilal.re/','NOTE;CHARSET=UTF-8:'+vEscape('عادل الحضرمي | Adil Al Hadhrami\n'+companyAr+'\n'+companyEn+'\nWhatsApp: +96899647482\nInstagram: @altilal.re'),'END:VCARD'].map(foldLine).join('\r\n')+'\r\n'}
$('#save-contact').addEventListener('click',()=>{const blob=new Blob([makeVCard()],{type:'text/vcard;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='Adil-Al-Hadhrami-Al-Tilal.vcf';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);toast(t('تم تجهيز جهة الاتصال. أكمل إضافتها من شاشة الحفظ في هاتفك.','Your contact card is ready. Complete the save step on your phone.'))});
updateLanguage();$('#card').classList.add('ready');
