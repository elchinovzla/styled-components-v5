import styled from 'styled-components';

const primaryGradient = ({ theme }) => theme.primaryColor;
const secondaryGradient = ({ theme }) => theme.secondaryColor;

const ToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  margin: auto;
  display: flex;
  background: linear-gradient(
    to bottom,
    ${primaryGradient},
    ${secondaryGradient}
  );
`;

const Notch = styled.div`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${(props) => (props.isActive ? '26px' : '1px')});
`;

const Toggle = ({ isActive, onToggle }) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  );
};

export default Toggle;
