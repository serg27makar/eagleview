import React from "react";
import NewCameraView from "../components/NewCameraView";
import AddCameraModal from "../components/modals/AddCameraModal";
import DeviceCamera from "../components/DeviceCamera";

export default function Camera() {
    return (
        <div>
            <DeviceCamera/>
            <NewCameraView/>
            <AddCameraModal/>
        </div>
    )
}