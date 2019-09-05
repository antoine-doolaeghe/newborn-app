import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CakeIcon from "@material-ui/icons/Cake";
import RecordInfoLoader from "./loader/recordInfoLoader";
import { InfoWrapper, ValueWrapper } from "./style/recordInfo.style";
import Info from "../../../molecules/infos/info";
import { Badge } from "../../../atoms/badges";
import { Flex } from "../../../../theme/layout/grid.style";
import { returnFormattedTime } from "../../../../utils/helpers/newbornGlobalHelpers";

function RecordInfo({
  loading,
  newbornInfo: {
    birthDate,
    meanReward,
    currentIndex,
    ownerUserName,
    ownerProfileImage
  }
}) {
  const index = currentIndex > 0 ? `+${currentIndex}%` : `${currentIndex}%`;
  return (
    <InfoWrapper data-testid="newbornRecordHeader">
      {loading ? (
        <RecordInfoLoader />
      ) : (
        <Fragment>
          <ValueWrapper>
            <Flex align="center">
              <Info label="Current Reward" value={meanReward} size="80px" />
              <Badge label={index} />
            </Flex>
          </ValueWrapper>
          <Flex height="auto">
            <Info
              label="Birthday"
              value={returnFormattedTime(birthDate)}
              icon={<CakeIcon fontSize="inherit" />}
            />
            <Info
              label="Own by"
              value={ownerUserName}
              avatar={ownerProfileImage}
            />
          </Flex>
        </Fragment>
      )}
    </InfoWrapper>
  );
}

RecordInfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  newbornInfo: PropTypes.object.isRequired
};

export default RecordInfo;
