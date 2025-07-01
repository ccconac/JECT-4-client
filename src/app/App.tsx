import { BrowserRouter } from 'react-router-dom';
import Router from './routes/index.tsx';
import './styles/index.css';
import './styles/globals.css';

function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

export default App;
