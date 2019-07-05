// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    profileImage
    userName
    newborns {
      items {
        bio
        bornPlace
        childs
        hexColor
        id
        name
        sex
        parents
        partners
        models {
          items {
            id
            cellInfos
            cellPositions
            episodes {
              items {
                steps(limit: 20) {
                  items {
                    meanReward
                    standardReward
                    step
                  }
                }
              }
            }
          }
          nextToken
        }
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
export const getGeneration = `query GetGeneration($id: ID!, $newbornLimit: Int, $stepLimit: Int) {
  getGeneration(id: $id) {
    id
    newborns(limit: $newbornLimit) {
      items {
        bio
        bornPlace
        childs
        hexColor
        id
        name
        sex
        parents
        partners
        owner {
          id
        }
        models {
          items {
            id
            cellInfos
            cellPositions
            episodes {
              items {
                created
                steps(limit: $stepLimit) {
                  items {
                    created
                    meanReward
                    standardReward
                    step
                  }
                }
              }
            }
          }
        }
      }
      nextToken
    }
  }
}
`;

export const getFilteredGeneration = `query GetGeneration($id: ID!,$partnerFilter: String, $newbornLimit: Int, $stepLimit: Int) {
  getGeneration(id: $id) {
    id
    newborns(limit: $newbornLimit, filter: {
      or: [{
        partners: {
          contains: $partnerFilter
        }
      },
      {
        id: {
          eq: $partnerFilter
        }
      }]
    }) {
      items {
        bio
        bornPlace
        childs
        hexColor
        id
        name
        sex
        parents
        partners
        owner {
          id
        }
        models {
          items {
            id
            cellInfos
            cellPositions
            episodes {
              items {
                created
                steps(limit: $stepLimit) {
                  items {
                    created
                    meanReward
                    standardReward
                    step
                  }
                }
              }
            }
          }
        }
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
export const getNewborn = `query GetNewborn($id: ID!, $stepLimit: Int) {
  getNewborn(id: $id) {
    bio
    bornPlace
    childs
    trainingStage
    generation {
      id
      newborns {
        nextToken
      }
    }
    hexColor
    id
    sex
    models {
      items {
        id
        cellPositions
        episodes {
          items {
            id
            created
            steps(limit: $stepLimit) {
              items {
                created
                meanReward
                standardReward
                step
              }
            }
          }
        }
      }
      nextToken
    }
    name
    owner {
      id
      profileImage
      userName
      newborns {
        nextToken
      }
    }
    parents
    partners
    predictions {
      items {
        meanReward
      }
      nextToken
    }
  }
}
`;
export const listNewborns = `query ListNewborns(
  $filter: ModelNewbornFilterInput
  $limit: Int
  $stepLimit: Int
  $nextToken: String
) {
  listNewborns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      bio
      bornPlace
      childs
      generation {
        id
      }
      hexColor
      id
      name
      sex
      owner {
        id
        profileImage
        userName
      }
      parents
      partners
      predictions {
        nextToken
      }
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
      bio
      bornPlace
      childs
      generation {
        id
      }
      hexColor
      id
      models {
        nextToken
      }
      name
      owner {
        id
        profileImage
        userName
      }
      parents
      partners
      predictions {
        nextToken
      }
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
        bio
        bornPlace
        childs
        hexColor
        id
        name
        parents
        partners
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
        bio
        bornPlace
        childs
        hexColor
        id
        name
        parents
        partners
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
      bio
      bornPlace
      childs
      generation {
        id
      }
      hexColor
      id
      models {
        nextToken
      }
      name
      owner {
        id
        profileImage
        userName
      }
      parents
      partners
      predictions {
        nextToken
      }
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
        bio
        bornPlace
        childs
        hexColor
        id
        name
        parents
        partners
      }
    }
    nextToken
  }
}
`;
