import { Leaf, Grid3X3, Home, BatteryCharging, Wifi } from "lucide-react";
import FeatureIcon from "@/components/FeatureIcon";

const Index = () => {
  const features = [
    { icon: Leaf, label: "PLANTS" },
    { icon: Grid3X3, label: "HIVES" },
    { icon: Home, label: "HABITATS" },
    { icon: BatteryCharging, label: "ZERO BATTERY" },
    { icon: Wifi, label: "WIRELESS" },
  ];

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-black"
      style={{ backgroundColor: "#86a86f" }}
    >
      <div className="max-w-6xl w-full text-center space-y-10">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight">
          Buddie IQ
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-2xl lg:text-3xl font-semibold">
          We are the Ring for plants, hives, and small habitats
        </p>

        {/* Subtitle */}
        <p className="text-base md:text-xl lg:text-2xl font-semibold">
          Making Invisible Environments Visible
        </p>

        {/* Feature Icons */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-14 lg:gap-20 pt-6 pb-6">
          {features.map((feature) => (
            <div key={feature.label}>
              <FeatureIcon icon={feature.icon} label={feature.label} />
            </div>
          ))}
        </div>

        {/* Contact */}
        <p className="text-sm md:text-base font-semibold">
          Contact:{" "}
          <a href="mailto:founder@buddieiq.com" className="underline">
            founder@buddieiq.com
          </a>
        </p>
      </div>
    </main>
  );
};

export default Index;
