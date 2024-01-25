import Answer from "./answer";
import Category from "./category";
import Questions from "./question";

const createTable = () => {
  Questions.sync().then(() => {
    console.log("question create table ok");
  });
  Answer.sync().then(() => {
    console.log("answer create table ok");
  });
  Category.sync().then(() => {
    console.log("category create table ok");
  });
};
export default createTable;
