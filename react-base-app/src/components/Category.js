import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppAppBar from './AppAppBar';
import CategoryContent from './CategoryContent';
import Footer from './Footer';
import AppTheme from '../shared-theme/AppTheme';

export default function Category(props) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <CategoryContent />
      </Container>
      <Footer />
      </AppTheme>
  );
}
