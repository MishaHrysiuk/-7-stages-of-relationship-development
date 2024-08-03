import { Accordion, AccordionItem } from "@nextui-org/react";
import CustomAccordionItem from "./CustomAccordionItem";

import WavingHandIcon from "../icons/WavingHandIcon";
import SentimentVerySatisfiedIcon from "../icons/SentimentVerySatisfiedIcon";
import CommunicationIcon from "../icons/CommunicationIcon";
import VolunteerAcivismIcon from "../icons/VolunteerAcivismIcon";
import HeartCheckIcon from "../icons/HeartCheckIcon";
import SettingsHeartIcon from "../icons/SettingsHeartIcon";
import ShieldWithHeartIcon from "../icons/ShieldWithHeartIcon";

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

const CustomAccordion = ({ items }) => {
    return (
        <Accordion
            variant="splitted"
            itemClasses={{
                base: "bg-[var(--primary-200)]",
                title: "font-medium text-[var(--primary-600)]",
                indicator: "text-[var(--primary)]",
            }}
        >
            {items.map((item) => (
                <AccordionItem
                    startContent={returnIcon(item.name)}
                    title={`${item.number} Етап. ${item.name}.`}
                >
                    <CustomAccordionItem content={item} />
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default CustomAccordion;
