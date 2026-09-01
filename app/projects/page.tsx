"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ProjectMedia = {
    type: "image" | "video";
    src: string;
    alt?: string;
};

type Project = {
    title: string;
    description: string;
    features: string[];
    media: ProjectMedia[];
    status: string;
    date: string;
};

type Viewer = {
  items: ProjectMedia[];
  index: number;
};

const projects: Project[] = [
    {
        title: "Ogbo Central Primary School - Ubakala Abia State",

        description:
            "Abia's flagship operational Smart School.BGDL transformed Ogbo Central Primary School into a technology-enabled learning environment combining modern classroom infrastructure, renewable energy and digital learning systems.",

        features: [
            "13 Smart classrooms",
            "ICT & Innovation Laboratory",
            "Interactive SmartBoards",
            "Student Digital Learning devices",
            "Off-grid solar power system",
            "Children's Library",
            "Teachers' Resource Centre",
            "Sickbay",
            "CCTV & Security Infrastructure",
            "Children's Playground",
            "Landscaped Learning Space"
        ],

        media: [
            {
                type: "image",
                src: "/images/projects/ogbo1.jpeg",
                alt: "School Project One classroom",
            },
            {
                type: "image",
                src: "/images/projects/ogbo2.jpeg",
                alt: "School Project One learning space",
            },
            {
                type: "image",
                src: "/images/projects/ogbo3.jpeg",
                alt: "School Project One facilities",
            },
            {
                type: "image",
                src: "/images/projects/ogbo4.jpeg",
                alt: "School Project One facilities",
            },
            {
                type: "image",
                src: "/images/projects/ogbo5.jpeg",
                alt: "School Project One facilities",
            },
            {
                type: "image",
                src: "/images/projects/ogbo6.jpeg",
                alt: "School Project One facilities",
            },
            {
                type: "image",
                src: "/images/projects/ogbo7.jpeg",
                alt: "School Project One facilities",
            },
            {
                type: "image",
                src: "/images/projects/ogbo8.jpeg",
                alt: "School Project One facilities",
            },
             {
                type: "image",
                src: "/images/projects/ogbo9.jpeg",
                alt: "School Project One facilities",
            },
             {
                type: "image",
                src: "/images/projects/ogbo10.jpeg",
                alt: "School Project One facilities",
            },
             {
                type: "image",
                src: "/images/projects/ogbo11.jpeg",
                alt: "School Project One facilities",
            },
             {
                type: "image",
                src: "/images/projects/ogbo12.jpg",
                alt: "School Project One facilities",
            },
            // {
            //     type: "video",
            //     src: "/videos/projects/school-one-video.mp4",
            //     alt: "School Project One project video",
            // },
        ],

        status: "Commissioned",
        date: "July 2026",
    },

    {
        title: "Umuomaikwu Community Primary School - Isiala Ngwa North, Abia State",

        description:
            "A connected primary school built around blended learning. The Umuomaikwu Smart School combines ten technology-enabled classrooms with digital learning infrastructure, renewable energy and flexible spaces designed to support teaching, collaboration and school administration",

        features: [
            "10 Smart classrooms",
            "ICT Laboratory",
            "Interactive SmartBoards",
            "Learning Management System",
            "Student Digital Learning devices",
            "Off-grid solar power system",
            "Children's Library",
            "Teachers' Resource Centre",
            "Sickbay",
            "Safe Space for Students",
            "Girls Room",            
            "Security Infrastructure",
            "Children's Playground",
            "Landscaped Courtyard"
        ],

        media: [
            {
                type: "image",
                src: "/images/projects/ngwa1.jpeg",
                alt: "School Project One classroom",
            },
            {
                type: "image",
                src: "/images/projects/ngwa2.jpeg",
                alt: "School Project One learning space",
            },
            {
                type: "image",
                src: "/images/projects/ngwa3.jpeg",
                alt: "School Project One facilities",
            },
            {
                type: "image",
                src: "/images/projects/ngwa4.jpeg",
                alt: "School Project One facilities",
            },
            {
                type: "image",
                src: "/images/projects/ngwa5.jpeg",
                alt: "School Project One facilities",
            },
            {
                type: "image",
                src: "/images/projects/ngwa6.jpeg",
                alt: "School Project One facilities",
            },
            {
                type: "image",
                src: "/images/projects/ngwa7.jpeg",
                alt: "School Project One facilities",
            },
            {
                type: "image",
                src: "/images/projects/ngwa8.jpeg",
                alt: "School Project One facilities",
            },
             {
                type: "image",
                src: "/images/projects/ngwa9.jpeg",
                alt: "School Project One facilities",
            },
             {
                type: "image",
                src: "/images/projects/ngwa10.jpeg",
                alt: "School Project One facilities",
            },
             {
                type: "image",
                src: "/images/projects/ngwa11.jpeg",
                alt: "School Project One facilities",
            },
             {
                type: "image",
                src: "/images/projects/ngwa12.jpeg",
                alt: "School Project One facilities",
            },
            // {
            //     type: "video",
            //     src: "/videos/projects/school-one-video.mp4",
            //     alt: "School Project One project video",
            // },
        ],

        status: "Commissioned",
        date: "July 2026",
    },

    {
        title: "Umuagbai Junior Secondary School - Aba, Abia State",

        description:
            "The Umuagbai Project applies the Smart School model to secondary education, with infrastructure and functionality being developed around the requirements of Junior Secondary education and future expansion to Senior Secondary education.",

        features: [
            "Technology-enabled classrooms",
            "Digital learning infrastructure",
            "Interactive classroom technology",
            "ICT Facilities",
            "Science Learning devices",
            "Renewal Energy Infrastructure",
            "Student recreational spaces",
            "Sports Facilities",
            "Safe Space for Students",
            "Library and learning support spaces",
            "Science Simulation Facilities",
            "Current Focus: Infrastructure development, Space optimization, technology integration and preparation for phased expansion"
        ],

        media: [
            {
                type: "image",
                src: "/images/projects/aba1.jpeg",
                alt: "School Project Three classroom",
            },
            {
                type: "image",
                src: "/images/projects/aba2.jpeg",
                alt: "School Project Three learning facility",
            },
            {
                type: "image",
                src: "/images/projects/aba3.jpeg",
                alt: "School Project Three infrastructure",
            },
            {
                type: "image",
                src: "/images/projects/aba4.jpeg",
                alt: "School Project Three infrastructure",
            },
            {
                type: "image",
                src: "/images/projects/aba5.jpeg",
                alt: "School Project Three infrastructure",
            },
            {
                type: "image",
                src: "/images/projects/aba6.jpeg",
                alt: "School Project Three infrastructure",
            },
            {
                type: "video",
                src: "/images/projects/aba7.mp4",
                alt: "School Project Three project video",
            },
            {
                type: "video",
                src: "/images/projects/aba8.mp4",
                alt: "School Project Three project video",
            },
            
        ],

        status: "Development in Progress",
        date: "2026",
    },
];


