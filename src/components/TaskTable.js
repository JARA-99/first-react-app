import React from "react";

import TaskRow from "./TaskRow";

function TaskTable({ tasks, toggleTask, showCompleted = false }) {
  function taskTableRows(doneValue) {
    return tasks
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  }

  return (
    <table
      className="
      table 
      table-striped 
      table-dark 
      table-bordered 
      border-secondary"
    >
      <thead className="table-primary">
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
}

export default TaskTable;
