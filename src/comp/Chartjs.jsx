import { Bar } from '@reactchartjs/react-chart.js'
import dummy from "./dummydata/dummy.json"
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const Chartjs = (props) => {
    return (
        <div>
            <h1>Ini adalah {props.title}</h1>
            <Bar data={dummy} options={options} />
        </div>
    )
}

export default Chartjs
