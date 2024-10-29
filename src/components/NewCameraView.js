import React from "react";
import "./../access/styles/cameraView.css"
import Translate from "../utils/translator/Translate";
import {useDispatch} from "react-redux";
import {showAddCameraModal} from "../reducers/actions";

export default function NewCameraView() {

    const dispatch = useDispatch();

    const openAddCameraModalFunction = () => {
        dispatch(showAddCameraModal(true))
    }

    return (
        <div className="cameraView">
            <div className="addCameraButtonWrap" onClick={openAddCameraModalFunction}>
                <div className="addCameraButton">
                    <div className="addBtnBlock">
                        <div className="plusButton">+</div>
                        <div className="textButton"><Translate text={"AddCamera"} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}