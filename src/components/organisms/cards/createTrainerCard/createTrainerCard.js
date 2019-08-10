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

function CreateTrainerCard({ onCreateClick }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

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
              placeholder="Add trainer title"
              helperText="Full width!"
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
                  onCreateClick({
                    variables: {
                      id: "32f940f9-cd4a-420a-9ccf-60783a6c8d50"
                    }
                  });
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
