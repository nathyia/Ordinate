// ─── TABS ───────────────────────────────────────────────────────────────
document.querySelectorAll('.tab').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('view-'+btn.dataset.view).classList.add('active');
  });
});

// ─── SVG MOTIF DRAWING (same visual language as the type calculator) ─────
function svgWrap(inner, color, size=56){
  return `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" style="display:block">`
    + inner + `</svg>`;
}
const SEASON_GLYPHS = {
  Breaking: c => svgWrap(
    `<ellipse cx="20" cy="32" rx="14" ry="19" fill="none" stroke="${c}" stroke-width="2.2"/>
     <ellipse cx="44" cy="32" rx="14" ry="19" fill="none" stroke="${c}" stroke-width="2.2"/>
     <line x1="32" y1="13" x2="32" y2="51" stroke="${c}" stroke-width="1.2" opacity=".35" stroke-dasharray="3 3"/>`,c),
  Sprouting: c => svgWrap(
    `<line x1="32" y1="56" x2="32" y2="18" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
     <line x1="32" y1="30" x2="20" y2="20" stroke="${c}" stroke-width="1.8" stroke-linecap="round"/>
     <line x1="32" y1="38" x2="44" y2="26" stroke="${c}" stroke-width="1.8" stroke-linecap="round"/>
     <line x1="32" y1="44" x2="18" y2="36" stroke="${c}" stroke-width="1.4" stroke-linecap="round" opacity=".6"/>
     <circle cx="32" cy="15" r="3.5" fill="${c}"/>`,c),
  Cresting: c => svgWrap(
    `<path d="M8 42 C14 42 18 20 32 20 C46 20 50 42 56 42" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
     <path d="M8 50 C14 50 18 32 32 32 C46 32 50 50 56 50" fill="none" stroke="${c}" stroke-width="1.3" stroke-linecap="round" opacity=".4"/>`,c),
  Reaping: c => svgWrap(
    `<line x1="22" y1="14" x2="22" y2="46" stroke="${c}" stroke-width="1.8" stroke-linecap="round"/>
     <line x1="28" y1="12" x2="28" y2="46" stroke="${c}" stroke-width="1.8" stroke-linecap="round"/>
     <line x1="34" y1="14" x2="34" y2="46" stroke="${c}" stroke-width="1.8" stroke-linecap="round"/>
     <line x1="40" y1="16" x2="40" y2="46" stroke="${c}" stroke-width="1.8" stroke-linecap="round"/>
     <line x1="16" y1="46" x2="48" y2="46" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
     <path d="M20 46 Q31 56 42 46" fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round"/>`,c),
  Reckoning: c => svgWrap(
    `<line x1="32" y1="10" x2="32" y2="54" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
     <line x1="14" y1="22" x2="50" y2="22" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
     <circle cx="14" cy="36" r="7" fill="none" stroke="${c}" stroke-width="1.8"/>
     <circle cx="50" cy="36" r="7" fill="none" stroke="${c}" stroke-width="1.8"/>
     <line x1="14" y1="22" x2="14" y2="29" stroke="${c}" stroke-width="1.5"/>
     <line x1="50" y1="22" x2="50" y2="29" stroke="${c}" stroke-width="1.5"/>`,c),
  Veiling: c => svgWrap(
    `<path d="M12 16 Q32 28 52 16" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
     <path d="M12 16 Q20 48 28 52" fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round"/>
     <path d="M52 16 Q46 42 38 52" fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round" opacity=".4"/>
     <path d="M28 52 Q32 54 38 52" fill="none" stroke="${c}" stroke-width="1.5" stroke-linecap="round" opacity=".4"/>`,c),
  Kindling: c => svgWrap(
    `<path d="M32 12 C28 22 20 26 22 36 C24 44 40 44 42 36 C44 26 36 22 32 12 Z" fill="none" stroke="${c}" stroke-width="2.2" stroke-linejoin="round"/>
     <path d="M32 26 C30 30 27 32 28 37 C29 41 35 41 36 37 C37 32 34 30 32 26 Z" fill="${c}" opacity=".35"/>`,c),
  Rooting: c => svgWrap(
    `<line x1="32" y1="10" x2="32" y2="30" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
     <line x1="32" y1="30" x2="18" y2="46" stroke="${c}" stroke-width="1.8" stroke-linecap="round"/>
     <line x1="32" y1="30" x2="46" y2="46" stroke="${c}" stroke-width="1.8" stroke-linecap="round"/>
     <line x1="18" y1="46" x2="10" y2="56" stroke="${c}" stroke-width="1.4" stroke-linecap="round" opacity=".6"/>
     <line x1="18" y1="46" x2="24" y2="56" stroke="${c}" stroke-width="1.4" stroke-linecap="round" opacity=".6"/>
     <line x1="46" y1="46" x2="40" y2="56" stroke="${c}" stroke-width="1.4" stroke-linecap="round" opacity=".6"/>
     <line x1="46" y1="46" x2="54" y2="56" stroke="${c}" stroke-width="1.4" stroke-linecap="round" opacity=".6"/>`,c),
};
const LUNAR_GLYPHS = {
  New: c => svgWrap(`<circle cx="28" cy="28" r="16" fill="none" stroke="${c}" stroke-width="2"/><circle cx="28" cy="28" r="16" fill="${c}" opacity=".12"/>`,c),
  Waxing: c => svgWrap(`<path d="M28 12 A16 16 0 1 1 28 44 A11 16 0 1 0 28 12 Z" fill="${c}" opacity=".8"/>`,c),
  Full: c => svgWrap(`<circle cx="28" cy="28" r="16" fill="${c}" opacity=".9"/>`,c),
  Waning: c => svgWrap(`<path d="M28 12 A16 16 0 1 0 28 44 A11 16 0 1 1 28 12 Z" fill="${c}" opacity=".8"/>`,c),
};
function drawSeasonGlyph(name,color){ return (SEASON_GLYPHS[name]||SEASON_GLYPHS.Breaking)(color); }
function drawLunarGlyph(key,color){ return (LUNAR_GLYPHS[key]||LUNAR_GLYPHS.New)(color); }

