import { useState } from 'react';

import UserEdit from '../User/UserEdit';

type Props = {
  teamId: string;
  id?: string;
};

const initialUserId = '';

const UserTeamEdit = (props: Props) => {
  const { teamId, id } = props;
  const [createdUserId, setCreatedUserId] = useState<string>(initialUserId);
  if (id) return <></>;
  return <UserEdit createFlag />;
};

export default UserTeamEdit;
