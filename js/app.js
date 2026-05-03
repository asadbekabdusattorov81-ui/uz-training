/* ================================================
   GeoGAT Akademiya — app.js
   Kategoriya bo'yicha tablar | shuffle | 300 limit
   ================================================ */

import { initializeApp }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore, doc, getDoc, collection, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ─── Firebase config ─────────────────────────────
const firebaseConfig = {
  apiKey:            "AIzaSyDlKFVAteGjZ3pNnKsvMsubfvTZXOdgg3g",
  authDomain:        "sound-memory-474606-p1.firebaseapp.com",
  projectId:         "sound-memory-474606-p1",
  storageBucket:     "sound-memory-474606-p1.firebasestorage.app",
  messagingSenderId: "1088934512143",
  appId:             "1:1088934512143:web:ccb67476ecb23c2375c57a"
};
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// ─── Modul metadata ──────────────────────────────
const MODULE_META = {
  m1: { title: "Topografiya asoslari",     emoji: "🏔️", image: "assets/courses/module1.jpg", color: "linear-gradient(135deg,#4caf7d,#2e7d52)", level: "Boshlang'ich", lessons: 6,  weeks: 2, keywords: "topografiya masshtab koordinata relyef xarita" },
  m2: { title: "Kartografiya",             emoji: "🧭", image: "assets/courses/module2.jpg", color: "linear-gradient(135deg,#2196c4,#0d5a8a)", level: "O'rta",        lessons: 6,  weeks: 2, keywords: "kartografiya xarita proyeksiya generalizatsiya dizayn" },
  m3: { title: "GAT (GIS) — ArcGIS/QGIS", emoji: "🗺️", image: "assets/courses/module3.jpg", color: "linear-gradient(135deg,#7c4dac,#4a2a7a)", level: "O'rta",        lessons: 8,  weeks: 3, keywords: "GIS ArcGIS QGIS vektor rastr qatlamlar fazoviy tahlil" },
  m4: { title: "Masofadan zondlash",       emoji: "🛰️", image: "assets/courses/module4.jpg", color: "linear-gradient(135deg,#1a3a6e,#0a1e40)", level: "O'rta",        lessons: 6,  weeks: 2, keywords: "masofadan zondlash sun'iy yo'ldosh NDVI monitoring" },
  m5: { title: "Kadastr va geodeziya",     emoji: "🏗️", image: "assets/courses/module5.jpg", color: "linear-gradient(135deg,#c47a1a,#8a5010)", level: "Boshlang'ich", lessons: 6,  weeks: 2, keywords: "kadastr geodeziya yer uchastkasi o'lchash hujjatlar" },
  m6: { title: "Amaliy loyiha",            emoji: "📐", image: "assets/courses/module6.jpg", color: "linear-gradient(135deg,#2e7d4a,#1a4a28)", level: "Advanced",     lessons: 10, weeks: 4, keywords: "amaliy loyiha ma'lumot yig'ish tahlil xarita hisobot" }
};

const LEVEL_COLOR = {
  "Boshlang'ich": "#27ae60",
  "O'rta":        "#1a6fc4",
  "Advanced":     "#c0392b"
};

// ─── Yil ─────────────────────────────────────────
document.querySelectorAll("#y").forEach(el => el.textContent = new Date().getFullYear());


// ══════════════════════════════════════════════════
// 1. COURSES.HTML — modullar kartalarini chiqarish
// ══════════════════════════════════════════════════
window.renderModules = function (query = "") {
  const grid = document.getElementById("modulesGrid");
  if (!grid) return;

  const q        = (query || "").toLowerCase().trim();
  const filtered = Object.keys(MODULE_META).filter(id => {
    if (!q) return true;
    const m = MODULE_META[id];
    return m.title.toLowerCase().includes(q) || m.keywords.toLowerCase().includes(q);
  });

  if (!filtered.length) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#999;padding:40px">🔍 Hech narsa topilmadi.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(id => {
    const m        = MODULE_META[id];
    const num      = id.replace("m", "");
    const lvlColor = LEVEL_COLOR[m.level] || "#666";
    return `
      <div class="moduleCard" onclick="window.location.href='course.html?id=${id}'" style="cursor:pointer">
        <div class="moduleThumb" style="background:${m.color};position:relative;overflow:hidden">
          <img src="${m.image}" alt="${esc(m.title)}"
               style="width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;opacity:0.85"
               onerror="this.style.display='none'">
          <span class="moduleEmoji" style="position:relative;z-index:1">${m.emoji}</span>
          <span class="moduleBadge" style="background:${lvlColor};position:relative;z-index:1">${m.level}</span>
          <span class="moduleNum"   style="position:relative;z-index:1">${num}-modul</span>
        </div>
        <div class="moduleBody">
          <div class="moduleTitle">${m.title}</div>
          <div class="moduleMeta">⏱ ${m.lessons} ta dars &nbsp;·&nbsp; 📅 ${m.weeks} hafta</div>
          <a class="moduleBtn" href="course.html?id=${id}">Kursga kirish →</a>
        </div>
      </div>`;
  }).join("");
};


