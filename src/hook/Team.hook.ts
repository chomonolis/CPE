import { useCallback } from 'react';

import TeamService, { TeamServiceReturnType } from '../service/team.service';

const useTeam = () => {
  const getTeam = useCallback(async (id: string) => {
    return await TeamService.getTeam(id);
  }, []);

  return { getTeam };
};

export type UseTeamReturnType = {
  getTeamRT: TeamServiceReturnType['getTeamRT'];
};

export default useTeam;
