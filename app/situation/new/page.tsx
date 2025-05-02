
'use client'
import Header from "@/app/_sections/header"
import Footer from "@/app/_sections/footer"
import React from 'react';
import { useFormLogic } from "@/hooks/useFormLogic";
import CollapsibleSection from "@/app/_components/collapsible-section";

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
const NewSituationPage = () => {
    return (
        <>
            <Header/>
            <NewSituation/>
            <Footer/>
        </>
    )
}

//**********  PAGE-SITUATION ********** //
const NewSituation = () => {
    /* LOGIQUE FORMULAIRE, CALCULS, FORMATTAGE à partir de useFormLogic */
    useFormLogic();

    return (
      <div className="main">
        <div className="main__container">
            <SituationHero/>
            <SituationForm/>
        </div>
      </div>
    );
};

//**********  SITUATION-HERO ********** //
const SituationHero = () => {
    return(
        <div className="main__hero">
            <p className="main__hero-title">
                Faites le bilan de votre situation
            </p>
            <p className="main__hero-description">
                Adoptez une approche sur-mesure
            </p>
      </div>
    )
}

//**********  FORM-SECTIONS ********** //
const SituationForm = () => {
    return (
        <form action="#">
            <div className="situation__form">
                <div className="situation__form__container">
                    <SituationFormIntro/>  
                    <SituationFormEtatCivil/>
                    <SituationFormRevenus/>
                    <SituationFormResidence/>
                </div>
            </div>
        </form>
    )
}

//**********  FORM-INTRO ********** //
const SituationFormIntro = () => {
    return (
        <div className="situation___form__intro">
            <div className="situation__form__intro__obligatoire">
                <p>
                Les champs suivis d&apos;une étoile{' '}
                <span className="etoile">*</span> sont obligatoires
                </p>
            </div>
            <div className="situation__form__intro__name">
                <label className="situation__form__intro__name-label">
                Nom de la situation <span className="etoile">*</span>
                </label>
                <input
                type="text"
                placeholder="Entrez le nom de votre situation"
                required
                />
            </div>
        </div>
    );
};


