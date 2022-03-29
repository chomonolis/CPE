import { Container } from '@mui/material';
import Team from './component/Team';
import UserTeamEdit from './component/UserTeam/UserTeamEdit';
import Config from './config';

function App() {
  return (
    <>
      <Container>
        <Team />
        <UserTeamEdit teamId={Config.RBHId} />
      </Container>
    </>
  );
}

export default App;
