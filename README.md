// App.jsx
// Default export: React component (single-file portfolio)
// Tailwind required. To use: create-react-app + Tailwind, paste this into src/App.jsx, add index.css with tailwind directives.

import React, { useState } from 'react';

const LINKS = {
  linkedin: 'https://www.linkedin.com/in/paarth-doshi/',
  github: 'https://github.com/PaartHD03',
  resume: 'https://drive.google.com/file/d/1Y_-EoNqk8gJUU1EIJtZ-qeAq7v_ZehIV/view?usp=sharing',
  etlhive_cert: 'https://drive.google.com/file/d/11Hj2ikMHtrPRaTVPdbVZ5pB5Ag8tLSRR/view?usp=sharing',
  folder_1: 'https://drive.google.com/drive/folders/1RGAkVo1INcG6R23VUzytkk2vwdzZ_Qvv?usp=sharing',
  folder_2: 'https://drive.google.com/drive/folders/1yGCe2GlQXVcYqJ7eu76T2Rb_LbUDBJNv?usp=sharing',
  other_cert: 'https://drive.google.com/file/d/1Umv1NJ1d29C5rXzuBhMW4KM58fjTmam6/view?usp=sharing'
}

export default function App() {
  const [theme, setTheme] = useState('neon');
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f16] text-slate-200 font-sans p-6">
      <div className="max-w-5xl mx-auto">
        {/* header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">PAARTH DOSHI</h1>
            <p className="text-sm opacity-70 mt-1 italic">If data can update every day, why shouldn’t I? Growth is my default mode.</p>
          </div>
          <div className="flex gap-3 items-center">
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="text-xs px-3 py-2 rounded-lg backdrop-blur-sm bg-white/5 border border-white/5 hover:bg-white/3">LinkedIn</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="text-xs px-3 py-2 rounded-lg backdrop-blur-sm bg-white/5 border border-white/5 hover:bg-white/3">GitHub</a>
            <button onClick={() => setTheme(theme === 'neon' ? 'glass' : 'neon')} className="text-xs px-3 py-2 rounded-lg bg-indigo-600/80 hover:bg-indigo-500">Toggle Theme</button>
          </div>
        </header>

        {/* Main grid */}
        <main className={`grid grid-cols-1 md:grid-cols-3 gap-6`}> 
          {/* Left: About & socials */}
          <section className={`col-span-1 p-5 rounded-2xl shadow-lg ${theme === 'neon' ? 'bg-gradient-to-br from-[#061021] via-[#021427] to-[#071827] border border-cyan-700/20' : 'bg-white/5'}`}>
            <h2 className="text-lg font-semibold mb-3">About Me</h2>
            <p className="text-sm opacity-80 mb-4">Aspiring Data Analyst with strong foundations in Python, SQL, BI tools, and end-to-end problem solving.</p>

            <h3 className="text-sm font-medium">Contact</h3>
            <ul className="text-sm mt-2 space-y-1 opacity-85">
              <li>📍 Navi Mumbai, India</li>
              <li>✉️ paarth.doshi3@gmail.com</li>
              <li>📞 +91-7021092739</li>
            </ul>

            <h3 className="mt-4 text-sm font-medium">Socials</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full text-xs bg-white/3">LinkedIn</a>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full text-xs bg-white/3">GitHub</a>
              <a href={LINKS.resume} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-full text-xs bg-white/3">View Resume</a>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium">Tech Stack</h3>
              <div className="mt-2 grid grid-cols-3 gap-2 text-xs opacity-90">
                <span className="py-1 px-2 rounded-md bg-white/3">Python</span>
                <span className="py-1 px-2 rounded-md bg-white/3">SQL</span>
                <span className="py-1 px-2 rounded-md bg-white/3">Power BI</span>
                <span className="py-1 px-2 rounded-md bg-white/3">Tableau</span>
                <span className="py-1 px-2 rounded-md bg-white/3">React</span>
                <span className="py-1 px-2 rounded-md bg-white/3">Django</span>
              </div>
            </div>

          </section>

          {/* Middle: Experience and Education */}
          <section className="col-span-2 p-6 rounded-2xl shadow-lg bg-white/3/5 backdrop-blur-sm">
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-semibold mb-3">Experience & Education</h2>
              <div className="text-xs opacity-70">Class of 2025</div>
            </div>

            <div className="space-y-4">
              <article className="p-4 rounded-lg border-l-4 border-cyan-400/60 bg-white/3">
                <h3 className="font-semibold">Cognizant — Analyst Trainee (Gen C)</h3>
                <div className="text-sm opacity-80">May 2025 – Sept 2025 • Coimbatore</div>
                <p className="mt-2 text-sm">Completed training in Java and SQL. Worked with SDLC, JIRA, and Agile methodologies.</p>
              </article>

              <article className="p-4 rounded-lg border-l-4 border-green-400/60 bg-white/3">
                <h3 className="font-semibold">Mumbai Metro Rail Corporation — Systems, IT Intern</h3>
                <div className="text-sm opacity-80">Jan 2025 – May 2025 • BKC</div>
                <p className="mt-2 text-sm">Helped build an AI chatbot for a webpage using Python, Hugging Face models, and Django.</p>
              </article>

              <article className="p-4 rounded-lg border-l-4 border-indigo-400/60 bg-white/3">
                <h3 className="font-semibold">ETLHive — Data Scientist Intern</h3>
                <div className="text-sm opacity-80">Nov 2023 – May 2024 • Pune</div>
                <p className="mt-2 text-sm">Worked on healthcare analytics and loan risk modelling using SQL, Power BI, and Python.</p>
              </article>

              <div className="mt-4">
                <h4 className="text-sm font-medium">Education</h4>
                <p className="text-sm opacity-80">B.Tech in Computer Science with Business Systems — RAIT (2021–2025). CGPA: 8.4/10</p>
              </div>

            </div>

            {/* Projects */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <ProjectCard title="House Price Prediction" desc="Regression model with feature engineering" tags={["Python","Scikit-Learn","SQL"]} live="#" code="https://github.com/PaartHD03/House-Price-Prediction"/>
                <ProjectCard title="Breast Cancer Analysis" desc="ML model to diagnose cancer using handcrafted features and CNN" tags={["Python","TensorFlow"]} code="https://github.com/PaartHD03/Breast-Cancer-Analysis"/>
              </div>
            </div>

            {/* Certificates gallery */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Certifications</h3>
              <div className="flex gap-3 mt-3">
                <CertCard title="ETLHive Internship" url={LINKS.etlhive_cert} />
                <CertCard title="Resume (PDF)" url={LINKS.resume} />
                <CertCard title="Other Certs & Folders" url={LINKS.folder_1} />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm opacity-80">Want the full resume or certificates? Click to open.</div>
              <div className="flex gap-3">
                <a href={LINKS.resume} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-cyan-500/90 text-xs">Open Resume</a>
                <a href={LINKS.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white/5 text-xs">View GitHub</a>
              </div>
            </div>

          </section>
        </main>

        {/* Footer */}
        <footer className="mt-10 text-center text-xs opacity-70">Built with ❤️ • Neo Aesthetic • Interactive portfolio — customize in <code>src/App.jsx</code></footer>

      </div>

      {/* Resume modal overlay (simple) */}
      {showResume && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70" onClick={() => setShowResume(false)}>
          <div className="w-[90%] md:w-3/4 bg-white/5 p-4 rounded-xl">
            <iframe title="resume" src={LINKS.resume} className="w-full h-[70vh] rounded-md" />
          </div>
        </div>
      )}

    </div>
  );
}

