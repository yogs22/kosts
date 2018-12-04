import React, { Component } from 'react';
import './homestay.css';

class Homestay extends Component {
  render() {
    const judul = `${this.props.homestay.nama} - Rp. ${this.props.homestay.harga} rb`
    const style = {
      backgroundImage: `url('${this.props.homestay.fotoUrl}')`
    };

    return {
      <div className="homestay">
        <div className="homestay-photo" style={style}></div>
        <div className="homestay-title">{judul}</div>
      </div>
    }
  }
}

export default Homestay;
