import React, { Component } from 'react';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import css from './Todos.module.css';

class Todos extends Component {
  state = {
    todos: [{ message: 'Do your homework', checked: false, id: 1 }],
    message: '',
    showEditModal: false,
  };

  editTodoMessage = e => {
    this.setState({ message: e.target.value });
  };

  saveTodo = () => {};

  openModal = () => {
    this.setState({ showEditModal: true });
  };

  closeModal = () => {
    this.setState({ showEditModal: false });
  };

  checkTodo =
    id =>
    ({ target: { checked } }) => {
      this.setState(({ todos }) => ({
        todos: todos.map(todo =>
          todo.id === id ? { ...todo, checked } : todo
        ),
      }));
    };

  render() {
    const { todos, message, showEditModal } = this.state;
    return (
      <div className={css.todos_container}>
        {todos.map(({ message, checked, id }) => (
          <div className={css.todo_item}>
            <p>{message}</p>
            <div className={css.todo_done_label}>
              <label>
                <input
                  type="checkbox"
                  checked={checked}
                  name={checked}
                  onChange={this.checkTodo(id)}
                />
                Done
              </label>
            </div>
            <div className={css.todo_buttons}>
              <Button error>Delete</Button>
              <Button onClick={this.openModal}>Edit</Button>
            </div>
          </div>
        ))}
        {showEditModal && (
          <Modal onClose={this.closeModal}>
            <h3>Edit Todo</h3>
            <textarea
              name="message"
              value={message}
              onChange={this.editTodoMessage}
              multiple
              className={css.input_message_area}
            />
            <div>
              <Button error onClick={this.closeModal}>
                Cancel
              </Button>
              <Button success onClick={this.saveTodo}>
                Save
              </Button>
            </div>
          </Modal>
        )}
        <div className={css.add_todo_button} onClick={this.openModal}>
          <Button>Add Todo</Button>
        </div>
      </div>
    );
  }
}

export default Todos;
