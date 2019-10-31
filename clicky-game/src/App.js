import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";
// import Navbar from "./components/Navbar";

let currentScore = 0;
let highScore = 0;

class App extends React.Component {

  state = {
    friends
  };


  clicker = (id) => {
    const friends = this.state.friends.map(friend => {
      if (friend.id === id && friend.clicked === false) {
        friend.clicked = true;
        currentScore++
        console.log(friend)
      }
      else if (friend.id === id && friend.clicked === true) {
        alert("you wrong")
        currentScore = 0;
      }
      return friend
    })
    console.log("clicked")
    console.log(friends)
    this.setState({ friends })
  }

  shuffle = id => {
    this.setState({
        friends: this.state.friends.sort(function(a,b){
                return 0.5 - Math.random();
            }
        )
    })
}

  render() {
    return (
      <Wrapper>
        <div className="row">
          <nav className="navbar">
            <div className="col-md-4">
              <a href="/">Clicky Game</a>
            </div>
            <div className="col-md-4">
              <p>Click on an image to play</p>
            </div>
            <div className="col-md-4">
              <p>score: {currentScore} | high score: {highScore}</p>
            </div>
          </nav>
        </div>
        {
          this.state.friends.map((friend) => {
            return (
              <FriendCard
                key={friend.id}
                name={friend.name}
                image={friend.image}
                click={this.clicker}
                clicked={friend.clicked}
                shuffle={this.shuffle}
                id={friend.id}
              />
            )
          })
        }

      </Wrapper>
    );
  }

}
export default App;
