import { initializeApp }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore, doc, getDoc, collection, getDocs, query, orderBy
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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

/* ─── Modul metadata ─── */
const MODULE_META = {
  m1: { title:"Topografiya asoslari",     emoji:"🏔️", color:"linear-gradient(135deg,#4caf7d,#2e7d52)", level:"Boshlang'ich", lessons:6,  weeks:2, keywords:"topografiya masshtab koordinata relyef xarita" },
  m2: { title:"Kartografiya",             emoji:"🧭", color:"linear-gradient(135deg,#2196c4,#0d5a8a)", level:"O'rta",        lessons:6,  weeks:2, keywords:"kartografiya xarita proyeksiya generalizatsiya" },
  m3: { title:"GAT (GIS) — ArcGIS/QGIS", emoji:"🗺️", color:"linear-gradient(135deg,#7c4dac,#4a2a7a)", level:"O'rta",        lessons:8,  weeks:3, keywords:"GIS ArcGIS QGIS vektor rastr fazoviy tahlil" },
  m4: { title:"Masofadan zondlash",       emoji:"🛰️", color:"linear-gradient(135deg,#1a3a6e,#3a7bd5)", level:"O'rta",        lessons:6,  weeks:2, keywords:"masofadan zondlash sun'iy yo'ldosh NDVI" },
  m5: { title:"Kadastr va geodeziya",     emoji:"🏗️", color:"linear-gradient(135deg,#c47a1a,#8a5010)", level:"Boshlang'ich", lessons:6,  weeks:2, keywords:"kadastr geodeziya yer uchastkasi o'lchash" },
  m6: { title:"Amaliy loyiha",            emoji:"📐", color:"linear-gradient(135deg,#2e7d4a,#1a4a28)", level:"Advanced",     lessons:10, weeks:4, keywords:"amaliy loyiha tahlil xarita hisobot" }
};

const LEVEL_COLOR = {
  "Boshlang'ich":"#27ae60",
  "O'rta":"#1a6fc4",
  "Advanced":"#c0392b"
};

/* Lesson card ranglari — rotatsiya bilan */
const CARD_COLORS = [
  "linear-gradient(135deg,#7c4dce,#9b6dfe)",
  "linear-gradient(135deg,#e8462a,#f0932b)",
  "linear-gradient(135deg,#8236b0,#c56cf0)",
  "linear-gradient(135deg,#b8922f,#e1c04a)",
  "linear-gradient(135deg,#2c3e96,#5c8ef8)",
  "linear-gradient(135deg,#218c74,#33d9b2)",
  "linear-gradient(135deg,#d35400,#f39c12)",
  "linear-gradient(135deg,#1a3a6e,#3498db)",
  "linear-gradient(135deg,#6c2fa0,#e040fb)",
  "linear-gradient(135deg,#1a5f2e,#4caf50)",
];

const CARD_EMOJIS = ["📚","✏️","🗺️","🧭","💡","📐","🔬","📖","🌍","🎯","🧩","📊"];

/* ─── Joriy holat ─── */
let _mid = null, _lid = null, _lname = "", _lnum = 1, _lcolor = CARD_COLORS[0];

/* ─── Yil ─── */
document.querySelectorAll("#y").forEach(el => el.textContent = new Date().getFullYear());


/* ══════════════════════════════════════════════
   1. COURSES.HTML — modullar katalogi
══════════════════════════════════════════════ */
window.renderModules = function (query = "") {
  const grid = document.getElementById("modulesGrid");
  if (!grid) return;
  const q = (query || "").toLowerCase().trim();
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
    const m = MODULE_META[id];
    const num = id.replace("m","");
    const lvlColor = LEVEL_COLOR[m.level] || "#666";
    return `
      <div class="moduleCard" onclick="window.location.href='course.html?id=${id}'" style="cursor:pointer">
        <div class="moduleThumb" style="background:${m.color};position:relative;overflow:hidden">
          <img src="assets/courses/module${num}.jpg" alt="${esc(m.title)}"
               style="width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;opacity:0.85"
               onerror="this.style.display='none'">
          <span class="moduleEmoji" style="position:relative;z-index:1">${m.emoji}</span>
          <span class="moduleBadge" style="background:${lvlColor};position:absolute;top:10px;left:10px;z-index:1;font-size:11px;font-weight:700;padding:3px 11px;border-radius:20px;color:#fff;text-transform:uppercase">${m.level}</span>
          <span style="position:absolute;bottom:8px;right:10px;z-index:1;background:rgba(0,0,0,.5);color:#fff;font-size:11px;font-weight:600;padding:3px 10px;border-radius:20px;backdrop-filter:blur(4px)">${num}-modul</span>
        </div>
        <div class="moduleBody">
          <div class="moduleTitle">${m.title}</div>
          <div class="moduleMeta">⏱ ${m.lessons} ta dars &nbsp;·&nbsp; 📅 ${m.weeks} hafta</div>
          <a class="moduleBtn" href="course.html?id=${id}">Kursga kirish →</a>
        </div>
      </div>`;
  }).join("");
};


