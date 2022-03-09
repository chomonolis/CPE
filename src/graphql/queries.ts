/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserTeam = /* GraphQL */ `
  query GetUserTeam($id: ID!) {
    getUserTeam(id: $id) {
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
export const listUserTeams = /* GraphQL */ `
  query ListUserTeams(
    $filter: ModelUserTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        teamId
        user {
          id
          name
          type
          createdAt
          updatedAt
        }
        team {
          id
          name
          createdAt
          updatedAt
        }
        userPoint
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        team {
          id
          name
          createdAt
          updatedAt
        }
        ptinfomations {
          nextToken
        }
        createdAt
        updatedAt
        teamEventsId
      }
      nextToken
    }
  }
`;
export const getPTInfomation = /* GraphQL */ `
  query GetPTInfomation($id: ID!) {
    getPTInfomation(id: $id) {
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
export const listPTInfomations = /* GraphQL */ `
  query ListPTInfomations(
    $filter: ModelPTInfomationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPTInfomations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          name
          type
          createdAt
          updatedAt
        }
        status
        createdAt
        updatedAt
        eventPtinfomationsId
        pTInfomationUserId
      }
      nextToken
    }
  }
`;
