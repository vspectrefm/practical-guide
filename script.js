const groups = {
  students: [
    {name:"Tansy Wren", role:"First Guide // Bog-born", trait:"Bog-born", bio:"Dry-humored, practical, and difficult to impress. Tansy knows what the wetlands are doing before most people have noticed the wetlands are doing anything.", image:"tansy-wren"},
    {name:"Poppy Rake", role:"Student // School Menace", trait:"Impish", bio:"A cheerful bad idea in student uniform. Poppy collects dangerous objects, ignores implications, and has survived mostly through speed, luck, and knowing exactly when to duck.", image:"poppy-rake"},
    {name:"Lilac Morrow", role:"Top Student // Flowerkin", trait:"Flowerkin", bio:"Elegant, brilliant, and naturally beautiful in a world where beauty is often trying to get close enough to bite. Her floral traits react visibly to emotion.", image:"lilac-morrow"},
    {name:"Nettie Foss", role:"Student // Roommate", trait:"Burrowfolk", bio:"Cozy, sleepy, and alarmingly well informed about things that dissolve bone. Nettie is the kind of person who already packed a snack, a blanket, and an antidote.", image:"nettie-foss"},
    {name:"Sorrel Ashdown", role:"Student // Family Historian", trait:"Mixed Lineage", bio:"Bright, earnest, and thrilled to discover that his great-grandmother was supposedly human. He assumes she died generations ago and treats the whole thing as fascinating family trivia.", image:"sorrel-ashdown"},
    {name:"Mallow Croft", role:"Student // Bell Tower Resident", trait:"Batfolk", bio:"Sleeps upside down in the bell tower rafters because beds are uncomfortable. Knows most things that happen after midnight and considers this entirely ordinary.", image:"mallow-croft"},
    {name:"Clement Quirk", role:"Student // Human Expert*", trait:"Lagomorph", bio:"Brackenmere’s self-appointed authority on humans. Enthusiastic, diligent, and wrong about almost everything. *Credential disputed by the current human.", image:"clement-quirk"},
    {name:"Juniper Tallow", role:"Student // Creature Enthusiast", trait:"Deerkin", bio:"Has been bitten, swallowed, mauled, cocooned, stung, and adopted by things with no business adopting anyone. Continues to believe they can all be friends.", image:"juniper-tallow"},
    {name:"Cecily Knell", role:"Student // Theory Specialist", trait:"Avian", bio:"Has read the book, memorized the appendix, corrected the footnotes, and therefore assumes the field encounter will proceed according to documentation.", image:"cecily-knell"},
    {name:"Bram Rill", role:"Student // Survivalist", trait:"Amphibious", bio:"Nervous, cautious, apologetic, and right often enough to make everyone uncomfortable. Carries emergency equipment for situations nobody else considered plausible.", image:"bram-rill"},
    {name:"Etta Crow", role:"Student // Necromancy", trait:"Corvid", bio:"Gifted at speaking with the dead. Deeply uncomfortable with the dead. These facts have created significant scheduling difficulties.", image:"etta-crow"},
    {name:"Moss Bell", role:"Student // Food Safety", trait:"Boarkin", bio:"The cook’s kid. Knows what can be eaten, what must be boiled first, and what is technically edible but not worth the experience.", image:"moss-bell"},
    {name:"Finch Dapple", role:"Student // Healing", trait:"Feline", bio:"Excellent healer. Terrible bedside manner. Finds unusual injuries fascinating and is currently far too interested in human anatomy.", image:"finch-dapple"},
    {name:"Lark Sallow", role:"Student // Groundskeeper Apprentice", trait:"Insectoid", bio:"Quiet, observant, and better at reading insect behavior than most people are at reading signs. If Lark says the bugs have gone quiet, leave.", image:"lark-sallow"},
    {name:"Nibs Harrow", role:"Student // Contraband", trait:"Goblin-ish", bio:"Sells forbidden snacks, forged passes, dubious charms, and things students should not own. Will scam you. Will not knowingly sell you something lethal without warning.", image:"nibs-harrow"},
    {name:"Toby Wicker", role:"Student // Musician", trait:"Mothkin", bio:"Pretty, smug, unserious, and much sharper than he pretends to be. A musician with excellent systems-brain instincts and a biologically unfortunate relationship with bright magical lights.", image:"toby-wicker"},
    {name:"Petra Broom", role:"Former Student // Deceased", trait:"Unknown", bio:"Third-year student. Attempted to determine whether a Pretty Murdertree could be domesticated. The Academy maintains that the answer was sufficiently demonstrated.", image:"memorial-petra-broom", deceased:true},
    {name:"Oswin Crumb", role:"Former Student // Deceased", trait:"Unknown", bio:"Second-year student. Ignored three separate signs reading DO NOT FOLLOW THE LIGHTS. The signs remain in place.", image:"memorial-oswin-crumb", deceased:true},
    {name:"Maribel Fen", role:"Former Student // Deceased", trait:"Unknown", bio:"Fourth-year student. Received excellent marks during a field exercise until the final eleven seconds.", image:"memorial-maribel-fen", deceased:true},
    {name:"Tuck Sallow", role:"Former Student // Deceased", trait:"Unknown", bio:"First-year student. Cause of death is officially recorded as 'the pond.' Further detail was deemed unnecessary.", image:"memorial-tuck-sallow", deceased:true}
  ],
  faculty: [
    {name:"Professor Brindle", role:"Faculty // Field Survival", trait:"Horned Grazer", bio:"Field-survival instructor. Stern because students are temporary and consequences are not. Usually notices danger several seconds before everyone else.", image:"professor-brindle"},
    {name:"Master Thicket", role:"Faculty // Creature Biology", trait:"Barkblood", bio:"Warm, patient, and genuinely delighted by animals that make everyone else evacuate the room. Insists most creatures are understandable once you learn what they consider food.", image:"master-thicket"},
    {name:"Headmistress Hollowmere", role:"Faculty // Headmistress", trait:"Marsh-wight", bio:"Eerie, composed, and entirely sincere about Brackenmere being a respectable institution. Treats catastrophe as an administrative problem requiring paperwork.", image:"headmistress-hollowmere"},
    {name:"Hester Pike", role:"Faculty // Expeditions", trait:"Reptilian", bio:"Scarred former adventurer and practical survivor. One of the few adults who immediately grasps that a human’s instincts are calibrated for the wrong world.", image:"hester-pike"},
    {name:"Professor Marda Sedge", role:"Faculty // Practical Spellcraft", trait:"Glassblood", bio:"Teaches students how to use magic safely, stop using it quickly, and recognize when a spell has become somebody else’s problem.", image:"professor-marda-sedge"}
  ],
  community: [
    {name:"Ash", role:"Local Community Contributor", trait:"Apparently Local", bio:"A familiar, useful townswoman who has seemingly always been around. There is absolutely no reason to look more closely. Probably.", image:"ash"},
    {name:"Community Contributor", role:"Local Community // TBD", trait:"To Be Decided", bio:"Reserved slot for a future Brackenmere local. Name, lineage, occupation, and relationship to the Academy are still to be determined.", image:"community-placeholder-01", placeholder:true},
    {name:"Community Contributor", role:"Local Community // TBD", trait:"To Be Decided", bio:"Reserved slot for a future Brackenmere local. Name, lineage, occupation, and relationship to the Academy are still to be determined.", image:"community-placeholder-02", placeholder:true},
    {name:"Community Contributor", role:"Local Community // TBD", trait:"To Be Decided", bio:"Reserved slot for a future Brackenmere local. Name, lineage, occupation, and relationship to the Academy are still to be determined.", image:"community-placeholder-03", placeholder:true}
  ]
};

