export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div
        className="w-full bg-no-repeat"
        style={{
          aspectRatio: "1993 / 877",
          backgroundImage: "url('/hero-image.png')",
          backgroundSize: "102% 102%",
          backgroundPosition: "center",
        }}
      />
    </section>
  );
}
