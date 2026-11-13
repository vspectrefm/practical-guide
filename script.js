const groups = {
  students: [
    {
      name:"Tansy Wren",
      role:"Student",
      focus:"Field Survival & Wetland Ecology",
      trait:"Bog-born",
      pronouns:"she/her",
      mbti:"ISTP",
      bio:"A dry-humored, highly practical girl who has spent enough time around Brackenmere’s wetlands to know that hesitation is sometimes safer than curiosity. Tansy reads weather, mud, spoor, plant behavior, and local hazards almost automatically, and tends to become the player’s first reliable translator for what counts as common sense here. She is difficult to impress, quick to intervene when someone is about to do something lethal, and considerably kinder than her delivery suggests.",
      image:"tansy-wren"
    },
    {
      name:"Poppy Rake",
      role:"Student",
      focus:"Practical Spellcraft",
      trait:"Impish",
      pronouns:"she/her",
      mbti:"ESFP",
      bio:"Poppy is a cheerful bad idea in student uniform: fast, fearless, curious, and almost magnetically attracted to anything labeled cursed, restricted, unstable, or inadvisable. Her natural talent for improvisational spellwork makes her genuinely capable in a crisis, which unfortunately reinforces her belief that most rules are simply recommendations written by slower people. She is not malicious; she just experiences danger as an invitation to see what happens next.",
      image:"poppy-rake"
    },
    {
      name:"Lilac Morrow",
      role:"Student",
      focus:"Advanced Botanical Magic",
      trait:"Flowerkin",
      pronouns:"she/her",
      mbti:"INFJ",
      bio:"Elegant, brilliant, and socially predatory, Lilac understands exactly how attractive, poised, and intimidating she appears and uses all three with practiced precision. Her flowerkin body betrays emotions she would rather keep private, with buds, petals, vines, and thorns responding visibly to her mood. Around most students she is manipulative, confident, and difficult to unsettle. Around her father Vernon, that entire persona can collapse into the anxious, approval-seeking daughter underneath it.",
      image:"lilac-morrow"
    },
    {
      name:"Nettie Foss",
      role:"Student",
      focus:"Domestic Wards & Practical Survival",
      trait:"Burrowfolk",
      pronouns:"she/her",
      mbti:"ISFJ",
      bio:"Nettie is warm, sleepy, cozy, and alarmingly knowledgeable about things that dissolve bone, crawl through walls, or nest inside unattended shoes. She prefers preparedness to heroics and usually has a snack, blanket, spare charm, antidote, or deeply unsettling piece of survival advice available when someone needs it. As a roommate she provides a useful counterweight to Brackenmere’s chaos: comforting company from someone who treats horrifying local facts as ordinary household knowledge.",
      image:"nettie-foss"
    },
    {
      name:"Sorrel Azlin",
      role:"Student",
      focus:"Archives, Lineage & Human Studies",
      trait:"Mixed Lineage",
      pronouns:"he/him",
      mbti:"ENFP",
      bio:"Sorrel is bright, earnest, and endlessly fascinated by the human ancestry in his family line. He knows that a human woman appeared generations ago and became his great-grandmother, but naturally assumes she has been dead for centuries. That distant connection has turned him into an enthusiastic amateur historian who collects records, stories, family documents, and every scrap of information he can find about humans. Meeting the player is, to him, the academic opportunity of a lifetime.",
      image:"sorrel-azlin"
    },
    {
      name:"Mallow Croft",
      role:"Student",
      focus:"Nocturnal Ecology",
      trait:"Batfolk",
      pronouns:"she/her",
      mbti:"INTP",
      bio:"Mallow spends an unreasonable amount of time in Brackenmere’s bell tower, where she sleeps upside down because beds are uncomfortable and socializes with the colony of actual bats living in the rafters. She has given every bat a ridiculous individual name and can somehow identify them all instantly despite nobody else being able to tell them apart. Sleepy, wry, and observant, Mallow knows a great deal about what happens on campus after most students have gone to bed.",
      image:"mallow-croft"
    },
    {
      name:"Clementine Quirk",
      role:"Student",
      focus:"Comparative Human Studies",
      trait:"Lagomorph",
      pronouns:"she/her",
      mbti:"INFP",
      bio:"Clementine is Brackenmere’s soft-spoken, relentlessly sincere self-appointed expert on humans. She is intelligent and genuinely diligent, but much of her research comes from fragmentary or unreliable sources, producing wonderfully strange conclusions about teeth, cars, courtship, geese, friendship rituals, and other supposed human customs. She records corrections with delight rather than embarrassment. Her signature accessory is a tiny metal door-hinge hair clip, because she apparently decided ordinary hardware makes excellent jewelry.",
      image:"clementine-quirk"
    },
    {
      name:"Juniper Tallow",
      role:"Student",
      focus:"Creature Handling & Ecology",
      trait:"Deerkin",
      pronouns:"she/her",
      mbti:"ENFP",
      bio:"Juniper genuinely understands animals better than most students at Brackenmere. Her problem is that understanding why something wants to bite, swallow, cocoon, sting, or trample her does not reduce her desire to become its friend. She is enthusiastic, capable, compassionate, and perpetually bandaged. Faculty generally trust her observations while remaining considerably less enthusiastic about her conclusions, especially when those conclusions begin with the phrase, ‘I think it likes me.’",
      image:"juniper-tallow"
    },
    {
      name:"Cecily Knell",
      role:"Student",
      focus:"Advanced Magical Theory",
      trait:"Avian",
      pronouns:"she/her",
      mbti:"INTJ",
      bio:"Cecily is brilliant, immaculate, academically formidable, and approximately as emotionally straightforward as a locked cabinet. She memorizes theory, corrects footnotes, and expects reality to respect properly documented procedure. In practice she is also a bratty tsundere who reacts to affection, praise, concern, or embarrassment with indignation and increasingly transparent denial. She hates being caught caring about people almost as much as she hates being proven wrong in the field.",
      image:"cecily-knell"
    },
    {
      name:"Bram Rill",
      role:"Student",
      focus:"Field Survival & Hazard Assessment",
      trait:"Amphibious",
      pronouns:"he/him",
      mbti:"ISFJ",
      bio:"Bram is a man with delicate, feminine features, an anxious temperament, and survival instincts that are annoyingly correct with remarkable frequency. He carries excessive emergency equipment, notices warning signs other people overlook, and apologizes while explaining exactly how everyone is about to die. His arc is not about becoming fearless; Bram is useful precisely because he is afraid and pays attention anyway. Courage, for him, means moving forward while every instinct is accurately screaming.",
      image:"bram-rill"
    },
    {
      name:"Etta Crow",
      role:"Student",
      focus:"Necromancy",
      trait:"Corvid",
      pronouns:"she/her",
      mbti:"INFP",
      bio:"Etta is exceptionally gifted at necromancy and profoundly uncomfortable with corpses, which has made her education more complicated than anyone involved anticipated. She can perform delicate death-magic with considerable skill while visibly wishing the dead would stop being so dead around her. Gentle, thoughtful, and easily rattled by the physical realities of her own specialty, she is proof that magical aptitude and personal enthusiasm do not necessarily arrive together.",
      image:"etta-crow"
    },
    {
      name:"Finch Dapple",
      role:"Student",
      focus:"Restoration & Healing",
      trait:"Feline",
      pronouns:"she/her",
      mbti:"ENFP",
      bio:"Finch is an excellent healer with an unfortunate tendency to become visibly fascinated by unusual injuries while treating them. She is warm, caring, energetic, and genuinely committed to keeping people alive; she simply finds anatomy, magical trauma, and bizarre biological interactions extremely interesting. The arrival of a human has therefore presented her with an unprecedented medical puzzle. This is reassuring if you are injured and somewhat less reassuring if you are awake while she explains why.",
      image:"finch-dapple"
    },
    {
      name:"Lark Merribane",
      role:"Student",
      focus:"Groundskeeping & Ecological Survey",
      trait:"Insectoid",
      pronouns:"they/them",
      mbti:"ISTP",
      bio:"Lark is quiet, observant, nonbinary, and more comfortable reading insect behavior than reading people. As a groundskeeper apprentice they notice subtle ecological changes that most students would walk straight past. Lark was close friends with Tuck Sallow and refuses to accept that ‘the pond’ is a sufficient explanation for his death. They are actively following the inconsistencies he left behind, convinced that understanding what happened matters whether or not anyone else wants the question reopened.",
      image:"lark-merribane"
    },
    {
      name:"Nibs Harrow",
      role:"Student?",
      focus:"Contraband & Informal Commerce",
      trait:"Goblin-ish",
      pronouns:"he/him",
      mbti:"ENTP",
      bio:"Nibs sells forbidden snacks, forged passes, dubious charms, hard-to-find supplies, and things students absolutely should not own. He is a scammer, but an oddly principled one where lethal danger is concerned: if something might eat you, explode, or permanently rearrange your teeth, he will usually say so. Whether Nibs is actually enrolled at Brackenmere remains an open administrative question. He may simply have discovered that pretending to be a student gives him excellent access to his primary market.",
      image:"nibs-harrow"
    },
    {
      name:"Toby Wicker",
      role:"Student",
      focus:"Sound & Resonance Magic",
      trait:"Mothkin",
      pronouns:"he/him",
      mbti:"ENTP",
      bio:"Toby is pretty, smug, musically gifted, and much sharper than the deliberately unserious persona he presents to the world. He enjoys systems, challenge, and finding the angle nobody else noticed, but often hides that intelligence beneath jokes and apparent laziness. His mothkin senses make him unusually responsive to bright magical light, which is academically interesting and personally inconvenient. Give him a problem complicated enough to become fun and the idiot façade tends to disappear.",
      image:"toby-wicker"
    },
    {
      name:"Oswin Crumb",
      role:"Student",
      focus:"Charms, Wards & Domestic Magic",
      trait:"Mothblood",
      pronouns:"he/him",
      mbti:"ISFP",
      bio:"Mild-mannered, distractible, and perpetually carrying something he forgot he was carrying, Oswin specializes in the thousands of small enchantments that keep ordinary life functioning. Protective thresholds, preservation charms, enchanted locks, household wards, and misbehaving objects are more interesting to him than spectacular spellcasting. He is easy to underestimate until something breaks. His mother Miriam is his only close family and loves him with enough intensity to make public reunions physically hazardous.",
      image:"oswin-crumb"
    },
    {
      name:"Maribel Pith",
      role:"Student",
      focus:"Field Cartography & Routecraft",
      trait:"Marshborn",
      pronouns:"she/her",
      mbti:"ISTJ",
      bio:"Maribel is one of Brackenmere’s most dependable upper-year students, specializing in mapping terrain that may not remain where she left it. Calm, methodical, and difficult to rattle, she reads the interaction between weather, wildlife, geography, and magic with exceptional precision. Her fraternal twin Dorian died only six days before the story begins while trying to prove himself as capable as she was. Maribel’s grief is tangled with guilt, anger, resentment, and the pressure of being the twin who survived.",
      image:"maribel-pith"
    },
    {
      name:"Winona Gleam",
      role:"Student",
      focus:"Illumination & Lure Ecology",
      trait:"Lanternkin",
      pronouns:"she/her",
      mbti:"INFP",
      bio:"Sweet, dreamy, and frequently staring at something nobody else has noticed yet, Winona studies magical illumination and lure ecology: harmless glowmoss, navigation lights, communication displays, predatory signals, and lights that actively want you to follow them somewhere unfortunate. Her Lanternkin biology makes her unusually sensitive to magical light, which is academically useful and personally inconvenient. Once she actually focuses, her instincts are excellent; reaching that point can be the difficult part.",
      image:"winona-gleam"
    },
    {
      name:"Petra Broom",
      role:"Former Student",
      focus:"Botanical Ecology",
      trait:"Reedhorn",
      pronouns:"she/her",
      mbti:"ESTP",
      bio:"Petra was a bold third-year student known for treating dangerous plants as questions rather than warnings. Her final research project asked whether a Pretty Murdertree could be safely habituated or domesticated, an idea most of the faculty regarded as reckless even by Brackenmere standards. She is officially presumed dead after an apparent incident involving the specimen. No body was recovered, with the absence attributed to the Murdertree. Her archived notes and project materials remain on campus.",
      image:"yearbook-petra-broom",
      deceased:true
    },
    {
      name:"Tuck Sallow",
      role:"Former Student",
      focus:"General First-Year Studies",
      trait:"Pondling",
      pronouns:"he/him",
      mbti:"INFP",
      bio:"Tuck was a first-year Pondling remembered as an ordinary, friendly student whose disappearance became one of Brackenmere’s stranger recent fatalities. The official cause of death is recorded simply as ‘the pond,’ with further detail deemed unnecessary. His friend Lark Merribane strongly disputes that explanation and continues to investigate. Whatever the truth, Tuck’s absence left behind enough inconsistencies that the official record has never quite stopped feeling unfinished.",
      image:"yearbook-tuck-sallow",
      deceased:true
    },
    {
      name:"Dorian Pith",
      role:"Former Student",
      focus:"Expeditionary Studies",
      trait:"Mireborn",
      pronouns:"he/him",
      mbti:"ESTJ",
      bio:"Dorian was a highly capable fourth-year student and Maribel Pith’s fraternal twin brother. Raised in a competitive family where the twins were constantly measured against one another, he spent much of his life trying to prove that he could equal or surpass Maribel’s reputation. Six days before the story begins, he died during a field examination after receiving excellent marks until the final eleven seconds. His death has not stopped the comparisons that shaped him.",
      image:"yearbook-dorian-pith",
      deceased:true
    },
    {
      name:"Ned Barley",
      role:"Former Student",
      focus:"General Studies",
      trait:"Commonfolk",
      pronouns:"he/him",
      mbti:"ISFJ",
      bio:"Ned was a thoroughly ordinary second-year student whose death is remembered precisely because there is very little mystery surrounding it. He ignored three separate signs reading DO NOT FOLLOW THE LIGHTS and followed the lights. The result was fatal. Brackenmere has produced stranger tragedies, but Ned remains an important reminder that sometimes the warning is accurate, the explanation is straightforward, and the obvious danger really was the danger.",
      image:"yearbook-ned-barley",
      deceased:true
    }
  ],

  faculty: [
    {
      name:"Professor Brindle",
      role:"Faculty",
      focus:"Field Survival",
      trait:"Horned Grazer",
      pronouns:"they/them",
      mbti:"ISTJ",
      bio:"Brindle is Brackenmere’s relentlessly practical field-survival instructor: stern, observant, nonbinary, and far more interested in students returning alive than in whether they enjoyed the lesson. They teach hazard recognition, ecological common sense, retreat discipline, and the vital skill of not touching things merely because they are pretty. Brindle’s caution can seem severe until the local environment demonstrates, usually within minutes, why every one of their rules exists.",
      image:"professor-brindle"
    },
    {
      name:"Master Thicket",
      role:"Faculty",
      focus:"Creature Biology",
      trait:"Barkblood",
      pronouns:"he/him",
      mbti:"ENFJ",
      bio:"Thicket is a broad, cheerful barkblood biologist who approaches even horrifying magical wildlife with patience, affection, and genuine respect. He believes most creatures become less frightening once their needs, instincts, and feeding behavior are understood, though he is careful never to confuse understandable with harmless. His enthusiasm makes him one of Brackenmere’s most approachable teachers and one of the few people capable of handling Percival Rook’s ‘educational donations’ without immediately losing a wall.",
      image:"master-thicket"
    },
    {
      name:"Headmistress Hollowmere",
      role:"Faculty",
      focus:"Headmistress & Arcane Research",
      trait:"Marsh-wight",
      pronouns:"she/her",
      mbti:"INTP",
      bio:"Hollowmere is eerie, composed, academically brilliant, and absolutely not evil. Her real problem is that fascination routinely outruns caution. A discovery that should prompt evacuation may instead prompt her to ask everyone to come closer and observe the interesting part. She has the energy of a gothic Ms. Frizzle with access to forbidden magical phenomena. Hollowmere is firmly asexual; knowledge, discovery, and the joy of finding out what happens next are the only great loves of her life.",
      image:"headmistress-hollowmere"
    },
    {
      name:"Hester Pike",
      role:"Faculty",
      focus:"Expeditions & Field Operations",
      trait:"Reptilian",
      pronouns:"she/her",
      mbti:"ISTP",
      bio:"Hester is a scarred, one-handed expedition instructor whose competence comes from long experience surviving places that wanted her dead. Dry, capable, and difficult to impress, she is one of the first adults to recognize that the human player is not foolish so much as calibrated for an entirely different world. Hester is married—or whatever Brackenmere’s closest equivalent is—to Professor Marda Sedge, creating a formidable household built around mutual competence, practical concern, and very little patience for preventable disasters.",
      image:"hester-pike"
    },
    {
      name:"Professor Marda Sedge",
      role:"Faculty",
      focus:"Practical Spellcraft",
      trait:"Glassblood",
      pronouns:"she/her",
      mbti:"INTJ",
      bio:"Marda teaches students how to actually use magic under pressure: stabilizing spells, correcting feedback, recovering from mistakes, and recognizing when the correct magical solution is to stop casting immediately. Brisk, sardonic, and demanding, she is genuinely invested in students surviving their own abilities. Her glassblood ancestry is subtle but visible when she channels. She is married to Hester Pike and takes particular academic interest in the player because local magical systems do not reliably understand human biology.",
      image:"professor-marda-sedge"
    }
  ],

  community: [
    {
      name:"Ash",
      role:"Community",
      focus:"Longstanding Local Contributor",
      trait:"Apparently Local",
      pronouns:"she/her",
      mbti:"INTJ",
      bio:"Ash is a familiar, useful local woman who seems to have been around Brackenmere for longer than anyone can quite remember. She knows the roads, understands the surrounding settlements, and has the unnerving patience of someone who never appears hurried by anything. Students and staff tend to treat her as a dependable fixture of local life. There is no obvious reason to look more closely at her history, and Ash certainly has no interest in supplying one.",
      image:"ash"
    },
    {
      name:"Vernon Morrow",
      role:"Community",
      focus:"Parent Council & Academic Oversight",
      trait:"Flowerkin",
      pronouns:"he/him",
      mbti:"ENTJ",
      bio:"Vernon Morrow is Lilac’s father: an imposing flowerkin man with vivid pink hair, mature blossoms growing directly from his body, exacting standards, and a frighteningly thorough interest in the quality of his daughter’s education. He attends committees, reads reports, remembers statistics, and asks questions faculty hoped nobody would ask. He genuinely adores Lilac and wants the best for her. Vernon also makes perfectly ordinary dad jokes, but nobody laughs because he is terrifying, so he has concluded he simply is not funny.",
      image:"vernon-morrow"
    },
    {
      name:"Miriam Crumb",
      role:"Community",
      focus:"Parent Volunteer & Chaperone",
      trait:"Mothblood",
      pronouns:"she/her",
      mbti:"ESFJ",
      bio:"Miriam is Oswin’s doting single mother and one of Brackenmere’s most enthusiastic volunteers. Warm, plush, competent, and socially fearless, she helps with chaperoning, food, wards, decorations, repairs, open days, and anything else that gives her an excuse to spend time near her son. Her former husband treated both Miriam and Oswin poorly, leaving the two of them as each other’s only real family. Miriam has responded by making absolutely certain Oswin never has reason to doubt how loved he is.",
      image:"miriam-crumb"
    },
    {
      name:"Dr. Percival Rook",
      role:"Community",
      focus:"Private Creature Collector",
      trait:"Peacockfolk",
      pronouns:"he/him",
      mbti:"ENTP",
      bio:"Percival Rook is a flamboyant peacock-man collector whose private menagerie contains rare, dangerous, and academically valuable magical creatures from across the region. He is charming, wealthy, spectacularly vain, and completely convinced that owning exceptional animals makes him exceptional at handling them. It does not. His prestige-driven ‘educational loans’ are responsible for an uncomfortable number of escaped specimens, damaged corridors, emergency notices, and students being temporarily eaten. Thicket respects his collection considerably more than his husbandry.",
      image:"percival-rook"
    },
    {
      name:"Dr. Helena Tress",
      role:"Community",
      focus:"Local Physician & Veterinarian",
      trait:"Reedhorn",
      pronouns:"She/Her",
      mbti:"ISFJ",
      bio:"Helena Tress is a Reedhorn physician and veterinarian whose practice makes surprisingly little distinction between treating people and treating the things that have recently tried to eat them. Warm, observant, and quietly practical, Helena has extensive knowledge of Brackenmere’s unusual biology and a particular interest in the uneasy boundary between medicine, magical ecology, and animal care. She is patient with frightened patients, considerably less patient with preventable injuries, and possesses a dry sense of humor sharpened by years of hearing increasingly implausible explanations for bite wounds. Though polished and composed in public, Helena is fundamentally a field-minded caretaker: curious, compassionate, conservation-conscious, and far more comfortable getting her hands dirty than her elegant appearance initially suggests.",
      image:"helena-tress"
    }
  ]
};

