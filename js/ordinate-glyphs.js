// ─── SVG MOTIF DRAWING ────────────────────────────────────────────────────
// Each function returns SVG markup for a 64×64 viewBox symbol.
// Season symbols use the season color; lunar archetype symbols use the lunar color.

export function svgWrap(inner, color, size=64){
  return `<svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" style="display:block">`
    + inner + `</svg>`;
}

export const SEASON_GLYPHS = {
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

export const LUNAR_GLYPHS = {
  Pilgrim: c => svgWrap(
    `<line x1="32" y1="10" x2="32" y2="54" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/>
     <path d="M32 10 C32 10 22 18 24 24" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
     <line x1="22" y1="54" x2="42" y2="54" stroke="${c}" stroke-width="2" stroke-linecap="round"/>`,c),

  Adept: c => svgWrap(
    `<line x1="32" y1="10" x2="32" y2="26" stroke="${c}" stroke-width="4" stroke-linecap="round"/>
     <path d="M24 26 L40 26 L34 52 L30 52 Z" fill="${c}" opacity=".65" stroke="${c}" stroke-width="1.5" stroke-linejoin="round"/>
     <line x1="32" y1="30" x2="32" y2="48" stroke="${c}" stroke-width="1.3" opacity=".5"/>`,c),

  Beacon: c => svgWrap(
    `<rect x="26" y="34" width="12" height="20" rx="2" fill="none" stroke="${c}" stroke-width="2"/>
     <path d="M32 34 C28 26 22 22 32 10 C42 22 36 26 32 34 Z" fill="${c}" opacity=".55" stroke="${c}" stroke-width="1.5" stroke-linejoin="round"/>
     <line x1="20" y1="54" x2="44" y2="54" stroke="${c}" stroke-width="2" stroke-linecap="round"/>`,c),

  Mystic: c => svgWrap(
    `<path d="M32 32 m0,-18 a18,18 0 0,1 18,18 a14,14 0 0,1 -14,14 a10,10 0 0,1 -10,-10 a7,7 0 0,1 7,-7 a4,4 0 0,1 4,4 a2,2 0 0,1 -2,2" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>`,c),
};

export const TREE_GLYPHS = {
  Birch: c => svgWrap(
    `<line x1="32" y1="56" x2="32" y2="14" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
     <line x1="27" y1="46" x2="35" y2="45.4" stroke="${c}" stroke-width="1.3" opacity=".55"/>
     <line x1="28" y1="37" x2="36" y2="36.5" stroke="${c}" stroke-width="1.3" opacity=".55"/>
     <line x1="27" y1="27" x2="35" y2="27.6" stroke="${c}" stroke-width="1.3" opacity=".55"/>
     <path d="M32 22 Q22 14 16 18" fill="none" stroke="${c}" stroke-width="1.6" stroke-linecap="round"/>
     <path d="M32 18 Q42 10 48 14" fill="none" stroke="${c}" stroke-width="1.6" stroke-linecap="round"/>
     <ellipse cx="16" cy="18" rx="4" ry="2.3" fill="${c}" opacity=".4"/>
     <ellipse cx="48" cy="14" rx="4" ry="2.3" fill="${c}" opacity=".4"/>`,c),

  Hawthorn: c => svgWrap(
    `<path d="M14 50 L26 38 L20 30 L34 24 L28 16 L44 14" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
     <line x1="26" y1="38" x2="32" y2="41" stroke="${c}" stroke-width="1.3" stroke-linecap="round"/>
     <line x1="34" y1="24" x2="40" y2="27" stroke="${c}" stroke-width="1.3" stroke-linecap="round"/>
     <circle cx="20" cy="30" r="3.6" fill="none" stroke="${c}" stroke-width="1.4"/>
     <circle cx="44" cy="14" r="3.6" fill="none" stroke="${c}" stroke-width="1.4"/>
     <circle cx="14" cy="50" r="2.2" fill="${c}" opacity=".5"/>`,c),

  Oak: c => svgWrap(
    `<path d="M14 30 C10 24 14 16 22 16 C24 10 34 8 38 14 C46 12 52 18 50 26 C56 28 56 36 48 38 C48 44 38 46 34 42 C30 48 20 46 18 40 C10 40 8 32 14 30 Z" fill="none" stroke="${c}" stroke-width="2"/>
     <line x1="32" y1="42" x2="32" y2="56" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
     <ellipse cx="32" cy="58" rx="3" ry="4" fill="${c}" opacity=".4"/>`,c),

  Chestnut: c => svgWrap(
    `<path d="M32 12 C20 16 14 26 16 36 C18 44 46 44 48 36 C50 26 44 16 32 12 Z" fill="none" stroke="${c}" stroke-width="2"/>
     <line x1="20" y1="18" x2="14" y2="12" stroke="${c}" stroke-width="1.3" stroke-linecap="round"/>
     <line x1="26" y1="14" x2="22" y2="6" stroke="${c}" stroke-width="1.3" stroke-linecap="round"/>
     <line x1="38" y1="14" x2="42" y2="6" stroke="${c}" stroke-width="1.3" stroke-linecap="round"/>
     <line x1="44" y1="18" x2="50" y2="12" stroke="${c}" stroke-width="1.3" stroke-linecap="round"/>
     <line x1="18" y1="30" x2="10" y2="28" stroke="${c}" stroke-width="1.3" stroke-linecap="round"/>
     <line x1="46" y1="30" x2="54" y2="28" stroke="${c}" stroke-width="1.3" stroke-linecap="round"/>
     <path d="M22 38 Q32 46 42 38" fill="none" stroke="${c}" stroke-width="1.6" stroke-linecap="round" opacity=".5"/>
     <circle cx="32" cy="34" r="5" fill="${c}" opacity=".35"/>`,c),

  Maple: c => svgWrap(
    `<ellipse cx="18" cy="26" rx="14" ry="6" fill="none" stroke="${c}" stroke-width="2" transform="rotate(-20 18 26)"/>
     <ellipse cx="46" cy="26" rx="14" ry="6" fill="none" stroke="${c}" stroke-width="2" transform="rotate(20 46 26)"/>
     <circle cx="32" cy="34" r="4" fill="none" stroke="${c}" stroke-width="1.8"/>
     <line x1="32" y1="38" x2="32" y2="52" stroke="${c}" stroke-width="1.5" stroke-linecap="round" opacity=".5"/>`,c),

  Yew: c => svgWrap(
    `<path d="M32 10 Q20 24 14 34 Q24 30 32 30 Q40 30 50 34 Q44 24 32 10 Z" fill="none" stroke="${c}" stroke-width="1.8"/>
     <path d="M32 26 Q18 42 10 50 Q24 44 32 44 Q40 44 54 50 Q46 42 32 26 Z" fill="none" stroke="${c}" stroke-width="1.8" opacity=".7"/>
     <line x1="32" y1="50" x2="32" y2="58" stroke="${c}" stroke-width="2" stroke-linecap="round"/>
     <circle cx="22" cy="40" r="2" fill="${c}" opacity=".5"/>
     <circle cx="42" cy="46" r="2" fill="${c}" opacity=".5"/>`,c),

  Holly: c => svgWrap(
    `<path d="M32 14 C36 20 44 20 42 26 C48 28 48 36 42 36 C44 42 38 44 34 40 C34 46 30 46 30 40 C26 44 20 42 22 36 C16 36 16 28 22 26 C20 20 28 20 32 14 Z" fill="none" stroke="${c}" stroke-width="2" stroke-linejoin="round"/>
     <circle cx="27" cy="50" r="3" fill="${c}" opacity=".55"/>
     <circle cx="33" cy="52" r="3" fill="${c}" opacity=".55"/>
     <circle cx="38" cy="49" r="3" fill="${c}" opacity=".55"/>`,c),

  Pine: c => svgWrap(
    `<path d="M32 8 L22 22 L27 22 L18 34 L24 34 L14 46 L50 46 L40 34 L46 34 L37 22 L42 22 Z" fill="none" stroke="${c}" stroke-width="1.8" stroke-linejoin="round"/>
     <line x1="32" y1="46" x2="32" y2="52" stroke="${c}" stroke-width="2.2" stroke-linecap="round"/>
     <line x1="32" y1="52" x2="20" y2="60" stroke="${c}" stroke-width="1.4" stroke-linecap="round" opacity=".6"/>
     <line x1="32" y1="52" x2="44" y2="60" stroke="${c}" stroke-width="1.4" stroke-linecap="round" opacity=".6"/>
     <line x1="32" y1="52" x2="32" y2="62" stroke="${c}" stroke-width="1.4" stroke-linecap="round" opacity=".6"/>`,c),
};