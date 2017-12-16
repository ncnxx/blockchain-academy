import React, { Component } from 'react';

export default class ShuttleLaunchVideo extends Component {
  componentDidMount() {
    if (this.refs && this.refs.video) {
      this.refs.video.playbackRate = 7.5;
    }
  }

  render() {
    return (
      <video
        ref="video"
        muted
        id="background-video"
        loop
        autoPlay
        {...this.props}
      >
        <source src="/static/shuttle.mp4" type="video/mp4" />
      </video>
    );
  }
}
