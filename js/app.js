// ═══════════════════════════════════════════════════════
// SAFe SSM Exam Prep — App Logic
// ═══════════════════════════════════════════════════════

// ── PANEL SWITCHING ────────────────────────────────────
function showPanel(id, btn) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
  btn.classList.add('active');
  if (id === 'flash') renderCard();
  if (id === 'quiz') initQuiz();
}

// ── ACCORDION ─────────────────────────────────────────
function tog(h) {
  const body = h.nextElementSibling;
  const isOpen = body.classList.contains('open');
  document.querySelectorAll('.lesson-body').forEach(x => x.classList.remove('open'));
  document.querySelectorAll('.lesson-header').forEach(x => x.classList.remove('open'));
  if (!isOpen) { body.classList.add('open'); h.classList.add('open'); }
}

// ── FLASHCARD STATE ───────────────────────────────────
let filteredCards = [...CARDS];
let currentCard = 0;

function filterCards() {
  const val = document.getElementById('fc-filter').value;
  filteredCards = val === 'all' ? [...CARDS] : CARDS.filter(c => c.cat === val);
  currentCard = 0;
  document.getElementById('fc-inner').classList.remove('flipped');
  renderCard();
}

function renderCard() {
  if (!filteredCards.length) return;
  const c = filteredCards[currentCard];
  document.getElementById('fc-q').textContent = c.q;
  document.getElementById('fc-a').textContent = c.a;
  const label = CAT_LABELS[c.cat] || c.cat.toUpperCase();
  document.getElementById('fc-cat-front').textContent = label;
  document.getElementById('fc-cat-back').textContent = label;
  document.getElementById('fc-counter').textContent = `Card ${currentCard + 1} of ${filteredCards.length}`;
  document.getElementById('fc-pbar').style.width = ((currentCard + 1) / filteredCards.length * 100) + '%';
  document.getElementById('fc-inner').classList.remove('flipped');
}

function flipCard() {
  document.getElementById('fc-inner').classList.toggle('flipped');
}

function nextCard() {
  currentCard = (currentCard + 1) % filteredCards.length;
  renderCard();
}

function prevCard() {
  currentCard = (currentCard - 1 + filteredCards.length) % filteredCards.length;
  renderCard();
}

function shuffleCards() {
  filteredCards.sort(() => Math.random() - 0.5);
  currentCard = 0;
  renderCard();
}

// ── QUIZ STATE ────────────────────────────────────────
let quizMode = 'full';
let shuffledQ = [];
let qIndex = 0;
let score = 0;
let answered = false;
let domainScores = { D1: [0, 0], D2: [0, 0], D3: [0, 0], D4: [0, 0] };

function setMode(m, btn) {
  quizMode = m;
  document.querySelectorAll('.qmode-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function initQuiz() {
  let pool = QUESTIONS;
  if (quizMode === 'd1') pool = QUESTIONS.filter(q => q.d === 'D1');
  else if (quizMode === 'd2') pool = QUESTIONS.filter(q => q.d === 'D2');
  else if (quizMode === 'd3') pool = QUESTIONS.filter(q => q.d === 'D3');
  else if (quizMode === 'd4') pool = QUESTIONS.filter(q => q.d === 'D4');

  shuffledQ = [...pool].sort(() => Math.random() - 0.5);
  if (quizMode === 'full') shuffledQ = shuffledQ.slice(0, 45);

  qIndex = 0; score = 0; answered = false;
  domainScores = { D1: [0, 0], D2: [0, 0], D3: [0, 0], D4: [0, 0] };

  document.getElementById('q-result').classList.remove('show');
  document.getElementById('q-box').style.display = 'block';
  renderQuestion();
}

function renderQuestion() {
  if (qIndex >= shuffledQ.length) { showResult(); return; }
  answered = false;

  const q = shuffledQ[qIndex];
  const pct = Math.round((qIndex / shuffledQ.length) * 100);
  document.getElementById('q-bar').style.width = pct + '%';
  document.getElementById('q-count').textContent = `${qIndex + 1} / ${shuffledQ.length}`;
  document.getElementById('q-live').textContent = `${score} correct`;
  document.getElementById('q-domain').textContent = `${q.d} · ${q.t}`;
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('q-exp').textContent = q.e;
  document.getElementById('q-exp').classList.remove('show');
  document.getElementById('q-next').classList.remove('show');
  document.getElementById('q-skip').classList.add('show');

  const letters = ['A', 'B', 'C', 'D'];
  const opts = document.getElementById('q-opts');
  opts.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'qopt';
    btn.innerHTML = `<span class="ol">${letters[i]}</span>${opt}`;
    btn.onclick = () => selectAnswer(i);
    opts.appendChild(btn);
  });
}

