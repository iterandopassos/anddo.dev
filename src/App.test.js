import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the anddo.dev title', () => {
  render(<App />);
  const titleElement = screen.getByText(/anddo.dev - solução de atendimento automático/i);
  expect(titleElement).toBeInTheDocument();
});
