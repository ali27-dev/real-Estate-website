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
import Data from "../../utils/accordion";
import { useState } from "react";

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
        <div className="v-right flex-col-start">
          <h3 className="orange-text">Our Value</h3>
          <h2 className="primary-text">Value We Give to You</h2>
          <p className="secondary-text">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </p>
          {/* Accordion-section */}
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {Data.map((item, i) => {
              let [classState, setClassState] = useState(null);
              return (
                <AccordionItem
                  className={`accordion-item ${classState}`}
                  key={i}
                  uuid={i}
                >
                  {/* Accordion-heading */}
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordion-btn flex-center">
                      {/* Accordion-Item-State */}
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassState("expanded")
                            : setClassState("")
                        }
                      </AccordionItemState>

                      <div className="flex-center icon">{item.icon}</div>
                      <h4 className="primary-text">{item.heading}</h4>
                      <div className="flex-center icon">
                        <MdOutlineArrowDropDown />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  {/* Accordion-Panel */}
                  <AccordionItemPanel>
                    <p className="secondary-text">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
