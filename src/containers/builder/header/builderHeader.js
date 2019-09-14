import React, { useState, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import BuilderProgress from "./progress/builderProgress.tsx";
import DefaultButton from "../../../components/molecules/buttons/defaultButton/defaultButton";
import * as queries from "../../../graphql/queries";
import { BuilderTitle } from "./title/builderTitle.tsx";

export const BuilderHeader = ({ trainerId }) => {
  const [steps, setSteps] = useState(["Spawning Agent"]);

  return (
    <Query
      query={gql(queries.getTrainer)}
      variables={{
        id: trainerId
      }}
    >
      {({ data, loading }) => {
        return (
          <AppBar style={{ top: 80 }} position="fixed" color="default">
            <Toolbar>
              {!loading && (
                <Fragment>
                  <BuilderTitle title={data.getTrainer.title} id={trainerId} />
                  0 step / 200 step
                  <BuilderProgress />
                  <DefaultButton
                    color="primary"
                    onClick={() => {
                      setSteps([...steps, `Target ${steps.length}`]);
                    }}
                  >
                    Train
                  </DefaultButton>
                </Fragment>
              )}
            </Toolbar>
          </AppBar>
        );
      }}
    </Query>
  );
};

export default BuilderHeader;
