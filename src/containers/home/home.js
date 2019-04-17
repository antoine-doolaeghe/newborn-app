import React, { Component } from "react";
import { withAuthenticator } from "aws-amplify-react";
import withMenuDrawer from "../../components/menuDrawer/withMenuDrawer";
import withHeader from "../header/withHeader";

import NewBornList from "../newbornList/newbornList";

class Home extends Component {
  render() {
    return <NewBornList openDrawer={localStorage.openDrawer} />;
  }
}

export default withAuthenticator(withMenuDrawer(withHeader(Home), 0));