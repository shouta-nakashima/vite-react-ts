export type PeopleType = {
  birth_year: string
  created: string
  edited: string
  eye_color: string
  films: string[]
  hair_color: string
  height: string
  homeworld: string
  mass: string
  name: string
  skin_color: string
  species: []
  starships: string[]
  url: string
  vehicles: string[]
}

export type PeopleDataType = {
  count: number
  next: string
  previous: null
  results:PeopleType[]
}