// ══════════════════════════════════════════════════
// 2. COURSE.HTML — bitta modulni ko'rsatish
// ══════════════════════════════════════════════════
window.loadCoursePage = async function () {
  const params   = new URLSearchParams(window.location.search);
  const moduleId = params.get("id") || "m1";
  const meta     = MODULE_META[moduleId];

  document.title = `GeoGAT — ${meta ? meta.title : moduleId}`;

  // ── Hero ──
  const heroEl = document.getElementById("courseHero");
  if (heroEl && meta) {
    const lvlColor = LEVEL_COLOR[meta.level] || "#666";
    heroEl.innerHTML = `
      <div class="cheroInner" style="background:${meta.color}">
        <div class="cheroEmoji">${meta.emoji}</div>
        <div class="cheroText">
          <span class="cheroBadge" style="background:${lvlColor}">${meta.level}</span>
          <h1>${meta.title}</h1>
          <div class="cheroMeta">⏱ ${meta.lessons} ta dars &nbsp;·&nbsp; 📅 ${meta.weeks} hafta</div>
        </div>
      </div>`;
  }

  // ── Sidebar navigatsiya ──
  const SECTIONS = [
    { key: "intro",    label: "🚀 Kirish"           },
    { key: "nazariya", label: "📖 Nazariya"          },
    { key: "video",    label: "🎬 Video dars"        },
    { key: "slayd",    label: "📑 Slaydlar"          },
    { key: "amaliy",   label: "✏️ Amaliy topshiriq" },
    { key: "test",     label: "📝 Test"              },
    { key: "yakun",    label: "🏁 Yakun"             }
  ];

  const navEl = document.getElementById("sectionNav");
  if (navEl) {
    navEl.innerHTML = SECTIONS.map((s, i) => `
      <a class="sideNavItem ${i === 0 ? "active" : ""}"
         href="#" data-sec="${s.key}"
         onclick="loadSection('${moduleId}','${s.key}',this);return false">
        ${s.label}
      </a>`).join("");
  }

  loadFileList(moduleId);
  loadSection(moduleId, "intro", document.querySelector(".sideNavItem"));
};


// ─── Bo'lim yuklash ───────────────────────────────
window.loadSection = async function (moduleId, secKey, navEl) {
  document.querySelectorAll(".sideNavItem").forEach(a => a.classList.remove("active"));
  if (navEl) navEl.classList.add("active");

  const box = document.getElementById("sectionContent");
  if (!box) return;

  box.innerHTML = `<div class="loadingState">⏳ Yuklanmoqda...</div>`;

  // ── Test bo'limi ──
  if (secKey === "test") {
    box.innerHTML = `
      <div class="tw-wrapper" id="testWidget">
        <h2 class="tw-main-title">📝 Bilimlarni tekshirish testi</h2>
        <div id="twBody">
          <div class="loadingState">⏳ Savollar yuklanmoqda...</div>
        </div>
      </div>`;
    twInit(moduleId);
    return;
  }

  try {
    const snap = await getDoc(doc(db, "modules", moduleId, "sections", secKey));

    if (secKey === "amaliy") {
      box.innerHTML = renderAmaliy(snap.exists() ? snap.data() : {});
      return;
    }

    if (!snap.exists()) {
      box.innerHTML = `<div class="emptyState">📭 Bu bo'lim hali to'ldirilmagan.</div>`;
      return;
    }

    const d = snap.data();
    switch (secKey) {
      case "intro":    box.innerHTML = renderIntro(d);    break;
      case "nazariya": box.innerHTML = renderNazariya(d); break;
      case "video":    box.innerHTML = renderVideo(d);    break;
      case "slayd":    box.innerHTML = renderSlayd(d);    break;
      case "yakun":    box.innerHTML = renderYakun(d);    break;
      default:         box.innerHTML = `<pre>${JSON.stringify(d, null, 2)}</pre>`;
    }
  } catch (e) {
    box.innerHTML = `<div class="emptyState" style="color:#c00">❌ Xato: ${e.message}</div>`;
  }
};


