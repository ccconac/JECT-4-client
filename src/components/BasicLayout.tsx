import { Outlet } from 'react-router';

const BasicLayout = () => {
    return (
        <div className="mobile-container">
            <Outlet />
        </div>
    );
};

export default BasicLayout;
