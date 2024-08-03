import React, { useEffect, useState } from "react";
import { Accordion, AccordionItem, Card, CardBody } from "@nextui-org/react";
import WavingHandIcon from "./icons/WavingHandIcon";
import SentimentVerySatisfiedIcon from "./icons/SentimentVerySatisfiedIcon";
import CommunicationIcon from "./icons/CommunicationIcon";
import VolunteerAcivismIcon from "./icons/VolunteerAcivismIcon";
import HeartCheckIcon from "./icons/HeartCheckIcon";
import SettingsHeartIcon from "./icons/SettingsHeartIcon";
import ShieldWithHeartIcon from "./icons/ShieldWithHeartIcon";
import AccordionItemCustom from "./AccordionItemCustom";
import { fromMarkdown } from "mdast-util-from-markdown";
import stage1 from "./data/Знайомство.md";
import stage2 from "./data/Симпатія.md";
import stage3 from "./data/Залицяння.md";
import stage4 from "./data/Пропозиція.md";
import stage5 from "./data/Спільне рішення.md";
import stage6 from "./data/Заручини.md";
import stage7 from "./data/Шлюб.md";
import intro from "./data/Вступ.md";
import end from "./data/Закінчення.md";

const returnIcon = (title) => {
    switch (title) {
        case "Знайомство":
            return <WavingHandIcon size="36px" color="var(--primary-600)" />;
        case "Симпатія":
            return (
                <SentimentVerySatisfiedIcon
                    size="36px"
                    color="var(--primary-600)"
                />
            );
        case "Залицяння":
            return <CommunicationIcon size="36px" color="var(--primary-600)" />;
        case "Пропозиція":
            return (
                <VolunteerAcivismIcon size="36px" color="var(--primary-600)" />
            );
        case "Спільне рішення":
            return <HeartCheckIcon size="36px" color="var(--primary-600)" />;
        case "Заручини":
            return <SettingsHeartIcon size="36px" color="var(--primary-600)" />;
        case "Шлюб":
            return (
                <ShieldWithHeartIcon size="36px" color="var(--primary-600)" />
            );
        default:
            return null;
    }
};

export default function App() {
    const [introduction, setIntroduction] = useState({});
    const [ending, setEnding] = useState({});
    const [data1, setData1] = useState({});
    const [data2, setData2] = useState({});
    const [data3, setData3] = useState({});
    const [data4, setData4] = useState({});
    const [data5, setData5] = useState({});
    const [data6, setData6] = useState({});
    const [data7, setData7] = useState({});

    useEffect(() => {
        async function fetchData(stage, setData) {
            await fetch(stage)
                .then((response) => {
                    return response.text();
                })
                .then((text) => {
                    const tree = fromMarkdown(text);
                    setData(tree);
                });
        }
        fetchData(stage1, setData1);
        fetchData(stage2, setData2);
        fetchData(stage3, setData3);
        fetchData(stage4, setData4);
        fetchData(stage5, setData5);
        fetchData(stage6, setData6);
        fetchData(stage7, setData7);
        fetchData(intro, setIntroduction);
        fetchData(end, setEnding);
    }, []);

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
                        {introduction.children[0].children[0].value}
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
                <AccordionItem
                    startContent={returnIcon("Знайомство")}
                    title={`1 Етап. Знайомство.`}
                >
                    <AccordionItemCustom content={data1} />
                </AccordionItem>
                <AccordionItem
                    startContent={returnIcon("Симпатія")}
                    title={`2 Етап. Симпатія.`}
                >
                    <AccordionItemCustom content={data2} />
                </AccordionItem>
                <AccordionItem
                    startContent={returnIcon("Залицяння")}
                    title={`3 Етап. Залицяння.`}
                >
                    <AccordionItemCustom content={data3} />
                </AccordionItem>
                <AccordionItem
                    startContent={returnIcon("Пропозиція")}
                    title={`4 Етап. Пропозиція.`}
                >
                    <AccordionItemCustom content={data4} />
                </AccordionItem>
                <AccordionItem
                    startContent={returnIcon("Спільне рішення")}
                    title={`5 Етап. Спільне рішення.`}
                >
                    <AccordionItemCustom content={data5} />
                </AccordionItem>
                <AccordionItem
                    startContent={returnIcon("Заручини")}
                    title={`6 Етап. Заручини.`}
                >
                    <AccordionItemCustom content={data6} />
                </AccordionItem>
                <AccordionItem
                    startContent={returnIcon("Шлюб")}
                    title={`7 Етап. Шлюб.`}
                >
                    <AccordionItemCustom content={data7} />
                </AccordionItem>
            </Accordion>

            <Card className="m-2 bg-[var(--secondary-300)]">
                <CardBody className="flex items-center">
                    <p className="m-2.5 text-justify">
                        {ending.children[0].children[0].value}
                    </p>
                </CardBody>
            </Card>
        </>
    );
}

