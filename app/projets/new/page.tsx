
'use client'
import Header from "@/app/_sections/header"
import Footer from "@/app/_sections/footer"
import React from 'react';
// Import des fonctions de formatage pour les inputs
import { useFormLogicProjet } from "@/hooks/useFormLogicProjet";
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
    useFormLogicProjet();
    return (
      <div className="flex flex-col items-center justify-center w-full bg-white">
        <div className="w-full flex flex-col items-center">
            <ProjetHero/>
            <ProjetForm/>
        </div>
      </div>
    );
};

//**********  POJET-HERO ********** //
const ProjetHero = () => {
    return(
        <div className="flex flex-col items-center justify-center text-center w-full min-h-32 sm:min-h-40 md:min-h-52 lg:min-h-64 px-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10
        [font-family:var(--Kaisei)] bg-black bg-no-repeat h-40 font-medium">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[rgba(var(--third-color))]">
                Etudiez votre projet
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white">
                Adoptez une approche sur-mesure
            </p>
        </div>
    )
}

//**********  FORM-SECTIONS ********** //
const ProjetForm = () => {
    return (
        <form action="#">
            <div className="w-full flex justify-center pb-[50px]">
                <div className="w-full flex flex-col justify-start px-4 sm:px-6 md:px-8 gap-5 lg:min-w-200">
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
                <span className="text-red-500">*</span> sont obligatoires
                </p>
            </div>
            <div className="w-full flex flex-col">
                <label className="text-base text-[rgba(var(--primary-color))] mb-2">
                Nom du projet <span className="text-red-500">*</span>
                </label>
                <input
                type="text" className="w-full px-[20px] py-[10px] border border-[#ccc] rounded-lg text-base box-border transition-colors duration-300 ease-in-out"
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
        <div className="w-full flex flex-col">
            <CollapsibleSection 
                title="TYPOLOGIE DU BIEN"
                titleClassName="[font-family:var(--Kaisei)] text-lg"
            > 
                <div className="w-full flex flex-col items-center justify-center pt-5 gap-4 overflow-hidden">
                    <div className="flex flex-col sm:flex-row gap-5 justify-between w-full">
                        <div className="w-full flex flex-col">
                        <label className="text-base text-[rgba(var(--primary-color))] mb-2">
                            Type d'investissement <span className="text-red-500">*</span>
                        </label>
                        <div className="relative w-full">
                            <select required defaultValue="" 
                            className="w-[90%] px-[15px] pl-[30px] py-[10px] rounded-lg border border-[#ccc] bg-white text-[16px] text-primary cursor-pointer appearance-none 
                                       transition-colors duration-300 ease-in-out bg-[url('/arrow-down.svg')] bg-no-repeat bg-[right_10px_center] bg-[length:16px]">
                                <option value="" disabled>Sélectionnez votre type</option>
                                <option value="locatif">Locatif</option>
                                <option value="resid-p">Residence Principale</option>
                                <option value="resid-s">Residence Secondaire</option>
                            </select>
                        </div>
                        </div>

                        <div className="w-full flex flex-col">
                        <label className="text-base text-[rgba(var(--primary-color))] mb-2">
                            Usage du bien
                        </label>
                        <div className="relative w-full">
                            <select required defaultValue="pas-particulière"
                            className="w-[90%] px-[15px] pl-[30px] py-[10px] rounded-lg border border-[#ccc] bg-white text-[16px] text-primary cursor-pointer appearance-none 
                                       transition-colors duration-300 ease-in-out bg-[url('/arrow-down.svg')] bg-no-repeat bg-[right_10px_center] bg-[length:16px]">
                            <option value="habitation">Habitation</option>
                            <option value="comerciale">Comerciale</option>
                            </select>
                        </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 justify-between w-full">
                        <div className="w-full flex flex-col">
                            <label className="text-base text-[rgba(var(--primary-color))] mb-2">Superficie (m²)</label>
                            <input
                            type="text" className="w-[90%] px-[30px] py-[10px] border border-[#ccc] rounded-lg text-[16px] box-border transition-colors duration-300 ease-in-out"
                            inputMode="numeric"
                            name="superficie"
                            placeholder="0"
                            min="0"
                            />
                        </div>

                        <div className="w-full flex flex-col">
                        <label className="text-base text-[rgba(var(--primary-color))] mb-2">
                            Nombre de pièces
                        </label>
                        <div className="relative w-full">
                            <select required defaultValue="0"
                            className="w-[90%] px-[15px] pl-[30px] py-[10px] rounded-lg border border-[#ccc] bg-white text-[16px] text-primary cursor-pointer appearance-none 
                            transition-colors duration-300 ease-in-out bg-[url('/arrow-down.svg')] bg-no-repeat bg-[right_10px_center] bg-[length:16px]">
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
                title="ACQUISITION"
                titleClassName="[font-family:var(--Kaisei)] text-lg" // Applique une classe CSS personnalisée pour ce titre
            > 
                <div className="w-full flex flex-col items-center justify-center pt-5 gap-4 overflow-hidden">
                    <div className="flex flex-col sm:flex-row gap-5 justify-between w-full">
                        <div className="w-full flex flex-col">
                        <label className="text-base text-[rgba(var(--primary-color))] mb-2">
                            Structure <span className="text-red-500">*</span>
                        </label>
                        <div className="relative w-full">
                            <select id="structure-select" name="structure-projet" required defaultValue=""
                            className="w-[90%] px-[15px] pl-[30px] py-[10px] rounded-lg border border-[#ccc] bg-white text-[16px] text-primary cursor-pointer appearance-none 
                            transition-colors duration-300 ease-in-out bg-[url('/arrow-down.svg')] bg-no-repeat bg-[right_10px_center] bg-[length:16px]">
                                <option value="" disabled>Sélectionnez votre type</option>
                                <option value="sci">Société Civile Immobilière (SCI)</option>
                                <option value="nom">Nom propre</option>
                            </select>
                        </div>
                        </div>
                        <div id="scipart" className="w-full flex flex-col collapsible-box">
                            <label className="text-base text-[rgba(var(--primary-color))] mb-2">Nombre de part(s) en pourcentage</label>
                            <input
                            type="text" className="w-[90%] px-[30px] py-[10px] border border-[#ccc] rounded-lg text-[16px] box-border transition-colors duration-300 ease-in-out"
                            inputMode="numeric"
                            placeholder="0"
                            min="0"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 justify-between w-full">
                    <div className="w-full flex flex-col">
                        <label className="text-base text-[rgba(var(--primary-color))] mb-2">Type de financement <span className="text-red-500">*</span></label>
                            <div className="select-box">
                                <select id="type-financement" required defaultValue="">
                                <option value="" disabled>Crédit/Financé</option>
                                <option value="credit">Crédit en cours</option>
                                <option value="finance">Entièrement financé</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full flex flex-col">
                        <label className="text-base text-[rgba(var(--primary-color))] mb-2">
                            Régime Fiscal
                        </label>
                        <div className="relative w-full">
                            <select required defaultValue="pas-particulière"
                            className="w-[90%] px-[15px] pl-[30px] py-[10px] rounded-lg border border-[#ccc] bg-white text-[16px] text-primary cursor-pointer appearance-none 
                            transition-colors duration-300 ease-in-out bg-[url('/arrow-down.svg')] bg-no-repeat bg-[right_10px_center] bg-[length:16px]">
                            <option value="foncier">Revenu Foncier (IR)</option>
                            <option value="lmnp">Location Meublé Non Professionnel (LMNP)</option>
                            <option value="scis">Impôts sur les Sociétés (IS)</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div id="detail-financment-fields" className="situation__form__section collapsible-box situation__form-detail-financement">
                        <CollapsibleSection 
                        title="Détail difinancement crédit"
                        titleClassName="situation__form__title-text situation__form__title-detail-text"
                        >
                            <div className="situation__form__content">
                                <div className="situation__form_content_pairs">
                                <div className="situation__form__box">
                                    <label className="situation__form__box-label">Date d'emprunt</label>
                                    <input type="text" name="date-emprunt" id="date-emprunt" placeholder="jj/mm/aaaa" />
                                </div>
                                <div className="situation__form__box">
                                    <label className="situation__form__box-label">Montant emprunté</label>
                                    <input className="euro-input" type="text" inputMode="numeric" placeholder="300 000 €" id="montant-emprunt" name="montant-emprunt" />
                                </div>
                                </div>

                                

                                <div className="situation__form_content_pairs">
                                <div className="situation__form__box">
                                    <label className="situation__form__box-label">Durée d'emprunt</label>
                                    <div className="select-box">
                                    <select id="durée-emprunt" required>
                                        <option value="" disabled hidden>25 ans</option>
                                        {[...Array(25)].map((_, i) => {
                                        const year = 25 - i;
                                        return <option key={year} value={year}>{year} {year === 1 ? "an" : "ans"}</option>;
                                        })}
                                    </select>
                                    </div>
                                </div>
                                <div className="situation__form__box">
                                    <label className="situation__form__box-label">Taux d'emprunt</label>
                                    <input
                                    className="taux-input"
                                    type="text"
                                    inputMode="decimal"
                                    placeholder="2.43 %"
                                    id="taux-emprunt"
                                    name="taux-emprunt"
                                    pattern="[0-9]*[.,]?[0-9]*"
                                    />
                                </div>
                                </div>

                                <div className="situation__form_content_pairs">
                                <div className="situation__form__box">
                                    <label className="situation__form__box-label">Taux assurances</label>
                                    <input
                                    className="taux-input"
                                    type="text"
                                    inputMode="decimal"
                                    placeholder="0.96%"
                                    name="taux-assurances"
                                    id="taux-assurances"
                                    pattern="[0-9]*[.,]?[0-9]*"
                                    />
                                </div>
                                <div className="situation__form__box">
                                    <label className="situation__form__box-label">Mensualité estimée</label>
                                    <input type="text" id="mensualité" readOnly placeholder="0 €" />
                                </div>
                                </div>
                            </div>
                        </CollapsibleSection>
                    </div>

                    <div htmlFor="amortissement-section" className="situation__form__section collapsible-box">
                    <CollapsibleSection 
                        title="Tableau d'amortissement"
                        defaultOpen={false}
                        titleClassName="situation__form__title-text situation__form__title-detail-text" 
                        >

                    <div className="amortissement situation__form__content">
                        <table>
                        <thead>
                            <tr>
                            <th className="amortissement-annee">Année</th>
                            <th className="amortissement-interets">Intérêts</th>
                            <th className="amortissement-assurance">Assurance</th>
                            <th className="amortissement-cap-cumulee">Capital Cumulé</th>
                            <th className="amortissement-cap-restant">Capital Restant dû</th>
                            </tr>
                        </thead>
                        <tbody id="amortissement-body"></tbody>
                        </table>
                    </div>
                    </CollapsibleSection>
                    </div>
                </div>
            </CollapsibleSection>
        </div>
    );
};

export default NewProjetPage

