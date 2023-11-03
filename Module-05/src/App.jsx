import Menu from "./pages/Menu";

const App = () => {
  return (
    <main className="w-5/6 mx-auto">
      <h1 className="text-center text-amber-600 text-4xl font-bold py-2">
        Restaurants with online food delivery in Bangalore
        {/* {restaurantData[3]?.card?.card?.title} */}
      </h1>
      <Menu />
    </main>
  );
};

export default App;
