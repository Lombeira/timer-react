import React, {Component} from 'react';
import styled from 'styled-components';

class NameForm extends Component {
  render() {
    const {value, onChange} = this.props;
    return (
      <Form
        placeholder={'Enter a number of seconds'}
        type="text"
        value={value}
        onChange={onChange}
      />
    );
  }
}

export default NameForm;

const Form = styled.input`
  font-size: 0.75rem;
  position: absolute;
  margin-top: 33.5rem;
  padding: 0.7rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  background-color: #282c34;
  color: white;
  text-align: center;
`;
