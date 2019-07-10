import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CardHeader from "./header";

import {
  CardWrapper,
  CardButtonWrapper,
  CardChartWrapper
} from "./newbornCard.style";
import CardButton from "./button";
import lineChartOptions from "./lineChartOptions";

function NewbornCard(props) {
  const {
    onPartnerClick,
    onChildClick,
    color,
    isPlaceholderCard,
    newbornInfo,
    onClick
  } = props;

  const [hovered, setHovered] = useState(false);

  const returnCardButton = () => {
    if (hovered) {
      return (
        <CardButtonWrapper>
          <CardButton
            color="primary"
            onClick={onPartnerClick}
            iconLabel="p"
            label="1"
          />
          <CardButton
            color="secondary"
            onClick={onChildClick}
            iconLabel="c"
            label="1"
          />
        </CardButtonWrapper>
      );
    }
  };

  return (
    <CardWrapper
      color={color}
      data-newbornid={newbornInfo.id}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      isNewbornOwnedByCurrentUser={newbornInfo.isOwnedByCurrentUser}
      isPlaceholderCard={isPlaceholderCard}
    >
      {!isPlaceholderCard && (
        <Fragment>
          <CardHeader
            title={newbornInfo.title}
            subTitle={newbornInfo.dob}
            data-testid="newbornHeader"
          />
          <CardChartWrapper data-testid="newbornCardGraph">
            <HighchartsReact
              highcharts={Highcharts}
              options={lineChartOptions(
                newbornInfo.summaries,
                newbornInfo.color.dark,
                86400000
              )}
            />
          </CardChartWrapper>
          {returnCardButton()}
        </Fragment>
      )}
    </CardWrapper>
  );
}

NewbornCard.propTypes = {
  isPlaceholderCard: PropTypes.bool.isRequired,
  newbornInfo: PropTypes.object.isRequired
};

export default NewbornCard;
