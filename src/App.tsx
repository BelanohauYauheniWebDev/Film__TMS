import "./App.css";
import { CardFilm } from "./Components/molecules/cardFilm";
import { Filter } from "./Components/molecules/filter";
import { Header } from "./Components/molecules/header";
import { ShortCardFilm } from "./Components/molecules/shortCardFilm";
import { Sidebar } from "./Components/molecules/sidebar";
import { StarRating } from "./Components/molecules/starRating";
import { TrailerFilm } from "./Components/molecules/trailerFilm";
import { films, trailer } from "./mock";
import { useState } from "react";

function App() {
  const countries = Array.from(
    new Set(films.map((film) => film.country.split(", ")).flat())
  );
  const genres = Array.from(new Set(films.map((film) => film.genre).flat()));
  const values = {
    countries, //array
    genres, //array
  };
  const selectedFilm = films[1];
  const trailerCurrent = trailer[0];

  const [filterdFilms, setFilterdFilms] = useState(films);
  const [inputValue, setInputValue] = useState("");
  const [isClikedfilterBtn, setisClikedfilterBtn] = useState(false);

  const onClickSearchBtn = () => {
    const filterByTitile = films.filter((film) =>
      film.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilterdFilms(filterByTitile);
  };
  const onChangeHandler = (text: string) => {
    setInputValue(text);
    if (text.length > 2) {
      const filterByTitile = films.filter((film) =>
        film.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilterdFilms(filterByTitile);
      return;
    }
    setFilterdFilms(films);
  };
  const onClickFilterBtn = () => {
    setisClikedfilterBtn(!isClikedfilterBtn);
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="main">
        <Header
          value={inputValue}
          onClickSearchBtn={onClickSearchBtn}
          onChangeHandler={onChangeHandler}
          onClickFilterBtn={onClickFilterBtn}
        />
        {isClikedfilterBtn ? <Filter {...values} /> : null}
        <div className="allFilms__wrapper">
          {filterdFilms.map((film) => {
            return <ShortCardFilm key={film.id} {...film} />;
          })}
        </div>
        <CardFilm film={selectedFilm} />
        <StarRating />
        <TrailerFilm title={selectedFilm.title} {...trailerCurrent} />
      </div>
    </div>
  );
}

export default App;
