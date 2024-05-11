import Card from "../Card/Card";

const Column = ({title}) => {
    return (          
    <div className="main__column column">
    <div className="column__title">
      <p>{title}</p>
    </div>
    <div className="cards">
  <Card category ="Web Design" title="Задача 1" data="30.10.23"/>
  <Card category ="Research" title="Задача 2" data="30.10.23"/>
  <Card category ="Copywriting" title="Задача 3" data="30.10.23"/>
    

    </div>
  </div>	  );
}
 
export default Column;