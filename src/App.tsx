import { BrowserRouter } from 'react-router';
import Router from './routes.tsx';
import './index.css';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Router />
            </div>
        </BrowserRouter>
    );
}

export default App;
