import { useState, useEffect } from 'react';

import useTeam, { UseTeamReturnType } from '../../hook/Team.hook';
import useUserTeam from '../../hook/User.hook';

type Props = {
  userId: string;
};

const UserShow = (props: Props) => {
  const { userId } = props;
  const { getTeam } = useTeam();
  const [team, setTeam] = useState<UseTeamReturnType['getTeamRT']>();

  useEffect(() => {
    (async () => {
      const r = await getTeam(userId);
      setTeam(r);
    })();
  }, []);
};

export default UserShow;
