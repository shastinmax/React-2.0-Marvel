import {MainPage, ComicsPage} from '../pages'
import {Route, Routes} from 'react-router-dom'
import AppHeader from "../appHeader/AppHeader";


const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <main>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                </Routes>

                <Routes>
                    <Route path='/comics' element={<ComicsPage/>}/>
                </Routes>
            </main>
        </div>
    )
}

export default App;