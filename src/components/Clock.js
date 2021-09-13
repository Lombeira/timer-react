import React from 'react';
import AnalogueClock from 'react-analogue-clock';
import styled from 'styled-components';

export default function Clock() {
  return (
    <Wrapper>
      <AnalogueClock className="clock" {...clockOptions} />
    </Wrapper>
  );
}

const clockOptions = {
  baseColor: '#282c34',
  borderColor: '#ffffff',
  borderWidth: 2,
  centerColor: '#ffffff',
  handColors: {
    hour: '#ffffff',
    minute: '#ffffff',
    second: '#ffffff',
  },
  notchColor: '#ffffff',
  numbersColor: '#ffffff',
  showNumbers: false,
  size: 200,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #282c34;
  margin-top: 3rem;
  font-size: 0.2em;
`;
