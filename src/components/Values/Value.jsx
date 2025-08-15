import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
export default function Value() {
  return (
    <section className="v-wrapper">
      <div className="v-container inner-width paddings flex-center">
        {/* left */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* right */}
        <div className="v-right flex-col-center">
          <span>A</span>
          <span>B</span>
          <span>C</span>
        </div>
      </div>
    </section>
  );
}
