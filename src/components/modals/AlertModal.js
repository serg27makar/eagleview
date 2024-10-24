import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {showAlertModal} from "../../reducers/actions";
import "../../access/styles/modal.css"
import Translate from "../../utils/translator/Translate";

function AlertModal() {
    const [isVisible, setIsVisible] = useState(false);
    const state = useSelector(state => state.alertModal);
    const dispatch = useDispatch();

    useEffect(() => {
        if (state.showAlertData) {
            setIsVisible(true);
        }
    }, [state.showAlertData]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() =>  dispatch(showAlertModal(null)), 500);
    };

    if (!state.showAlertData) return null;

    return (
        <div className={`modal-overlay ${isVisible ? 'show' : ''}`} onClick={handleClose}>
            <div className={`alertModal ${isVisible ? 'show' : ''}`} onClick={e => e.stopPropagation()}>
                <div className="alertModalBody">
                {state.showAlertData.title && <h3><Translate text={state.showAlertData.title} /></h3>}
                {state.showAlertData.message && <p><Translate text={state.showAlertData.message} /></p>}

                <button className="alertModalBtn" onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default AlertModal;