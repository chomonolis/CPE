import { Container } from '@mui/material';
import Team from './component/Team';
import UserEdit from './component/User/UserEdit';

function App() {
  return (
    <>
      <Container>
        <Team />
        <UserEdit createFlag />
      </Container>
    </>
  );
}

export default App;
