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

  const getUserTeam = useCallback(async (id: string) => {
    return await UserTeamService.getUserTeam(id);
  }, []);

  return { createUserTeam, getUserTeam };
};

export type UseUserTeamReturnType = {
  createUserTeamRT: Exclude<
    UserTeamServiceReturnType['createUserTeamRT']['data'],
    undefined
  >['createUserTeam'];
  getUserTeamRT: UserTeamServiceReturnType['getUserTeamRT'];
};

export default useUserTeam;
