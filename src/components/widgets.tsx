"use client"
import Image from "next/image";
import { Screen } from "./widgets.style";
import bug from "../../public/one.png";
import lampada from "../../public/Emoji.png";
import nuvem from "../../public/Thought.png";
import { useEffect, useState } from "react";


export default function Widgets() {

    const [item, setItem ] = useState<any | undefined>();

    const bugs = {
        msg: "Problema",
        img: bug
    }
    const lampadas ={
        msg: "ideia",
        img: lampada
    }
    const outros = {
        msg: "Outros",
        img: nuvem
    }

        function handlerteste(){
            
            const content = document.getElementById("screen-one")
            content?.setAttribute("style", "display: none")
            
        }
    
  return (
    <div className="content" id="content">
      <Screen id="screen-one">
        <div className="title">Deixe seu feedback</div>
          <div className="selection">
          <div className="card"  onClick={() => {
            setItem(bugs)
            handlerteste()

          }}
          >
            <Image src={bugs.img} alt="emogi"  />
            <span>{bugs?.msg}</span>
          </div>
          <div className="card" onClick={() => {
            setItem(lampadas)
            handlerteste()


          }}>
            <Image src={lampadas.img} alt="emogi" />
            <span>{lampadas?.msg}</span>
          </div>
          <div className="card" onClick={() => {
            setItem(outros)
            handlerteste()

          }}>
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
            <Screen style={{display: "flex", flexDirection: "column"}}>
              <div className="title" style={{ display: "flex", flexDirection: "row", gap: 10}}>
                    <Image src={item.img} alt="ola" />
                    <h1 style={{fontSize: 24}}>{item?.msg}</h1>
              </div>
              <div className="selection" style={{display: "flex", flexDirection: "column"}}>
                    <textarea cols={48} rows={5}></textarea>
                  <button>Enviar Feedback</button></div>
                  <p>
          Feito com ♥ por{" "}
          <a href="https://github.com/Igordevz" target="_blank">
            Igor
          </a>
        </p>
            </Screen>
        ) : (
            <div>

            </div>
        )}
    </div>
  );
}
