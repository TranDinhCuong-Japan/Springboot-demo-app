import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import AppNavbar from '../AppNavbar'

test('should render same text passed into title prop', () => {
  render(<AppNavbar />);
  const titleElement = screen.getByText(/Home/i);
  expect(titleElement).toBeInTheDocument();
});

it('link exists', () => {
    render(<AppNavbar />);
    const linkElement = screen.getByRole('link',{current:true});
    expect(linkElement).toBeInTheDocument();
  });

  it('navigation exists', () => {
    render(<AppNavbar />);
    const naviElement = screen.getByRole('navigation');
    expect(naviElement).toBeInTheDocument();
  });

  it('Click Home button', async () => {
    render(<AppNavbar url="/" />);
    await userEvent.click(screen.getByText("Home"));
    expect(screen.getByRole('navigation')).toHaveTextContent("Home");
  });