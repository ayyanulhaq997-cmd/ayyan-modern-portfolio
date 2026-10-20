import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Code2, MonitorSmartphone,
  ShoppingCart, Gauge, Layers3, CheckCircle2, Mail, Github, Linkedin, Send,
  Globe2, Sparkles, MessageCircle, ExternalLink
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01", name: "Study Abroad Budget Planner", type: "Planning tool",
    description: "A practical budgeting experience for comparing study-abroad costs and planning expenses.",
    tags: ["React", "Responsive UI", "Budgeting"],
    url: "https://study-abroad-budget-scholarship-fin-ochre.vercel.app/",
    visual: "budget"
  },
  {
    number: "02", name: "Luminary Landing Page", type: "Landing page",
    description: "A polished SaaS-style landing page focused on clear messaging and calls to action.",
    tags: ["React", "UI Design", "Responsive"],
    url: "https://luminary-app-landing-page.vercel.app/",
    visual: "luminary"
  },
  {
    number: "03", name: "Exam Preparation Platform", type: "Education",
    description: "An online exam-preparation experience organized around learning resources and practice.",
    tags: ["Web Design", "Education", "UX"],
    url: "https://exam-preparation-omega.vercel.app/",
    visual: "exam"
  },
  {
    number: "04", name: "Future Study Platform", type: "Web application",
    description: "A study-abroad content platform designed to make useful information easier to explore.",
    tags: ["Web App", "Content", "UI"],
    url: "https://future-study-zeta.vercel.app/",
    visual: "future"
  },
  {
    number: "05", name: "Corp Vision", type: "Business website",
    description: "A business-focused website concept with a clean layout and a professional visual identity.",
    tags: ["Business", "Web Design", "Responsive"],
    url: "https://corp-vision-one.vercel.app/",
    visual: "corp"
  },
  {
    number: "06", name: "My Voucher Abroad", type: "Travel tool",
    description: "A travel and voucher platform concept for international students and travelers.",
    tags: ["Next.js", "Product UI", "Travel"],
    url: "https://my-voucher-abroad.vercel.app/",
    visual: "voucher"
  }
];

