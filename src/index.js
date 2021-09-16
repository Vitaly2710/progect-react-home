import "./styles/index.css";
import './styles/index.scss';
import {render} from "react-dom";

const obj = {
    foo: 'hey',
    bazz: 'hello',
}

console.log(obj);


render(
    <h1>hello{new Date().getTime().toLocaleString()}</h1>,
     document.getElementById("roof"));