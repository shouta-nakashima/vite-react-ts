import { MakeGenerics } from "react-location";
import { PeopleDataType } from "./people";
import { PlanetsDataType } from "./planets";

export type GlobalType =  MakeGenerics<{
  LoaderData: {
    peoples:PeopleDataType
    planets:PlanetsDataType
  }
}>