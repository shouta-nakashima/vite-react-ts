import { PeopleType } from "../../types/people";
import { FilmType } from "../../types/films";
import { cutId } from "../helper";
import { fetchFilm } from "../api";
import { useQueryClient } from "react-query";

export const useFilms = () => {
  const queryClient = useQueryClient()

  const filmData = (data:PeopleType | undefined) => {
    const films:FilmType[] = []
    data && data.films.map((film) => {
      const id = cutId(film,28)
      fetchFilm(id).then((data:FilmType) => {
        films.push(data)
        queryClient.setQueryData(['film',id],data)
      })
      return data
    })
    queryClient.setQueryData('films',films)
    return films
  }

  return {filmData}
}