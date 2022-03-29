import { Container } from '@mui/material';
import Team from './component/Team';
import TeamShow from './component/Team/TeamShow';
import UserTeamEdit from './component/UserTeam/UserTeamEdit';
import Config from './config';

function App() {
  return (
    <>
      <Container>
        <Team />
        <UserTeamEdit teamId={Config.RBHId} />
        <TeamShow teamId={Config.RBHId} />
      </Container>
    </>
  );
}

export default App;
