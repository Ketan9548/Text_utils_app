import React, { useState } from 'react'
let name = "Ketan";
export default function TextForm(props) {
    const handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Change to UpperCase", "Success");
    }
    const handleLCclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Change to LowerCase", "Success");
    }
    const handleCNclick = () => {
        let counter = 0;
        for (let i = 0; i < text.length; i++) {
            const element = text[i];
            if (element === " ") {
                continue;
            }
            else if (isFinite(element)) {
                counter++;
            }
        }
        setTotalNumbers(counter)
        props.showAlert("Total Numerical Value Counted", "Success");
    }

    const handleonchange = (event) => {
        setText(event.target.value)
    }
    const handleclear = () => {
        let newtext = ' ';
        setText(newtext)
        props.showAlert("Clean all Text", "Success");
    }
    const handCopytext = () => {
        navigator.clipboard.writeText(text);
        props.showAlert(" Copy Text", "Success");
    }
    const handextraspace = () => {
        let newtext = text.replace(/\s+/g, ' ').trim();
        setText(newtext);
        props.showAlert("Remove Extra Spaces", "Success");
    }
    const [text, setText] = useState('');
    const [totalNumbers, setTotalNumbers] = useState(0);
    // text = "new text"; // wrong way to change the text
    // setText = "new text" // write way to change the text
    return (
        <>
            <h1 className='text-center' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>This is the textUtilis Site {name}</h1>
            <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h6>{props.heading}</h6>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#1e62af' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleonchange} id="mybox" rows="5"></textarea>
                </div>
                <div className='my-2' >
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleupclick}>Convert to UpperCase</button>
                    <button disabled={text.length === 0} className="btn btn-success mx-2 my-1" onClick={handleLCclick}>Convert to LowerCase</button>
                    <button disabled={text.length === 0} className="btn btn-warning mx-2 my-1" onClick={handleCNclick}>Counted the numeric Value</button>
                    <button disabled={text.length === 0} className="btn btn-danger mx-2 my-1" onClick={handleclear}>Clear text</button>
                    <button disabled={text.length === 0} className="btn btn-danger mx-2 my-1" onClick={handextraspace}>Remove Extra Space</button>
                    <button disabled={text.length === 0} className="btn btn-info mx-2 my-1" onClick={handCopytext}>Copy Text</button>
                </div>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text Summary</h1>
                <p>Total Numeric Count is: {totalNumbers}</p>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} word and {text.split(" ").filter((element) => { return element.length !== 0 }).length} charactor</p>
                {text.split(" ").length - 1 === 0 ? (
                    <p>0 Minutes to Read</p>
                ) : (
                    <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to Read</p>
                )}
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to PreView!"}</p>
            </div>
        </>
    )
}
