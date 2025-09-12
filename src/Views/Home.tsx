import { useState } from "react";
import type { pj } from "../App";
import Cartas from "../Components/Cartas";
import { Button } from "antd";

export default function Home({ pjs }: { pjs: pj[] }) {
  const [showAllCards, setShowAllCards] = useState(false);

  return showAllCards ? (
    <div className="w-full h-full flex flex-wrap items-center justify-center">
      {pjs.map((pj) => (
        <Cartas pj={pj} />
      ))}
    </div>
  ) : (
    <div className=" w-32 flex items-center justify-center h-full">
      <Button className="w-32" onClick={() => setShowAllCards(true)} block>
        Invocar
      </Button>
    </div>
  );
}
