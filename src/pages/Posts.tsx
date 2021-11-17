import {FC} from 'react';
import {useQueryClient} from "react-query";

import { PlanetsDataType } from "../types/planets";

const Posts:FC = () => {
  const queryClient = useQueryClient()
  const data:PlanetsDataType | undefined = queryClient.getQueryData('planets')
  return (
    <div>
      {data && data.results.map((planet) => (
        <p key={planet.name}>{planet.name}</p>
      ))}
    </div>
  );
};

export default Posts;