const projectApproach = [
  {
    title: "Learning Environment",
    paragraph:
      "Purpose-built spaces designed around modern teaching and learning."
  },
  {
    title: "Digital Infrastructure",
    paragraph:
      "Networks, devices, interactive classroom technology and digital platforms."
  },
  {
    title: "Renewable Energy",
    paragraph:
      "Solar and energy systems designed to support reliable digital operations."
  },
  {
    title: "Digital Administration",
    paragraph:
      "Technology-enabled systems for attendance, assessment, records and school management."
  },
  {
    title: "Human Capacity",
    paragraph:
      "Teacher training, digital pedagogy and practical technology adoption."
  },
  {
    title: "Long-Term Operations",
    paragraph:
      "Maintenance, technical support, asset management and operational frameworks."
  }
];

export default function Projects() {
  const [viewer, setViewer] = useState<Viewer | null>(null);

  const current = viewer?.items[viewer.index];

  const moveViewer = (direction: number) => {
    if (!viewer) return;

    setViewer({
      ...viewer,
      index:
        (viewer.index + direction + viewer.items.length) %
        viewer.items.length,
    });
  };

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/">
          <img src="/images/logo.png" alt="Blue Giraffe Development Ltd" />
        </Link>
        <Link className="text-link" href="/">
          ← Back to home
        </Link>
      </header>
      <main className="inner-page section-sand">
        <p className="eyebrow">Our projects</p>
        <h1>Practical work. Measurable progress.</h1>
        <p className="lead">
          Explore selected school projects and the thinking, infrastructure and delivery behind them.
        </p>

{projects.map((project) => (
  <section
    className="featured-project"
    key={project.title}
  >
    <p className="eyebrow">Featured project</p>

    <h2>{project.title}</h2>

    <p>{project.description}</p>

    <h3>Key features</h3>

    <ul>
      {project.features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>

    <div className="project-slider">
      {project.media.map((item, index) => (
        <button
          className="media-tile"
          key={`${item.src}-${index}`}
          onClick={() =>
            setViewer({
              items: project.media,
              index,
            })
          }
          aria-label={`Open ${item.alt || project.title}`}
        >
          {item.type === "video" ? (
            <>
              <video
                muted
                preload="metadata"
                playsInline
              >
                <source
                  src={item.src}
                  type="video/mp4"
                />
              </video>

              <span>▶ Play video</span>
            </>
          ) : (
            <img
              src={item.src}
              alt={item.alt || project.title}
            />
          )}
        </button>
      ))}
    </div>

    <strong>
      Status: {project.status} | Date: {project.date}
    </strong>
  </section>
))}

<section>
  <h2>Our project approach</h2>

  <ol>
    {projectApproach.map((step) => (
      <li key={step.title}>
        <h3>{step.title}</h3>
        <p>{step.paragraph}</p>
      </li>
    ))}
  </ol>

  <h2>The result</h2>

  <p>
    We do not build technology into schools as an afterthought.
  </p>

  <p>
    We develop the learning environments where infrastructure
    and technology are designed to work together from the beginning.
  </p>
</section>
</main>

{viewer && current && (
  <div
    className="media-lightbox"
    onClick={() => setViewer(null)}
  >
    <button
      className="lightbox-close"
      onClick={() => setViewer(null)}
      aria-label="Close viewer"
    >
      ×
    </button>

    <button
      className="lightbox-arrow left"
      onClick={(event) => {
        event.stopPropagation();
        moveViewer(-1);
      }}
      aria-label="Previous media"
    >
      ‹
    </button>

    <div
      className="lightbox-content"
      onClick={(event) => event.stopPropagation()}
    >
      {current.type === "video" ? (
        <video
          controls
          autoPlay
          playsInline
          src={current.src}
        />
      ) : (
        <img
          src={current.src}
          alt={current.alt || "Project image"}
        />
      )}
    </div>

    <button
      className="lightbox-arrow right"
      onClick={(event) => {
        event.stopPropagation();
        moveViewer(1);
      }}
      aria-label="Next media"
    >
      ›
    </button>
  </div>
)}

</>
);
}