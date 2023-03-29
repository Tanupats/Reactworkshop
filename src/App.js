import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';


import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./App.css";

import AppHeader from "./component/Appheader";
import Example from "./component/block-ui";
import Cardsearch from "./component/Cardsearch";

function App() {
  const [message, setMessage] = useState([]);

  let id = "";

  const Serch = async () => {
   
    const response = await fetch(
      "https://node-api-f6or.vercel.app/product/" + id
    );
    const data = await response.json();

    console.log(data)

    setMessage({
      id: `รหัสสินค้า : ${data.id}`,
      product_name: `ชื่อสินค้า : ${data.product_name}`,
      price: `ราคา : ${data.price}`,
      discription: `รายละเอียด : ${data.discription}`,
    });
  };

  const handleChange = (event) => {
    //Get input value from "event"
    setMessage(event.target.value);
    id = event.target.value;
    Serch();
  };

  return (
    <div className="app">
      <AppHeader />
      <div className="container">

 
      <div className="item-time">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="เลือกวันที่" />
      </DemoContainer>
    </LocalizationProvider>
          
      </div>

      <div className="item-time">
          
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <MobileTimePicker label={"เลือกเวลา"} openTo="นาที" />
              </DemoContainer>
            </LocalizationProvider>
          
      </div>



        <div className="Autocomplete">
          <div className="MuiStack-root css-1xhypcz-MuiStack-root">
            <input
              placeholder=" ค้นหาข้อมูลด้วยรหัสสินค้า"
              className="MuiFormControl-root MuiTextField-root css-1u3bzj6-MuiFormControl-root-MuiTextField-root"
              type=" text"
              id="message"
              name="message"
              onChange={handleChange}
            />
          </div>

          <Cardsearch message={message}/>

          <Example />

        </div>
      </div>
    </div>
  );
}

export default App;
