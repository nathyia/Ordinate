import {
    SEASON_POINTS,
    SYNODIC_MONTH,
    LUNAR_PHASES,
    COMBOS
} from "./ordinate-data.js";

// ─── CALCULATION LOGIC ────────────────────────────────────────────────────
// The constellation "images" you see after calculating are not imported or
// pre-drawn — they are generated fresh every time, right here in the browser,
// using a seeded pseudo-random number generator (mulberry32) keyed to the
// Season Point name. The same season name always produces the same star
// positions (deterministic), but each of the 8 seasons has a different
// constellation shape. The connecting lines and star dots are drawn as SVG
// elements and animated with CSS stroke-dashoffset transitions. The color
// used for lines and stars is the blended combo color (55% season, 45% lunar),
// so the constellation's tint also reflects both aspects of your type.

function blendHex(h1, h2, w1, w2){
  const c1=[1,3,5].map(i=>parseInt(h1.substr(i,2),16));
  const c2=[1,3,5].map(i=>parseInt(h2.substr(i,2),16));
  const out=c1.map((v,i)=>Math.round(v*w1+c2[i]*w2));
  return '#'+out.map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();
}

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

function nearestCyclicIndex(value, anchors, cycleLength){
  let bestIdx=0, bestDist=Infinity;
  anchors.forEach((a,i)=>{ let d=Math.abs(value-a); d=Math.min(d,cycleLength-d); if(d<bestDist){bestDist=d;bestIdx=i;} });
  return bestIdx;
}

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

function lunarPhaseDay(date){
  const ref=Date.UTC(2000,0,6,18,14,0);
  const diff=(date.getTime()-ref)/86400000;
  return((diff%SYNODIC_MONTH)+SYNODIC_MONTH)%SYNODIC_MONTH;
}

export function calculate(month,day,year){
  const date=new Date(year,month-1,day);
  if(date.getFullYear()!==year||date.getMonth()!==month-1||date.getDate()!==day) return null;
  const cd=new Date(Date.UTC(year,month-1,day,12,0,0));
  const solarLong=solarEclipticLongitude(cd);
  const seasonIdx=nearestCyclicIndex(solarLong,SEASON_POINTS.map(p=>p.angle),360);
  const season=SEASON_POINTS[seasonIdx];
  const moonDay=lunarPhaseDay(cd);
  const lunarIdx=nearestCyclicIndex(moonDay,LUNAR_PHASES.map(p=>p.day),SYNODIC_MONTH);
  const lunar=LUNAR_PHASES[lunarIdx];
  const combo=COMBOS[`${season.name}|${lunar.name}`];
  const comboColor=blendHex(season.color,lunar.color,0.55,0.45);
  return{season,lunar,combo,comboColor,solarLong,moonDay};
}