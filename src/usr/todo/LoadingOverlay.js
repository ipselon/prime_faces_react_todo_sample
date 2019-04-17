import React from 'react';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import s from './LoadingOverlay.module.css';

/*
  LoadingOverlay is used for overlaying the main components during loading process

  **Note** add `relative` position to the root of the main component

 */

const APPEARANCE_DELAY = 800; // in milliseconds

class LoadingOverlay extends React.Component {

  constructor (props) {
    super(props);
    this.timeoutId = null;
    this.state = {
      showProgress: false,
    };
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
      this.setState({
        showProgress: true,
      })
    }, APPEARANCE_DELAY);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  render () {
    const {showProgress} = this.state;
    if (showProgress) {
      return (
        <div className={s.root}>
          <ProgressSpinner style={{width: '2em', height: '2em'}} />
        </div>
      );
    }
    return null;
  }
}

export default LoadingOverlay;
