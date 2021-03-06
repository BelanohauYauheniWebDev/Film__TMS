import { memo, useState } from "react";
import "./index.css";
import Filter from "../../../Accets/IMG/Filter.svg";

interface IFilterFilm {
  onClickShowFilter: () => void;
}

export const FilterFilm = memo(({ onClickShowFilter }: IFilterFilm) => {
  return (
    <div className="filter__wrapper">
      <button className={"filter__btn"} onClick={onClickShowFilter}>
        <img className={"filter__img"} src={Filter} alt="filterSVG" />
      </button>
    </div>
  );
});
