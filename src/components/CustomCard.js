import { Card, CardBody } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const CustomCard = ({ Icon, text, ending }) => {
    return (
        <Card className="m-2 bg-[var(--secondary-100)]">
            <CardBody className="flex items-center">
                <Icon size="48px" color="var(--secondary-300)" />
                <p className="m-2.5 text-justify font-[460]">{text}</p>
                {ending ? (
                    <>
                        <p className="m-2.5 text-justify font-[460]">
                            Залишіть будь ласка відгук :)
                        </p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScoCgFLUx3jwnGvwHuq2W4fQ6YzXhTn_LeKHURSYVvPBwlBPQ/viewform?usp=sf_link">
                            <Button className="bg-[var(--secondary-400)]">
                                Залишити відгук
                            </Button>
                        </a>
                    </>
                ) : null}
            </CardBody>
        </Card>
    );
};

export default CustomCard;