function blendHex(h1,h2,w1,w2){
  const c1=[1,3,5].map(i=>parseInt(h1.substr(i,2),16));
  const c2=[1,3,5].map(i=>parseInt(h2.substr(i,2),16));
  const out=c1.map((v,i)=>Math.round(v*w1+c2[i]*w2));
  return '#'+out.map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();
}

// ─── ORBITAL MECHANICS (same math as the type calculator) ────────────────
function getJulianDay(d){
  const y=d.getUTCFullYear(), m=d.getUTCMonth()+1, day=d.getUTCDate();
  const h=d.getUTCHours()/24+d.getUTCMinutes()/1440+d.getUTCSeconds()/86400;
  let Y=y, M=m;
  if(M<=2){ Y-=1; M+=12; }
  const A=Math.floor(Y/100), B=2-A+Math.floor(A/4);
  return Math.floor(365.25*(Y+4716))+Math.floor(30.6001*(M+1))+day+h+B-1524.5;
}
function norm360(x){ return ((x%360)+360)%360; }
function toRad(d){ return d*Math.PI/180; }
function solarEclipticLongitude(date){
  const JD=getJulianDay(date), T=(JD-2451545.0)/36525;
  const L0=norm360(280.46646+36000.76983*T+0.0003032*T*T);
  const M=norm360(357.52911+35999.05029*T-0.0001537*T*T);
  const Mr=toRad(M);
  const C=(1.914602-0.004817*T-0.000014*T*T)*Math.sin(Mr)
          +(0.019993-0.000101*T)*Math.sin(2*Mr)
          +0.000289*Math.sin(3*Mr);
  return norm360(L0+C);
}
const SYNODIC_MONTH = 29.530588853;
function lunarPhaseDay(date){
  const ref=Date.UTC(2000,0,6,18,14,0);
  const diff=(date.getTime()-ref)/86400000;
  return((diff%SYNODIC_MONTH)+SYNODIC_MONTH)%SYNODIC_MONTH;
}
function nearestCyclicIndex(value, anchors, cycleLength){
  let bestIdx=0, bestDist=Infinity;
  anchors.forEach((a,i)=>{ let d=Math.abs(value-a); d=Math.min(d,cycleLength-d); if(d<bestDist){bestDist=d;bestIdx=i;} });
  return bestIdx;
}

