import { useState, useEffect } from "react";
import "./Keyboard.css";

function Key(props) {
    const key = props.letter;
    const [active, setActive] = useState(false);

    const handleKeyDown = (event) => {
        if (event.key === key.toLowerCase() || event.key === key.toUpperCase()) {
            setActive(true);
        }
    }
    const handleKeyUp = (event) => {
        if (event.key === key.toLowerCase() || event.key === key.toUpperCase()) {
            setActive(false);
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        }
    }, [handleKeyDown, handleKeyUp]);

    return (
        <button className={"button" + `${active? ' active' : ''}`}
        onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
            {key}
        </button>
    );
}

function Keyboard() {
    return (
        <div className="keyboard">
            <Key letter='q' />
        </div>
    );
}

export default Keyboard;
