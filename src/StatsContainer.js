import React from 'react'
import StatsItem from './StatsItem'
import _ from 'lodash'
import { uniqueCustomers, orderTotal } from './helperFunction'

const StatsContainer = (props) => {
    const { customers } = props
            const ordersCount  = customers.length

            // // HELPER Function
            // const uniqueCustomers = (customers) => {
            //         const result = _.uniqBy(customers, 'Phone')
            //         return result
            // }
    
            // // HELPER Function
            // const orderTotal = (customers) => {
            //         let sum = 0
            //         for(const cust of customers) {
            //             sum += cust.Amount
            //         }
            //         return sum
            // }
                       
            return (
                <div className="row mb-3">
                    <StatsItem count={ordersCount} text="Orders" />
                    <StatsItem count={orderTotal(customers)} text="Amount" />
                    <StatsItem count={uniqueCustomers(customers).length} text="Customers" />   
                </div>
            )
}

export default StatsContainer
