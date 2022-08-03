import React from "react";
import ReactDom from 'react-dom';

const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();


ReactDom.render(
<>
<p>current Date is {currDate} .</p>
<p>Current time is {currTime} .</p>

</>,
document.getElementById('root'));