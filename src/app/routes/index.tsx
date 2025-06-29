import { Routes, Route } from 'react-router-dom';
import TestComponent from '../TestComponent';

const Router = () => {
    return (
        <Routes>
            <Route path="/test" element={<TestComponent />} />
        </Routes>
    );
};

export default Router;
