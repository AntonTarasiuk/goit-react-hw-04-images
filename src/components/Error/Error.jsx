import React from "react";
import { ErrorMessageText } from "./Error.styled";

export const ErrorMessage = ({error}) => {
    return <ErrorMessageText>{error}</ErrorMessageText>
}