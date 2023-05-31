import { useState } from "react";
import Image from "next/image";

let id = 0;

interface AcceptedProps {
  Theme: {
    background: string;
    icon: string;
    heading: string;
    body: string;
    check: string;
  };
}

export default function Notes({ Theme }: AcceptedProps) {
  const bodyColor = 'bg-'+Theme.body;
  interface ChecklistInterface {
    checklistId: number;
    message: string;
    checked: false;
  }
  interface ChecklistInterfaces extends Array<ChecklistInterface> {}

  const [todo, setTodo] = useState<string>("");
  const [checklist, setChecklist] = useState<ChecklistInterfaces>([]);

  function addCheckList() {
    if (!todo) {
      window.alert("Try Entering List Item");
      return;
    }
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
  function moveMessage(listID: number) {
    checklist.map((list) => {
      setChecklist(checklist.filter((a) => a.checklistId !== list.checklistId));
    });
  }
  return (
    <div className="flex flex-col">
      <input
        className="text-black p-2 rounded-md mb-2"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Create a new todo..."
      />
      <button onClick={addCheckList}>Click Me</button>

      <ul>
        {checklist.map((list) => (
          <li
            className={`p-2 border-b-2 border-${bodyColor} rounded-md ${bodyColor} text-black flex justify-between items-center`}
            key={list.checklistId}
          >
            <button
              className={`rounded-full border-2 border-${bodyColor}`}
              onClick={() => checkMessage(list.checklistId, list.checked)}
            >
              <Image src={Theme.check} height={18} width={22} alt={"Checklist"} className={`${bodyColor}`} />
            </button>
            {list.message}
            <button onClick={removeCheckList}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
