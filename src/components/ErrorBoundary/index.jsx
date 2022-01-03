import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          <Typography>Oops! Something went wrong. 😥</Typography>
          <Button variant="outlined" onClick={() => window.location.reload()}>
            Please, reload the page
          </Button>
        </Box>
      );
    }

    return children;
  }
}
