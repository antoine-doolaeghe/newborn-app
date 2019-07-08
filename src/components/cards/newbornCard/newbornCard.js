import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CardHeader from "./header/cardHeader";

import {
  CardWrapper,
  CardButtonWrapper,
  CardChartWrapper
} from "./newbornCard.style";
import { BadgeButton } from "../../buttons";
import lineChartOptions from "./lineChartOptions";

function NewbornCard(props) {
  const {
    onPartnerClick,
    onChildClick,
    isSelected,
    isPlaceholderCard,
    newbornInfo
  } = props;

  const [hovered, setHovered] = useState(false);

  const returnCardButton = () => {
    if (hovered) {
      return (
        <CardButtonWrapper>
          <BadgeButton color="primary" onClick={onPartnerClick}>
            P 1
          </BadgeButton>
          <BadgeButton color="secondary" onClick={onChildClick}>
            C 0
          </BadgeButton>
        </CardButtonWrapper>
      );
    }
  };

  return (
    <CardWrapper
      isSelected={isSelected}
      data-newbornid={newbornInfo.id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      isNewbornOwnedByCurrentUser={newbornInfo.isOwnedByCurrentUser}
      isPlaceholderCard={isPlaceholderCard}
    >
      {!isPlaceholderCard && (
        <Fragment>
          <CardHeader
            title={newbornInfo.id.substring(
              newbornInfo.id.length - 3,
              newbornInfo.id.length
            )}
            subTitle="1y/2m/12d"
            newbornId={newbornInfo.id}
            data-testid="newbornHeader"
          />
          <CardChartWrapper data-testid="newbornCardGraph">
            <HighchartsReact
              highcharts={Highcharts}
              options={lineChartOptions(
                newbornInfo.summaries,
                newbornInfo.color,
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
