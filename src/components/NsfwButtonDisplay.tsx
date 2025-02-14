import {useEffect, useState} from 'react';
import HandleButtonClick from "./HandleButtonClick.tsx";
import TextInsertion from "./TextInsertion.tsx";
import ClearLocalStorageButton from './ClearLocalStorageButton';

function ButtonDisplay() {
    const [isNSFWChecked, setisNSFWChecked] = useState(false);
    const [isHistoryChecked, setisHistoryChecked] = useState(false);
    const [SFWHistory, setSFWHistory] = useState("SFW History: \n");
    const [NSFWHistory, setNSFWHistory] = useState("NSFW History: \n");
    const SFWFile = "sfw";
    const NSFWFile = "nsfw";

    useEffect(() => {
        // Load saved texts from localStorage when the component mounts
        const savedSFW = localStorage.getItem(SFWFile);
        const savedNSFW = localStorage.getItem(NSFWFile);
        console.log("sfw:" + savedSFW);
        console.log("nsfw:" + savedNSFW);
        if (savedSFW) {
            setSFWHistory("History: \n" + JSON.parse(savedSFW));
        }
        if (savedNSFW) {
            setNSFWHistory("History: \n" + JSON.parse(savedNSFW));

        }
    }, []);


    useEffect(() => {
        // Load saved state when component mounts
        const NSFWSavedState = localStorage.getItem('NSFWCheckboxState');
        const HistorySavedState = localStorage.getItem('historyCheckboxState');

        if (NSFWSavedState !== null) {
            setisNSFWChecked(JSON.parse(NSFWSavedState));
        }
        if (HistorySavedState !== null) {
            setisHistoryChecked(JSON.parse(HistorySavedState));
        }
    }, []);

    const handleNSFWCheckboxChange = () => {
        // Toggle the checkbox state
        const newState = !isNSFWChecked;
        setisNSFWChecked(newState);

        // Save new state to local storage
        localStorage.setItem('NSFWCheckboxState', JSON.stringify(newState));
    };

    const handleHistoryCheckboxChange = () => {
        // Toggle the checkbox state
        const newState = !isHistoryChecked;
        setisHistoryChecked(newState);

        // Save new state to local storage
        localStorage.setItem('historyCheckboxState', JSON.stringify(newState));
    };


    return (
        <div className={"button-display"} style={{marginTop: "10px"}}>


            <div className="button-container">
                <HandleButtonClick
                    buttonText="Random Subreddit"

                />

                {isNSFWChecked && (
                    <HandleButtonClick
                        buttonText="Random nsfw Subreddit"

                    />
                )}
            </div>
            {isHistoryChecked && (
                <TextInsertion isChecked={isNSFWChecked} onChange={handleNSFWCheckboxChange} NSFWHistory={NSFWHistory}
                               SFWHistory={SFWHistory}/>)}

            <div className={"bottom-button-container"}>
                {isHistoryChecked && (
                    <ClearLocalStorageButton file="sfw" onClear={() => setSFWHistory("History: \n")}/>)}
                {isNSFWChecked && isHistoryChecked && (
                    <ClearLocalStorageButton file="nsfw" onClear={() => setNSFWHistory("History: \n")}/>)}
                <div className={"bottom-label-container"}>
                    <label className="bottom-label">
                        <input
                            id="history-checkbox"
                            type="checkbox"
                            checked={isHistoryChecked}
                            onChange={(e) => {
                                setisHistoryChecked(e.target.checked);
                                handleHistoryCheckboxChange();
                            }}
                        />
                        Enable History Randomizer
                    </label>
                    <label className="bottom-label">
                        <input
                            id="nsfw-checkbox"
                            type="checkbox"
                            checked={isNSFWChecked}
                            onChange={(e) => {
                                setisNSFWChecked(e.target.checked);
                                handleNSFWCheckboxChange();
                            }}
                        />
                        Enable NSFW Randomizer
                    </label>
                </div>
            </div>
        </div>

    );

}

export default ButtonDisplay;