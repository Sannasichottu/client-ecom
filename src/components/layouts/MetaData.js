import React from "react";
import { Helmet } from "react-helmet-async";


export default function MetaData ({title}) {
    return (
        <Helmet>
            <title>
                {`${title}- chottu shop`}
            </title>
        </Helmet>
    )
}