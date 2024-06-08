import Card from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./column.style";




const Column = ({title, cardList}) => {
    return (          
    <MainColumn>
    <ColumnTitle>
      <p>{title}</p>
    </ColumnTitle>
    <Cards>
      {cardList.map(({id, topic, title, date})=>
(<Card key={id}  
topic ={topic} 
title={title} 
date={date}
id = {id}/>)
      )}

    </Cards>
  </MainColumn>	  );
}
 
export default Column;