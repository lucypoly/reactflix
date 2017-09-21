import React, {Component} from 'react';

import Feed from './../Feed/Feed';
import Header from './../Header/Header';

class Home extends Component {
  render() {
    return (
        <div>
          <Header {...this.props} />
          <Feed {...this.props}/>
        </div>
    );
  }
}
export default Home;