import Translate from "../../utils/translator/Translate";
import React from "react";

export default function Checkbox( {label, checked, onChange}) {
    return (
        <label className="container"><Translate text={label} />
            <input type="checkbox" checked={checked} onChange={onChange}/>
            <span className="checkmark"></span>
        </label>
    )
}