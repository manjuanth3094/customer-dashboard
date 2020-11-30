import React from 'react'
import { Chart } from 'react-google-charts' // 

const OrdersChart = (props) => {
    const { data } = props
    //console.log(data)

    const chartData = [
            ['No. of orders', 'Count of Customers'],                        
        ]

    for(const key in data) {
        chartData.push([key, data[key]])
    }
    
    return (
        <div>
            <Chart
                width={'650px'}
                height={'350px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={chartData}
                options={{
                    title: 'Order Distribution',
                }}               
            />
        </div>
    )
                }

export default OrdersChart
