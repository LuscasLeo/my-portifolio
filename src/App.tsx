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
import { GitHub, LinkedIn, OpenInNew } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Container, CssBaseline, Grid, IconButton, Link, Stack, ThemeProvider, Typography, styled, useTheme } from "@mui/material";
import lucasThink from "./assets/lucas-think.webp";
import jararacaImg from "./assets/jararaca.jpg";
import "./styles.scss";
import dark from "./themes/dark";
import React from "react";

type Tecnology = {
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
  props?: React.SVGProps<SVGSVGElement>;
  name?: string;
};

// Define technology categories
const technologyCategories = {
  frontend: [
    { svg: ReactSvg, name: "React" },
    { svg: Typescript, name: "TypeScript" },
    // { svg: Javascript, name: "JavaScript" },
  ],
  backend: [
    { svg: Python, name: "Python" },
    { svg: Fastapi, name: "FastAPI" },
    { svg: Go, name: "Go" },
    { svg: Mysql, name: "MySQL" },
    { svg: Postgressql, name: "PostgreSQL" },
    { svg: Redis, name: "Redis" },
    { svg: Rabbitmq, name: "RabbitMQ" },
    { svg: Liquibase, name: "Liquibase" },
  ],
  devops: [
    { svg: Docker, name: "Docker" },
    { svg: Kubernetes, name: "Kubernetes" },
    { svg: ArgoCd, name: "Argo CD" },
    { svg: Helm, name: "Helm" },
    { svg: Git, name: "Git" },
    { svg: Portainer, name: "Portainer" },
  ],
  platformEngineering: [
    { svg: Grafana, name: "Grafana" },
    { svg: Prometheus, name: "Prometheus" },
    { svg: LogoLoki, name: "Loki" },
    { svg: GrafanaTempo, name: "Grafana Tempo" },
    { svg: Kibana, name: "Kibana" },
    { svg: Influxdb, name: "InfluxDB" },
  ],
  other: [
    { svg: Linux, name: "Linux" },
    { svg: OhMyZsh, name: "Oh My Zsh" },
    { svg: Markdown, name: "Markdown" },
    // { svg: StackOverflow, name: "Stack Overflow" },
  ]
};

// Define personal projects
interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  image?: string;
}

const personalProjects: Project[] = [
  {
    title: "Jararaca",
    description: "A powerful API toolkit designed for simplicity and performance. Jararaca makes building robust APIs straightforward and efficient.",
    link: "https://jararaca.luscasleo.dev/",
    technologies: [ "Python", "FastAPI", "Docker" ],
    image: jararacaImg,
  },
  // You can add more projects here
];

const randomPhrases = [
  "Sometimes made is better than perfect.",
  "The best way to predict the future is anticipating it.",
  "I'm not a great programmer; I'm just a good programmer with bad habits.",
  "The best code is no code at all. Touch some grass.",
  "Code is like humor. When you have to explain it, it's bad.",
];

const DocumentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderContainer = styled(Box)`
  background-color: ${({ theme }) => theme.palette.primary[ "200" ]};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(0)}`};
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const MainContainer = styled(Box)`
  flex: 1;
  padding-bottom: ${({ theme }) => theme.spacing(8)};
`;

const FooterContainer = styled(Box)`
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.palette.primary[ "200" ]};
  text-align: center;
`;

const Jumbotron = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  margin-bottom: 5vh;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: ${({ theme }) => theme.spacing(2)};

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
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

  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    max-height: 25rem;
  }
`;

const SectionTitle = styled(Typography)`
  margin: ${({ theme }) => `${theme.spacing(6)} 0 ${theme.spacing(3)}`};
  font-weight: 600;
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing(1)};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const TechGrid = styled(Grid)`
  margin: ${({ theme }) => `${theme.spacing(4)} 0`};
`;

const TechItem = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing(2)};
  gap: ${({ theme }) => theme.spacing(1)};
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectCardContent = styled(CardContent)`
  flex-grow: 1;
`;

const ProjectImageBox = styled(Box)`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TechTag = styled(Box)`
  display: inline-block;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  color: ${({ theme }) => theme.palette.common.white};
  border-radius: 4px;
  padding: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(1)}`};
  margin-right: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  font-size: 0.75rem;
`;

