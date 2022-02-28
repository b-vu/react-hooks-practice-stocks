import {React, useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sort, setSort] = useState(null);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(data => setStocks(data));
  }, []);

  const handlePortfolioAdd = stock => {
    for(const portfolioObj of portfolio){
      if(portfolioObj.id === stock.id){
        return;
      }
    }
    setPortfolio(portfolio => [...portfolio, stock]);
  }

  const handlePortfolioDelete = stockId => {
    const newPortfolio = portfolio.filter(stock => stock.id !== stockId);
    setPortfolio(newPortfolio);
  }

  const handleSortChange = sortType => {
    setSort(sortType);
  }

  const handleFilterChange = filterType => {
    setFilter(filterType);
  }

  return (
    <div>
      <SearchBar handleSortChange={handleSortChange} handleFilterChange={handleFilterChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handlePortfolioAdd={handlePortfolioAdd} sort={sort} filter={filter}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handlePortfolioDelete={handlePortfolioDelete}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
