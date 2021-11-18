import {FC} from 'react';
import {useQueryClient} from "react-query";
import { useMatch } from "react-location";

import {PeopleType} from'../types/people'
import {useFilms} from "../lib/hooks/films";

const HumanDetail:FC = () => {
  const queryClient = useQueryClient()
  const {filmData} = useFilms()
  const {
    params: { id },
  } = useMatch();
  const data:PeopleType | undefined = queryClient.getQueryData(['human',id])
  const films = filmData(data)
  console.log (films)
  return (
    <div>
      <p>{data!.name}</p>
      <p>{data!.birth_year}</p>
      {films.map((film) => (
       <p key={film.title}>{film.title}</p>
      ))}
    </div>
  );
};

export default HumanDetail;
