import GradientText from "./reactbits/GradientText";

export default function Number() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span>在支付宝首页搜索</span>
      <GradientText
        colors={["#ff0000", "#4079ff", "#fff", "#4079ff", "#ff0000"]}
        animationSpeed={2}
        showBorder={true}
        className="animate-gradient"
      >
        853688884
      </GradientText>
      <span>即可领红包</span>
    </div>
  );
}
