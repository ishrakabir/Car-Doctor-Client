
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Navbar from '../Components/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className='mx-3 '>
            <Navbar></Navbar>
            <Outlet></Outlet>  
            <Footer></Footer>
        </div>
    );
};

export default Main;