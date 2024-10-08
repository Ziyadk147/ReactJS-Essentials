import TabButton from "../TabButton/TabButton";
import { useState  } from "react";
import Section from "../Section/Section";
import { EXAMPLES } from "../../data";
import Tabs from "../TabFeature/Tabs";


export default function Examples(){
    const [selectedButton , setSelectedButton] = useState(null)
    

    function handleClick(clickedButton){
        console.log(clickedButton);
        
        setSelectedButton(clickedButton);

    }

    return (
        <Section id="examples" title="Examples">
            <Tabs
            buttons={
                <>
                <TabButton isSelected={selectedButton === "components"} onSelect={ () => {handleClick("components")} }>Components</TabButton>
                <TabButton isSelected={selectedButton === "jsx"} onSelect={ () => {handleClick("jsx")} }>JSX</TabButton>
                <TabButton isSelected={selectedButton === "props"} onSelect={ () => {handleClick("props")} }>Props</TabButton>
                <TabButton isSelected={selectedButton === "state"} onSelect={ () => {handleClick("state")} }>State</TabButton>
                </>
            }>

            {!selectedButton && <p>Please Select A Button</p>}
            {selectedButton && (
                <div id="tab-content">
                    <h3>{EXAMPLES[selectedButton].title}</h3>
                    <p>{EXAMPLES[selectedButton].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[selectedButton].code}
                        </code>
                    </pre>
                </div>
            )}

            </Tabs>
            
            
            
        </Section>
    )
}