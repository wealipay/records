import LightRays from './components/reactbits/LightRays';
import StarBorder from "./components/reactbits/StarBorder";
import Number from "./components/Number";

export default function Home() {
  return (
    <div className="relative h-1/3">
      <StarBorder
        as="button"
        className="border-gradient-bottom border-gradient-top"
        color="cyan"
        speed="5s"
      >
        联系
      </StarBorder>

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
