import "./App.css";
import Home from "./Views/Home";
export type pj = {
  id: number;
  name: string;
  valor: number;
  descripcion: string;
  img?: string;
};

function App() {
  const pjs: pj[] = [
    {
      id: 1,
      name: "Asta",
      valor: 700,
      descripcion:
        "Protagonista, huérfano sin magia que obtiene un grimorio de antimagia.",
      img: "https://i.pinimg.com/736x/ba/25/70/ba25700fc4a944adc015eef18984c344.jpg",
    },
    {
      id: 2,
      name: "Yuno",
      valor: 750,
      descripcion:
        "Huérfano prodigio, rival y hermano adoptivo de Asta, elegido por el grimorio de 4 tréboles.",
      img: "https://i.pinimg.com/1200x/83/23/77/8323772f68b71675a9a7d01848655e77.jpg",
    },
    {
      id: 3,
      name: "Yami Sukehiro",
      valor: 800,
      descripcion:
        "Capitán del escuadrón Toro Negro, usuario de magia de oscuridad.",
      img: "https://i.pinimg.com/736x/fa/16/c1/fa16c1a347bd34e62ed60843e170f1ed.jpg",
    },
    {
      id: 4,
      name: "Noelle Silva",
      valor: 720,
      descripcion:
        "Noble del clan Silva, controla la magia de agua, miembro de los Toros Negros.",
      img: "https://i.pinimg.com/1200x/27/f3/56/27f35607e86462048399a2f774248d03.jpg",
    },
    {
      id: 5,
      name: "Charmy Pappitson",
      valor: 650,
      descripcion:
        "Maga del Toro Negro con magia de algodón y un gran apetito.",
      img: "https://i.pinimg.com/736x/5d/e9/31/5de9319a8f63ab5e2a18954b0877227a.jpg",
    },
    {
      id: 6,
      name: "Luck Voltia",
      valor: 680,
      descripcion: "Mago eléctrico del Toro Negro, obsesionado con las peleas.",
      img: "https://i.pinimg.com/1200x/d3/37/8e/d3378e17f87a8c918a442e0db01b62b4.jpg",
    },
    {
      id: 7,
      name: "Magna Swing",
      valor: 640,
      descripcion:
        "Usuario de magia de fuego, leal al Toro Negro y con actitud rebelde.",
      img: "https://i.pinimg.com/1200x/0f/17/fc/0f17fc431932a5f44a587f8e6a9ed7ee.jpg",
    },
    {
      id: 8,
      name: "Vanessa Enoteca",
      valor: 710,
      descripcion:
        "Maga del Toro Negro que maneja hilos mágicos, famosa por su destino de bruja.",
      img: "https://i.pinimg.com/736x/b4/f2/53/b4f253092722e970471234bd46dafff5.jpg",
    },
    {
      id: 9,
      name: "Gauche Adlai",
      valor: 670,
      descripcion:
        "Mago del Toro Negro que usa espejos, muy protector con su hermana Marie.",
      img: "https://i.pinimg.com/1200x/ef/be/00/efbe004e7b66081b7404aa35a840db41.jpg",
    },
    {
      id: 10,
      name: "Julius Novachrono",
      valor: 900,
      descripcion:
        "Emperador Mago, maestro de la magia del tiempo y protector del reino del Trébol.",
      img: "https://i.pinimg.com/736x/b3/5d/9b/b35d9b3d2a5ce26da72581b6e1998db3.jpg",
    },
  ];

  return (
    <div className="relative w-full h-full min-h-screen flex items-center justify-center bg-indigo-950 overflow-hidden">
      <img
        className="w-full h-full min-h-screen object-cover opacity-16 absolute inset-0"
        src="https://i.pinimg.com/736x/32/6a/ec/326aec7f325df4d3edeede1f7a905b19.jpg"
        alt="background"
      />
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <Home pjs={pjs} />{" "}
      </div>
    </div>
  );
}

export default App;
