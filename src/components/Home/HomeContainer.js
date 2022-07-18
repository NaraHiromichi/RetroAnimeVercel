import DataContext from "../../DataContext";
import { useContext } from "react";

const HomeContainer = () => {
  const { data, cutText } = useContext(DataContext);
  console.log(data);
  const AnimeItems = data.map((anime) => {
    return (
      <div className="animeContainer">
        <img className="animeImg" src={anime.img} alt={anime.title} />
        <p className="animeTitle">{cutText(anime.title, 30)}</p>
      </div>
    );
  });
  return <div className="animeListContainer">{AnimeItems}</div>;
};

export default HomeContainer;
