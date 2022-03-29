import { useState, useEffect } from 'react';
import { Stack } from '@mui/material';

import useUserTeam from '../../hook/UserTeam.hook';
import UserEdit from '../User/UserEdit';
import CustomizedSnackbar from '../CustomizedSnackbar';

type Props = {
  teamId: string;
  id?: string;
};

const initialUserId = '';

const UserTeamEdit = (props: Props) => {
  const { teamId, id } = props;
  const [createdUserId, setCreatedUserId] = useState<string>(initialUserId);
  const [update, setUpdate] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);
  const { createUserTeam } = useUserTeam();

  useEffect(() => {
    if (createdUserId === initialUserId) return;
    (async () => {
      setUpdate(true);
      try {
        const r = await createUserTeam(createdUserId, teamId, 0);
        if (r) {
          setCreatedUserId(initialUserId);
          setUpdate(false);
          setComplete(true);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [createdUserId, createUserTeam, teamId]);

  // idがある -> createではない
  if (id) return <></>;
  return (
    <>
      <UserEdit createFlag setCreatedUserId={setCreatedUserId} />
      <Stack spacing={2} sx={{ width: '100%' }}>
        <CustomizedSnackbar
          msg="チームとユーザを紐づけています"
          serverity="info"
          open={update}
          setOpen={setUpdate}
        />
        <CustomizedSnackbar
          msg="正常にチームとユーザを紐づけました"
          serverity="success"
          open={complete}
          setOpen={setComplete}
        />
      </Stack>
    </>
  );
};

export default UserTeamEdit;
