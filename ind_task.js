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

const l= [
  '1111111111111111',
  '2222222222222222',
  '3333333333333333',
  '4444444444444444',
  '5555555555555555',
  '6666666666666666',
  '7777777777777777',
  '8888888888888888',
  '9999999999999999'
];

function IndTask (props) {
  const l = props.list.map((item, index) =>
    <p key={index}>{item}</p>
  );
  const n = props.n;
  const len = l.length;
  const [curr, setCurr] = React.useState(n);

  function press() {
    setCurr((curr + n > len) ? len : curr + n);
  }

  return (
    <>
      {(curr < len) &&
        <>
          {l.slice(0, curr)}
          <input type = "button" value = "Показать еще" onClick={() => press()}/>
        </>
      }
      {(curr >= len) &&
        <>
          {l.slice(0, curr)}
        </>
      }
    </>
  );
}

root.render(<IndTask list={l} n={4} />);    