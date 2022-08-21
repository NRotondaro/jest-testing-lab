import { render } from '@testing-library/react';
import { OrderDetailspRovider } from '../contexts/OrderDetails';

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailspRovider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
