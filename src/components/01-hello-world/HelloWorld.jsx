import React, {useContext} from 'react';
import HelloReact from "../02-hello-react/HelloReact";
import StoreContext from "../../store";

const HelloWorld = () => {
    const {counter, currencies} = useContext(StoreContext);

    return (
        <div>
            Hello World! {counter}
            <HelloReact/>
        </div>
    );
};

export default HelloWorld;