// ─── DATA: 8 SEASON POINTS ────────────────────────────────────────────────
const SEASON_POINTS = [
  { angle:0,   name:"Breaking",  astroLabel:"March Equinox", tree:"Birch", color:"#4FAE63",
    orbital:"crossing its balance point and tipping into the light half of the year",
    solar:"at balanced strength and climbing",
    summary:"Balance crossing into growth. Favors decisive first moves and ending stillness — at the cost of patience for the details." },
  { angle:45,  name:"Sprouting", astroLabel:"Cross-quarter (≈ May 5)", tree:"Hawthorn", color:"#A9C23F",
    orbital:"a quarter-turn past the crossing, tilting further into the light",
    solar:"riding high and still climbing",
    summary:"The first visible burst of new life. Favors wide sampling and quick engagement — at the cost of follow-through." },
  { angle:90,  name:"Cresting",  astroLabel:"June Solstice", tree:"Oak", color:"#E8A33D",
    orbital:"at maximum tilt toward the Sun",
    solar:"at its highest reach, its climb just stalling",
    summary:"Peak intensity, already beginning to turn. Favors full-capacity execution and visible performance — at the cost of sustainable pacing." },
  { angle:135, name:"Reaping",   astroLabel:"Cross-quarter (≈ Aug 7)", tree:"Chestnut", color:"#C17F3E",
    orbital:"past peak tilt, easing back from the Sun",
    solar:"riding high but easing off",
    summary:"The peak made tangible. Favors consolidating gains and securing what works — at the cost of openness to anything new." },
  { angle:180, name:"Reckoning", astroLabel:"September Equinox", tree:"Maple", color:"#7B8B9E",
    orbital:"at the crossing point again, tipping into the dark half of the year",
    solar:"at balanced strength and easing off",
    summary:"Balance tipping toward dark. Favors honest accounting and fair reflection — at the cost of knowing when to stop auditing." },
  { angle:225, name:"Veiling",   astroLabel:"Cross-quarter (≈ Nov 7)", tree:"Yew", color:"#6B5B7B",
    orbital:"a quarter-turn past the crossing, tilting further from the Sun",
    solar:"low in the sky and still easing off",
    summary:"Descent and a thinned boundary. Favors deliberate withdrawal to see clearly — at the cost of staying too long out of view." },
  { angle:270, name:"Kindling",  astroLabel:"December Solstice", tree:"Holly", color:"#A8432F",
    orbital:"at maximum tilt away from the Sun",
    solar:"at its lowest reach, its decline just turning back upward",
    summary:"Deepest dark, becoming rebirth. Favors quiet endurance with no outside support — at the cost of asking for help." },
  { angle:315, name:"Rooting",   astroLabel:"Cross-quarter (≈ Feb 4)", tree:"Pine", color:"#5B4632",
    orbital:"past peak tilt away, easing back toward the Sun",
    solar:"low in the sky but climbing",
    summary:"Stored potential, not yet bloom. Favors building foundation from lived experience — at the cost of noticing when familiar has gone stale." },
];

// ─── DATA: 4 LUNAR PHASES ─────────────────────────────────────────────────
const LUNAR_PHASES = [
  { key:"New",    day:0,                    label:"New Moon",    animal:"Hare",   color:"#6E7191",
    phase:"dark and just beginning again",
    summary:"Beginning, quiet potential, a clean slate. Favors starting fresh without needing a plan yet." },
  { key:"Waxing", day:SYNODIC_MONTH*.25,    label:"Waxing Moon", animal:"Beaver", color:"#8FB6D9",
    phase:"growing toward fullness",
    summary:"Building, accumulating, momentum with nothing spent yet. Favors steady, compounding effort." },
  { key:"Full",   day:SYNODIC_MONTH*.5,     label:"Full Moon",   animal:"Stag",   color:"#F4EED9",
    phase:"complete and fully lit",
    summary:"Culmination, completeness, convergence. Favors bringing things to completion and being seen." },
  { key:"Waning", day:SYNODIC_MONTH*.75,    label:"Waning Moon", animal:"Raven",  color:"#5C4A73",
    phase:"shrinking and giving back its light",
    summary:"Release, letting go, closing what's finished. Favors subtraction over addition." },
];

