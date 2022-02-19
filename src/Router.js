import App from './App.js';
import Profile from './Profile.js';
import GameDev from './GameDev.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router(){
    return (
        <BrowserRouter>
             <Routes>
                 <Route path="/" element={ <App /> } />
                 <Route path="/profile" element={ <Profile /> } />
                 <Route path="/gamedev" element={ <GameDev /> } />
             </Routes>  
        </BrowserRouter>   
    )
}

export default Router;