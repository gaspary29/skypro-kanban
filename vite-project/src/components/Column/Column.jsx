import Card from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./column.style";

const Column = ({ title, taskList }) => {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>  
      <Cards>
        {taskList.map(({card}) => (
          <Card key={card._id} topic={card.topic} title={card.title} date={card.date} id={card._id} />
        ))}
      </Cards>
    </MainColumn>
  );
};

export default Column;
