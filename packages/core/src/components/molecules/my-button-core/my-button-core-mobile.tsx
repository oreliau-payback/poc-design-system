import styled from 'styled-components/native';

const StyledView = styled.View`
  background-color: papayawhip;
`;
const StyledText = styled.Text`
  color: #bf4f74;
`;
const MyButtonCoreRN = () => {
  return (
    <StyledView testID="my-button-core">
      <StyledText>my-button-core</StyledText>
    </StyledView>
  );
};

export default MyButtonCoreRN