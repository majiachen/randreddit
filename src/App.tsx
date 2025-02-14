import './App.css'
import ButtonDisplay from "./components/NsfwButtonDisplay.tsx";
import {ToastContainer} from "react-toastify";

function App() {


    return (

        <>
            <div className={"root"}>
                <ToastContainer/>
                <h1 className="h1-container"> Reddit Randomiser</h1>

                <ButtonDisplay/>
                <p className="footer">
                    Made possible with attention bender's free 10k list of subreddits.<br></br>
                    The randomized subreddits may be abandoned overtime, please contact me at jackma4066@gmail.com for me to remove them from the list.

                </p>
            </div>
        </>

    )
}

export default App
