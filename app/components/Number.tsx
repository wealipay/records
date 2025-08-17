"use client";
import GradientText from "./reactbits/GradientText";

export default function Number() {
  return (
    <GradientText
      colors={["#ff0000", "#4079ff", "#fff", "#4079ff", "#ff0000"]}
      animationSpeed={2}
      showBorder={true}
      className="animate-gradient bg-red-700"
    >
      853688884
    </GradientText>
  );
}
