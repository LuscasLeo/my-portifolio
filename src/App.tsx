import { DarkMode, GitHub, LightMode, LinkedIn } from "@mui/icons-material";
import { Box, Container, CssBaseline, IconButton, Stack, ThemeProvider, Typography, styled } from "@mui/material";
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
`;

function App() {
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
                <IconButton>
                  <GitHub />
                </IconButton>
                <IconButton>
                  <LinkedIn />
                </IconButton>
                <IconButton>
                  <LightMode />
                </IconButton>
                <IconButton>
                  <DarkMode />
                </IconButton>
              </Box>
            </Stack>
          </Container>
        </HeaderContainer>
        <MainContainer>
          <Container>
            <Jumbotron>
              <Box>
                <Typography variant="h1">Luscas Leo</Typography>
                <Typography variant="h5">Software Engineer</Typography>
              </Box>
              <Box>
                <picture>
                  <source srcSet={lucasThink} type="image/webp" />
                  <img src={lucasThink} alt="Lucas Leo" />
                </picture>
              </Box>
            </Jumbotron>
          </Container>
        </MainContainer>
        <FooterContainer>
          <Container>Footer</Container>
        </FooterContainer>
      </DocumentContainer>
    </ThemeProvider>
  );
}

export default App;
