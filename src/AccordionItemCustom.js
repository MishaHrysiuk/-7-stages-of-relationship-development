import React, { Fragment } from "react";
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
      return <GroupIcon className="m-2" size="46px" color="forestgreen" />;
    default:
      return null;
  }
};

const compileData = (data) => {
  console.log(data);
  switch (data.type) {
    case "card_list":
      return (
        <div className="mb-10 flex flex-col items-center">
          {returnIcon(data.title)}
          <h5 className="text-center my-3">{data.title}</h5>
          <ul>
            {data.content.map((item, index) => {
              return <li key={index}>{compileData(item)}</li>;
            })}
          </ul>
        </div>
      );
    case "list":
      return (
        <>
          {data.title}
          <ul>
            {data.content.map((item, index) => {
              return <li key={index}>{compileData(item)}</li>;
            })}
          </ul>
        </>
      );
    case "link":
      return <a href={data.ref}>{data.content}</a>;
    case "text":
      return data.content;
    default:
      return null;
  }
};

const AccordionItemCustom = ({ content }) => {
  return (
    <>
      {content.map((x) => {
        return compileData(x);
      })}
    </>
  );
};

export default AccordionItemCustom;
