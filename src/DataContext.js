import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      title: "Kinsou no Vermeil",
      img: "https://i.ibb.co/6r0PnwN/Kinsou-no-Vermeil.jpg",
    },
    {
      title: "Re:zero",
      img: "https://i.pinimg.com/736x/04/c4/c8/04c4c880a7746b6e9a9fd14a9d29327e--radio-logo.jpg",
    },
    {
      title: "I want to eat your pancreas",
      img: "https://i.ibb.co/jW6BnVD/images.jpg",
    },
    {
      title: "Kawaii dake ja Nai Shikimori-san",
      img: "https://i0.wp.com/sojapan.jp/wp-content/uploads/2021/10/shikimori_visual.png?fit=750%2C1062&ssl=1",
    },
    {
      title: "Kaguya-sama Love is war",
      img: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974700493/kaguya-sama-love-is-war-vol-4-9781974700493_hr.jpg",
    },
    {
      title: "Eighty Six",
      img: "https://images-na.ssl-images-amazon.com/images/I/81URohmVw7L.jpg",
    },
    {
      title: "Kinsou no Vermeil",
      img: "https://i.ibb.co/6r0PnwN/Kinsou-no-Vermeil.jpg",
    },
    {
      title: "Re:zero",
      img: "https://i.pinimg.com/736x/04/c4/c8/04c4c880a7746b6e9a9fd14a9d29327e--radio-logo.jpg",
    },
    {
      title: "I want to eat your pancreas",
      img: "https://i.ibb.co/jW6BnVD/images.jpg",
    },
    {
      title: "Kawaii dake ja Nai Shikimori-san",
      img: "https://i0.wp.com/sojapan.jp/wp-content/uploads/2021/10/shikimori_visual.png?fit=750%2C1062&ssl=1",
    },
    {
      title: "Kaguya-sama Love is war",
      img: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974700493/kaguya-sama-love-is-war-vol-4-9781974700493_hr.jpg",
    },
    {
      title: "Eighty Six",
      img: "https://images-na.ssl-images-amazon.com/images/I/81URohmVw7L.jpg",
    },
  ]);
  const cutText = (text, count) => {
    let modifiedText = text;
    if (text.length > count) {
      return text.substring(0, count) + "...";
    }
    return modifiedText;
  };

  return (
    <DataContext.Provider value={{ data, setData, cutText }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
