import '../css/Home.css'

import { Link } from 'react-router-dom';
import MultilingualContent from "./MultilingualContent";
import PathConstants from '../routes/pathConstants';


export default function Home() {
    return (
        <div className="contentWrapper">

            <button id='btnAbout' className='navBtnSides'>
                <Link id='aboutBtnTxt' to={PathConstants.ABOUT}>
                    <MultilingualContent contentId='aboutBtnTxt'/>
                </Link>
            </button>

            <button id='btnProjects' className='navBtnTop'>
                <Link  id='projectsBtnTxt' to={PathConstants.PROJECTS}>
                    <MultilingualContent contentId='projectsBtnTxt'/>
                </Link>
            </button>

            <button id='btnContact' className='navBtnSides'>
                <Link  id='contactBtnTxt' to={PathConstants.CONTACT}>
                    <MultilingualContent contentId='contactBtnTxt'/>
                </Link>
            </button>

        </div>
    );
}
