import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {

  state = {
    friends
  };


  clicker = (id) => {
    const friends = this.state.friends.map((friend) => {
      
    })
    console.log("clicked")
    this.setState({ friends })
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {
          this.state.friends.map((friend) => {
            return (
              <FriendCard
                key={friend.id}
                name={friend.name}
                image={friend.image}
                click={this.clicker}
                clicked={friend.clicked}
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
