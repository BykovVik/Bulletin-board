import React from "react";
import { Accordion } from "react-bootstrap";
import './Sidebar.css'

const Sidebar = (props:any) => {
    //defaultActiveKey="0"
    return(
        <div className="sidebar maim-margin-top">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li><input type="checkbox"></input><span className="AccordeonItem">Параметр</span></li>
                            <li><input type="checkbox"></input><span className="AccordeonItem">Параметр</span></li>
                            <li><input type="checkbox"></input><span className="AccordeonItem">Параметр</span></li>
                            <li><input type="checkbox"></input><span className="AccordeonItem">Параметр</span></li>
                            <li><input type="checkbox"></input><span className="AccordeonItem">Параметр</span></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li><input type="checkbox"></input><span className="AccordeonItem">Параметр</span></li>
                            <li><input type="checkbox"></input><span className="AccordeonItem">Параметр</span></li>
                            <li><input type="checkbox"></input><span className="AccordeonItem">Параметр</span></li>
                            <li><input type="checkbox"></input><span className="AccordeonItem">Параметр</span></li>
                            <li><input type="checkbox"></input><span className="AccordeonItem">Параметр</span></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Accordion Item #3</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li><input type="checkbox"></input><span className="AccordeonItem">Параметр</span></li>
                            <li><input type="checkbox"></input><span className="AccordeonItem">Параметр</span></li>
                            <li><input type="checkbox"></input><span className="AccordeonItem">Параметр</span></li>
                            <li><input type="checkbox"></input><span className="AccordeonItem">Параметр</span></li>
                            <li><input type="checkbox"></input><span className="AccordeonItem">Параметр</span></li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Sidebar