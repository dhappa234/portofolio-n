import {
  ArrowDownRight, ArrowUpRight, Code2, Database, ExternalLink, Github,
  Globe2, Layers3, Mail, MapPinned, Smartphone, Sparkles, BriefcaseBusiness,
  GraduationCap, Cpu, Boxes
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { experiences, projects, skills } from "@/data/portfolio";

function SectionHeading({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return (
    <div className="section-heading">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <Reveal>
          <span className="eyebrow"><span className="status-dot" /> Open to meaningful opportunities</span>
          <h1>Hi, I&apos;m Daffa.<br /><span className="gradient-text">I build for the web.</span></h1>
          <p className="hero-copy">
            Information Technology student and software developer who enjoys turning ideas into useful digital products — from web applications to mobile experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
            <a className="button button-secondary" href="#contact">Let&apos;s connect <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-socials">
            <a className="social-link" href="https://github.com/dhappa234" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
            <a className="social-link" href="mailto:hello@example.com"><Mail size={16} /> Email</a>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="hero-visual" aria-label="Profile illustration">
            <div className="orb" />
            <div className="profile-card glass">
              <div className="profile-art">
                <div className="profile-initials" aria-label="Daffa Pratama initials">DP</div>
              </div>
              <div className="profile-caption">
                <div><strong>Daffa Pratama</strong><span>Software Developer</span></div>
                <span className="brand-mark"><Code2 size={18} /></span>
              </div>
            </div>
            <div className="floating-chip glass chip-top"><Code2 size={17} /> Building with purpose</div>
            <div className="floating-chip glass chip-bottom"><Sparkles size={17} /> Learn · Build · Improve</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal><SectionHeading kicker="A little about me" title="Curious by nature. Builder by practice." description="I enjoy learning how technology works and applying it to solve practical problems. My focus is writing maintainable software, exploring new tools, and collaborating with people." /></Reveal>
        <div className="about-grid">
          <Reveal className="about-card glass">
            <h3>How I approach development</h3>
            <p>I care about the experience behind the interface as much as the code underneath it. I aim to build software that is clear to use, thoughtful in design, and practical to maintain.</p>
            <div className="tags"><span className="tag">Clean UI</span><span className="tag">Maintainable code</span><span className="tag">Continuous learning</span></div>
          </Reveal>
          <Reveal delay={0.08} className="about-card glass">
            <div className="about-points">
              <div className="about-point"><span className="point-icon"><Globe2 size={18} /></span><div><strong>Web development</strong><span>Responsive interfaces and useful web applications.</span></div></div>
              <div className="about-point"><span className="point-icon"><Smartphone size={18} /></span><div><strong>Mobile development</strong><span>Exploring mobile experiences and application architecture.</span></div></div>
              <div className="about-point"><span className="point-icon"><Cpu size={18} /></span><div><strong>Intelligent systems</strong><span>Applying AI and data techniques where they add value.</span></div></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ index }: { index: number }) {
  const icons = [<Globe2 size={20} key="web" />, <Database size={20} key="rag" />, <Cpu size={20} key="nlp" />, <Layers3 size={20} key="spk" />];
  return (
    <div className="project-preview" aria-hidden="true">
      <div className="project-icon">{icons[index % icons.length]}</div>
      <div className="preview-window">
        <div className="window-dots"><i /><i /><i /></div>
        <div className="preview-line short" />
        <div className="preview-line" />
        <div className="preview-line" style={{ width: "78%" }} />
        <div className="preview-panels"><span /><span /><span /></div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal><SectionHeading kicker="Selected work" title="Projects built through curiosity." description="A selection of web development, recommendation systems, and applied AI projects. Project summaries and links can be refined as each case study is prepared." /></Reveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06} className="project-card glass">
              <ProjectPreview index={index} />
              <div className="project-body">
                <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
                <div className="hero-actions" style={{ marginTop: 18 }}>
                  <a className="social-link" href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> Source code <ExternalLink size={13} /></a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const icons = [<Code2 size={19} key="code" />, <Smartphone size={19} key="mobile" />, <Cpu size={19} key="ai" />];
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal><SectionHeading kicker="Tools I use" title="A practical, evolving toolkit." description="These are technologies I have worked with or explored. The list is intentionally grouped by purpose rather than using arbitrary skill-percentage bars." /></Reveal>
        <div className="skill-grid">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.06} className="skill-card glass">
              <h3>{icons[index % icons.length]} {group.category}</h3>
              <div className="skill-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal><SectionHeading kicker="Experience & leadership" title="Growing through building with others." description="Technical experience and organizational roles have helped me learn to communicate, take ownership, and work toward shared outcomes." /></Reveal>
        <div className="experience-list">
          {experiences.map((item, index) => (
            <Reveal key={item.organization} delay={index * 0.05} className="experience-item glass">
              <div className="experience-icon">{index === 0 ? <BriefcaseBusiness size={21} /> : index === 1 ? <GraduationCap size={21} /> : <Boxes size={21} />}</div>
              <div><h3>{item.role}</h3><p>{item.organization} · {item.description}</p></div>
              <span className="experience-date">{item.period}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="contact-card glass">
          <div className="contact-content">
            <span className="kicker">Have a project in mind?</span>
            <h2>Let&apos;s make something useful.</h2>
            <p>I&apos;m happy to connect about software development, collaboration, and opportunities to build thoughtful digital products.</p>
            <div className="contact-links">
              <a className="button button-primary" href="mailto:hello@example.com"><Mail size={17} /> Send me an email</a>
              <a className="button button-secondary" href="https://github.com/dhappa234" target="_blank" rel="noreferrer"><Github size={17} /> Find me on GitHub <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Daffa Pratama. Built with care.</span>
        <div className="footer-links"><a href="#home">Back to top ↑</a><a href="https://github.com/dhappa234" target="_blank" rel="noreferrer">GitHub</a></div>
      </div>
    </footer>
  );
}