//**********  FORM-ETAT CIVIL ********** //
const SituationFormEtatCivil = () => {
    return (
        <div className="situation__form__section">
            <CollapsibleSection 
                title="MON ETAT CIVIL"
                titleClassName="situation__form__title-text" // Applique une classe CSS personnalisée pour ce titre
            > 
                <div className="situation__form__content">
                    <div className="situation__form_content_pairs">
                        <div className="situation__form__box">
                        <label htmlFor="nom_prenom" className="situation__form__box-label">Nom et Prénom</label>
                        <input type="text" placeholder="NOM Prénom" name="nom_prenom" id="nom_prenom" />
                        </div>
                        <div className="situation__form__box">
                        <label htmlFor="date-naissance" className="situation__form__box-label">Date de naissance</label>
                        <input type="text" id="date-naissance" name="date-naissance" placeholder="jj/mm/aaaa" />
                        </div>
                    </div>

                    <div className="situation__form_content_pairs">
                        <div className="situation__form__box">
                        <label htmlFor="matrimonial-select" className="situation__form__box-label">
                            Situation matrimoniale <span className="etoile">*</span>
                        </label>
                        <div className="select-box">
                            <select id="matrimonial-select" name="situation-matrimoniale" required defaultValue="">
                                <option value="" disabled>Sélectionnez votre statut</option>
                                <option value="marie">Marié(e)</option>
                                <option value="celibataire">Célibataire</option>
                                <option value="divorce">Divorcé(e)/Séparé(e)</option>
                                <option value="veuf">Veuf(ve)</option>
                            </select>
                        </div>


                        </div>

                        <div className="situation__form__box">
                        <label className="situation__form__box-label">
                            Situation particulière <span className="etoile">*</span>
                        </label>
                        <div className="select-box">
                            <select required defaultValue="pas-particulière">
                            <option value="pas-particulière">Aucune</option>
                            <option value="isolé">Parent isolé(e)</option>
                            <option value="seul-5-ans">Élevé seul(e) un enfant pendant 5 ans</option>
                            <option value="veuf/combattant">Veuf(ve) Invalide/Ancien combattant(e)</option>
                            </select>
                        </div>
                        </div>
                    </div>

                    <div className="situation__form_content_pairs">
                        <div className="situation__form__box">
                        <label className="situation__form__box-label">
                            Enfant(s) à charge(s) <span className="etoile">*</span>
                        </label>
                        <div className="select-box">
                            <select required defaultValue="0">
                            {[...Array(11).keys()].map((n) => (
                                <option key={n} value={n}>{n}</option>
                            ))}
                            </select>
                        </div>
                        </div>

                        <div className="situation__form__box">
                        <label className="situation__form__box-label">
                            Enfant(s) à charge alternée(s) <span className="etoile">*</span>
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

//**********  FORM-REVENUS ********** //
const SituationFormRevenus = () => {
    return (
        <div className="situation__form__section">
            <CollapsibleSection 
            title="MES REVENUS"
            titleClassName="situation__form__title-text" // Applique une classe CSS personnalisée pour ce titre
            >
                <div className="situation__form__content">
                    <div className="situation__form_content_pairs">
                        <div className="situation__form__box input-euro-container">
                            <label htmlFor="Revenu-net" className="situation__form__box-label">Revenu net imposable</label>
                            <input
                            className="euro-input"
                            type="text"
                            inputMode="numeric"
                            id="Revenu-net"
                            name="revenu-net"
                            placeholder="0 €"
                            min="0"
                            />
                        </div>

                        <div id="conjoint-income-box" className="situation__form__box collapsible-box">
                            <label htmlFor="Revenu-net-conjoint" className="situation__form__box-label">Revenu net imposable conjoint(e)</label>
                            <input
                            className="euro-input"
                            type="text"
                            inputMode="numeric"
                            id="Revenu-net-conjoint"
                            name="Revenu-net-conjoint(e)"
                            placeholder="0 €"
                            />
                        </div>
                    </div>
                </div>
            </CollapsibleSection>
        </div>
    );
};

//**********  FORM-RESIDENCE ********** //
const SituationFormResidence = () => {
    return(
        <div className="situation__form__section">
            <CollapsibleSection 
            title="MA RESIDENCE PRINCIPALE"
            titleClassName="situation__form__title-text"
            >
                <div className="situation__form__content">
                    <div className="situation__form_content_pairs">
                    <div className="situation__form__box">
                        <label className="situation__form__box-label">Type de résidence <span className="etoile">*</span></label>
                        <div className="select-box">
                            <select id="residence-select" required defaultValue="">
                                <option value="" disabled>Propriétaire/Locataire/Logé(e)</option>
                                <option value="Proprietaire">Propriétaire</option>
                                <option value="Locataire">Locataire</option>
                                <option value="loge-gratuit">Logé(e) à titre gratuit</option>
                            </select>
                        </div>
                    </div>
                    <div id="loyer-box" className="situation__form__box collapsible-box">
                        <label className="situation__form__box-label">Loyer</label>
                        <input className="euro-input" type="text" inputMode="numeric" placeholder="1 200 €" />
                    </div>
                    </div>

                    <div id="proprietaire-fields" className="situation__form_content_pairs collapsible-box">
                    <div className="situation__form__box">
                        <label className="situation__form__box-label">Type de financement <span className="etoile">*</span></label>
                        <div className="select-box">
                            <select id="type-financement" required defaultValue="">
                                <option value="" disabled>Crédit/Financé</option>
                                <option value="credit">Crédit en cours</option>
                                <option value="finance">Entièrement financé</option>
                            </select>
                        </div>

                    </div>
                    <div className="situation__form__box">
                        <label className="situation__form__box-label">Charge(s) annuelle(s)</label>
                        <input className="euro-input" type="text" inputMode="numeric" placeholder="60 000 €" id="charges-annuelles" name="charges-annuelles" />
                    </div>
                    <div className="situation__form__box">
                        <label className="situation__form__box-label">Valeur du bien</label>
                        <input id="valeur-bien" name="valeur-bien" className="euro-input" type="text" inputMode="numeric" placeholder="300 000 €" />
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

                    <div id="amortissement-section" className="situation__form__section collapsible-box">
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
    )
}

export default NewSituationPage;