// ─── Fayllar ro'yxati ─────────────────────────────
async function loadFileList(moduleId) {
  const el = document.getElementById("fileList");
  if (!el) return;
  try {
    const snap  = await getDocs(collection(db, "modules", moduleId, "files"));
    const files = [];
    snap.forEach(d => files.push({ id: d.id, ...d.data() }));

    if (!files.length) {
      el.innerHTML = `<div class="emptyFile">Fayllar yo'q</div>`;
      return;
    }

    el.innerHTML = files.map(f => {
      const ext  = (f.type || "").toUpperCase();
      const icon = ext === "PDF" ? "📕"
                 : ext === "PPTX" || ext === "PPT" ? "📊"
                 : ext === "DOCX" ? "📝" : "📄";
      return `
        <a class="fileItem" href="${esc(f.url)}" target="_blank">
          <span class="fileItemIcon">${icon}</span>
          <span class="fileItemName">${esc(f.name)}</span>
          <span class="fileItemExt">${ext}</span>
        </a>`;
    }).join("");
  } catch (e) {
    el.innerHTML = `<div class="emptyFile" style="color:#c00">❌ ${e.message}</div>`;
  }
}


// ══════════════════════════════════════════════════
// RENDER FUNKSIYALARI
// ══════════════════════════════════════════════════

function renderIntro(d) {
  return `
    <div class="secBlock">
      <h2 class="secTitle">🚀 Kirish bo'limi</h2>
      ${field("🎯 Maqsad",         d.maqsad)}
      ${field("👥 Kimlar uchun",   d.kimlar)}
      ${field("✅ Kutilgan natija", d.natija)}
    </div>`;
}

function renderNazariya(d) {
  const points = (d.points || []).map(p => `<li>${esc(p)}</li>`).join("");
  return `
    <div class="secBlock">
      <h2 class="secTitle">📖 Nazariya</h2>
      ${points ? `<ul class="theoryList">${points}</ul>` : ""}
      ${d.izoh ? `<p class="theoryNote">${esc(d.izoh)}</p>` : ""}
    </div>`;
}

function renderVideo(d) {
  const videoHtml = d.videoUrl
    ? `<div class="videoWrap">
         <video controls style="width:100%;border-radius:10px;max-height:400px">
           <source src="${esc(d.videoUrl)}" />
           Brauzeringiz video formatini qo'llab-quvvatlamaydi.
         </video>
       </div>`
    : `<div class="emptyState">📭 Video hali yuklanmagan.</div>`;

  const comments = (d.comments || []).map(c => `
    <div class="commentCard">
      <div class="commentText">${esc(c.text)}</div>
      <div class="commentMeta">${esc(c.date || "")}</div>
    </div>`).join("");

  return `
    <div class="secBlock">
      <h2 class="secTitle">🎬 Video dars</h2>
      ${videoHtml}
      ${comments ? `<div class="commentsSection"><h3 class="commentsTitle">💬 Izohlar</h3>${comments}</div>` : ""}
    </div>`;
}

function renderSlayd(d) {
  return `
    <div class="secBlock">
      <h2 class="secTitle">📑 Slaydlar</h2>
      <p class="secDesc">Slayd fayllarni chapda "Modul fayllari" bo'limidan yuklab oling.</p>
    </div>`;
}

function renderAmaliy(d) {
  const steps = (d.steps || []).map((s, i) =>
    `<div class="stepItem"><span class="stepNum">${i + 1}</span><span>${esc(s)}</span></div>`
  ).join("");
  return `
    <div class="secBlock">
      <h2 class="secTitle">✏️ Amaliy topshiriq</h2>
      ${steps ? `<div class="stepsList">${steps}</div>` : ""}
      ${d.highlight ? `<div class="highlightBox">💡 ${esc(d.highlight)}</div>` : ""}
      ${!steps && !d.highlight ? `<div class="emptyState">📭 Bu bo'lim hali to'ldirilmagan.</div>` : ""}
    </div>`;
}

function renderYakun(d) {
  return `
    <div class="secBlock">
      <h2 class="secTitle">🏁 Yakun</h2>
      ${d.xulosa  ? `<p class="yakunText">${esc(d.xulosa)}</p>`         : ""}
      ${d.fanBold ? `<div class="yakunBold">🎓 ${esc(d.fanBold)}</div>` : ""}
    </div>`;
}


