"use client";
import GradientText from "./reactbits/GradientText";

export default function Number() {
  return (
    <GradientText
      colors={["#ff0000", "#4079ff", "#fff", "#4079ff", "#ff0000"]}
      animationSpeed={3}
      showBorder={false}
      className="m-10"
    >
      853688884王
    </GradientText>
  );
}
