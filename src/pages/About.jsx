import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";


import { CTA } from "../components";
import { experiences, skills, stickers } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const [selectedSticker, setSelectedSticker] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open modal with selected sticker index
  const openModal = (index) => {
    setSelectedSticker(stickers[index]);
    setCurrentIndex(index);
  };

  // Close modal
  const closeModal = () => {
    setSelectedSticker(null);
  };

  // Move to the previous image in the carousel
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stickers.length - 1 : prevIndex - 1));
  };

  // Move to the next image in the carousel
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === stickers.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className='max-container' style={{ backgroundColor: "black", color: "white" }}>
      <h1 className='head-text'>
        Hello,{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Green Art
        </span>{" "} Here
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Fun projects, specializing in Design Sticker, Animation & Create Web Site
        </p>
      </div>



      {/* Stickers Section */}
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Stickers</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {stickers.map((skill, i) => (
            <div className='block-container w-20 h-20' key={i.toString()}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={`sticker-${i}`}
                  className='max-w-full h-auto rounded-xl shadow-lg cursor-pointer'
                  onClick={() => openModal(i)} // Open modal on click
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Section */}
      {selectedSticker && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-zinc-900 p-5 rounded-xl max-w-4xl w-full'>
            <button
              onClick={closeModal}
              className='absolute top-2 right-2 bg-gray-700 text-green-500 p-2 rounded-full'
            >
            <i className="fa-solid fa-x"></i>
            </button>

            <div className='flex items-center justify-center'>
              {/* Carousel Navigation */}
              <button onClick={prevImage} className='text-3xl text-green-500 p-2'>
              <i className="fa-solid fa-circle-chevron-left"></i>
              </button>

              <div className='w-full max-w-md flex justify-center'>
                <img
                  src={stickers[currentIndex].imageUrl}
                  alt={`sticker-${currentIndex}`}
                  className='w-full h-auto rounded-xl object-contain'
                />
              </div>

              <button onClick={nextImage} className='text-3xl text-green-500 p-2'>
              <i className="fa-solid fa-circle-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Web Section */}
      <div className='py-16'>
        <h3 className='subhead-text'>Web Development.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of projects
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  border: `2px solid ${experience.iconBg}`,
                  backgroundColor: '#000',
                  boxShadow: `0 0 15px ${experience.iconBg}, 0 0 30px ${experience.iconBg}`,
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${experience.iconBg}`,
                }}
              >
                <div>
                  <h3 className='text-white text-xl font-poppins font-semibold'>
                    {experience.title}&nbsp;
                  </h3>
                  <p
                    className='text-white/75 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    <a href={experience.website} target='_blank'>Visit Site</a>
                  </p>

                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-white/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>

        </div>
      </div>


      <CTA />
    </section>
  );
};

export default About;

