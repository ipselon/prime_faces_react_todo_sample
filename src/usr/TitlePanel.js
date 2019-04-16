import React from 'react';
import PropTypes from 'prop-types';
/*
  Panel with title
 */
class TitlePanel extends React.Component {
  static propTypes = {
    // simple title text
    title: PropTypes.string,
  };

  render () {
    const { title } = this.props;
    return (
      <h1 style={{ textAlign: 'center' }}>
        {title || 'Welcome to Webcodesk!'}
      </h1>
    );
  }
}

export default TitlePanel;
