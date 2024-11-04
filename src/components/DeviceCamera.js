import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {showAlertModal} from "../reducers/actions";

export default function DeviceCamera() {
    const camerasState = useSelector(state => state.cameras);
    const dispatch = useDispatch();

    useEffect(() => {
        getStream().then()
    }, [])

    const getStream = async () => {
        const video = document.getElementById('video');
        try {
            video.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });;
        } catch (error) {
            dispatch(showAlertModal({
                title: "Ошибка доступа к веб-камере",
                message: error.message
            }));
        }
    }

    return (
        <div className={camerasState.isShowAddBtn ? "hideCenterBlock" : "centerBlock"}>
            <div className="deviceCameraView">
                <video className="deviceVideo" id="video" width="" height="" autoPlay></video>
            </div>
        </div>
    )
}