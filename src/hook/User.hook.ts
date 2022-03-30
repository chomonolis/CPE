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

  const deleteUser = useCallback(async (id: string) => {
    const res = await UserService.deleteUser({ id });
    return res.data?.deleteUser;
  }, []);

  return { createUser, deleteUser };
};

export type UseUserReturnType = {
  createUserRT: Exclude<
    UserServiceReturnType['createUserRT']['data'],
    undefined
  >['createUser'];
  deleteUserRT: Exclude<
    UserServiceReturnType['deleteUserRT']['data'],
    undefined
  >['deleteUser'];
};

export default useUser;
