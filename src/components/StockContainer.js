import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handlePortfolioAdd, sort, filter }) {
  const sortStocks = (stocksToSort = stocks) => {
    const sortedStocks = [...stocksToSort];
    if(sort === "Alphabetically"){
      return sortedStocks.sort((a, b) => a.name.localeCompare(b.name));
    }
    else{
      return sortedStocks.sort((a, b) => b.price - a.price);
    }
  }

  const filterStocks = () => {
    const filteredStocks = [...stocks];

    return filteredStocks.filter(stock => stock.type === filter)
  }

  const renderStocks = stocksToRender => {
    return stocksToRender.map(stock => <Stock key={stock.id} stock={stock} handlePortfolioAdd={handlePortfolioAdd}></Stock>)
  }

  return (
    <div>
      <h2>Stocks</h2>
      {sort && filter ? renderStocks(sortStocks(filterStocks())) : sort ? renderStocks(sortStocks()) : filter ? renderStocks(filterStocks()) : renderStocks(stocks)}
    </div>
  );
}

export default StockContainer;
