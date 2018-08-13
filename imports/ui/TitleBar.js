import React from 'react';

export default class TitleBar extends React.Component {

    renderSubTitle() {
      if (this.props.subTitle) {
        return <p className="title-bar__subtitle">{this.props.subTitle}</p>;
      }
    }
    render() {
      return (
        <div className="title-bar">
          <div className="wrapper">
            <h1>{this.props.title}</h1>
            {this.renderSubTitle()}   
          </div> 
        </div>
      )
    }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
};