const fieldGuide = [
  {name:"Organ-Melting Willow", slug:"organ-melting-willow", risk:"DO NOT EAT", text:"A deceptively beautiful willow whose jewel-like fruit smells pleasant, tastes excellent, and rapidly liquefies internal tissue. Its sap is also dangerously corrosive, though the tree itself shows no obvious predatory behavior. Several attempts have been made to give the species a less alarming common name. None have survived field testing."},
  {name:"Friendly Blobble", slug:"friendly-blobble", risk:"GENERALLY SAFE", text:"A soft, lumpy household creature whose appearance strongly suggests disease, parasitism, or imminent organ failure. In reality, Friendly Blobbles are gentle pest-eaters that thrive around homes, enjoy physical affection, and rarely cause trouble beyond leaving unpleasantly warm patches wherever they sleep."},
  {name:"Sleeper Moss", slug:"sleeper-moss", risk:"AIRBORNE", text:"A soft blue-green moss that releases potent airborne spores when disturbed, causing rapid unconsciousness in most nearby animals. It is harmless if properly handled but easily confused with several visually similar species, including Wake-Up Moss. Students are advised not to identify either variety through personal experimentation."},
  {name:"False Door Beetle", slug:"false-door-beetle", risk:"WATCH YOUR FINGERS", text:"A remarkably convincing beetle that disguises itself as door handles, drawer pulls, latches, and other frequently touched fixtures. It waits motionless until grasped, at which point it unfolds and bites. False Door Beetles are usually more painful than dangerous, though this distinction has never comforted anyone currently holding one."},
  {name:"Probably Harmless Toad", slug:"probably-harmless-toad", risk:"UNDER REVIEW", text:"A placid pond-dwelling toad for which no confirmed dangerous behavior has yet been documented. This has not stopped generations of researchers from remaining deeply suspicious of it. Attempts to deliberately provoke a response have produced inconsistent results and several increasingly cautious revisions of the phrase “probably harmless.”"},
  {name:"Child-Eating Daffodil", slug:"child-eating-daffodil", risk:"HIDE YOUR CHILDREN", text:"A large, brightly colored flowering plant that uses an attractive daffodil-like bloom to lure appropriately sized prey within reach. Despite repeated objections from concerned parents, the common name is neither historical exaggeration nor metaphor. Fortunately, mature specimens are stationary and therefore comparatively easy to avoid."},
  {name:"Two-Bite Hare", slug:"two-bite-hare", risk:"PREDATOR", text:"A beautiful hare-like predator whose first bite delivers a fast-acting paralytic and whose second bite begins feeding. Their soft fur and gentle appearance make them particularly dangerous to visitors unfamiliar with local wildlife. Brackenmere strongly discourages attempting to pet one simply because it “looks friendly.”"},
  {name:"House Screamer", slug:"house-screamer", risk:"USEFUL", text:"A small domesticated creature capable of detecting dangerous magical disturbances before most people notice anything is wrong. When threatened magic is nearby, it produces an extraordinarily loud scream until the danger passes. The noise is unpleasant, relentless, and considerably preferable to discovering unstable magic by other means."},
  {
    name:"Snakeshifter",
    slug:"snakeshifter",
    risk:"BIOLOGICAL ODDITY",
    text:"A housecat-sized magical creature perpetually caught between snake, dragon, bat, scorpion, and cat-like forms. No Snakeshifter is ever fully one creature or all five at once, and its anatomy may continue shifting over time. They are agile, curious, opportunistic, and notoriously difficult to describe accurately."
  },
  {
    name:"Wealth-Swallowing Swallowtail",
    slug:"wealth-swallowing-swallowtail",
    risk:"WATCH YOUR VALUABLES",
    text:"A butterfly-moth hybrid that feeds exclusively on objects their owner genuinely values. Monetary price is irrelevant: a worthless keepsake may be irresistible while a pile of gold goes untouched. Large swarms can devastate fortunes, heirlooms, collections, and markets with alarming efficiency."
  }
];

