import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
//import './index.css'; // Tell webpack that Button.js uses these styles
import {BrowserRouter, Route} from 'react-router-dom';
import './corkboard.css'; // Tell webpack that Button.js uses these styles


//const node = document.getElementById("root");



class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      // Buttons have built in event listeners - so we have that going
      // Simply give the button a user defined function to run when a click 
      // is detected 
      <button className="square" onClick={() => this.props.onClick()  } >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      player1Turn: true,
      gameOver: false,
      loggedOver: false
    };
  }
  
  // traverse the board to check for wins!
  checkWin(mySquares) {
		
	  var gameOver = false;
	   
	  // Check horizontal
	  var i;
	  for (i = 0; i < 3; ++i) {
		
		  var condition1 = mySquares[3*i + 0] === mySquares[3*i + 1];
		  var condition2 = mySquares[3*i + 0] === mySquares[3*i + 2];
		  var condition3 = mySquares[3*i + 0] !== null;
		  if ( condition1 && condition2 && condition3 ) {
		  	gameOver = true;
		  }
	  }

	  // Check vertical
	  for (i = 0; i < 3; ++i) {

                  condition1 = mySquares[i] === mySquares[i + 3];
                  condition2 = mySquares[i] === mySquares[i + 6];
                  condition3 = mySquares[i] !== null;
                  if ( condition1 && condition2 && condition3 ) {
                  	 gameOver = true;
		  }
          }
	
	  // Check diagonals
          condition1 = mySquares[0] === mySquares[4];
          condition2 = mySquares[0] === mySquares[8];
          condition3 = mySquares[0] !== null;
          if ( condition1 && condition2 && condition3 ) {
          	 gameOver = true;
	  }

	  condition1 = mySquares[2] === mySquares[4];
          condition2 = mySquares[2] === mySquares[6];
          condition3 = mySquares[2] !== null;
          if ( condition1 && condition2 && condition3 ) {
	  	 gameOver = true;
	  }
		
	  if (gameOver === true) {
		alert("GameOver");
		this.setState({squares: Array(9).fill(null), player1Turn: true});
	  }
  }
 
  /* This traverses the board checking if the game is a tie
   * mySquares is the boards state. It is a 9 item array of items
   */
  checkTie(mySquares) {
	
	var i;
	var allFilled = true;
	for (i = 0; i < 9; ++i) {
		if ( mySquares[i] === null ) {
			allFilled = false;
		}
	}

	if (allFilled === true ) {
		// Reset the board
		alert("Tie");
		 this.setState({squares: Array(9).fill(null), player1Turn: true});
	}

  }

  /* This runs when a square is clicked
   * i denotes which square in the boars has been clicked
   */
  handleClick(i) {
    
    // Copy the data structure with .slice 
    const squares = this.state.squares.slice();
    
    if ( (this.state.player1Turn === true) && (squares[i] === null) ) {
      squares[i] = 'X';
      //this.state.player1Turn = !this.state.player1Turn;
      this.setState({player1Turn: !this.state.player1Turn});
    }
    else if ( (squares[i] == null) ){
      squares[i] = 'O';
      //this.state.player1Turn = !this.state.player1Turn;
      this.setState({player1Turn: !this.state.player1Turn});
    }
    else {
	// The user is trying to play where a piece already is
	alert("Illegal Move!");
    }
	
    // Update the state of the component
    this.setState({squares: squares}); 

    this.checkWin(squares);
    this.checkTie(squares);
  }
  
  renderSquare(i) {
    return <Square value={this.state.squares[i] } onClick={() => this.handleClick(i)} />;
  }
  
  endGame() {
	  if ( this.state.gameOver === true) {
          	//alert("Game Over");
          	console.log("Game Over");
		//this.state.loggedOver = true;
	  }
  }
  

  render() {
    const status = 'Tic Tac Toe';

    return (
      <div>
        <div className="status">{status}</div>
	<div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default class Game extends React.Component {

// Set the browser tab name
componentDidMount(){
    document.title = "Tic_Tac_Toe"
}

constructor(props) {
    super(props);
    this.state = {
      someBoolean: false,
      game_status: "game still on",
    };
  }

  render() {
    return (
	
	<div className = "GamePage">
	<div className="game" >
        <div className="game-board">
          <Board />
        </div>
       
	<div className="game-info">
          <div a = {this.state.game_status} >  </div>
        </div>
	</div>
	</div>

    );
}	
}

// ========================================

