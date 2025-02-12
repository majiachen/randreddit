import React from 'react';
import {toast} from "react-toastify";

interface ClearLocalStorageButtonProps {
    file: string; // The key of the localStorage item to clear
    onClear?: () => void; // Optional callback after clearing
}

const ClearLocalStorageButton: React.FC<ClearLocalStorageButtonProps> = ({file, onClear}) => {
    const handleClear = () => {
        // Clear the localStorage item
        localStorage.removeItem(file);

        // Optional: Call the onClear callback
        if (onClear) {
            onClear();
        }

        // Notify the user
        toast("Successfully cleared " + file + " history!", {
                type: "success",
                autoClose: 2000,
            }
        )
        ;
    };


    return (
        <button className="bottom-button" onClick={handleClear}>
            Clear {file} History
        </button>
    );
};

export default ClearLocalStorageButton;