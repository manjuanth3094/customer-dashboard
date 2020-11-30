import React from 'react'

const CustomerTable = (props) => {
    const { customers, showDetails } = props

            return (
                <table className="table">
                    <thead>
                        <tr>
                            <th> Name </th>
                            <th> Phone </th>
                            <th> Show </th>
                        </tr>    
                    </thead>
                    <tbody>
                        {customers.map( customer => {
                            return (
                                <tr key={customer.Phone}>
                                    <td> {customer.Name} </td>
                                    <td> {customer.Phone} </td>
                                    <td> <button onClick={ () => {
                                            showDetails(customer)
                                          }} className="btn btn-primary">  Show </button> 
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )
}

export default CustomerTable