const fieldGuide = [
  {name:"Organ-Melting Willow", slug:"organ-melting-willow", risk:"DO NOT EAT", text:"Beautiful fruit. Pleasant smell. Liquefies internal tissue. The name has survived several attempted rebrands."},
  {name:"Friendly Blobble", slug:"friendly-blobble", risk:"GENERALLY SAFE", text:"Hideous household pest-eater with the consistency of a warm tumor. Gentle, useful, enjoys chin scratches."},
  {name:"Sleeper Moss", slug:"sleeper-moss", risk:"AIRBORNE", text:"Releases spores that cause rapid unconsciousness. Do not confuse with Wake-Up Moss. You will know if you have."},
  {name:"False Door Beetle", slug:"false-door-beetle", risk:"FINGERS", text:"Disguises itself as handles and waits. If a door handle seems unusually warm, use another door."},
  {name:"Probably Harmless Toad", slug:"probably-harmless-toad", risk:"UNDER REVIEW", text:"Current classification remains provisional. The Department of Creature Biology requests that students stop testing the name."},
  {name:"Child-Eating Daffodil", slug:"child-eating-daffodil", risk:"LITERAL", text:"Despite repeated complaints from prospective parents, the name is neither historical nor metaphorical."},
  {name:"Two-Bite Hare", slug:"two-bite-hare", risk:"PREDATOR", text:"First bite injects paralytic. Second bite is dinner. Attractive fur is not an invitation."},
  {name:"House Screamer", slug:"house-screamer", risk:"USEFUL", text:"Small domestic animal that screams when dangerous magic is nearby. Owners report this is preferable to not knowing."}
];

