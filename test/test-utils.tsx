import React from 'react';
import {
  render,
  Queries,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/lightTheme';

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = <
  Q extends Queries,
  Container extends Element | DocumentFragment = HTMLElement
>(
  ui: React.ReactElement,
  options?: RenderOptions<Q, Container>
): RenderResult<Q, Container> =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