const HeroContent = styled(Stack)`
  text-align: start;
  padding-left: ${({ theme }) => theme.spacing(4)};
  flex: 1;
`;

const HeroGreeting = styled(Typography)`
  font-size: 1.25rem;
`;

const HeroName = styled(Typography)`
  font-size: 3rem;
  font-weight: bold;
`;

const HeroQuote = styled(Typography)`
  font-size: 1.1rem;
`;

function App() {
  const theme = useTheme();

  const randomPhrase = React.useMemo(() => {
    const index = Math.floor(Math.random() * randomPhrases.length);
    return randomPhrases[ index ];
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
                <IconButton href="https://github.com/LuscasLeo" target="_blank" aria-label="GitHub">
                  <GitHub />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/luscasleodev/" target="_blank" aria-label="LinkedIn">
                  <LinkedIn />
                </IconButton>
                <IconButton href="https://bsky.app/profile/luscasleo.dev" target="_blank" aria-label="Bluesky">
                  <Bsky height={20} width={20} fill="#fff" />
                </IconButton>
              </Box>
            </Stack>
          </Container>
        </HeaderContainer>
        <MainContainer>
          <Container>
            <Jumbotron sx={{ position: "relative", overflow: "hidden" }}>
              <HeroContent alignItems="start" sx={{ zIndex: 1 }}>
                <HeroGreeting variant="h6">Hello, I'm</HeroGreeting>
                <HeroName variant="h1">
                  Lucas Leonardo,
                </HeroName>
                <HeroQuote variant="body1">{randomPhrase}</HeroQuote>
                <Box mt={4} display="flex" gap={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    href="https://github.com/LuscasLeo"
                    target="_blank"
                    startIcon={<GitHub />}
                  >
                    GitHub
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    href="https://www.linkedin.com/in/luscasleodev/"
                    target="_blank"
                    startIcon={<LinkedIn />}
                  >
                    LinkedIn
                  </Button>
                </Box>
              </HeroContent>
              <PictureBox sx={{
                overflow: "hidden",
                zIndex: 0,
                position: {
                  xs: "absolute",
                  md: "relative",
                },
                bottom: { 
                  xs: "0",
                  md: -20,
                },
                filter: {
                  xs: "blur(5px) opacity(0.5)",
                  md: "none",
                },

              }}>
                <picture>
                  <source srcSet={lucasThink} type="image/webp" />
                  <img src={lucasThink} alt="Lucas Leo" />
                </picture>
              </PictureBox>
            </Jumbotron>

            {/* Personal Projects Section */}
            <SectionTitle variant="h4">
              Personal Projects
            </SectionTitle>
            <Grid container spacing={3}>
              {personalProjects.map((project, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <ProjectCard>
                    {project.image && (
                      <ProjectImageBox>
                        <img src={project.image} alt={project.title} />
                      </ProjectImageBox>
                    )}
                    <ProjectCardContent>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" paragraph>
                        {project.description}
                      </Typography>
                      <Box mt={2}>
                        {project.technologies.map((tech, idx) => (
                          <TechTag key={idx}>
                            {tech}
                          </TechTag>
                        ))}
                      </Box>
                    </ProjectCardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        endIcon={<OpenInNew />}
                        component={Link}
                        href={project.link}
                        target="_blank"
                      >
                        Visit Project
                      </Button>
                    </CardActions>
                  </ProjectCard>
                </Grid>
              ))}
            </Grid>

            {/* Technologies Section */}
            <SectionTitle variant="h4">
              Technologies
            </SectionTitle>
            {Object.entries(technologyCategories).map(([category, items]) => (
              <Box key={category} mb={6}>
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    borderLeft: (theme) => `4px solid ${theme.palette.primary.main}`,
                    paddingLeft: 2,
                    fontWeight: 500,
                    textTransform: 'capitalize'
                  }}
                >
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </Typography>
                <TechGrid container spacing={3}>
                  {items.map((item, idx) => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={idx}>
                      <TechItem>
                        <item.svg height="4rem" width="4rem" />
                        {item.name && (
                          <Typography variant="body2" color="textSecondary">
                            {item.name}
                          </Typography>
                        )}
                      </TechItem>
                    </Grid>
                  ))}
                </TechGrid>
              </Box>
            ))}
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
