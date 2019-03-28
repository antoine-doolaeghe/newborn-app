// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    profileImage
    userName
    newborns {
      items {
        id
        bio
        name
        hexColor
      }
      nextToken
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      profileImage
      userName
      newborns {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getNewborn = `query GetNewborn($id: ID!) {
  getNewborn(id: $id) {
    id
    bio
    name
    owner {
      id
      profileImage
      userName
      newborns {
        nextToken
      }
    }
    generations {
      items {
        id
        cellInfos
        cellPositions
      }
      nextToken
    }
    hexColor
  }
}
`;
export const listNewborns = `query ListNewborns(
  $filter: ModelNewbornFilterInput
  $limit: Int
  $nextToken: String
) {
  listNewborns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      bio
      name
      owner {
        id
        profileImage
        userName
      }
      generations {
        nextToken
      }
      hexColor
    }
    nextToken
  }
}
`;
export const getGeneration = `query GetGeneration($id: ID!) {
  getGeneration(id: $id) {
    id
    cellInfos
    cellPositions
    newborn {
      id
      bio
      name
      owner {
        id
        profileImage
        userName
      }
      generations {
        nextToken
      }
      hexColor
    }
    episodes {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listGenerations = `query ListGenerations(
  $filter: ModelGenerationFilterInput
  $limit: Int
  $nextToken: String
) {
  listGenerations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      cellInfos
      cellPositions
      newborn {
        id
        bio
        name
        hexColor
      }
      episodes {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getEpisode = `query GetEpisode($id: ID!) {
  getEpisode(id: $id) {
    id
    generation {
      id
      cellInfos
      cellPositions
      newborn {
        id
        bio
        name
        hexColor
      }
      episodes {
        nextToken
      }
    }
    steps {
      items {
        meanReward
        standardReward
        step
      }
      nextToken
    }
  }
}
`;
export const listEpisodes = `query ListEpisodes(
  $filter: ModelEpisodeFilterInput
  $limit: Int
  $nextToken: String
) {
  listEpisodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      generation {
        id
        cellInfos
        cellPositions
      }
      steps {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSummary = `query GetSummary($id: ID!) {
  getSummary(id: $id) {
    meanReward
    standardReward
    step
    episode {
      id
      generation {
        id
        cellInfos
        cellPositions
      }
      steps {
        nextToken
      }
    }
  }
}
`;
export const listSummarys = `query ListSummarys(
  $filter: ModelSummaryFilterInput
  $limit: Int
  $nextToken: String
) {
  listSummarys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      meanReward
      standardReward
      step
      episode {
        id
      }
    }
    nextToken
  }
}
`;
