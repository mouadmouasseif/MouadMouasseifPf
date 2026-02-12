// "use client";
// import React, { useState } from "react";
// import { Play } from 'lucide-react';


// const videos = [
//   {
//     id: 1,
//     title: "Cinematic CNPR - Luice le grand",
//     category: "Cinematic",
//     duration: "1:45",
//     thumbnail: "/thumbnails/cnpr1.jpg",
//     src: "/videos/cinematique2.mp4",
//     description:
//       "Beach Day Cinematique CNPR And Luise le Grand scool Groupe.",
//   },
//   {
//     id: 2,
//     title: "CNPR x instutue des sports Fes",
//     category: "Social",
//     duration: "0:30",
//     thumbnail: "/thumbnails/so1.jpg",
//     src: "/videos/social1.mp4",
//     description:
//       "Vertical edit optimized for TikTok / Instagram Reels with punchy cuts and motion titles.",
//   },
//   {
//     id: 3,
//     title: "Yacht Club Rabat ",
//     category: "Cinematic",
//     duration: "1:42",
//     thumbnail: "/thumbnails/yacht.jpg",
//     src: "/videos/cinematique1.mp4",
//     description:
//       ".",
//   },
//    {
//     id: 4,
//     title: "Yacht Club Rabat ",
//     category: "Cinematic",
//     duration: "0:42",
//     thumbnail: "/thumbnails/yach3.jpg",
//     src: "/videos/cinematique3.mp4",
//     description:
//       ".",
//   },
//     {
//     id: 5,
//     title: "CNPR surfing day seaseon 2023",
//     category: "Social",
//     duration: "0:30",
//     thumbnail: "/thumbnails/so2.jpg",
//     src: "/videos/social2.mp4",
//     description:
//       "Vertical edit optimized for TikTok / Instagram Reels with punchy cuts and motion titles.",
//   },

//   {
//     id: 6,
//     title: "CNPR Sailing day Shcool",
//     category: "Social",
//     duration: "1:30",
//     thumbnail: "/thumbnails/so3.jpg",
//     src: "/videos/social3.mp4",
//     description:
//       "Beach Day Cinematique CNPR surfing day seaseon 2023 .",
//   },
//   {
//     id: 7,
//     title: "Hobie Cat Sailing YAcht club Rabat",
//     category: "Social",
//     duration: "0:30",
//     thumbnail: "/thumbnails/so4.jpg",
//     src: "/videos/social4.mp4",
//     description:
//       "Vertical edit optimized for TikTok / Instagram Reels with punchy cuts and motion titles.",

//   },
//   {
//     id: 8,
//     title: "Ilca Sailing day ",
//     category: "Social",
//     duration: "0:30",
//     thumbnail: "/thumbnails/so5.jpg",
//     src: "/videos/social5.mp4",
//     description:
//         "Vertical edit optimized for TikTok / Instagram Reels with punchy cuts and motion titles.",
//   },
//   {
//     id: 9,
//     title: "ilca Sailing day Shcool",
//     category: "Social",
//     duration: "0:30",
//     thumbnail: "/thumbnails/so6.jpg",
//     src: "/videos/social6.mp4",
//     description:
//       "Vertical edit optimized for TikTok / Instagram Reels with punchy cuts and motion titles.",
//   },
//     {
//     id: 10,
//     title: "CNPR Sailing day Shcool",
//     category: "Social",
//     duration: "0:30",
//     thumbnail: "/thumbnails/so7.jpg",
//     src: "/videos/social7.mp4",
//     description:
//       "Vertical edit optimized for TikTok / Instagram Reels with punchy cuts and motion titles.",
//     },
//     {
//     id: 11,
//     title: "Zouita edite basketball ",
//     category: "Social", 
//     duration: "0:30",
//     thumbnail: "/thumbnails/so8.jpg",
//     src: "/videos/social8.mp4",
//     description:
//       "Vertical edit optimized for TikTok / Instagram Reels with punchy cuts and motion titles.",
//     },
//     {
//     id: 12,
//     title: "CAR N GO Rent Car Ad",
//     category: "Social",
//     duration: "0:30",
//     thumbnail: "/thumbnails/so9.jpg",
//     src: "/videos/social9.mp4",
//     description:
//       "Vertical edit optimized for TikTok / Instagram Reels with punchy cuts and motion titles.",
//     }

