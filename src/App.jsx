import { useState , Fragment} from 'react';
import componentsImage from './assets/components.png'
import { CORE_CONCEPTS , EXAMPLES } from './data';

import Header from "./Components/Header/Header"
import CoreConcept from "./Components/CoreConcept/CoreConcept"
import TabButton from './Components/TabButton/TabButton'



function App() {
  let [selectedButton , setSelectedButton] = useState(null)

  let tabContent = <p>Please Select An Element</p>

  if(selectedButton){
    tabContent = (  
    <div id="tab-content">
      <h3>{EXAMPLES[selectedButton].title }</h3>
      <p>{EXAMPLES[selectedButton].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedButton].code}
        </code>
      </pre>
    </div>
    )
  }

  // let tabContent = 'Please Select a button'
  function selectHandler(clickedButton){
    setSelectedButton(clickedButton)
    

  }
  return (
    <Fragment> 
      {/* or we can just use <> empty tags instead of Fragments in new React Projects */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map( (conceptItem) => 
              (<CoreConcept key = {conceptItem.title} {...conceptItem} />)
              
            )}
            {/* {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept {...conceptItem} />
            ))} */}
          </ul>
        </section>
        <section id="examples">
          Examples
          <menu>
            
            <TabButton isSelected = {selectedButton === "components"} onSelect={() => {selectHandler("components")}}>Components</TabButton>
            <TabButton isSelected={selectedButton === "jsx"} onSelect={() => {selectHandler("jsx")}}>JSX</TabButton>
            <TabButton isSelected={selectedButton === "props"} onSelect={() => {selectHandler("props")}}>Props</TabButton>
            <TabButton isSelected={selectedButton === "state"} onSelect = { () => {selectHandler("state")} }>State</TabButton>
            
          </menu>
          {/* {!selectedButton ? <p>Please Select a Value</p> : null }
          {selectedButton ? (
            <div id="tab-content">
            <h3>{EXAMPLES[selectedButton].title }</h3>
            <p>{EXAMPLES[selectedButton].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedButton].code}
              </code>
            </pre>
          </div>
          ) : null}
           we can render data conditionally like this or like the below code */}
           {/* {!selectedButton ? <p>Please Select a value</p> : (<div id="tab-content">
            <h3>{EXAMPLES[selectedButton].title }</h3>
            <p>{EXAMPLES[selectedButton].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedButton].code}
              </code>
            </pre>
          </div>
        ) }  or like below*/}
          {/* {!selectedButton && <p>Please Select A Value</p> }
          {selectedButton && (
            <div id="tab-content">
            <h3>{EXAMPLES[selectedButton].title }</h3>
            <p>{EXAMPLES[selectedButton].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedButton].code}
              </code>
            </pre>
          </div>
          )} and we can also do it like on the above lines
            */}
        {/* this will also work because if the statement before the && is true then the statement on the right will be executed */}
            {tabContent}
        </section>
      </main>
    </Fragment>
  );
}

export default App;


/*Components must have 2 things
1)Components must have a Uppercase Starting Letter
i.e App , User etc
2) it must return some renderable content i.e the exmple above


Components can be called with the <Header \> in the other components

{} are used to dynamically insert data in the html
 instead of hard coded src attributes use dynamic updating

*/