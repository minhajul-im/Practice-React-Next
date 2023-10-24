import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";

const Product = () => {
  const [input, setInput] = useState("");
  const [allData, setAllData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    api();
  }, []);

  const api = async () => {
    const fetchData = await fetch(
      `https://www.rokomari.com/desktop/front-list?page=2`
    );
    const json = await fetchData.json();
    setAllData(json[3]?.productShortViews);
    setSearchData(json[3]?.productShortViews);
  };

  const handleOnClick = () => {
    const filtered = searchData.filter((item) =>
      item?.englishName.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
    setAllData(filtered);
    setInput("");
  };

  const selectOnChange = (e) => {
    const options = e.target.value;
    if (options === "high") {
      const x = [...searchData].sort((a, b) => a.price - b.price);
      setAllData(x);
    } else if (options === "low") {
      const x = [...searchData].sort((x, y) => y.price - x.price);
      setAllData(x);
    } else {
      setAllData(allData);
    }
  };

  return (
    <main>
      <h1>আমাদের নতুন নতুন পণ্যসমূহ!</h1>
      <div className="search-select">
        <select onChange={selectOnChange} className="select">
          <option value={"random"}>Random Price</option>
          <option value={"low"}>High to Low Price</option>
          <option value={"high"}>Low to High Price</option>
        </select>
        <div className="search">
          <input
            type="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleOnClick}>Search</button>
        </div>
      </div>
      {allData.length === 0 ? (
        <ShimmerUi />
      ) : (
        <div className="products">
          {allData.map((item) => (
            <div key={item?.id} className="product-card">
              <h4>Brand: {item?.company}</h4>
              <h2>{item?.englishName}</h2>
              <a target="_blank" href={`https://www.rokomari.com${item?.url}`}>
                Image Link 😜😜
              </a>
              <h4>৳ {item?.price}</h4>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Product;
