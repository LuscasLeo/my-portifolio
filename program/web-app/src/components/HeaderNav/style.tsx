import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  height: 4rem;

  nav {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > h3 {
      flex: 1;
      margin: 0;
    }

    & > ul {
      margin: 0;
      list-style: none;
      display: flex;
      flex-direction: row;
      height: 100%;
      gap: 4rem;

      li {
        a {
        }
      }
    }
  }
`;
