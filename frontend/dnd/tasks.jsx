import React from "react";
import styled from 'styled-components';
import { Draggable } from "react-beautiful-dnd";


const Task = (props) => {
  
  const getItemStyle = ( isDragging, draggableStyle) => ({
    backgroundColor: isDragging ? 'lightgreen' : 'cornsilk',
    ...draggableStyle
  })
  

  return(
    <Draggable
      draggableId={props.task.id}
      index={props.index}
    >
      {(provided, snapshot) => (
        <div className='task-container' 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          {props.task.content}
        </div>
      )}
    </Draggable>
  )

};

export default Task;