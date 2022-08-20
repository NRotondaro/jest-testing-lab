import { Container } from 'react-bootstrap';
import { OrderDetailspRovider } from './contexts/OrderDetails';
import OrderEntry from './pages/entry/OrderEntry';

function App() {
  return (
    <Container>
      <OrderDetailspRovider>
        {/* Summary page and entry page need provider */}
        <OrderEntry />
      </OrderDetailspRovider>
      {/* COnfirmation page does not need provider */}
    </Container>
  );
}

export default App;
