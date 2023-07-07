"use client";
import Image from "next/image";
import { Screen } from "./widgets.style";

import bug from "../../public/one.png";
import lampada from "../../public/Emoji.png";
import nuvem from "../../public/Thought.png";
import arrowleft from "../../public/arrow-left-bold-16px.png";

import { useEffect, useState } from "react";

export default function Widgets() {
  const [item, setItem] = useState<any | undefined>();

  const bugs = {
    msg: "Problema",
    img: bug,
  };
  const lampadas = {
    msg: "ideia",
    img: lampada,
  };
  const outros = {
    msg: "Outros",
    img: nuvem,
  };

  function handleritem() {
    const content = document.getElementById("screen-one");
    const screenBack = document.getElementById("screen-two");
    content?.setAttribute("style", "display: none");
    screenBack?.setAttribute("style", "display: flex");
  }

  const handlerBack = () => {
    const content = document.getElementById("screen-one");
    const screenBack = document.getElementById("screen-two");
    screenBack?.setAttribute("style", "display: none");
    content?.setAttribute("style", "display: flex");
  };
  return (
    <div className="content" id="content">
      <Screen id="screen-one">
        <div className="title">Deixe seu feedback</div>
        <div className="selection">
          <div
            className="card"
            onClick={() => {
              setItem(bugs);
              handleritem();
            }}
          >
            <Image src={bugs.img} alt="emogi" />
            <span>{bugs?.msg}</span>
          </div>
          <div
            className="card"
            onClick={() => {
              setItem(lampadas);
              handleritem();
            }}
          >
            <Image src={lampadas.img} alt="emogi" />
            <span>{lampadas?.msg}</span>
          </div>
          <div
            className="card"
            onClick={() => {
              setItem(outros);
              handleritem();
            }}
          >
            <Image src={outros.img} alt="emogi" />
            <span>{outros?.msg}</span>
          </div>
        </div>
        <p>
          Feito com ♥ por{" "}
          <a href="https://github.com/Igordevz" target="_blank">
            Igor
          </a>
        </p>
      </Screen>
      {item ? (
        <Screen id="screen-two">
          <div
            className="title"
            style={{ display: "flex", flexDirection: "row", gap: 10 }}
          >
            <div className="arrow-left">
              <Image src={arrowleft} alt="arrow-left" onClick={handlerBack} />
            </div>
            <Image src={item.img} alt="ola" />
            <h1 style={{ fontSize: 24 }}>{item?.msg}</h1>
          </div>
          <div
            className="selection"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <textarea cols={48} rows={5}></textarea>
            <button>Enviar Feedback</button>
          </div>
          <p>
            Feito com ♥ por{" "}
            <a href="https://github.com/Igordevz" target="_blank">
              Igor
            </a>
          </p>
        </Screen>
      ) : (
        <div></div>
      )}
    </div>
  );
}
