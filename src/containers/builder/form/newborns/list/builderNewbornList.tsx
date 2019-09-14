import React from "react";
import { NewbornListWrapper } from "./style/newbornList.style";
import DefaultChip from "../../../../../components/atoms/chips/chip";

interface INewbornProps {
  trainer: string;
  id: string;
  name: string;
}

interface IBuilderNewbornListProps {
  newborns: Array<INewbornProps>;
  remove: Function;
}

export default function BuilderNewbornList({
  newborns,
  remove
}: IBuilderNewbornListProps) {
  const placeholderList = "No newborn to train";

  const handleDelete = chip => () => {
    remove(chip);
  };

  const returnListContent = () => {
    const list = newborns.map(data => {
      return (
        <DefaultChip
          key={`builder_newborn_${data.id}_key`}
          data-testid={`builder_newborn_${data.id}_id`}
          label={data.name}
          onDelete={handleDelete(data)}
        />
      );
    });
    return list.length > 0 ? list : placeholderList;
  };

  return <NewbornListWrapper>{returnListContent()}</NewbornListWrapper>;
}
