import { useState, useEffect } from 'react';
import { List, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import useUser from '../../hook/User.hook';
import useTeam, { UseTeamReturnType } from '../../hook/Team.hook';
import useUserTeam, { UseUserTeamReturnType } from '../../hook/UserTeam.hook';

type Props = {
  teamId: string;
};

const TeamShow = (props: Props) => {
  const { teamId } = props;
  const { deleteUser } = useUser();
  const { getTeam } = useTeam();
  const { getUserTeam, deleteUserTeam } = useUserTeam();
  const [team, setTeam] = useState<UseTeamReturnType['getTeamRT']>();
  const [userTeams, setUserTeams] = useState<
    UseUserTeamReturnType['getUserTeamRT'][]
  >([]);

  useEffect(() => {
    (async () => {
      try {
        const r = await getTeam(teamId);
        setTeam(r);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getTeam, teamId]);

  useEffect(() => {
    (async () => {
      try {
        if (team?.users?.items) {
          const arr = team.users.items.filter(
            (item): item is Exclude<typeof item, null> => item !== null
          );
          const pr_arr = arr.map((item) => {
            return getUserTeam(item.id);
          });
          const add = await Promise.all(pr_arr);
          setUserTeams(add);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getUserTeam, team?.users?.items]);

  const onClick = async (userTeamId?: string, userId?: string) => {
    if (userId) {
      await deleteUser(userId);
    }
    if (userTeamId) {
      await deleteUserTeam(userTeamId);
    }
  };

  return (
    <>
      <List>
        {userTeams.map((userTeam, idx) => {
          return (
            <ListItem
              key={idx}
              sx={{ border: 'solid' }}
              secondaryAction={
                <IconButton
                  onClick={() => onClick(userTeam?.id, userTeam?.user?.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              {userTeam?.user?.name}
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default TeamShow;
