import React from 'react';
import CountriesAxios from "./components/17-api/countries-axios";
import Form1 from "./components/19-forms/form1";
import Form2 from "./components/19-forms/form2";
import Form3 from "./components/19-forms/form3";
import Form4 from "./components/19-forms/form4";
import Formik from "./components/19-forms/formik";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/00-home/header/header";
import {Col, Container, Row} from "react-bootstrap";
import Menu from "./components/00-home/menu/menu";
import HelloWorld from "./components/01-hello-world/HelloWorld";
import HelloReact from "./components/02-hello-react/HelloReact";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>

            <Container fluid>
                <Row>
                    <Col sm={2}>
                        <Menu/>
                    </Col>


                    <Col sm={10}>
                        <Routes>
                            <Route path="/hello-world" element={<HelloWorld/>}/>
                            <Route path="/hello-react" element={<HelloReact/>}/>
                        </Routes>
                    </Col>
                </Row>
            </Container>
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
            {/*<Clock/>*/}
            {/*<Greetings/>*/}
            {/*<Products/>*/}
            {/*<Image/>*/}
            {/*<Gallery/>*/}
            {/*<ProfileCard/>*/}
            {/*<BootstrapStatic/>*/}
            {/*<BootstrapDynamic/>*/}
            {/*<Icons/>*/}
            {/*<Events/>*/}
            {/*<Counter/>*/}
            {/*<UseEffectHook/>*/}
            {/*<UserCards/>*/}
            {/*<CountriesAxios/>*/}
            {/*<Form1/>*/}
            {/*<Form2/>*/}
            {/*<Form3/>*/}
            {/*<Form4/>*/}
            {/*<Formik/>*/}
        </BrowserRouter>
    );
};

export default App;