/* ══════════════════════════════════════════════
   2. COURSE.HTML — modul sahifasi (mavzular)
══════════════════════════════════════════════ */
window.loadCoursePage = async function () {
  const params = new URLSearchParams(window.location.search);
  _mid = params.get("id") || "m1";
  const meta = MODULE_META[_mid];
  document.title = `GeoGAT — ${meta ? meta.title : _mid}`;

  /* Hero to'ldirish */
  if (meta) {
    _el("navModTitle",  meta.title);
    _el("heroTitle",    meta.title);
    _el("heroLevel",    meta.level);
    _el("heroMeta",     `⏱ ${meta.lessons} ta dars · 📅 ${meta.weeks} hafta`);
    _el("heroEmoji",    meta.emoji, true);
    const heroEl = document.getElementById("moduleHero");
    if (heroEl) heroEl.style.background = meta.color;
  }

  /* Mavzularni yuklash */
  const lessons = await _fetchLessons(_mid);
  _renderLessonCards(_mid, lessons);
};


/* ─── Firebase: mavzularni olish ─── */
async function _fetchLessons(mid) {
  try {
    const q    = query(collection(db, "modules", mid, "lessons"), orderBy("order","asc"));
    const snap = await getDocs(q);
    const list = [];
    snap.forEach(d => list.push({ id: d.id, ...d.data() }));
    return list;
  } catch (e) {
    console.error(e);
    return [];
  }
}


/* ─── Mavzular — rangli banner kartalar ─── */
function _renderLessonCards(mid, lessons) {
  const wrap = document.getElementById("lessonsWrap");
  if (!wrap) return;

  if (!lessons.length) {
    wrap.innerHTML = `
      <div class="emptyLessons">
        <div class="el-icon">📭</div>
        <p>Mavzular hali qo'shilmagan</p>
        <small>Admin panel orqali mavzular qo'shing</small>
      </div>`;
    return;
  }

  wrap.innerHTML = lessons.map((l, i) => {
    const color = CARD_COLORS[i % CARD_COLORS.length];
    const emoji = CARD_EMOJIS[i % CARD_EMOJIS.length];
    return `
      <div class="lessonCard"
           style="background:${color}"
           onclick="window.selectLesson('${mid}','${esc(l.id)}','${escAttr(l.name)}',${i+1},'${escAttr(color)}')">
        <div class="lcLeft">
          <div class="lcNum">${i+1}-mavzu</div>
          <div class="lcTitle">${esc(l.name)}</div>
          <div class="lcDesc">O'rganish uchun bosing →</div>
        </div>
        <div class="lcRight">${emoji}</div>
      </div>`;
  }).join("");
}


/* ══════════════════════════════════════════════
   3. MAVZU TANLASH — contentView ga o'tish
══════════════════════════════════════════════ */
window.selectLesson = function (mid, lid, lname, lnum, lcolor) {
  _mid    = mid;
  _lid    = lid;
  _lname  = lname;
  _lnum   = lnum || 1;
  _lcolor = lcolor || CARD_COLORS[0];

  const meta = MODULE_META[mid] || {};

  /* Views almashtirish */
  const lv = document.getElementById("lessonsView");
  const cv = document.getElementById("contentView");
  if (lv) lv.style.display = "none";
  if (cv) cv.style.display = "block";

  /* Lesson hero */
  _el("contentNavTitle", lname);
  _el("lhbNum",  String(_lnum), true);
  _el("lhbName", lname);
  _el("lhbMeta", `${meta.emoji || ""} ${meta.title || mid}`);
  const banner = document.getElementById("lessonHeroBanner");
  if (banner) banner.style.background = _lcolor;

  /* Bo'limlar tabs */
  const SECTIONS = [
    { key:"text",      label:"📝 Matn"       },
    { key:"video",     label:"🎬 Video"       },
    { key:"files",     label:"📄 Fayllar"     },
    { key:"practical", label:"✏️ Amaliy"      },
    { key:"test",      label:"✅ Test"         },
  ];
  const tabsEl = document.getElementById("secTabs");
  if (tabsEl) {
    tabsEl.innerHTML = SECTIONS.map((s, i) => `
      <button class="secTab ${i===0?"active":""}" data-sec="${s.key}"
              onclick="window.loadSection('${mid}','${esc(lid)}','${s.key}',this)">
        ${s.label}
      </button>`).join("");
  }

  /* Birinchi bo'limni yuklash */
  const firstTab = document.querySelector(".secTab");
  window.loadSection(mid, lid, "text", firstTab);

  /* Scroll tepaga */
  window.scrollTo(0, 0);
};


