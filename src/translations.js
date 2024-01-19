

export const translations = {
    aboutBtnTxt: {
        en: "About me",
        fr: "Qui suis-je?",
        ru: "Obo mne",
        es: "Quien soy yo?",
        nl: "Over mij"
    },
    contactBtnTxt: {
        en: "Contact",
        fr: "Contact",
        ru: "Kontakt",
        es: "Contact",
        nl: "Contact"
    },
    projectsBtnTxt: {
        en: "Projects",
        fr: "Projets",
        ru: "Projects",
        es: "Proyectos",
        nl: "Projecten"
    },
    main: {
        en: "Main Content",
        fr: "Contenu principal",
        ru: "Russian something something",
        es: "Contenido principal",
        nl: "Meest belangrijke content ter wereld"
    },
    other: {
        en: "Other Content",
        fr: "Autre principal",
        ru: "Russian something something other",
        es: "Contenido Otro",
        nl: "Minder belangrijke content"
    }
}

export function getLanguageList() {
    return Object.keys(translations['main'])
}