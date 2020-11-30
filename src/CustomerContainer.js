import React, { useState } from 'react'
import CustomerTable from './CustomerTable'
import { uniqueCustomers, orderTotal } from './helperFunction'

const CustomerContainer = (props) => {
    const { customers } = props
            const [ term, setTerm ] = useState('')

            const onlyUniqueCustomers = uniqueCustomers(customers)

            const showDetails = (customer) => {
                const customerOrders = customers.filter( c => c.Phone === customer.Phone)
                const customerOrderTotal =orderTotal(customerOrders)
            }

            return (
                <div>
                    <h2> Listing Customers - {onlyUniqueCustomers.length} </h2>    
                    <CustomerTable customers={onlyUniqueCustomers} showDetails={showDetails} />
                </div>
            )
}

export default CustomerContainer