/* ─── Orqaga: mavzular ro'yxatiga ─── */
window._goBack = function () {
  _lid = null; _lname = "";
  const lv = document.getElementById("lessonsView");
  const cv = document.getElementById("contentView");
  if (cv) cv.style.display = "none";
  if (lv) lv.style.display = "block";
  window.scrollTo(0, 0);
};


/* ══════════════════════════════════════════════
   4. BO'LIM YUKLASH
   Path: modules/{mid}/lessons/{lid}/sections/{sec}
══════════════════════════════════════════════ */
window.loadSection = async function (mid, lid, secKey, tabEl) {
  /* Aktiv tab */
  document.querySelectorAll(".secTab").forEach(b => b.classList.remove("active"));
  if (tabEl) tabEl.classList.add("active");

  const box = document.getElementById("contentBox");
  if (!box) return;
  box.innerHTML = `<div class="loadingState">⏳ Yuklanmoqda...</div>`;

  /* FAYLLAR — subcollection */
  if (secKey === "files") {
    try {
      const snap  = await getDocs(collection(db, "modules", mid, "lessons", lid, "files"));
      const files = [];
      snap.forEach(d => files.push({ id: d.id, ...d.data() }));
      box.innerHTML = _renderFiles(files);
    } catch (e) {
      box.innerHTML = `<div class="emptyState" style="color:#c00">❌ ${e.message}</div>`;
    }
    return;
  }

  /* Boshqa bo'limlar */
  try {
    const snap = await getDoc(doc(db, "modules", mid, "lessons", lid, "sections", secKey));
    if (!snap.exists()) {
      box.innerHTML = `<div class="emptyState">📭 Bu bo'lim hali to'ldirilmagan.</div>`;
      return;
    }
    const d = snap.data();
    switch (secKey) {
      case "text":      box.innerHTML = _renderText(d);      break;
      case "video":     box.innerHTML = _renderVideo(d);     break;
      case "practical": box.innerHTML = _renderPractical(d); break;
      case "test":
        box.innerHTML = _renderTestShell(d);
        _twInit(d);
        break;
      default:
        box.innerHTML = `<pre style="font-size:12px;overflow:auto">${JSON.stringify(d,null,2)}</pre>`;
    }
  } catch (e) {
    box.innerHTML = `<div class="emptyState" style="color:#c00">❌ Xato: ${e.message}</div>`;
  }
};


/* ══════════════════════════════════════════════
   RENDER FUNKSIYALARI
══════════════════════════════════════════════ */

/* ─── 📝 Matn ─── */
/* Admin: { title, intro, body (HTML), bullets[] } */
function _renderText(d) {
  if (!d.title && !d.intro && !d.body && !(d.bullets||[]).length)
    return `<div class="emptyState">📭 Matn hali to'ldirilmagan.</div>`;

  const title   = d.title   ? `<div class="secMainTitle">${esc(d.title)}</div>` : "";
  const intro   = d.intro   ? `<div class="secIntro">${esc(d.intro)}</div>` : "";
  const body    = d.body    ? `<div class="textBody">${d.body}</div>` : ""; /* HTML as-is */
  const bullets = (d.bullets||[]).filter(Boolean);
  const bhtml   = bullets.length
    ? `<div class="fieldLabel">Asosiy tushunchalar</div>
       <ul class="bulletsList">${bullets.map(b=>`<li>${esc(b)}</li>`).join("")}</ul>` : "";

  return `${title}${intro}${body}${bhtml}`;
}

