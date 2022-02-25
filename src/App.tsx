import "./styles.scss";

import Marquee from "react-fast-marquee";

function App() {
  return (
    <code lang="typescript">
      Olá, meu nome é Lucas Silva <s>pode me chamar de lusca</s>
      <br />
      tenho 22 anos
      <br />
      <br />
      Sou programador backend <s>notoriamente</s>
      <br />
      <a target="_blank" href="https://www.linkedin.com/in/luscasleodev/">
        Esse é meu linkedin
      </a>
      <br />
      <a target="_blank" href="https://github.com/LuscasLeo/">
        Esse é meu github
      </a>
      <br />
      <Marquee gradient={false}>please give me a job 🙏🏻</Marquee>
    </code>
  );
}

export default App;
