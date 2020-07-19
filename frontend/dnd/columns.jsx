import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import Task from './tasks';



const Column = props => {
  
  const getListStyle = (isDraggingOver) => ({
    transition: "background-color 0.3s ease",
    backgroundColor: isDraggingOver ? "lightblue" : "rgb(254, 177, 60)",
  });

  const taskList = props.tasks.map((task, idx) => {
    return <Task key={task.id} index={idx} task={task} />
  })

  return(
    <div className='column'>
      <h1 className='column-title'>{props.column.title}</h1>
      <Droppable
        droppableId={props.column.id}
      >
        {(provided, snapshot) => (
          <div className='column-container'
            {...provided.droppableProps} 
            ref={provided.innerRef} 
            style={getListStyle(
              snapshot.isDraggingOver
            )}
          >
            {taskList}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Column;