// ══════════════════════════════════════════════════
// TEST WIDGET — har bir kategoriya alohida tab
// shuffle + 300 ta limit (kam bo'lsa hammasi chiqadi)
// ══════════════════════════════════════════════════

function twGetSections(moduleId) {
  if (typeof GEOGAT_TESTS === "undefined") return [];
  const mod = GEOGAT_TESTS[moduleId];
  if (!mod) return [];
  return (mod.sections || []).filter(s => s.questions && s.questions.length > 0);
}

window.twInit = function (moduleId) {
  const body = document.getElementById("twBody");
  if (!body) return;

  const sections = twGetSections(moduleId);
  if (!sections.length) {
    body.innerHTML = `<div class="emptyState">📭 Bu modul uchun test topilmadi.</div>`;
    return;
  }

  const secStates = sections.map(sec => {
    const questions = [...sec.questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 300);
    return {
      title:      sec.title || "Bo'lim",
      questions,
      answered:   new Array(questions.length).fill(null),
      current:    0,
      score:      0,
      earnedBall: 0,
      totalBall:  questions.reduce((s, q) => s + (q.ball || 1), 0),
      done:       false
    };
  });

  window.__twState = { secStates, activeSec: 0 };
  twRenderAll(body);
};

// ── Tablar + aktiv section ──
function twRenderAll(body) {
  const { secStates, activeSec } = window.__twState;

  const tabsHtml = secStates.map((s, i) => {
    let badge = "";
    if (s.done) {
      const pct = Math.round((s.score / s.questions.length) * 100);
      badge = `<span class="tw-tab-badge ${pct >= 60 ? "tw-tab-ok" : "tw-tab-fail"}">${pct}%</span>`;
    }
    return `
      <button class="tw-tab ${i === activeSec ? "active" : ""}" onclick="twSwitchTab(${i})">
        ${esc(s.title)}
        <span class="tw-tab-count">${s.questions.length}</span>
        ${badge}
      </button>`;
  }).join("");

  body.innerHTML = `
    <div class="tw-tabs">${tabsHtml}</div>
    <div id="tw-sec-content"></div>`;

  twRenderSection(
    document.getElementById("tw-sec-content"),
    secStates[activeSec],
    activeSec
  );
}

// ── Bitta section render ──
function twRenderSection(container, sec, secIdx) {

  // Natija ekrani
  if (sec.done) {
    const total = sec.questions.length;
    const pct   = Math.round((sec.score / total) * 100);
    let emoji, msg, cls;
    if      (pct >= 80) { emoji = "🏆"; msg = "A'lo natija! Mukammal o'zlashtirdingiz.";    cls = "tw-res-great"; }
    else if (pct >= 60) { emoji = "👍"; msg = "Yaxshi natija! Bir oz ko'proq mashq qiling."; cls = "tw-res-ok";    }
    else                { emoji = "📚"; msg = "Materialni qayta o'qib, yana urinib ko'ring!"; cls = "tw-res-low";  }

    container.innerHTML = `
      <div class="tw-result ${cls}">
        <div class="tw-res-emoji">${emoji}</div>
        <div class="tw-res-score">${sec.score} / ${total} to'g'ri</div>
        <div class="tw-res-ball">🏅 ${sec.earnedBall} / ${sec.totalBall} ball</div>
        <div class="tw-res-pct">${pct}%</div>
        <div class="tw-res-msg">${msg}</div>
        <button class="tw-restart-btn" onclick="twRestartSec(${secIdx})">🔄 Qayta boshlash</button>
      </div>`;
    return;
  }

  // Savol ekrani
  const q             = sec.questions[sec.current];
  const ans           = sec.answered[sec.current];
  const correctLetter = (q.correct || "").toUpperCase();
  const pct           = Math.round(((sec.current + 1) / sec.questions.length) * 100);

  const optsHtml = ["A", "B", "C", "D"]
    .filter(l => q[l] !== undefined && q[l] !== "")
    .map(l => {
      let cls = "tw-opt", icon = "";
      if (ans !== null) {
        if      (l === correctLetter)                     { cls += " tw-correct"; icon = " ✅"; }
        else if (l === ans.chosen && l !== correctLetter) { cls += " tw-wrong";   icon = " ❌"; }
        else                                              { cls += " tw-disabled"; }
      }
      return `
        <button class="${cls}" ${ans !== null ? "disabled" : ""} onclick="twAnswerSec(${secIdx},'${l}')">
          <span class="tw-opt-letter">${l}</span>
          <span class="tw-opt-text">${esc(q[l])}</span>${icon}
        </button>`;
    }).join("");

  let feedbackHtml = "";
  if (ans !== null) {
    feedbackHtml = ans.chosen === correctLetter
      ? `<div class="tw-feedback tw-fb-correct">✅ To'g'ri! +${q.ball || 1} ball</div>`
      : `<div class="tw-feedback tw-fb-wrong">❌ Noto'g'ri. To'g'ri javob: <strong>${correctLetter}</strong> — ${esc(q[correctLetter] || "")}</div>`;
  }

  const isLast    = sec.current === sec.questions.length - 1;
  const nextBtn   = (ans !== null && !isLast)
    ? `<button class="tw-next-btn" onclick="twNextSec(${secIdx})">Keyingi savol →</button>` : "";
  const finishBtn = (ans !== null && isLast)
    ? `<button class="tw-next-btn" onclick="twFinishSec(${secIdx})">Natijani ko'rish 🏁</button>` : "";

  container.innerHTML = `
    <div class="tw-sec-header">
      <div class="tw-sec-title">${esc(sec.title)}</div>
      <div class="tw-sec-meta">${sec.questions.length} ta savol &nbsp;·&nbsp; 🏅 ${sec.totalBall} ball</div>
    </div>
    <div class="tw-progress-wrap">
      <div class="tw-progress-bar" style="width:${pct}%"></div>
    </div>
    <div class="tw-progress-label">
      <span>${sec.current + 1} / ${sec.questions.length} savol</span>
      <span>✅ ${sec.score} to'g'ri &nbsp;|&nbsp; 🏅 ${sec.earnedBall} ball</span>
    </div>
    <div class="tw-question">
      <span class="tw-q-num">Savol ${sec.current + 1}:</span>
      <span class="tw-q-text">${esc(q.q)}</span>
    </div>
    <div class="tw-options">${optsHtml}</div>
    ${feedbackHtml}
    <div class="tw-actions">${nextBtn}${finishBtn}</div>`;
}

