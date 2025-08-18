import StarBorder from "./components/reactbits/StarBorder";
import LightRays from "./components/reactbits/LightRays";
import Number from "./components/Number";

export default function Home() {
  return (
    <div className="relative h-1/3">
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
      <StarBorder as="button" className="m-48" color="white" speed="5s">
        联系球<br />
          一点点
      </StarBorder>
    </div>
  );
}
