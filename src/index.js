import './styles/index.scss';
import html from './index.html';


const taskRequest = {
  "id": "R0001",
  "name": "Task 01",
  "description": "Build up webpack request."
};

const taskInfor = {
  ...taskRequest,
  "status": "inprogress",
  "assignTo": "vu Tr."

};

console.log(taskRequest);
console.log(taskInfor);