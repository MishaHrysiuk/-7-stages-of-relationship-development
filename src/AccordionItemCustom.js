import React from "react";
import DiamondIcon from "./icons/DiamondIcon";
import StarsIcon from "./icons/StarsIcon";
import WarningIcon from "./icons/WarningIcon";
import PrayIcon from "./icons/PrayIcon";
import GroupIcon from "./icons/GroupIcon";
import BookIcon from "./icons/BookIcon";

const returnIcon = (title) => {
    switch (title) {
        case "Цінність етапу":
            return <DiamondIcon className="m-2" size="46px" color="cyan" />;
        case "Особливості етапу":
            return <StarsIcon className="m-2" size="46px" color="yellow" />;
        case "Небезпеки етапу":
            return <WarningIcon className="m-2" size="46px" color="red" />;
        case "Молитви на цьому етапі":
            return <PrayIcon className="m-2" size="46px" color="blue" />;
        case "Біблійний приклад":
            return <BookIcon className="m-2" size="46px" color="chocolate" />;
        case "Для обговорення з друзями":
            return (
                <GroupIcon className="m-2" size="46px" color="forestgreen" />
            );
        default:
            return null;
    }
};

const compileData = (data) => {
    switch (data.type) {
        case "root":
            return data.children[0].children.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="mb-10 flex flex-col items-center"
                    >
                        {returnIcon(item.children[0].children[0].value)}
                        {item.children.map((item) => compileData(item))}
                    </div>
                );
            });
        case "heading":
            return (
                <h5 className="text-center my-3">
                    {data.children.map((item) => compileData(item))}
                </h5>
            );
        case "paragraph":
            return <>{data.children.map((item) => compileData(item))}</>;
        case "list":
            if (data.ordered) {
                return (
                    <ol>{data.children.map((item) => compileData(item))}</ol>
                );
            } else {
                return (
                    <ul>{data.children.map((item) => compileData(item))}</ul>
                );
            }
        case "listItem":
            return <li>{data.children.map((item) => compileData(item))}</li>;
        // case "link":
        //     return <a href={data.ref}>{data.content}</a>;
        case "text":
            return data.value;
        default:
            return null;
    }
};

const AccordionItemCustom = ({ content }) => {
    return compileData(content);
};

export default AccordionItemCustom;
