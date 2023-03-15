import React from 'react'
import stocks from '../pages/data'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (

        <div>
            <h1>Most Active Stocks</h1>
            <div className="headings">
                <h2>Company Name</h2>
                <h2>Price</h2>
                <h2>Change</h2>
            </div>
            <hr />
            {stocks.map((stock, key) => {
                return (
                    <Link key={key} to={`/stocks/${stock.symbol}`} >
                        <div className="stockList">
                            <h3 className="stockName">{stock.name}:{stock.symbol}</h3>
                            <h3 className="price">{stock.lastPrice}</h3>
                            <h3 className="change">{stock.change}</h3>
                        </div>

                        <hr />
                    </Link>

                )

            })

            }




        </div >
    )
}

export default Dashboard