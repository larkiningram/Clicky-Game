import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";
// import Navbar from "./components/Navbar";
import Header from "./components/Header/Header";

let currentScore = 0;
let highScore = 0;

const styles = {
  navbarStyle: {
      background: "black",
      color: "white",
      width: "100%",
      height: "20%"
  },
  navElements: {
    justifyContent: "center",
    width: "100%",
    fontSize: "36px"
  }
};

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
        if (currentScore > highScore) {
          highScore = currentScore
        }
        this.gameOver()
      }
      if (currentScore === 12) {
        alert("you won")
        highScore = 12
        this.gameOver()
      }
      return friend
    })
    console.log("clicked")
    console.log(friends)
    this.setState({ friends })
  }

  shuffle = () => {
    this.setState({
      friends: this.state.friends.sort(function (a, b) {
        return 0.5 - Math.random();
      }
      )
    })
  }

  gameOver = () => {
    const friends = this.state.friends.map(friend => {
      friend.clicked = false;
      return friend
    })
    currentScore = 0;
    this.setState({ friends })
  }

  render() {
    return (
      <Wrapper>
        <div className="row" style={styles.navbarStyle}>
          <nav className="navbar"  style={styles.navElements}>
            <div className="col-md-4">
              <h1>Clicky Game</h1>
            </div>
            <div className="col-md-4">
              <p>score: {currentScore} | high score: {highScore}</p>
            </div>
          </nav>
        </div>
        <Header />
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

      </Wrapper >
    );
  }

}
export default App;
