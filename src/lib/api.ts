import axios from "axios";
import { PeopleDataType , PeopleType } from "../types/people";
import { PlanetsDataType,PlanetType } from "../types/planets";


export const fetchPeoples = async ():Promise<PeopleDataType>  => {
  const {data} = await axios.get('https://swapi.dev/api/people')
  return data
}

export const fetchHuman = async (id:string):Promise<PeopleType>  => {
  const {data} = await axios.get(`https://swapi.dev/api/people/${id}`)
  return data
}

export const fetchPlanet = async (url:string):Promise<PlanetType> => {
  const {data} = await axios.get(`https://swapi.dev/api/planets/${url}`)
  return data
}

export const fetchPlanets = async ():Promise<PlanetsDataType> => {
  const {data} = await axios.get('https://swapi.dev/api/planets')
  return data
}

export const fetchFilm = async (url:string) => {
  const {data} = await axios.get('https://swapi.dev/api/films/' + url)
  return data
}