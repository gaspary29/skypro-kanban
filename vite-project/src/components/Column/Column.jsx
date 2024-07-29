import Card from "../Card/Card";
import { Cards, ColumnTitle, MainColumn, ColumnText } from "./column.style";

const Column = ({ title, taskList }) => {
  return (
    <MainColumn>
      <ColumnTitle>
      <ColumnText>{title}</ColumnText>
      </ColumnTitle>  
      <Cards>
        {taskList.map((card) => (
          <Card 
          key={card._id}
          topic={card.topic}
          title={card.title}
          date={card.date}
          id={card._id} />
        ))}
      </Cards>
    </MainColumn>
  );
};

export default Column;
