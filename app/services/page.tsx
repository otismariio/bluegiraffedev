import Link from "next/link";
const services = [
    {
        title: "Smart School Development",
        paragraph:
            "We design and develop complete Smart School environments that integrate infrastructure, technology, power, connectivity and digital learning systems.",
            features: [
            "Smart classroom development",
            "Digital lesson production",
            "School management systems",
        ],

        images: [
        "/images/projects/smartschool1.png",
        "/images/projects/smartschool2.jpg",
        "/images/projects/smartschool3.jpg",
        "/images/projects/smartschool4.jpg",
    ],
    },
    {
        title: "Blended Learning Environments",
        paragraph:
            "We create physical and digital environments that support both traditional and technology-enabled teaching.",
            features: [
            "Online and classroom learning",
            "Teacher support tools",
            "Learner engagement systems",
        ],
         images: [
        "/images/projects/blended1.jpeg",
        "/images/projects/blended2.png",
        "/images/projects/blended3.jpeg",
        "/images/projects/blended4.jpeg",
    ],
    },

    {
        title: "Training and Digital Adoption",
        paragraph:
            "Technology delivers value when people know how to use it.",
        features: [
            "Training program development",
            "User adoption strategies",
            "Continuous support and improvement",
        ],
        images: [
        "/images/projects/training1.jpeg",
        "/images/projects/training2.jpeg",
        "/images/projects/training3.jpeg",
        "/images/projects/training4.jpeg",
    ],
    },

    {
        title: "Digital Infrastructure & Integration",
        paragraph:
            "We deploy the technology infrastructure required to support digital education into a single operational environment",
            features: [
            "Network infrastructure",
            "Server and data center solutions",
            "Content delivery systems",
            "Implementation and deployment",
        ],
         images: [
        "/images/projects/dl1.jpeg",
        "/images/projects/dl2.jpg",
        "/images/projects/dl3.jpeg",
        "/images/projects/dl4.jpeg",
    ],
    },
    
    
    
];
export default function Services(){return <><header className="site-header"><Link className="brand" href="/"><img src="/images/logo.png" alt="Blue Giraffe Development Ltd"/></Link><Link className="text-link" href="/">← Back to home</Link></header><main className="inner-page section-cream"><p className="eyebrow">Our services</p><h1>Technology Infrastructure for Modern Learning</h1><p className="lead">BGDL provides integrated technology and infrastructure solutions for institutions seeking to create modern, connected and digitally enabled learning environments.</p>
{services.map((service, i) => (
    <section
        className="service-detail"
        key={service.title}
    >
        <h2>{service.title}</h2>

        <p>{service.paragraph}</p>

        <ul>
            {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
            ))}
        </ul>

        <div className="service-gallery">
            {service.images.map((image) => (
                <img
                    key={image}
                    src={image}
                    alt={`${service.title} service image`}
                    className="service-gallery-image"
                />
            ))}
        </div>
    </section>
))}
</main></>}