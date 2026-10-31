const instagramNote='*Instagram — продукт Meta Platforms Inc., деятельность которой запрещена на территории РФ';
function makeInstagramNote(){const note=document.createElement('p');note.className='instagram-note';note.textContent=instagramNote;return note}
const projects=document.querySelector('#projects'),filters=document.querySelector('#filters'),viewer=document.querySelector('#viewer');let selected='all',limit=6;
const all=FOLDERS.flatMap(f=>f.series.map(s=>({...s,category:f.title,folder:f.id})));
function renderFilters(){filters.replaceChildren();[{id:'all',title:'Все проекты'},...FOLDERS].forEach(f=>{const b=document.createElement('button');b.textContent=f.title;b.className=selected===f.id?'active':'';b.setAttribute('aria-pressed',selected===f.id);b.onclick=()=>{selected=f.id;limit=6;renderFilters();render()};filters.append(b)})}
function render(){projects.replaceChildren();const list=all.filter(p=>selected==='all'||p.folder===selected);list.slice(0,limit).forEach(p=>{const b=document.createElement('button');b.className='project';if(p.folder==='pres')b.classList.add('project-presentation');const box=document.createElement('div');box.className='image';const img=document.createElement('img');img.src=p.cover||p.files[0];img.alt=p.title;img.loading='lazy';box.append(img);const info=document.createElement('div');info.className='project-info';const text=document.createElement('div'),title=document.createElement('h3'),small=document.createElement('small'),arrow=document.createElement('span');title.textContent=p.title;small.textContent=p.category;arrow.innerHTML='<svg class="ui-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';text.append(title,small);info.append(text,arrow);b.append(box,info);if(/instagram/i.test(p.title+" "+(p.text||"")))b.append(makeInstagramNote());b.onclick=()=>openProject(p);projects.append(b)});document.querySelector('#more').hidden=limit>=list.length}
function openProject(p){document.querySelector('#project-title').textContent=p.title;document.querySelector('#project-category').textContent=p.category;document.querySelector('#project-text').textContent=p.text||'';document.querySelector('#project-text').dataset.project=p.id;const images=document.querySelector('#project-images');images.replaceChildren();p.files.forEach((file,i)=>{const img=document.createElement('img');img.src=file;img.alt=p.title+' — '+(i+1);img.loading=i?'lazy':'eager';images.append(img)});if(/instagram/i.test(p.title+" "+(p.text||"")))images.append(makeInstagramNote());viewer.showModal();viewer.scrollTop=0}
document.querySelector('#more').onclick=()=>{limit+=6;render()};document.querySelector('#close').onclick=document.querySelector('#close-bottom').onclick=()=>viewer.close();viewer.addEventListener('click',e=>{if(e.target===viewer){const r=viewer.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)viewer.close()}});renderFilters();render();

// Pink pointer for devices with a precise mouse. Keyboard and touch stay native.
(()=>{
 const mouse=matchMedia('(hover: hover) and (pointer: fine)');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const dot=document.createElement('div');dot.className='pink-cursor';dot.setAttribute('aria-hidden','true');document.body.append(dot);
 const interactive='a,button,input,textarea,select,summary,[role="button"],[tabindex]:not([tabindex="-1"])';
 let x=0,y=0,frame=0,visible=false;
 const hide=()=>{visible=false;document.documentElement.classList.remove('custom-cursor-active');dot.classList.remove('is-visible','is-large')};
 const draw=()=>{frame=0;dot.style.left=x+'px';dot.style.top=y+'px'};
 document.addEventListener('pointermove',e=>{
  if(!mouse.matches||e.pointerType!=='mouse'){hide();return}
  x=e.clientX;y=e.clientY;if(!frame)frame=requestAnimationFrame(draw);
  if(!visible){visible=true;document.documentElement.classList.add('custom-cursor-active');dot.classList.add('is-visible')}
  dot.classList.toggle('is-large',!!e.target.closest(interactive));
 },{passive:true,capture:true});
 document.addEventListener('pointerover',e=>{if(visible)dot.classList.toggle('is-large',!!e.target.closest(interactive))},{passive:true});
 document.documentElement.addEventListener('pointerleave',hide);window.addEventListener('blur',hide);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)hide()});
 document.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')hide()},{passive:true});
 mouse.addEventListener('change',hide);
 // A dialog is rendered in the browser top layer: keep its cursor there too.
 const dialog=document.querySelector('#viewer');
 if(dialog)new MutationObserver(()=>{(dialog.open?dialog:document.body).append(dot)}).observe(dialog,{attributes:true,attributeFilter:['open']});
 const setMotion=()=>dot.classList.toggle('no-motion',reduced.matches);setMotion();reduced.addEventListener('change',setMotion);
})();

// Alternating handwritten title, with pauses between typed messages.
(()=>{
 const title=document.querySelector('.hero .hero-script');if(!title)return;
 const words=['brand designer','graphic designer'];
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 title.setAttribute('aria-label','brand designer / graphic designer');
 let text;
 const paint=value=>{const next=document.createElement('span');next.setAttribute('aria-hidden','true');next.textContent=value;title.replaceChildren(next);text=next};
 paint('');
 let word=0,count=0,deleting=false,timer=null,inView=true;
 const stop=()=>{clearTimeout(timer);timer=null};
 const schedule=delay=>{stop();if(!reduce.matches&&!document.hidden&&inView)timer=setTimeout(tick,delay)};
 function tick(){
  timer=null;if(reduce.matches||document.hidden||!inView)return;
  count+=deleting?-1:1;paint(words[word].slice(0,count));
  if(!deleting&&count===words[word].length){deleting=true;schedule(2100)}
  else if(deleting&&count===0){deleting=false;word=(word+1)%words.length;schedule(400)}
  else schedule(deleting?55:115);
 }
 const restart=()=>{stop();if(reduce.matches){paint(words[0]);title.classList.remove('is-typing')}else{title.classList.add('is-typing');schedule(350)}};
 reduce.addEventListener('change',restart);
 document.addEventListener('visibilitychange',()=>document.hidden?stop():schedule(300));
 new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;if(inView)schedule(350);else stop()}).observe(title.closest('.hero'));
 restart();
})();
