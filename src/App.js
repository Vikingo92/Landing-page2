
import GlobalStyles from './components/styles/Global';
import { Header } from './components/Header';
import { Container } from './components/styles/Container.styled'
import {Main} from './components/Main';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Main />
      </Container>

    </>
  );
}

export default App;
