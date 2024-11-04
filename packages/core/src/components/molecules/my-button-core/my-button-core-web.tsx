import styledWeb from 'styled-components';

const StyleDiv = styledWeb.div`
    background-color: papayawhip;
  `;
const StyleSpan = styledWeb.span`
    color: #bf4f74;
  `;
export const MyButtonCoreWeb = () => {
  return (
    <StyleDiv data-testid="my-button-core">
      <StyleSpan>my-button-core</StyleSpan>
    </StyleDiv>
  );
};
