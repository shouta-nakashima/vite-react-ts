import axios from "axios";
import { PeopleDataType } from "../types/people";
import { PlanetsDataType } from "../types/planets";


export const fetchPeoples = async ():Promise<PeopleDataType>  => {
  const {data} = await axios.get('https://swapi.dev/api/people')
  return data
}

export const fetchPlanets = async ():Promise<PlanetsDataType> => {
  const {data} = await axios.get('https://swapi.dev/api/planets')
  console.log (data)
  return data
}