import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import { GlobalStyle } from './styles'

import './global.css'

function App() {
  return (
    <>
      <GlobalStyle>
        <Header />
        <Hero />
        <div className="container">
          <ListaVagas />
        </div>
      </GlobalStyle>
    </>
  )
}

export default App
