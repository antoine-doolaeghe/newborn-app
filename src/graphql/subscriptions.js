// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateGeneration = `subscription OnCreateGeneration {
  onCreateGeneration {
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
export const onUpdateGeneration = `subscription OnUpdateGeneration {
  onUpdateGeneration {
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
export const onDeleteGeneration = `subscription OnDeleteGeneration {
  onDeleteGeneration {
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
export const onCreateNewborn = `subscription OnCreateNewborn {
  onCreateNewborn {
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
export const onUpdateNewborn = `subscription OnUpdateNewborn {
  onUpdateNewborn {
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
export const onDeleteNewborn = `subscription OnDeleteNewborn {
  onDeleteNewborn {
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
export const onCreateModel = `subscription OnCreateModel {
  onCreateModel {
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
export const onUpdateModel = `subscription OnUpdateModel {
  onUpdateModel {
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
export const onDeleteModel = `subscription OnDeleteModel {
  onDeleteModel {
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
export const onCreateEpisode = `subscription OnCreateEpisode {
  onCreateEpisode {
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
export const onUpdateEpisode = `subscription OnUpdateEpisode {
  onUpdateEpisode {
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
export const onDeleteEpisode = `subscription OnDeleteEpisode {
  onDeleteEpisode {
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
export const onUpdatePrediction = `subscription OnUpdatePrediction {
  onUpdatePrediction {
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
export const onDeletePrediction = `subscription OnDeletePrediction {
  onDeletePrediction {
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
