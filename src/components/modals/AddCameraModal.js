import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {showAddCameraModal} from "../../reducers/actions";
import "../../access/styles/modal.css"
import Translate from "../../utils/translator/Translate";
import addCameraModalButtons from "../../access/resource/addCameraModalButtons";
import ChooseCameraView from "./modalComponents/ChooseCameraView";
import DeviceCameraView from "./modalComponents/DeviceCameraView";
import AddPhotoView from "./modalComponents/AddPhotoView";
import AddVideoView from "./modalComponents/AddVideoView";

function AddCameraModal() {
    const [isVisible, setIsVisible] = useState(false);
    const [isActive, setIsActive] = useState(addCameraModalButtons[0].btnName);
    const state = useSelector(state => state.modal);
    const dispatch = useDispatch();

    useEffect(() => {
        if (state.showAddCameraModal) {
            setIsVisible(true);
        }
    }, [state.showAddCameraModal]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() =>  dispatch(showAddCameraModal(null)), 500);
    };

    const headerView = () => {
        return (
            <div className="headerBtnBlock">
                {addCameraModalButtons.map((el) => {
                    const styleActive = el.btnName === isActive
                        ? "headerViewButton active"
                        : "headerViewButton";
                    return (
                        <div className={styleActive} key={el.btnName} onClick={() => setIsActive(el.btnName)}>
                            <div className={el.btnName}/>
                            <div className="headerViewButtonText"><Translate text={el.btnName} /></div>
                        </div>
                    )
                })}
            </div>
        )
    }

    const viewSwitcher = () => {
        switch (isActive) {
            case 'outCamera': return <ChooseCameraView/>;
            case 'deviceCamera': return <DeviceCameraView/>;
            case 'addPhoto': return <AddPhotoView/>;
            case 'addVideo': return <AddVideoView/>;
            default: return  <ChooseCameraView/>;
        }
    }

    if (!state.showAddCameraModal) return null;

    return (
        <div className={`modal-overlay ${isVisible ? 'show' : ''}`} onClick={handleClose}>
            <div className={`addCameraModal ${isVisible ? 'show' : ''}`} onClick={e => e.stopPropagation()}>
                {headerView()}
                {viewSwitcher()}
            </div>
        </div>
    );
}

export default AddCameraModal;