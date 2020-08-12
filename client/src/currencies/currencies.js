import React, { Component } from 'react';
import './currencies.css';

class Currencies extends Component {
  minets = 0;
  color
  constructor() {
    super()
    this.state = {
      rates: []
    }
    this.load()
  }

  load(){
    fetch('/api/data')
    .then(res => res.json())
    .then(data => {


      console.log(this.minets)
      this.minets++
      if (Math.ceil(this.minets / 5) % 2) {
        for (let i of Object.keys(data.rates)) {
          data.rates[i] += 0.0001 * (this.minets % 5)
          this.color = 'blue'
        }
      } else {
        for (let i of Object.keys(data.rates)) {
          data.rates[i] -= 0.0001 * (this.minets % 5)
          this.color = 'red'
        }
      }
      
      for (let i of Object.keys(data.rates)) {
        data.rates[i]=+data.rates[i].toFixed(4)
      


      }
      this.setState(data, () => { console.log(data) })
    })
    this.componentDidMount()
  }



  componentDidMount() {
    setInterval(() => {

      fetch('/api/data')
      .then(res => res.json())
      .then(data => {


        if(this.minets>=60){
        return}
        console.log(this.minets)
        this.minets++
        if (Math.ceil(this.minets / 5) % 2) {
          for (let i of Object.keys(data.rates)) {
            data.rates[i] += 0.0001 * (this.minets % 5)
            this.color = 'blue'
          }
        } else {
          for (let i of Object.keys(data.rates)) {
            data.rates[i] -= 0.0001 * (this.minets % 5)
            this.color = 'red'
          }
        }
        for (let i of Object.keys(data.rates)) {
          data.rates[i]=+data.rates[i].toFixed(4)
        


        }
        this.setState(data, () => { console.log(data) })
      })
    }, 1000*5 );
  }


  render() {

    let list = [];
    for (let ell of Object.keys(this.state.rates)) {
      list.push(<li>{ell} : {this.state.rates[ell]}</li>)
    }


    return (
      <div style={{
        backgroundColor: this.color
      }}
      >
        {list}
      </div>
    );
  }
}

export default Currencies;
