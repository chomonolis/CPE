import { useCallback } from 'react';

import { CreateUserInput } from '../API';
import UserService, { UserServiceReturnType } from '../service/user.service';

const useUser = () => {
  const createUser = useCallback(
    async (name: string, type: CreateUserInput['type']) => {
      const res = await UserService.createUser({ name, type });
      return res.data?.createUser;
    },
    []
  );
  return { createUser };
};

export type UseUserReturnType = {
  createUserRT: Exclude<
    UserServiceReturnType['createUserRT']['data'],
    undefined
  >['createUser'];
};

export default useUser;
