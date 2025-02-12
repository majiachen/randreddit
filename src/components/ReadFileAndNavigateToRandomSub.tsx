import sfwContent from '../assets/sfw.txt?raw'; // Import the file as a raw string
import nsfwContent from '../assets/nsfw.txt?raw'; // Import the file as a raw string

export interface RandomLineNavigatorProps {
    buttonText: string,
    onClear?: () => void
}


const ReadFileAndNavigateToRandomSub = (buttonText: string) => {
    const baseUrl = "https://www.reddit.com/r/";
    const sfwFile = "sfw";
    const nsfwFile = "nsfw";


    // Determine which file content to use
    const lines = buttonText == "Random Subreddit" ? sfwContent.split('\n') : nsfwContent.split('\n');
    console.log(lines);
    const fileContent = lines.map((line) => line.replace("%0D", '').trim());
    console.log(fileContent);
    // Get a random line from the file content
    const getRandomLine = (fileContent: string[]): string | null => {
        if (fileContent.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * fileContent.length);
        return fileContent[randomIndex];
    };

    // Save the subreddit to history in localStorage
    const handleInsertSubredditToHistory = (text: string, file: string) => {
        const saved = localStorage.getItem(file);
        const savedTexts = saved ? JSON.parse(saved) : [];
        const newSavedTexts = [`[${new Date().toLocaleTimeString()}] ${text}` + "\n", ...savedTexts];
        localStorage.setItem(file, JSON.stringify(newSavedTexts));
        console.log("new saved text = " + newSavedTexts);
    };

    // Navigate to a random subreddit
    const randomLine = getRandomLine(fileContent);
    if (randomLine) {
        if (buttonText == "Random Subreddit") {
            handleInsertSubredditToHistory(randomLine + "   " + `${baseUrl}${encodeURIComponent(randomLine)}`, sfwFile);
        } else {
            handleInsertSubredditToHistory(randomLine + "   " + `${baseUrl}${encodeURIComponent(randomLine)}`, nsfwFile);
        }
        window.location.href = `${baseUrl}${encodeURIComponent(randomLine)}`;
    }
};

export default ReadFileAndNavigateToRandomSub;