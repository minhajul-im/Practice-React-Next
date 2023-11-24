import Video from "./Video";

export default function Videos() {
  return (
    <section className="pt-12">
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
        <Video />

        {/* <div className="col-span-12">some error happened</div> */}
      </div>
    </section>
  );
}
