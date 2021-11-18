import {FC} from 'react';
import {useMatch} from "react-location";
import {useQueryClient} from "react-query";
import { PlanetType } from "../types/planets";

const PlanetDetails:FC = () => {
  const queryClient = useQueryClient()
  const {
    params: { url },
  } = useMatch();
  const data:PlanetType | undefined = queryClient.getQueryData(['human',url])
  return (
    <div>
      <p>{data!.name}</p>
      <p>{data!.terrain}</p>
      <p>{data!.climate}</p>
    </div>
  );
};

export default PlanetDetails;
