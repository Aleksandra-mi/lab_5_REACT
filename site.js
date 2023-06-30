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

  
const listProf= [
  {prof: "Web-разработчиков",
  discr: `Создают сложные и очень сложные сайты. Продумывают, чтобы
  пользователям было быстро и удобно.`},
  {prof: "Гейм-девелоперов",
  discr: `Создают видеоигры. Погружают всех нас в новые миры.`},
  {prof: "AI/ML-cпециалистов",
  discr: `Используют в деле искусственный интеллект и машинное
  обучение. Фактами и прогнозами делает бизнесу хорошо.`},
  {prof: "Аналитиков данных",
  discr: `С помощью чисел решают, куда двигаться компаниям. Помогают
  бизнесу получать еще больше денег.`},
  {prof: "Мобильных разработчиков",
  discr: `Создают мобильные приложения, которые найдут тебя везде.
  Умещают на маленьких экранах максимальный функционал.`}
]
const listStudy= [
  {prof: "Программная инженерия",
  discr: `Компьютерные программы стали очень большими и сложными. Для их эффективной разработки и поддержки стало недостаточно традиционных подходов. Возникла потребность в специалистах, способных не только проектировать, кодировать и тестировать программные средства, но и оптимизировать процессы разработки программ`},
  {prof: "Прикладная информатика в компьютерном дизайне",
  discr: `Научишься делать красивое: игры, оболочку мобильных и веб-приложений, а ещё анимации и 3D-модели для роликов и даже фильмов!`},
  {prof: "Искусственный интеллект и анализ данных",
  discr: `Новая образовательная программа запускается с 2023 года совместно с факультетом вычислительной математики и кибернетики МГУ имени М. В. Ломоносова.`}
]

const listImg = ["logo_dvfu.png", "logo_imct.png"]

/*Передаем в качестве пропса список с рисунками*/
function Head(props) {
  const logoImages = listImg.map((img, index) =>
    <img key={index} src={img} />
  );
  return(
    <div className="head">
      {logoImages}
    </div>
  )
}

function Tagline() {
  return(
    <h1>
      Хватит уже игр, <br/> пора <br/> разрабатывать и зарабатывать
    </h1>
  )
}

function Button(props) {
  return (
    <a href={"#" + props.scroll}>
      <input className="button" type="button" value={props.val}/>
    </a>
  )
}

function ProfItem(props) {
  const [isOpen, setOpenClose] = React.useState(false);
  const press = () => {
    setOpenClose(!isOpen);
  }
  return(
    <li onClick={press}>
      <span className="left">{props.prof}</span>
      <span className="right">{(isOpen)? "×" : "+"}</span>
      {isOpen &&
      <p> {props.discr}</p>
      }
    </li>
  )
}

function Professions (props) {
  const listProf = props.list.map((item, index) =>
    <ProfItem key={index} prof={item.prof} discr={item.discr} />
  );
  
  return (
    <div className="prof">
      <h2>{props.title} </h2>
      <ul>
        {listProf}
      </ul>
    </div>
  )
}

function Study(props){
  const listProf = props.list.map((item, index) =>
    <ProfItem key={index} prof={item.prof} discr={item.discr} />
  );
  
  return (
    <div id="scroll" className="prof">
      <h2>{props.title} </h2>
      <ul>
        {listProf}
      </ul>
    </div>
  )
}

function Content() {
  return(
    <>
      <Head listImg={listImg} />
      <Tagline/>
      <Button val="Хочу учиться!" scroll="scroll"/>
      <Professions title="Обучаем на:" list={listProf} />
      <Study title="Выбирай программу:" list={listStudy}/>
    </>
    )
}
root.render(<Content />)