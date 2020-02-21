import React, { Component } from 'react';

import './App.css';

import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Score from "./components/Score";

class App extends Component {
  state = {
    friends,
    score: 0,
    highscore: 0
  };
  componentDidMount() {
  let newFriends  = this.state.friends.map(friend => {
      friend.clicked = false;
      return friend
    })


    this.setState({friends: newFriends})

    console.log(this.state.friends);
    
  };

  handleFormSubmit =  (id) => {
    console.log(id)
    
    // newFriend=[{id:1,clicked:false},{id:2,clicked:true}]
    //this.setState(friends:newfriends)
      let newFriends = this.state.friends.map(friend => {
        if (friend.id === id) {
          if (friend.clicked === true) {
            // when image is clicked twice set the score to 0
            alert("game over")
            this.setState({ score: 0 })
          } else {
            friend.clicked = true;
            this.setState({score: this.state.score + 1})
  
            if(this.state.score >= this.state.highscore){
              this.setState({highscore: this.state.highscore +1})
            }
          }
        }
  
        return friend;
      })
  
      newFriends.sort(() => Math.random() - 0.5);
      this.setState({ friends: newFriends })
  };

  render() {
    return (
      <Wrapper>
        <Title >Clicky Game</Title>
      Score:  {this.state.score} Highscore: {this.state.highscore}
        {this.state.friends.map(friend => (
          <Card
          handleFormSubmit={this.handleFormSubmit}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            friends={this.state.friends}
            score={this.state.score}
          />
        ))}
        <Score></Score>
      </Wrapper>
    );
  }
}

export default App;
