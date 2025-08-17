"use client";
import GradientText from "./reactbits/GradientText";

export default function Number() {
  return (
    <GradientText
      colors={["red", "#4079ff", "white", "#4079ff", "red"]}
      animationSpeed={3}
      showBorder={true}
      className="p-10"
    >
      853688884
    </GradientText>
  );
}
