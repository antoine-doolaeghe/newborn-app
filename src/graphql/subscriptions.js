// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateGeneration = `subscription OnCreateGeneration {
  onCreateGeneration {
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
export const onUpdateGeneration = `subscription OnUpdateGeneration {
  onUpdateGeneration {
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
export const onDeleteGeneration = `subscription OnDeleteGeneration {
  onDeleteGeneration {
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
export const onCreateNewborn = `subscription OnCreateNewborn {
  onCreateNewborn {
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
export const onUpdateNewborn = `subscription OnUpdateNewborn {
  onUpdateNewborn {
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
        episodes {
          items {
            steps(limit: 10000) {
              items {
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
export const onDeleteNewborn = `subscription OnDeleteNewborn {
  onDeleteNewborn {
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
export const onCreateModel = `subscription OnCreateModel {
  onCreateModel {
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
export const onUpdateModel = `subscription OnUpdateModel {
  onUpdateModel {
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
export const onDeleteModel = `subscription OnDeleteModel {
  onDeleteModel {
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
export const onCreateEpisode = `subscription OnCreateEpisode {
  onCreateEpisode {
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
export const onUpdateEpisode = `subscription OnUpdateEpisode {
  onUpdateEpisode {
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
export const onDeleteEpisode = `subscription OnDeleteEpisode {
  onDeleteEpisode {
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
export const onCreateSummary = `subscription OnCreateSummary {
  onCreateSummary {
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
export const onUpdateSummary = `subscription OnUpdateSummary {
  onUpdateSummary {
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
export const onDeleteSummary = `subscription OnDeleteSummary {
  onDeleteSummary {
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
export const onCreatePrediction = `subscription OnCreatePrediction {
  onCreatePrediction {
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
export const onUpdatePrediction = `subscription OnUpdatePrediction {
  onUpdatePrediction {
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
export const onDeletePrediction = `subscription OnDeletePrediction {
  onDeletePrediction {
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

export const onCreateTrainer = `subscription onCreateTrainer {
  onCreateTrainer {
   id
  }
}
`;
