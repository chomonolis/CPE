/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      type
      teams {
        items {
          id
          userId
          teamId
          userPoint
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      type
      teams {
        items {
          id
          userId
          teamId
          userPoint
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      type
      teams {
        items {
          id
          userId
          teamId
          userPoint
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      name
      users {
        items {
          id
          userId
          teamId
          userPoint
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          name
          description
          createdAt
          updatedAt
          teamEventsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      name
      users {
        items {
          id
          userId
          teamId
          userPoint
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          name
          description
          createdAt
          updatedAt
          teamEventsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      name
      users {
        items {
          id
          userId
          teamId
          userPoint
          createdAt
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          name
          description
          createdAt
          updatedAt
          teamEventsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserTeam = /* GraphQL */ `
  mutation CreateUserTeam(
    $input: CreateUserTeamInput!
    $condition: ModelUserTeamConditionInput
  ) {
    createUserTeam(input: $input, condition: $condition) {
      id
      userId
      teamId
      user {
        id
        name
        type
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      team {
        id
        name
        users {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      userPoint
      createdAt
      updatedAt
    }
  }
`;
export const updateUserTeam = /* GraphQL */ `
  mutation UpdateUserTeam(
    $input: UpdateUserTeamInput!
    $condition: ModelUserTeamConditionInput
  ) {
    updateUserTeam(input: $input, condition: $condition) {
      id
      userId
      teamId
      user {
        id
        name
        type
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      team {
        id
        name
        users {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      userPoint
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserTeam = /* GraphQL */ `
  mutation DeleteUserTeam(
    $input: DeleteUserTeamInput!
    $condition: ModelUserTeamConditionInput
  ) {
    deleteUserTeam(input: $input, condition: $condition) {
      id
      userId
      teamId
      user {
        id
        name
        type
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      team {
        id
        name
        users {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      userPoint
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      name
      description
      team {
        id
        name
        users {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      ptinfomations {
        items {
          id
          status
          createdAt
          updatedAt
          eventPtinfomationsId
          pTInfomationUserId
        }
        nextToken
      }
      createdAt
      updatedAt
      teamEventsId
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      name
      description
      team {
        id
        name
        users {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      ptinfomations {
        items {
          id
          status
          createdAt
          updatedAt
          eventPtinfomationsId
          pTInfomationUserId
        }
        nextToken
      }
      createdAt
      updatedAt
      teamEventsId
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      name
      description
      team {
        id
        name
        users {
          nextToken
        }
        events {
          nextToken
        }
        createdAt
        updatedAt
      }
      ptinfomations {
        items {
          id
          status
          createdAt
          updatedAt
          eventPtinfomationsId
          pTInfomationUserId
        }
        nextToken
      }
      createdAt
      updatedAt
      teamEventsId
    }
  }
`;
export const createPTInfomation = /* GraphQL */ `
  mutation CreatePTInfomation(
    $input: CreatePTInfomationInput!
    $condition: ModelPTInfomationConditionInput
  ) {
    createPTInfomation(input: $input, condition: $condition) {
      id
      user {
        id
        name
        type
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
      eventPtinfomationsId
      pTInfomationUserId
    }
  }
`;
export const updatePTInfomation = /* GraphQL */ `
  mutation UpdatePTInfomation(
    $input: UpdatePTInfomationInput!
    $condition: ModelPTInfomationConditionInput
  ) {
    updatePTInfomation(input: $input, condition: $condition) {
      id
      user {
        id
        name
        type
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
      eventPtinfomationsId
      pTInfomationUserId
    }
  }
`;
export const deletePTInfomation = /* GraphQL */ `
  mutation DeletePTInfomation(
    $input: DeletePTInfomationInput!
    $condition: ModelPTInfomationConditionInput
  ) {
    deletePTInfomation(input: $input, condition: $condition) {
      id
      user {
        id
        name
        type
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
      eventPtinfomationsId
      pTInfomationUserId
    }
  }
`;
