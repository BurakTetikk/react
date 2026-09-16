import React from 'react';
import Header from "./components/header/Header";
import HelloWorld from "./components/01-hello-world/HelloWorld";
import HelloReact from "./components/02-hello-react/HelloReact";
import Jsx1 from "./components/03-jsx/Jsx1";
import Jsx2 from "./components/03-jsx/Jsx2";
import Jsx3 from "./components/03-jsx/Jsx3";
import JsxLoop from "./components/03-jsx/JsxLoop";
import JsxMap from "./components/03-jsx/JsxMap";
import InlineStyle from "./components/04-styles/InlineStyle";
import InternalStyle from "./components/04-styles/InternalStyle";
import ExternalStyle from "./components/04-styles/ExternalStyle";
import SassStyle from "./components/04-styles/SassStyle";
import Clock from "./components/05-clock/Clock";

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
            {/*<JsxLoop/>*/}
            {/*<JsxMap/>*/}
            {/*<InlineStyle/>*/}
            {/*<InternalStyle/>*/}
            {/*<ExternalStyle/>*/}
            {/*<SassStyle/>*/}
            <Clock/>
        </div>
    );
};

export default App;