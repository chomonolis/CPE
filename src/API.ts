/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  type: UserType,
};

export enum UserType {
  ADMIN = "ADMIN",
  GENERAL = "GENERAL",
  EMPTY = "EMPTY",
}


export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelUserTypeInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelUserTypeInput = {
  eq?: UserType | null,
  ne?: UserType | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  type: UserType,
  teams?: ModelUserTeamConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserTeamConnection = {
  __typename: "ModelUserTeamConnection",
  items:  Array<UserTeam | null >,
  nextToken?: string | null,
};

export type UserTeam = {
  __typename: "UserTeam",
  id: string,
  userId: string,
  teamId: string,
  user?: User | null,
  team?: Team | null,
  userPoint?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type Team = {
  __typename: "Team",
  id: string,
  name: string,
  users?: ModelUserTeamConnection | null,
  events?: ModelEventConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  name: string,
  description?: string | null,
  team: Team,
  ptinfomations?: ModelPTInfomationConnection | null,
  createdAt: string,
  updatedAt: string,
  teamEventsId: string,
};

export type ModelPTInfomationConnection = {
  __typename: "ModelPTInfomationConnection",
  items:  Array<PTInfomation | null >,
  nextToken?: string | null,
};

export type PTInfomation = {
  __typename: "PTInfomation",
  id: string,
  user: User,
  status?: PTStatus | null,
  createdAt: string,
  updatedAt: string,
  eventPtinfomationsId: string,
  pTInfomationUserId: string,
};

export enum PTStatus {
  PARTICIPATE = "PARTICIPATE",
  NOTPARTICIPATE = "NOTPARTICIPATE",
  UNDEFINED = "UNDEFINED",
}


export type UpdateUserInput = {
  id: string,
  name?: string | null,
  type?: UserType | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateTeamInput = {
  id?: string | null,
  name: string,
};

export type ModelTeamConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type UpdateTeamInput = {
  id: string,
  name?: string | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type CreateUserTeamInput = {
  id?: string | null,
  userId: string,
  teamId: string,
  userPoint?: number | null,
};

export type ModelUserTeamConditionInput = {
  userId?: ModelIDInput | null,
  teamId?: ModelIDInput | null,
  userPoint?: ModelFloatInput | null,
  and?: Array< ModelUserTeamConditionInput | null > | null,
  or?: Array< ModelUserTeamConditionInput | null > | null,
  not?: ModelUserTeamConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserTeamInput = {
  id: string,
  userId?: string | null,
  teamId?: string | null,
  userPoint?: number | null,
};

export type DeleteUserTeamInput = {
  id: string,
};

export type CreateEventInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  teamEventsId: string,
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
  teamEventsId?: ModelIDInput | null,
};

export type UpdateEventInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  teamEventsId?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type CreatePTInfomationInput = {
  id?: string | null,
  status?: PTStatus | null,
  eventPtinfomationsId: string,
  pTInfomationUserId: string,
};

export type ModelPTInfomationConditionInput = {
  status?: ModelPTStatusInput | null,
  and?: Array< ModelPTInfomationConditionInput | null > | null,
  or?: Array< ModelPTInfomationConditionInput | null > | null,
  not?: ModelPTInfomationConditionInput | null,
  eventPtinfomationsId?: ModelIDInput | null,
  pTInfomationUserId?: ModelIDInput | null,
};

export type ModelPTStatusInput = {
  eq?: PTStatus | null,
  ne?: PTStatus | null,
};

export type UpdatePTInfomationInput = {
  id: string,
  status?: PTStatus | null,
  eventPtinfomationsId?: string | null,
  pTInfomationUserId?: string | null,
};

export type DeletePTInfomationInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelUserTypeInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items:  Array<Team | null >,
  nextToken?: string | null,
};

export type ModelUserTeamFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  teamId?: ModelIDInput | null,
  userPoint?: ModelFloatInput | null,
  and?: Array< ModelUserTeamFilterInput | null > | null,
  or?: Array< ModelUserTeamFilterInput | null > | null,
  not?: ModelUserTeamFilterInput | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
  teamEventsId?: ModelIDInput | null,
};

export type ModelPTInfomationFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelPTStatusInput | null,
  and?: Array< ModelPTInfomationFilterInput | null > | null,
  or?: Array< ModelPTInfomationFilterInput | null > | null,
  not?: ModelPTInfomationFilterInput | null,
  eventPtinfomationsId?: ModelIDInput | null,
  pTInfomationUserId?: ModelIDInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    type: UserType,
    teams?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        userId: string,
        teamId: string,
        userPoint?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    type: UserType,
    teams?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        userId: string,
        teamId: string,
        userPoint?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    type: UserType,
    teams?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        userId: string,
        teamId: string,
        userPoint?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        userId: string,
        teamId: string,
        userPoint?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        teamEventsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        userId: string,
        teamId: string,
        userPoint?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        teamEventsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        userId: string,
        teamId: string,
        userPoint?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        teamEventsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserTeamMutationVariables = {
  input: CreateUserTeamInput,
  condition?: ModelUserTeamConditionInput | null,
};

export type CreateUserTeamMutation = {
  createUserTeam?:  {
    __typename: "UserTeam",
    id: string,
    userId: string,
    teamId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      type: UserType,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPoint?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserTeamMutationVariables = {
  input: UpdateUserTeamInput,
  condition?: ModelUserTeamConditionInput | null,
};

export type UpdateUserTeamMutation = {
  updateUserTeam?:  {
    __typename: "UserTeam",
    id: string,
    userId: string,
    teamId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      type: UserType,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPoint?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserTeamMutationVariables = {
  input: DeleteUserTeamInput,
  condition?: ModelUserTeamConditionInput | null,
};

export type DeleteUserTeamMutation = {
  deleteUserTeam?:  {
    __typename: "UserTeam",
    id: string,
    userId: string,
    teamId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      type: UserType,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPoint?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description?: string | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ptinfomations?:  {
      __typename: "ModelPTInfomationConnection",
      items:  Array< {
        __typename: "PTInfomation",
        id: string,
        status?: PTStatus | null,
        createdAt: string,
        updatedAt: string,
        eventPtinfomationsId: string,
        pTInfomationUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamEventsId: string,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description?: string | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ptinfomations?:  {
      __typename: "ModelPTInfomationConnection",
      items:  Array< {
        __typename: "PTInfomation",
        id: string,
        status?: PTStatus | null,
        createdAt: string,
        updatedAt: string,
        eventPtinfomationsId: string,
        pTInfomationUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamEventsId: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description?: string | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ptinfomations?:  {
      __typename: "ModelPTInfomationConnection",
      items:  Array< {
        __typename: "PTInfomation",
        id: string,
        status?: PTStatus | null,
        createdAt: string,
        updatedAt: string,
        eventPtinfomationsId: string,
        pTInfomationUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamEventsId: string,
  } | null,
};

export type CreatePTInfomationMutationVariables = {
  input: CreatePTInfomationInput,
  condition?: ModelPTInfomationConditionInput | null,
};

export type CreatePTInfomationMutation = {
  createPTInfomation?:  {
    __typename: "PTInfomation",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      type: UserType,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    status?: PTStatus | null,
    createdAt: string,
    updatedAt: string,
    eventPtinfomationsId: string,
    pTInfomationUserId: string,
  } | null,
};

export type UpdatePTInfomationMutationVariables = {
  input: UpdatePTInfomationInput,
  condition?: ModelPTInfomationConditionInput | null,
};

export type UpdatePTInfomationMutation = {
  updatePTInfomation?:  {
    __typename: "PTInfomation",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      type: UserType,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    status?: PTStatus | null,
    createdAt: string,
    updatedAt: string,
    eventPtinfomationsId: string,
    pTInfomationUserId: string,
  } | null,
};

export type DeletePTInfomationMutationVariables = {
  input: DeletePTInfomationInput,
  condition?: ModelPTInfomationConditionInput | null,
};

export type DeletePTInfomationMutation = {
  deletePTInfomation?:  {
    __typename: "PTInfomation",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      type: UserType,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    status?: PTStatus | null,
    createdAt: string,
    updatedAt: string,
    eventPtinfomationsId: string,
    pTInfomationUserId: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    type: UserType,
    teams?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        userId: string,
        teamId: string,
        userPoint?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      type: UserType,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        userId: string,
        teamId: string,
        userPoint?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        teamEventsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items:  Array< {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserTeamQueryVariables = {
  id: string,
};

export type GetUserTeamQuery = {
  getUserTeam?:  {
    __typename: "UserTeam",
    id: string,
    userId: string,
    teamId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      type: UserType,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPoint?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserTeamsQueryVariables = {
  filter?: ModelUserTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserTeamsQuery = {
  listUserTeams?:  {
    __typename: "ModelUserTeamConnection",
    items:  Array< {
      __typename: "UserTeam",
      id: string,
      userId: string,
      teamId: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        type: UserType,
        createdAt: string,
        updatedAt: string,
      } | null,
      team?:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      userPoint?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description?: string | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ptinfomations?:  {
      __typename: "ModelPTInfomationConnection",
      items:  Array< {
        __typename: "PTInfomation",
        id: string,
        status?: PTStatus | null,
        createdAt: string,
        updatedAt: string,
        eventPtinfomationsId: string,
        pTInfomationUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamEventsId: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      name: string,
      description?: string | null,
      team:  {
        __typename: "Team",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      ptinfomations?:  {
        __typename: "ModelPTInfomationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      teamEventsId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPTInfomationQueryVariables = {
  id: string,
};

export type GetPTInfomationQuery = {
  getPTInfomation?:  {
    __typename: "PTInfomation",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      type: UserType,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    status?: PTStatus | null,
    createdAt: string,
    updatedAt: string,
    eventPtinfomationsId: string,
    pTInfomationUserId: string,
  } | null,
};

export type ListPTInfomationsQueryVariables = {
  filter?: ModelPTInfomationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPTInfomationsQuery = {
  listPTInfomations?:  {
    __typename: "ModelPTInfomationConnection",
    items:  Array< {
      __typename: "PTInfomation",
      id: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        type: UserType,
        createdAt: string,
        updatedAt: string,
      },
      status?: PTStatus | null,
      createdAt: string,
      updatedAt: string,
      eventPtinfomationsId: string,
      pTInfomationUserId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    type: UserType,
    teams?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        userId: string,
        teamId: string,
        userPoint?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    type: UserType,
    teams?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        userId: string,
        teamId: string,
        userPoint?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    type: UserType,
    teams?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        userId: string,
        teamId: string,
        userPoint?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        userId: string,
        teamId: string,
        userPoint?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        teamEventsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        userId: string,
        teamId: string,
        userPoint?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        teamEventsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    users?:  {
      __typename: "ModelUserTeamConnection",
      items:  Array< {
        __typename: "UserTeam",
        id: string,
        userId: string,
        teamId: string,
        userPoint?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    events?:  {
      __typename: "ModelEventConnection",
      items:  Array< {
        __typename: "Event",
        id: string,
        name: string,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        teamEventsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserTeamSubscription = {
  onCreateUserTeam?:  {
    __typename: "UserTeam",
    id: string,
    userId: string,
    teamId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      type: UserType,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPoint?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserTeamSubscription = {
  onUpdateUserTeam?:  {
    __typename: "UserTeam",
    id: string,
    userId: string,
    teamId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      type: UserType,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPoint?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserTeamSubscription = {
  onDeleteUserTeam?:  {
    __typename: "UserTeam",
    id: string,
    userId: string,
    teamId: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      type: UserType,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    userPoint?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description?: string | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ptinfomations?:  {
      __typename: "ModelPTInfomationConnection",
      items:  Array< {
        __typename: "PTInfomation",
        id: string,
        status?: PTStatus | null,
        createdAt: string,
        updatedAt: string,
        eventPtinfomationsId: string,
        pTInfomationUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamEventsId: string,
  } | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description?: string | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ptinfomations?:  {
      __typename: "ModelPTInfomationConnection",
      items:  Array< {
        __typename: "PTInfomation",
        id: string,
        status?: PTStatus | null,
        createdAt: string,
        updatedAt: string,
        eventPtinfomationsId: string,
        pTInfomationUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamEventsId: string,
  } | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description?: string | null,
    team:  {
      __typename: "Team",
      id: string,
      name: string,
      users?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      events?:  {
        __typename: "ModelEventConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    ptinfomations?:  {
      __typename: "ModelPTInfomationConnection",
      items:  Array< {
        __typename: "PTInfomation",
        id: string,
        status?: PTStatus | null,
        createdAt: string,
        updatedAt: string,
        eventPtinfomationsId: string,
        pTInfomationUserId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    teamEventsId: string,
  } | null,
};

export type OnCreatePTInfomationSubscription = {
  onCreatePTInfomation?:  {
    __typename: "PTInfomation",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      type: UserType,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    status?: PTStatus | null,
    createdAt: string,
    updatedAt: string,
    eventPtinfomationsId: string,
    pTInfomationUserId: string,
  } | null,
};

export type OnUpdatePTInfomationSubscription = {
  onUpdatePTInfomation?:  {
    __typename: "PTInfomation",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      type: UserType,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    status?: PTStatus | null,
    createdAt: string,
    updatedAt: string,
    eventPtinfomationsId: string,
    pTInfomationUserId: string,
  } | null,
};

export type OnDeletePTInfomationSubscription = {
  onDeletePTInfomation?:  {
    __typename: "PTInfomation",
    id: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      type: UserType,
      teams?:  {
        __typename: "ModelUserTeamConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    status?: PTStatus | null,
    createdAt: string,
    updatedAt: string,
    eventPtinfomationsId: string,
    pTInfomationUserId: string,
  } | null,
};
