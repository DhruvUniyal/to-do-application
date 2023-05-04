import './App.css'
import React, { useState } from "react";
// import { Textfit } from 'react-textfit';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import { Container } from "react-bootstrap";

function App() {
  const[taskList, setTaskList] = useState([{task: ""}]);

  const handleClick = () => {
    setTaskList([...taskList, {task: ""}])
    {console.log(taskList)}
  };

  const handleChange = (e, index) => {
    const {name,value} = e.target;
    const list = [...taskList];
    list[index][name] = value;
    setTaskList(list);
  };

  const handleRemove = (index) => {
    const list = [...taskList];
    list.splice(index,1);
    setTaskList(list);
  }

  return (
    <div className="App">
      <div className = 'note-wrap'>
          {taskList.map((taskname,index) => (
            <Container>
              <Card className='mb-3'>
                <Card.Body max={16}>{taskList[index].task}</Card.Body>
                {taskList.length > 1 && (<Button variant='danger' type="button" onClick={() => handleRemove(index)}>Remove Note</Button>)}
              </Card>
            </Container>
          ))}
      </div>
      {taskList.map((taskname,index) => (
        <div>
        {taskList.length - 1 === index && (
          <div className = 'add-note'>
            <Container fluid>
              <Form>
                <Form.Group>
                  <Form.Control type="text" id="text-box" name="task" value={taskname.task} onChange={(e) => handleChange(e,index)} />
                  <Button id = "submit-btn" onClick={(e) => handleClick(e,index)}>Add note</Button>
                </Form.Group>
              </Form>
            </Container>
          </div>
          )
        }
        </div>
      ))
    }
    </div>
  );
}

export default App;
