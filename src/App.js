import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import "./App.css";
import FormContainer from "./components/form/FormContainer";

import Projects from "./pages/Projects";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#474554",
      },
      secondary: {
        main: "#FFF",
      },
    },
  });

  const [isOpenForm, setIsOpenForm] = useState(false);

  const onFormChange = (isOpen) => {
    setIsOpenForm(isOpen);
  };

  const onEditProjectHandler = (project) => {
    setIsOpenForm(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box
          sx={{
            borderColor: "#474554",
            borderStyle: "solid",
            padding: "20px",
            margin: "20px",
            borderRadius: "7px",
          }}
        >
          <FormContainer onFormChange={onFormChange} open/>
          {!isOpenForm && <Projects onEditProject={onEditProjectHandler} />}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
