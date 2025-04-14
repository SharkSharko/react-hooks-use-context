import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './context/theme';
import { UserProvider } from './context/user';

// Wrap App in context providers for testing
test('renders App with Emmanuel\'s profile', () => {
  render(
    <ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  );

  const heading = screen.getByText(/Emmanuel's Profile/i);
  expect(heading).toBeInTheDocument();
});

