import {FC} from 'react';
import {useQueryClient} from "react-query";

import { PlanetsDataType } from "../types/planets";
import { Link , Outlet } from "react-location";
import { cutId } from "../lib/helper";

const Posts:FC = () => {
  const queryClient = useQueryClient()
  const data:PlanetsDataType | undefined = queryClient.getQueryData('planets')
  return (
    <div style={{width:'100vw',display:'flex'}}>
      <div style={{width:'50%'}}>
        {data && data.results.map((planet) => (
          <p key={planet.name}>
            <Link
              to={`${cutId(planet.url,30) }/`}
              //onMouseEnter={() => loadRoute({to:cutId(p.url,29)})}
            >
              {planet.name}
            </Link>
          </p>
        ))}
      </div>
      <div style={{width:'50%'}}>
        <Outlet/>
      </div>
    </div>
  );
};

export default Posts;
