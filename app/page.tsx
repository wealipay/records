import Number from "./components/Number";
import LightRays from "./components/reactbits/LightRays";

export default function Home() {
  return (
    <div className="relative h-full">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ff0000"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={1}
        noiseAmount={0}
        distortion={0}
        className=""
      />

      <Number />
    </div>
  );
}
