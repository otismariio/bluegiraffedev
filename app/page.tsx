"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const services = [
  ["Our Vision", "We believe the future of education depends on infrastructure designed around how people learn, teach and interact with technology. BGDL is building the infrastructure  that makes this future possible."],
  ["Our Focus", " We focus on the development of Smart Schools and digital learning infrastructure that make technology an intergral part of the learning. Our work spans the complete development lifecycle, from concept and design through infrastructure development, technology deployment, training, commissioning and operational support."],
  ["Our Experience", "Our work on the Abia State Smart School Programme demonstrates this approach in practice. BGDL has delivered technology-enabled schools integrating smart classrooms, digital learning platforms, ICT infrastructure, renewable energy, connectivity, teacher training and operational systems. This experience has shaped our understanding of what is required to move a school from conventional infrastructure to a functioning digital learning environment.."],
  ["Our Capability", "Smart School Development, Digital Learning Infrastructure, ICT and Network Infrastructure, School and Learning Management Systems, Renewable Energy for Digital Infrastructure, Facility and Technical Support."],
];

export default function Home() {
    
  const [menu, setMenu] = useState(false);
  const [slide, setSlide] = useState(0);
  const [modal, setModal] = useState<"service" | "gallery" | "video" | null>(null);
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setSlide(current => (current + 1) % 3), 5000);
    return () => window.clearInterval(timer);
  }, []);
  return <>
    <header className="site-header"><Link className="brand" href="#top"><img src="/images/logo.png" alt="Blue Giraffe Development Ltd" /></Link><button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle menu">☰</button><nav className={menu ? "site-nav open" : "site-nav"}><a href="/#about" onClick={() => setMenu(false)}>About</a><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/careers">Careers</Link><Link href="/contact">Contact</Link></nav></header>
    <main id="main-content">
      <section className="hero section-blue" id="top"><div><h1>We turn bold ideas into complete, turnkey projects.</h1><p className="hero-text">Blue Giraffe Development Ltd creates clear, dependable technology for organisations ready to move forward.</p><a className="button" href="#about">Explore what we do ↗</a></div><div className="hero-slider"><div className="slide-image" style={{ backgroundImage: `url(/images/hero-${slide + 1}.png)` }} /><button className="slider-arrow previous" onClick={() => setSlide((slide + 2) % 3)} aria-label="Previous image">‹</button><button className="slider-arrow next" onClick={() => setSlide((slide + 1) % 3)} aria-label="Next image">›</button><div className="slider-dots">{[0, 1, 2].map(i => <button key={i} className={i === slide ? "active" : ""} onClick={() => setSlide(i)} aria-label={`Show image ${i + 1}`} />)}</div></div></section>
      <section className="section-cream" id="about"><div className="section-heading"><p className="eyebrow">About us</p><h2>Building the Infrastructure for the Future of Learning.</h2></div><div className="two-col"><div><p className="lead">Blue Giraffe Development Limited (BGDL) is a technology and digital infrastructure development company focused on creating modern, connected and intelligent learning environments.</p><p>We design and develop blended learning environments where physical infrastructure, digital technology, connectivity, renewable energy and educational systems work together to transform how institutions teach, learn and operate.</p></div>
      <button className="md-card" onClick={() => setModal("video")}>
        <video
          muted
          preload="metadata"
          playsInline
          poster="/images/md-photo.jpeg"
      >
          <source
              src="/images/projects/md.mp4"
              type="video/mp4"
          />
      </video>
      
      <span className="play">▶</span><span className="card-copy"><strong>Meet our Managing Director, Chief Mrs Orieji Okwara Emele</strong><small>Play a welcome message from our MD</small></span></button></div></section>


      <section className="section-lilac" id="services">
        <div className="section-heading"><p className="eyebrow"></p>
        <h2>What we do, and why it works.</h2></div>
        
        <div className="service-list">
  {services.map((item, i) => (
    <button
      key={item[0]}
      onClick={() => {
        setSelected(i);
        setModal("service");
      }}
    >
      <span>0{i + 1}</span>
      <strong>{item[0]}</strong>
      <i>+</i>
    </button>
  ))}
</div>
        
        </section>

      
      <section className="section-sand" id="projects">
    <div className="section-heading">
        <p className="eyebrow">Selected work</p>

        <h2>Projects that make a difference.</h2>
    </div>

    <div className="project-grid">
        <article className="project-card">
            <img
                className="project-cover"
                src="/images/smart-school-cover.png"
                alt="Smart School transformation project"
            />

            <div className="project-card-content">
                <strong>Smart School transformation</strong>

                <Link className="text-link" href="/projects">
                    View gallery ↗
                </Link>
            </div>
        </article>

        <article className="project-card">
            <img
                className="project-cover"
                src="/images/digital-transformation-cover.png"
                alt="Digital transformation project"
            />

            <div className="project-card-content">
                <strong>Digital platform transformation</strong>

                <Link className="text-link" href="/projects">
                    View gallery ↗
                </Link>
            </div>
        </article>
    </div>
</section>

<section className="section-blue-light two-col" id="career">
    <div>
        <p className="eyebrow">Careers</p>

        <h2>Bring your curiosity. Build work that matters.</h2>
    </div>

    <div>
        <p>
            We are always interested in meeting thoughtful designers,
            developers and storytellers.
        </p>

        <a
            className="text-link" href="/contact"
        >
            Start a conversation ↗
        </a>
    </div>
</section>

</main>

    <footer className="site-footer"><img src="/images/logo2.png" alt="Blue Giraffe Development Ltd" /><div><p>Okenini Close, Living Spring Estate, Umuahia</p><a href="tel:+2349064815555">+2349064815555</a><a href="mailto:info@bluegiraffedev.com">info@bluegiraffedev.com</a></div><div><p>© {new Date().getFullYear()} Blue Giraffe Development Ltd</p><div className="socials"><a href="#">f</a><a href="#">◎</a><a href="#">in</a><a href="#">𝕏</a></div></div><a className="to-top" href="#top">↑<small>Top</small></a></footer>

<div className="service-list">
  {services.map((item, i) => (
    <button
      key={item[0]}
      onClick={() => {
        setSelected(i);
        setModal("service");
      }}
    >
      <span>0{i + 1}</span>
      <strong>{item[0]}</strong>
      <i>+</i>
    </button>
  ))}
</div>

{modal && (
  <dialog
    open
    className={`modal ${
      modal === "service" ? "info-modal" : ""
    }`}
  >
    <button
      className="modal-close"
      onClick={() => setModal(null)}
      aria-label="Close modal"
    >
      ×
    </button>

    {modal === "service" && (
      <>
        <p className="eyebrow">Information</p>

        <h2>{services[selected][0]}</h2>

        <p className="info-modal-text">
          {services[selected][1]}
        </p>
      </>
    )}

    {modal === "gallery" && (
      <>
        <p className="eyebrow">Project gallery</p>
        <h2>Smart School transformation</h2>

        <div className="gallery-grid">
          <div>
            <small>Before</small>
            <div className="gallery-shot before" />
          </div>

          <div>
            <small>After</small>
            <div className="gallery-shot after" />
          </div>
        </div>
      </>
    )}

    {modal === "video" && (
      <video
        controls
        autoPlay
        playsInline
        src="/videos/md.mp4"
      />
    )}
  </dialog>
)}
  </>;
}
