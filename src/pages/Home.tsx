import {FC} from 'react';
import {useQueryClient} from "react-query";
import {useMatch,Link,useLoadRoute,Outlet} from "react-location";

import {cutId} from "../lib/helper";
import {GlobalType} from "../types/global";
import { PeopleDataType } from "../types/people";


const Home:FC = () => {
  const {data:{peoples}} = useMatch<GlobalType>()
  const queryClient = useQueryClient()
  const loadRoute = useLoadRoute();
  queryClient.setQueryData('peoples',peoples)
  const data:PeopleDataType | undefined = queryClient.getQueryData('peoples')
  return (
    <div>
      {data && data.results.map((p) => (
        <p key={p.name}>
          <Link
            to={`/people/${cutId(p.url,29) }/`}
            //onMouseEnter={() => loadRoute({to:cutId(p.url,29)})}
          >
            {p.name}
          </Link>
        </p>
      ))}
      <Outlet/>
    </div>
  );
};

export default Home;
