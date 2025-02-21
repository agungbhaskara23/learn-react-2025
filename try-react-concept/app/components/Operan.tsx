"use client"

import React, { Component } from 'react'

export class Operan extends Component {

  render() {
    const {makanan, gantiMakanan} = this.props
    const {minuman, gantiMinuman} = this.props

    return (
      <div>
        <p></p>
        <h2>Operan Makanan Minuman yang menjadi Props:</h2>
        {/* <h2>{this.props.makanan}</h2>
        <h2>{this.props.minuman}</h2> */}

        {/* <button onClick={() => this.props.gantiMakanan('Mie Ayam')}>Ganti Makanan 2 (lewat Props)</button>
        <button onClick={() => this.props.gantiMinuman('Sop Buah')}>Ganti Minuman 2 (lewat Props)</button> */}

        {/* disederhanakan penulisannya*/}
        
        <h2>{makanan}</h2>
        <h2>{minuman}</h2>

        <button onClick={() => gantiMakanan('Mie Ayam')}>Ganti Makanan 2 (lewat Props)</button>
        <button onClick={() => gantiMinuman('Sop Buah')}>Ganti Minuman 2 (lewat Props)</button>
      </div>
    )
  }
}

export default Operan