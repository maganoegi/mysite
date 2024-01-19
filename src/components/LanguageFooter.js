import '../css/LanguageFooter.css';


import { getLanguageList } from "../translations";
import LanguageButton from "./LanguageButton";


export default function LanguageFooter() {

    /**
     * Helper function that generates a number of language buttons, based on the translations
     * object, containing the international content of this web app.
     * 
     * @returns a list of React components representing the different language buttons.
     */
    function createLanguageButtons() {
        return getLanguageList().map((l) => <LanguageButton key={l} language={l}/>);
    }

    return (
        <footer className="footer">
            <div className='columns is-mobile is-centered is-variable is-1'>
                {createLanguageButtons()}
            </div>
        </footer>
    );
}