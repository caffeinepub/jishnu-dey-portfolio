import { ArrowUpRight, ExternalLink, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const fadeUp: any = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

const expertise = [
  "Brand Identity & Logo Design",
  "Creative Direction",
  "Social Media Strategy",
  "Content Planning & Execution",
  "Video Editing & Motion Design",
  "Team Supervision",
  "Post-Production & Color Grading",
  "Client Communication",
];

const experiences = [
  {
    company: "Goranggo Solutions PVT.LTD",
    location: "Kolkata",
    roles: [
      {
        title: "Creative Head",
        period: "Oct 2023 – Present",
        bullets: [
          "Lead brand identity development including logo design, visual systems, and brand guidelines for startups and service brands.",
          "Manage end-to-end social media strategy including content planning, execution, and performance optimization.",
          "Supervise designers and editors, ensuring timely and high-quality creative output.",
          "Conduct creative brainstorming and concept development sessions.",
          "Directly manage social media strategy for: Inhale Exhale Studio (Pilates & Wellness), Skin Glaze (Aesthetic & Skincare Clinic).",
        ],
      },
      {
        title: "Video Editor",
        period: "Jan 2023 – Sept 2023",
        bullets: [
          "Edited promotional videos, branded content, and corporate creatives.",
          "Executed color grading, motion graphics, and post-production workflows.",
          "Collaborated with marketing teams to deliver platform-optimized content.",
        ],
      },
    ],
  },
  {
    company: "Sleek and Peek",
    location: "Kolkata",
    roles: [
      {
        title: "Video Editor",
        period: "Aug 2024 – Dec 2024",
        bullets: [
          "Created product-focused videos and Meta ads for an apparel brand.",
          "Edited short-form content optimized for Instagram and paid campaigns.",
        ],
      },
    ],
  },
  {
    company: "Excellis IT",
    location: "Kolkata",
    roles: [
      {
        title: "Video Editor",
        period: "Jul 2022 – Dec 2022",
        bullets: [
          "Edited marketing videos and brand creatives including advanced color grading and post-production.",
        ],
      },
    ],
  },
  {
    company: "Minerva Academy Football Club",
    location: "",
    roles: [
      {
        title: "Video Editor / Cinematographer",
        period: "May 2021 – Jul 2021",
        bullets: [
          "Produced sports promotional content and digital marketing videos for club campaigns.",
        ],
      },
    ],
  },
];

const education = [
  {
    institution: "Amity University",
    degree: "Master's Degree, Film & Television Production",
    year: "2022",
  },
  {
    institution: "The Heritage Academy",
    degree: "Bachelor's of Science, Media Science",
    year: "2019",
  },
];

const projects = [
  {
    title: "Reel content for Clothing Brand",
    category: "Video & Reels",
    url: "https://www.behance.net/gallery/245974921/Reel-content-for-Clothing-Brand",
  },
  {
    title: "Designs for a Kolkata based Pilates Studio",
    category: "Brand Identity",
    url: "https://www.behance.net/gallery/245661883/Designs-for-a-Kolkata-based-Pilates-Studio",
  },
  {
    title: "Flyers & Brochures for US based Clients",
    category: "Print Design",
    url: "https://www.behance.net/gallery/245661435/Flyers-Brochures-for-US-based-Clients",
  },
  {
    title: "Performance Creatives for US based Apparel Brand",
    category: "Social Media & Ads",
    url: "https://www.behance.net/gallery/245106281/Performance-Creatives-for-US-based-Apparel-Brand",
  },
  {
    title: "For a Kolkata based Apparel Brand",
    category: "Brand Design",
    url: "https://www.behance.net/gallery/217365435/For-a-Kolkata-based-Apparel-Brand",
  },
  {
    title: "Logo Designs",
    category: "Logo & Identity",
    url: "https://www.behance.net/gallery/217365205/Logo-Designs",
  },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#profile", label: "Profile" },
    { href: "#expertise", label: "Expertise" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-xs"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          data-ocid="nav.link"
          className="font-display font-black text-lg tracking-tight text-foreground hover:text-accent-color transition-colors"
        >
          JD
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-ocid="nav.link"
                className="font-sans font-medium text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:jishnu.dey03@gmail.com"
          data-ocid="nav.primary_button"
          className="hidden md:inline-flex items-center gap-2 bg-foreground text-background font-display font-bold text-sm px-4 py-2 hover:bg-accent-color transition-colors"
        >
          Get in Touch <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </nav>
    </header>
  );
}

export default function App() {
  const year = new Date().getFullYear();
  const hostname = window.location.hostname;

  return (
    <div className="min-h-screen bg-background relative">
      {/* ── AMBIENT COLOUR BLOBS ─────────────────────────── */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        {/* Violet blob — top right */}
        <div
          className="absolute"
          style={{
            top: "-15vw",
            right: "-15vw",
            width: "55vw",
            height: "55vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, oklch(0.72 0.18 278) 0%, transparent 68%)",
            opacity: 0.14,
          }}
        />
        {/* Rose blob — bottom left */}
        <div
          className="absolute"
          style={{
            bottom: "-12vw",
            left: "-12vw",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, oklch(0.74 0.18 340) 0%, transparent 68%)",
            opacity: 0.12,
          }}
        />
        {/* Amber accent — centre-ish */}
        <div
          className="absolute"
          style={{
            top: "40%",
            left: "35%",
            width: "35vw",
            height: "35vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, oklch(0.82 0.14 60) 0%, transparent 68%)",
            opacity: 0.08,
          }}
        />
      </div>

      <Nav />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col justify-end pb-32 pt-32 px-6 overflow-hidden md:pb-16"
        style={{ zIndex: 1 }}
      >
        {/* Ghost decorative text — opacity reduced to 50% */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-display font-black leading-none tracking-tighter uppercase whitespace-nowrap"
            style={{
              fontSize: "18vw",
              color: "transparent",
              WebkitTextStroke: "1.5px oklch(0.88 0.012 80)",
              opacity: 0.5,
            }}
          >
            JISHNU DEY
          </span>
        </div>

        {/* Profile photo in hero banner — right side */}
        <div
          className="absolute right-0 top-0 bottom-0 pointer-events-none select-none overflow-hidden hidden md:block"
          aria-hidden="true"
          style={{ width: "38vw" }}
        >
          <img
            src="/assets/uploads/JOY01303-1.JPEG"
            alt=""
            className="w-full h-full object-cover object-top"
            style={{
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="font-sans font-medium text-sm uppercase tracking-[0.25em] text-accent-color mb-4 leading-relaxed"
            >
              Creative Designer
              <span className="mx-2 opacity-50">·</span>
              Video Editor
              <span className="mx-2 opacity-50">·</span>
              <span className="whitespace-nowrap">Social Media Strategist</span>
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display font-black text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tighter uppercase mb-8 gradient-heading"
            >
              Jishnu
              <br />
              Dey
            </motion.h1>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="flex flex-wrap gap-4 items-center"
            >
              <a
                href="tel:7003403500"
                data-ocid="hero.link"
                className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 7003403500
              </a>
              <span className="text-border">|</span>
              <a
                href="mailto:jishnu.dey03@gmail.com"
                data-ocid="hero.link"
                className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                jishnu.dey03@gmail.com
              </a>
              <span className="text-border">|</span>
              <a
                href="https://behance.net/jishnudey"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-accent-color hover:underline transition-colors"
              >
                Behance Portfolio <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          aria-hidden="true"
        >
          <div className="w-px h-16 bg-border" />
          <span className="font-sans text-xs text-muted-foreground tracking-widest uppercase rotate-90 mt-2">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* ── PROFILE ──────────────────────────────────────── */}
      <section
        id="profile"
        className="py-24 px-6 bg-muted"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid md:grid-cols-[1fr_1.6fr] gap-16 items-center"
          >
            {/* Photo */}
            <motion.div variants={fadeUp} custom={0} className="relative">
              <div className="relative">
                <div
                  className="absolute -top-4 -left-4 w-full h-full border-2 border-accent-color"
                  aria-hidden="true"
                />
                <img
                  src="/assets/uploads/JOY01303-1.JPEG"
                  alt="Jishnu Dey"
                  className="relative w-full aspect-[3/4] object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p
                className="mt-6 font-display font-black text-6xl text-border/60 select-none"
                aria-hidden="true"
              >
                01
              </p>
            </motion.div>

            {/* Bio — glass panel */}
            <motion.div variants={fadeUp} custom={1}>
              <div className="glass-panel rounded-2xl p-8 md:p-10">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-accent-color mb-3">
                  Profile
                </p>
                <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight mb-8 leading-tight">
                  <span className="gradient-heading">
                    Brands that don&apos;t just look good —
                  </span>
                  <br />
                  <em
                    className="not-italic"
                    style={{ color: "oklch(0.57 0.19 38)" }}
                  >
                    they perform.
                  </em>
                </h2>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  Creative lead who builds brands that don&apos;t just look good
                  — they perform. I design identities, shape content strategy,
                  and turn social media into something more than noise. Equal
                  parts aesthetics and analytics.
                </p>
                <div className="mt-10 pt-10 border-t border-border/60 grid grid-cols-3 gap-6">
                  {[
                    { n: "5+", label: "Years Experience" },
                    { n: "5+", label: "Brands Built" },
                    { n: "3", label: "Disciplines" },
                  ].map(({ n, label }) => (
                    <div key={label}>
                      <p className="font-display font-black text-4xl gradient-heading">
                        {n}
                      </p>
                      <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mt-1">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERTISE ────────────────────────────────────── */}
      <section
        id="expertise"
        className="py-24 px-6"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-end justify-between mb-16 border-b border-border pb-6"
            >
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-accent-color mb-2">
                  What I Do
                </p>
                <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight gradient-heading uppercase">
                  Core Expertise
                </h2>
              </div>
              <p
                className="font-display font-black text-7xl text-border/50 select-none leading-none"
                aria-hidden="true"
              >
                02
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {expertise.map((skill, i) => (
                <motion.span
                  key={skill}
                  variants={fadeUp}
                  custom={i * 0.5}
                  className="glass-pill inline-block font-display font-bold text-sm md:text-base px-5 py-3 text-foreground cursor-default tracking-wide rounded-full"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────── */}
      <section
        id="projects"
        className="py-24 px-6 bg-muted"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-end justify-between mb-16 border-b border-border pb-6"
            >
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-accent-color mb-2">
                  Selected Work
                </p>
                <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight gradient-heading uppercase">
                  Projects
                </h2>
              </div>
              <p
                className="font-display font-black text-7xl text-border/50 select-none leading-none"
                aria-hidden="true"
              >
                03
              </p>
            </motion.div>

            <div className="space-y-3">
              {projects.map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  custom={i}
                  data-ocid={`projects.item.${i + 1}`}
                  className="group glass-card rounded-2xl flex items-center justify-between px-8 py-6 hover:border-accent-color transition-all duration-300 cursor-pointer block"
                >
                  <div className="flex items-center gap-6">
                    <span
                      className="font-display font-black text-2xl text-border/40 select-none group-hover:text-accent-color transition-colors"
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-color mb-1">
                        {project.category}
                      </p>
                      <h3 className="font-display font-bold text-lg md:text-xl text-foreground group-hover:gradient-heading transition-colors leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-6">
                    <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-accent-color transition-colors">
                      View on Behance
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              custom={6}
              className="mt-12 text-center"
            >
              <a
                href="https://www.behance.net/jishnudey"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="projects.primary_button"
                className="inline-flex items-center gap-3 bg-foreground text-background font-display font-bold text-sm px-8 py-4 hover:bg-accent-color transition-colors"
              >
                View Full Portfolio on Behance
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────── */}
      <section
        id="experience"
        className="py-24 px-6 bg-muted"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-end justify-between mb-16 border-b border-border pb-6"
            >
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-accent-color mb-2">
                  Career
                </p>
                <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight gradient-heading uppercase">
                  Experience
                </h2>
              </div>
              <p
                className="font-display font-black text-7xl text-border/50 select-none leading-none"
                aria-hidden="true"
              >
                04
              </p>
            </motion.div>

            <div className="space-y-4">
              {experiences.map((exp, ei) => (
                <motion.div
                  key={exp.company}
                  variants={fadeUp}
                  custom={ei}
                  data-ocid={`experience.item.${ei + 1}`}
                  className="glass-card rounded-2xl"
                >
                  <div className="py-10 px-8 grid md:grid-cols-[280px_1fr] gap-6 md:gap-12">
                    {/* Company */}
                    <div className="pt-1">
                      <h3 className="font-display font-black text-xl text-foreground leading-tight">
                        {exp.company}
                      </h3>
                      {exp.location && (
                        <p className="font-sans text-sm text-muted-foreground mt-1">
                          {exp.location}
                        </p>
                      )}
                    </div>
                    {/* Roles */}
                    <div className="space-y-8">
                      {exp.roles.map((role) => (
                        <div key={role.title}>
                          <div className="flex flex-wrap items-baseline gap-3 mb-4">
                            <span className="font-display font-bold text-lg text-foreground">
                              {role.title}
                            </span>
                            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-accent-color px-2 py-0.5 border border-accent-color">
                              {role.period}
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {role.bullets.map((b) => (
                              <li
                                key={b.slice(0, 40)}
                                className="flex gap-3 font-sans text-sm text-muted-foreground leading-relaxed"
                              >
                                <span className="mt-2 w-1 h-1 rounded-full bg-accent-color flex-shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EDUCATION ────────────────────────────────────── */}
      <section
        id="education"
        className="py-24 px-6"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="flex items-end justify-between mb-16 border-b border-border pb-6"
            >
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-accent-color mb-2">
                  Academics
                </p>
                <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight gradient-heading uppercase">
                  Education
                </h2>
              </div>
              <p
                className="font-display font-black text-7xl text-border/50 select-none leading-none"
                aria-hidden="true"
              >
                05
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  variants={fadeUp}
                  custom={i}
                  data-ocid={`education.item.${i + 1}`}
                  className="glass-card rounded-2xl p-10"
                >
                  <p
                    className="font-display font-black text-5xl text-border/40 select-none mb-6"
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </p>
                  <h3 className="font-display font-black text-2xl text-foreground mb-2">
                    {edu.institution}
                  </h3>
                  <p className="font-sans text-base text-muted-foreground mb-4">
                    {edu.degree}
                  </p>
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-accent-color">
                    Class of {edu.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer
        className="bg-foreground text-background py-16 px-6"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end">
            <div>
              <p className="font-display font-black text-5xl md:text-6xl tracking-tight mb-6">
                Let&apos;s build something
                <br />
                <span style={{ color: "oklch(0.57 0.19 38)" }}>bold.</span>
              </p>
              <div className="flex flex-wrap gap-6">
                <a
                  href="tel:7003403500"
                  data-ocid="footer.link"
                  className="inline-flex items-center gap-2 font-sans text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Phone className="w-4 h-4" />
                  +91 7003403500
                </a>
                <a
                  href="mailto:jishnu.dey03@gmail.com"
                  data-ocid="footer.link"
                  className="inline-flex items-center gap-2 font-sans text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Mail className="w-4 h-4" />
                  jishnu.dey03@gmail.com
                </a>
                <a
                  href="https://behance.net/jishnudey"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.primary_button"
                  className="inline-flex items-center gap-2 font-sans text-sm font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: "oklch(0.57 0.19 38)" }}
                >
                  behance.net/jishnudey <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            <div className="text-right">
              <p
                className="font-display font-black text-4xl opacity-10 select-none"
                aria-hidden="true"
              >
                JD
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="font-sans text-xs opacity-50">
              © {year} Jishnu Dey. All rights reserved.
            </p>
            <p className="font-sans text-xs opacity-50">
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-100 transition-opacity"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
