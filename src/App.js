import React from "react";
import { Accordion, AccordionItem, Card, CardBody } from "@nextui-org/react";
import WavingHandIcon from "./icons/WavingHandIcon";
import SentimentVerySatisfiedIcon from "./icons/SentimentVerySatisfiedIcon";
import CommunicationIcon from "./icons/CommunicationIcon";
import VolunteerAcivismIcon from "./icons/VolunteerAcivismIcon";
import HeartCheckIcon from "./icons/HeartCheckIcon";
import SettingsHeartIcon from "./icons/SettingsHeartIcon";
import ShieldWithHeartIcon from "./icons/ShieldWithHeartIcon";
import AccordionItemCustom from "./AccordionItemCustom";
import data from "./data.json";

//1)waving_hand
//2)sentiment_very_satisfied
//3)communication
//4)volunteer_activism
//5)heart_check
//6)settings_heart
//7)shield_with_heart

const returnIcon = (title) => {
  switch (title) {
    case "Знайомство":
      return <WavingHandIcon size="36px" color="var(--primary-600)" />;
    case "Симпатія":
      return (
        <SentimentVerySatisfiedIcon size="36px" color="var(--primary-600)" />
      );
    case "Залицяння":
      return <CommunicationIcon size="36px" color="var(--primary-600)" />;
    case "Пропозиція":
      return <VolunteerAcivismIcon size="36px" color="var(--primary-600)" />;
    case "Спільне рішення":
      return <HeartCheckIcon size="36px" color="var(--primary-600)" />;
    case "Заручини":
      return <SettingsHeartIcon size="36px" color="var(--primary-600)" />;
    case "Шлюб":
      return <ShieldWithHeartIcon size="36px" color="var(--primary-600)" />;
    default:
      return null;
  }
};

export default function App() {
  return (
    <>
      <h2 className="m-2.5 mb-0 text-center tracking-tight font-medium color-effect">
        7 ЕТАПІВ РОЗВИТКУ СТОСУНКІВ
      </h2>
      <h4 className="mb-4 text-center font-medium">
        які ведуть до створення сім’ї
      </h4>
      <Card className="m-2 bg-[var(--secondary-300)]">
        <CardBody className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="var(--background)"
          >
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
              <g>
                <path d="M13.02,19.93v2.02c2.01-0.2,3.84-1,5.32-2.21l-1.42-1.43C15.81,19.17,14.48,19.75,13.02,19.93z" />
                <path d="M4.03,12c0-4.05,3.03-7.41,6.95-7.93V2.05C5.95,2.58,2.03,6.84,2.03,12c0,5.16,3.92,9.42,8.95,9.95v-2.02 C7.06,19.41,4.03,16.05,4.03,12z" />
                <path d="M19.95,11h2.02c-0.2-2.01-1-3.84-2.21-5.32l-1.43,1.43C19.19,8.21,19.77,9.54,19.95,11z" />
                <path d="M18.34,4.26c-1.48-1.21-3.32-2.01-5.32-2.21v2.02c1.46,0.18,2.79,0.76,3.9,1.62L18.34,4.26z" />
                <path d="M18.33,16.9l1.43,1.42c1.21-1.48,2.01-3.31,2.21-5.32h-2.02C19.77,14.46,19.19,15.79,18.33,16.9z" />
                <path d="M16,11.1C16,8.61,14.1,7,12,7s-4,1.61-4,4.1c0,1.66,1.33,3.63,4,5.9C14.67,14.73,16,12.76,16,11.1z M12,12 c-0.59,0-1.07-0.48-1.07-1.07c0-0.59,0.48-1.07,1.07-1.07s1.07,0.48,1.07,1.07C13.07,11.52,12.59,12,12,12z" />
              </g>
            </g>
          </svg>
          <p className="m-2.5 text-justify">
            Коли ми вирушаємо у невідому місцевість, щоб не заблукати і
            дістатись до пункту призначення, ми використовуємо карту, або
            GPS-навігатор. Даний матеріал може послужити подібним дороговказом
            для молоді у їх подорожі до повноцінного дорослого життя і щасливого
            шлюбу. Згідно спостережень за розвитком стосунків тих людей, які вже
            дістались до цієї мети, можна прослідкувати, що вони проходили ряд
            етапів розвитку цих стосунків. Отож, пропонуємо детально поглянути
            на сім етапів, як зазвичай, розвиваються стосунки між хлопцями і
            дівчатами та ведуть до утворення сім’ї.
          </p>
        </CardBody>
      </Card>

      <Accordion
        variant="splitted"
        itemClasses={{
          base: "bg-[var(--primary-200)]",
          title: "font-medium text-[var(--primary-600)]",
          indicator: "text-[var(--primary)]",
        }}
      >
        {data.map((item) => {
          return (
            <AccordionItem
              key={item.number}
              startContent={returnIcon(item.title)}
              title={`${item.number} Етап. ${item.title}.`}
            >
              <AccordionItemCustom content={item.content} />
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}

