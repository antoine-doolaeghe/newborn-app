import React, { Fragment, useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import Backdrop from "@material-ui/core/Backdrop";
import { IconButton } from "../../../molecules/buttons";
import {
  CardWrapper,
  CardContent,
  TrainerTitleInput,
  TrainerActionWrapper,
  CreateTrainerButton,
  CreateTrainerTitle
} from "./style/createTrainerCard.style";

function CreateTrainerCard({ onCreateClick, currentUserId }) {
  const [trainerTitle, setTrainerTitle] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(error);

  return (
    <Fragment>
      {isFormOpen && (
        <Backdrop
          style={{ zIndex: isFormOpen ? 1 : -1 }}
          invisible={false}
          open={isFormOpen}
        />
      )}
      <CardWrapper style={{ background: "white", zIndex: isFormOpen ? 2 : 0 }}>
        {!isFormOpen ? (
          <CreateTrainerTitle
            onClick={() => {
              setIsFormOpen(true);
            }}
          >
            Create a Trainer
          </CreateTrainerTitle>
        ) : (
          <CardContent>
            <TrainerTitleInput
              onChange={event => {
                setTrainerTitle(event.target.value);
              }}
              placeholder="Add trainer title"
              helperText={helperText}
              error={error}
            />
            <TrainerActionWrapper>
              <IconButton
                width="30px"
                height="30px"
                color="light"
                onClick={() => {
                  setIsFormOpen(false);
                }}
              >
                <ClearIcon />
              </IconButton>
              <CreateTrainerButton
                onClick={() => {
                  if (trainerTitle.length > 3) {
                    onCreateClick({
                      variables: {
                        title: trainerTitle,
                        trainerOwnerId: currentUserId
                      }
                    });
                  } else {
                    setHelperText(
                      "Trainer title should be more than 3 characters"
                    );
                    setError(true);
                  }
                }}
                color="primary"
              >
                Create Trainer
              </CreateTrainerButton>
            </TrainerActionWrapper>
          </CardContent>
        )}
      </CardWrapper>
    </Fragment>
  );
}

CreateTrainerCard.propTypes = {};

export default CreateTrainerCard;
