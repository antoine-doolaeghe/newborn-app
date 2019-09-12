import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CardHeader from "./header";

import {
  CardWrapper,
  CardButtonWrapper,
  CardChartWrapper,
  EmptyDataPlaceHolder
} from "./style/newbornCard.style";
import CardButton from "./button";
import lineChartOptions from "./lineChartOptions";
import NewbornCardLoader from "./loader/newbornCardLoader";
import { Text } from "../../../atoms/text";

function NewbornCard(props) {
  const { onPartnerClick, onChildClick, info, onClick, size, loading } = props;

  const [hovered, setHovered] = useState(false);

  const returnCardButton = () => {
    if (hovered && size === "large") {
      return (
        <CardButtonWrapper>
          <CardButton
            color="primary"
            onClick={onPartnerClick}
            iconLabel="p"
            label={info.partners}
          />
          <CardButton
            color="secondary"
            onClick={onChildClick}
            iconLabel="c"
            label={info.childs}
          />
        </CardButtonWrapper>
      );
    }
  };
  const hasSummary = info.summaries.datasets[0].data.length > 0;
  const returnCardContent = () => {
    if (size === "large") {
      if (hasSummary) {
        return (
          <CardChartWrapper data-testid="newbornCardGraph">
            <HighchartsReact
              highcharts={Highcharts}
              options={lineChartOptions(
                info.summaries,
                info.color.dark,
                9309200000
              )}
            />
          </CardChartWrapper>
        );
      }
      return (
        <EmptyDataPlaceHolder>
          <Text>NO DATA PLACEHOLDER</Text>
        </EmptyDataPlaceHolder>
      );
    }
  };

  if (loading) {
    return <NewbornCardLoader />;
  }

  return (
    <CardWrapper
      color={info.color}
      data-newbornid={info.id}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      isNewbornOwnedByCurrentUser={info.isOwnedByCurrentUser}
      size={size}
    >
      <Fragment>
        <CardHeader
          title={info.title}
          subTitle={info.dob}
          displayBadge
          data-testid="cardHeader"
        />
        {returnCardContent()}
        {returnCardButton()}
      </Fragment>
    </CardWrapper>
  );
}

NewbornCard.defaultProps = {
  size: "large",
  info: {
    summaries: {
      datasets: [{ data: [] }]
    }
  }
};

NewbornCard.propTypes = {
  info: PropTypes.shape({
    summaries: PropTypes.shape({
      datasets: PropTypes.array.isRequired
    }).isRequired
  }),
  onChildClick: PropTypes.func.isRequired,
  onPartnerClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(["small, medium, large"])
};

export default NewbornCard;
