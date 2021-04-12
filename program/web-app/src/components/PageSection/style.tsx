import styled from 'styled-components';

export const Container = styled.section<{ color: string }>`
  background-color: ${(t) => t.color} !important;
  width: 100%;
  min-height: 100%;
`;
