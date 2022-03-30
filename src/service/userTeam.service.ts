import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import { createUserTeam, deleteUserTeam } from '../graphql/mutations';
import { getUserTeam } from '../graphql/queries';
import {
  CreateUserTeamInput,
  CreateUserTeamMutation,
  DeleteUserTeamInput,
  DeleteUserTeamMutation,
  GetUserTeamQuery,
} from '../API';
import { PromiseType } from '../utils/typeUtils';

const UserTeamService = {
  createUserTeam: async (input: CreateUserTeamInput) => {
    return API.graphql(
      graphqlOperation(createUserTeam, { input: input })
    ) as Promise<GraphQLResult<CreateUserTeamMutation>>;
  },

  deleteUserTeam: async (input: DeleteUserTeamInput) => {
    return API.graphql(graphqlOperation(deleteUserTeam, { input })) as Promise<
      GraphQLResult<DeleteUserTeamMutation>
    >;
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
  deleteUserTeamRT: PromiseType<
    ReturnType<typeof UserTeamService.deleteUserTeam>
  >;
  getUserTeamRT: PromiseType<ReturnType<typeof UserTeamService.getUserTeam>>;
};

export default UserTeamService;
