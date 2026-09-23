/* @ds-bundle: {"format":4,"namespace":"StudioBrowneDesignSystem_6dac50","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"LogoLoader","sourcePath":"components/brand/LogoLoader.jsx"},{"name":"Polaroid","sourcePath":"components/content/Polaroid.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/editorial/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/editorial/Eyebrow.jsx"},{"name":"PullQuote","sourcePath":"components/editorial/PullQuote.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Tag","sourcePath":"components/forms/Tag.jsx"},{"name":"CornerFrame","sourcePath":"components/layout/CornerFrame.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"f3e3a031e223","components/brand/LogoLoader.jsx":"d506b8fa486e","components/brand/tweaks-panel.jsx":"4f181eb354cd","components/content/Polaroid.jsx":"c4c7236ac38e","components/content/ProjectCard.jsx":"68f577548331","components/core/Button.jsx":"268cea12a6ed","components/editorial/Divider.jsx":"4bed933042fb","components/editorial/Eyebrow.jsx":"1adb87dd5fb4","components/editorial/PullQuote.jsx":"e8dfac621c95","components/forms/Input.jsx":"c1237e3e85d9","components/forms/Tag.jsx":"7bcd1453e0d2","components/layout/CornerFrame.jsx":"fed40033823c","ui_kits/website-fresh/Contact.jsx":"fc44c7d2a0c1","ui_kits/website-fresh/Data.jsx":"7ad8a32ec05a","ui_kits/website-fresh/Home.jsx":"38481d328bd5","ui_kits/website-fresh/Icons.jsx":"483a496e39ba","ui_kits/website-fresh/Intro.jsx":"243e386bae57","ui_kits/website-fresh/Panels.jsx":"2d959e507142","ui_kits/website-fresh/Project.jsx":"cea2cdd28117","ui_kits/website-fresh/Studio.jsx":"6d4042ff3463","ui_kits/website-fresh/Work.jsx":"5aead6ea5d27","ui_kits/website-fresh/image-slot.js":"36d0a5575b41"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StudioBrowneDesignSystem_6dac50 = window.StudioBrowneDesignSystem_6dac50 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio Browne — Logo / wordmark.
 * The brand mark is a hand-drawn brushstroke SB monogram (a real asset).
 * Because the bundle is consumed from many paths, pass `markSrc` with the
 * correct relative URL to the mark PNG. Without it, only the wordmark shows.
 */
function Logo({
  variant = "lockup",
  // "lockup" | "mark" | "wordmark"
  tone = "ink",
  // "ink" | "light"
  markSrc,
  size = 40,
  style = {},
  ...rest
}) {
  const color = tone === "light" ? "var(--text-on-dark)" : "var(--text-primary)";
  const mark = markSrc ? /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "Studio Browne",
    style: {
      height: size,
      width: "auto",
      display: "block"
    }
  }) : null;
  const wordmark = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      lineHeight: 0.9,
      fontSize: size * 0.5,
      color,
      display: "inline-flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Studio"), /*#__PURE__*/React.createElement("span", null, "Browne"));
  if (variant === "mark") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-flex",
        ...style
      }
    }, rest), mark);
  }
  if (variant === "wordmark") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        fontFamily: "var(--font-display)",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        fontSize: size * 0.6,
        color,
        ...style
      }
    }, rest), "Studio Browne");
  }
  // lockup
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.7em",
      ...style
    }
  }, rest), mark, wordmark);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/LogoLoader.jsx
