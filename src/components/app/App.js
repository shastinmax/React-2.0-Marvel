import {useState} from "react";
import {Route, Routes, Switch} from 'react-router-dom'
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";

const App = () => {
    const [selectedChar, setChar] = useState(null)

    const onCharSelected = (id) => {
        setChar(id)
    }

    return (

        <div className="app">
            <AppHeader/>
            <main>
                <ErrorBoundary>
                    <Routes>
                        <Route path='/' element={<RandomChar/>}/>
                    </Routes>
                </ErrorBoundary>
                <div className="char__content">
                    <ErrorBoundary>
                        <Routes>
                            <Route path='/' element={<CharList onCharSelected={onCharSelected}/>}/>
                        </Routes>
                    </ErrorBoundary>
                    <ErrorBoundary>
                                <Routes>
                                <Route path='/' element={<CharInfo charId={selectedChar}/>}/>
                                </Routes>
                    </ErrorBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
                <Routes>
                    <Route path='comics' element={<AppBanner/>}/>
                </Routes>
                <Routes>
                    <Route path='comics' element={<ComicsList/>}/>
                </Routes>

            </main>
        </div>

    )
}

export default App;