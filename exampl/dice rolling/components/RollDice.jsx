// RollDice.jsx
import React, { Component } from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component {
  // Default face names passed as props
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };

  constructor(props) {
    super(props);
    this.state = {
      die1: 'one',
      die2: 'one',
      rolling: false
    };
    this.roll = this.roll.bind(this);
  }

  roll() {
    const { sides } = this.props;
    // Start rolling immediately
    this.setState({
      rolling: true
    });

    // Update dice faces after 1 second
    setTimeout(() => {
      this.setState({
        die1: sides[Math.floor(Math.random() * sides.length)],
        die2: sides[Math.floor(Math.random() * sides.length)],
        rolling: false
      });
    }, 1000);
  }

  render() {
    const { die1, die2, rolling } = this.state;
    const handleBtn = rolling ? 'RollDice-rolling' : '';

    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Die face={die1} rolling={rolling} />
          <Die face={die2} rolling={rolling} />
        </div>
        <button
          className={handleBtn}
          disabled={rolling}
          onClick={this.roll}
        >
          {rolling ? 'Rolling' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
