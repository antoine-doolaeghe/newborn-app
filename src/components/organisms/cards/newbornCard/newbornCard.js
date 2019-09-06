import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CardHeader from "./header";

import {
  CardWrapper,
  CardButtonWrapper,
  CardChartWrapper
} from "./style/newbornCard.style";
import CardButton from "./button";
import lineChartOptions from "./lineChartOptions";
import NewbornCardLoader from "./loader/newbornCardLoader";

function NewbornCard(props) {
  const {
    onPartnerClick,
    onChildClick,
    isPlaceholderCard,
    newbornInfo,
    onClick,
    loading
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
            label={newbornInfo.partners}
          />
          <CardButton
            color="secondary"
            onClick={onChildClick}
            iconLabel="c"
            label={newbornInfo.childs}
          />
        </CardButtonWrapper>
      );
    }
  };

  if (loading) {
    return <NewbornCardLoader />;
  }
  const hadSummaryData = newbornInfo.summaries.datasets[0].data.length > 0;
  return (
    <CardWrapper
      color={newbornInfo.color}
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
            displayBadge
            data-testid="newbornHeader"
          />
          {hadSummaryData ? (
            <CardChartWrapper data-testid="newbornCardGraph">
              <HighchartsReact
                highcharts={Highcharts}
                options={lineChartOptions(
                  newbornInfo.summaries,
                  newbornInfo.color.dark,
                  9309200000
                )}
              />
            </CardChartWrapper>
          ) : (
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                height: "calc(100% - 100px)",
                alignItems: "center",
                display: "flex"
              }}
            >
              NO DATA PLACEHOLDER
            </div>
          )}
          {returnCardButton()}
        </Fragment>
      )}
    </CardWrapper>
  );
}

NewbornCard.propTypes = {
  isPlaceholderCard: PropTypes.bool.isRequired,
  newbornInfo: PropTypes.object.isRequired,
  onChildClick: PropTypes.func.isRequired,
  onPartnerClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default NewbornCard;
