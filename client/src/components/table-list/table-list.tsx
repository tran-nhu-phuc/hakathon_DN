import { useNavigate } from "react-router-dom";
import "./table-list.css";
import { useEffect } from "react";
const TableList = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetch = () => {
      try {
      } catch (error) {}
    };
    fetch();
  });
  return (
    <div className="table-list">
      <div className="box">
        <div className="header-table-list">
          <h1>Setup Quiz</h1>
        </div>
        <div className="number-question-table-list">
          <label>Number Of Question</label>
          <input type="number" placeholder="." />
        </div>
        <div className="category-table-list">
          <label>Category</label>
          <select>
            <option value={"history"}>food</option>
            <option value={"sport"}>sport</option>
            <option value={"literature"}>tourism</option>
          </select>
        </div>
        <div className="difficulty-table-list">
          <label>Difficulty</label>
          <select>
            <option value={1}>easy</option>
            <option value={2}>medium</option>
            <option value={3}>difficult</option>
          </select>
        </div>
        <div className="start-table-list">
          <button onClick={() => navigate("/details-question")}>Start</button>
        </div>
      </div>
    </div>
  );
};
export default TableList;
