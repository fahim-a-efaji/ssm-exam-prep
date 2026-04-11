# SAFe® Scrum Master (SSM 6.0) Exam Prep

> A free, open-source web app to help you pass the SAFe® Scrum Master certification exam.  
> **120 flashcards · 100 practice questions · Full study guide — all from the official SSM 6.0 workbook.**

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=flat-square)](https://yourusername.github.io/ssm-exam-prep)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## 📋 Exam at a Glance

| Detail | Info |
|--------|------|
| **Exam Name** | SAFe® Scrum Master (SSM) |
| **Version** | 6.0 |
| **Questions** | 45 multiple choice |
| **Time Limit** | 90 minutes |
| **Passing Score** | 73% (33/45 correct) |
| **Format** | Web-based, closed book |
| **Attempts** | First attempt included; retakes available |

---

## 🎯 Exam Domains & Weights

| Domain | Topic | Weight | ~Questions |
|--------|-------|--------|------------|
| **D1** | Introducing Scrum in SAFe | 22–28% | 10–13 |
| **D2** | Defining the Scrum Master / Team Coach Role | 26–30% | 12–14 |
| **D3** | Supporting Team Events | 17–21% | 8–9 |
| **D4** | Supporting ART Events | 25–29% | 11–13 |

---

## 🚀 Features

### 📖 Study Guide
- All 6 SSM 6.0 workbook lessons distilled into exam-ready notes
- Accordion-style navigation — expand what you need
- Key concepts, terminology maps, comparison tables
- Color-coded exam tips and anti-pattern warnings
- Covers: Agile Manifesto, Scrum values/pillars, SAFe terminology, SM responsibilities, coaching behaviors, Tuckman stages, Lencioni dysfunctions, PI Planning, ROAM, I&A, Flow Accelerators, CALMR, and more

### 🃏 Flashcards (120 cards)
Filterable by 7 categories:
- **Agile Foundations** (15) — Manifesto, values, pillars, XP practices
- **Roles & Responsibilities** (20) — SM, PO, RTE, servant leadership, coaching
- **Events & Timeboxes** (20) — Planning, Sync, Refinement, Review, Retro
- **PI Planning & ART** (25) — PI Planning, ROAM, I&A, IP Iteration, ART events
- **Flow, Metrics & DevOps** (15) — Flow accelerators, CALMR, metrics, WIP
- **Key Terms & Definitions** (15) — Glossary of critical SAFe terms
- **Anti-Patterns** (10) — What NOT to do in every event

### ✏️ Practice Quiz (100 questions)
- **5 quiz modes:** Full Test (45 random, matching real exam) or drill by Domain 1–4
- Domain-by-domain score breakdown so you know exactly where to focus
- Pass/fail indicator against the real 73% threshold
- Every question shows the correct answer + explanation after answering
- Questions randomized each session

---

## 📁 Repository Structure

```
ssm-exam-prep/
├── index.html          # Main app (single-page)
├── css/
│   └── style.css       # All styles
├── js/
│   ├── data.js         # 120 flashcards + 100 quiz questions
│   └── app.js          # Application logic
├── README.md
├── .gitignore
└── LICENSE
```

---

## 🛠️ Setup & Deployment

### Run Locally
No build step required — just open the file:

```bash
git clone https://github.com/yourusername/ssm-exam-prep.git
cd ssm-exam-prep
open index.html   # macOS
# or
xdg-open index.html  # Linux
# or double-click index.html in File Explorer (Windows)
```

### Deploy to GitHub Pages
1. Push to GitHub
2. Go to **Settings → Pages**
3. Set Source to **Deploy from a branch**
4. Select **main** branch, **/ (root)** folder
5. Click **Save**
6. Your app will be live at `https://yourusername.github.io/ssm-exam-prep`

### Deploy to Netlify / Vercel
Drag and drop the repository folder into Netlify or connect your GitHub repo — no configuration needed.

---

## 📚 Content Sources

Questions and content are derived from:
- **Official SSM 6.0 Workbook** (Scaled Agile, Inc. — 2025.10.28 version)
- **Official SAFe® Framework** at scaledagileframework.com
- **Scaled Agile SSM 6.0 Study Guide** (support.scaledagile.com)
- **CodingNConcepts** SAFe SSM 6.0 exam questions
- **CertLibrary** SAFe Scrum Master exam questions
- **CertsHero** SSM 6.0 practice questions
- **ExamTopics** SAFe Scrum Master discussions
- **Quizlet** SSM 6.0 practice decks
- **Agilest.org** Official SSM sample test PDF

---

## 🗺️ Study Roadmap

Recommended prep sequence for exam success:

1. **Week 1:** Read Study Guide top-to-bottom — expand every section
2. **Week 1–2:** Work through all Flashcards in All Topics mode, then by category
3. **Week 2:** Take Full Test quizzes until consistently scoring ≥85%
4. **Week 2–3:** Drill weak domains using Domain-specific quiz modes
5. **Before exam:** Review anti-patterns (common trap questions) and ROAM / CALMR mnemonics

### Key Topics to Master (High exam frequency)
- ✅ **ROAM** — all 4 categories and what each means
- ✅ **CALMR** — all 5 letters and what each represents
- ✅ **IP Iteration** — 3 purposes + the anti-pattern (planning regular work)
- ✅ **I&A** — 3 parts + first step of Problem-Solving Workshop (agree on problem)
- ✅ **SM anti-patterns** — in every event (Planning, Retro, Review, I&A)
- ✅ **Who facilitates what** — SM vs RTE vs PO
- ✅ **Tuckman stages** — Forming → Storming → Norming → Performing
- ✅ **Lencioni's 5 dysfunctions** — base to top + how SAFe addresses each
- ✅ **PI Planning** — inputs, outputs, Day 1 vs Day 2, confidence vote
- ✅ **Velocity** — fully completed stories only; no partial credit
- ✅ **Iteration Retrospective** — SM only, team only, outputs go to Team Backlog

---

## 🤝 Contributing

Contributions are welcome! If you find an incorrect answer, want to add questions, or improve the study guide:

1. Fork the repository
2. Create a feature branch (`git checkout -b fix/question-42`)
3. Make your changes in `js/data.js` or `index.html`
4. Submit a pull request with a description of your changes

### Adding Questions
Questions follow this format in `js/data.js`:
```javascript
{
  d: 'D1',           // Domain: D1, D2, D3, or D4
  t: 'Topic Name',   // Short topic label shown in quiz
  q: 'Question text here?',
  opts: ['Option A', 'Option B', 'Option C', 'Option D'],
  c: 0,              // Correct answer index (0-based)
  e: 'Explanation why this answer is correct.'
}
```

### Adding Flashcards
```javascript
{
  cat: 'roles',      // Category: agile, roles, events, pi, flow, terms, anti
  q: 'Question text?',
  a: 'Answer text (use \\n for line breaks)'
}
```

---

## ⚠️ Disclaimer

This is an unofficial study tool created to help candidates prepare for the SAFe® Scrum Master certification. SAFe® is a registered trademark of Scaled Agile, Inc. This project is not affiliated with, endorsed by, or sponsored by Scaled Agile, Inc.

Content is based on publicly available SAFe framework documentation, the official workbook, and community-sourced practice questions. Always verify answers against official SAFe documentation at [scaledagileframework.com](https://scaledagileframework.com).

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details. Free to use, modify, and distribute.

---

*Built with ❤️ to help the SAFe community. Good luck on your exam! 🎉*
