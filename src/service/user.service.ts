import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import { createUser } from '../graphql/mutations';
import { CreateUserInput, CreateUserMutation } from '../API';
import { PromiseType } from '../utils/typeUtils';

const UserService = {
  createUser: async (input: CreateUserInput) => {
    return API.graphql(
      graphqlOperation(createUser, { input: input })
    ) as Promise<GraphQLResult<CreateUserMutation>>;
  },
};

export type UserServiceReturnType = {
  createUserRT: PromiseType<ReturnType<typeof UserService.createUser>>;
};

export default UserService;