function selectAnswer(idx) {
  if (answered) return;
  answered = true;

  const q = shuffledQ[qIndex];
  const btns = document.querySelectorAll('.qopt');
  btns.forEach(b => b.disabled = true);
  document.getElementById('q-skip').classList.remove('show');

  if (q.d in domainScores) domainScores[q.d][1]++;
  if (idx === q.c) {
    btns[idx].classList.add('correct');
    score++;
    if (q.d in domainScores) domainScores[q.d][0]++;
  } else {
    btns[idx].classList.add('wrong');
    btns[q.c].classList.add('correct');
  }

  document.getElementById('q-exp').classList.add('show');
  document.getElementById('q-next').classList.add('show');
}

function nextQuestion() {
  qIndex++;
  renderQuestion();
}

function showResult() {
  document.getElementById('q-box').style.display = 'none';
  const result = document.getElementById('q-result');
  result.classList.add('show');

  const pct = Math.round((score / shuffledQ.length) * 100);
  document.getElementById('r-score').textContent = score;
  document.getElementById('r-total').textContent = `out of ${shuffledQ.length} questions`;
  document.getElementById('r-pct').textContent = pct + '%';

  const pass = pct >= 73;
  document.getElementById('r-pass').textContent = pass ? '✅ PASS (≥73%)' : '❌ BELOW PASSING (need 73%)';
  document.getElementById('r-pass').style.color = pass ? '#10c98f' : '#f05252';

  const bar = document.getElementById('r-bar');
  bar.style.width = pct + '%';
  bar.style.background = pct >= 73 ? '#10c98f' : pct >= 50 ? '#f5a623' : '#f05252';
  document.getElementById('r-score').style.color = pct >= 73 ? '#10c98f' : pct >= 50 ? '#f5a623' : '#f05252';

  let msg, sub;
  if (pct >= 85) { msg = '🎉 Excellent — you\'re exam ready!'; sub = 'Strong understanding across all domains. Book your exam!'; }
  else if (pct >= 73) { msg = '✅ Passing score — keep reviewing!'; sub = 'Focus on missed questions before your exam date.'; }
  else if (pct >= 55) { msg = '📚 Getting closer — keep studying'; sub = 'Review the Study Guide for weak domains, then retry.'; }
  else { msg = '🔄 More study time needed'; sub = 'Start with the Study Guide, work through all flashcards, then retry.'; }

  document.getElementById('r-msg').textContent = msg;
  document.getElementById('r-sub').textContent = sub;

  // Domain breakdown
  const dnames = { D1: 'Domain 1 — Scrum', D2: 'Domain 2 — SM Role', D3: 'Domain 3 — Events', D4: 'Domain 4 — ART' };
  let html = '<div class="db-title">Domain Breakdown</div>';
  Object.keys(domainScores).forEach(d => {
    const [correct, total] = domainScores[d];
    if (total === 0) return;
    const dp = Math.round((correct / total) * 100);
    html += `<div class="db-row">
      <div class="db-label">${dnames[d]}</div>
      <div class="db-bar-wrap"><div class="db-bar" style="width:${dp}%;background:${dp >= 73 ? '#10c98f' : '#f5a623'}"></div></div>
      <div class="db-pct">${correct}/${total}</div>
    </div>`;
  });
  document.getElementById('r-breakdown').innerHTML = html;

  document.getElementById('q-bar').style.width = '100%';
  document.getElementById('q-count').textContent = `${score} / ${shuffledQ.length} correct`;
  document.getElementById('q-live').textContent = pct + '%';
}

function restartQuiz() {
  initQuiz();
}

// ── INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCard();
});
