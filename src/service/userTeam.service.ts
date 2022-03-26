import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import { createUserTeam } from '../graphql/mutations';
import { CreateUserTeamInput, CreateUserTeamMutation } from '../API';

const UserTeamService = {
  createUserTeam: async (input: CreateUserTeamInput) => {
    return API.graphql(
      graphqlOperation(createUserTeam, { input: input })
    ) as Promise<GraphQLResult<CreateUserTeamMutation>>;
  },
};

export default UserTeamService;
