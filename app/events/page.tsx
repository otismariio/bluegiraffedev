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
    media: ProjectMedia[];
    date: string | number;
};

type Viewer = {
  items: ProjectMedia[];
  index: number;
};

const projects: Project[] = [
    {
        title: "Commissioning of Smart School, Ogbo Central Primary School - Ubakala Abia State",
      
        media: [
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos3.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos4.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos7.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos16.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
             {
                type: "image",
                src: "/images/commission/ubakal/ogbos1.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos2.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos5.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos12.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos8.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
             {
                type: "image",
                src: "/images/commission/ubakal/ogbos9.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos10.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos11.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos13.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos14.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
             {
                type: "image",
                src: "/images/commission/ubakal/ogbos16.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos15.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos22.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos23.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos24.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
             {
                type: "image",
                src: "/images/commission/ubakal/ogbos20.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos18.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos26.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos25.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            {
                type: "image",
                src: "/images/commission/ubakal/ogbos21.webp",
                alt: "Commissioning of Smart School, Ogbo - Ubakala",
            },
            

            //  {
            //     type: "video",
            //     src: "/videos/projects/school-one-video.mp4",
            //     alt: "School Project One project video",
            // },
        ],

        date: " July 7, 2026",
    },

    // {
    //     title: "Commissioning of Smart School, Umuomaikwu Community Primary School - Isiala Ngwa North, Abia State",

             
    //     media: [
    //         {
    //             type: "image",
    //             src: "/images/projects/ngwa1.jpeg",
    //             alt: "School Project One classroom",
    //         },
    //         {
    //             type: "image",
    //             src: "/images/projects/ngwa2.jpeg",
    //             alt: "School Project One learning space",
    //         },
    //         {
    //             type: "image",
    //             src: "/images/projects/ngwa3.jpeg",
    //             alt: "School Project One facilities",
    //         },
    //         {
    //             type: "image",
    //             src: "/images/projects/ngwa4.jpeg",
    //             alt: "School Project One facilities",
    //         },
    //         {
    //             type: "image",
    //             src: "/images/projects/ngwa5.jpeg",
    //             alt: "School Project One facilities",
    //         },
    //         {
    //             type: "image",
    //             src: "/images/projects/ngwa6.jpeg",
    //             alt: "School Project One facilities",
    //         },
    //         {
    //             type: "image",
    //             src: "/images/projects/ngwa7.jpeg",
    //             alt: "School Project One facilities",
    //         },
    //         {
    //             type: "image",
    //             src: "/images/projects/ngwa8.jpeg",
    //             alt: "School Project One facilities",
    //         },
    //          {
    //             type: "image",
    //             src: "/images/projects/ngwa9.jpeg",
    //             alt: "School Project One facilities",
    //         },
    //          {
    //             type: "image",
    //             src: "/images/projects/ngwa10.jpeg",
    //             alt: "School Project One facilities",
    //         },
    //          {
    //             type: "image",
    //             src: "/images/projects/ngwa11.jpeg",
    //             alt: "School Project One facilities",
    //         },
    //          {
    //             type: "image",
    //             src: "/images/projects/ngwa12.jpeg",
    //             alt: "School Project One facilities",
    //         },
    //         {
    //             type: "video",
    //             src: "/videos/projects/school-one-video.mp4",
    //             alt: "School Project One project video",
    //         },
    //     ],

    //     date: "July 2026",
    // },

    {
        title: "Training of Abia State Smart Teachers",
        
            media: [
            {
                type: "image",
                src: "/images/training/train1.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train2.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train4.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train6.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train8.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train10.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train3.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train5.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train7.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train9.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train11.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train15.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train12.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train14.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train13.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train27.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train15.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train23.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train24.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train26.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train27.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
            {
                type: "image",
                src: "/images/training/train29.jpeg",
                alt: "Training of Abia Smart Teachers",
            },
          
            
        ],

       date: "October 2025",
    },
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
        <p className="eyebrow">Our Events</p>
        <h1>Moments that mark our journey</h1>
        <p className="lead">
          Explore commissioning ceremonies, teachers training and other moments from our work across education, technology and infrastructure development in Nigeria.
        </p>

{projects.map((project) => (
  <section
    className="featured-project"
    key={project.title}
  >
    <p className="eyebrow">Featured Event</p>

    <h2>{project.title}</h2>
    <strong>
      Date: {project.date}
    </strong> 
    

    
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

    
  </section>
))}


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