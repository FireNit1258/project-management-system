import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppAppBar from './AppAppBar';
import ProjectContent from './ProjectContent';
import Latest from './Latest';
import Footer from './Footer';
import AppTheme from '../shared-theme/AppTheme';

export default function Projects(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <ProjectContent />
      </Container>
      <Footer />
      </AppTheme>
  );
}