// ─── DATA: 32 COMBINED FORECASTS ─────────────────────────────────────────
const COMBOS = {
"Breaking|New":{nickname:"Clean Ignition",
  forecast:"This is as clean a start as the cycle offers — the world itself is tipping toward growth right as the process resets to zero. Whatever begins now begins with the season's full backing, not against its grain.",
  opportunities:["Launch something with no precedent to build on","Make the first move on a stalled situation","Commit to a direction without yet needing a plan"],
  cautions:["Confusing the world's readiness with readiness in the details","Deciding for others just because it's your moment to move","Starting too many things at once"],
  question:"What has been waiting for you to simply begin?"},
"Breaking|Waxing":{nickname:"Compounding Break",
  forecast:"The push to break from stillness now has something to build on — this stretch doesn't just start things, it starts things that will keep accumulating well past its own span. Early decisiveness compounds rather than dissipating.",
  opportunities:["Commit to a direction and keep adding to it steadily","Use momentum to push through initial resistance","Make decisions that set a long build in motion"],
  cautions:["Letting early decisiveness harden into inflexibility before the build has proven itself","Dominating collaborators while setting direction"],
  question:"What decision, made now, will still be paying off long after this stretch has passed?"},
"Breaking|Full":{nickname:"Public Pivot",
  forecast:"The instinct to break from stillness meets a stretch where everything is already visible at once — this isn't a quiet pivot, it's one made in full view over these weeks. Whatever's decided during this window, others will see clearly.",
  opportunities:["Make a visible, public commitment to a new direction","Use full clarity to make a confident call","Gather people around a fresh direction"],
  cautions:["Letting the pressure of visibility push a decision before it's ready","Performing decisiveness rather than practicing it","Dominating a room that's already full of input"],
  question:"What would you decide if you knew everyone was already watching?"},
"Breaking|Waning":{nickname:"Ending Before Beginning",
  forecast:"The pull to break from stillness and start something new runs against a process that's asking for something to be let go of first. The most honest move may be ending before beginning.",
  opportunities:["Use the decisive instinct to finally close something overdue","Break from an old pattern rather than starting a new project","Clear space before committing to what's next"],
  cautions:["Starting something new just to avoid finishing what's ending","Forcing a fresh direction before the old one has actually been released"],
  question:"What needs to end before anything new can honestly be called a beginning?"},

"Sprouting|New":{nickname:"Open Field",
  forecast:"Doors are opening everywhere, and none of them require a decision yet — this is a stretch built for sampling, not committing. Nothing in these weeks punishes trying several things at once.",
  opportunities:["Explore multiple options without committing","Say yes to unfamiliar invitations","Treat this as data-gathering, not decision-making"],
  cautions:["Mistaking exploring for progress if nothing is retained","Confusing \u201cnew\u201d with \u201cnecessary\u201d","Locking in a favorite too soon"],
  question:"What door would you open if you didn't have to walk through it yet?"},
"Sprouting|Waxing":{nickname:"Early Traction",
  forecast:"What's sampled now doesn't just inform — it starts to build. The exploring is turning into early traction; notice which door is already pulling back.",
  opportunities:["Notice which explorations are gaining their own momentum","Lightly invest in the most promising thread","Keep testing while starting to follow up"],
  cautions:["Scattering effort across too many threads once one is clearly building","Abandoning early traction for the next shiny option"],
  question:"Which of the things you've been sampling is quietly becoming something more?"},
"Sprouting|Full":{nickname:"The Whole Field",
  forecast:"Every option sampled so far becomes visible at once during this stretch, which can feel like abundance or like noise depending on how it's met. This is a window for surveying the whole field, not adding to it.",
  opportunities:["Survey everything explored so far and see the full pattern","Use the convergence to identify what's actually worth pursuing","Gather input from many sources at once"],
  cautions:["Adding new options into an already-full picture","Chasing every visible thread simultaneously"],
  question:"Now that you can see everything you've been sampling at once, what actually stands out?"},
"Sprouting|Waning":{nickname:"Narrowing the Doors",
  forecast:"The appetite to keep sampling runs into a process that's asking for some doors to close, not more to open. Letting go of a few explored paths clears room for the ones still worth following.",
  opportunities:["Consciously drop threads that never gained traction","Narrow options on purpose","Use the closing energy to commit to fewer, better paths"],
  cautions:["Continuing to explore just to avoid the discomfort of narrowing down","Treating every open door as still worth keeping open"],
  question:"Which paths have you been keeping open only out of habit?"},

"Cresting|New":{nickname:"Peak With Nothing Built Yet",
  forecast:"Capacity is at its highest point through this stretch, but the process itself is asking for a beginning from zero — the two don't naturally match. The peak may need to be spent on starting something, not finishing it.",
  opportunities:["Use peak energy to launch rather than showcase","Take a decisive first step while capacity is high","Trust that a strong beginning doesn't need a finished result yet"],
  cautions:["Forcing a \u201cbig reveal\u201d when there's nothing built yet to reveal","Frustration at capacity with nowhere obvious to spend it"],
  question:"What could your full capacity start during this stretch, rather than finish?"},
"Cresting|Waxing":{nickname:"Full-Force Execution",
  forecast:"Full capacity is meeting rising momentum — this is about as much forward force as the cycle produces, and it holds across the whole stretch. What's pushed on now keeps compounding rather than plateauing.",
  opportunities:["Execute at full intensity on something already building","Commit hard to the direction already in motion","Take on more than usual, since momentum will carry it"],
  cautions:["Over-extension, since two amplifying forces are stacking","Letting intensity crowd out others' pace"],
  question:"Where can you afford to push harder over these weeks, because the momentum will carry the weight?"},
"Cresting|Full":{nickname:"Maximum Visibility",
  forecast:"This is the closest the whole cycle comes to full, undeniable visibility — capacity and convergence peaking together. Whatever's been built is on display now, whether or not there was ever a plan for an audience.",
  opportunities:["Showcase finished work at its most complete","Take the most visible action of the season","Let culmination be witnessed rather than downplayed"],
  cautions:["Letting the pressure of maximum visibility tip into performing rather than being","Treating this peak as a permanent state to maintain"],
  question:"What have you built that deserves to be seen exactly as it is, during this stretch?"},
"Cresting|Waning":{nickname:"The Turn Beneath the Peak",
  forecast:"Even at peak capacity, the process is already asking for something to be released — this is the turn beginning underneath the peak. Full doesn't mean finished; it means it's time to start setting some of it down.",
  opportunities:["Let go of anything forced past its natural peak","Use remaining capacity to close things out well rather than start more","Accept the turn instead of resisting it"],
  cautions:["Mistaking the turn for failure — pushing harder here usually backfires","Clinging to peak intensity once it's already easing"],
  question:"What are you still gripping at full strength that's actually ready to be released?"},

"Reaping|New":{nickname:"Quiet Second Cycle",
  forecast:"The work through this stretch is to secure what's already been produced, even as a smaller, quieter cycle starts to stir underneath it. Don't let the new distract from properly closing out the old.",
  opportunities:["Finish securing recent gains before turning to anything new","Let a new idea take root quietly without acting on it yet","Protect finished work from premature changes"],
  cautions:["Abandoning consolidation for the pull of something new and shinier","Diluting focus between securing and starting"],
  question:"What still needs to be gathered in before you let yourself think about what's next?"},
"Reaping|Waxing":{nickname:"Reinforced Harvest",
  forecast:"What's already been harvested is being added to, not just protected — a stretch for reinforcing gains rather than merely banking them. Consolidation and growth are, unusually, happening together.",
  opportunities:["Reinvest secured gains into further growth","Strengthen existing structures rather than building new ones","Compound what's already proven to work"],
  cautions:["Overreaching past what the harvest can actually support","Confusing reinforcement with expansion into new territory"],
  question:"How can what you've already gathered be made to grow further, rather than just kept?"},
"Reaping|Full":{nickname:"The Full Accounting of Yield",
  forecast:"All of what's been gathered in becomes visible at once during this stretch — a window to see the whole harvest clearly, not to add to it. What's actually there may be more, or less, than it felt like.",
  opportunities:["Take full stock of everything produced so far","Make the results of your work visible to others","Use the clarity to decide what to actually keep"],
  cautions:["Letting the size of the full harvest push toward overcommitting it all at once","Rushing to start something new with it"],
  question:"Now that you can see the whole harvest, what does it actually tell you?"},
"Reaping|Waning":{nickname:"Keep the Essential, Release the Rest",
  forecast:"The instinct to hold onto everything gathered runs into a process that's asking for the release of what isn't actually needed. Keep what's essential; let the rest go with the season.",
  opportunities:["Decide deliberately what's worth keeping and let the rest go","Close out a project cleanly rather than holding it open","Simplify down to what's actually useful"],
  cautions:["Hoarding past the point of usefulness out of fear of scarcity","Holding onto \u201cfinished\u201d work just because it once mattered"],
  question:"What have you kept simply because it was hard-won, even though you don't need it anymore?"},

"Reckoning|New":{nickname:"Clean Books",
  forecast:"The accounting is happening right as a new cycle opens, so whatever the reckoning reveals doesn't have to be dragged into what comes next. A rare chance to close the books and start genuinely clean.",
  opportunities:["Take honest stock, then actually let it inform a fresh start","Separate what's carried forward from what's set down","Begin again without re-litigating the past"],
  cautions:["Letting the audit turn into a story replayed instead of a clean close","Starting fresh while still emotionally re-running the old tally"],
  question:"If the accounting is done, what would starting clean actually look like?"},
"Reckoning|Waxing":{nickname:"Course-Corrected Build",
  forecast:"What the accounting reveals now feeds directly into whatever's currently being built. A good stretch for correcting course based on what's actually true, not what was hoped to be true.",
  opportunities:["Use honest feedback to adjust what's being built","Course-correct early rather than after more has compounded","Let evidence, not sentiment, guide the next steps"],
  cautions:["Letting excessive self-audit slow down real momentum","Over-correcting based on one hard truth"],
  question:"What honest truth, if let in now, would change what you're building?"},
"Reckoning|Full":{nickname:"The Fullest Accounting",
  forecast:"This is as clear an accounting as the year provides — everything relevant visible at once, and the balance point making it hard to look away from what's actually true. The clarity won't stay this available.",
  opportunities:["Take the most complete inventory of the year so far","Have the honest conversation that's been avoided","Let comparison give way to clarity rather than judgment"],
  cautions:["Letting the fullness of what's visible tip into harsh self-judgment","Weighing everyone and everything against each other instead of against what actually matters"],
  question:"What does the clearest possible accounting tell you that a kinder story wouldn't?"},
"Reckoning|Waning":{nickname:"Tally Into Release",
  forecast:"The tally and the release are moving in the same direction through this stretch — whatever the accounting reveals as finished can actually be set down, not just noted. This is closure with very little resistance.",
  opportunities:["Let the accounting give permission to finally release something","Close a chapter with clear eyes rather than nostalgia","Rest once the tally and the letting-go are both done"],
  cautions:["Letting the ease of releasing turn into releasing things prematurely","Using \u201cit's over\u201d as an excuse to skip the honest accounting first"],
  question:"What is the accounting giving you permission to finally let go of?"},

"Veiling|New":{nickname:"Private Beginning",
  forecast:"Whatever begins now begins in private — this isn't a stretch for announcing anything, but for letting something take shape unseen over its span. The thinned boundary works in your favor if it stays private a while longer.",
  opportunities:["Let a new idea or feeling stay unspoken while it forms","Begin something internal — a practice, a reflection, a private commitment","Trust ambiguity instead of rushing to define what's starting"],
  cautions:["Forcing a private beginning into premature visibility","Mistaking the quiet for nothing happening"],
  question:"What's quietly starting that doesn't need to be explained to anyone yet?"},
"Veiling|Waxing":{nickname:"Unmeasured Depth",
  forecast:"Something is accumulating, but beneath the surface rather than out where it could be measured. Inward building is still building, even without visible evidence.",
  opportunities:["Keep developing something privately before revealing it","Let depth accumulate rather than performance","Use solitude productively rather than as avoidance"],
  cautions:["Mistaking lack of external validation for lack of progress","Withdrawing so far the accumulation loses contact with reality"],
  question:"What's building in you that doesn't have anything to show for itself yet, and doesn't need to?"},
"Veiling|Full":{nickname:"Retreat From the Convergence",
  forecast:"Everything is trying to become visible at once, right as the instinct here is to step back and look underneath the surface instead. The honest move may be a private reckoning rather than a public one.",
  opportunities:["Process what's converging internally before responding to any of it","Choose depth over disclosure this time","Let understanding come fully before engaging"],
  cautions:["Letting the pull toward visibility force a response before it's ready","Using withdrawal to dodge something that genuinely needs addressing"],
  question:"What's becoming clear that you'd rather sit with quietly than announce?"},
"Veiling|Waning":{nickname:"Aligned Release",
  forecast:"Stepping back and letting go are, through this stretch, the same motion — a natural, low-resistance closing. What's ending doesn't need to be witnessed to be real.",
  opportunities:["Let something end privately, without needing closure from others","Use solitude to actually process a loss or ending","Release what the withdrawal has already made clear needs to go"],
  cautions:["Letting private release turn into permanent disappearance","Using the ease of letting go here to avoid one conversation that actually needs to happen"],
  question:"What are you ready to release quietly, without needing anyone else to witness it?"},

"Kindling|New":{nickname:"The Year's Hinge",
  forecast:"This is the hinge of the entire year — the deepest dark and the truest blank slate arriving at once. Nothing external is offering support, and nothing external needs to yet; this is where the turn quietly begins.",
  opportunities:["Mark the reset even if nothing visible has changed yet","Set a quiet intention without needing to act on it","Trust that holding steady here is itself the beginning"],
  cautions:["Mistaking the stillness for nothing happening","Forcing a big visible start before there's any light to build with"],
  question:"What is beginning, right at the darkest, quietest point, before there's any proof of it?"},
"Kindling|Waxing":{nickname:"The Fragile Flame",
  forecast:"Whatever's sustaining you is just starting to gather a little momentum, even though external conditions still offer very little. This is fragile, early growth — protect it rather than test it.",
  opportunities:["Nurture something small and early without rushing it","Add a little more fuel gradually across the stretch rather than all at once","Trust incremental gains even when barely visible"],
  cautions:["Demanding more from an early flame than it can yet give","Exposing something fragile to too much pressure too soon"],
  question:"What small thing are you keeping alive that just needs a little more time before it can be tested?"},
"Kindling|Full":{nickname:"Vigil in the Dark",
  forecast:"Nearly nothing is materially changing across this stretch, yet everything relevant is somehow visible at once — a window for ritual and vigil rather than production. What's being sustained is worth actually witnessing, even in the dark.",
  opportunities:["Hold a small ceremony or moment of recognition for what's been kept alive","Gather others around something quiet rather than something finished","Let visibility here be about presence, not output"],
  cautions:["Confusing this convergence with a demand for something to show","Mistaking quiet dignity for something that needs to be proven"],
  question:"What have you kept burning that deserves to be witnessed, even though it isn't finished?"},
"Kindling|Waning":{nickname:"Release at the Turning Point",
  forecast:"Right as the darkest point turns back toward light, something is also ready to be released — holding on and turning back can happen at the same time. Let what's finished go; the turn doesn't need it carried forward.",
  opportunities:["Release something right at the turning point rather than carrying it into the new light","Let the vigil end cleanly","Trust the reversal is already underway without more effort"],
  cautions:["Clinging to what's ending out of fear the turn won't actually come","Confusing quiet release with giving up on the flame itself"],
  question:"What are you ready to set down exactly as the light starts to return?"},

"Rooting|New":{nickname:"Groundwork, Twice Over",
  forecast:"Nothing has bloomed yet, and now a whole new cycle is opening on top of that — foundation being laid twice over, first from lived experience, now from a fresh start. Build quietly; the visible part comes later.",
  opportunities:["Lay groundwork for something with no proof of it yet","Let past experience inform a genuinely new beginning","Commit to structure before there's anything showy to structure"],
  cautions:["Forcing visible progress before the foundation is actually ready","Starting fresh in a way that ignores what past experience already taught"],
  question:"What foundation are you laying during this stretch that won't show results for a while yet?"},
"Rooting|Waxing":{nickname:"Reinforced Structure",
  forecast:"The groundwork already in place is actively getting reinforced through this stretch, not just maintained — stabilizing structure that's also accumulating strength. Steady effort compounds particularly well across these weeks.",
  opportunities:["Reinforce existing foundations rather than starting new ones","Build reliability into systems that already work","Let steady, unglamorous effort accumulate over the stretch"],
  cautions:["Mistaking reinforcement for a cue to overhaul everything","Impatience with structural work that doesn't show immediate results"],
  question:"What foundation, if reinforced now, would hold much more later?"},
"Rooting|Full":{nickname:"Foundation Made Visible",
  forecast:"For once, the foundation being built underneath everything becomes visible all at once — a rare chance to actually see how much has been quietly established. Let it be seen without rushing to build more on top of it yet.",
  opportunities:["Take stock of the structural work usually invisible","Let others see the foundation that's been provided","Use the visibility to confirm the groundwork is sound"],
  cautions:["Mistaking this visibility as a cue to add complexity too soon","Discounting quiet, structural work just because it isn't dramatic"],
  question:"What have you been steadily building that finally deserves to be seen clearly?"},
"Rooting|Waning":{nickname:"Pruning the Foundation",
  forecast:"Even foundational things need pruning — a stretch for releasing whatever structural habit or system has outlived its usefulness. Stability doesn't mean keeping everything; it means keeping what actually holds weight.",
  opportunities:["Retire a system, habit, or structure that no longer serves","Simplify the foundation rather than adding to it","Let go of familiarity that's calcified into inertia"],
  cautions:["Confusing structural release with instability — some things genuinely need to go","Holding onto old foundations purely out of loyalty to the past"],
  question:"What part of your foundation is actually just old habit, dressed up as stability?"},
};

