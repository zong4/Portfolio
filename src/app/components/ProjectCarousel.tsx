import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectCarouselProps {
  images: { url: string; caption: string }[];
  title: string;
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white p-3 rounded-full shadow-xl transition-all hover:scale-110 backdrop-blur-sm"
      aria-label="Next image"
    >
      <ChevronRight className="w-6 h-6 text-gray-900" />
    </button>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white p-3 rounded-full shadow-xl transition-all hover:scale-110 backdrop-blur-sm"
      aria-label="Previous image"
    >
      <ChevronLeft className="w-6 h-6 text-gray-900" />
    </button>
  );
}

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
    adaptiveHeight: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-xl shadow-xl group/carousel"
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="outline-none">
            <div className="bg-muted">
              <div className="aspect-[16/10] relative">
                <img
                  src={image.url}
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
              {image.caption && (
                <div className="p-4 bg-background/95 backdrop-blur-sm">
                  <p className="text-sm text-muted-foreground text-center">
                    {image.caption}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  );
}
