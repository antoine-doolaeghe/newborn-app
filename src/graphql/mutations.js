// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
        parents
        partners
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
        parents
        partners
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
        parents
        partners
      }
      nextToken
    }
  }
}
`;
export const createGeneration = `mutation CreateGeneration($input: CreateGenerationInput!) {
  createGeneration(input: $input) {
    id
    newborns {
      items {
        bio
        bornPlace
        childs
        hexColor
        id
        name
        parents
        partners
      }
      nextToken
    }
  }
}
`;
export const updateGeneration = `mutation UpdateGeneration($input: UpdateGenerationInput!) {
  updateGeneration(input: $input) {
    id
    newborns {
      items {
        bio
        bornPlace
        childs
        hexColor
        id
        name
        parents
        partners
      }
      nextToken
    }
  }
}
`;
export const deleteGeneration = `mutation DeleteGeneration($input: DeleteGenerationInput!) {
  deleteGeneration(input: $input) {
    id
    newborns {
      items {
        bio
        bornPlace
        childs
        hexColor
        id
        name
        parents
        partners
      }
      nextToken
    }
  }
}
`;
export const createNewborn = `mutation CreateNewborn($input: CreateNewbornInput!) {
  createNewborn(input: $input) {
    bio
    bornPlace
    childs
    generation {
      id
      newborns {
        nextToken
      }
    }
    hexColor
    id
    models {
      items {
        id
        cellInfos
        cellPositions
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
export const updateNewborn = `mutation UpdateNewborn($input: UpdateNewbornInput!, $stepLimit: Int) {
  updateNewborn(input: $input) {
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
}
`;
export const deleteNewborn = `mutation DeleteNewborn($input: DeleteNewbornInput!) {
  deleteNewborn(input: $input) {
    bio
    bornPlace
    childs
    generation {
      id
      newborns {
        nextToken
      }
    }
    hexColor
    id
    models {
      items {
        id
        cellInfos
        cellPositions
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
export const createModel = `mutation CreateModel($input: CreateModelInput!) {
  createModel(input: $input) {
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
export const updateModel = `mutation UpdateModel($input: UpdateModelInput!) {
  updateModel(input: $input) {
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
export const deleteModel = `mutation DeleteModel($input: DeleteModelInput!) {
  deleteModel(input: $input) {
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
export const createEpisode = `mutation CreateEpisode($input: CreateEpisodeInput!) {
  createEpisode(input: $input) {
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
export const updateEpisode = `mutation UpdateEpisode($input: UpdateEpisodeInput!) {
  updateEpisode(input: $input) {
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
export const deleteEpisode = `mutation DeleteEpisode($input: DeleteEpisodeInput!) {
  deleteEpisode(input: $input) {
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
export const createSummary = `mutation CreateSummary($input: CreateSummaryInput!) {
  createSummary(input: $input) {
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
export const updateSummary = `mutation UpdateSummary($input: UpdateSummaryInput!) {
  updateSummary(input: $input) {
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
export const deleteSummary = `mutation DeleteSummary($input: DeleteSummaryInput!) {
  deleteSummary(input: $input) {
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
export const createPrediction = `mutation CreatePrediction($input: CreatePredictionInput!) {
  createPrediction(input: $input) {
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
export const updatePrediction = `mutation UpdatePrediction($input: UpdatePredictionInput!) {
  updatePrediction(input: $input) {
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
export const deletePrediction = `mutation DeletePrediction($input: DeletePredictionInput!) {
  deletePrediction(input: $input) {
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
