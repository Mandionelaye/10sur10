"use client";
import { PlayCircle } from 'lucide-react';
import { Play } from 'next/font/google';
import React, { useRef } from 'react'

export default function VideoTemoi() {
    const video = useRef();
    const thumbnail = useRef();
    const playButton = useRef();
    const actionClick = () =>{
        // video.current.play();
        video.current.style.display = "block";
        playButton.current.style.display = "none";
        thumbnail.current.style.display = "none";
    }

  return (
    <>
 <section className="relative overflow-hidden section-padding py-20">
  {/* <!-- SVG Background Pattern --> */}
  <div className="absolute inset-0 opacity-10 pointer-events-none text-gray-600">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotGrid)" />
    </svg>
  </div>

  {/* <!-- Main Content Container --> */}
  <div className="container mx-auto px-4 relative z-10 mb-28">
    {/* <!-- Heading & Description --> */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vidéo de Témoignage
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une video de Témoignage de notre soutien scolaire en ligne.
          </p>
    </div>

    {/* <!-- Video Section --> */}
    <div className="max-w-4xl mx-auto">
      <div className="relative rounded-xl overflow-hidden shadow-2xl" id="video-container">
        {/* <!-- Thumbnail View --> */}
        <div id="thumbnail" className="relative" ref={thumbnail}>
          <img
            src="assets/images/about/img5.jpg"
            alt="Video thumbnail"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer" ref={playButton} onClick={actionClick} id="play-button">
            {/* <!-- Play Button SVG --> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-15 w-15 text-[#b03536]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4l12 6-12 6V4z" />
            </svg> */}
            <PlayCircle className="text-xl h-15 w-15 text-red-600"  />
          </div>
        </div>
        {/* <!-- Video Embed --> */}
        <div id="video" ref={video} className="aspect-video relative" style={{ display: "none" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Sxb0w68vQ-k?start=15&autoplay=1&mute=0&controls=1&loop=1&playlist=Sxb0w68vQ-k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            ></iframe>

        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- Optional: Add JavaScript for toggle functionality --> */}
{/* <script>
  document.addEventListener('DOMContentLoaded', () => {
    // const playButton = document.getElementById('play-button');
    // const thumbnail = document.getElementById('thumbnail');
    // const videoContainer = document.getElementById('video');

    playButton.addEventListener('click', () => {
      thumbnail.classList.add('hidden');
      videoContainer.classList.remove('hidden');
    });
  });
</script> */}
    </>
  )
}
