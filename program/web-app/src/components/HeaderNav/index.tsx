import React from 'react';
import { Link } from 'react-scroll';
import { Container } from './style';
const HeaderNav: React.FC<{}> = () => {
  return (
    <Container>
      <nav>
        <h3>LuscasLeo.dev</h3>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="sec2"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={(to) => {
                console.log(to);
              }}
            >
              sec1
            </Link>
          </li>

          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
export default HeaderNav;
