import React from "react"
import { Button } from "./styles"
import PropTypes from 'prop-types';


function DefaultButton({ children, theme, ...rest }) {


    return (
        <Button {...rest} theme={theme}>{children}</Button>
    )
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default DefaultButton
