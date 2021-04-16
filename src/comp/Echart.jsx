import ReactECharts from 'echarts-for-react';
import jsonDummy from "./dummydata/jsondummy.json"
const Echart = (props) => {
    const option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: jsonDummy
            }
        ]
    };
    
    return (
        <div>
            <h1>Ini adalah {props.title}</h1>
            <ReactECharts
                option={option}
                style={{ height: 400 }}
            />

        </div>
    )
}

export default Echart
