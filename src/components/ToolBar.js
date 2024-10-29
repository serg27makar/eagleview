import {Link, useLocation} from "react-router-dom";
import toolBarButtons from "../access/resource/toolBarButtonArr";
import "../access/styles/toolbar.css";
import React, {useEffect} from "react";
import Translate from "../utils/translator/Translate";

export default function ToolBar() {
    const location = useLocation();

    useEffect(() => {
    }, [location.pathname]);

    return (
        <div className="toolBar">
            {toolBarButtons.map((el) => {
                const styleActive = location.pathname.includes(el.page)
                    ? "toolBarButton active"
                    : "toolBarButton";

                return (
                    <div className={styleActive} key={el.page}>
                        <Link to={el.linkPath}>
                            {el.linkIcon}
                            <div><Translate text={el.linkName} /></div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}