/* ─── 🎬 Video ─── */
/* Admin: { videoUrl, videoName, desc, comments[] } */
function _renderVideo(d) {
  const vid = d.videoUrl
    ? `<div class="videoWrap">
         <video controls>
           <source src="${esc(d.videoUrl)}"/>
           Brauzer video formatini qo'llab-quvvatlamaydi.
         </video>
       </div>`
    : `<div class="emptyState">📭 Video hali yuklanmagan.</div>`;

  const desc = d.desc
    ? `<div class="videoDesc">📋 ${esc(d.desc)}</div>` : "";

  const comments = (d.comments||[]);
  const chtml = comments.length
    ? `<div class="fieldLabel" style="margin-top:18px">💬 Izohlar (${comments.length})</div>
       ${comments.map(c=>`
         <div class="commentCard">
           <div class="commentText">${esc(c.text)}</div>
           <div class="commentMeta">${esc(c.date||"")}</div>
         </div>`).join("")}` : "";

  return `<div class="secMainTitle">🎬 Video dars</div>${vid}${desc}${chtml}`;
}

/* ─── 📄 Fayllar ─── */
function _renderFiles(files) {
  if (!files.length)
    return `<div class="secMainTitle">📄 Fayllar</div><div class="emptyState">📭 Fayllar hali yuklanmagan.</div>`;

  const items = files.map(f => {
    const ext  = (f.type||"").toUpperCase();
    const icon = ext==="PDF"?"📕":(ext==="PPTX"||ext==="PPT")?"📊":ext==="DOCX"?"📝":"📄";
    return `
      <a class="fileCard" href="${esc(f.url)}" target="_blank">
        <span class="fileCardIcon">${icon}</span>
        <div style="flex:1;min-width:0">
          <div class="fileCardName">${esc(f.name||f.fileName||"Fayl")}</div>
          <div class="fileCardExt">${ext}</div>
        </div>
        <span class="fileCardDl">⬇️</span>
      </a>`;
  }).join("");

  return `<div class="secMainTitle">📄 Fayllar</div>${items}`;
}

/* ─── ✏️ Amaliy ─── */
/* Admin: { title, steps[], task } */
function _renderPractical(d) {
  if (!d.title && !(d.steps||[]).length && !d.task)
    return `<div class="emptyState">📭 Amaliy topshiriq hali to'ldirilmagan.</div>`;

  const title = d.title
    ? `<div class="secMainTitle">✏️ ${esc(d.title)}</div>` : `<div class="secMainTitle">✏️ Amaliy mashg'ulot</div>`;

  const steps = (d.steps||[]).filter(Boolean);
  const shtml = steps.length
    ? `<div class="fieldLabel">Qadamlar</div>
       ${steps.map((s,i)=>`
         <div class="stepItem">
           <span class="stepNum">${i+1}</span>
           <span>${esc(s)}</span>
         </div>`).join("")}` : "";

  const task = d.task
    ? `<div class="highlightBox">📌 Vazifa: ${esc(d.task)}</div>` : "";

  return `${title}${shtml}${task}`;
}

/* ─── ✅ Test — shell ─── */
/* Admin: { name, passScore, timeLimit, questions:[{text,options:[],correct:0}] } */
function _renderTestShell(d) {
  return `
    <div class="twHeader">
      <div class="twName">✅ ${esc(d.name||"Test")}</div>
      <div class="twMeta">
        📊 ${(d.questions||[]).length} ta savol
        ${d.timeLimit ? ` · ⏱ ${d.timeLimit} daq.` : ""}
        · O'tish: ${d.passScore||60}%
      </div>
    </div>
    <div id="twContent"></div>`;
}

/* ── Test state & render ── */
let __tw = null;

function _twInit(d) {
  if (!d.questions || !d.questions.length) {
    const el = document.getElementById("twContent");
    if (el) el.innerHTML = `<div class="emptyState">📭 Savollar yo'q.</div>`;
    return;
  }
  __tw = {
    questions: [...d.questions].sort(()=>Math.random()-.5),
    answered:  new Array(d.questions.length).fill(null),
    current:   0,
    score:     0,
    done:      false,
    passScore: parseInt(d.passScore)||60,
    total:     d.questions.length
  };
  _twRender();
}

