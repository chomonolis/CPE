import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import { createUser, deleteUser } from '../graphql/mutations';
import {
  CreateUserInput,
  CreateUserMutation,
  DeleteUserInput,
  DeleteUserMutation,
} from '../API';
import { PromiseType } from '../utils/typeUtils';

const UserService = {
  createUser: async (input: CreateUserInput) => {
    return API.graphql(
      graphqlOperation(createUser, { input: input })
    ) as Promise<GraphQLResult<CreateUserMutation>>;
  },

  deleteUser: async (input: DeleteUserInput) => {
    return API.graphql(graphqlOperation(deleteUser, { input })) as Promise<
      GraphQLResult<DeleteUserMutation>
    >;
  },
};

export type UserServiceReturnType = {
  createUserRT: PromiseType<ReturnType<typeof UserService.createUser>>;
};

export default UserService;
