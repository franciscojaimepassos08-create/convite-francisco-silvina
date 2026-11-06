/* Dados principais do casamento */
const WEDDING = {
  date: "2026-12-24T17:00:00",
  time: "17h00",
  venue: "Sala Magna, Universidade Lúrio — Cidade de Nampula",
  address: "Sala Magna, Universidade Lúrio, Nampula, Moçambique",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Sala+Magna+Universidade+Lurio+Nampula+Mocambique",
  whatsapp: "258842820764",
  ceremony: "17h00",
  reception: "Horário a confirmar",
  party: "Horário a confirmar",
  musicUrl: ""
};
const $ = id => document.getElementById(id);
const dateObj = new Date(WEDDING.date);
const validDate = !Number.isNaN(dateObj.getTime());
function dateText(date){return new Intl.DateTimeFormat('pt-PT',{day:'numeric',month:'long',year:'numeric'}).format(date)}
if(validDate){
  $('hero-date').textContent=dateText(dateObj);$('closing-date').textContent=dateText(dateObj).toUpperCase();
  $('month').textContent=new Intl.DateTimeFormat('pt-PT',{month:'long'}).format(dateObj).toUpperCase();
  $('day').textContent=String(dateObj.getDate()).padStart(2,'0');
  $('weekday').textContent=new Intl.DateTimeFormat('pt-PT',{weekday:'long'}).format(dateObj).toUpperCase();$('year').textContent=dateObj.getFullYear();
}
$('event-time').textContent=WEDDING.time;$('venue').textContent=WEDDING.venue;$('ceremony-time').textContent=WEDDING.ceremony;$('reception-time').textContent=WEDDING.reception;$('party-time').textContent=WEDDING.party;
$('map-link').href=WEDDING.mapUrl;
function countdown(){const diff=dateObj.getTime()-Date.now();if(diff<=0){['days','hours','minutes','seconds'].forEach(id=>$(id).textContent='0');return;}$('days').textContent=Math.floor(diff/86400000);$('hours').textContent=String(Math.floor(diff/3600000)%24).padStart(2,'0');$('minutes').textContent=String(Math.floor(diff/60000)%60).padStart(2,'0');$('seconds').textContent=String(Math.floor(diff/1000)%60).padStart(2,'0')}
countdown();setInterval(countdown,1000);
$('open-invite').addEventListener('click',()=>$('convite').scrollIntoView({behavior:'smooth'}));
if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el))}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
$('rsvp-form').addEventListener('submit',event=>{event.preventDefault();const name=$('guest-name').value.trim();const count=$('guest-count').value;const attendance=$('attendance').value;const message=`Olá! Sou ${name}. ${attendance}. Número de pessoas: ${count}. Confirmação para o casamento de Francisco & Silvina.`;window.open(`https://wa.me/${WEDDING.whatsapp}?text=${encodeURIComponent(message)}`,'_blank','noopener')});
const audio=$('background-music');const musicButton=$('music-button');if(WEDDING.musicUrl){audio.src=WEDDING.musicUrl;musicButton.hidden=false}musicButton.addEventListener('click',async()=>{if(audio.paused){try{await audio.play();musicButton.textContent='Ⅱ'}catch(e){alert('Não foi possível iniciar a música.')}}else{audio.pause();musicButton.textContent='♫'}});

