import GradientText from "./reactbits/GradientText";

export default function Number() {
  return (
    <GradientText
      colors={["#ff0000", "#4079ff", "#fff", "#4079ff", "#ff0000"]}
      animationSpeed={2}
      showBorder={false}
      className="animate-gradient block text-center absolute top-1/2 transform left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl"
    >
      在支付宝首页搜索
      <br /> <br />
      853688884
      <br /> <br />
      即可领红包b
    </GradientText>
  );
}