const services = [
  { icon: MonitorSmartphone, title: "Business Websites", text: "A professional online home that explains your offer and helps customers contact you." },
  { icon: Layers3, title: "Landing Pages", text: "Focused pages for a product, service, campaign, or new business idea." },
  { icon: Code2, title: "Web Applications", text: "Interactive web experiences with useful features and clear user flows." },
  { icon: ShoppingCart, title: "eCommerce Websites", text: "Product pages and store experiences designed to make browsing simple." },
  { icon: Gauge, title: "Website Refresh", text: "Improve layout, mobile usability, clarity, and the overall look of an existing site." },
  { icon: CheckCircle2, title: "Responsive Fixes", text: "Make pages work more comfortably across mobile, tablet, and desktop screens." }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const nav = [["Services", "#services"], ["Work", "#work"], ["About", "#about"], ["Contact", "#contact"]];
  const closeMenu = () => setMenuOpen(false);

  async function handleSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/zolly9130@gmail.com",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    setSent(true);
    form.reset();
  } catch (error) {
    alert("Message could not be sent. Please try again.");
  }
}

  return (
    <>
      <header className="header">
        <a className="brand" href="#home" aria-label="Ayyan home"><span className="brand-mark"><Code2 size={21}/></span><span>ayyan<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={16}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"/> WEB DEVELOPER · PAKISTAN</div>
            <h1>I build websites<br/>that help your<br/><span className="gradient-text">business grow.</span></h1>
            <p className="hero-lede">Modern, responsive websites built around your goals — so your business looks trustworthy, works smoothly, and makes it easy for people to take action.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Start a project <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="#work">Explore my work <ArrowDownRight size={17}/></a>
            </div>
            <div className="hero-note"><span className="status-dot"/> Available for selected projects <span className="note-separator">/</span> Remote-friendly</div>
          </div>
          <div className="hero-art" aria-label="Decorative website interface illustration">
            <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
            <div className="floating-chip chip-top"><span className="chip-icon"><Sparkles size={16}/></span> Thoughtful design</div>
            <div className="browser-card">
              <div className="browser-top"><div className="browser-dots"><i/><i/><i/></div><div className="browser-address">yourbusiness.com</div><div className="browser-menu">•••</div></div>
              <div className="browser-content">
                <div className="mini-nav"><b>BRAND<span>.</span></b><div><i/><i/><i/></div></div>
                <div className="mini-layout"><div className="mini-copy"><small>MADE FOR YOUR NEXT CHAPTER</small><strong>Make your<br/>next move<br/><em>count.</em></strong><span className="mini-line"/><span className="mini-button"/></div><div className="mini-image"><div className="mini-sun"/><div className="mini-arch"/><div className="mini-plant">✳</div></div></div>
                <div className="mini-stats"><div><b>01</b><span>Clear message</span></div><div><b>02</b><span>Easy to use</span></div><div><b>03</b><span>Made for mobile</span></div></div>
              </div>
            </div>
            <div className="floating-chip chip-bottom"><span className="check-chip"><CheckCircle2 size={16}/></span> Responsive by design</div>
            <div className="art-caption">IDEA <ArrowRight size={13}/> DESIGN <ArrowRight size={13}/> BUILD</div>
          </div>
          <a className="scroll-cue" href="#services"><span/> Scroll to explore</a>
        </section>

        <section className="trust-strip"><div><span>01</span> Clear communication</div><div><span>02</span> Mobile-first layouts</div><div><span>03</span> Built around your goals</div><div><span>04</span> Careful handoff</div></section>

        <section className="section section-light" id="services">
          <div className="section-heading">
            <div><div className="eyebrow dark-eyebrow">HOW I CAN HELP</div><h2>Good websites do<br className="desktop-break"/> more than look good.</h2></div>
            <p>They explain what you do, build confidence, and guide visitors toward the next step. Let’s make yours do that.</p>
          </div>
          <div className="services-grid">{services.map(({icon: Icon, title, text}, i) => <article className="service-card" key={title}><div className="service-top"><span className="service-icon"><Icon size={21}/></span><span className="service-number">0{i+1}</span></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Ask about ${title}`}><ArrowUpRight size={18}/></a></article>)}</div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading work-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> SELECTED PROJECTS</div><h2>Some things I’ve<br/>been working on<span className="gradient-text">.</span></h2></div><p>A few web projects and concepts. Open a live preview to explore the experience.</p></div>
          <div className="projects-grid">{projects.map(project => <article className="project-card" key={project.number}>
            <a className={`project-preview preview-${project.visual}`} href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live site`}>
              <div className="preview-window"><div className="preview-bar"><i/><i/><i/><span>{project.visual}.site</span></div><div className="preview-page">
                {project.visual === "budget" && <><div className="mock-logo">study<span>wise.</span></div><div className="mock-heading">Plan your future<br/><b>with confidence.</b></div><div className="mock-button"/> <div className="mock-cards"><i/><i/><i/></div></>}
                {project.visual === "luminary" && <><div className="mock-logo">luminary<span>✳</span></div><div className="mock-heading">Ideas into<br/><b>impact.</b></div><div className="mock-button"/><div className="mock-blob"/></>}
                {project.visual === "exam" && <><div className="mock-logo">EXAM<span>PREP</span></div><div className="mock-heading">Your next goal<br/><b>starts here.</b></div><div className="mock-cards colorful"><i/><i/><i/></div></>}
                {project.visual === "future" && <><div className="mock-logo">future<span>study</span></div><div className="mock-heading">Your journey<br/><b>starts here.</b></div><div className="mock-button"/><div className="mock-blob blue"/></>}
                {project.visual === "corp" && <><div className="mock-logo">CORP<span>VISION</span></div><div className="mock-heading">Strategy meets<br/><b>possibility.</b></div><div className="mock-button"/><div className="mock-cards"><i/><i/><i/></div></>}
                {project.visual === "voucher" && <><div className="mock-logo">my<span>voucher</span></div><div className="mock-heading">Travel smarter.<br/><b>Go further.</b></div><div className="mock-button"/><div className="mock-blob orange"/></>}
              </div></div><span className="preview-open"><ExternalLink size={16}/></span>
            </a>
            <div className="project-info"><div className="project-meta"><span>{project.type}</span><span>{project.number}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.url} target="_blank" rel="noreferrer">View live project <ArrowUpRight size={16}/></a></div>
          </article>)}</div>
          <p className="project-note">Project descriptions are summaries; please open each live site to see the current version.</p>
        </section>

        <section className="about-section" id="about"><div className="about-shape shape-a"/><div className="about-shape shape-b"/>
          <div className="about-inner"><div className="about-left"><div className="eyebrow"><span className="eyebrow-line"/> A LITTLE ABOUT ME</div><h2>Small details.<br/>Big-picture thinking.</h2><div className="about-monogram"><Code2 size={46}/><span>AY.</span></div></div><div className="about-copy"><p className="about-lede">Hi, I’m Ayyan — a web developer interested in making the web more useful, clear, and approachable.</p><p>I work on business websites, landing pages, and web application concepts. My focus is on responsive layouts, thoughtful user journeys, and presenting your offer in a way visitors can understand.</p><p>I believe a good project starts with listening. We’ll clarify what you need, agree on the scope, and work toward a result that fits your goals.</p><div className="skills"><span>React</span><span>JavaScript</span><span>Next.js</span><span>HTML & CSS</span><span>Node.js</span><span>WordPress</span><span>Responsive UI</span></div><a className="text-link" href="#contact">Tell me about your idea <ArrowRight size={17}/></a></div></div>
        </section>

        <section className="process-section section-light"><div className="section-heading"><div><div className="eyebrow dark-eyebrow">A SIMPLE PROCESS</div><h2>From first message<br/>to finished website.</h2></div><p>No confusing jargon. Just a clear plan, regular updates, and a shared understanding of what we’re building.</p></div><div className="process-grid"><div><span>01</span><h3>Tell me the idea</h3><p>Share your business, audience, goals, and any examples you like.</p></div><div><span>02</span><h3>Agree on the plan</h3><p>We’ll define pages, features, timeline, and budget before work begins.</p></div><div><span>03</span><h3>Build and review</h3><p>I’ll share progress so you can review the direction and provide feedback.</p></div><div><span>04</span><h3>Launch with confidence</h3><p>We’ll check the final details and agree on the handoff.</p></div></div></section>

        <section className="contact-section" id="contact"><div className="contact-glow"/><div className="contact-layout"><div className="contact-copy"><div className="eyebrow"><span className="eyebrow-line"/> HAVE A PROJECT IN MIND?</div><h2>Let’s make<br/>something <span className="gradient-text">useful.</span></h2><p>Tell me a little about what you want to build. I’ll get back to you so we can discuss the scope and next steps.</p><div className="contact-detail"><span><Mail size={18}/></span><div><small>EMAIL</small><p>zolly9130@gmail.com</p></div></div><div className="contact-detail"><span><MessageCircle size={18}/></span><div><small>PROJECTS & QUESTIONS</small><p>Use the form to start a conversation</p></div></div></div>
          <form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><span>01 / PROJECT ENQUIRY</span><Sparkles size={18}/></div><div className="form-row"><label>Your name<input name="name" placeholder="What should I call you?" required/></label><label>Email address<input type="email" name="email" placeholder="you@example.com" required/></label></div><div className="form-row"><label>What do you need?<select name="project" defaultValue="" required><option value="" disabled>Choose a project type</option><option>Business website</option><option>Landing page</option><option>Web application</option><option>eCommerce website</option><option>Website redesign</option><option>Something else</option></select></label><label>Estimated budget <select name="budget" defaultValue=""><option value="">Not sure yet</option><option>Under $100</option><option>$100–$300</option><option>$300–$700</option><option>$700+</option></select></label></div><label>Tell me about your project<textarea name="details" rows="4" placeholder="What does your business do? What would you like the website to achieve?" required/></label><button className="button button-primary submit-button" type="submit">Prepare email <Send size={16}/></button>{sent && (
  <p className="form-help">
    Thank you! Your message has been submitted successfully.
  </p>
)}<p className="form-help">This form opens your email app; it does not store your details on a server.</p></form>
        </div></section>
      </main>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark"><Code2 size={19}/></span><span>ayyan<span className="brand-dot">.</span></span></a><p>Built with care, curiosity, and clean code.</p><div className="footer-links"><a href="https://github.com/ayyanulhaq997-cmd" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><a href="#contact" aria-label="Email"><Mail size={18}/></a><a href="#home" aria-label="Back to top"><ArrowUpRight size={18}/></a></div><small>© {new Date().getFullYear()} Ayyan Ul Haq. All rights reserved.</small></footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App/>);