import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Score from "./components/Score";

class App extends Component {

  // set states that will change
  state = {
    friends,
    score: 0,
    highscore: 0
  };
  componentDidMount() {
    // 
  let newFriends  = this.state.friends.map(friend => {
      friend.clicked = false;
      return friend
    })


    this.setState({friends: newFriends})

    console.log(this.state.friends);
    
  };

  handleFormSubmit =  (id) => {
    console.log(id)
    
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
        <Title >Clicky Game
          <p className="p">Test your memory</p>
        </Title>
      <Score>Score: {this.state.score} Highscore: {this.state.highscore}</Score>
      <br></br>
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
      </Wrapper>
    );
  }
}

export default App;
