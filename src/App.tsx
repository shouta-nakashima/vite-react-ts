import {QueryClientProvider,QueryClient} from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools"

import {Root} from './components'

import './App.css'

const queryClient = new QueryClient()

const App =() => {

  return (
    <QueryClientProvider client={queryClient}>
      <Root/>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default App
