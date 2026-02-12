"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import WebMobileDesign from "./WebMobileDesign";
// import MyVideoEditing from "./Video";


// ==================== DATA ==================== //
const player = [
  { src: "/player/1.png", name: "Hamza Gouliya" },
  { src: "/player/2.png", name: "Imane taoussi" },
  { src: "/player/3.png", name: "Anass El Moussaoui" },
  { src: "/player/4.png", name: "Fatim zahra toumie" },
  { src: "/player/5.png", name: "Bader Hermani" },
  { src: "/player/6.png", name: "chaima alaoui" },
  { src: "/player/7.png", name: "Ilias Aqboub" },
  { src: "/player/8.png", name: "Khaoula Benfakir" },
  { src: "/player/9.png", name: "The Joker Berja" },
  { src: "/player/10.png", name: "Meryam Emzem" },
  { src: "/player/11.png", name: "Yassine Charkaoui Sellami" },
  { src: "/player/12.png", name: "Malika Goutay" },
  { src: "/player/13.png", name: "Bilal Dahane 3" },
  { src: "/player/14.png", name: "N T" },
  { src: "/player/15.png", name: "Ismail Yatribi" },
  { src: "/player/16.png", name: "Soukaina Sbai" },
  { src: "/player/17.png", name: "Mouad Mouasseif" },
  { src: "/player/18.png", name: "Romaissae Taji" },
  { src: "/player/19.png", name: "Zouita Abdelhakim" },
  { src: "/player/20.png", name: "Mouad Mouasseif Regate massira" },
  { src: "/player/21.png", name: "Adam Belkbira" },
  { src: "/player/22.png", name: "Amiah Simmons" },
  { src: "/player/23.png", name: "Hamza Ozbara Caoch" },
  { src: "/player/24.png", name: "Amiah Simmons V2" },
  { src: "/player/25.png", name: "Bilal Khali" },
  { src: "/player/26.png", name: "Iamde iddamine" },
  { src: "/player/27.png", name: "Mouad Mouasseif" },
  { src: "/player/28.png", name: "Iamde iddamine V2" },
  { src: "/player/29.png", name: "Yaniss " },
];

const eventDesigns = [
  { src: "/event/1.png", name: "Next Match" },
  { src: "/event/2.png", name: "Basketball Championship" },
  { src: "/event/3.png", name: "Friendly Game" },
  { src: "/event/4.png", name: "Training Camp" },
  { src: "/event/5.png", name: "Cup Final 2025" },
  { src: "/event/6.png", name: "Summer Tournament" },
  { src: "/event/7.png", name: "Winter League" },
  { src: "/event/8.png", name: "Charity Match" },
  { src: "/event/9.png", name: "Youth Championship" },
  { src: "/event/10.png", name: "ESN Sports Day" },   
  { src: "/event/11.png", name: "Volleyball Finals" },
  { src: "/event/12.png", name: "Sailing Regatta" },
  { src: "/event/13.png", name: "Dragon Boat Race" },
  { src: "/event/14.png", name: "Football League" },
  { src: "/event/15.png", name: "Basketball Workshop" },
  { src: "/event/16.png", name: "Team Building Event" },
  { src: "/event/17.png", name: "Sports Gala" },
  { src: "/event/18.png", name: "Athlete Awards" },
  { src: "/event/19.png", name: "Maritime Festival" },
  { src: "/event/20.png", name: "Sailing Championship" },
  { src: "/event/21.png", name: "Next Match" },
  { src: "/event/22.png", name: "Basketball Championship" },
  { src: "/event/23.png", name: "Friendly Game" },
  { src: "/event/24.png", name: "Training Camp" },
  { src: "/event/25.png", name: "Cup Final 2025" }, 
  { src: "/event/26.png", name: "Sailing Championship" },
  { src: "/event/27.png", name: "Massira Competition" },
  { src: "/event/28.png", name: "Yaniss Evente" },


];

