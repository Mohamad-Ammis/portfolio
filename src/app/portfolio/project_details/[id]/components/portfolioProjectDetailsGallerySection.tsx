import CustomSectionHeader from "@/core/components/custom_section_header";
import { PortfolioInterface } from "@/lib/interfaces/portfolioInterface";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function PortfolioProjectDetailsGallerySection({
  portfolioInterface,
}: {
  portfolioInterface: PortfolioInterface;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (idx: number) => {
    setCurrentIndex(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0
        ? portfolioInterface.projectDetails.gallery.length - 1
        : prev - 1
    );
  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev === portfolioInterface.projectDetails.gallery.length - 1
        ? 0
        : prev + 1
    );

  return (
    <>
      <div className="h-screen bg-background py-10 flex flex-col items-center justify-start">
        <CustomSectionHeader title={"Gallery"} className="!mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-0   pb-5">
          {portfolioInterface.projectDetails.gallery.map((src, index) => (
            <div className="flex justify-center" key={index}>
              <motion.div
                onClick={() => openModal(index)}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="max-w-[300px] w-full aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300 will-change-transform"
              >
                <Image
                  src={src}
                  alt={`Project Image ${index + 1}`}
                  width={300}
                  height={225}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <button
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={closeModal}
            aria-label="Close"
          >
            &times;
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black z-50"
            onClick={prevImage}
            aria-label="Previous"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Fullscreen Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={portfolioInterface.projectDetails.gallery[currentIndex]}
              alt={`Project Image ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black z-50"
            onClick={nextImage}
            aria-label="Next"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 p-2 rounded-lg z-50">
            {portfolioInterface.projectDetails.gallery.map((src, idx) => (
              <div
                key={idx}
                className={`w-16 h-12 rounded overflow-hidden border-2 cursor-pointer transition-all ${
                  idx === currentIndex
                    ? "border-white scale-110"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
                onClick={() => setCurrentIndex(idx)}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${idx + 1}`}
                  width={64}
                  height={48}
                  className="object-cover w-full h-full"
                  quality={80}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
