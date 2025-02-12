import {useState} from 'react'
import './App.css'
import ButtonDisplay from "./components/NsfwButtonDisplay.tsx";
import {ToastContainer} from "react-toastify";

function App() {
    const [] = useState(0)


    return (

        <>
            <div className={"root"}>
                <ToastContainer/>
                <h1 className="h1-container"> Reddit Randomiser</h1>

                <ButtonDisplay/>
                <p className="footer">
                    Made possible with attention bender's free 10k list of subreddits
                </p>
            </div>
        </>

    )
}

export default App
