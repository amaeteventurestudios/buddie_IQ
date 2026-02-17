import { Warehouse, Truck, Snowflake, BatteryCharging, Wifi } from "lucide-react";
import FeatureIcon from "@/components/FeatureIcon";

const Index = () => {
  const features = [
    { icon: Warehouse, label: "Warehouses" },
    { icon: Truck, label: "Transport" },
    { icon: Snowflake, label: "Cold-Chain" },
    { icon: BatteryCharging, label: "Zero Battery" },
    { icon: Wifi, label: "Wireless" },
  ];

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-white"
      style={{ backgroundColor: "#262b33" }}
    >
      <div className="max-w-4xl w-full text-center space-y-8">
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif">
          Buddie IQ
        </h1>

        {/* Primary Plain-English Positioning */}
        <p className="text-lg md:text-2xl lg:text-3xl">
          We verify that temperature-sensitive shipments stayed cold and sealed during transport and storage.
        </p>

        {/* Supporting Line */}
        <p className="text-base md:text-xl lg:text-2xl">
          Battery-free sensors that flag temperature abuse or tampering before goods move forward.
        </p>

        {/* Feature Icons */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 pt-8 pb-12">
          {features.map((feature) => (
            <div key={feature.label}>
              <FeatureIcon
                icon={feature.icon}
                label={feature.label}
                className="text-white"
              />
            </div>
          ))}
        </div>

        {/* Contact */}
        <p className="text-sm md:text-base font-medium">
          Contact:{" "}
          <a
            href="mailto:founder@buddieiq.com"
            className="underline hover:opacity-80"
          >
            founder@buddieiq.com
          </a>
        </p>
      </div>
    </main>
  );
};

export default Index;