// Painel de personalização: as imagens são guardadas localmente no navegador.
const STORAGE_KEY='francisco-silvina-convite-v1';
const panel=$('customizer'),backdrop=$('panel-backdrop');
function openPanel(){panel.classList.add('open');panel.setAttribute('aria-hidden','false');backdrop.classList.add('visible')}
function closePanel(){panel.classList.remove('open');panel.setAttribute('aria-hidden','true');backdrop.classList.remove('visible')}
$('customize-toggle').addEventListener('click',openPanel);$('close-customizer').addEventListener('click',closePanel);backdrop.addEventListener('click',closePanel);
let selectedHero='',selectedDetails='';
function readImage(file,callback){if(!file)return;if(!file.type.startsWith('image/')){alert('Escolhe um ficheiro de imagem.');return}const reader=new FileReader();reader.onload=()=>callback(reader.result);reader.readAsDataURL(file)}
$('hero-photo').addEventListener('change',e=>readImage(e.target.files[0],data=>{selectedHero=data;$('hero-preview').style.backgroundImage=`url("${data}")`;$('hero-preview').textContent=''}));
$('details-photo').addEventListener('change',e=>readImage(e.target.files[0],data=>{selectedDetails=data;$('details-preview').style.backgroundImage=`url("${data}")`;$('details-preview').textContent=''}));
$('overlay-strength').addEventListener('input',e=>{$('overlay-value').textContent=`${e.target.value}%`;document.documentElement.style.setProperty('--overlay',Number(e.target.value)/100)});
function applySettings(settings){if(!settings)return;if(settings.hero){selectedHero=settings.hero;document.querySelector('.hero').style.backgroundImage=`linear-gradient(120deg,rgba(44,29,21,var(--overlay)),rgba(65,43,30,calc(var(--overlay)*.55))),url("${settings.hero}") center/cover`;$('hero-preview').style.backgroundImage=`url("${settings.hero}")`;$('hero-preview').textContent=''}if(settings.details){selectedDetails=settings.details;$('detalhes').style.backgroundImage=`url("${settings.details}")`;$('details-preview').style.backgroundImage=`url("${settings.details}")`;$('details-preview').textContent=''}if(settings.theme){$('theme-choice').value=settings.theme;document.body.dataset.theme=settings.theme}if(settings.overlay){$('overlay-strength').value=settings.overlay;$('overlay-value').textContent=`${settings.overlay}%`;document.documentElement.style.setProperty('--overlay',Number(settings.overlay)/100)}}
function themeChange(theme){const root=document.documentElement;if(theme==='warm'){root.style.setProperty('--paper','#f0e4d2');root.style.setProperty('--white','#fffaf1');root.style.setProperty('--ink','#4b3326');root.style.setProperty('--brown','#704b35');root.style.setProperty('--deep','#39251b');root.style.setProperty('--gold','#a98248');root.style.setProperty('--soft','#e5d3bc')}else if(theme==='light'){root.style.setProperty('--paper','#faf6ed');root.style.setProperty('--white','#fffefa');root.style.setProperty('--ink','#514337');root.style.setProperty('--brown','#6a5544');root.style.setProperty('--deep','#4a392d');root.style.setProperty('--gold','#c0a36b');root.style.setProperty('--soft','#f1eadf')}else{root.style.setProperty('--paper','#f5eee2');root.style.setProperty('--white','#fffdf8');root.style.setProperty('--ink','#49372c');root.style.setProperty('--brown','#654b3b');root.style.setProperty('--deep','#3e2c23');root.style.setProperty('--gold','#b5965d');root.style.setProperty('--soft','#e9dece')}}
$('theme-choice').addEventListener('change',e=>themeChange(e.target.value));
$('save-customization').addEventListener('click',()=>{const settings={hero:selectedHero,details:selectedDetails,theme:$('theme-choice').value,overlay:$('overlay-strength').value};try{localStorage.setItem(STORAGE_KEY,JSON.stringify(settings));applySettings(settings);alert('Personalização guardada neste navegador.')}catch(err){alert('Não foi possível guardar. A fotografia pode ser demasiado grande; experimenta uma imagem mais pequena.')}});
$('reset-customization').addEventListener('click',()=>{localStorage.removeItem(STORAGE_KEY);selectedHero='';selectedDetails='';$('hero-photo').value='';$('details-photo').value='';$('hero-preview').style.backgroundImage='';$('details-preview').style.backgroundImage='';$('hero-preview').textContent='Pré-visualização da capa';$('details-preview').textContent='Pré-visualização dos detalhes';themeChange('classic');$('theme-choice').value='classic';$('overlay-strength').value=55;$('overlay-value').textContent='55%';document.documentElement.style.setProperty('--overlay',.55);document.querySelector('.hero').style.backgroundImage="linear-gradient(120deg,rgba(44,29,21,var(--overlay)),rgba(65,43,30,calc(var(--overlay)*.55))),url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85') center/cover";$('detalhes').style.backgroundImage='';alert('Visual original reposto.')});
try{const saved=localStorage.getItem(STORAGE_KEY);if(saved)applySettings(JSON.parse(saved))}catch(e){console.warn('Não foi possível recuperar a personalização guardada.',e)}
