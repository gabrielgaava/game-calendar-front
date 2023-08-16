'use client'
import React, {ReactNode} from "react";
import style from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaystation, faWindows, faApple } from "@fortawesome/free-brands-svg-icons";
import Icon from "@/components/Icon";


const getIcon = (name: string): ReactNode => {
    const map: any = {
        "playstation5": <FontAwesomeIcon icon={faPlaystation} />,
        "pc": <FontAwesomeIcon icon={faWindows} />,
        "macos": <FontAwesomeIcon icon={faApple} />,
        "nintendo-switch": <Icon name="switch" color="#fff" size={18} />
    }
    
    if(map[name]) return map[name] as ReactNode;
    return null;
}


export default function Plataform({ data }: any) {
    return (
        <>
            {getIcon(data.slug) ? getIcon(data.slug) : null}
        </>
    );
}