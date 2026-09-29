import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/00-home/header/header";
import {Col, Container, Row} from "react-bootstrap";
import Menu from "./components/00-home/menu/menu";
import HelloWorld from "./components/01-hello-world/HelloWorld";
import HelloReact from "./components/02-hello-react/HelloReact";
import StoreContext from "./store";
import Exchange from "./components/20-context-api/exchange";
import axios from "axios";

const App = () => {

    const [counter, setCounter] = useState(10);
    const [currencies, setCurrencies] = useState({})

    const loadData = async () => {
        const response = await axios.get("https://api.frankfurter.dev/v1/latest?from=try");
        setCurrencies(response.data.rates);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <StoreContext.Provider value={{counter, currencies}}>
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
                                <Route path="/exchange" element={<Exchange/>}/>
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
        </StoreContext.Provider>
    );
};

export default App;