"use client";
import GradientText from "./reactbits/GradientText";

export default function Number() {
  return (
    <GradientText
      colors={["#ff0000", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
      animationSpeed={2}
      showBorder={true}
      className="custom-class"
    >
      Add a splash of color!五
    </GradientText>
  );
}
