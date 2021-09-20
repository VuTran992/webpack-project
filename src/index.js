import './styles/index.scss';
import Image from './media/banner.jpg';
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

document.body.appendChild(carousel());
console.log(taskRequest);
console.log(taskInfor);