// ── Tab almashtirish ──
window.twSwitchTab = function (i) {
  window.__twState.activeSec = i;
  twRenderAll(document.getElementById("twBody"));
};

// ── Javob berish ──
window.twAnswerSec = function (secIdx, chosen) {
  const sec = window.__twState.secStates[secIdx];
  if (sec.answered[sec.current] !== null) return;
  const q       = sec.questions[sec.current];
  const correct = (q.correct || "").toUpperCase();
  sec.answered[sec.current] = { chosen, correct };
  if (chosen === correct) { sec.score += 1; sec.earnedBall += (q.ball || 1); }
  twRenderSection(document.getElementById("tw-sec-content"), sec, secIdx);
};

// ── Keyingi savol ──
window.twNextSec = function (secIdx) {
  const sec = window.__twState.secStates[secIdx];
  if (sec.current < sec.questions.length - 1) sec.current += 1;
  twRenderSection(document.getElementById("tw-sec-content"), sec, secIdx);
};

// ── Sectionni tugatish ──
window.twFinishSec = function (secIdx) {
  window.__twState.secStates[secIdx].done = true;
  twRenderAll(document.getElementById("twBody"));
};

// ── Qayta boshlash — savollar yangi shuffle ──
window.twRestartSec = function (secIdx) {
  const moduleId = new URLSearchParams(window.location.search).get("id") || "m1";
  const sec      = window.__twState.secStates[secIdx];
  const mod      = (typeof GEOGAT_TESTS !== "undefined") ? GEOGAT_TESTS[moduleId] : null;

  if (mod && mod.sections && mod.sections[secIdx]) {
    const questions = [...mod.sections[secIdx].questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 300);
    sec.questions = questions;
    sec.totalBall = questions.reduce((s, q) => s + (q.ball || 1), 0);
  }

  sec.answered   = new Array(sec.questions.length).fill(null);
  sec.current    = 0;
  sec.score      = 0;
  sec.earnedBall = 0;
  sec.done       = false;
  twRenderAll(document.getElementById("twBody"));
};

// ── Butun modulni qayta boshlash ──
window.twRestart = function () {
  const moduleId = new URLSearchParams(window.location.search).get("id") || "m1";
  twInit(moduleId);
};


// ══════════════════════════════════════════════════
// UTIL
// ══════════════════════════════════════════════════

function field(label, val) {
  if (!val) return "";
  return `
    <div class="fieldBlock">
      <div class="fieldLabel">${label}</div>
      <div class="fieldVal">${esc(val)}</div>
    </div>`;
}

function esc(s) {
  return (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}