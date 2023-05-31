import { useState } from "react";

let id = 0;

export default function Notes() {
  interface ChecklistInterface {
    checklistId: number;
    message: string;
    checked: false;
  }
  interface ChecklistInterfaces extends Array<ChecklistInterface> {}

  const [todo, setTodo] = useState<string>("");
  const [checklist, setChecklist] = useState<ChecklistInterfaces>([]);

  function addCheckList() {
    setChecklist([
      ...checklist,
      { checklistId: id++, message: todo, checked: false },
    ]);
  }
  function removeCheckList() {
    checklist.map((list) => {
      setChecklist(checklist.filter((a) => a.checklistId !== list.checklistId));
    });
  }
  function checkMessage(listID: number, checkMark: boolean) {
    checklist.map((list) => {
      if (list.checklistId === listID) {
        return { ...checklist, checked: !checkMark };
      } else {
        return checklist;
      }
    });
  }
  return (
    <div className="flex flex-col">
      <input
        className="text-black"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addCheckList}>Click Me</button>

      <ul>
        {checklist.map((list) => (
          <li className="mt-1" key={list.checklistId}>
            <button onClick={() => checkMessage(list.checklistId, list.checked)}>Checked</button>
            {list.message}
            <button onClick={removeCheckList}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
