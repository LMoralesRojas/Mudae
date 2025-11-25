import { Card } from "antd";
import type { pj } from "../App";
import Meta from "antd/es/card/Meta";
import { useState } from "react";

function getBorder(valor: number): string {
  //Colores para identificar bien las categorias de las cartas
  <div className="colores para el valor de la carta"></div>;
  if (valor < 100) return "border-grey-500";
  if (valor < 550) return "border-red-500";
  return "border-yellow-400";
}

/*Componet descripcion...
Simplemente se encarga de la logica detras del funcionamiento "VER MAS/MENOS" 
(Truncar o mostrar)
*/

function Descripcion({ text }: { text: string }) {
  if (!text) return null;
  const [expanded, setExpanded] = useState(false);

  const limite = 30;

  //Apartir de aqui se crea el ScrollInvisible

  const scrollEnvoltorio = "realtive overflow-hidden";
  const scrollContent = "absulute inset-0 overflow-y-scroll pr-6";
  const tamañoMax = "max-h-24";
  const truncadorText =
    text.slice(0, limite) + (text.length > limite ? "..." : "");
  const showButton = text.length > limite;

  return (
    <div className="w-full">
      <div
        className={`w-full transition-all duration-300 ${
          expanded ? tamañoMax : "max-h-10"
        } ${scrollEnvoltorio}`}
      >
        <div //aca se edita el espacio del ver mas/menos
          className={`text-amber-300 text-sm w-full whitespace-norma break-words transition-all duration-300 ${
            expanded ? scrollContent : 'w-full'
          }`}
        >
          {expanded ? text : truncadorText}
        </div>
      </div>
      {showButton && (
        <button
          className={`mt-1 ml-2 text-blue-500 underline text-xs ${
            expanded ? "block" : "inline"
          }`}
          onClick={(e) => {
            // evita que se dispare el flip
            e.stopPropagation();
            setExpanded(!expanded);
          }}
        >
          {expanded ? " Ver menos" : " Ver más"}
        </button>
      )}
    </div>
  );
}
//Componente principal
export default function Cartas({ pj }: { pj: pj }) {
  const [showCard, setShowCard] = useState(false);
  const border = getBorder(pj.valorKakera);

  return !showCard ? (
    <Card
      className="h-95"
      hoverable
      style={{ width: 260, margin: 2 }}
      cover={
        <img
          className="w-auto h-full shadow"
          alt="carta oculta"
          src="https://i.pinimg.com/736x/90/bd/00/90bd007fdd357e18ed2ca4fc1ae21f4e.jpg"
        />
      }
      onClick={() => setShowCard(true)}
    ></Card>
  ) : (
    //Carta Volteada
    <div className={`border-7 m-0 h-full mt-1 rounded-xl ${border}`}>
      <Card
        className="!bg-rose-800 flex flex-col"
        hoverable
        //Defino la altura fija para las cartas
        style={{ width: 260, height: 460, margin: 0, background: 50 - 50 }}
        cover={
          <img
            className="w-full h-82  border-4 border-color-black "
            alt="volteado"
            src={pj.img}
          />
        }
        onClick={() => setShowCard(false)}
      >
        {/*Este div altera al scroll */}
        <div className="flex-grow min-h-0 relative">
          {/* El relative ayuda aposicionar los elementos de ser necesario
        padding-right es el pr*/}

          <div className="max-h-24 overflow-y-auto custom-scrollbar pr-2">
            <p className="text-sm mt-0 text-blue-200">
              <strong>Valor: </strong>
               {pj.valorKakera}
            </p>
            <div className="h-100 w-full ">
              <Meta
                className="w-full h-30 mt-0"
                title={<span className="text-white">{pj.name}</span>}
                description={<Descripcion text={pj.descripcion} />}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
