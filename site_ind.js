import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const list = [
  {subj: 'Математика', 
  discr: `Подготовим к сдаче профильной или базовой математики,
  минимальная длительность курса: 6 месяцев.`},
  {subj: 'Информатика', 
  discr: `Интенсивный курс по подготовке к ЕГЭ по информатике на 90+.
  Минимальная длительность курса: 3 месяца.`},
  {subj: 'Физика', 
  discr: `Наши ученики стабильно сдают ЕГЭ по физике на 85+ баллов!
  Минимальная длительность курса: 9 месяцев.`},
]

function Pics(props){
  return (
    <div>
      <img src={props.link}/>
    </div>
  );
}

function List(props){
  const [d, setD] = React.useState({
    id: 0,
    discr: ""
  });
  const [isOpen, setOpen] = React.useState(false);

  const press = (event) => {
    setOpen(!isOpen);
    let n = event.target.id;
    let di = props.list[Number(n)].discr;
    
    setD({
      id: Number(n),
      discr: di
    });
  };

  return(
    <div class="b">
      <ul type="none" class="body">
        {props.list.map((value, index) => 
        <li id={index} onClick={press} className={(isOpen && d.id == index) ? "open" : ""}>
          {value.subj}
        </li>)}
      </ul>
      {isOpen &&
        <p>{d.discr}</p>
      }
      {!isOpen &&
        <></>
      }
    </div>
  )
}

function All () {
  return (
    <div class="all">
      <h1>Подготовка к ЕГЭ</h1>
      <Pics link="books1.jpg"/>
      <List list={list} />
    </div>
  );
}

root.render(
  <All />
)
