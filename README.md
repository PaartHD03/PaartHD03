<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Paarth Doshi — Multi-Theme Portfolio README</title>
  <style>
    :root{--bg:#0b0b0b;--muted:#9aa3b2;--accent:#00f7ff;--glass:rgba(255,255,255,0.04)}
    *{box-sizing:border-box;font-family:Inter,Segoe UI,Roboto,Arial,sans-serif}
    body{margin:0;background:linear-gradient(180deg,#060606 0%, #0d0d10 100%);color:#e6eef6;min-height:100vh}
    .wrap{max-width:980px;margin:28px auto;padding:22px;background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01));border-radius:14px;box-shadow:0 8px 30px rgba(2,6,23,0.7)}
    header{display:flex;gap:18px;align-items:center}
    .avatar{width:84px;height:84px;border-radius:12px;flex:0 0 84px;background:linear-gradient(135deg,#ff4d4d,#b30000);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:28px;color:white}
    h1{margin:0;font-size:20px}
    .role{color:var(--muted);margin-top:6px}
    .tagline{margin:12px 0 0;color:#ffdada}

    /* NAV */
    .nav{display:flex;gap:8px;margin:18px 0;flex-wrap:wrap}
    .btn{background:var(--glass);padding:8px 12px;border-radius:10px;border:1px solid rgba(255,255,255,0.04);cursor:pointer;color:var(--muted);font-weight:600}
    .btn.active{background:linear-gradient(90deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01));color:#fff}

    /* Banner SVG */
    .banner{width:100%;border-radius:10px;overflow:hidden;margin:10px 0}
    .banner svg{display:block;width:100%;height:160px}

    /* THEMES */
    .theme{display:none;padding:16px;border-radius:10px;margin-top:14px;background:linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0.005));}
    .theme.active{display:block}

    /* DARK RED THEME */
    .dark-red{--main:#ff5252;--bg2:#1a0b0b;background:linear-gradient(180deg,#140707,#0b0303);color:#ffd1d1}
    .dark-red .card{background:linear-gradient(180deg,rgba(255,82,82,0.06),rgba(0,0,0,0.12));border:1px solid rgba(255,82,82,0.12);padding:12px;border-radius:8px}

    /* CYBERPUNK NEON THEME */
    .neon{background:linear-gradient(180deg,#020617 0%,#07021a 100%);color:#bfefff}
    .neon .glow{padding:12px;border-radius:10px;background:linear-gradient(90deg,rgba(0,247,255,0.04),rgba(255,0,200,0.03));box-shadow:0 0 30px rgba(0,247,255,0.06) inset}
    .neon h2{color:#00f7ff;text-shadow:0 0 14px rgba(0,247,255,0.28)}
    .neon .pill{display:inline-block;padding:6px 10px;border-radius:999px;border:1px solid rgba(0,247,255,0.12);background:rgba(0,0,0,0.25);font-weight:700}

    /* ANIMATED README */
    .animated .ticker{overflow:hidden;white-space:nowrap}
    .ticker span{display:inline-block;padding-right:60px;animation:slide 12s linear infinite}
    @keyframes slide{0%{transform:translateX(0)}100%{transform:translateX(-100%)}}

    /* MINIMAL CLEAN */
    .minimal{background:transparent;color:#0b0b0b}
    .minimal .card{background:#fff;padding:14px;border-radius:10px;color:#111}

    /* Common cards grid */
    .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:12px}
    .card{padding:12px;border-radius:8px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.03)}

    /* footer */
    footer{margin-top:18px;font-size:13px;color:var(--muted);text-align:center}

    /* responsive */
    @media(max-width:720px){.grid{grid-template-columns:1fr}.avatar{width:64px;height:64px}}
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <div class="avatar">PD</div>
      <div>
        <h1>👋 Hi, I'm <strong>Paarth Doshi</strong></h1>
        <div class="role">Data Scientist | QA Engineer | Python | SQL | Java | Selenium</div>
        <div class="tagline">💡 "If data can update every day, why shouldn’t I? Growth is my default mode."</div>
      </div>
    </header>

    <nav class="nav" aria-label="Theme selector">
      <button class="btn active" data-target="dark-red">Dark Red Theme</button>
      <button class="btn" data-target="neon">Cyberpunk Neon</button>
      <button class="btn" data-target="banner">Portfolio Banner</button>
      <button class="btn" data-target="animated">Animated README</button>
      <button class="btn" data-target="minimal">Minimal Clean</button>
    </nav>

    <!-- Banner -->
    <div class="banner" id="banner-preview">
      <!-- Inline SVG banner (red-to-neon blend) -->
      <svg viewBox="0 0 1200 240" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stop-color="#b30000" />
            <stop offset="50%" stop-color="#ff4d4d" />
            <stop offset="100%" stop-color="#00f7ff" />
          </linearGradient>
          <filter id="f1" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="14" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <rect width="1200" height="240" fill="#050005"/>
        <g filter="url(#f1)">
          <rect x="0" y="0" width="1200" height="240" fill="url(#g1)" opacity="0.08" />
        </g>
        <g>
          <text x="50" y="120" font-family="Segoe UI, Roboto, Arial" font-size="48" fill="white" font-weight="700">Paarth Doshi</text>
          <text x="50" y="162" font-family="Segoe UI, Roboto, Arial" font-size="16" fill="#ffdada">Data Scientist • QA Engineer • Python • SQL • Java • Selenium</text>
          <text x="980" y="40" font-family="Courier New, monospace" font-size="14" fill="#00f7ff">⭐ GitHub: PaartHD03</text>
        </g>
      </svg>
    </div>

    <!-- DARK RED THEME -->
    <section id="dark-red" class="theme active dark-red">
      <div class="grid">
        <div class="card">
          <h3>🎯 Snapshot</h3>
          <p class="muted">Data Scientist & QA Engineer — Python, SQL, Java, Selenium. Passion for automation & analytics.</p>
          <ul>
            <li>🔥 <strong>Projects:</strong> 18+</li>
            <li>📚 <strong>Certifications:</strong> 10+</li>
            <li>🛠 <strong>Tech stacks:</strong> 12+</li>
          </ul>
        </div>
        <div class="card">
          <h3>🏫 Education</h3>
          <p>B.Tech — CSBS, Ramrao Adik Institute of Technology (CGPA 8.2/10)</p>
        </div>
        <div class="card">
          <h3>💼 Experience</h3>
          <p>Data Scientist Intern — ETLHive<br>Data Analyst Intern — IDBI Bank<br>Automation Tester — Cognizant (GenC)</p>
        </div>
        <div class="card">
          <h3>📬 Contact</h3>
          <p>paarthdoshi777@gmail.com<br>github.com/PaartHD03<br>linkedin.com/in/</p>
        </div>
      </div>
    </section>

    <!-- NEON THEME -->
    <section id="neon" class="theme neon">
      <div class="glow">
        <h2>⚡ Cyberpunk Neon</h2>
        <p>Interactive, high-contrast theme with neon accents for a bold presence.</p>
      </div>
      <div class="grid">
        <div class="card">
          <h3 class="pill">Top Skills</h3>
          <p>Python • SQL • Java • Selenium • Pandas • Scikit-learn • Power BI</p>
        </div>
        <div class="card">
          <h3 class="pill">Featured Projects</h3>
          <ul>
            <li>House Price Prediction (India)</li>
            <li>Breast Cancer Analysis</li>
            <li>Admission Form Automation (Selenium)</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ANIMATED README -->
    <section id="animated" class="theme animated">
      <div class="card">
        <h3>✨ Animated README</h3>
        <p class="ticker"><span>Building ML models • Automating tests • Visualizing dashboards • Learning daily • Shipping features</span></p>
        <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">
          <div class="card" style="padding:8px;border-radius:8px">Typing animation</div>
          <div class="card" style="padding:8px;border-radius:8px">Progress bars</div>
          <div class="card" style="padding:8px;border-radius:8px">Live stats</div>
        </div>
      </div>
    </section>

    <!-- MINIMAL CLEAN -->
    <section id="minimal" class="theme minimal">
      <div class="card">
        <h3>Minimal Clean</h3>
        <p style="margin:0">Paarth Doshi — Data Scientist & QA Engineer</p>
        <p style="margin:6px 0 0;color:#6b7280">Python | SQL | Java | Selenium | Power BI</p>
      </div>
    </section>

    <footer>
      <div>Made with ♥ — Copy this HTML into an .html file. Note: GitHub README sanitizes scripts; JavaScript-driven interactivity won't run in README.md. To preserve interactivity and animations, host this file via <strong>GitHub Pages</strong> or open locally.</div>
    </footer>
  </div>

  <script>
    // Theme switching (works in browser, not in sanitized GitHub README)
    (function(){
      const buttons=document.querySelectorAll('.nav .btn');
      const themes=document.querySelectorAll('.theme');
      buttons.forEach(b=>b.addEventListener('click',e=>{
        buttons.forEach(x=>x.classList.remove('active'));
        b.classList.add('active');
        const t=b.dataset.target;
        themes.forEach(s=>{s.classList.remove('active')});
        const sel=document.getElementById(t);
        if(sel) sel.classList.add('active');
        // special: if banner selected, show preview area (banner already visible)
      }));
    })();
  </script>
</body>
</html>
