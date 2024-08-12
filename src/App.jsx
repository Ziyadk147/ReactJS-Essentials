import  {Fragment} from 'react';

import CoreConcepts from './Components/CoreConceptsFeature/CoreConcepts';
import Header from "./Components/Header/Header"
import Examples from './Components/ExampleFeature/Examples';


function App() {
  return (
    <Fragment> 
      {/* or we can just use <> empty tags instead of Fragments in new React Projects */}
      <Header />
      <main>

        <CoreConcepts />
        <Examples />
        
      </main>
    </Fragment>
  )
}
export default App