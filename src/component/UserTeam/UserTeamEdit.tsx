import { useState, useEffect } from 'react';

import useUserTeam from '../../hook/UserTeam.hook';
import UserEdit from '../User/UserEdit';

type Props = {
  teamId: string;
  id?: string;
};

const initialUserId = '';

const UserTeamEdit = (props: Props) => {
  const { teamId, id } = props;
  const [createdUserId, setCreatedUserId] = useState<string>(initialUserId);
  const { createUserTeam } = useUserTeam();

  useEffect(() => {
    if (createdUserId === initialUserId) return;
    (async () => {
      try {
        const r = await createUserTeam(createdUserId, teamId, 0);
        if (r) {
          setCreatedUserId(initialUserId);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [createdUserId, createUserTeam, teamId]);

  // idがある -> createではない
  if (id) return <></>;
  return <UserEdit createFlag setCreatedUserId={setCreatedUserId} />;
};

export default UserTeamEdit;
