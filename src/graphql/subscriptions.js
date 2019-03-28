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
export const onUpdateNewborn = `subscription OnUpdateNewborn {
  onUpdateNewborn {
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
export const onDeleteNewborn = `subscription OnDeleteNewborn {
  onDeleteNewborn {
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
export const onCreateGeneration = `subscription OnCreateGeneration {
  onCreateGeneration {
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
export const onUpdateGeneration = `subscription OnUpdateGeneration {
  onUpdateGeneration {
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
export const onDeleteGeneration = `subscription OnDeleteGeneration {
  onDeleteGeneration {
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
export const onCreateEpisode = `subscription OnCreateEpisode {
  onCreateEpisode {
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
export const onUpdateEpisode = `subscription OnUpdateEpisode {
  onUpdateEpisode {
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
export const onDeleteEpisode = `subscription OnDeleteEpisode {
  onDeleteEpisode {
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
export const onCreateSummary = `subscription OnCreateSummary {
  onCreateSummary {
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
export const onUpdateSummary = `subscription OnUpdateSummary {
  onUpdateSummary {
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
export const onDeleteSummary = `subscription OnDeleteSummary {
  onDeleteSummary {
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
