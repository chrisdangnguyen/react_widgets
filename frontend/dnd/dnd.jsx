import React, { useState, useEffect } from 'react';
import {DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Column from './columns';
import dndData from './data';



const DragAndDrop = props => {
  const [state, setState] = useState(dndData);

  // useEffect(() => {
  //   const data = localStorage.getItem('task-items');
  //   if (data) {
  //     setState(JSON.parse(data))
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('task-items', JSON.stringify(state))
  // })

  

  const onDragEnd = result => {

    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    const start = state.columns[source.droppableId];
    const end = state.columns[destination.droppableId];

    if (start === end) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
  
      const newColumn = {
        ...start, 
        taskIds: newTaskIds
      };
  
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn
        },
      }
  
      setState(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const endTaskIds = Array.from(end.taskIds);
    endTaskIds.splice(destination.index, 0, draggableId);
    const newEnd = {
      ...end, 
      taskIds: endTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newEnd.id]: newEnd,
      },
    }

    setState(newState);
  }

  const onDragStart = () => {
    
  }

  const columnIndexItem = state.columnOrder.map((columnId, idx) => {
    const column = state.columns[columnId];
    const tasks = column.taskIds.map(taskId => state.tasks[taskId])

    return <Column key={column.id} tasks={tasks} column={column}/>
  });




  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
    >
      <div className='dnd-container'>
        {columnIndexItem}
      </div>
    </DragDropContext>
  )
}

export default DragAndDrop;