import PropTypes from 'prop-types'
import React, { Component } from 'react'
import CreateTaskInput from './CreateTaskInput'
import Task from './Task'
import { createTask, deleteTask, fetchTasksList, updatedTasks } from './tasksGateway'

class TodoList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTask();
  }

  fetchTask = () => {
    fetchTasksList().then(taskList =>
      this.setState({
        tasks: taskList,
      }),
    );
  };

  onCreate = text => {
    const newId =
      this.state.tasks.length > 0 ? this.state.tasks[this.state.tasks.length - 1].id + 1 : 1;

    const newTask = {
      id: newId,
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTask());
  };

  handleTaskStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };

    updatedTasks(id, updatedTask).then(() => this.fetchTask());
  };

  handleTaskDelete = id => {
    deleteTask(id).then(() => this.fetchTask());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;

TasksList.propTypes = {
  tasks: PropTypes.array,
};
