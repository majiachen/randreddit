interface TextInsertionProps {
    isChecked?: boolean,
    NSFWHistory?: string,
    SFWHistory?: string,
    onChange?: () => void
}

function TextInsertion({isChecked, NSFWHistory, SFWHistory, onChange}: TextInsertionProps) {

    return (
        <div className={"text-insertion"}>
            {/* This is just for display purposes; you can modify it as needed */}
            <textarea
                value={SFWHistory}
                readOnly
                onChange={onChange}
                style={{
                    minWidth: '400px',
                    maxWidth: '800px',
                    height: '200px',
                    padding: '8px',
                    alignContent: 'center',
                    alignSelf: 'center',
                }}
            />

            {isChecked && (<textarea
                value={NSFWHistory}
                readOnly
                style={{
                    minWidth: '400px',
                    maxWidth: '800px',
                    height: '200px',
                    padding: '8px',
                    alignContent: 'center',
                    alignSelf: 'center',
                }}
            />)}

        </div>

    );
};

export default TextInsertion;