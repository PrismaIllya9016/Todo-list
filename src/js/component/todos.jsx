import React, { useState } from "react";

export const Todo = () => {
  const [listTodos, setListTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const deleteTodo = ()=>{

  }

  return (
    <div className="card">
      <input
        placeholder="Escribe una Tarea"
        type="text"
        onKeyUp={(e) => {
          if (e.keyCode == "13") {
            let arrAux = listTodos.slice();
            arrAux.push(e.target.value);
            setListTodos(arrAux);
          }
        }}
      />
      <ul>
        {listTodos.length>0 ? listTodos.map((tarea, index) => {
          return (
            <>
              <li className="list-group-item d-flex justify-content-between" key={index}>
                {tarea}
              </li>
              <button className="btn btn-light"
              >Eliminar tarea</button>
            </>
          );
        }): <>No hay tareas pendientes</>
    }
      </ul>
    </div>
  );
};
