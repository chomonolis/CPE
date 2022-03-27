import { useCallback } from 'react';

import UserTeamService, {
  UserTeamServiceReturnType,
} from '../service/userTeam.service';

const useUserTeam = () => {
  const createUserTeam = useCallback(
    async (userId: string, teamId: string, userPoint?: number) => {
      const res = await UserTeamService.createUserTeam({
        userId: userId,
        teamId: teamId,
        userPoint: userPoint,
      });
      return res.data?.createUserTeam;
    },
    []
  );
  return { createUserTeam };
};

export type UseUserTeamReturnType = {
  createUserTeamRT: Exclude<
    UserTeamServiceReturnType['createUserTeamRT']['data'],
    undefined
  >['createUserTeam'];
};

export default useUserTeam;
