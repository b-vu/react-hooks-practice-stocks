import React from "react";

function Stock({ stock, handlePortfolioAdd, handlePortfolioDelete, portfolioStatus = false }) {
  const { id, ticker, name, type, price } = stock;

  const onPortfolioClick = () => {
    if(portfolioStatus){
      handlePortfolioDelete(id);
    }
    else{
      handlePortfolioAdd(stock);
    }
  }

  return (
    <div>
      <div className="card" onClick={() => onPortfolioClick()}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
