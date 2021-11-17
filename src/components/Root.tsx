import { Home , Posts } from "../pages";
import {useQueryClient} from "react-query";
import { Link , Outlet , ReactLocation , Router } from "react-location";
import { fetchPeoples , fetchPlanets } from "../lib/api";

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
            }
          },
      {
        path : '/posts',
          element : <Posts/>,
        //React queryでcashする場合
        loader: () => queryClient.getQueryData('planets') ??
        queryClient.fetchQuery('planets',fetchPlanets)
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