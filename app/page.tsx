import LightRays from "./components/reactbits/LightRays";
export default function Home() {
  return (
    <div className="w-full h-full">
      <LightRays
        raysOrigin="top-center"
        raysColor="#fff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={true}
        mouseInfluence={1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
      />五hhhhnnn
    </div>
  );
}
