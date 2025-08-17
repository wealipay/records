"use client";
import GradientText from "./reactbits/GradientText";

export default function Number() {
  return (
    <GradientText
      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
      animationSpeed={3}
      showBorder={false}
      className="custom-class"
    >
      Add a splash of color!
    </GradientText>
  );
}
