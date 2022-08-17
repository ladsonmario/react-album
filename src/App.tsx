import * as C from './App.styles';
import CamImg from './images/cam.png';
import { MainRoutes } from './routes/MainRoutes';

function App() {
  return (
    <C.Container>
      <C.Header>
        <C.LogoText>Galeria de Fotos</C.LogoText>        
        <C.LogoImg src={CamImg} alt="" />
      </C.Header>
      
      <C.Line />
      
      <MainRoutes />

      <C.Line />

      <C.Footer>
        © Copyright - 
        <C.Link href="https://github.com/ladsonmario" target="_blank"> Ladson</C.Link>
      </C.Footer>
    </C.Container>    
  )
}

export default App
