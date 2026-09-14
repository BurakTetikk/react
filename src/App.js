import React from 'react';
import Header from "./components/header/Header";
import HelloWorld from "./components/01-hello-world/HelloWorld";
import HelloReact from "./components/02-hello-react/HelloReact";
import Jsx1 from "./components/03-jsx/Jsx1";
import Jsx2 from "./components/03-jsx/Jsx2";
import Jsx3 from "./components/03-jsx/Jsx3";
import JsxLoop from "./components/03-jsx/JsxLoop";

const App = () => {
    return (
        <div>
            {/*<p>-------- Header Component --------</p>*/}
            {/*<Header/>*/}
            {/*<p>-------- App Component --------</p>*/}
            {/*<p>*/}
            {/*    Ben bu işin üstesinden gelirim, geleceğim.*/}
            {/*</p>*/}
            {/*<p>-------- HelloWorld Component --------</p>*/}
            {/*<HelloWorld/>*/}
            {/*<p>-------- HelloReact Component --------</p>*/}
            {/*<HelloReact/>*/}
            {/*<Jsx1/>*/}
            {/*<Jsx2/>*/}
            {/*<Jsx3/>*/}
            <JsxLoop/>
        </div>
    );
};

export default App;