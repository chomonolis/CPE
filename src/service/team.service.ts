import { API, graphqlOperation } from 'aws-amplify';

import { getTeam } from '../graphql/queries';
import { GetTeamQuery } from '../API';
import { PromiseType } from '../utils/typeUtils';

const TeamService = {
  getTeam: async (id: string) => {
    const result = await API.graphql(graphqlOperation(getTeam, { id: id }));
    if ('data' in result && result.data) {
      const data = result.data as GetTeamQuery;
      return data.getTeam;
    }
    return undefined;
  },
};

export type TeamServiceReturnType = {
  getTeamRT: PromiseType<ReturnType<typeof TeamService.getTeam>>;
};

export default TeamService;
