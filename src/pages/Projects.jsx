import { CTA } from "../components";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text text-white'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Animation Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed mb-10'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart.
      </p>


      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
         <div
         key={index}
         className="group relative max-w-full overflow-hidden rounded-xl shadow-lg bg-slate-800 p-4 hover:scale-105 transform transition-all duration-500 neon-effect"
       >
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10 group-hover:bg-opacity-30 transition-all duration-500"></div>
            <div className="relative z-20">
              <h4 className="text-2xl text-white font-semibold mb-4">{project.title}</h4>
              <p className="text-white/80 mb-4">{project.description}</p>

              {/* YouTube Embed */}
              <div className="relative pb-[56.25%] mb-4 w-full">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={"https://www.youtube.com/embed/"+project.videoId}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>


      <CTA />
    </section>
  );
};

export default Projects;
