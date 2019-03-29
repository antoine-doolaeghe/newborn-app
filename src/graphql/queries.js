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
        bornPlace
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
export const getGeneration = `query GetGeneration($id: ID!) {
  getGeneration(id: $id) {
    id
    newborns {
      items {
        id
        bio
        name
        bornPlace
        hexColor
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
    bornPlace
    owner {
      id
      profileImage
      userName
      newborns {
        nextToken
      }
    }
    generation {
      id
      newborns {
        nextToken
      }
    }
    models {
      items {
        id
        cellInfos
        cellPositions
      }
      nextToken
    }
    predictions {
      items {
        meanReward
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
      bornPlace
      owner {
        id
        profileImage
        userName
      }
      generation {
        id
      }
      models {
        nextToken
      }
      predictions {
        nextToken
      }
      hexColor
    }
    nextToken
  }
}
`;
export const getModel = `query GetModel($id: ID!) {
  getModel(id: $id) {
    id
    cellInfos
    cellPositions
    newborn {
      id
      bio
      name
      bornPlace
      owner {
        id
        profileImage
        userName
      }
      generation {
        id
      }
      models {
        nextToken
      }
      predictions {
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
export const listModels = `query ListModels(
  $filter: ModelModelFilterInput
  $limit: Int
  $nextToken: String
) {
  listModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      cellInfos
      cellPositions
      newborn {
        id
        bio
        name
        bornPlace
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
    model {
      id
      cellInfos
      cellPositions
      newborn {
        id
        bio
        name
        bornPlace
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
      model {
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
      model {
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
export const getPrediction = `query GetPrediction($id: ID!) {
  getPrediction(id: $id) {
    meanReward
    newborn {
      id
      bio
      name
      bornPlace
      owner {
        id
        profileImage
        userName
      }
      generation {
        id
      }
      models {
        nextToken
      }
      predictions {
        nextToken
      }
      hexColor
    }
  }
}
`;
export const listPredictions = `query ListPredictions(
  $filter: ModelPredictionFilterInput
  $limit: Int
  $nextToken: String
) {
  listPredictions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      meanReward
      newborn {
        id
        bio
        name
        bornPlace
        hexColor
      }
    }
    nextToken
  }
}
`;
