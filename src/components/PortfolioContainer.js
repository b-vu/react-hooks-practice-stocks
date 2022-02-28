import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, handlePortfolioDelete }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolio.map(stock => <Stock key={stock.id} stock={stock} handlePortfolioDelete={handlePortfolioDelete} portfolioStatus={true}></Stock>)
      }
    </div>
  );
}

export default PortfolioContainer;
