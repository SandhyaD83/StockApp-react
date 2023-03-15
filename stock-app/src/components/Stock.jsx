import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import stocks from '../pages/data'
import StockDetails from './StockDetails'

function Stock(props) {
    const { symbol } = useParams();
    const companyStock = stocks.find(stock => stock.symbol === symbol)
    return <h3><StockDetails stock={companyStock} /></h3>

}

export default Stock