import _ from 'lodash'

// HELPER Function
export const uniqueCustomers = (customers) => {
    const result = _.uniqBy(customers, 'Phone')
    return result
}

// HELPER Function
export const orderTotal = (customers) => {
    let sum = 0
    for(const cust of customers) {
        sum += cust.Amount
    }
    return sum
}