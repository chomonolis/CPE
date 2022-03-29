import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import { createUserTeam } from '../graphql/mutations';
import { getUserTeam } from '../graphql/queries';
import {
  CreateUserTeamInput,
  CreateUserTeamMutation,
  GetUserTeamQuery,
} from '../API';
import { PromiseType } from '../utils/typeUtils';

const UserTeamService = {
  createUserTeam: async (input: CreateUserTeamInput) => {
    return API.graphql(
      graphqlOperation(createUserTeam, { input: input })
    ) as Promise<GraphQLResult<CreateUserTeamMutation>>;
  },
  getUserTeam: async (id: string) => {
    const result = await API.graphql(graphqlOperation(getUserTeam, { id: id }));
    if ('data' in result && result.data) {
      const data = result.data as GetUserTeamQuery;
      return data.getUserTeam;
    }
    return undefined;
  },
};

export type UserTeamServiceReturnType = {
  createUserTeamRT: PromiseType<
    ReturnType<typeof UserTeamService.createUserTeam>
  >;
  getUserTeamRT: PromiseType<ReturnType<typeof UserTeamService.getUserTeam>>;
};

export default UserTeamService;
