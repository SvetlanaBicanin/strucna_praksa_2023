import React, { useState } from "react";
import Modal from "react-modal";
import "./Modal.css";
import { createForm } from "../api/Services";
import MathJax from 'react-mathjax'




const FormModal = () => {
    const [formState, setFormState] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        major: "",
        mentor: "",
        phoneNumber: "",
        thesis: ""
    });
 
    const [isValidForm, setIsValidForm] = useState(true);

    const isValidInput = () => {
        let valid = true;
        valid = valid && formState.firstName.length > 0;
        valid = valid && formState.lastName.length > 0;
        valid = valid && formState.email.length > 0;
        valid = valid && formState.major.length > 0;
        valid = valid && formState.mentor.length > 0;
        valid = valid && formState.phoneNumber.length > 0;
        valid = valid && formState.thesis.length > 0;


        setIsValidForm(valid);
        return valid;
    }


    const formInputHandler = (e) => {
        const { name, value } = e.target;

        setFormState({ ...formState, [name]: value });
    };
 




    const formHandler = async () => {

     

            if (isValidInput()) {
                await createForm(formState).catch((e) => { console.log(e) });
        }
            setFormState({
                 id: "",
                 firstName: "",
                 lastName: "",
                 email: "",
                 major: "",
                 mentor: "",
                 phoneNumber: "",
                 thesis: ""
    });

        

            
        
    };


    return (<>{
        <Modal
            isOpen={true}
            className={`modal`}
            shouldCloseOnEsc={false}
            shouldCloseOnOverlayClick={false}
        >
            <div className="modal-header">
                <h2>Пријава теме мастер рада</h2>
            </div>
            <div className="modal-wrap">
                
                <>

                        
                            <div className="input-wrap">
                                <label htmlFor="firstName">* Име  </label>
                                <input
                                    placeholder="Унеси име"
                                    value={formState.firstName}
                                    name="firstName"
                                    type="text"
                                    onChange={formInputHandler}
                                />
                            </div>
                            <div className="input-wrap">
                                <label htmlFor="lastName">* Презиме </label>
                                <input
                                    placeholder="Унеси презиме"
                                    value={formState.lastName}
                                    name="lastName"
                                    type="text"
                                    onChange={formInputHandler}
                                />
                            </div>
                            <div className="input-wrap">
                                <label htmlFor="email">* мејл адреса </label>
                                <input
                                    placeholder="Унеси мејл адресу"
                                    value={formState.email}
                                    name="email"
                                    type="text"
                                    onChange={formInputHandler}
                               />
                            </div>
                            <div className="input-wrap">
                                <label htmlFor="major">* студијски програм </label>
                                <input
                                    placeholder="Унеси студијски програм"
                                    value={formState.major}
                                    name="major"
                                    type="text"
                                    onChange={formInputHandler}
                              />
                            </div>
                            <div className="input-wrap">
                                <label htmlFor="mentor">* име и презиме Ментора </label>
                                <input
                                    placeholder="Унесите име и презиме Ментора"
                                    value={formState.mentor}
                                    name="mentor"
                                    type="text"
                                    onChange={formInputHandler}
                               />
                            </div>
                            <div className="input-wrap">
                                <label htmlFor="phoneNumber">* број телефона </label>
                                <input
                                    placeholder="Унесите број телефона"
                                    value={formState.phoneNumber}
                                    name="phoneNumber"
                                    type="text"
                                    onChange={formInputHandler}
                               />
                            </div>
                            <div className="input-wrap span-corection">
                              <div className="thesis-div">
                                   <label htmlFor="thesis">* тема мастер рада </label>
                                   <a className="link-help" href="https://en.wikibooks.org/wiki/LaTeX/Mathematics">помоћ</a>
                              </div>
                               
                                <input
                                    placeholder="Унеси тему мастер рада"
                                    value={formState.thesis}
                                    name="thesis"
                                    type="text"
                                    onChange={formInputHandler}
                        />
                               <MathJax.Provider>
                                   <MathJax.Node formula={formState.thesis} />
                               </MathJax.Provider>
                            </div>
                    </>
               
                {isValidForm ? <></> : <div className="err-msg">Сва поља су обавезна!</div>}
             
                <button
                    type="submit"
                    className="submit-button"
                    onClick={formHandler}
                >
                    ПОТВРДИ
                </button>
            </div>
        </Modal>
    }</>);
};

export default FormModal;