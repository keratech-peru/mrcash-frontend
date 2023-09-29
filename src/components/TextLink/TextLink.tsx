import { NavigateOptions, useNavigate } from "react-router-dom";

import "./TextLink.css";

interface TextLinkInterface {
    text: string;
    url?: any;
    onclick?: any;
};

const TextLink = ({ text, url = "", onclick }: TextLinkInterface) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (url === "") {
            onclick(true);
        } else {
            navigate(url);
        };
    };

    return (
        <div className="textlink" onClick={handleClick}>
            {text}
        </div>
    );
};

export default TextLink;
