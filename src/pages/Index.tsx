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
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Main Title */}
        <h1
          className="heading-display text-5xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: "0ms" }}
        >
          Buddie IQ
        </h1>

        {/* Primary Positioning */}
        <p
          className="heading-subtitle text-lg md:text-2xl lg:text-3xl animate-fade-in"
          style={{ animationDelay: "100ms" }}
        >
          Passive Cold-Chain Exposure Verification Infrastructure
        </p>

        {/* Supporting Line */}
        <p
          className="heading-subtitle text-base md:text-xl lg:text-2xl animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          Battery-Free Verification for Temperature-Sensitive Logistics
        </p>

        {/* Feature Icons */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 pt-8 pb-12">
          {features.map((feature, index) => (
            <div
              key={feature.label}
              style={{ animationDelay: `${300 + index * 100}ms` }}
              className="animate-fade-in opacity-0"
            >
              <FeatureIcon icon={feature.icon} label={feature.label} />
            </div>
          ))}
        </div>

        {/* Contact */}
        <p
          className="text-sm md:text-base font-medium animate-fade-in opacity-0"
          style={{ animationDelay: "800ms" }}
        >
          Amaete Umanah, Founder &amp; CEO.{" "}
          <a
            href="mailto:amaete@buddieiq.com"
            className="hover:underline transition-all"
          >
            amaete@buddieiq.com
          </a>
        </p>
      </div>
    </main>
  );
};

export default Index;