function _twRender() {
  const box = document.getElementById("twContent");
  if (!box || !__tw) return;

  /* Natija */
  if (__tw.done) {
    const pct = Math.round((__tw.score / __tw.total) * 100);
    let emoji, msg, cls;
    if      (pct >= 80)              { emoji="🏆"; msg="A'lo natija! Mukammal o'zlashtirdingiz.";    cls="twGreat"; }
    else if (pct >= __tw.passScore)  { emoji="👍"; msg="Yaxshi natija! Yana bir oz mashq qiling.";   cls="twOk";    }
    else                             { emoji="📚"; msg="Materialni qayta o'qib, yana urinib ko'ring!"; cls="twLow"; }

    box.innerHTML = `
      <div class="twResult ${cls}">
        <div class="twResEmoji">${emoji}</div>
        <div class="twResScore">${__tw.score} / ${__tw.total} to'g'ri</div>
        <div class="twResPct">${pct}%</div>
        <div class="twResMsg">${msg}</div>
        <button class="twRestartBtn" onclick="_twRestart()">🔄 Qayta boshlash</button>
      </div>`;
    return;
  }

  /* Savol */
  const q   = __tw.questions[__tw.current];
  const ans = __tw.answered[__tw.current];
  const pct = Math.round((__tw.current / __tw.total) * 100);

  const opts = (q.options||[]).map((opt, i) => {
    if (opt === undefined || opt === "") return "";
    let cls = "twOpt", suf = "";
    if (ans !== null) {
      if      (i === q.correct)               { cls += " twCorrect"; suf = " ✅"; }
      else if (i === ans.chosen)              { cls += " twWrong";   suf = " ❌"; }
      else                                    { cls += " twDisabled"; }
    }
    const letter = ["A","B","C","D"][i] || (i+1);
    return `
      <button class="${cls}" ${ans!==null?"disabled":""} onclick="_twAnswer(${i})">
        <span class="twOptLetter">${letter}</span>
        <span>${esc(opt)}${suf}</span>
      </button>`;
  }).join("");

  let feedback = "";
  if (ans !== null) {
    const correct = q.options[q.correct] || "";
    feedback = ans.chosen === q.correct
      ? `<div class="twFeedback twFbOk">✅ To'g'ri javob!</div>`
      : `<div class="twFeedback twFbErr">❌ Noto'g'ri. To'g'ri: <strong>${esc(correct)}</strong></div>`;
  }

  const isLast = __tw.current === __tw.total - 1;
  const btn = ans !== null
    ? `<button class="twNextBtn" onclick="${isLast ? "_twFinish()" : "_twNext()"}">
         ${isLast ? "Natijani ko'rish 🏁" : "Keyingi savol →"}
       </button>` : "";

  box.innerHTML = `
    <div class="twProgress"><div class="twBar" style="width:${pct}%"></div></div>
    <div class="twProgLabel">
      <span>${__tw.current+1} / ${__tw.total} savol</span>
      <span>✅ ${__tw.score} to'g'ri</span>
    </div>
    <div class="twQuestion">
      <span class="twQNum">Savol ${__tw.current+1}</span>
      <span class="twQText">${esc(q.text)}</span>
    </div>
    <div class="twOptions">${opts}</div>
    ${feedback}${btn}`;
}

window._twAnswer = function(idx) {
  if (!__tw || __tw.answered[__tw.current] !== null) return;
  __tw.answered[__tw.current] = { chosen: idx };
  if (idx === __tw.questions[__tw.current].correct) __tw.score++;
  _twRender();
};
window._twNext   = function() { if (__tw && __tw.current < __tw.total-1) { __tw.current++; _twRender(); } };
window._twFinish = function() { if (__tw) { __tw.done = true; _twRender(); } };
window._twRestart = function() {
  if (!__tw) return;
  __tw.questions = [...__tw.questions].sort(()=>Math.random()-.5);
  __tw.answered  = new Array(__tw.total).fill(null);
  __tw.current   = 0;
  __tw.score     = 0;
  __tw.done      = false;
  _twRender();
};


/* ══════════════════════════════════════════════
   UTIL
══════════════════════════════════════════════ */
function esc(s)     { return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function escAttr(s) { return (s||"").replace(/'/g,"\\'").replace(/"/g,"&quot;"); }
function _el(id, txt, inner=false) {
  const el = document.getElementById(id);
  if (el) { if (inner) el.innerHTML = txt; else el.textContent = txt; }
}
