import { compileData } from "../handlers/markdownCompiler";

const CustomAccordionItem = ({ content }) => {
    return compileData(content);
};

export default CustomAccordionItem;
