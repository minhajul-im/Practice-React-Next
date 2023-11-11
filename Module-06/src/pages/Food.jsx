import { useContext } from "react";
import ContextData from "../utils/ContextData";

const data = [
  {
    id: 1,
    img: "https://kfcbd.com/storage/categories/WHBy2zw6d6x6NDgR1qSUOkA0B.png",
    name: ["Burger", "Sandwich", "Uttara"],
    price: 150,
    des: "Deserunt, sunt cupiditate, asperiordsflkjsdkfj,j sldfjskldfksdfjs, jldsjflksdfsdfj, jdslkjfdsfjsdkfj,d fsldfjes numquam provident quibusdam est totam dicta rerum earum odit perspiciatis veniam laudantium labore commodi distinctio, sit eius? Alias?",
  },
  {
    id: 2,
    img: "https://kfcbd.com/storage/categories/WHBy2zw6d6x6NDgR1qSUOkA0B.png",
    name: ["Pizza", "Sandwich", "Malay", "Ice-cream"],
    price: 200,
    des: "Deserunt, sunt cupiditate, asperiores numquam provident quibusdam est totam dicta rerum earum odit perspiciatis veniam laudantium labore commodi distinctio, sitsfsdfksdjfsd,fjsdlfkjskdfj, fsldkjfksdjfk eius? Alias?",
  },
  {
    id: 3,
    img: "https://kfcbd.com/storage/categories/WHBy2zw6d6x6NDgR1qSUOkA0B.png",
    name: ["Kcci", "_", "Bhai", "/", "Biriany", "Uttara-Dhaka"],
    price: 300,
    des: "provident quibusdam est totam dicta rerum earumntium labore commodi distinctio, sit eius? Alias?",
  },
  {
    id: 4,
    img: "https://kfcbd.com/storage/categories/WHBy2zw6d6x6NDgR1qSUOkA0B.png",
    name: ["Burger", "king"],
    price: 600,
    des: "Deserunt, sunt cupiditate, asperioresit eius? Alias?",
  },
  {
    id: 5,
    img: "https://kfcbd.com/storage/categories/WHBy2zw6d6x6NDgR1qSUOkA0B.png",
    name: ["Jom", "kalo", "Misty", "/", "Hunney / Sweet"],
    price: 100,
    des: "Deserunt, sunt cupiditate, asperiores numsdfsdfjksdf, sdfjsdlfkjsd,, sdfsdfksjdkf quam provident quibusdam est totam dicta rerum earum odit perspiciatis veniam laudantium labore commodi distinctio, sit eius? Alias?",
  },
  {
    id: 6,
    img: "https://kfcbd.com/storage/categories/WHBy2zw6d6x6NDgR1qSUOkA0B.png",
    name: ["Pizza", "hut", "KFC", "Mirpur-12"],
    price: 190,
    des: "Deserunt, sunt cupiditate, dslfjsdlfsdkfjl, fsdlfjsdfjskl, asperiores numquam provident quibusdam est totam dicta rerum earum odit perspiciatis veniam laudantium labore commodi distinctio, sit eius? Alias?",
  },
];

const Food = () => {
  const { food } = useContext(ContextData);

  return (
    <section>
      {/* <h2 style={{ textAlign: "center" }}>{food}</h2> */}

      <div className="food-section">
        {data.map((item) => (
          <div className="food-card" key={item.id}>
            <img src={item.img} alt={item.name.join(" ,")} />
            <h4> ৳ {item.price}</h4>
            <h2>{item.name.join(", ")}</h2>
            <p>{item.des}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Food;
