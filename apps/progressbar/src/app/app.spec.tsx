import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getAllByText(new RegExp('Progress Bars')).length > 0).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getAllByText(new RegExp('Progress Bars')).length > 0).toBeTruthy();
  });

  it('should render 5 bars with specified width and colors', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const bars = await screen.getAllByRole('progressbar');
    expect(bars.length).toBe(5);

    await waitFor(async () => {
      bars.forEach((bar) => {
        const value = parseInt(bar.getAttribute('aria-valuenow') || '0', 10);
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(100);

        const classes = bar.className;
        if (value < 30) {
          expect(classes).toMatch(/bg-red-500/);
        } else if (value >= 30 && value < 70) {
          expect(classes).toMatch(/bg-orange-400/);
        } else if (value >= 70) {
          expect(classes).toMatch(/bg-green-400/);
        }
      });
    });
  });
});
