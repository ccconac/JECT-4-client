import { BrowserRouter } from 'react-router-dom';
import Router from './routes/index.tsx';
import './styles/index.css'; // Import global styles

function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

export default App;
