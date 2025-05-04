
'use client'
import Header from "@/app/_sections/header"
import Footer from "@/app/_sections/footer"
import React from 'react';
import { useFormLogic } from "@/hooks/useFormLogic";
import CollapsibleSection from "@/app/_components/collapsible-section";
import { useState } from "react";

import '@/styles/ma-situation.css';

/* // STRUCTURE DE LA PAGE 
    - Header
    - NewSituation
        -- Hero
        -- Form
            --- Intro
            --- Etat civil
            --- Revenus
            --- Residence
                ---- Type
                ---- Detail financement
                ---- Tableau amortissement
    - Footer
*/

//**********  PAGE-COMPLETE ********** //
const NewProjetPage = () => {
    return (
        <>
            <Header/>
            <NewProjet/>
            <Footer/>
        </>
    )
}

//**********  PAGE-PROJET ********** //
const NewProjet = () => {
    return (
      <div className="main">
        <div className="main__container">
            <ProjetHero/>
            <ProjetForm/>
        </div>
      </div>
    );
};

//**********  POJET-HERO ********** //
const ProjetHero = () => {
    return(
        <div className="main__hero">
            <p className="main__hero-title">
                Etudiez votre projet
            </p>
            <p className="main__hero-description">
                Adoptez une approche sur-mesure
            </p>
      </div>
    )
}

//**********  FORM-SECTIONS ********** //
const ProjetForm = () => {
    return (
        <form action="#">
            <div className="situation__form">
                <div className="situation__form__container">
                    <ProjetFormName/>
                    <ProjetFormType/>
                    <ProjetFormEncours/>
                    <ProjetFormAcquisition/>
                </div>
            </div>
        </form>
    )
}

//**********  FORM-NAME ***********//
const ProjetFormName = () => {
    return (
        <div className="w-full flex flex-col gap-10 py-5 text-start"> 
            <div className="[font-family:var(--body-font-size)] text-start">
                <p>
                Les champs suivis d&apos;une étoile{' '}
                <span className="etoile">*</span> sont obligatoires
                </p>
            </div>
            <div className="situation__form__intro__name">
                <label className="situation__form__intro__name-label">
                Nom du projet <span className="etoile">*</span>
                </label>
                <input
                type="text"
                placeholder="Entrez le nom de votre projet"
                required
                />
            </div>
        </div>
    );
};

//**********  FORM-TYPOLOGIE ********** //
const ProjetFormType = () => {
    return (
        <div className="situation__form__section">
            <CollapsibleSection 
                title="TYPOLOGIE DU BIEN"
                titleClassName="situation__form__title-text" // Applique une classe CSS personnalisée pour ce titre
            > 
                <div className="situation__form__content">
                    <div className="situation__form_content_pairs">
                        <div className="situation__form__box">
                        <label htmlFor="matrimonial-select" className="situation__form__box-label">
                            Type d'investissement <span className="etoile">*</span>
                        </label>
                        <div className="select-box">
                            <select id="matrimonial-select" name="situation-matrimoniale" required defaultValue="">
                                <option value="" disabled>Sélectionnez votre type</option>
                                <option value="locatif">Locatif</option>
                                <option value="resid-p">Residence Principale</option>
                                <option value="resid-s">Residence Secondaire</option>
                            </select>
                        </div>
                        </div>

                        <div className="situation__form__box">
                        <label className="situation__form__box-label">
                            Usage du bien
                        </label>
                        <div className="select-box">
                            <select required defaultValue="pas-particulière">
                            <option value="habitation">Habitation</option>
                            <option value="comerciale">Comerciale</option>
                            </select>
                        </div>
                        </div>
                    </div>

                    <div className="situation__form_content_pairs">
                        <div className="situation__form__box">
                            <label htmlFor="Superficie" className="situation__form__box-label">Superficie (m²)</label>
                            <input
                            type="text"
                            inputMode="numeric"
                            id="superficie"
                            name="superficie"
                            placeholder="0"
                            min="0"
                            />
                        </div>

                        <div className="situation__form__box">
                        <label className="situation__form__box-label">
                            Nombre de pièces
                        </label>
                        <div className="select-box">
                            <select required defaultValue="0">
                            {[...Array(11).keys()].map((n) => (
                                <option key={n} value={n}>{n}</option>
                            ))}
                            </select>
                        </div>
                        </div>
                    </div>
                </div>
            </CollapsibleSection>
        </div>
    );
};

//**********  FORM-PROJET EN COURS ********** //
const ProjetFormEncours = () => {
    const [possession, setPossession] = useState(false);

    return (
        <div className="flex flex-col p-4 gap-6 text-black">
            <div>
                <label className="italic underline font-medium">
                    Ce bien est-il déjà en votre possession ?
                    <span className="text-red-500"> *</span>
                </label>
            </div>

            <div className="flex items-center gap-4">
                <span className={`${possession ? "font-bold" : "text-gray-500"}`}>OUI</span>

                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={possession}
                        onChange={() => setPossession(!possession)}
                    />
                    <div className="w-14 h-8 bg-gray-300 rounded-full peer peer-checked:bg-gray-600 transition-colors duration-300"></div>
                    <div className="absolute right-1 top-1 w-6 h-6 bg-white border border-gray-400 rounded-full transition-transform duration-300 peer-checked:-translate-x-6"></div>
                </label>

                <span className={`${!possession ? "font-bold" : "text-gray-500"}`}>NON</span>
            </div>
        </div>
    );
};

//**********  FORM-ACQUISITION ********** //
const ProjetFormAcquisition = () => {
    return (
        <div className="situation__form__section">
            <CollapsibleSection 
                title="TYPOLOGIE DU BIEN"
                titleClassName="situation__form__title-text" // Applique une classe CSS personnalisée pour ce titre
            > 
                <div className="situation__form__content">
                    <div className="situation__form_content_pairs">
                        <div className="situation__form__box">
                        <label htmlFor="matrimonial-select" className="situation__form__box-label">
                            Structure <span className="etoile">*</span>
                        </label>
                        <div className="select-box">
                            <select id="matrimonial-select" name="situation-matrimoniale" required defaultValue="">
                                <option value="" disabled>Sélectionnez votre type</option>
                                <option value="sci">Société Civile Immobilière (SCI)</option>
                                <option value="nom">Nom propre</option>
                            </select>
                        </div>
                        </div>

                        <div className="situation__form__box">
                        <label className="situation__form__box-label">
                            Régime Fiscal
                        </label>
                        <div className="select-box">
                            <select required defaultValue="pas-particulière">
                            <option value="foncier">Revenu Foncier</option>
                            <option value="lmnp">Location meublé non professionnel</option>
                            </select>
                        </div>
                        </div>
                    </div>

                    <div className="situation__form_content_pairs">
                        <div className="situation__form__box">
                            <label htmlFor="Superficie" className="situation__form__box-label">Superficie (m²)</label>
                            <input
                            type="text"
                            inputMode="numeric"
                            id="superficie"
                            name="superficie"
                            placeholder="0"
                            min="0"
                            />
                        </div>

                        <div className="situation__form__box">
                        <label className="situation__form__box-label">
                            Nombre de pièces
                        </label>
                        <div className="select-box">
                            <select required defaultValue="0">
                            {[...Array(11).keys()].map((n) => (
                                <option key={n} value={n}>{n}</option>
                            ))}
                            </select>
                        </div>
                        </div>
                    </div>
                </div>
            </CollapsibleSection>
        </div>
    );
};

export default NewProjetPage