const memorials = [
  {name:"Petra Broom", years:"Student, 3rd Year", cause:"Attempted to determine whether a Pretty Murdertree could be domesticated.", image:"memorial-petra-broom", tilt:"-.7deg"},
  {name:"Ned Barley", years:"Student, 2nd Year", cause:"Ignored three separate signs reading DO NOT FOLLOW THE LIGHTS.", image:"memorial-ned-barley", tilt:".6deg"},
  {name:"Dorian Pith", years:"Student, 4th Year", cause:"Field exercise. Excellent marks until the final eleven seconds.", image:"memorial-dorian-pith", tilt:"-.4deg"},
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

  sortedGroup(key).forEach(c=>{
    const button=document.createElement("button");
    button.className="character-card" + (c.deceased ? " deceased" : "");

    const portraitSrc = c.deceased
      ? `assets/${c.image}.png`
      : `assets/yearbook-${c.image}.png`;

    button.innerHTML=`
      <div class="character-photo">
        <img src="${portraitSrc}" alt="${c.name}">
        <div class="card-fallback">${c.name}</div>
      </div>
      ${c.deceased ? '<span class="deceased-ribbon">DECEASED</span>' : ''}
      <div class="character-label">
        <b>${c.name}</b>
        <span>${c.role} • ${c.focus}</span>
      </div>`;

    const img=button.querySelector("img");
    img.addEventListener("error",()=>button.classList.add("missing"));

    button.addEventListener("click",()=>{
      grid.querySelectorAll(".character-card").forEach(x=>x.classList.remove("active"));
      button.classList.add("active");

      const detailSrc = c.deceased
        ? `assets/${c.image}.png`
        : `assets/reference-${c.image}.png`;

      detail.innerHTML=`
        <div class="detail-inner ${c.deceased ? 'deceased-detail' : ''}">
          <div class="detail-art image-slot">
            <img src="${detailSrc}" alt="${c.name} reference art">
            <div class="fallback">
              <span>${c.deceased ? 'MEMORIAL PORTRAIT' : 'REFERENCE ART'} // ${c.name.toUpperCase()}</span>
              <small>${c.deceased ? '800 × 600 PNG' : '900 × 1200 PNG recommended'}</small>
            </div>
          </div>

          <div class="detail-content">
            <span class="detail-role">${c.role} // ${c.focus}</span>
            <h3>${c.name}</h3>
            <p>${c.bio}</p>

            <div class="detail-meta">
              <div><span>LINEAGE</span><b>${c.trait}</b></div>
              <div><span>PRONOUNS</span><b>${c.pronouns}</b></div>
              <div><span>PERSONALITY</span><b>${c.mbti}</b></div>
              <div><span>ROLE / FOCUS</span><b>${c.role} — ${c.focus}</b></div>
              <div><span>ARCHIVE STATUS</span><b>${c.deceased ? 'Deceased / Presumed Deceased' : 'Current'}</b></div>
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