function ProjectCard({ title, desc, tags = [], live, code }){
  return (
    <div className="p-4 rounded-lg bg-white/3 border border-white/6 hover:scale-[1.01] transition-transform">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm opacity-80 mt-1">{desc}</p>
      <div className="mt-3 flex gap-2 flex-wrap">
        {tags.map(t=> <span key={t} className="text-xs py-1 px-2 rounded-md bg-white/5">{t}</span>)}
      </div>
      <div className="mt-3 flex gap-2">
        {live && <a href={live} target="_blank" rel="noreferrer" className="text-xs px-2 py-1 rounded bg-cyan-600/80">Live</a>}
        {code && <a href={code} target="_blank" rel="noreferrer" className="text-xs px-2 py-1 rounded bg-white/5">Code</a>}
      </div>
    </div>
  );
}

function CertCard({ title, url }){
  return (
    <a href={url} target="_blank" rel="noreferrer" className="block p-3 rounded-lg bg-white/3 w-44 text-xs hover:scale-[1.02] transition"> 
      <div className="font-medium">{title}</div>
      <div className="mt-2 text-[11px] opacity-80">Open</div>
    </a>
  );
}

/*
Instructions (put in canvas readme or repo README):
1) Setup: Create React App (or Vite) + TailwindCSS. Paste this file as src/App.jsx.
2) index.css should include Tailwind base/components/utilities and a tiny custom body background rule.
3) Replace LINKS object values with your live links (Netlify, project live URLs, or final file IDs).
4) Add more ProjectCard components in the Projects section for your projects.
5) To deploy: push to GitHub and use GitHub Pages or Netlify. For GitHub Pages, build and publish the 'build' folder.
6) Optional: add animated Lottie illustrations, or use framer-motion for higher polish.

Tailwind starter index.css snippet:
@tailwind base;
@tailwind components;
@tailwind utilities;
body { background: #06080d; }

*/
