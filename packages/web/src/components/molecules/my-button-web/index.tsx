import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: papayawhip;
`;

const StyledText = styled.p`
  color: #bf4f74;
`;

export const MyButtonWeb = () => {
  return (
    <StyledDiv data-testid="my-button-web">
      <StyledText>my-button-web</StyledText>
    </StyledDiv>
  );
};
