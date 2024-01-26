import { useState } from "react";
const places = [
  {
    id: 0,
    name: "Bo-Kaap in Cape Town, South Africa",
    description:
      "The tradition of choosing bright colors for houses began in the late 20th century.",
    imageId: "K9HVAGH",
  },
  {
    id: 1,
    name: "Rainbow Village in Taichung, Taiwan",
    description:
      "To save the houses from demolition, Huang Yung-Fu, a local resident, painted all 1,200 of them in 1924.",
    imageId: "9EAYZrt",
  },
  {
    id: 2,
    name: "Macromural de Pachuca, Mexico",
    description:
      "One of the largest murals in the world covering homes in a hillside neighborhood.",
    imageId: "DgXHVwu",
  },
  {
    id: 3,
    name: "Selarón Staircase in Rio de Janeiro, Brazil",
    description:
      'This landmark was created by Jorge Selarón, a Chilean-born artist, as a "tribute to the Brazilian people."',
    imageId: "aeO3rpI",
  },
  {
    id: 4,
    name: "Burano, Italy",
    description:
      "The houses are painted following a specific color system dating back to 16th century.",
    imageId: "kxsph5C",
  },
  {
    id: 5,
    name: "Chefchaouen, Marocco",
    description:
      "There are a few theories on why the houses are painted blue, including that the color repels mosquitos or that it symbolizes sky and heaven.",
    imageId: "rTqKo46",
  },
  {
    id: 6,
    name: "Gamcheon Culture Village in Busan, South Korea",
    description:
      "In 2009, the village was converted into a cultural hub by painting the houses and featuring exhibitions and art installations.",
    imageId: "ZfQOOzf",
  },
];

function getImageUrl(imageId) {
  return "https://i.imgur.com/" + imageId + "l.jpg";
}

export default function Page() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <>
      <h1>Hello Image Section!</h1>
      <label>
        <input
          type='checkbox'
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />

      <List>
        {places.map((item) => (
          <Place key={item.id}>
            <PlaceImage place={item} imageSize={imageSize}>
              <Details place={item} />
            </PlaceImage>
          </Place>
        ))}
      </List>
    </>
  );
}

function List({ children }) {
  return <ul>{children}</ul>;
}

function Place({ children }) {
  return <li>{children}</li>;
}

function PlaceImage({ place, imageSize, children }) {
  return (
    <div>
      <img
        src={getImageUrl(place.imageId)}
        alt={place.name}
        width={imageSize}
        height={imageSize}
      />
      {children}
    </div>
  );
}

function Details({ place }) {
  return (
    <p>
      <b>{place.name}</b>
      {": " + place.description}
    </p>
  );
}
