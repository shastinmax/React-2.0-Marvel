import {MainPage, ComicsPage,Page404,SingleComicPage} from '../pages'
import {Route, Routes} from 'react-router-dom'
import AppHeader from "../appHeader/AppHeader";



const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <main>
                <Routes>
                    <Route exact path='/' element={<MainPage/>}/>
                    <Route exact path='/comics' element={<ComicsPage/>}/>
                    <Route exact path='/comics/:comicId' element={<SingleComicPage/>}/>
                    <Route exact path='*' element={<Page404/>}/>
                </Routes>
            </main>
        </div>
    )
}

export default App;