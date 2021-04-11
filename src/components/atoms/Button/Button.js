import { StyledButton } from './styled'

const Button = (props) => {
  const { children, ...otherProps } = props;
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default Button;
