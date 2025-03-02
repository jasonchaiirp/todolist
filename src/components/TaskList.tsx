type TaskListProps = {
    tasks: string[];
    onDelete: (index: number) => void;
  };
  
  export default function TaskList({ tasks, onDelete }: TaskListProps) {
    return (
      <ul className="w-100 mt-4 bg-black shadow-md p-2 rounded-lg">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center py-1 border-b">
            <span>{task}</span>
            <button
              onClick={() => onDelete(index)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }