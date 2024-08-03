import { Card, CardBody } from "@nextui-org/react";

const CustomCard = ({ Icon, text }) => {
    return (
        <Card className="m-2 bg-[var(--secondary-300)]">
            <CardBody className="flex items-center">
                <Icon size="48px" color="var(--text)" />
                <p className="m-2.5 text-justify">{text}</p>
            </CardBody>
        </Card>
    );
};

export default CustomCard;
