import { useEffect, useState } from "react";
import Column from "../Column/Column";
const statusList = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];
const Main = ({ cardList }) => {
  const [isLoading, setLoading] = useState(true)
  useEffect (()=>{
    setTimeout (()=>{
      setLoading(false);
    },1000 )
  }, []);
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {isLoading === true && (<p>Идет загрузка...</p>)}
            {isLoading === false && statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cardList.filter((card) => card.status === status)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
