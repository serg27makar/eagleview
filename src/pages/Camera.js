import React from "react";
import NewCameraView from "../components/NewCameraView";
import AddCameraModal from "../components/modals/AddCameraModal";

export default function Camera() {
    return (
        <div>
            <NewCameraView/>
            <AddCameraModal/>
        </div>
    )
}