// ];

// export default function MyVideoEditing() {
//   const [filter, setFilter] = useState<"All" | "Cinematic" | "Social">("All");
//   const [active, setActive] = useState<number | null>(null);

//   const filtered = videos.filter((v) => filter === "All" || v.category === filter);

//   return (
//     <section className="w-full py-12 mx-auto px-6 py-16 text-slate-900 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ">
//       {/* Header / Hero */}
//       <div className="mb-12 text-center">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-white">Video Editing Portfolio</h1>
//         <p className="mt-3 text-lg text-white/40">
//           Cinematic & Social-First edits — showreels, teasers, and short-form cuts optimized for
//           networks.
//         </p>
//         <div className="mt-6 flex items-center justify-center gap-3">
//           <button
//             onClick={() => setFilter("All")}
//             className={`px-4 py-2 rounded-md border  ${filter === "All" ? "bg-slate-900 text-blue-500 border-blue-400" : "bg-gray-500 text-slate-900 border-slate-400"}`}
//           >
//             All
//           </button>
//           <button
//             onClick={() => setFilter("Cinematic")}
//             className={`px-4 py-2 rounded-md border ${filter === "Cinematic" ? "bg-slate-900 text-blue-500 border-blue-400" : "bg-gray-500 text-slate-900 border-slate-400"}`}
//           >
//             Cinematic
//           </button>
//           <button
//             onClick={() => setFilter("Social")}
//             className={`px-4 py-2 rounded-md border ${filter === "Social" ? "bg-slate-900 text-blue-500 border-blue-400" : "bg-gray-500 text-slate-900 border-slate-400"}`}
//           >
//             Social
//           </button>
//         </div>
//       </div>

//       {/* Grid of cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filtered.map((v) => (
//           <article
//             key={v.id}
//             className="group bg-gradient-to-br from-white via-white/90 to-blue-900 overflow-hidden rounded-2xl shadow-md shadow-blue-700 overflow-hidden border border-black/50 hover:scale-[1.01] transition-transform"
//             aria-labelledby={`title-${v.id}`}
//           >
//             <div className="relative">
//               <img
//                 src={v.thumbnail}
//                 alt={v.title}
//                 className="w-full h-44 object-cover group-hover:brightness-90"
//               />
//               <span className="absolute top-3 left-3 bg-black/60 text-blue-400 text-xs px-2 py-1 rounded-md">
//                 {v.category}
//               </span>
//               <button
//                 onClick={() => setActive(v.id)}
//                 className="absolute inset-x-0 bottom-3 mx-auto w-12 h-12 rounded-full bg-black/90 flex items-center justify-center drop-shadow-lg left-1/2 -translate-x-1/2"
//                 aria-label={`Play ${v.title}`}
//               >
//                  <Play  className="text-blue-400"/>
//               </button>
//             </div>

//             <div className="p-4">
//               <h3 id={`title-${v.id}`} className="font-semibold text-lg text-blue-700">
//                 {v.title}
//               </h3>
//               <p className="mt-2 text-sm text-black">{v.description}</p>

//               <div className="mt-4 flex items-center justify-between">
//                 <small className="text-xs text-blue-700/60">{v.duration}</small>
//                 <div className="flex items-center gap-2">
                  
//                 </div>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>

//       {/* Modal player */}
//       {active && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
//           <div className="w-full max-w-3xl bg-white rounded-lg overflow-hidden">
//             <div className="flex justify-between items-center p-3 border-b">
//               <h4 className="font-semibold">{videos.find((x) => x.id === active)?.title}</h4>
//               <button
//                 onClick={() => setActive(null)}
//                 className="text-slate-600 px-3 py-1 rounded-md hover:bg-slate-100"
//               >
//                 Close
//               </button>
//             </div>
//             <div className="p-3 bg-slate-900">
//               <video
//                 controls
//                 src={videos.find((x) => x.id === active)?.src}
//                 className="w-full h-96 bg-black"
//               />
//             </div>
//             <div className="p-4">
//               <p className="text-sm text-slate-600">
//                 {videos.find((x) => x.id === active)?.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

      
//     </section>
    
//   );
// }
