import { Routes, Route } from 'react-router-dom';
import StyleGuide from './pages/StyleGuide';

const Router = () => {
    return (
        <Routes>
            <Route path="/style-guide" element={<StyleGuide />} />
        </Routes>
    );
};

export default Router;
