import React, {Component} from 'react';
import styled from 'styled-components';

import Clock from './components/Clock';
import RenderTime from './components/RenderTime';
import {AwesomeButton} from 'react-awesome-button';
import {CountdownCircleTimer} from 'react-countdown-circle-timer';

import 'react-awesome-button/dist/themes/theme-c137.css';
import NameForm from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: true,
      buttonText: true,
      remainingTime: '',
    };
  }

  toggleTimer = () => {
    this.setState((prevState) => ({showTimer: !prevState.showTimer}));
  };

  toggleInput = () => {
    this.setState((prevState) => ({showInput: !prevState.showInput}));
  };

  changeTheText = () => {
    this.setState((prevState) => ({buttonText: !prevState.buttonText}));
  };

  render() {
    const {buttonText, remainingTime, showInput} = this.state;

    return (
      <Wrapper>
        <Clock />
        {showInput ? (
          <NameForm
            value={remainingTime}
            onChange={({target: {value}}) =>
              this.setState({remainingTime: Number(value)})
            }
          />
        ) : (
          <Count>
            {
              <div className="timer-wrapper">
                <CountdownCircleTimer
                  isPlaying
                  duration={
                    this.state.remainingTime === ''
                      ? 0
                      : this.state.remainingTime
                  }
                  colors={[['#81f776', 0.33], ['#5caef8', 0.33], ['#A30000']]}
                >
                  {RenderTime}
                </CountdownCircleTimer>
              </div>
            }
          </Count>
        )}
        <Button3d>
          <AwesomeButton
            action={() => {
              this.toggleTimer();
              this.changeTheText();
              this.toggleInput();
            }}
            type="primary"
            size="large"
          >
            {buttonText ? 'Start the timer!' : 'Stop the timer!'}
          </AwesomeButton>
        </Button3d>
      </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: #282c34;
  height: 100vh;
`;

const Count = styled.section`
  position: absolute;
  margin-top: 20rem;
`;

const Button3d = styled.section`
  margin-top: 22rem;
`;