const memorials = [
  {name:"Petra Broom", years:"Student, 3rd Year", cause:"Attempted to determine whether a Pretty Murdertree could be domesticated.", image:"memorial-petra-broom", tilt:"-.7deg"},
  {name:"Oswin Crumb", years:"Student, 2nd Year", cause:"Ignored three separate signs reading DO NOT FOLLOW THE LIGHTS.", image:"memorial-oswin-crumb", tilt:".6deg"},
  {name:"Maribel Fen", years:"Student, 4th Year", cause:"Field exercise. Excellent marks until the final eleven seconds.", image:"memorial-maribel-fen", tilt:"-.4deg"},
  {name:"Tuck Sallow", years:"Student, 1st Year", cause:"Cause officially recorded as 'the pond.' Further detail deemed unnecessary.", image:"memorial-tuck-sallow", tilt:".8deg"}
];

function markFallbacks(scope=document){
  scope.querySelectorAll(".image-slot").forEach(slot=>{
    const img=slot.querySelector("img");
    if(!img) return;
    const fail=()=>slot.classList.add("missing");
    img.addEventListener("error",fail);
    if(img.complete && img.naturalWidth===0) fail();
  });
}

function surnameOf(name){
  const parts = name.trim().split(/\s+/);
  return parts.length > 1 ? parts[parts.length - 1] : parts[0];
}

function sortedGroup(key){
  if(key !== "students") return groups[key];
  return [...groups[key]].sort((a,b)=>{
    const surnameCompare = surnameOf(a.name).localeCompare(surnameOf(b.name), undefined, {sensitivity:"base"});
    if(surnameCompare !== 0) return surnameCompare;
    return a.name.localeCompare(b.name, undefined, {sensitivity:"base"});
  });
}

function renderGroup(key){
  const grid=document.getElementById(`${key}-grid`);
  const detail=document.getElementById(`${key}-detail`);
  sortedGroup(key).forEach((c,i)=>{
    const button=document.createElement("button");
    button.className="character-card" + (c.deceased ? " deceased" : "") + (c.placeholder ? " placeholder" : "");
    const portraitSrc = c.deceased ? `assets/${c.image}.png` : (c.placeholder ? `assets/${c.image}.png` : `assets/yearbook-${c.image}.png`);
    button.innerHTML=`
      <div class="character-photo">
        <img src="${portraitSrc}" alt="${c.name}">
        <div class="card-fallback">${c.name}</div>
      </div>
      ${c.deceased ? '<span class="deceased-ribbon">DECEASED</span>' : (c.placeholder ? '<span class="tbd-ribbon">TBD</span>' : '')}
      <div class="character-label"><b>${c.name}</b><span>${c.role}</span></div>`;
    const img=button.querySelector("img");
    img.addEventListener("error",()=>button.classList.add("missing"));
    button.addEventListener("click",()=>{
      grid.querySelectorAll(".character-card").forEach(x=>x.classList.remove("active"));
      button.classList.add("active");
      const detailSrc = c.deceased ? `assets/${c.image}.png` : (c.placeholder ? `assets/${c.image}.png` : `assets/reference-${c.image}.png`);
      detail.innerHTML=`
        <div class="detail-inner ${c.deceased ? 'deceased-detail' : ''}">
          <div class="detail-art image-slot">
            <img src="${detailSrc}" alt="${c.name} reference art">
            <div class="fallback"><span>${c.deceased ? 'MEMORIAL PORTRAIT' : (c.placeholder ? 'FUTURE COMMUNITY PORTRAIT' : 'REFERENCE ART')} // ${c.name.toUpperCase()}</span><small>${c.deceased ? '800 × 600 PNG' : (c.placeholder ? '600 × 800 PNG when defined' : '900 × 1200 PNG recommended')}</small></div>
          </div>
          <div class="detail-content">
            <span class="detail-role">${c.role}</span>
            <h3>${c.name}</h3>
            <p>${c.bio}</p>
            <div class="detail-meta">
              <div><span>LINEAGE</span><b>${c.trait}</b></div>
              <div><span>ARCHIVE STATUS</span><b>${c.deceased ? 'Deceased' : (c.placeholder ? 'Pending Addition' : 'Current')}</b></div>
            </div>
          </div>
        </div>`;
      markFallbacks(detail);
    });
    grid.appendChild(button);
  });
}