const logoDesigns = [
  { src: "/logo/1.png", name: "Car N Go" },
  { src: "/logo/2.png", name: "Made For Web" },
  { src: "/logo/3.png", name: "ENSpo" },
  { src: "/logo/4.png", name: "CNPR" },
  { src: "/logo/5.png", name: "ESN Football" },
  { src: "/logo/6.png", name: "ESN Volley BAll" },
  { src: "/logo/7.png", name: "ESN Basketball" },
  { src: "/logo/8.png", name: "Yacht Club Rabat" },
  { src: "/logo/9.png", name: "Red Dragon" },
  { src: "/logo/10.png", name: "ENSPOCT" },
  { src: "/logo/11.png", name: "Laila De Luxe" },
  { src: "/logo/12.png", name: "SA Poseur" },
  { src: "/logo/13.png", name: "LA Sailing Athlete" },
  { src: "/logo/14.png", name: "CNPR V2" },
  { src: "/logo/15.png", name: "KBG Suarl" },
  { src: "/logo/16.png", name: "Morrocan Sailing" },
  { src: "/logo/17.png", name: "Zion" },
  { src: "/logo/18.png", name: "T N" },
  { src: "/logo/19.png", name: "Meryam" },
  { src: "/logo/20.png", name: "Queen Honney" },
  { src: "/logo/21.png", name: "Blue Wolf" },
  { src: "/logo/22.png", name: "Yaskin" },
  { src: "/logo/23.png", name: "Adam Belkbira Logo" },
  { src: "/logo/24.png", name: "Ensam Cybresecurite Logo" },

];

function ImageModal({
  open,
  src,
  name,
  onClose,
}: {
  open: boolean;
  src: string | null;
  name: string | null;
  onClose: () => void;
}) {
  if (!open || !src) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={name || "image"}
          width={1600}
          height={900}
          className="w-full h-full object-contain rounded-xl"
        />
        {name && (
          <p className="mt-3 text-center text-white text-lg font-semibold">
            {name}
          </p>
        )}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

// ==================== CARROUSEL DESIGN ==================== //
function DesignCarousel({
  title,
  items,
  onImageClick,
}: {
  title: string;
  items: { src: string; name: string }[];
  onImageClick: (src: string, name: string) => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const startAnim = () => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 35,
        },
      },
    });
  };

  // DÉMARRER L’ANIMATION APRÈS LE MONTAGE
  useEffect(() => {
    startAnim();
  }, []); // une seule fois au montage

  const handleClick = (item: { src: string; name: string }) => {
    controls.stop();
    setIsPaused(true);
    onImageClick(item.src, item.name);
  };

  const resume = () => {
    if (!isPaused) return;
    setIsPaused(false);
    startAnim();
  };

  return (
    <section className="w-full overflow-hidden py-12" onMouseLeave={resume}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex gap-6"
          animate={controls}
          whileHover={{ x: 0 }} // stop au hover
        >
          {[...items, ...items].map((item, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-44 sm:w-56 md:w-64 h-72 rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleClick(item)}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.src}
                alt={item.name}
                fill
                className="object-cover"
              />
              {hovered === index && (
                <motion.div
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-white text-lg font-semibold text-center px-2">
                    {item.name}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


// ==================== SECTION LOGOS ==================== //
function LogoSection({
  onImageClick,
}: {
  onImageClick: (src: string, name: string) => void;
}) {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const startAnim = () => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 40,
        },
      },
    });
  };

  // DÉMARRER L’ANIMATION APRÈS LE MONTAGE
  useEffect(() => {
    startAnim();
  }, []);

  const handleClick = (logo: { src: string; name: string }) => {
    controls.stop();
    setIsPaused(true);
    onImageClick(logo.src, logo.name);
  };

  const resume = () => {
    if (!isPaused) return;
    setIsPaused(false);
    startAnim();
  };

  return (
    <section className="py-16 overflow-hidden" onMouseLeave={resume}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Team & Logo Design</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div className="flex gap-10" animate={controls}>
          {[...logoDesigns, ...logoDesigns].map((logo, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center cursor-pointer bg-slate-800/30 rounded-full border border-slate-700 hover:border-blue-400 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              onClick={() => handleClick(logo)}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={150}
                height={150}
                className="object-contain rounded-full"
              />
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 text-sm text-white bg-black/60 px-2 py-1 rounded-md"
              >
                {logo.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


// ==================== PRINCIPAL ==================== //
export default function MyDesign() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [modalName, setModalName] = useState<string | null>(null);

  const handleImageClick = (src: string, name: string) => {
    setModalSrc(src);
    setModalName(name);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalSrc(null);
    setModalName(null);
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <DesignCarousel title="Player Design" items={player} onImageClick={handleImageClick} />
                      <WebMobileDesign />

      <DesignCarousel title="Event Design" items={eventDesigns} onImageClick={handleImageClick} />
              {/* <MyVideoEditing /> */}
      
      <LogoSection onImageClick={handleImageClick} />

      <ImageModal
        open={modalOpen}
        src={modalSrc}
        name={modalName}
        onClose={closeModal}
      />
    </div>
  );
}