import React, {useState} from "react";
import Translate from "../../../utils/translator/Translate";
import "../../../access/styles/modal.css"
import outCameraArr from "../../../access/resource/tempResCamera";
import Checkbox from "../Checkbox";

export default function ChooseCameraView() {

    const checkedEl = (item) => {
        console.log(item.target.labels[0].textContent)
    }

    return (
        <div>
            <h4 className="chooseCameraViewTitle"><Translate text={"ChooseCamera"} /></h4>
            <div className="chooseCameraNameBlock">
                {outCameraArr.map((el) => {
                    return (
                        <div className="cameraNameBlock" key={el.name}>
                            <Checkbox checked={false} label={el.name} onChange={checkedEl}/>
                            <div className="cameraName"></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}