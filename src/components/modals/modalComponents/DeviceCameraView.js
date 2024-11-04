import React from "react";
import Translate from "../../../utils/translator/Translate";
import {showAddBtn, showAddCameraModal} from "../../../reducers/actions";
import {useDispatch} from "react-redux";

export default function DeviceCameraView() {
    const dispatch = useDispatch();

    const startButton = async () => {
        dispatch(showAddBtn(false))
        dispatch(showAddCameraModal(null))
    }

    return (
        <div>
            <div className="chooseCameraViewTitle textPadding"><Translate text={"ConfirmActivationDeviceCamera"} /></div>
            <div className="centerBtnBlock">
                <button className="confirmBtn" onClick={startButton}><Translate text={"Confirm"} /></button>
            </div>
        </div>
    )
}