try { (() => {
/**
 * Studio Browne — logo loading overlay.
 * Self-driving (no scrubber): draws the brushstroke SB mark on
 * (S flick → ring → stem → bowl, ~3s), settles, then fades itself away
 * and unmounts (~4s total). Mounts fixed inset-0, z-index 9999,
 * pointer-events none.
 * Like Logo's markSrc, pass `logoSrc` with the correct relative URL to
 * assets/logo-mark.png from the consuming page.
 */

const LOGO_W = 1663,
  LOGO_H = 1330;
const LOGO_SRC = "assets/logo-mark.png"; // override per-site via props.logoSrc

// Auto-fitted pen paths (x, y, local brush width), drawn as one continuous stroke: S flick → ring → bowl → stem, strictly one at a time.
const PATHS = [{
  start: 0.15,
  end: 0.62,
  pts: [[333, 296, 104], [353, 284, 108], [383, 265, 115], [432, 239, 130], [472, 221, 139], [516, 204, 145], [562, 188, 153], [609, 173, 163], [657, 160, 171], [701, 149, 181], [746, 138, 104], [795, 125, 92], [845, 112, 110], [892, 101, 108], [951, 94, 107], [1003, 96, 105], [1049, 102, 99], [1073, 107, 126], [1063, 132, 116], [1014, 180, 108], [969, 188, 110], [916, 185, 107], [863, 182, 108], [810, 180, 111], [754, 181, 119], [700, 200, 168], [644, 241, 128], [633, 248, 128]]
}, {
  start: 0.62,
  end: 2.0,
  pts: [[654, 264, 92], [708, 260, 108], [758, 253, 130], [820, 236, 132], [878, 229, 108], [937, 225, 109], [1000, 226, 110], [1061, 239, 116], [1117, 263, 118], [1172, 294, 116], [1222, 329, 131], [1267, 366, 152], [1305, 407, 163], [1339, 452, 168], [1368, 502, 176], [1391, 553, 184], [1408, 604, 180], [1420, 655, 171], [1426, 707, 169], [1429, 759, 166], [1427, 810, 165], [1422, 861, 162], [1411, 910, 163], [1395, 959, 161], [1372, 1008, 162], [1344, 1054, 169], [1309, 1098, 176], [1268, 1134, 173], [1220, 1166, 154], [1167, 1195, 142], [1114, 1220, 132], [1057, 1244, 113], [994, 1266, 100], [930, 1278, 96], [862, 1282, 89], [790, 1282, 88], [721, 1277, 88], [658, 1266, 93], [597, 1250, 94], [532, 1225, 98], [478, 1196, 111], [433, 1165, 109], [386, 1121, 107], [349, 1071, 109], [319, 1025, 110], [292, 976, 107], [271, 920, 104], [263, 864, 107], [259, 809, 105], [261, 752, 103], [269, 696, 104], [280, 643, 102], [297, 593, 102], [317, 547, 102], [341, 506, 103], [368, 468, 101], [397, 435, 100], [439, 398, 101], [481, 367, 104], [521, 341, 105], [568, 307, 105], [611, 290, 136], [644, 282, 124], [687, 278, 114], [744, 280, 111], [797, 293, 116], [840, 310, 185], [877, 325, 190], [917, 345, 190], [941, 364, 190], [951, 387, 190], [939, 427, 92], [899, 433, 108], [842, 429, 102], [781, 429, 98], [734, 433, 173], [723, 432, 173]]
}, {
  start: 2.72,
  end: 3.05,
  pts: [[565, 459, 148], [564, 488, 151], [554, 532, 162], [546, 574, 164], [540, 620, 165], [532, 667, 167], [524, 716, 168], [513, 767, 170], [494, 819, 150], [461, 872, 129], [429, 917, 157], [418, 945, 157]]
}, {
  start: 2.0,
  end: 2.72,
  pts: [[951, 421, 145], [1005, 475, 113], [1055, 506, 136], [1092, 529, 160], [1126, 559, 180], [1156, 600, 190], [1181, 639, 190], [1202, 681, 190], [1220, 734, 167], [1224, 794, 171], [1212, 848, 174], [1192, 900, 168], [1162, 951, 161], [1123, 1000, 150], [1072, 1045, 132], [1015, 1081, 118], [953, 1104, 105], [884, 1117, 93], [820, 1120, 92], [758, 1117, 92], [698, 1109, 96], [644, 1098, 101], [594, 1084, 104], [550, 1068, 105], [496, 1043, 105], [439, 976, 142], [430, 952, 160]]
}];
// One pen, one stroke, per the user's annotated sketch: the S begins at the TOP-RIGHT
// tip — outer sweep drawn tip→tail, then the hairpin's return line re-enters at the
// already-inked tip and runs to center (new ink always adjacent to existing ink),
// handing off to the ring 26px away. Ends with the stem drawn bottom-up, finishing
// top-center where the user marked ENDS HERE.
PATHS.push({
  start: 0,
  end: 0,
  noErase: true,
  pts: PATHS[0].pts.slice(18)
}); // return line: tip→center — exempt from the spillover erase (it overlaps the outer sweep's ink; erasing it bites the drawn S)
PATHS[0] = {
  ...PATHS[0],
  pts: PATHS[0].pts.slice(0, 18).reverse()
}; // outer sweep: tip→tail
PATHS[2].pts.reverse(); // stem drawn bottom→top so the pen finishes center
const FLAT = PATHS.map(p => {
  const cum = [0];
  for (let i = 1; i < p.pts.length; i++) {
    cum.push(cum[i - 1] + Math.hypot(p.pts[i][0] - p.pts[i - 1][0], p.pts[i][1] - p.pts[i - 1][1]));
  }
  return {
    ...p,
    cum,
    total: cum[cum.length - 1]
  };
});
const STROKE_ORDER = [0, 4, 1, 3, 2];
let _off = 0;
for (const i of STROKE_ORDER) {
  FLAT[i].offset = _off;
  _off += FLAT[i].total;
}
const STROKE_TOTAL = _off;
const DRAW_T0 = 0.15,
  DRAW_T1 = 3.05;
const GROUNDS = {
  transparent: {
    bg: "transparent",
    ink: "#3A2D22"
  },
  sand: {
    bg: "#CDC0A7",
    ink: "#3A2D22"
  },
  espresso: {
    bg: "#3A2D22",
    ink: "#CDC0A7"
  },
  camel: {
    bg: "#B59E7D",
    ink: "#3A2D22"
  }
};
const easeInOutCubic = x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
const easeOutCubic = x => 1 - Math.pow(1 - x, 3);
const clamp01 = v => Math.min(1, Math.max(0, v));
function at(p, d) {
  let i = 0;
  while (i < p.cum.length - 2 && p.cum[i + 1] < d) i++;
  const seg = p.cum[i + 1] - p.cum[i] || 1;
  const f = clamp01((d - p.cum[i]) / seg);
  const a = p.pts[i],
    b = p.pts[i + 1];
  return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
}
function drawFrame(ctx, s, t, ink) {
  const tc = s.tint.getContext("2d");
  tc.globalCompositeOperation = "source-over";
  tc.clearRect(0, 0, LOGO_W, LOGO_H);
  tc.drawImage(s.img, 0, 0);
  tc.globalCompositeOperation = "source-in";
  tc.fillStyle = ink;
  tc.fillRect(0, 0, LOGO_W, LOGO_H);
  const mc = s.mask.getContext("2d");
  mc.clearRect(0, 0, LOGO_W, LOGO_H);
  mc.strokeStyle = "#fff";
  mc.fillStyle = "#fff";
  mc.lineCap = "round";
  mc.lineJoin = "round";
  mc.globalAlpha = 1;
  const gd = easeInOutCubic(clamp01((t - DRAW_T0) / (DRAW_T1 - DRAW_T0))) * STROKE_TOTAL;
  for (const p of FLAT) {
    const dist = Math.min(Math.max(gd - p.offset, 0), p.total);
    if (dist <= 0) continue;
    const step = 22;
    let prev = at(p, 0);
    for (let d = step; d <= dist + step; d += step) {
      const cur = at(p, Math.min(d, dist));
      mc.lineWidth = (prev[2] + cur[2]) / 2;
      mc.beginPath();
      mc.moveTo(prev[0], prev[1]);
      mc.lineTo(cur[0], cur[1]);
      mc.stroke();
      prev = cur;
      if (d >= dist) break;
    }
  }
  // Spillover guard: erase the not-yet-drawn core of every path each frame so a
  // fat stroke sweeping past (the S flick over the B's top) can't reveal a
  // neighboring glyph early. Erase starts 1.5 brush-widths ahead of the pen tip
  // so the freshly drawn round cap stays intact.
  mc.globalCompositeOperation = 'destination-out';
  for (const p of FLAT) {
    if (p.noErase) continue;
    const dist = Math.min(Math.max(gd - p.offset, 0), p.total);
    if (dist >= p.total) continue;
    // Nearly finished: stop erasing this path — a shrinking erase segment at the
    // pen tip renders as a round hole that pops away (end-of-animation stutter).
    if (dist > 0 && p.total - dist < at(p, dist)[2] * 3) continue;
    const step = 22;
    const d0 = dist > 0 ? Math.min(dist + at(p, dist)[2] * 1.5, p.total) : 0;
    let prev = at(p, d0);
    for (let d = d0 + step; d <= p.total + step; d += step) {
      const cur = at(p, Math.min(d, p.total));
      // 0.85×: erase the neighbor's core without shaving edges of drawn ink it touches.
      mc.lineWidth = (prev[2] + cur[2]) / 2 * 0.85;
      mc.beginPath();
      mc.moveTo(prev[0], prev[1]);
      mc.lineTo(cur[0], cur[1]);
      mc.stroke();
      prev = cur;
      if (d >= p.total) break;
    }
  }
  mc.globalCompositeOperation = 'source-over';
  const fillA = clamp01((t - 3.05) / 0.2);
  if (fillA > 0) {
    mc.globalAlpha = fillA;
    mc.fillRect(0, 0, LOGO_W, LOGO_H);
    mc.globalAlpha = 1;
  }
  ctx.clearRect(0, 0, LOGO_W, LOGO_H);
  ctx.drawImage(s.tint, 0, 0);
  ctx.globalCompositeOperation = "destination-in";
  ctx.drawImage(s.mask, 0, 0);
  ctx.globalCompositeOperation = "source-over";
}
function LogoLoader(props) {
  const ground = GROUNDS[props.background] || GROUNDS.transparent;
  const ink = props.ink || ground.ink;
  const canvasRef = React.useRef(null);
  const rootRef = React.useRef(null);
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    let raf,
      start = null,
      cancelled = false;
    const s = {};
    const img = new Image();
    img.onload = () => {
      if (cancelled) return;
      const mk = () => {
        const c = document.createElement("canvas");
        c.width = LOGO_W;
        c.height = LOGO_H;
        return c;
      };
      s.img = img;
      s.tint = mk();
      s.mask = mk();
      const ctx = canvasRef.current.getContext("2d");
      const tick = now => {
        if (cancelled) return;
        if (start === null) start = now;
        const t = (now - start) / 1000;
        drawFrame(ctx, s, Math.min(t, 3.4), ink);
        const root = rootRef.current;
        if (root) {
          const settle = easeOutCubic(clamp01((t - 3.0) / 0.55));
          const fade = 1 - clamp01((t - 3.55) / 0.45);
          root.style.opacity = fade;
          canvasRef.current.style.transform = `scale(${1.025 - 0.025 * settle})`;
        }
        if (t < 4.0) raf = requestAnimationFrame(tick);else setDone(true);
      };
      raf = requestAnimationFrame(tick);
    };
    img.src = props.logoSrc || LOGO_SRC;
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [ink, props.background]);
  if (done) return null;
  return React.createElement("div", {
    ref: rootRef,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: ground.bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none"
    }
  }, React.createElement("canvas", {
    ref: canvasRef,
    width: LOGO_W,
    height: LOGO_H,
    style: {
      width: "min(23vw, 29vh)",
      height: "auto",
      aspectRatio: "1663 / 1330"
    }
  }));
}
Object.assign(__ds_scope, { LogoLoader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoLoader.jsx", error: String((e && e.message) || e) }); }

// components/brand/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// components/content/Polaroid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio Browne — Polaroid.
 * An instant-film image frame: thick white border, deeper bottom lip,
 * soft warm shadow, optional slight tilt and caption. The studio's way
 * of presenting a single photograph.
 */
function Polaroid({
  image,
  slotId,
  caption,
  ratio = "1 / 1",
  tilt = 0,
  width,
  bare = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      background: bare ? "transparent" : "#FBFAF6",
      padding: bare ? 0 : "14px 14px 0",
      boxShadow: bare ? "none" : "var(--shadow-lg)",
      transform: tilt ? `rotate(${tilt}deg)` : "none",
      width: width || "auto",
      display: "inline-block",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      overflow: "hidden",
      background: "var(--surface-inset)",
      borderRadius: bare ? "var(--radius-md)" : 0
    }
  }, slotId && typeof customElements !== "undefined" && customElements.get("image-slot") ? /*#__PURE__*/React.createElement("image-slot", {
    id: slotId,
    src: image,
    shape: "rect",
    placeholder: "Drop a photo"
  }) : /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: caption || "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "var(--img-filter)",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.7rem",
      fontWeight: 500,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: bare ? "var(--text-muted)" : "var(--sb-ink)",
      textAlign: "center",
      padding: bare ? "0.9rem 6px 0" : "18px 6px 20px",
      minHeight: caption ? "auto" : bare ? 0 : "2.6rem"
    }
  }, caption));
}
Object.assign(__ds_scope, { Polaroid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Polaroid.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio Browne — ProjectCard.
 * The portfolio unit: a full-bleed interior image with an editorial
 * caption beneath. Optionally an arched image top (the SB motif).
 * Hover slowly warms and lifts the image.
 */
function ProjectCard({
  image,
  title,
  location,
  category,
  arch = false,
  ratio = "3 / 4",
  href = "#",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      textDecoration: "none",
      color: "inherit",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      aspectRatio: ratio,
      borderRadius: arch ? "var(--radius-arch)" : "var(--radius-md)",
      background: "var(--surface-inset)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "var(--img-filter)",
      transform: hover ? "scale(1.04)" : "scale(1)",
      transition: "transform var(--dur-slow) var(--ease-soft)",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "1.1rem"
    }
  }, category && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-label)",
      fontWeight: 500,
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--accent)",
      marginBottom: "0.5rem"
    }
  }, category), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "1.6rem",
      lineHeight: 1.15,
      margin: 0,
      color: "var(--text-primary)"
    }
  }, title), location && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-small)",
      color: "var(--text-muted)",
      marginTop: "0.35rem"
    }
  }, location)));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio Browne — Button
 * Quiet, architectural. Wide letter-spaced caps, hairline borders,
 * near-square corners. No loud fills except the clay primary.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  disabled = false,
  style = {},
  ...rest
}) {
  const base = {
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.6em",
    cursor: disabled ? "not-allowed" : "pointer",
    borderRadius: "var(--radius-sm)",
    border: "1px solid transparent",
    transition: "background var(--dur-fast) var(--ease-soft), color var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft), opacity var(--dur-fast)",
    textDecoration: "none",
    opacity: disabled ? 0.45 : 1,
    whiteSpace: "nowrap"
  };
  const sizes = {
    sm: {
      fontSize: "0.6875rem",
      padding: "0.6rem 1.1rem"
    },
    md: {
      fontSize: "0.75rem",
      padding: "0.9rem 1.6rem"
    },
    lg: {
      fontSize: "0.8125rem",
      padding: "1.15rem 2.2rem"
    }
  };
  const variants = {
    primary: {
      background: "var(--sb-ink)",
      color: "var(--text-on-dark)",
      borderColor: "var(--sb-ink)"
    },
    clay: {
      background: "var(--accent)",
      color: "var(--sb-paper)",
      borderColor: "var(--accent)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-primary)",
      borderColor: "var(--line-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      borderColor: "transparent",
      paddingLeft: 0,
      paddingRight: 0
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: as === "button" ? disabled : undefined,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio Browne — Divider.
 * A hairline rule. Optional centered brushstroke-dot marker for
 * section breaks. Warm line color, never cool grey.
 */
function Divider({
  tone = "ink",
  marker = false,
  style = {},
  ...rest
}) {
  const color = tone === "light" ? "var(--line-on-dark)" : "var(--line)";
  if (marker) {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "separator",
      style: {
        display: "flex",
        alignItems: "center",
        gap: "1.2rem",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "var(--accent)",
        flex: "0 0 auto"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: color
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      height: 1,
      background: color,
      margin: 0,
      width: "100%",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Divider.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio Browne — Eyebrow.
 * The wide letter-spaced caps label that sits above headlines and
 * marks sections. Optionally prefixed with a hairline rule.
 */
function Eyebrow({
  children,
  rule = false,
  tone = "muted",
  style = {},
  ...rest
}) {
  const colors = {
    muted: "var(--text-muted)",
    clay: "var(--accent)",
    ink: "var(--text-primary)",
    light: "var(--text-on-dark-dim)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-label)",
      fontWeight: 500,
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: colors[tone],
      display: "inline-flex",
      alignItems: "center",
      gap: "0.9em",
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: "2.4em",
      height: 1,
      background: "currentColor",
      opacity: 0.6
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/editorial/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio Browne — PullQuote.
 * Large, light Cormorant serif with an italic voice — used for
 * client words and studio philosophy.
 */
function PullQuote({
  children,
  cite,
  tone = "ink",
  align = "left",
  style = {},
  ...rest
}) {
  const isDark = tone === "light";
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      maxWidth: "24ch",
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontWeight: 300,
      fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
      lineHeight: 1.22,
      letterSpacing: "-0.005em",
      color: isDark ? "var(--text-on-dark)" : "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--accent)"
    }
  }, "\u201C"), children, /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--accent)"
    }
  }, "\u201D")), cite && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "1.2rem",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: isDark ? "var(--text-on-dark-dim)" : "var(--text-muted)"
    }
  }, cite));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio Browne — Input.
 * Understated: no box, just a bottom hairline that deepens on focus.
 * Label is a caps eyebrow. For text, email, tel.
 */
