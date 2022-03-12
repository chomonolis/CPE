import { useState, useEffect } from 'react';
import TeamService, { TeamServiceReturnType } from '../../service/team.service';
import Config from '../../config';

type TeamType = TeamServiceReturnType['getTeamRT'];

const Team = () => {
  const [team, setTeam] = useState<TeamType>();

  useEffect(() => {
    (async () => {
      const res = await TeamService.getTeam(Config.RBHId);
      setTeam(res);
    })();
  }, []);
  return <>{team?.name}</>;
};

export default Team;
