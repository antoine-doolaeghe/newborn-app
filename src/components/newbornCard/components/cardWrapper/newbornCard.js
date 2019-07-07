import React from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import NewBornCardHeader from "../header/cardHeader";

import {
  NewbornCardWrapper,
  NewbornCardChartWrapper
} from "./newbornCard.style";
import lineChartOptions from "../../lineChartOptions";

function NewbornCard(props) {
  const { isPlaceholderCard, newbornInfo } = props;

  return (
    <NewbornCardWrapper
      isSelected={props.isSelected}
      data-newbornid={newbornInfo.id}
      isNewbornOwnedByCurrentUser={newbornInfo.isOwnedByCurrentUser}
      data-testid={
        !isPlaceholderCard ? "newbornCard" : "newbornCardPlaceholder"
      }
      isPlaceholderCard={isPlaceholderCard}
    >
      {!isPlaceholderCard && (
        <React.Fragment>
          <NewBornCardHeader
            title={newbornInfo.id.substring(
              newbornInfo.id.length - 3,
              newbornInfo.id.length
            )}
            subTitle="1y/2m/12d"
            newbornId={newbornInfo.id}
            data-testid="newbornHeader"
          />
          <NewbornCardChartWrapper data-testid="newbornCardGraph">
            <HighchartsReact
              highcharts={Highcharts}
              options={lineChartOptions(
                newbornInfo.summaries,
                newbornInfo.color,
                86400000
              )}
            />
          </NewbornCardChartWrapper>
          <button onClick={props.onPartnerClick}>partner</button>
          <button onClick={props.onChildClick}>child</button>
        </React.Fragment>
      )}
    </NewbornCardWrapper>
  );
}

NewbornCard.propTypes = {
  history: PropTypes.object,
  onClick: PropTypes.func,
  tooltipTitle: PropTypes.string.isRequired,
  isPlaceholderCard: PropTypes.bool.isRequired,
  newbornInfo: PropTypes.object.isRequired
};

export default NewbornCard;
