import Bar from "./Bar";
import Circle from "./Circle";

const ChartJs = () => {
  return (
    <main className="flex justify-center items-center h-screen ">
      <section className="flex flex-1 border justify-center items-center ">
        <Bar />
      </section>
      <section className="flex flex-1 border justify-center items-center ">
        <Circle />
      </section>
      <section className="flex flex-1 border justify-center items-center ">
        Chart 3
      </section>
    </main>
  );
};

export default ChartJs;
