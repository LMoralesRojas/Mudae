import { useState } from "react";
import type { pj } from "../App";
import Cartas from "../Components/Cartas";
import { Button } from "antd";

export default function Home({ pjs }: { pjs: pj[] }) {
  const [showRandomCard, setShowRandomCard] = useState<null | pj>(null);

  const randomMain = () => {
    const randomIndex = Math.floor(Math.random() * pjs.length);
    setShowRandomCard(pjs[randomIndex]);
  };

  return showRandomCard ? (
    //aca esta el bg de todo el espacio cartas mas botones
    <div className="w-full h-full flex flex-wrap items-center justify-center">
      <Cartas pj={showRandomCard} />

      <div className="flex flex-col items-center mt-4  ">
        <Button className="w-32 mb-2 hover:!bg-yellow-600 !border-black !border-3" type="primary" onClick={randomMain}>
          Otra carta
        </Button>
        <Button
          className="w-32 !bg-red-400 !text-black hover:!bg-purple-400 !border-black !border-3"
          onClick={() => setShowRandomCard(null)}
        >
          <h3>
            <strong>Volver</strong>
          </h3>
        </Button>
      </div>
    </div> //espacio de los botones el del bg
  ) : (
    //el bg del boton
    <div className=" w-30 flex items-center justify-center h-full">
      <Button
        className={`!bg-black !text-white hover:!bg-red-700 w-32 mt-4 transition-all${
          showRandomCard ? "z-20 absolute bottom-8 " : ""
        }`}
        onClick={randomMain}
        block
      >
        <h5>
          <strong>Invocar</strong>
        </h5>
      </Button>
    </div>
  );
}
