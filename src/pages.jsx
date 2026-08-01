/* ==================================================================
   pages.jsx — one component per route.
   ================================================================== */
import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  PROFILE, EXPERIENCE, PROJECTS, AWARDS, PUBLICATIONS, ARTICLES, VOLUNTEER, SKILLS,
} from "./data";
import {
  Reveal, SectionHead, PageHead, Tag, TagList, usePageMeta, SECTION_ICONS,
  ExperienceCard, ProjectCard, AwardCard, PublicationRow, ArticleRow,
  GitHubIcon, Arrow, BackArrow, MailIcon, LinkedInIcon,
} from "./ui";

const SITE = "Abel George Mathew";

/* ---------------- home ---------------- */

const Hero = () => (
  <section className="hero">
    <div className="orb orb-a" />
    <div className="orb orb-b" />
    <div className="hero-inner">
      <h1 className="hero-name">
        <span className="ln-1">{PROFILE.first}</span>
        <span className="ln-2">{PROFILE.last}</span>
      </h1>
      <p className="hero-tag">{PROFILE.tagline}</p>
      <div className="cta-row">
        <Link className="btn btn-primary" to="/about">About Me <Arrow /></Link>
        <a className="btn btn-ghost" href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer">
          <GitHubIcon size={16} /> GitHub
        </a>
      </div>
    </div>
  </section>
);

const ConnectPanel = () => (
  <Reveal>
    <div className="connect">
      <h2 className="connect-title">Let's Connect</h2>
      <p>
        Interested in collaboration, research opportunities, or just want to chat about
        mathematics, competitive programming, or chess? I'd love to hear from you.
      </p>
      <div className="cta-row">
        <Link className="btn btn-primary" to="/contact">Get in Touch <Arrow /></Link>
        <a className="btn btn-ghost" href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn Profile
        </a>
      </div>
    </div>
  </Reveal>
);

