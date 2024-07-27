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
    <Fragment>
      {content.map((x, index) => {
        return compileData(x);
      })}
    </Fragment>
  );
  return (
    <>
      <div className="mb-10 flex flex-col items-center">
        {/* <div className="rounded-full bg-[var(--primary)]"> */}
        <StarsIcon className="m-2" size="46px" color="yellow" />
        {/* </div> */}
        <h5 className="text-center my-3">Особливості етапу</h5>
        <ul>
          <li>
            Бог дав величезні можливості для знайомства:
            <ul>
              <li>Територія</li>
              <li>Інструменти</li>
            </ul>
          </li>
          <li>
            Головні правила знайомства:
            <ul>
              <li>Щиро цікався людиною</li>
              <li>Дозвіл на подальше спілкування</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="mb-10 flex flex-col items-center	">
        <div className="rounded-full bg-[var(--primary-200)]">
          <GroupIcon className="m-2" size="46px" color="forestgreen" />
        </div>
        <h5 className="text-center my-3">Для обговорення з друзями</h5>
        <ul>
          <li>
            <a href="https://bogvideo.com/movies/kniga-ruf-puteshestvie-veryi-the-book-of-ruth-journey-of-faith/">
              Фільм Рут
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccordionItemCustom;
