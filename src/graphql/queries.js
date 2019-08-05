// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    profileImage
    userName
  }
}
`;

export const getUserNewborns = `query GetUser($id: ID!) {
  getUser(id: $id) {
    newborns {
      items {
        bio
        bornPlace
        childs
        createdAt
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
                id
                created
                steps {
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
    }
  }
}
`;

export const getUserTrainers = `query GetUser($id: ID!) {
  getUser(id: $id) {
    trainers {
      items {
        id
      }
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
        items {
          bio
          bornPlace
          childs
          createdAt
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
                  id
                  created
                  steps {
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
      }
    }
    nextToken
  }
}
`;
export const getNewborn = `query GetNewborn($id: ID!, $limit: Int) {
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
        episodes {
          items {
            steps(limit: $limit) {
              items {
                meanReward
              }
            }
          }
        }
      }
    }
    name
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
    }
    nextToken
  }
}
`;
export const getAllEpisodes = `query getAllEpisodes($id: ID!) {
  getModel(id: $id) {
    id
    cellInfos
    cellPositions
    episodes {
      items {
        id
        created
        steps {
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
`;
