import { Card } from "antd";
import type { pj } from "../App";
import Meta from "antd/es/card/Meta";
import { useState } from "react";

export default function Cartas({ pj }: { pj: pj }) {
  const [showCard, setShowCard] = useState(false);

  return !showCard ? (
    <Card
      hoverable
      style={{ width: 260, margin: 12 }}
      cover={
        <img
          className="w-full h-full"
          alt="example"
          src="https://i.pinimg.com/736x/18/b1/d0/18b1d0bce438a70fcccf4bffe87695cf.jpg"
        />
      }
      onClick={() => setShowCard(true)}
    ></Card>
  ) : (
    <Card
      hoverable
      style={{ width: 260, height: 460, margin: 12 }}
      cover={<img className="w-full h-80" alt="example" src={pj.img} />}
      onClick={() => setShowCard(false)}
    >
      <Meta
        className="truncate w-full h-40 "
        title={pj.name}
        description={
          <div className="h-28 overflow-y-auto text-sm">{pj.descripcion}</div>
        }
      />
    </Card>
  );
}
