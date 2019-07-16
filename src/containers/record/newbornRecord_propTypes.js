import PropTypes from "prop-types";

export const propTypes = {
  fetchNewborn: PropTypes.func.isRequired,
  newbornInfo: PropTypes.object,
  newbornInfoLoading: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  newbornPredictionLoading: PropTypes.bool.isRequired,
  resetNewbornPrediction: PropTypes.func.isRequired,
  startPredictionTraining: PropTypes.func.isRequired
};
