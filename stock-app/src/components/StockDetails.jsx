import React from 'react'

function StockDetails(props) {
    return (
        <div className="companyInfo">
            <h3> <span>Company:</span>  {props.stock.name}({props.stock.name}) </h3>
            <h3> <span>LastPrice:</span>  {props.stock.lastPrice} </h3>
            <h3> <span>Change:</span>  {props.stock.change} </h3>
            <h3> <span>High:</span>  {props.stock.high} </h3>
            <h3> <span>Low:</span>  {props.stock.low} </h3>
            <h3> <span>open:</span>  {props.stock.open}</h3>


        </div>
    )
}

export default StockDetails