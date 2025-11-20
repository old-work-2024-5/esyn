"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Use all .jpg images from public/avvenue
const imageFilenames = [
  "img3 (1).jpg",
  "img3 (2).jpg",
  "img3 (3).jpg",
  "img3 (4).jpg",
  "img3 (5).jpg",
  "img3 (6).jpg",
  "img3 (7).jpg",
  "img3 (8).jpg",
  "img3 (9).jpg",
  "img3 (10).jpg",
  "img3 (11).jpg",
  "img3 (12).jpg",
  "img3 (13).jpg",
  "img3 (14).jpg",
  "img3 (15).jpg",
  "img3 (16).jpg",
  "img3 (17).jpg",
  "img3 (18).jpg",
  "img3 (19).jpg",
  "img3 (20).jpg",
  "img3 (21).jpg",
  "img3 (22).jpg",
  "img3 (23).jpg",
  "img3 (24).jpg",
  "img3 (25).jpg",
  "img3 (26).jpg",
  "img3 (27).jpg",
  "img3 (28).jpg",
  "img3 (29).jpg",
];

const galleryImages = imageFilenames.map((filename, idx) => ({
  src: `/avvenue/${filename}`,
  alt: `Gallery image ${idx + 1}`,
}));

export function GallerySlideshow() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {galleryImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden border-0 shadow-none">
                  <CardContent className="flex aspect-square items-center justify-center p-0 relative rounded-xl overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
