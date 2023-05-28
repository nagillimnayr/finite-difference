import './style/style.css';
import Chart from 'chart.js/auto';
import range from './utils/range';

const main = () => {
  const app = document.createElement('div');
  app.id = 'app';
  document.body.appendChild(app);

  // canvas holder div
  const canvasHolder = document.createElement('div');
  canvasHolder.id = 'canvasHolder';
  // canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas';

  // append canvas to app
  canvasHolder.appendChild(canvas);
  app.appendChild(canvasHolder);

  const sq = (x: number) => {
    return x * x;
  };

  const xAxis: number[] = range(-5, 5, 0.1);

  const chart = new Chart(canvas, {
    type: 'line',
    data: {
      labels: xAxis,
      datasets: [
        {
          label: 'f(x) = x^2',
          data: xAxis.map((x) => sq(x)),
        },
      ],
    },
  });
};
window.addEventListener('load', main);