function Input({
  label,
  hint,
  tone = "ink",
  style = {},
  id,
  ...rest
}) {
  const isDark = tone === "light";
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-label)",
      fontWeight: 500,
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: isDark ? "var(--text-on-dark-dim)" : "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "1.35rem",
      fontWeight: 400,
      color: isDark ? "var(--text-on-dark)" : "var(--text-primary)",
      background: "transparent",
      border: 0,
      borderBottom: `1px solid ${isDark ? "var(--line-on-dark)" : "var(--line-strong)"}`,
      padding: "0.5rem 0",
      outline: "none",
      transition: "border-color var(--dur-fast) var(--ease-soft)"
    },
    onFocus: e => e.target.style.borderBottomColor = "var(--accent)",
    onBlur: e => e.target.style.borderBottomColor = isDark ? "var(--line-on-dark)" : "var(--line-strong)"
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-small)",
      color: isDark ? "var(--text-on-dark-dim)" : "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio Browne — Tag.
 * Small caps pill or bare label used for project categories,
 * services and filters. Selectable variant for filter rows.
 */
function Tag({
  children,
  selected = false,
  variant = "pill",
  tone = "ink",
  style = {},
  ...rest
}) {
  const isDark = tone === "light";
  const base = {
    fontFamily: "var(--font-sans)",
    fontSize: "var(--fs-label)",
    fontWeight: 500,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    display: "inline-flex",
    alignItems: "center",
    cursor: rest.onClick ? "pointer" : "default",
    transition: "all var(--dur-fast) var(--ease-soft)",
    whiteSpace: "nowrap"
  };
  const pill = {
    padding: "0.5rem 0.95rem",
    borderRadius: "var(--radius-pill)",
    border: `1px solid ${selected ? "var(--sb-ink)" : isDark ? "var(--line-on-dark)" : "var(--line-strong)"}`,
    background: selected ? "var(--sb-ink)" : "transparent",
    color: selected ? "var(--text-on-dark)" : isDark ? "var(--text-on-dark-dim)" : "var(--text-secondary)"
  };
  const bare = {
    color: isDark ? "var(--text-on-dark-dim)" : "var(--text-muted)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...(variant === "pill" ? pill : bare),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Tag.jsx", error: String((e && e.message) || e) }); }

// components/layout/CornerFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio Browne — CornerFrame.
 * The studio's signature page shell: large serif brand letters pinned to the
 * viewport corners (S / B + the brushstroke mark), with vertical STUDIO / WORK
 * labels as the only navigation. Content scrolls in the center; the frame stays.
 */
