import ArgoCd from "@components/icons/ArgoCd";
import Bsky from "@components/icons/Bsky";
import Docker from "@components/icons/Docker";
import Fastapi from "@components/icons/Fastapi";
import Git from "@components/icons/Git";
import Go from "@components/icons/Go";
import Grafana from "@components/icons/Grafana";
import GrafanaTempo from "@components/icons/GrafanaTempo";
import Helm from "@components/icons/Helm";
import Influxdb from "@components/icons/Influxdb";
import Kibana from "@components/icons/Kibana";
import Kubernetes from "@components/icons/Kubernetes";
import Linux from "@components/icons/Linux";
import Liquibase from "@components/icons/Liquibase";
import LogoLoki from "@components/icons/LogoLoki";
import Markdown from "@components/icons/Markdown";
import Mysql from "@components/icons/Mysql";
import OhMyZsh from "@components/icons/OhMyZsh";
import Portainer from "@components/icons/Portainer";
import Postgressql from "@components/icons/Postgressql";
import Prometheus from "@components/icons/Prometheus";
import Python from "@components/icons/Python";
import Rabbitmq from "@components/icons/Rabbitmq";
import ReactSvg from "@components/icons/React";
import Redis from "@components/icons/Redis";
import Typescript from "@components/icons/Typescript";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Container, CssBaseline, IconButton, Stack, ThemeProvider, Typography, styled, useTheme } from "@mui/material";
import lucasThink from "./assets/lucas-think.webp";
import "./styles.scss";
import dark from "./themes/dark";
import React from "react";

type Tecnology = {
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
  props?: React.SVGProps<SVGSVGElement>;
};

const Tecnologies = [
  { svg: ArgoCd },
  { svg: Docker },
  { svg: Fastapi },
  { svg: Git },
  { svg: Go },
  { svg: Grafana },
  { svg: GrafanaTempo },
  { svg: Helm },
  { svg: Influxdb },
  // { svg: Javascript },
  { svg: Kibana },
  { svg: Kubernetes },
  { svg: Linux },
  { svg: Liquibase },
  { svg: LogoLoki },
  { svg: Markdown },
  { svg: Mysql },
  { svg: OhMyZsh },
  { svg: Portainer },
  { svg: Postgressql },
  { svg: Prometheus },
  { svg: Python },
  { svg: Rabbitmq },
  { svg: ReactSvg },
  { svg: Redis },
  // { svg: StackOverflow },
  { svg: Typescript },
];

const randomPhrases = [
  "Sometimes made is better than perfect.",
  "The best way to predict the future is antecipating it.",
  "I'm not a great programmer; I'm just a good programmer with bad habits.",
  "The best code is no code at all. Touch some grass.",
];

const DocumentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderContainer = styled(Box)`
  background-color: ${({ theme }) => theme.palette.primary["200"]};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(0)}`};
`;

const MainContainer = styled(Box)`
  flex: 1;
`;

const FooterContainer = styled(Box)`
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.primary["200"]};
`;

const Jumbotron = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 1rem;
`;

const PictureBox = styled(Box)`
  width: 30rem;
  height: 30rem;
  overflow: hidden;
  img,
  picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function App() {
  const theme = useTheme();

  const randomPhrase = React.useMemo(() => {
    const index = Math.floor(Math.random() * randomPhrases.length);
    return randomPhrases[index];
  }, []);

  return (
    <ThemeProvider theme={dark}>
      <DocumentContainer>
        <CssBaseline enableColorScheme />
        <HeaderContainer>
          <Container>
            <Stack direction={"row"} alignItems={"center"}>
              <Box flex={1}>
                <Typography variant="h5">Luscas Leo</Typography>
              </Box>
              <Box>
                <IconButton href="https://github.com/LuscasLeo" target="_blank">
                  <GitHub />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/luscasleodev/" target="_blank">
                  <LinkedIn />
                </IconButton>
                <IconButton href="https://bsky.app/profile/luscasleo.dev" target="_blank">
                  <Bsky height={20} width={20} fill="#fff" />
                </IconButton>
              </Box>
            </Stack>
          </Container>
        </HeaderContainer>
        <MainContainer>
          <Container>
            <Jumbotron>
              <Stack alignItems={"start"} display={"flex"} textAlign={"start"} paddingLeft={theme.spacing(4)}>
                <Typography variant="h6">Hello, I'm</Typography>
                <Typography variant="h1" flex={1}>
                  Lucas Leonardo,
                </Typography>
                <Typography variant="body1">{randomPhrase}</Typography>
              </Stack>
              <PictureBox>
                <picture>
                  <source srcSet={lucasThink} type="image/webp" />
                  <img src={lucasThink} alt="Lucas Leo" />
                </picture>
              </PictureBox>
            </Jumbotron>
          </Container>
          <Container maxWidth="xl">
            <Stack
              direction={"row"}
              spacing={2}
              padding={2}
              sx={() => ({
                [`& > div`]: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "10rem",
                  height: "10rem",
                  flexShrink: 0,
                  [`& > svg`]: {
                    // width: "200px",
                    // height: "200px",
                    // fill: theme.palette.text.primary,
                  },
                },
              })}
              overflow={"auto"}
              flexWrap={"nowrap"}
            >
              {Tecnologies.map((item, index) => (
                <Box key={index}>
                  <item.svg height={"100%"} width={"100%"} />
                </Box>
              ))}
            </Stack>
          </Container>
        </MainContainer>
        <FooterContainer>
          <Container>
            <Typography>© 2025 Luscas Leo. All rights reserved.</Typography>
          </Container>
        </FooterContainer>
      </DocumentContainer>
    </ThemeProvider>
  );
}

export default App;
