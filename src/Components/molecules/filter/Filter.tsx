import * as React from "react";
import { memo } from "react";
import { BtnFilter } from "../../atoms/filterCardBtn";
import { Title } from "../../atoms/title";
import "./index.css";
import { FieldSelect } from "../../atoms/fieldSelect";
import { FieldSearch } from "../../atoms/fieldSearch";
import { FieldFromTo } from "../../atoms/fieldFromTo";
import { FieldGenre } from "../../atoms/fieldGenre";

interface IFilter {
  countries: string[];
  genres: string[];
}

export const Filter = memo(({ genres, countries }: IFilter) => {
  return (
    <div className={"filterBOX__wrapper"}>
      <div className="filterBOX__content">
        <div className="sort">
          <Title title={"Sort by:"} />
          <div className="btn__group">
            <BtnFilter text={"Rating"} isActive={true} />
            <BtnFilter text={"Year"} />
          </div>
        </div>
        <div className="filter">
          <Title title={"Filter:"} />
          <form className={"form__filter"} action="/">
            <FieldSearch />
            <FieldSelect values={countries} />
            <FieldFromTo title={"Years"} />
            <FieldFromTo title={"Rating"} />
            <FieldGenre values={genres} />
          </form>
        </div>
        <BtnFilter text={"Show results"} isActive={true} />
      </div>
    </div>
  );
});
