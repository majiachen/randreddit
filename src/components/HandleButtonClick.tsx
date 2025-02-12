import ReadFileAndNavigateToRandomSub, {RandomLineNavigatorProps} from "./ReadFileAndNavigateToRandomSub.tsx"; // Import the file as a raw string


const HandleButtonClick = ({buttonText}: RandomLineNavigatorProps) => {
    function handleClick(buttonText: string) {

        // Call the second function
        ReadFileAndNavigateToRandomSub(buttonText);

    }

    return (
        <div>
            <button className="button-style" onClick={() => handleClick(buttonText)}>
                {buttonText}
            </button>
        </div>

    )
        ;
};

export default HandleButtonClick;