function renderFieldGuide(){
  const grid=document.getElementById("field-grid");
  fieldGuide.forEach(item=>{
    const card=document.createElement("article");
    card.className="field-card";
    card.innerHTML=`
      <div class="field-art image-slot">
        <img src="assets/creature-${item.slug}.png" alt="${item.name}">
        <div class="fallback"><span>CREATURE ART // ${item.name.toUpperCase()}</span><small>900 × 700 PNG</small></div>
      </div>
      <div class="field-body">
        <h3>${item.name}</h3>
        <p>${item.text}</p>
        <span class="risk">${item.risk}</span>
      </div>`;
    grid.appendChild(card);
  });
  markFallbacks(grid);
}

function renderMemorials(){
  const grid=document.getElementById("memorial-grid");
  memorials.forEach(m=>{
    const card=document.createElement("article");
    card.className="memorial-card";
    card.style.setProperty("--tilt",m.tilt);
    card.innerHTML=`
      <div class="memorial-photo image-slot">
        <img src="assets/${m.image}.png" alt="${m.name}">
        <div class="fallback"><span>MEMORIAL PORTRAIT // ${m.name.toUpperCase()}</span><small>800 × 600 PNG</small></div>
      </div>
      <h3>${m.name}</h3>
      <p>${m.years}</p>
      <p>${m.cause}</p>
      <span class="memorial-tag">DECEASED</span>`;
    grid.appendChild(card);
  });
  markFallbacks(grid);
}

function setupTabs(){
  const tabs=document.querySelectorAll(".tab");
  const panels=document.querySelectorAll(".panel");
  function activate(id){
    tabs.forEach(t=>t.classList.toggle("active",t.dataset.tab===id));
    panels.forEach(p=>p.classList.toggle("active",p.id===id));
    window.scrollTo({top:0,behavior:"smooth"});
  }
  tabs.forEach(t=>t.addEventListener("click",()=>activate(t.dataset.tab)));
  document.querySelectorAll("[data-jump]").forEach(b=>b.addEventListener("click",()=>activate(b.dataset.jump)));
}

function setupEntry(){
  const gate=document.getElementById("access-gate");
  const shell=document.getElementById("site-shell");
  const enter=document.getElementById("enter-site");
  const audio=document.getElementById("site-music");
  const toggle=document.getElementById("audio-toggle");
  let muted=false;

  enter.addEventListener("click",async()=>{
    document.body.classList.remove("locked");
    gate.classList.add("dismissed");
    shell.classList.add("visible");
    shell.setAttribute("aria-hidden","false");
    try{ await audio.play(); }catch(e){}
  });

  toggle.addEventListener("click",()=>{
    muted=!muted;
    audio.muted=muted;
    toggle.classList.toggle("muted",muted);
    toggle.textContent=muted?"MUSIC // OFF":"MUSIC // ON";
    if(!muted && audio.paused) audio.play().catch(()=>{});
  });
}

function spawnMagic(){
  if(document.body.classList.contains("locked")) return;
  if(Math.random()>.55) return;
  const s=document.createElement("span");
  s.className="magic-spark";
  s.style.left=`${8+Math.random()*84}vw`;
  s.style.top=`${25+Math.random()*65}vh`;
  s.style.animationDuration=`${4.5+Math.random()*3}s`;
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),8000);
}

Object.keys(groups).forEach(renderGroup);
renderFieldGuide();
renderMemorials();
setupTabs();
setupEntry();
markFallbacks();
setInterval(spawnMagic,1300);
