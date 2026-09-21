'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, BrainCircuit, Code2, Layers3, Mail, Menu, MousePointer2, PenTool, Search, Sparkles, Target, X, Zap } from 'lucide-react';

const services = [
  ['Meta Ads Management', 'Campaign architecture, creative testing, optimization and lead-focused execution.', Target],
  ['Social Media Management', 'Content direction, platform management and consistent brand communication.', Sparkles],
  ['Lead Generation', 'Performance campaigns and landing experiences designed around qualified enquiries.', Zap],
  ['Creative Design', 'Ad creatives, campaign visuals, product-focused communication and digital assets.', PenTool],
  ['Website Development', 'Responsive, conversion-aware websites with modern UI, clear journeys and strong UX.', Code2],
  ['SEO', 'Search fundamentals, on-page structure and visibility-focused content workflows.', Search],
  ['AI & Prompt Engineering', 'AI-assisted workflows, prompting systems and faster creative / marketing execution.', BrainCircuit],
  ['Business Tool / OMS Development', 'Practical internal tools that streamline operational and order-management workflows.', Layers3],
] as const;

const projects = [
  { name: 'MOTOR GLIZ', tag: 'Performance Marketing', desc: 'Social media management, Meta Ads creative design, campaign creation, optimization and inbound call generation.', accent: '01' },
  { name: 'HERBAL CURE', tag: 'Lead Generation', desc: 'Meta Ads, creative development, campaign setup, optimization, inbound call generation and qualified lead generation.', accent: '02' },
  { name: 'AGNIYANTRA', tag: 'Digital Growth', desc: 'Social media management, creative design, Meta Ads, website/web projects, SEO and lead generation.', accent: '03' },
  { name: 'DIGITAL QLICK', tag: 'Real Estate Website', desc: 'Responsive real-estate website with property presentation, online enquiry functionality and a lead-focused structure.', accent: '04' },
  { name: 'STUDIO S ART SALON', tag: 'Brand & Web', desc: 'Social media management across Instagram and Facebook, promotional creatives, content planning and website development.', accent: '05' },
  { name: 'PERSONAL PORTFOLIO', tag: 'Interactive Web', desc: 'Modern responsive portfolio with interactive UI/UX, 3D-inspired scrolling, scroll-based motion and a premium web experience.', accent: '06' },
];

