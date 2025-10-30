import { Card } from "antd";
import type { pj } from "../App";
import Meta from "antd/es/card/Meta";
import { useState } from "react";

function getBorder(valor: number): string {
  <div className="colores para el valor de la carta"></div>
  if (valor < 100) return "border-grey-500";
  if (valor < 550) return "border-red-500";
  return "border-yellow-400";
}

function Descripcion({ text }: { text: string }) {
  if (!text) return null;
  const [expanded, setExpanded] = useState(false);

  const limite = 50;

  return (
    <div //aca se edita el espacio del ver mas/menos
      className="text-amber-300 text-sm w-full whitespace-norma break-words overflow-hidden transition-all duration-300 ${
    mostrarDescripcion ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0' "
    >
      {expanded
        ? text
        : text.slice(0, limite) + (text.length > limite ? "..." : "")}
      {text.length > limite && (
        <button
          className=" ml-2 text-blue-500 underline text-xs"
          onClick={(e) => {
            e.stopPropagation(); // evita que se dispare el flip
            setExpanded(!expanded);
          }}
        >
          {expanded ? " Ver menos" : " Ver más"}
        </button>
      )}
    </div>
  );
}

export default function Cartas({ pj }: { pj: pj }) {
  const [showCard, setShowCard] = useState(false);
  const border = getBorder(pj.valor);

  return !showCard ? (
    <Card
      className= "h-95"
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
    <div className={`!bg-green-500 border-7 h-full mt-1 rounded-xl ${border}`}>
      <Card
        hoverable
        style={{ width: 260, height: 460, margin: 12, background: 50-50}}
        cover={
          <img
            className="w-full h-82  border-4 border-color-black "
            alt="volteado"
            src={pj.img}
          />
        }
        onClick={() => setShowCard(false)}
      >
         <p className="text-sm mt-0 text-black">
          <strong>Valor: </strong>
           {pj.valor}
        </p>

        <Meta
        
          className="w-full h-30 mt-0"
          title={pj.name}
          description={ <Descripcion text={pj.descripcion} />}
        />
       
      </Card>
    </div>
  );
}
