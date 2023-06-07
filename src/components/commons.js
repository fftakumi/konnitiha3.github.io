import React, {useState} from "react";
import {customButton, customCard} from "./commons.module.css"

export const Button = (props) => {
    return(
        <button className={customButton} onClick={props.onClick}>{props.children}</button>
    )
}

export const Label = (props) => {
    return(
        <label>{props.children}</label>
    )
}

export const Card = (props) => {
    return(
        <div className={customCard}>{props.children}</div>
    )
}