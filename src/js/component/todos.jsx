import React, { useState } from "react";

export const Todo = () => {
  const [listTodos, setListTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const deleteTodo = (indiceTarea) => {
    setListTodos((prevState) => {
      return prevState.filter((item, index) => {
        return index !== indiceTarea;
      });
    });
  };

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
        {listTodos.length > 0 ? (
          listTodos.map((tarea, index) => {
            return (
              <>
                <li
                  className="list-group-item d-flex justify-content-between"
                  key={index}
                >
                  {tarea}

                  <button
                    className="btn btn-light"
                    onClick={(e) => {
                      deleteTodo(index);
                    }}
                  >
                    <i className="fa fa-times"></i>
                  </button>
                </li>
              </>
            );
          })
        ) : (
          <>No hay tareas pendientes</>
        )}
      </ul>
    </div>
  );
};
