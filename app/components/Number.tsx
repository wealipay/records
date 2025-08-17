import GradientText from "./reactbits/GradientText";

export default function Number() {
  return (
    <div className="absolute inset-0 flex  flex-col justify-around items-stretch">
      <GradientText
        colors={["#ff0000", "#4079ff", "#fff", "#4079ff", "#ff0000"]}
        animationSpeed={2}
        showBorder={false}
        className="animate-gradient text-center text-2xl"
      >
        在支付宝首页搜索 <br />
        853688884<br />
        即可领红包
      </GradientText>
    </div>
  );
}
