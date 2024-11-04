import React, {useEffect} from "react";
import {useSelector} from "react-redux";

export default function DeviceCamera() {
    const camerasState = useSelector(state => state.cameras);

    useEffect(() => {
        getStream().then()
    }, [])

    const getStream = async () => {
        const video = document.getElementById('video');
        try {
            video.srcObject = await navigator.mediaDevices.getUserMedia({ video: true });;
        } catch (error) {
            console.error('Ошибка доступа к веб-камере:', error);
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