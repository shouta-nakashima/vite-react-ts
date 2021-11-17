import axios from "axios";
import { PeopleDataType , PeopleType } from "../types/people";
import { PlanetsDataType } from "../types/planets";


export const fetchPeoples = async ():Promise<PeopleDataType>  => {
  const {data} = await axios.get('https://swapi.dev/api/people')
  return data
}

export const fetchPlanet = async (url:string):Promise<PeopleType> => {
  const {data} = await axios.get(`https://swapi.dev/api/planets/${url}`)
  return data
}

export const fetchPlanets = async ():Promise<PlanetsDataType> => {
  const {data} = await axios.get('https://swapi.dev/api/planets')
  return data
}