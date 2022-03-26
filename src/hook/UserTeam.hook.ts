import { GraphQLResult } from '@aws-amplify/api';
import { useCallback } from 'react';

import { CreateUserTeamMutation } from '../API';
import UserTeamService from '../service/userTeam.service';

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
  createUserTeam: (
    userId: string,
    teamId: string,
    userPoint?: number
  ) => Promise<
    Exclude<
      GraphQLResult<CreateUserTeamMutation>['data'],
      undefined
    >['createUserTeam']
  >;
  createUserTeamRT: Exclude<
    GraphQLResult<CreateUserTeamMutation>['data'],
    undefined
  >['createUserTeam'];
};

export default useUserTeam;
