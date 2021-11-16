import {QueryClientProvider,QueryClient} from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools"
import {ReactLocation,Router,Link,Outlet} from 'react-location'

import {Home,Posts} from './pages'

import './App.css'

const queryClient = new QueryClient()
const location = new ReactLocation()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Router
        location={location}
        routes={[
          {
            path:'/',
            element: <Home/>
          },
          {
            path : '/posts',
            element : <Posts/>
          }
        ]}
      >
        <Link to="/">Home</Link>
        <Link to='posts' >Posts</Link>
        <Outlet/>
      </Router>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default App