// ─── CALCULATION ──────────────────────────────────────────────────────────
function calculate(date){
  const solarLong=solarEclipticLongitude(date);
  const seasonIdx=nearestCyclicIndex(solarLong,SEASON_POINTS.map(p=>p.angle),360);
  const season=SEASON_POINTS[seasonIdx];
  const moonDay=lunarPhaseDay(date);
  const lunarIdx=nearestCyclicIndex(moonDay,LUNAR_PHASES.map(p=>p.day),SYNODIC_MONTH);
  const lunar=LUNAR_PHASES[lunarIdx];
  const combo=COMBOS[season.name+"|"+lunar.key];
  const comboColor=blendHex(season.color,lunar.color,0.55,0.45);
  return{season,lunar,combo,comboColor};
}

function renderResult(container, r){
  const {season,lunar,combo,comboColor}=r;
  container.innerHTML=`
    <div class="motif-header">
      <div class="motif-icon">${drawSeasonGlyph(season.name,season.color)}<span>${season.name}</span></div>
      <div class="motif-sep">×</div>
      <div class="motif-icon">${drawLunarGlyph(lunar.key,lunar.color)}<span>${lunar.label}</span></div>
    </div>
    <p class="result-nickname"><span class="swatch-inline" style="background:${comboColor}"></span>&nbsp; ${combo.nickname}</p>
    <p class="result-name">${season.name} &nbsp;+&nbsp; ${lunar.label}</p>
    <p class="span-note">This combined point runs roughly 11–13 days · ${season.astroLabel}</p>
    <div class="tagline-block">
      <p class="tagline">"The Earth is ${season.orbital}; the Sun is ${season.solar}; the Moon is ${lunar.phase}."</p>
    </div>
    <span class="section-label">Cosmic climate forecast</span>
    <p class="forecast-text">${combo.forecast}</p>
    <div class="twocol">
      <div class="box opportunity">
        <span class="section-label">Opportunities</span>
        <ul>${combo.opportunities.map(o=>`<li>${o}</li>`).join('')}</ul>
      </div>
      <div class="box caution">
        <span class="section-label">Cautions</span>
        <ul>${combo.cautions.map(c=>`<li>${c}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="question-block">
      <span class="section-label">Reflective question</span>
      <p class="question-text">${combo.question}</p>
    </div>`;
}

// ─── TODAY VIEW ───────────────────────────────────────────────────────────
(function(){
  const now=new Date();
  const cd=new Date(Date.UTC(now.getFullYear(),now.getMonth(),now.getDate(),12,0,0));
  const r=calculate(cd);
  const label=now.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric',year:'numeric'});
  document.getElementById('todayDateLabel').textContent=label;
  renderResult(document.getElementById('todayResult'), r);
})();

// ─── CALCULATOR VIEW ──────────────────────────────────────────────────────
document.getElementById('calcRevealBtn').addEventListener('click',()=>{
  const month=parseInt(document.getElementById('calcMonth').value,10);
  const day=parseInt(document.getElementById('calcDay').value,10);
  const year=parseInt(document.getElementById('calcYear').value,10);
  const err=document.getElementById('calcErrorMsg');
  if(!day||!year||year<1900||year>2100){ err.textContent="Enter a complete, valid date to continue."; return; }
  const check=new Date(year,month-1,day);
  if(check.getFullYear()!==year||check.getMonth()!==month-1||check.getDate()!==day){ err.textContent="That date doesn't exist on the calendar — double-check the day."; return; }
  err.textContent='';
  const cd=new Date(Date.UTC(year,month-1,day,12,0,0));
  const r=calculate(cd);
  const resultView=document.getElementById('calcResultView');
  renderResult(resultView, r);
  resultView.innerHTML += `<a class="reset" id="calcResetLink">&larr; Check another date</a>`;
  document.getElementById('calcResetLink').addEventListener('click',()=>{
    resultView.style.display='none';
    document.getElementById('calcFormView').style.display='block';
    err.textContent='';
  });
  document.getElementById('calcFormView').style.display='none';
  resultView.style.display='block';
});
