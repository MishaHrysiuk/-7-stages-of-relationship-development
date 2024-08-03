import { Card, CardBody } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const CustomCard = ({ Icon, text, ending }) => {
    return (
        <Card className="m-2 bg-[var(--secondary-100)]">
            <CardBody className="flex items-center">
                <Icon size="48px" color="var(--secondary-300)" />
                <p className="m-2.5 text-justify font-[460]">{text}</p>
                {ending ? <Button>Залишити відгук</Button> : null}
            </CardBody>
        </Card>
    );
};

export default CustomCard;