const skills = ['Meta Ads','Digital Marketing','Social Media','Lead Generation','Creative Design','Website Development','SEO','AI Tools','Prompt Engineering','UI/UX','OMS / Business Tools'];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const heroY = useTransform(scrollYProgress, [0, .35], [0, -120]);
  const heroScale = useTransform(scrollYProgress, [0, .3], [1, .92]);

  useEffect(() => { const t = setTimeout(() => setLoaded(true), 500); return () => clearTimeout(t); }, []);
  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [menuOpen]);

  return (
    <main>
      <motion.div className="progress" style={{ scaleX: progress }} />
      {!loaded && <motion.div className="loader" initial={{opacity:1}} animate={{opacity:0}} transition={{delay:.45,duration:.35}}><span>AA</span></motion.div>}

      <header className="nav-shell">
        <a href="#home" className="brand" aria-label="Abdullah Al Hassan home"><span>AA</span><strong>Abdullah Al Hassan</strong></a>
        <nav className="desktop-nav">{['Home','About','Services','Experience','Projects','Skills','Contact'].map(x => <a key={x} href={'#'+x.toLowerCase()}>{x}</a>)}</nav>
        <button className="menu-btn" onClick={() => setMenuOpen(v=>!v)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      </header>
      {menuOpen && <motion.div className="mobile-menu" initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}}>{['Home','About','Services','Experience','Projects','Skills','Contact'].map(x => <a key={x} href={'#'+x.toLowerCase()} onClick={()=>setMenuOpen(false)}>{x}</a>)}</motion.div>}

      <section id="home" className="hero section-pad">
        <div className="hero-grid" /><div className="orb orb-a"/><div className="orb orb-b"/><div className="orb orb-c"/>
        <motion.div className="hero-content" style={{y: heroY, scale: heroScale}}>
          <div className="eyebrow"><span className="pulse"/> DIGITAL MARKETING · CREATIVE · WEB</div>
          <h1><span>ABDULLAH</span><em>AL HASSAN</em></h1>
          <p className="hero-role">Digital Marketer <b>&</b> Freelancer</p>
          <p className="hero-copy">Building brands, campaigns & digital experiences that generate real results.</p>
          <div className="cta-row"><a className="btn btn-primary" href="#projects">View My Work <ArrowUpRight size={18}/></a><a className="btn btn-ghost" href="#contact">Let's Work Together <ArrowUpRight size={18}/></a></div>
        </motion.div>
        <div className="hero-side"><span>NEW DELHI · INDIA</span><span>AVAILABLE FOR SELECT PROJECTS</span></div>
        <div className="scroll-cue"><MousePointer2 size={15}/> Scroll to explore</div>
      </section>

      <section id="about" className="section-pad about section-dark">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-layout"><div><h2>Strategy meets <span>execution.</span></h2></div><div className="about-copy"><p className="lead">I work across marketing, creative and digital products — turning ideas into campaigns, content and web experiences that have a clear business purpose.</p><p>My work spans Meta Ads, social media, creative design, lead generation, websites, SEO and AI-assisted workflows. I also build practical business tools, including an in-house OMS, with a focus on making digital work more useful and more efficient.</p></div></div>
        <div className="qual-grid">{['Performance-minded','Creative-first','AI-assisted','Business-focused'].map((x,i)=><motion.div key={x} className="qual" whileHover={{y:-8, rotateX:4}} transition={{type:'spring',stiffness:220}}><span>0{i+1}</span><strong>{x}</strong></motion.div>)}</div>
      </section>

      <section id="services" className="section-pad services">
        <div className="section-head"><div className="section-label">02 / SERVICES</div><h2>Built for the <span>whole journey.</span></h2><p>From first impression to conversion and operational workflow.</p></div>
        <div className="service-grid">{services.map(([title,desc,Icon],i)=><motion.article className="service-card" key={title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-80px'}} transition={{delay:i*.04}} whileHover={{y:-10, rotateX:3, rotateY:-3}}><div className="service-icon"><Icon size={21}/></div><span className="card-no">0{i+1}</span><h3>{title}</h3><p>{desc}</p><ArrowUpRight className="card-arrow" size={19}/></motion.article>)}</div>
      </section>

      <section id="experience" className="section-pad section-dark experience">
        <div className="section-label">03 / EXPERIENCE</div><h2>Where I’ve been <span>building.</span></h2>
        <div className="timeline">
          <motion.article className="timeline-item" initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}><div className="timeline-dot"/><div className="time-meta"><span>APR 2026 — PRESENT</span><b>01</b></div><div><h3>TAIVA NATURALS PVT. LTD.</h3><p>Digital Marketing · Creative · Growth · Business Tools</p><ul><li>End-to-end digital marketing and social media management</li><li>Meta Ads campaign creation, management and optimization</li><li>Lead generation and inbound call campaigns</li><li>AI tools and prompt engineering</li><li>Developed an in-house OMS (Order Management System) tool</li></ul></div></motion.article>
          <motion.article className="timeline-item" initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.12}}><div className="timeline-dot"/><div className="time-meta"><span>FEB 2026 — APR 2026 · 3-MONTH INTERNSHIP</span><b>02</b></div><div><h3>D-FAME INDIA BY NXTLEET MARKETING PVT. LTD.</h3><p>Performance Marketing Internship</p><ul><li>Meta Ads campaign setup and audience targeting</li><li>Campaign monitoring and optimization</li><li>Ad copy and marketing content</li><li>AI-assisted content and creative ideation</li></ul></div></motion.article>
        </div>
      </section>

      <section id="projects" className="section-pad projects">
        <div className="section-head"><div className="section-label">04 / SELECTED WORK</div><h2>Projects with a <span>purpose.</span></h2></div>
        <div className="project-list">{projects.map((p,i)=><motion.article key={p.name} className="project-card" initial={{opacity:0,y:45}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-80px'}} transition={{delay:(i%2)*.08}}><div className="project-visual"><div className="visual-grid"/><span>{p.accent}</span><div className="visual-orbit"/></div><div className="project-info"><div><span className="project-tag">{p.tag}</span><h3>{p.name}</h3></div><p>{p.desc}</p><ArrowUpRight className="project-arrow"/></div></motion.article>)}</div>
      </section>

      <section className="section-pad oms section-dark">
        <div className="oms-copy"><div className="section-label">05 / BUSINESS TOOLS</div><h2>Business Tools <span>& Automation.</span></h2><p>Developed an in-house OMS (Order Management System) tool to streamline business and order-management workflows.</p><a className="text-link" href="#contact">Discuss a workflow <ArrowUpRight size={17}/></a></div>
        <motion.div className="dashboard" initial={{opacity:0,scale:.92,rotateX:8}} whileInView={{opacity:1,scale:1,rotateX:0}} viewport={{once:true}} transition={{duration:.7}}><div className="dash-top"><span>OMS / OPERATIONS</span><i/><i/><i/></div><div className="dash-body"><div className="dash-sidebar"><b>AA</b><span/><span/><span/><span/></div><div className="dash-main"><div className="dash-title"><strong>Order Management</strong><small>Live workspace</small></div><div className="dash-metrics"><div><small>ORDERS</small><b>Workflow</b></div><div><small>STATUS</small><b>Tracked</b></div><div><small>OPERATIONS</small><b>Streamlined</b></div></div><div className="dash-chart"><span/><span/><span/><span/><span/><span/><span/><span/></div><div className="dash-table"><i/><i/><i/><i/></div></div></div></motion.div>
      </section>

      <section id="skills" className="section-pad skills">
        <div className="section-label">06 / SKILLS</div><div className="skills-layout"><h2>Tools, skills & <span>ways of working.</span></h2><div className="skill-cloud">{skills.map((s,i)=><motion.span key={s} whileHover={{scale:1.06,y:-4}} transition={{type:'spring',stiffness:300}}>{s}<small>0{i+1}</small></motion.span>)}</div></div>
      </section>

      <section className="process section-pad section-dark"><div className="section-label">07 / PROCESS</div><h2>Simple process. <span>Serious intent.</span></h2><div className="process-grid">{[['01','Discover','Understand the business, audience, offer and the real objective.'],['02','Strategize','Turn the objective into a focused marketing or digital plan.'],['03','Build & Launch','Create the campaign, creative, website or workflow and put it into motion.'],['04','Optimize','Read the signals, improve what matters and keep the system moving.']].map(([n,t,d])=><motion.div key={n} className="process-step" whileInView={{opacity:1,y:0}} initial={{opacity:0,y:25}} viewport={{once:true}}><span>{n}</span><h3>{t}</h3><p>{d}</p></motion.div>)}</div></section>

      <section id="contact" className="contact section-pad"><div className="contact-glow"/><div className="section-label">08 / CONTACT</div><h2>Have a project <span>in mind?</span></h2><p>Let’s build something impactful.</p><a className="contact-mail" href="mailto:abdullahalhassan1800@gmail.com"><Mail size={20}/> abdullahalhassan1800@gmail.com <ArrowUpRight size={18}/></a><div className="contact-actions"><a className="btn btn-primary" href="mailto:abdullahalhassan1800@gmail.com">Email Me <ArrowUpRight size={18}/></a><a className="btn btn-ghost" href="mailto:abdullahalhassan1800@gmail.com?subject=Let's%20Work%20Together">Let's Work Together <ArrowUpRight size={18}/></a></div></section>

      <footer><div><strong>Abdullah Al Hassan</strong><span>Digital Marketer & Freelancer</span></div><div className="footer-note">Social links will be added here when official URLs are provided.</div><a href="#home" className="back-top">Back to top ↑</a></footer>
    </main>
  );
}
