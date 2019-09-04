import React from "react";
import {
  CardWrapper,
  CardContent,
  // TrainerTitleInput,
  TrainerActionWrapper,
  CreateTrainerButton
} from "./style/createTrainerCard.style";
import TrainerTemplate from "./trainerTemplate/trainerTemplate";

function CreateTrainerCard() {
  // const [trainerTitle, setTrainerTitle] = useState(false);
  // const [helperText, setHelperText] = useState("");
  // const [error, setError] = useState(null);
  return (
    <CardWrapper
      style={{
        background: "white",
        border: "1px solid orange"
      }}
    >
      <CardContent>
        <div>
          <TrainerTemplate />
        </div>
        <TrainerActionWrapper>
          <CreateTrainerButton
            // onClick={() => {
            //   if (trainerTitle.length > 3) {
            //     onCreateClick({
            //       variables: {
            //         title: trainerTitle,
            //         trainerOwnerId: currentUserId
            //       }
            //     });
            //   } else {
            //     setHelperText("Trainer title should be more than 3 characters");
            //     setError(true);
            //   }
            // }}
            color="primary"
          >
            Create Trainer
          </CreateTrainerButton>
        </TrainerActionWrapper>
      </CardContent>
    </CardWrapper>
  );
}

CreateTrainerCard.propTypes = {};

export default CreateTrainerCard;
