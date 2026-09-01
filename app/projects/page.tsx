import Link from "next/link";

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
                src: "/images/projects/school-one-1.jpg",
                alt: "School Project One classroom",
            },
            {
                type: "image",
                src: "/images/projects/school-one-2.jpg",
                alt: "School Project One learning space",
            },
            {
                type: "image",
                src: "/images/projects/school-one-3.jpg",
                alt: "School Project One facilities",
            },
            {
                type: "image",
                src: "/images/projects/school-one-4.jpg",
                alt: "School Project One facilities",
            },
            {
                type: "video",
                src: "/videos/projects/school-one-video.mp4",
                alt: "School Project One project video",
            },
        ],

        status: "Commissioned",
        date: "August 2026",
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
                src: "/images/projects/school-two-1.jpg",
                alt: "School Project Two exterior",
            },

             {
                type: "image",
                src: "/images/projects/school-two-2.jpg",
                alt: "School Project Two classroom",
            },

             {
                type: "image",
                src: "/images/projects/school-two-4.jpg",
                alt: "School Project Two classroom",
            },
            
           
            {
                type: "image",
                src: "/images/projects/school-two-3.jpg",
                alt: "School Project Two technology space",
            },

            {
                type: "video",
                src: "/videos/projects/school-two-video.mp4",
                alt: "School Project Two project video",
            },
        ],

        status: "Commissioned",
        date: "August 2026",
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
                src: "/images/projects/school-three-1.jpg",
                alt: "School Project Three classroom",
            },
            {
                type: "image",
                src: "/images/projects/school-three-2.jpg",
                alt: "School Project Three learning facility",
            },
            {
                type: "video",
                src: "/videos/projects/school-three-video.mp4",
                alt: "School Project Three project video",
            },
            {
                type: "image",
                src: "/images/projects/school-three-3.jpg",
                alt: "School Project Three infrastructure",
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
export default function Projects(){return <><header className="site-header"><Link className="brand" href="/"><img src="/images/logo.png" alt="Blue Giraffe Development Ltd"/></Link><Link className="text-link" href="/">← Back to home</Link></header><main className="inner-page section-sand"><p className="eyebrow">Our projects</p><h1>Practical work. Measurable progress.</h1><p className="lead">Explore selected school projects and the thinking, infrastructure and delivery behind them.</p>

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
            {project.media.map((item) =>
                item.type === "video" ? (
                    <video
                        key={item.src}
                        className="project-gallery-media"
                        controls
                        playsInline
                        preload="metadata"
                    >
                        <source
                            src={item.src}
                            type="video/mp4"
                        />
                    </video>
                ) : (
                    <img
                        key={item.src}
                        src={item.src}
                        alt={item.alt || project.title}
                        className="project-gallery-media"
                    />
                )
            )}
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

<h2>The result</h2><p>We do not build technology into schools as an afterthought.</p><p>We develop the learning environments where infrastructure and technology are designed to work together from the beginning.</p></section></main></>}