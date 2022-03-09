/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateUserTeam = /* GraphQL */ `
  subscription OnCreateUserTeam {
    onCreateUserTeam {
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
export const onUpdateUserTeam = /* GraphQL */ `
  subscription OnUpdateUserTeam {
    onUpdateUserTeam {
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
export const onDeleteUserTeam = /* GraphQL */ `
  subscription OnDeleteUserTeam {
    onDeleteUserTeam {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreatePTInfomation = /* GraphQL */ `
  subscription OnCreatePTInfomation {
    onCreatePTInfomation {
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
export const onUpdatePTInfomation = /* GraphQL */ `
  subscription OnUpdatePTInfomation {
    onUpdatePTInfomation {
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
export const onDeletePTInfomation = /* GraphQL */ `
  subscription OnDeletePTInfomation {
    onDeletePTInfomation {
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
