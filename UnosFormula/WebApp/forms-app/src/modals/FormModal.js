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

        

            
        
    };


    return (<>{
        <Modal
            isOpen={true}
            className={`modal`}
            shouldCloseOnEsc={false}
            shouldCloseOnOverlayClick={false}
        >
            <div className="modal-header">
                <h2>Formular</h2>
            </div>
            <div className="modal-wrap">
                
                <>

                        
                            <div className="input-wrap">
                                <label htmlFor="firstName">* First name  </label>
                                <input
                                    placeholder="Enter name"
                                    value={formState.firstName}
                                    name="firstName"
                                    type="text"
                                    onChange={formInputHandler}
                                />
                            </div>
                            <div className="input-wrap">
                                <label htmlFor="lastName">* Last name </label>
                                <input
                                    placeholder="Enter last name"
                                    value={formState.lastName}
                                    name="lastName"
                                    type="text"
                                    onChange={formInputHandler}
                                />
                            </div>
                            <div className="input-wrap">
                                <label htmlFor="email">* Email </label>
                                <input
                                    placeholder="Enter email"
                                    value={formState.email}
                                    name="email"
                                    type="text"
                                    onChange={formInputHandler}
                               />
                            </div>
                            <div className="input-wrap">
                                <label htmlFor="major">* Major </label>
                                <input
                                    placeholder="Enter major"
                                    value={formState.major}
                                    name="major"
                                    type="text"
                                    onChange={formInputHandler}
                              />
                            </div>
                            <div className="input-wrap">
                                <label htmlFor="mentor">* Mentor</label>
                                <input
                                    placeholder="Enter mentor"
                                    value={formState.mentor}
                                    name="mentor"
                                    type="text"
                                    onChange={formInputHandler}
                               />
                            </div>
                            <div className="input-wrap">
                                <label htmlFor="phoneNumber">* Phone number </label>
                                <input
                                    placeholder="Enter phone number"
                                    value={formState.phoneNumber}
                                    name="phoneNumber"
                                    type="text"
                                    onChange={formInputHandler}
                               />
                            </div>
                            <div className="input-wrap span-corection">
                                <label htmlFor="thesis">* Thesis </label>
                                <input
                                    placeholder="Enter thesis"
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
               
                {isValidForm ? <></> : <div className="err-msg">All fields are required</div>}
             
                <button
                    type="submit"
                    className="submit-button"
                    onClick={formHandler}
                >
                    POTVRDI
                </button>
            </div>
        </Modal>
    }</>);
};

export default FormModal;