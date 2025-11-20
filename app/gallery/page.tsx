import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";

// Dynamically import all .jpg and .mp4 files from public/avvenue
const galleryFiles = [
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
  "img3 (1).mp4",
];

const galleryItems = galleryFiles.map((filename, idx) => {
  const ext = filename.split(".").pop()?.toLowerCase();
  return {
    src: `/avvenue/${filename}`,
    alt: `Gallery item ${idx + 1}`,
    type: ext === "mp4" ? "video" : "image",
    category: "Gallery",
  };
});

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-secondary/30 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Our Community Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Capturing moments of growth, connection, and joy across
              Scarborough and West Hill.
            </p>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl bg-muted"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-full object-cover"
                    style={{ position: "absolute", inset: 0 }}
                  />
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-2 border border-white/30 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
