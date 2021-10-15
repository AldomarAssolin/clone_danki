import React from "react";
import { Link } from "react-router-dom";



// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const StyleNavItem = {
        color: props.color || '#fff',
        background: props.bg || '0 0',
        border: props.border || 'none',
    }
    return(
        <React.Fragment>
            <Link style={StyleNavItem} className={props.classes} to={props.href}>
                {props.children}
            </Link>
        </React.Fragment>
    )
}