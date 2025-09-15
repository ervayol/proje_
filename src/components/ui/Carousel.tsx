import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 5 },
  desktop: { breakpoint: { max: 1280, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};
export default function CustomCarousel() {
  const images = [
    "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/17pro-onsatis-pasaj-hero.jpg?1757661962000",
    "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/iPhone_17_hero-fbanner-web.jpg?1757662655000",
    "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/iPhone_Air_hero-fbanner-web.jpg?1757663250000",
    "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/Paycell-Hediye-Para-hero-Xbanner-web.jpg?1757323728000",
    "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/ay0925-pasaj-hero.jpg?1757050683000",
  ];
  return (
    <div className="max-w-7xl mx-auto mt-6">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        showDots
        arrows
        className="rounded-lg overflow-hidden shadow"
      >
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-[400px]">
            <figure className="w-full h-full relative">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </figure>
          </div>
        ))}
      </Carousel>
    </div>
  );
}