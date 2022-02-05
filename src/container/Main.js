import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar';
import MysteryRoom from '../pages/MysteryRoom';
import Home from '../pages/Home';

function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mystryRoom" element={<MysteryRoom />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
