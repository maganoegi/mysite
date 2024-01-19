import { useContext } from "react";

import { LanguageContext } from "../contexts/LanguageContext";

export default function LanguageButton({language}) {

    const { current, update } = useContext(LanguageContext)

    /**
     * Control function for the update function obrained through the context.
     * Sets the new value only if it is different from the previous one, thereby
     * avoiding unnecessary re-renders.
     */
    function changeLanguageIfDifferent() {
        if (language !== current){
            update(language)
        }
    }

    /**
     * Helper function that determines whether this language is currently active. If it is, return 
     * a class string that will visually reflect that status.
     * 
     * @returns a Bulma css class string that represents active status.
     */
    function checkIfActive() {
        return current === language ? 'is-success' : ''
    }

    return (
        <div className="column">
            <button className={"button is-fullwidth " + checkIfActive()} onClick={changeLanguageIfDifferent}>{language}</button>
        </div>
    );
}

