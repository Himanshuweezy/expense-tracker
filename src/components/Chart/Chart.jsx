import { ChartBar } from './ChartBar';
import './Charts.css';
export const Chart = (props) => {
    const maxMonth=props.dataPoints.map(dp=>dp.value).reduce((a,b)=>a>b?a:b);
   
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={maxMonth}
                        label={dataPoint.label}
                    />
                );
            })}
        </div>
    );
};
