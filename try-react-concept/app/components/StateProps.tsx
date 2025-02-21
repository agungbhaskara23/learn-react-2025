"use client"

import React from 'react'
import { Component } from 'react'
import Operan from './Operan'

export class StateProps extends Component {
  constructor(props){
    super(props)
    this.state = {
        makanan: 'Nasi',
        minuman: 'Jus'
    }
  }
  
  gantiMakanan = (makanan_baru) => {
    this.setState({
        makanan: makanan_baru
    })
  }

  gantiMinuman = (minuman_baru) => {
    this.setState({
        minuman: minuman_baru
    })
  }

  render(){
    return (
        <div>
            <h2>{this.state.makanan}</h2>
            <h2>{this.state.minuman}</h2>
            <button onClick={() => this.setState({ makanan: 'Soto' })}>Ganti Makanan</button>
            <button onClick={() => this.setState({ minuman: 'Air Putih' })}>Ganti Minuman</button>
            <button onClick={() => this.gantiMakanan('Mie Ayam')}>Ganti Makanan 2</button>
            <button onClick={() => this.gantiMinuman('Sop Buah')}>Ganti Minuman 2</button>

            <Operan makanan={this.state.makanan} minuman={this.state.minuman} gantiMakanan={this.gantiMakanan} gantiMinuman={this.gantiMinuman}/>
        </div>
    )
  }
}
