import React, { useEffect, useState } from "react";
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

import DescriptionIcon from "./icons/DescriptionIcon";
import PointIcon from "./icons/PointIcon";

import Title from "./components/Title";
import CustomCard from "./components/CustomCard";
import CustomAccordion from "./components/CustomAccordion";
import { compileData } from "./handlers/markdownCompiler";

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
                    console.log(tree);
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
            <Title />
            <CustomCard Icon={PointIcon} text={compileData(introduction)} />
            <CustomAccordion
                items={[
                    { ...data1, name: "Знайомство", number: 1 },
                    { ...data2, name: "Симпатія", number: 2 },
                    { ...data3, name: "Залицяння", number: 3 },
                    { ...data4, name: "Пропозиція", number: 4 },
                    { ...data5, name: "Спільне рішення", number: 5 },
                    { ...data6, name: "Заручини", number: 6 },
                    { ...data7, name: "Шлюб", number: 7 },
                ]}
            />
            <CustomCard
                Icon={DescriptionIcon}
                text={compileData(introduction)}
            />
        </>
    );
}

