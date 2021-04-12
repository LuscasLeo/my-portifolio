import 'bootstrap/scss/bootstrap.scss';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import HeaderNav from './components/HeaderNav';
import PageSection from './components/PageSection';
import './styles/dracula.css';
import './styles/style.scss';
import { Container } from './styles/styles';
import useWindowSize from './utils/useWindowsSize';

const App: React.FC<{}> = () => {
  const { width, height } = useWindowSize();

  return (
    <Container>
      <PageSection id="sec1" color="red">
        <HeaderNav />
      </PageSection>
      <PageSection id="sec2" color="yellow"></PageSection>
      <PageSection id="sec3" color="green"></PageSection>
    </Container>
  );
};
export default hot(App);
