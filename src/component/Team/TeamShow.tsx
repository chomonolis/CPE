import { useState, useEffect } from 'react';

import useTeam, { UseTeamReturnType } from '../../hook/Team.hook';
import useUserTeam, { UseUserTeamReturnType } from '../../hook/UserTeam.hook';

type Props = {
  teamId: string;
};

const TeamShow = (props: Props) => {
  const { teamId } = props;
  const { getTeam } = useTeam();
  const { getUserTeam } = useUserTeam();
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

  return (
    <>
      {userTeams.map((userTeam, idx) => {
        return (
          <div key={idx}>
            {userTeam?.user?.name}
            <br />
          </div>
        );
      })}
    </>
  );
};

export default TeamShow;
