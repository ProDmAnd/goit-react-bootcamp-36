import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: ${props => (props.loading ? '#444' : '#fff')};
  padding: 1rem;
  border-radius: 0.5rem;
`;

export default Button;
