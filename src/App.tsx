import { DarkMode, GitHub, LightMode, LinkedIn } from "@mui/icons-material";
import { Box, Container, CssBaseline, IconButton, Stack, ThemeProvider, Typography, styled, useTheme } from "@mui/material";
import lucasThink from "./assets/lucas-think.webp";
import "./styles.scss";
import dark from "./themes/dark";
const DocumentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderContainer = styled(Box)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(0)}`};
`;

const MainContainer = styled(Box)`
  flex: 1;
`;

const FooterContainer = styled(Box)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing(2)};
`;

const Jumbotron = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
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
                {/* <IconButton>
                  <LightMode />
                </IconButton>
                <IconButton>
                  <DarkMode />
                </IconButton> */}
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
                <Typography variant="body1">
                  a self taught <b>software engineer</b> and <b>devops enthusiast</b> with 5 years in the industry.
                </Typography>
              </Stack>
              <PictureBox>
                <picture>
                  <source srcSet={lucasThink} type="image/webp" />
                  <img src={lucasThink} alt="Lucas Leo" />
                </picture>
              </PictureBox>
            </Jumbotron>
          </Container>
        </MainContainer>
        <FooterContainer>
          <Container>
            <Typography>© 2024 Luscas Leo. All rights reserved.</Typography>
          </Container>
        </FooterContainer>
      </DocumentContainer>
    </ThemeProvider>
  );
}

export default App;
