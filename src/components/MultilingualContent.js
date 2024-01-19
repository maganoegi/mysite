import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { translations } from "../translations";

/**
 * Utility function allowing to load correct textual content, in the right language.
 * Functions on the basis of the LanguageContext that is managed on the application 
 * level, and the direct contentId, specifying which "content" needs to be loaded.
 * 
 * @param {string} contentId The accessor key for the translation to be loaded.
 * @returns {string} Selected and translated content.
 */
export default function MultilingualContent({contentId}) {
    const { current } = useContext(LanguageContext)
    return translations[contentId][current]
}