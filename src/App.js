import Foto1 from "./img/foto1.jpg";
import Foto2 from "./img/foto2.jpg";
import Foto3 from "./img/foto3.jpg";
import Foto4 from "./img/foto4.jpg";
import Foto5 from "./img/foto5.jpg";
import Foto6 from "./img/foto6.jpg";
import Foto7 from "./img/foto7.jpg";
import Foto8 from "./img/foto8.jpg";
import Foto9 from "./img/foto9.jpg";
import Foto10 from "./img/foto10.jpg";
import Foto12 from "./img/foto12.jpg";
import Foto13 from "./img/foto13.jpg";
import Foto14 from "./img/foto14.jpg";
import Foto15 from "./img/foto15.jpg";
import Fotologo from "./img/logo1.jpg";

import React, { useState } from "react";

import "./App.css";

function App() {
  let img1 = "./img/foto1.jpg";
  let img2 = "./img/foto2.jpg";
  let img3 = "./img/foto3.jpg";
  let img4 = "./img/foto4.jpg";
  let img5 = "./img/foto5.jpg";
  let img6 = "./img/foto6.jpg";
  let img7 = "./img/foto7.jpg";
  let img8 = "./img/foto8.jpg";
  let img9 = "./img/foto9.jpg";
  let img10 = "./img/foto10.jpg";
  let img11 = "./img/foto11.jpg";
  let img12 = "./img/foto12.jpg";
  let img13 = "./img/foto13.jpg";
  let img14 = "./img/foto14.jpg";
  let img15 = "./img/foto15.jpg";
  let img = "./img/foto8.jpg";

  let [count, setCout] = React.useState(Foto6);
  return (
    <div>
      <div className="title">
        {" "}
        <div className="cl">
          <div className="contentt">
            <div className="sun">
              <div className="shadow"></div>
            </div>
          </div>
        </div>
        <div className="case">
          <h1 className="shadowBtn">night nature</h1>
        </div>
      </div>

      <div className="contaner">
        <div className="main-pictures">
          {" "}
          {/*  */}
          <img className="pictures" src={count} />
        </div>
        <div className="galleri">
          <img
            onClick={() => setCout(Foto1)}
            className="count-1"
            src={Foto1}
            width={200}
          />
          <img
            onClick={() => setCout(Foto2)}
            className="count-1"
            src={Foto2}
            width={200}
          />
          <img
            onClick={() => setCout(Foto3)}
            className="count-1"
            src={Foto3}
            width={200}
          />
          <img
            onClick={() => setCout(Foto4)}
            className="count-1"
            src={Foto4}
            width={200}
          />
          <img
            onClick={() => setCout(Foto5)}
            className="count-1"
            src={Foto5}
            width={200}
          />
          <img
            onClick={() => setCout(Foto6)}
            className="count-1"
            src={Foto6}
            width={200}
          />
          <img
            onClick={() => setCout(Foto7)}
            className="count-1"
            src={Foto7}
            width={200}
          />
          <img
            onClick={() => setCout(Foto8)}
            className="count-1"
            src={Foto8}
            width={200}
          />

          <img
            onClick={() => setCout(Foto9)}
            className="count-1"
            src={Foto9}
            width={200}
          />
          <img
            onClick={() => setCout(Foto10)}
            className="count-1"
            src={Foto10}
            width={200}
          />
          <img
            onClick={() => setCout(Foto12)}
            className="count-1"
            src={Foto12}
            width={200}
          />

          <img
            onClick={() => setCout(Foto13)}
            className="count-1"
            src={Foto13}
            width={200}
          />
          <img
            onClick={() => setCout(Foto14)}
            className="count-1"
            src={Foto14}
            width={200}
          />
          <img
            onClick={() => setCout(Foto8)}
            className="count-1"
            src={Foto8}
            width={200}
          />

          <img
            onClick={() => setCout(Fotologo)}
            className="count-1"
            src={Fotologo}
            width={200}
          />
          <img
            onClick={() => setCout(Foto15)}
            className="count-1"
            src={Foto15}
            width={200}
          />
        </div>
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default App;
