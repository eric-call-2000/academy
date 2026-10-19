/* ============================================================
   Accounting Lab — unit plates
   ------------------------------------------------------------
   One engraved "plate" per unit, in the style of old ledgers and
   business manuals: sepia ink, cross-hatching, parchment. Each is
   SVG markup for a 0 0 100 100 viewBox, drawn with these classes
   (styled in styles.css):
     e   ink outline         ef  fine ink line
     hf  hatched fill        cf  cross-hatched fill
     pf  parchment fill      dk  solid dark ink
     thick  a heavy stroke
   The hatch patterns live once in index.html (#e-hatch, #e-cross,
   and coarser -c versions that small tiles switch to, so hatching
   stays legible at card size). No image files, no emoji.
   ============================================================ */
(function (L) {
  L.ART = {
    u01: {
      label: "Engraving of a balance scale",
      svg: '<path d="M30 88 H70 L64 82 H36 Z" class="cf"></path>' +
        '<rect x="47" y="26" width="6" height="56" class="hf"></rect>' +
        '<circle cx="50" cy="21" r="4.5" class="pf"></circle>' +
        '<path d="M16 33 Q50 25 84 33" class="e thick"></path>' +
        '<path d="M18 33 L10 57 M18 33 L26 57 M82 33 L74 57 M82 33 L90 57" class="ef"></path>' +
        '<path d="M7 57 Q18 68 29 57 Z M71 57 Q82 68 93 57 Z" class="hf"></path>' +
        '<ellipse cx="18" cy="55" rx="5" ry="1.6" class="pf"></ellipse><ellipse cx="18" cy="52.5" rx="5" ry="1.6" class="pf"></ellipse>'
    },
    u02: {
      label: "Engraving of a quill pen and inkwell",
      svg: '<path d="M30 60 Q28 84 34 86 H62 Q68 84 66 60 Z" class="hf"></path>' +
        '<rect x="38" y="52" width="20" height="9" rx="2" class="cf"></rect>' +
        '<ellipse cx="48" cy="52" rx="10" ry="2.5" class="dk"></ellipse>' +
        '<path d="M22 87 H76" class="e"></path>' +
        '<path d="M48 52 Q60 30 86 10" class="e"></path>' +
        '<path d="M54 40 Q66 18 86 10 Q78 30 58 40 Z" class="hf"></path>' +
        '<path d="M58 36 l-4 -6 M62 31 l-4 -7 M67 26 l-3 -7 M72 21 l-2 -6 M60 38 l6 2 M65 33 l7 1 M70 28 l7 0 M75 23 l6 -1" class="ef"></path>'
    },
    u03: {
      label: "Engraving of an hourglass",
      svg: '<rect x="26" y="11" width="48" height="8" rx="1.5" class="cf"></rect>' +
        '<rect x="26" y="81" width="48" height="8" rx="1.5" class="cf"></rect>' +
        '<path d="M31 19 V81 M69 19 V81" class="e thick"></path>' +
        '<path d="M37 19 Q37 40 50 50 Q63 40 63 19 Z M37 81 Q37 60 50 50 Q63 60 63 81 Z" class="pf"></path>' +
        '<path d="M42 30 Q45 42 50 47 Q55 42 58 30 Z" class="hf"></path>' +
        '<path d="M39 81 Q50 64 61 81 Z" class="hf"></path>' +
        '<path d="M50 50 V72" class="ef"></path>'
    },
    u04: {
      label: "Engraving of bound ledger volumes on a shelf",
      svg: '<path d="M8 88 H92" class="e thick"></path>' +
        '<rect x="14" y="30" width="16" height="58" class="hf"></rect>' +
        '<path d="M14 40 H30 M14 78 H30" class="ef"></path><rect x="17" y="49" width="10" height="12" class="pf"></rect>' +
        '<rect x="32" y="20" width="20" height="68" class="pf"></rect>' +
        '<path d="M32 30 H52 M32 34 H52 M32 74 H52 M32 78 H52" class="ef"></path><rect x="36" y="44" width="12" height="16" class="cf"></rect>' +
        '<rect x="54" y="34" width="14" height="54" class="cf"></rect>' +
        '<path d="M70 88 L84 88 L94 40 L80 37 Z" class="hf"></path>' +
        '<path d="M73 74 L87 77 M78 50 L91 53" class="ef"></path>'
    },
    u05: {
      label: "Engraving of a counting-house safe",
      svg: '<rect x="22" y="22" width="56" height="58" rx="3" class="pf"></rect>' +
        '<path d="M78 22 L86 18 V76 L78 80 Z" class="cf"></path>' +
        '<path d="M22 22 L30 18 H86" class="e"></path>' +
        '<rect x="28" y="28" width="44" height="46" rx="2" class="ef"></rect>' +
        '<circle cx="50" cy="51" r="12" class="hf"></circle>' +
        '<circle cx="50" cy="51" r="5" class="pf"></circle>' +
        '<path d="M50 36 V39 M50 63 V66 M35 51 H38 M62 51 H65 M39 40 l2 2 M61 40 l-2 2 M39 62 l2 -2 M61 62 l-2 -2" class="ef"></path>' +
        '<path d="M66 46 V56" class="e thick"></path>' +
        '<path d="M26 80 V86 H34 V80 M66 80 V86 H74 V80" class="e"></path>'
    },
    u06: {
      label: "Engraving of an invoice scroll with a wax seal",
      svg: '<rect x="24" y="20" width="52" height="60" class="pf"></rect>' +
        '<rect x="18" y="13" width="64" height="10" rx="5" class="hf"></rect>' +
        '<rect x="18" y="77" width="64" height="10" rx="5" class="hf"></rect>' +
        '<path d="M31 32 H69 M31 40 H65 M31 48 H69 M31 56 H58" class="ef"></path>' +
        '<path d="M48 66 H69" class="e"></path>' +
        '<path d="M60 74 L55 94 L60 90 L63 95 Z M68 74 L73 94 L68 90 L65 95 Z" class="hf"></path>' +
        '<circle cx="64" cy="72" r="8" class="cf"></circle><circle cx="64" cy="72" r="4" class="pf"></circle>'
    },
    u07: {
      label: "Engraving of a shipping crate with a tag",
      svg: '<path d="M8 88 H92" class="e"></path>' +
        '<path d="M16 42 L32 34 H82 L66 42 Z" class="pf"></path>' +
        '<path d="M66 42 L82 34 V78 L66 86 Z" class="cf"></path>' +
        '<rect x="16" y="42" width="50" height="44" class="pf"></rect>' +
        '<path d="M16 53 H66 M16 64 H66 M16 75 H66" class="ef"></path>' +
        '<path d="M16 86 L66 42" class="e thick"></path>' +
        '<path d="M70 58 Q62 50 66 44" class="ef"></path>' +
        '<path d="M70 56 L88 52 L93 60 L75 65 Z" class="pf"></path>' +
        '<circle cx="74" cy="59" r="1.6" class="dk"></circle><path d="M79 58 H88 M80 61 H86" class="ef"></path>'
    },
    u08: {
      label: "Engraving of barrels and a grain sack",
      svg: '<path d="M6 88 H94" class="e"></path>' +
        '<path d="M44 46 Q40 67 44 88 H68 Q72 67 68 46 Z" class="cf"></path>' +
        '<ellipse cx="56" cy="46" rx="12" ry="3.5" class="pf"></ellipse>' +
        '<path d="M16 46 Q12 67 16 88 H40 Q44 67 40 46 Z" class="hf"></path>' +
        '<ellipse cx="28" cy="46" rx="12" ry="3.5" class="pf"></ellipse>' +
        '<path d="M15 54 H41 M14 67 H42 M15 80 H41" class="e"></path>' +
        '<path d="M76 88 Q70 70 78 58 Q83 52 88 58 Q96 70 92 88 Z" class="hf"></path>' +
        '<path d="M80 58 L83 51 L86 58" class="e"></path>'
    },
    u09: {
      label: "Engraving of meshing gears on a stand",
      svg: '<path d="M8 90 H92" class="e"></path>' +
        '<path d="M28 90 L40 54 L52 90" class="e thick"></path>' +
        '<circle cx="40" cy="52" r="27" class="teeth"></circle>' +
        '<circle cx="40" cy="52" r="24" class="hf"></circle>' +
        '<circle cx="40" cy="52" r="14" class="pf"></circle>' +
        '<path d="M40 38 V66 M26 52 H54 M30 42 L50 62 M50 42 L30 62" class="ef"></path>' +
        '<circle cx="40" cy="52" r="4" class="cf"></circle>' +
        '<circle cx="78" cy="28" r="13" class="teeth teeth-s"></circle>' +
        '<circle cx="78" cy="28" r="11" class="hf"></circle>' +
        '<circle cx="78" cy="28" r="5" class="pf"></circle><circle cx="78" cy="28" r="2" class="dk"></circle>'
    },
    u10: {
      label: "Engraving of a pay envelope and stacks of coins",
      svg: '<path d="M12 58 L42 50 L58 72 L28 82 Z" class="pf"></path>' +
        '<path d="M12 58 L36 66 L42 50 M36 66 L28 82" class="ef"></path>' +
        '<circle cx="36" cy="66" r="4" class="cf"></circle>' +
        '<path d="M58 80 V58 A16 5 0 0 1 90 58 V80 A16 5 0 0 1 58 80 Z" class="hf"></path>' +
        '<ellipse cx="74" cy="58" rx="16" ry="5" class="pf"></ellipse>' +
        '<ellipse cx="74" cy="58" rx="11" ry="3" class="ef"></ellipse>' +
        '<path d="M58 66 A16 5 0 0 0 90 66 M58 73 A16 5 0 0 0 90 73" class="ef"></path>' +
        '<path d="M66 50 V30 A12 4 0 0 1 90 30 V48" class="hf"></path>' +
        '<ellipse cx="78" cy="30" rx="12" ry="4" class="pf"></ellipse>' +
        '<path d="M66 37 A12 4 0 0 0 90 37 M66 44 A12 4 0 0 0 90 44" class="ef"></path>'
    },
    u11: {
      label: "Engraving of a columned exchange building",
      svg: '<path d="M50 12 L92 32 H8 Z" class="pf"></path>' +
        '<path d="M50 18 L80 30 H20 Z" class="hf"></path>' +
        '<rect x="10" y="32" width="80" height="7" class="cf"></rect>' +
        '<rect x="15" y="39" width="8" height="40" class="pf"></rect><rect x="33" y="39" width="8" height="40" class="pf"></rect>' +
        '<rect x="59" y="39" width="8" height="40" class="pf"></rect><rect x="77" y="39" width="8" height="40" class="pf"></rect>' +
        '<path d="M18 41 V77 M20 41 V77 M36 41 V77 M38 41 V77 M62 41 V77 M64 41 V77 M80 41 V77 M82 41 V77" class="ef"></path>' +
        '<path d="M43 79 V54 Q50 46 57 54 V79 Z" class="hf"></path>' +
        '<rect x="8" y="79" width="84" height="4" class="pf"></rect><rect x="4" y="83" width="92" height="4" class="pf"></rect><rect x="0" y="87" width="100" height="5" class="cf"></rect>'
    },
    u12: {
      label: "Engraving of a pocket watch",
      svg: '<path d="M50 10 Q34 6 24 16 Q16 24 20 34" class="ef"></path>' +
        '<circle cx="50" cy="14" r="4.5" class="e"></circle>' +
        '<rect x="45" y="18" width="10" height="7" rx="1.5" class="cf"></rect>' +
        '<circle cx="50" cy="57" r="32" class="hf"></circle>' +
        '<circle cx="50" cy="57" r="26" class="pf"></circle>' +
        '<path d="M50 33 V38 M50 76 V81 M26 57 H31 M69 57 H74 M33 40 L36 43 M67 40 L64 43 M33 74 L36 71 M67 74 L64 71" class="ef"></path>' +
        '<path d="M50 57 V39 M50 57 L63 64" class="e thick"></path>' +
        '<circle cx="50" cy="57" r="2.5" class="dk"></circle>'
    },
    u13: {
      label: "Engraving of a padlock and key",
      svg: '<path d="M32 46 V32 A16 16 0 0 1 64 32 V46" class="e thick"></path>' +
        '<rect x="22" y="46" width="52" height="40" rx="4" class="hf"></rect>' +
        '<rect x="22" y="46" width="52" height="7" class="cf"></rect>' +
        '<circle cx="48" cy="64" r="5" class="dk"></circle><path d="M46 66 L44 77 H52 L50 66 Z" class="dk"></path>' +
        '<circle cx="86" cy="30" r="7" class="pf"></circle><circle cx="86" cy="30" r="2.5" class="pf"></circle>' +
        '<path d="M86 37 V76" class="e thick"></path>' +
        '<path d="M86 66 H92 M86 72 H90" class="e"></path>'
    },
    u14: {
      label: "Engraving of a magnifying glass over a chart",
      svg: '<rect x="10" y="18" width="62" height="70" class="pf"></rect>' +
        '<path d="M10 34 H72 M10 50 H72 M10 66 H72 M26 18 V88 M42 18 V88 M58 18 V88" class="ef"></path>' +
        '<path d="M14 80 L26 66 L36 70 L48 52 L60 46" class="e thick"></path>' +
        '<circle cx="62" cy="44" r="18" class="lens"></circle>' +
        '<path d="M50 38 A13 13 0 0 1 58 31" class="ef"></path>' +
        '<path d="M74 58 L78 54 L94 70 L90 74 Z" class="cf"></path>'
    },
    u15: {
      label: "Engraving of a timber derrick lifting a beam",
      svg: '<path d="M8 86 H92" class="e"></path>' +
        '<path d="M22 86 L40 14 L58 86" class="e"></path>' +
        '<path d="M27 66 L53 66 M32 46 L48 46 M27 66 L48 46 M53 66 L32 46 M36 28 L44 28" class="ef"></path>' +
        '<path d="M40 14 L84 30" class="e thick"></path>' +
        '<path d="M40 22 L84 30" class="ef"></path>' +
        '<circle cx="84" cy="30" r="3" class="pf"></circle>' +
        '<path d="M84 33 V58" class="ef"></path>' +
        '<rect x="68" y="58" width="30" height="7" class="cf"></rect>' +
        '<path d="M58 86 V76 H90 V86 Z" class="hf"></path>'
    }
  };

  /* Plate numbers read like an old manual's: Plate I, Plate II… */
  L.roman = function (n) {
    var out = "", map = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
    map.forEach(function (m) { while (n >= m[0]) { out += m[1]; n -= m[0]; } });
    return out;
  };
})(window.LEDGER);
