import Container from "@material-ui/core/Container";
import { LandingPage } from "./pages";
import { StoreProvider } from "./shared/classes";

function App() {
  return (
    <Container>
      <StoreProvider>
        <LandingPage></LandingPage>
      </StoreProvider>
    </Container>
  );
}

export default App;
