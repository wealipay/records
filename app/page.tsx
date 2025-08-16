import LightRays from "./components/reactbits/LightRays";
export default function Home() {
  return (
      <LightRays
        raysOrigin="top-center"
        raysColor="red"
        raysSpeed={1.5}
        lightSpread={1.4}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.6}
        noiseAmount={0.35}
        distortion={0.05}
        className="custom-rays"
      />
  );
}
