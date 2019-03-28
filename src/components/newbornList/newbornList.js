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

import TablePagination from '@material-ui/core/TablePagination';

class List extends Component {
  constructor(props) {
    super(props);
    const startLength = 5;
    this.state = {
      listEnd: startLength,
      listNb: startLength,
      listStart: 0,
      rowsPerPage: 6,
      page: 1,
    };
  }

  componentDidMount() {
    this.props.fetchNewborns().catch(error => {
      console.log(error.name); // TO-DO error handling
    });
  }

  renderGridList = () => {
    const { listStart, listEnd } = this.state;
    return <Grid>{this.renderCells().length > 0 ? this.renderCells().slice(listStart, listEnd) : <img src="./images/no-patients.svg" alt="no newborn" />}</Grid>;
  };

  handleChangePage = (event, page) => {
    const { listNb } = this.state;
    this.setState({
      page,
      listStart: listNb * page,
      listEnd: listNb * (page + 1),
    });
  };

  renderCells() {
    const newbornCardList = [];
    const { newbornList } = this.props;
    newbornList.forEach((newborn, newbornKey) => {
      const newBornName = newborn.name || '';
      const newbornId = newborn.id || '';
      newbornCardList.push(<NewBornCard newbornId={newbornId} newBornName={newBornName} key={newbornKey} />);
    });

    return newbornCardList;
  }

  render() {
    const { classes, newbornListLoading } = this.props;
    const { page, rowsPerPage } = this.state;

    return (
      <React.Fragment>
        {newbornListLoading ? (
          <FlexContainer>
            <CircularProgress variant="indeterminate" />
          </FlexContainer>
        ) : (
          <GridContainer>{this.renderGridList()}</GridContainer>
        )}
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          className={classes.listPagination}
          count={this.renderCells().length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
        />
      </React.Fragment>
    );
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  newbornList: state.newBornReducer.newbornList,
  newbornListLoading: state.newBornReducer.newbornListLoading,
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
