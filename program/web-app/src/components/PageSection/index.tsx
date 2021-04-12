import React from 'react';
import { Container } from './style';

export type Props = {
  color: string;
  id: string;
};
const PageSection: React.FC<Props> = ({ color, id, children }) => {
  return <Container {...{ color, id }}>{children}</Container>;
};
export default PageSection;
