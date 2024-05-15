import Chart from "@/components/bar-chart";
import Personal from "@/components/personal";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Personal />
      <Chart />
    </div>
  );
}
