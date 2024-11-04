

import styled from 'styled-components/native';

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: #BF4F74;
`

export const MyButtonMobile = () => {
    return (
        <StyledView testID="my-button-mobile">
            <StyledText>my-button-mobile</StyledText>
        </StyledView>
    )
}

