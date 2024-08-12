import TabButton from "../TabButton/TabButton";
import { useState  } from "react";
import { EXAMPLES } from "../../data";

export default function Examples(){
    const [selectedButton , setSelectedButton] = useState(null)
    

    function handleClick(clickedButton){
        console.log(clickedButton);
        
        setSelectedButton(clickedButton);

    }

    return (
        <section id="examples">
            Examples
            <menu>
                <TabButton isSelected={selectedButton === "components"} onSelect={ () => {handleClick("components")} }>Components</TabButton>
                <TabButton isSelected={selectedButton === "jsx"} onSelect={ () => {handleClick("jsx")} }>JSX</TabButton>
                <TabButton isSelected={selectedButton === "props"} onSelect={ () => {handleClick("props")} }>Props</TabButton>
                <TabButton isSelected={selectedButton === "state"} onSelect={ () => {handleClick("state")} }>State</TabButton>
            </menu>
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
            
        </section>
    )
}