// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createNewborn = `mutation CreateNewborn($input: CreateNewbornInput!) {
  createNewborn(input: $input) {
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
export const updateNewborn = `mutation UpdateNewborn($input: UpdateNewbornInput!) {
  updateNewborn(input: $input) {
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
export const deleteNewborn = `mutation DeleteNewborn($input: DeleteNewbornInput!) {
  deleteNewborn(input: $input) {
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
export const createGeneration = `mutation CreateGeneration($input: CreateGenerationInput!) {
  createGeneration(input: $input) {
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
export const updateGeneration = `mutation UpdateGeneration($input: UpdateGenerationInput!) {
  updateGeneration(input: $input) {
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
export const deleteGeneration = `mutation DeleteGeneration($input: DeleteGenerationInput!) {
  deleteGeneration(input: $input) {
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
export const createEpisode = `mutation CreateEpisode($input: CreateEpisodeInput!) {
  createEpisode(input: $input) {
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
export const updateEpisode = `mutation UpdateEpisode($input: UpdateEpisodeInput!) {
  updateEpisode(input: $input) {
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
export const deleteEpisode = `mutation DeleteEpisode($input: DeleteEpisodeInput!) {
  deleteEpisode(input: $input) {
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
export const createSummary = `mutation CreateSummary($input: CreateSummaryInput!) {
  createSummary(input: $input) {
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
export const updateSummary = `mutation UpdateSummary($input: UpdateSummaryInput!) {
  updateSummary(input: $input) {
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
export const deleteSummary = `mutation DeleteSummary($input: DeleteSummaryInput!) {
  deleteSummary(input: $input) {
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