function CornerFrame({
  tl = "S",
  tr = "B",
  brLabel = "BEVERLY HILLS",
  markSrc,
  leftLabel = "STUDIO",
  rightLabel = "WORK",
  tone = "ink",
  // "ink" (oxblood) | "light" (porcelain, over dark)
  hideBottom = false,
  // when true, omit the fixed bottom-center mark (e.g. so it can scroll with a hero)
  onHome,
  onLeft,
  onRight,
  pad = 40,
  children,
  style = {},
  ...rest
}) {
  // Responsive: tighten the corner insets and glyph sizes on small screens.
  const [mobile, setMobile] = React.useState(typeof window !== "undefined" ? window.innerWidth <= 640 : false);
  React.useEffect(() => {
    const onResize = () => setMobile(window.innerWidth <= 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const p = mobile ? 16 : pad;

  // Fade the frame out while actively scrolling; fade back in when scrolling stops.
  const [hidden, setHidden] = React.useState(false);
  React.useEffect(() => {
    let t;
    const onScroll = () => {
      setHidden(true);
      clearTimeout(t);
      t = setTimeout(() => setHidden(false), 550);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);
  const fade = {
    opacity: hidden ? 0 : 1
  };
  // Quick, soft fade-out; slower, graceful fade-in.
  const fadeTrans = `opacity ${hidden ? "420ms" : "820ms"} var(--ease-soft)`;

  // Both branches honour --sb-corner-ink for the colour and --sb-corner-ease for the
  // ramp, so a page driving a live tint can match its own transition timing. Each glyph
  // also reads its own slot var first (--sb-corner-ink-tl / -tr / -left / -right), since
  // on a scrolling page the four glyphs can sit over different panels at the same moment.
  const color = tone === "light" ? "var(--sb-corner-ink, var(--text-on-dark))" : "var(--sb-corner-ink, var(--sb-camel))";
  const slot = n => ({
    color: `var(--sb-corner-ink-${n}, ${color})`
  });
  // Soft shadow keeps glyphs legible over imagery (esp. light corner labels on a bright hero).
  const glow = tone === "light" ? "0 1px 14px rgba(0,0,0,0.55), 0 0 2px rgba(0,0,0,0.35)" : "none";
  const letter = {
    position: "fixed",
    zIndex: 50,
    fontFamily: "var(--font-title)",
    fontWeight: 400,
    fontSize: mobile ? "1.9rem" : "clamp(2.25rem, 3.6vw, 3.75rem)",
    lineHeight: 1,
    color,
    pointerEvents: "none",
    textShadow: glow,
    transition: `color var(--sb-corner-ease, 6s) var(--ease-soft), ${fadeTrans}`
  };
  const side = {
    position: "fixed",
    zIndex: 50,
    top: "50%",
    writingMode: "vertical-rl",
    fontFamily: "var(--font-sans)",
    fontSize: mobile ? "0.74rem" : "0.88rem",
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color,
    cursor: "pointer",
    textShadow: glow,
    transition: `color var(--sb-corner-ease, 6s) var(--ease-soft), ${fadeTrans}`,
    padding: "0.5rem 0.3rem"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: onHome,
    title: onHome ? "Home" : undefined,
    style: {
      ...letter,
      ...fade,
      ...slot("tl"),
      top: p,
      left: p,
      pointerEvents: onHome ? "auto" : "none",
      cursor: onHome ? "pointer" : "default"
    }
  }, tl), /*#__PURE__*/React.createElement("span", {
    style: {
      ...letter,
      ...fade,
      ...slot("tr"),
      top: p,
      right: p
    }
  }, tr), !hideBottom && /*#__PURE__*/React.createElement("span", {
    onClick: onHome,
    style: {
      position: "fixed",
      zIndex: 50,
      bottom: p,
      left: "50%",
      transform: "translateX(-50%)",
      cursor: onHome ? "pointer" : "default",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
      textAlign: "center",
      ...fade,
      transition: fadeTrans
    }
  }, markSrc && /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "Studio Browne",
    style: {
      height: mobile ? 34 : "clamp(38px,4vw,58px)",
      width: "auto",
      display: "block",
      filter: tone === "light" ? "drop-shadow(0 1px 10px rgba(0,0,0,0.5))" : "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: mobile ? "0.55rem" : "0.62rem",
      fontWeight: 500,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color,
      textShadow: glow,
      lineHeight: 1
    }
  }, brLabel)), /*#__PURE__*/React.createElement("span", {
    style: {
      ...side,
      ...fade,
      ...slot("left"),
      left: p - 6,
      transform: "translateY(-50%)"
    },
    onClick: onLeft
  }, leftLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      ...side,
      ...fade,
      ...slot("right"),
      right: p - 6,
      transform: "translateY(-50%) rotate(180deg)"
    },
    onClick: onRight
  }, rightLabel), children);
}
Object.assign(__ds_scope, { CornerFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/CornerFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-fresh/Contact.jsx
try { (() => {
/* Studio Browne — Contact panel (periwinkle) + Contact route with inquiry form. */
const SBcontactDS = window.StudioBrowneDesignSystem_6dac50;
function SBContactPanel({
  onNavigate
}) {
  const {
    Input,
    Button
  } = SBcontactDS;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(window.SBPanel, {
    bg: "camel",
    minh: "auto",
    pad: "clamp(3rem,6vw,4.5rem) clamp(1.5rem,6vw,4rem)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "1.6rem",
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.SB_ASSET + "/logo-mark.png",
    alt: "Studio Browne",
    style: {
      height: 72,
      width: "auto",
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.88rem",
      lineHeight: 1.6,
      color: "var(--text-primary)",
      margin: "0.4rem 0 0",
      maxWidth: "34ch"
    }
  }, "Rooted in warm, material-led design, Studio Browne creates considered homes for clients from Los Angeles to Hawaii."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.8rem",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-primary)",
      lineHeight: 2
    }
  }, "Studio Browne \xB7 Beverly Hills, CA", /*#__PURE__*/React.createElement("br", null), "matt@studio-browne.com", /*#__PURE__*/React.createElement("br", null), "310.486.2867"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "1.15rem",
      color: "var(--text-primary)",
      marginTop: "1rem"
    }
  }, "Thank you \u2014 we'll be in touch.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
      marginTop: "1.4rem",
      width: "min(360px, 80vw)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.72rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--text-primary)"
    }
  }, "Sign up to our studio newsletter"), /*#__PURE__*/React.createElement("input", {
    placeholder: "YOUR EMAIL ADDRESS",
    required: true,
    style: {
      width: "100%",
      textAlign: "center",
      background: "transparent",
      border: 0,
      borderBottom: "1px solid rgba(58,45,34,0.45)",
      padding: "0.5rem 0",
      fontFamily: "var(--font-sans)",
      fontSize: "0.8rem",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-primary)",
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      background: "none",
      border: 0,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--text-primary)"
    }
  }, "Submit"))));
}

