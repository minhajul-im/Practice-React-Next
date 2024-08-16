const App = () => {
  return (
    <main className=" text-white">
      <div className="flex bg-green-300 h-screen">
        <div className="w-[300px] bg-purple-300">
          <h1>Hey Hello!</h1>
        </div>

        <div className="pt-24 mx-auto">
          <div className="w-10/12">
            <h1 className="py-6 text-4xl font-bold">context</h1>
            <section>
              <iframe
                width="1000"
                height="600"
                src="https://www.youtube.com/embed/WbTz8F40DHU?si=rYN8V3lJEdGeA-WA&controls=0&color=white&modestbranding=0&rel=0&playsinline=1&enablejsapi=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
            </section>

            <div>hey custom</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;

// AIzaSyCiSkRAOrpU449OpKRKRYXVVPP3kTF89Rs
