import { Route, Routes } from "react-router-dom";
import TableList from "../components/table-list/table-list";
import DetailQuestion from "../components/detail-question/detail-question";

const RouterLink = () => {
  return (
    <Routes>
      <Route path="/" index element={<TableList />} />
      <Route path="/details-question" element={<DetailQuestion />} />
    </Routes>
  );
};
export default RouterLink;
