import React, { Component } from 'react';
import './homestay.css';

class Homestay extends Component {
  render() {
    const title = `${this.props.homestay.name} - Rp. ${this.props.homestay.price} rb`
    const style = {
      backgroundImage: `url('${this.props.homestay.imageUrl}')`
    };

    return (
      <div className="homestay">
        <div className="homestay-photo" style={style}></div>
        <div className="homestay-title">{title}</div>
      </div>
    )
  }
}

export default Homestay;
