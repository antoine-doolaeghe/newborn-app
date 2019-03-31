import * as actions from '../../store/actions';

import React, { Component } from 'react';
import compose from 'recompose/compose';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, GridContainer, FlexContainer } from '../../theme/grid.style';
import NewBornCard from '../../containers/newbornCard/newbornCard';
import newBornListJss from './newbornList_jss';
import withWidth from '@material-ui/core/withWidth';

import MockList from './mockList';

class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedNewborns: [],
    }
  }
  componentDidMount() {
    this.props.fetchNewborns().catch(error => {
      console.log(error.name); // TO-DO error handling
    });
  }

  componentDidUpdate() {
    if(this.state.selectedNewborns.length > 1) {
      console.log("It should update now");
    }
  }

  renderNewbornGeneration = () => {
    return (<><Grid columnNumber={this.renderCells().length}>{this.renderCells()}</Grid><Grid columnNumber={this.renderCells().length}>{this.renderCells()}</Grid></>);
  };

  handleNewbornSelect = (newbornKey) => {
    const { selectedNewborns } = this.state;
    if(selectedNewborns.includes(newbornKey)) {
      this.setState({
        selectedNewborns: selectedNewborns.filter(newborn => newborn != newbornKey)
      })
    } else if(selectedNewborns.length < 2) {
      this.setState({
        selectedNewborns: [...selectedNewborns, newbornKey]
      })
    }
  }

  renderCells() {
    const newbornCardList = [];
    const { newbornList } = this.props;
    newbornList.forEach((newborn, newbornKey) => {
      const newbornName = newborn.name || '';
      const newbornId = newborn.id || '';
      const newbornPlace = newborn.bornPlace || 'unknown region';
      const isSelected = this.state.selectedNewborns.includes(newbornId);
      const newbornSummaries = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            backgroundColor: 'black',
            data: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
          },
        ],
      };
      newbornCardList.push(<NewBornCard handleNewbornSelect={(newbornId) => { this.handleNewbornSelect(newbornId)}} isSelected={isSelected} newbornId={newbornId} newbornSummaries={newbornSummaries} newbornName={newbornName} newbornPlace={newbornPlace} key={newbornKey} />);
    });

    return newbornCardList;
  }

  render() {
    const { newbornListLoading, newbornList } = this.props;
    const hasNewborns = newbornList.length > 0;
    return (
      <React.Fragment>
        {newbornListLoading ? (
          <FlexContainer>
            <CircularProgress variant="indeterminate" />
          </FlexContainer>
        ) : (
          <>
              <GridContainer>{hasNewborns ? this.renderNewbornGeneration() : <img src="./images/no-borns.svg" alt="no borns" />}</GridContainer>
          </>
        )}
      </React.Fragment>
    );
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  newbornList: MockList,//state.newBornReducer.newbornList,
  newbornListLoading: false,//state.newBornReducer.newbornListLoading,
  currentUser: state.userReducer.currentUser,
});

export default compose(
  withStyles(newBornListJss, {
    name: 'List',
  }),
  withWidth(),
  connect(
    mapStateToProps,
    actions,
  ),
)(List);
