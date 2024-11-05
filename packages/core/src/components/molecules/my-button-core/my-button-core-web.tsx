import styled from 'styled-components';

const StyleDiv = styled.div`
    background-color: papayawhip;
  `;
const StyleSpan = styled.span`
    color: #bf4f74;
  `;
const MyButtonCoreWeb = () => {
  return (
    <StyleDiv data-testid="my-button-core">
      <StyleSpan>my-button-core</StyleSpan>
    </StyleDiv>
  );
};

export default MyButtonCoreWeb
