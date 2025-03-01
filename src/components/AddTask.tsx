import { useState } from 'react';

type AddTaskProps = {
  onAdd: (text: string) => void;
};

export const AddTask = ({ onAdd }: AddTaskProps) => {
    const [task, setTask] = useState("");

    const handleAddTask = () => {
        if (task.trim() !== "") {
        onAdd(task);
        setTask("");
        }
    };

    return (
        <div className="flex gap-2">
        <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && handleAddTask()}
            className="border p-2 flex-grow"
            placeholder="Enter a task..."
          />
          <button 
            onClick={handleAddTask} 
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      );
    }
