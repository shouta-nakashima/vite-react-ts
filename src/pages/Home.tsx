import {FC} from 'react';
import {useQueryClient} from "react-query";
import {useMatch} from "react-location";
import {GlobalType} from "../types/global";
import { PeopleDataType } from "../types/people";


const Home:FC = () => {
  const {data:{peoples}} = useMatch<GlobalType>()
  const queryClient = useQueryClient()
  queryClient.setQueryData('peoples',peoples)
  const data:PeopleDataType | undefined = queryClient.getQueryData('peoples')
  return (
    <div>
      {data && data.results.map((p) => (
        <p key={p.name}>{p.name}</p>
      ))}
    </div>
  );
};

export default Home;