export function Home() {
  usePageMeta(
    `${SITE} | MIT '29 · IMO Medalist · Codeforces Master`,
    "MIT '29 student, two-time IMO bronze medalist, Codeforces Master, and researcher in graph theory, cybersecurity, and formal verification."
  );
  return (
    <>
      <Hero />

      <section className="section">
        <SectionHead icon="briefcase" title="Work Experience" to="/work" />
        <div className="grid-3">
          {EXPERIENCE.filter((e) => e.featured).map((e, i) => (
            <Reveal key={e.role + e.org} delay={i * 90}><ExperienceCard e={e} /></Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHead icon="code" title="Featured Projects" to="/projects" />
        <div className="grid-3">
          {PROJECTS.filter((p) => p.featured).map((p, i) => (
            <Reveal key={p.name} delay={i * 90}><ProjectCard p={p} /></Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHead icon="medal" title="Honors & Awards" to="/awards" />
        <div className="grid-3 tight">
          {AWARDS.filter((a) => a.featured).map((a, i) => (
            <Reveal key={a.title} delay={i * 70}><AwardCard a={a} /></Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHead icon="book" title="Publications" to="/publications" />
        {PUBLICATIONS.filter((p) => p.featured).map((p) => (
          <Reveal key={p.title}><PublicationRow p={p} /></Reveal>
        ))}
      </section>

      <section className="section">
        <SectionHead icon="people" title="Volunteering & Teaching" to="/volunteering" />
        <Reveal>
          <div className="vol-panel">
            <div className="vol-stats">
              {VOLUNTEER.stats.map((s) => (
                <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
              ))}
            </div>
            <div className="vol-orgs">
              {VOLUNTEER.orgs.map((o) => <span key={o.name} className="vol-chip">{o.name}</span>)}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section"><ConnectPanel /></section>
    </>
  );
}

/* ---------------- about ---------------- */

export function About() {
  usePageMeta(`About | ${SITE}`, "Background, research interests, and competition history.");
  return (
    <section className="section">
      <PageHead icon="user" title="About" lead="Mathematics, algorithms, and systems that can be proven correct." />
      <Reveal>
        <div className="prose">
          {PROFILE.bio.map((para, i) => <p key={i}>{para}</p>)}
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="fact-grid">
          <div><span>Studying</span><strong>MIT, Class of 2029</strong></div>
          <div><span>Based in</span><strong>Cambridge, MA</strong></div>
          <div><span>Peak Codeforces</span><strong>2147 — Master</strong></div>
          <div><span>Best IMO rank</span><strong>145th (2023)</strong></div>
        </div>
      </Reveal>
      <Reveal delay={200}><ConnectPanel /></Reveal>
    </section>
  );
}

/* ---------------- list pages ---------------- */

export function Work() {
  usePageMeta(`Work Experience | ${SITE}`, "Research and engineering roles.");
  return (
    <section className="section">
      <PageHead icon="briefcase" title="Work Experience" lead="Research labs and engineering teams I've been part of." />
      <div className="stack">
        {EXPERIENCE.map((e, i) => (
          <Reveal key={e.slug} delay={i * 70}>
            <Link className="org-card" to={`/work/${e.slug}`}>
              <div className="org-head">
                <img className="org-logo" src={e.logo} alt="" />
                <div>
                  <h3>{e.org}</h3>
                  <p className="org-loc">{e.location}</p>
                </div>
              </div>
              <div className="org-body">
                <div className="org-role-row">
                  <h4>{e.role}</h4>
                  <div className="org-role-meta">
                    <span className="badge badge-solid">{e.badge.toUpperCase()}</span>
                    <span>{e.dates}</span>
                  </div>
                </div>
                <p className="card-desc">{e.desc}</p>
                {e.bullets && (
                  <ul className="bullets small">
                    {e.bullets.map((b) => <li key={b}><span className="bullet-arrow">▸</span>{b}</li>)}
                  </ul>
                )}
                <div className="tags flat">{e.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function WorkDetail() {
  const { slug } = useParams();
  const e = EXPERIENCE.find((x) => x.slug === slug);
  usePageMeta(e ? `${e.role} — ${e.org} | ${SITE}` : `Not found | ${SITE}`);
  if (!e) return <Navigate to="/work" replace />;

  return (
    <section className="section">
      <Link className="back-link" to="/work"><BackArrow /> Back to Work Experience</Link>

      <header className="detail-head">
        <img className="detail-logo" src={e.logo} alt="" />
        <div>
          <h1>{e.role}</h1>
          <p className="detail-org">{e.org}</p>
          <div className="detail-meta">
            <span className="badge">{e.badge}</span>
            <span>{e.dates}</span>
            <span>{e.location}</span>
          </div>
        </div>
      </header>

      <Reveal>
        <div className="detail-panel">
          <h2>Overview</h2>
          <p>{e.desc}</p>

          {e.bullets && (
            <>
              <h2>Key Responsibilities &amp; Achievements</h2>
              <ul className="bullets">
                {e.bullets.map((b) => <li key={b}><span className="bullet-arrow">▸</span>{b}</li>)}
              </ul>
            </>
          )}

          <h2>Skills &amp; Technologies</h2>
          <div className="tags centered">{e.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        </div>
      </Reveal>
    </section>
  );
}

export function Projects() {
  usePageMeta(`Projects | ${SITE}`, "Open-source, research, and hackathon projects.");
  return (
    <section className="section">
      <PageHead icon="code" title="Projects" lead="Things I've built, contributed to, or broken and rebuilt." />
      <div className="stack">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}><ProjectCard p={p} wide /></Reveal>
        ))}
      </div>
    </section>
  );
}

export function Awards() {
  usePageMeta(`Honors & Awards | ${SITE}`, "Olympiad medals, competition results, and titles.");
  return (
    <section className="section">
      <PageHead icon="medal" title="Honors & Awards" lead="Olympiad medals, contest results, and titles." />
      <div className="grid-2">
        {AWARDS.map((a, i) => (
          <Reveal key={a.title} delay={i * 70}><AwardCard a={a} showDetail /></Reveal>
        ))}
      </div>
    </section>
  );
}

export function Publications() {
  usePageMeta(`Publications | ${SITE}`, "Peer-reviewed papers, articles, and olympiad solutions.");
  return (
    <section className="section">
      <PageHead icon="book" title="Publications" lead="Peer-reviewed papers and preprints." />
      <div className="stack">
        {PUBLICATIONS.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}><PublicationRow p={p} showAbstract /></Reveal>
        ))}
      </div>

      <div className="sub-head">
        <span className="sub-ico">{SECTION_ICONS.book}</span>
        <h2>Articles &amp; Solutions</h2>
      </div>
      <div className="stack">
        {ARTICLES.map((a, i) => (
          <Reveal key={a.title} delay={i * 60}><ArticleRow a={a} /></Reveal>
        ))}
      </div>
    </section>
  );
}

export function Volunteering() {
  usePageMeta(`Volunteering & Teaching | ${SITE}`, "Teaching olympiad mathematics and community work.");
  return (
    <section className="section">
      <PageHead icon="people" title="Volunteering & Teaching" lead="Giving back to the community that trained me." />
      <Reveal>
        <div className="vol-panel">
          <div className="vol-stats">
            {VOLUNTEER.stats.map((s) => (
              <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
            ))}
          </div>
        </div>
      </Reveal>
      <div className="grid-2 spaced">
        {VOLUNTEER.orgs.map((o, i) => (
          <Reveal key={o.name} delay={i * 80}>
            <article className="card">
              <h3>{o.name}</h3>
              <p className="card-org">{o.role}</p>
              <p className="card-desc">{o.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  usePageMeta(`Skills | ${SITE}`, "Mathematics, languages, systems, and research skills.");
  return (
    <section className="section">
      <PageHead icon="spark" title="Skills" lead="What I reach for, roughly in order of confidence." />
      <div className="grid-2">
        {SKILLS.map((s, i) => (
          <Reveal key={s.group} delay={i * 80}>
            <article className="card">
              <h3>{s.group}</h3>
              <div className="tags">{s.items.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- contact ---------------- */

export function Contact() {
  usePageMeta(`Contact | ${SITE}`, "Get in touch about research, collaboration, or teaching.");
  return (
    <section className="section">
      <PageHead icon="user" title="Get in Touch" lead="Research, collaboration, teaching — or just chess." />
      <Reveal>
        <div className="contact-grid">
          <a className="contact-card" href={`mailto:${PROFILE.email}`}>
            <MailIcon size={22} />
            <div><h4>Email</h4><p>{PROFILE.email}</p></div>
          </a>
          <a className="contact-card" href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon size={22} />
            <div><h4>LinkedIn</h4><p>Professional updates and messages</p></div>
          </a>
          <a className="contact-card" href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon size={22} />
            <div><h4>GitHub</h4><p>Code, forks, and works in progress</p></div>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- 404 ---------------- */

export function NotFound() {
  usePageMeta(`Page not found | ${SITE}`);
  return (
    <section className="section notfound">
      <h1>404</h1>
      <p>That page doesn't exist. It may have been renamed or moved.</p>
      <Link className="btn btn-primary" to="/">Back to home <Arrow /></Link>
    </section>
  );
}
