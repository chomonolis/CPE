import UserEdit from '../User/UserEdit';

type Props = {
  teamId: string;
  id?: string;
};

const UserTeamEdit = (props: Props) => {
  return <UserEdit createFlag />;
};

export default UserTeamEdit;
