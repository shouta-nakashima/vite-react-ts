import {useQueryClient} from "react-query";
import { Link , Outlet , ReactLocation , Router } from "react-location";

import { Home , Posts, PlanetDetails,HumanDetail } from "../pages";
import { fetchPlanet , fetchPeoples , fetchPlanets,fetchHuman } from "../lib/api";

const Roots = () => {
  const location = new ReactLocation()
  const queryClient = useQueryClient()

  return (
    <Router
      location={location}
      routes={[
          {
            path:'/',
            element: <Home/>,
            loader: async () => {
              return {
                peoples: await fetchPeoples()
              }
            },
          },
      {
        path : 'posts',
          element : <Posts/>,
        loader: () => queryClient.getQueryData('planets') ??
        queryClient.fetchQuery('planets',fetchPlanets),
        children: [
          {path : '/',element : 'no selected'},
          {
            path:':url',
            element:<PlanetDetails/>,
            loader:({params:{url}}) => queryClient.getQueryData(['human',url]) ??
              queryClient.fetchQuery(['human',url],() =>fetchPlanet(url)),
          }
        ]
      },
        {
          path : 'people/:id',
          element : <HumanDetail/>,
          loader:({params:{id}}) => queryClient.getQueryData(['human',id]) ??
            queryClient.fetchQuery(['human',id],() =>fetchHuman(id)),
        }
    ]}
    >
      <Link to="/">Home</Link>
      <Link to='posts'>Posts</Link>
      <Outlet/>

    </Router>
  )
}

export default Roots