/* Full inquiry route — greige panel with the understated underline form. */
function SBContact() {
  const {
    Input,
    Button
  } = SBcontactDS;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.SBPanel, {
    bg: "greige",
    minh: "100vh"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "min(520px, 84vw)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.72rem",
      fontWeight: 500,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--text-primary)",
      marginBottom: "1.4rem"
    }
  }, "Inquire"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 400,
      fontSize: "clamp(1.6rem,3.2vw,2.5rem)",
      margin: "0 0 0.8rem",
      color: "var(--text-primary)"
    }
  }, "Let's begin your home."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.9rem",
      lineHeight: 1.6,
      color: "var(--text-secondary)",
      margin: "0 auto 2.6rem",
      maxWidth: "44ch"
    }
  }, "Tell us a little about your project. We take on a small number of full-service commissions each year."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "1.2rem",
      color: "var(--text-primary)"
    }
  }, "Thank you \u2014 your note is on its way.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.8rem",
      textAlign: "left",
      maxWidth: 440,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jane Appleseed",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "jane@email.com",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Project location",
    placeholder: "Beverly Hills, CA"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tell us about the project",
    placeholder: "A 1920s Spanish Colonial rebuild\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.6rem"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    as: "button",
    type: "submit"
  }, "Send inquiry"))))));
}
Object.assign(window, {
  SBContactPanel,
  SBContact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-fresh/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-fresh/Data.jsx
try { (() => {
/* Studio Browne — sample content for the website UI kit (fictional projects). */
const ASSET = "assets";
const SB_PROJECTS = [{
  id: "canon-drive",
  title: "Cañon Drive Residence",
  location: "Beverly Hills, CA",
  category: "Full-Service Residential",
  year: "2025",
  image: ASSET + "/images/canon-drive-dining.webp",
  detail: ASSET + "/images/canon-drive-bath.webp",
  summary: "A 1920s Spanish Colonial reimagined as a warm, monastic retreat — limewash walls, reclaimed stone floors and hand-thrown fixtures."
}, {
  id: "broadway",
  title: "Broadway Penthouse",
  location: "San Francisco, CA",
  category: "New Build",
  year: "2025",
  image: ASSET + "/images/project-dining.webp",
  detail: ASSET + "/images/project-bar-lounge.webp",
  summary: "A hilltop aerie in plaster and oak, furnished for slow evenings and long views over the bay."
}, {
  id: "nob-hill",
  title: "Nob Hill Pied-à-Terre",
  location: "San Francisco, CA",
  category: "Renovation",
  year: "2024",
  image: ASSET + "/images/project-lounge.webp",
  detail: ASSET + "/images/project-dining-warm.webp",
  summary: "A compact dining room opened to light, anchored by a solid walnut table and a paper-shade pendant."
}, {
  id: "trousdale",
  title: "Trousdale Estate",
  location: "Beverly Hills, CA",
  category: "Full-Service Residential",
  year: "2023",
  image: ASSET + "/images/project-living.webp",
  summary: "Mid-century bones softened with olive velvet, fluted oak and a bar built for gathering."
}, {
  id: "sea-cliff",
  title: "Sea Cliff Retreat",
  location: "San Francisco, CA",
  category: "Renovation",
  year: "2024",
  image: ASSET + "/images/project-dining-warm.webp",
  summary: "Afternoon light studied like a material — every surface chosen for how it holds the sun."
}, {
  id: "outpost",
  title: "Outpost Guest House",
  location: "Ojai, CA",
  category: "New Build",
  year: "2025",
  image: ASSET + "/images/project-bath.webp",
  summary: "A small guest house of arches and stone, built to disappear into the hillside."
}];
const SB_SERVICES = [{
  n: "01",
  t: "Full-Service Design",
  d: "From architectural collaboration through the final styled photograph — space planning, sourcing, custom millwork, procurement and installation."
}, {
  n: "02",
  t: "Renovation & Rebuild",
  d: "High-end residential rebuilds: we consult, concept, and execute alongside your contractors and tradesmen, protecting scope, budget and quality."
}, {
  n: "03",
  t: "Art Direction & Rendering",
  d: "Photorealistic renders and brand-grade art direction to see a home before it is built — and to tell its story once it is."
}];
Object.assign(window, {
  SB_PROJECTS,
  SB_SERVICES,
  SB_ASSET: ASSET
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-fresh/Data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-fresh/Home.jsx
try { (() => {
/* Studio Browne — Home: a vertical scroll of full-viewport color-block panels. */
const SBhomeDS = window.StudioBrowneDesignSystem_6dac50;
function SBProjectPanel({
  p,
  onOpen,
  flip
}) {
  // Split-frame layout: one half full-bleed image, other half quiet ground
  // with eyebrow / title / small matted detail image / view link.
  const open = e => {
    e.preventDefault();
    onOpen(p.id);
  };
  const textHalf = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "2.2rem",
      padding: "clamp(2rem,5vw,4rem)",
      background: "var(--panel-greige)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.9rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.68rem",
      fontWeight: 500,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, p.location, " \xA0\xB7\xA0 ", p.year), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 400,
      fontSize: "clamp(1.6rem,3vw,2.6rem)",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      margin: 0,
      color: "var(--text-primary)"
    }
  }, p.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--sb-paper)",
      padding: "10px",
      border: "1px solid var(--line-strong)",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "home-" + p.id + "-detail",
    src: p.detail || p.image,
    shape: "rect",
    placeholder: "Drop a detail photo",
    style: {
      display: "block",
      width: "clamp(260px,24vw,440px)",
      aspectRatio: "4 / 5",
      boxShadow: "var(--shadow-inset)"
    }
  })), /*#__PURE__*/React.createElement("a", {
    onClick: open,
    style: {
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "0.7rem",
      fontWeight: 600,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--text-primary)",
      borderBottom: "1px solid var(--line-strong)",
      paddingBottom: "4px"
    }
  }, "View Project"));
  const imageHalf = /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "home-" + p.id + "-hero",
    src: p.image,
    shape: "rect",
    placeholder: "Drop a project photo",
    style: {
      position: "absolute",
      inset: 0
    }
  }));
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": p.title,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: "100vh"
    }
  }, flip ? imageHalf : textHalf, flip ? textHalf : imageHalf);
}
function SBHome({
  onNavigate,
  onOpenProject
}) {
  const {
    Button
  } = SBhomeDS;
  const projects = window.SB_PROJECTS;
  const featured = projects.slice(0, 3);

  // Hero wordmark fades out as the hero scrolls away.
  const [heroFade, setHeroFade] = React.useState(1);
  React.useEffect(() => {
    const onScroll = () => {
      const o = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.6));
      setHeroFade(o);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hero clip: the dining-room video loops continuously underneath (always in motion). On fixed
  // timers the kitchen fades in on top and dollies right, holds, then fades back out — the video
  // keeps dollying through both crossfades so the camera never appears to stop. Timing is fixed,
  // not tied to the clip length, so there is always a clear dining window and no double-loop.
  const heroVideoRef = React.useRef(null);
  const heroKitchenRef = React.useRef(null);
  const [kitchenActive, setKitchenActive] = React.useState(false);

  // Two-phase hero loop: (1) dining-room dolly-in plays for ~6s from the top of the clip, then
  // (2) a short crossfade to the kitchen, which slow-dollies right for ~6s, then a crossfade back
  // to a fresh dining dolly-in — forever. The video is reset to 0 each cycle so only its first 6s
  // ever shows (it never reaches its own loop point, so the dining clip never plays twice).
  // kitchenActive drives the shared dark<->camel accent for all hero text/logos.
  React.useEffect(() => {
    const v = heroVideoRef.current,
      k = heroKitchenRef.current;
    if (!v || !k) return;
    const FADE = 1500; // crossfade length (matches CSS opacity transition)
    const DINING = 6000; // dining dolly-in screen time before the kitchen comes in
    const KITCHEN = 6000; // kitchen dolly-pan screen time before it fades back out
    let timers = [],
      stopped = false;
    const at = (ms, fn) => timers.push(setTimeout(fn, ms));
    const resetPan = () => {
      // snap the pan back only while the kitchen is hidden
      k.style.transition = "none";
      k.classList.remove("is-panning");
      void k.offsetHeight;
      k.style.transition = "";
    };
    const cycle = () => {
      if (stopped) return;
      setKitchenActive(false);
      try {
        v.currentTime = 0;
        v.play();
      } catch (e) {} // fresh dolly-in; video dollies under the fade-back
      k.classList.remove("is-visible"); // fade kitchen out (keep its pan — no snap)
      at(FADE, resetPan); // reset pan once it's fully hidden
      at(DINING, () => {
        // crossfade to the kitchen + start the dolly
        setKitchenActive(true);
        k.classList.add("is-visible");
        requestAnimationFrame(() => k.classList.add("is-panning"));
      });
      at(DINING + KITCHEN, cycle); // fade back to a fresh dining dolly-in
    };
    v.muted = true;
    cycle();
    return () => {
      stopped = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  // Drive the corner-frame accent (S / B / STUDIO / WORK) in sync with the crossfade: dark grey
  // over the dining shot, camel over the kitchen. Restore the default when leaving the page.
  React.useEffect(() => {
    document.documentElement.style.setProperty("--sb-corner-ink", kitchenActive ? "var(--sb-camel)" : "#221f1b");
  }, [kitchenActive]);
  React.useEffect(() => () => {
    document.documentElement.style.removeProperty("--sb-corner-ink");
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    "data-tone": "ink",
    style: {
      position: "relative",
      height: "100vh",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("video", {
    className: "sb-hero-shot sb-hero-a is-visible",
    autoPlay: true,
    muted: true,
    playsInline: true,
    preload: "auto",
    poster: window.SB_ASSET + "/images/hero-poster.webp",
    ref: heroVideoRef,
    src: window.SB_ASSET + "/video/hero.mp4?v=2"
  }), /*#__PURE__*/React.createElement("img", {
    className: "sb-hero-shot sb-hero-b",
    ref: heroKitchenRef,
    src: window.SB_ASSET + "/images/hero-kitchen.webp",
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(58,45,34,0.34), rgba(58,45,34,0.10) 45%, rgba(58,45,34,0.42))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      opacity: heroFade,
      fontFamily: "var(--font-title)",
      fontSize: "16pt",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      color: kitchenActive ? "var(--sb-camel)" : "#221f1b",
      transition: "color 6s ease-in-out",
      textAlign: "center",
      lineHeight: 1
    }
  }, "Studio Browne"), /*#__PURE__*/React.createElement("div", {
    onClick: () => window.scrollTo({
      top: 0,
      left: 0
    }),
    style: {
      position: "absolute",
      bottom: 40,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
      textAlign: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": "Studio Browne",
    style: {
      height: "clamp(38px,4vw,58px)",
      aspectRatio: "1663 / 1330",
      background: kitchenActive ? "var(--sb-camel)" : "#221f1b",
      transition: "background 6s ease-in-out",
      WebkitMaskImage: "url(" + window.SB_ASSET + "/logo-mark.png)",
      maskImage: "url(" + window.SB_ASSET + "/logo-mark.png)",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskPosition: "center",
      maskPosition: "center"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.62rem",
      fontWeight: 500,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: kitchenActive ? "var(--sb-camel)" : "#221f1b",
      transition: "color 6s ease-in-out",
      lineHeight: 1
    }
  }, "BEVERLY HILLS"))), /*#__PURE__*/React.createElement(window.SBPanel, {
    bg: "greige"
  }, /*#__PURE__*/React.createElement(window.SBStatement, {
    eyebrow: "Studio Browne"
  }, "A full-service interior design practice working in warm, material-led modernism \u2014 plaster, walnut, stone and light \u2014 for clients from Los Angeles to Hawaii.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      height: 0,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      alignSelf: "flex-start",
      transform: "translateY(-50%)",
      width: "clamp(260px, 19vw, 380px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      transform: "translate(10px, 10px)",
      border: "1px solid var(--sb-camel)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--sb-paper)",
      padding: "12px 12px 12px",
      border: "1px solid var(--line-strong)",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.SB_ASSET + "/images/founder-headshot-home.webp",
    alt: "Matt Browne",
    style: {
      width: "100%",
      height: "auto",
      aspectRatio: "1030 / 1286",
      display: "block",
      filter: "var(--img-filter)",
      boxShadow: "var(--shadow-inset)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "-16%",
      bottom: "-9%",
      fontFamily: "var(--font-hand)",
      fontWeight: 700,
      fontSize: "clamp(1.4rem, 1.9vw, 2.1rem)",
      lineHeight: 1,
      color: "#1a1613",
      transform: "rotate(-8deg)",
      textTransform: "none",
      letterSpacing: "normal",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      textShadow: "0.5px 0.5px 0 #1a1613"
    }
  }, "xx,\xA0 Matt Browne"))), /*#__PURE__*/React.createElement(window.SBPanel, {
    bg: "stone",
    texture: true
  }, /*#__PURE__*/React.createElement(window.SBStatement, {
    maxw: "52ch"
  }, "We create timeless homes that imbue warmth and feeling, personally tailored to how our clients live. Known for a refined, contemporary aesthetic that blends craftsmanship, natural materials and a feeling of laid-back luxury.")), /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Before and After",
    style: {
      background: "var(--sb-paper, #f7f3ec)",
      padding: "clamp(4rem,8vh,7rem) clamp(2rem,6vw,6rem)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "clamp(2.5rem,5vh,4rem)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 400,
      fontSize: "clamp(1.4rem,2.2vw,2rem)",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      margin: 0,
      textAlign: "center",
      color: "var(--text-primary)"
    }
  }, "Spanish Primary Bath Reduxe"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "clamp(2rem,8vw,10rem)",
      width: "min(1060px, 100%)"
    }
  }, [{
    label: "Before",
    src: window.SB_ASSET + "/images/bath-before-crop.webp"
  }, {
    label: "After",
    src: window.SB_ASSET + "/images/canon-drive-bath.webp"
  }].map(s => /*#__PURE__*/React.createElement("figure", {
    key: s.label,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1.6rem",
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "bath-" + s.label.toLowerCase(),
    src: s.src,
    shape: "rect",
    placeholder: "Drop the " + s.label.toLowerCase() + " photo",
    style: {
      display: "block",
      width: "100%",
      aspectRatio: "2 / 3"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: "clamp(1rem,1.4vw,1.3rem)",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--text-primary)"
    }
  }, s.label))))), featured.map((p, i) => /*#__PURE__*/React.createElement(SBProjectPanel, {
    key: p.id,
    p: p,
    onOpen: onOpenProject,
    flip: i % 2 === 1
  })), /*#__PURE__*/React.createElement(window.SBPanel, {
    bg: "greige",
    minh: "60vh"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNavigate("work"),
    style: {
      cursor: "pointer",
      fontFamily: "var(--font-title)",
      fontSize: "clamp(1.4rem,2.8vw,2.2rem)",
      fontWeight: 400,
      color: "var(--text-primary)",
      borderBottom: "1px solid var(--line-strong)",
      paddingBottom: "0.2rem"
    }
  }, "View all projects")), /*#__PURE__*/React.createElement(window.SBContactPanel, {
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  SBHome
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-fresh/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-fresh/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Studio Browne — minimal UI icons.
   The brand uses almost no iconography; needs are limited to nav chrome
   and directional arrows. These are thin 1.5px stroke glyphs matching the
   Lucide geometry (Lucide is the sanctioned CDN set for any broader need).
   Exported to window for the other UI-kit scripts. */

function Icon({
  children,
  size = 20,
  stroke = 1.5,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "block",
      flex: "0 0 auto",
      ...style
    }
  }, rest), children);
}
const IconMenu = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "8",
  x2: "21",
  y2: "8"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "16",
  x2: "21",
  y2: "16"
}));
const IconClose = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "5",
  x2: "19",
  y2: "19"
}), /*#__PURE__*/React.createElement("line", {
  x1: "19",
  y1: "5",
  x2: "5",
  y2: "19"
}));
const IconArrowR = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "4",
  y1: "12",
  x2: "20",
  y2: "12"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "14 6 20 12 14 18"
}));
const IconArrowUR = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "7",
  y1: "17",
  x2: "17",
  y2: "7"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "8 7 17 7 17 16"
}));
const IconArrowL = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "20",
  y1: "12",
  x2: "4",
  y2: "12"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "10 6 4 12 10 18"
}));
const IconPlus = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "5",
  x2: "12",
  y2: "19"
}), /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}));
const IconInstagram = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("line", {
  x1: "17.5",
  y1: "6.5",
  x2: "17.5",
  y2: "6.5"
}));
Object.assign(window, {
  Icon,
  IconMenu,
  IconClose,
  IconArrowR,
  IconArrowUR,
  IconArrowL,
  IconPlus,
  IconInstagram
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-fresh/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-fresh/Intro.jsx
try { (() => {
// Studio Browne — painted-logo intro overlay.
// The mark "paints" itself on via an animated conic-gradient mask sweep,
// holds a beat, then drifts upward and fades to reveal the homepage.
const sbIntroCss = `
@property --sb-sweep {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
.sb-intro {
  position: fixed; inset: 0; z-index: 999;
  display: flex; align-items: center; justify-content: center;
  background: var(--surface-page);
  cursor: pointer;
  transition: opacity 900ms ease 250ms;
}
.sb-intro.is-drift { opacity: 0; pointer-events: none; }
.sb-intro-mark {
  width: min(40vw, 380px); height: auto; display: block;
  /* paint-on: sweep a conic mask clockwise from the top, like a brushstroke */
  -webkit-mask-image: conic-gradient(from -110deg, #000 var(--sb-sweep), transparent calc(var(--sb-sweep) + 26deg));
  mask-image: conic-gradient(from -110deg, #000 var(--sb-sweep), transparent calc(var(--sb-sweep) + 26deg));
  animation: sb-paint 1700ms cubic-bezier(.55,.06,.35,.96) forwards;
  transition: transform 1000ms cubic-bezier(.5,0,.15,1), opacity 800ms ease;
}
.sb-intro.is-drift .sb-intro-mark {
  transform: translateY(-48vh) scale(.55) rotate(-4deg);
  opacity: 0;
}
@keyframes sb-paint {
  from { --sb-sweep: 0deg; transform: scale(.96); }
  60%  { transform: scale(1); }
  to   { --sb-sweep: 386deg; transform: scale(1); }
}
@media (prefers-reduced-motion: reduce) {
  .sb-intro { display: none; }
}
`;
function SBIntro({
  onDone
}) {
  const [phase, setPhase] = React.useState("paint"); // paint -> drift -> gone
  const done = React.useRef(false);
  const finish = React.useCallback(() => {
    if (done.current) return;
    done.current = true;
    setPhase("gone");
    onDone && onDone();
  }, [onDone]);
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }
    const t1 = setTimeout(() => setPhase("drift"), 2150); // paint + short hold
    const t2 = setTimeout(finish, 3400); // drift complete
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [finish]);
  if (phase === "gone") return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "sb-intro" + (phase === "drift" ? " is-drift" : ""),
    onClick: () => setPhase("drift") || setTimeout(finish, 950),
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("style", null, sbIntroCss), /*#__PURE__*/React.createElement("img", {
    className: "sb-intro-mark",
    src: window.SB_ASSET + "/logo-mark.png",
    alt: ""
  }));
}
window.SBIntro = SBIntro;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-fresh/Intro.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-fresh/Panels.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Studio Browne — full-viewport color-block panel + statement helpers. */

const SB_PANEL_BG = {
  greige: "var(--panel-greige)",
  clay: "var(--panel-clay)",
  blue: "var(--panel-blue)",
  camel: "var(--panel-camel)",
  oxblood: "var(--panel-oxblood)",
  stone: "var(--panel-stone)",
  sage: "var(--panel-sage)"
};

/* A full-viewport color block. `tone` drives the corner-frame color via data-tone.
   `texture` overlays a very subtle grain for a chic, tactile plaster feel. */
const SB_NOISE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";
function SBPanel({
  bg = "greige",
  tone,
  texture = false,
  minh = "100vh",
  pad = "clamp(6rem,10vw,8rem) clamp(5rem,10vw,10rem)",
  children,
  style = {},
  ...rest
}) {
  const dataTone = tone || (bg === "oxblood" ? "light" : "ink");
  return /*#__PURE__*/React.createElement("section", _extends({
    "data-tone": dataTone,
    className: "sb-panel",
    style: {
      background: SB_PANEL_BG[bg],
      minHeight: minh,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: pad,
      position: "relative",
      overflow: "hidden",
      ...style
    }
  }, rest), texture && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: `url("${SB_NOISE}")`,
      backgroundSize: "220px 220px",
      opacity: 0.05,
      mixBlendMode: "multiply"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, children));
}

/* Centered eyebrow + statement lines, used on most panels. */
function SBStatement({
  eyebrow,
  children,
  dark = false,
  maxw = "52ch",
  align = "center"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: maxw,
      textAlign: align
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.72rem",
      fontWeight: 500,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: dark ? "var(--text-on-dark)" : "var(--text-primary)",
      marginBottom: "1.8rem"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: "clamp(0.85rem, 1.4vw, 1.15rem)",
      lineHeight: 1.5,
      letterSpacing: "0.005em",
      color: dark ? "var(--text-on-dark)" : "var(--text-primary)",
      margin: 0
    }
  }, children));
}
Object.assign(window, {
  SBPanel,
  SBStatement
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-fresh/Panels.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-fresh/Project.jsx
try { (() => {
/* Studio Browne — Project detail (VENN-style stats + serif body). */
function SBProject({
  id,
  onNavigate,
  onOpenProject
}) {
  const {
    Polaroid,
    Button
  } = window.StudioBrowneDesignSystem_6dac50;
  const projects = window.SB_PROJECTS;
  const p = projects.find(x => x.id === id) || projects[0];
  const others = projects.filter(x => x.id !== p.id).slice(0, 3);
  const meta = [["Location", p.location], ["Status", "Completed"], ["Project Type", p.category], ["Year", p.year]];
  const stats = [["Bedrooms", "4"], ["Bathrooms", "3.5"], ["Main House", "3,750 SF"], ["Stories", "2 + Basement"], ["Photography", "Studio Browne"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--panel-greige)"
    }
  }, /*#__PURE__*/React.createElement("section", {
    "data-tone": "ink",
    className: "sb-pad-x",
    style: {
      padding: "clamp(7rem,11vw,10rem) clamp(5rem,10vw,10rem) clamp(2rem,4vw,3rem)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "2rem",
      maxWidth: 1100,
      margin: "0 auto clamp(2rem,5vw,4rem)"
    },
    className: "sb-meta-row"
  }, meta.slice(0, 3).map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.72rem",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      textAlign: "center"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.88rem",
      color: "var(--text-primary)",
      marginTop: "0.3rem",
      textAlign: "center"
    }
  }, v)))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 400,
      fontSize: "clamp(0.8rem,1.8vw,1.5rem)",
      margin: "0 auto",
      maxWidth: 1100,
      color: "var(--text-primary)",
      lineHeight: 1.02,
      textAlign: "center"
    }
  }, p.title)), /*#__PURE__*/React.createElement("section", {
    "data-tone": "ink",
    className: "sb-pad-x",
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "0 clamp(1.5rem,4vw,4rem)"
    }
  }, /*#__PURE__*/React.createElement(Polaroid, {
    image: window.SB_ASSET + "/images/project-bar-lounge.png",
    slotId: "proj-" + p.id + "-hero",
    ratio: "4 / 3",
    width: "min(1040px, 92vw)",
    caption: p.location + " · " + p.year,
    bare: true
  })), /*#__PURE__*/React.createElement("section", {
    "data-tone": "ink",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.6fr",
      gap: "clamp(2rem,6vw,6rem)",
      maxWidth: 1100,
      margin: "0 auto",
      padding: "clamp(4rem,8vw,7rem) clamp(5rem,10vw,10rem)"
    },
    className: "sb-proj-meta sb-pad-x"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.58rem",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: "1.4rem"
    }
  }, "Project Statistics"), stats.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "1rem",
      padding: "0.55rem 0",
      borderBottom: "1px solid var(--line)",
      fontFamily: "var(--font-sans)",
      fontSize: "0.78rem",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, k), /*#__PURE__*/React.createElement("span", null, v)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "clamp(0.85rem,1.4vw,1.1rem)",
      lineHeight: 1.4,
      color: "var(--text-primary)",
      margin: 0
    }
  }, p.summary), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.9rem",
      lineHeight: 1.75,
      color: "var(--text-secondary)",
      marginTop: "1.6rem"
    }
  }, "The brief was restraint. We stripped the plan to its light and circulation, then rebuilt in a short palette of honest materials \u2014 limewash, solid walnut, unlacquered brass and stone underfoot \u2014 so that nothing competes and everything ages well."))), /*#__PURE__*/React.createElement("section", {
    "data-tone": "ink",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "clamp(1.5rem,3vw,3rem)",
      maxWidth: 1100,
      margin: "0 auto",
      padding: "0 clamp(5rem,10vw,10rem) clamp(4rem,8vw,7rem)",
      justifyItems: "center"
    },
    className: "sb-proj-meta sb-pad-x"
  }, /*#__PURE__*/React.createElement(Polaroid, {
    image: window.SB_ASSET + "/images/project-dining.png",
    slotId: "proj-" + p.id + "-g1",
    ratio: "4 / 5",
    width: "100%",
    bare: true
  }), /*#__PURE__*/React.createElement(Polaroid, {
    image: window.SB_ASSET + "/images/project-living.png",
    slotId: "proj-" + p.id + "-g2",
    ratio: "4 / 5",
    width: "100%",
    bare: true
  }), [3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => /*#__PURE__*/React.createElement(Polaroid, {
    key: n,
    slotId: "proj-" + p.id + "-g" + n,
    ratio: "4 / 5",
    width: "100%",
    bare: true
  }))), /*#__PURE__*/React.createElement("section", {
    "data-tone": "ink",
    className: "sb-pad-x",
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "0 clamp(5rem,10vw,10rem) clamp(5rem,9vw,8rem)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.72rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--text-primary)",
      marginBottom: "2rem"
    }
  }, "More work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "clamp(2rem,4vw,4rem)",
      justifyItems: "center"
    }
  }, others.map((o, i) => /*#__PURE__*/React.createElement("div", {
    key: o.id,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.8rem"
    }
  }, /*#__PURE__*/React.createElement(Polaroid, {
    image: o.image,
    slotId: "more-" + o.id,
    ratio: "4 / 5",
    width: "100%",
    caption: o.location,
    bare: true
  }), /*#__PURE__*/React.createElement("h3", {
    onClick: e => {
      e.preventDefault();
      onOpenProject(o.id);
    },
    style: {
      cursor: "pointer",
      fontFamily: "var(--font-title)",
      fontWeight: 400,
      fontSize: "0.8rem",
      margin: 0,
      color: "var(--text-primary)"
    }
  }, o.title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "3rem"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNavigate("contact")
  }, "Inquire about a project like this"))));
}
Object.assign(window, {
  SBProject
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-fresh/Project.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-fresh/Studio.jsx
try { (() => {
/* Studio Browne — Studio / about Matt Browne. */
function SBStudio({
  onNavigate
}) {
  const {
    Polaroid,
    Button
  } = window.StudioBrowneDesignSystem_6dac50;
  const exp = [["Studio Browne", "Principal · Beverly Hills", "2026—Present"], ["Sarah West Interiors", "Designer III · West Hollywood", "2022—Present"], ["Alexander Design Build", "Interior Designer · Los Angeles", "2022"], ["Adair Design Group", "Interior Designer · San Francisco", "2014—2018"]];
  const skills = ["AI for Design", "Residential & Commercial", "Custom Millwork", "2D & 3D Modeling", "Photorealistic Rendering", "Space Planning", "Feng Shui", "Art Direction & Styling", "Lighting Design & FF&E", "Color Application"];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sb-pad-x",
    style: {
      background: "var(--panel-greige)",
      padding: "0 clamp(1.25rem,5vw,4.5rem) calc(clamp(5rem,9vw,8rem) + clamp(260px,26vw,340px) * 0.7)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: "clamp(0.72rem,0.95vw,0.88rem)",
      lineHeight: 2,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-secondary)",
      maxWidth: 1100,
      margin: "0 auto",
      textWrap: "pretty"
    }
  }, "I created Studio Browne to create spaces that have something to say. I am drawn to the overlooked and am a fan of the bridge between high-end modernism and the lived-in look of the past. I am bored with the repeated palettes, the safe beige consensus, the same ten ideas passed around by a stale industry. I didn't start a studio to join that conversation. Every project, from heritage restorations to ground-up architectural builds, is treated as a cohesive narrative. I approach my work looking at the total picture; there needs to be a cohesive narrative. It isn't about filling rooms; it is about tuning them. Material honesty and spatial harmony, and get rid of everything that's only there because it's expected. My inspiration comes in many forms \u2014 the rhythm of a song, the prose of a favorite book, the raw texture of unlacquered brass. Many forms, but never from a catalog, a trend report, or somebody else's mood board. The work I do is curated, deeply personal, and a little defiant."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 400,
      fontSize: "clamp(0.72rem,0.95vw,0.88rem)",
      lineHeight: 2,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--text-secondary)",
      maxWidth: 1100,
      margin: "2.2em auto 0",
      textWrap: "pretty"
    }
  }, "Let's live,", /*#__PURE__*/React.createElement("br", null), "Matt")), /*#__PURE__*/React.createElement(window.SBPanel, {
    bg: "oxblood",
    minh: "auto",
    pad: "clamp(3.5rem,6vw,5.5rem) clamp(5rem,10vw,10rem)",
    style: {
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "1.8rem",
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "clamp(260px,26vw,340px)",
      marginTop: "calc(-1 * clamp(3.5rem,6vw,5.5rem) - 14px - clamp(260px,26vw,340px) * 0.625)"
    }
  }, /*#__PURE__*/React.createElement(Polaroid, {
    image: window.SB_ASSET + "/founder-headshot.webp",
    ratio: "4 / 5",
    width: "100%",
    tilt: 0
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      "position": "absolute",
      "right": "2%",
      "bottom": "2%",
      "fontFamily": "var(--font-hand)",
      "fontWeight": 700,
      "fontSize": "clamp(1.4rem, 1.9vw, 2.1rem)",
      "lineHeight": 1,
      "color": "#1a1613",
      "transform": "rotate(-8deg)",
      "textTransform": "none",
      "letterSpacing": "normal",
      "whiteSpace": "nowrap",
      "pointerEvents": "none",
      "textShadow": "0.5px 0.5px 0 #1a1613"
    }
  }, "xx,\xA0 Matt Browne")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: "1.25rem",
      color: "var(--text-on-dark)",
      whiteSpace: "nowrap"
    }
  }, "The Principal"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.9rem",
      lineHeight: 1.7,
      color: "var(--text-on-dark)",
      margin: 0,
      maxWidth: "48ch"
    }
  }, "Working between Beverly Hills and the Bay Area on high-end residential rebuilds \u2014 from sourcing and custom furniture to on-site styling \u2014 with a practice built on restraint, warmth and honest materials."))), /*#__PURE__*/React.createElement(window.SBContactPanel, {
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  SBStudio
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-fresh/Studio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-fresh/Work.jsx
try { (() => {
/* Studio Browne — Work: project index as a polaroid grid. */
function SBWork({
  onOpenProject,
  onNavigate
}) {
  const {
    Polaroid,
    Tag
  } = window.StudioBrowneDesignSystem_6dac50;
  const projects = window.SB_PROJECTS;
  const cats = ["All Work", "Full-Service Residential", "Renovation", "New Build"];
  const [active, setActive] = React.useState("All Work");
  const shown = active === "All Work" ? projects : projects.filter(p => p.category === active);
  const tilts = [-1.5, 1, -0.5, 1.5, -1, 0.5];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.SBPanel, {
    bg: "greige",
    minh: "auto",
    pad: "clamp(7rem,11vw,10rem) clamp(5rem,10vw,10rem) clamp(2rem,4vw,3rem)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "0.72rem",
      fontWeight: 500,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--text-primary)",
      marginBottom: "1.4rem"
    }
  }, "Selected Work"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 400,
      fontSize: "clamp(1.7rem,3.8vw,2.7rem)",
      margin: 0,
      color: "var(--text-primary)",
      maxWidth: "18ch"
    }
  }, "A record of homes, built slowly and with intent."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "0.6rem",
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: "2.4rem"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: active === c,
    onClick: () => setActive(c)
  }, c))))), /*#__PURE__*/React.createElement("div", {
    className: "sb-pad-x",
    style: {
      background: "var(--panel-greige)",
      padding: "clamp(2rem,4vw,4rem) clamp(5rem,10vw,10rem) clamp(6rem,10vw,9rem)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "clamp(2.5rem,5vw,5rem)",
      justifyItems: "center",
      maxWidth: 1100,
      margin: "0 auto"
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.9rem"
    }
  }, /*#__PURE__*/React.createElement(Polaroid, {
    image: p.image,
    slotId: "work-" + p.id,
    ratio: "4 / 5",
    width: "100%",
    tilt: tilts[i % tilts.length],
    caption: p.location + " · " + p.year,
    bare: true
  }), /*#__PURE__*/React.createElement("h3", {
    onClick: e => {
      e.preventDefault();
      onOpenProject(p.id);
    },
    style: {
      cursor: "pointer",
      fontFamily: "var(--font-title)",
      fontWeight: 400,
      fontSize: "0.9rem",
      margin: 0,
      color: "var(--text-primary)",
      textAlign: "center"
    }
  }, p.title))))), /*#__PURE__*/React.createElement(window.SBContactPanel, {
    onNavigate: onNavigate
  }));
}
Object.assign(window, {
  SBWork
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-fresh/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website-fresh/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  const LS_KEY = 'sb-image-slots:' + location.pathname;
  function lsRead() {
    try {
      const t = localStorage.getItem(LS_KEY);
      return t ? JSON.parse(t) : null;
    } catch (e) {
      return null;
    }
  }
  function lsWrite() {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(slots));
    } catch (e) {}
  }
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      if (!j || typeof j !== 'object') j = lsRead();
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  // ── Save-status toast ──────────────────────────────────────────────
  // Saves used to fail SILENTLY (host channel errors were swallowed) and
  // a night of photo edits could vanish. Now every persisted write shows
  // 'Photo saved', failures retry with backoff, and a final failure shows
  // a sticky red warning so the user knows before walking away.
  let toastEl = null;
  function toast(msg, bad, sticky) {
    if (!document.body) return;
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.style.cssText = 'position:fixed;left:50%;bottom:18px;transform:translateX(-50%);' + 'z-index:2147483647;padding:8px 14px;border-radius:8px;' + 'font:12px/1.3 system-ui,-apple-system,sans-serif;color:#fff;' + 'box-shadow:0 4px 16px rgba(0,0,0,.25);transition:opacity .3s;pointer-events:none;opacity:0';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.style.background = bad ? '#b3261e' : 'rgba(0,0,0,.8)';
    toastEl.style.opacity = '1';
    clearTimeout(toast._t);
    if (!sticky) toast._t = setTimeout(() => {
      toastEl.style.opacity = '0';
    }, 2200);
  }
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    lsWrite();
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    lsWrite();
    const w = window.omelette && window.omelette.writeFile;
    if (!w) {
      toast('\u26a0 Read-only view \u2014 photo changes will NOT be saved', true, true);
      return;
    }
    saving = true;
    const attempt = n => Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).then(() => {
      toast('Photo saved');
    }).catch(() => {
      if (n < 4) {
        toast('Retrying photo save\u2026', true, true);
        return new Promise(res => setTimeout(res, 800 * Math.pow(2, n))).then(() => attempt(n + 1));
      }
      toast('\u26a0 Photo save FAILED \u2014 keep this tab open and drop the image again', true, true);
    });
    attempt(0).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // Slot-to-slot drag: a filled slot can be dragged onto another slot to
      // move its photo (swap if the target is filled) — no re-upload needed.
      this.addEventListener('dragstart', e => {
        if (!this.id || !this.hasAttribute('data-filled') || !this.hasAttribute('data-editable') || this.hasAttribute('data-reframe')) {
          e.preventDefault();
          return;
        }
        e.dataTransfer.setData('text/x-image-slot-id', this.id);
        e.dataTransfer.effectAllowed = 'move';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        // Slot-to-slot move/swap takes priority over file ingestion.
        const srcId = e.dataTransfer && e.dataTransfer.getData('text/x-image-slot-id');
        if (srcId && srcId !== this.id && this.id && this.hasAttribute('data-editable')) {
          const src = getSlot(srcId);
          if (src) {
            const mine = getSlot(this.id);
            setSlot(this.id, Object.assign({}, src));
            if (mine) setSlot(srcId, Object.assign({}, mine));else setSlot(srcId, null);
            toast(mine ? 'Photos swapped' : 'Photo moved');
          }
          return;
        }
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }
      // Filled slots are draggable so photos can be moved between slots
      // (set after the filled state above is current for this render).
      this.draggable = !!(editable && this.id && this.hasAttribute('data-filled'));

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website-fresh/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.LogoLoader = __ds_scope.LogoLoader;

__ds_ns.Polaroid = __ds_scope.Polaroid;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CornerFrame = __ds_scope.CornerFrame;

})();
