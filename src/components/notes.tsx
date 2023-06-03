import { useState } from "react";
import Image from "next/image";

let id = 0;

interface AcceptedProps {
  toggle: boolean;
  transition: string;
}

export default function Notes({ toggle, transition }: AcceptedProps) {
  const darkTheme = {
    background: "bg-v-dark-blue",
    icon: "/icon-sun.svg",
    heading: "text-v-light-gray-blue",
    body: "text-dark-gray-blue",
    border: "border-v-dark-gray-blue",
    check: "icon-check.svg",
    gradient: "from-bg-check-1 to-bg-check-2",
  };
  const lightTheme = {
    background: "bg-v-light-gray",
    icon: "/icon-moon.svg",
    heading: "text-v-light-gray-blue",
    body: "text-light-gray-blue",
    border: "border-light-gray-blue",
    check: "icon-cross.svg",
    gradient: "from-bg-check-1 to-bg-check-2",
  };
  const Theme = toggle ? lightTheme : darkTheme;

  interface ChecklistInterface {
    checklistId: number;
    message: string;
    checked: boolean;
  }
  interface ChecklistInterfaces extends Array<ChecklistInterface> {}

  const [todo, setTodo] = useState<string>("");
  const [checklist, setChecklist] = useState<ChecklistInterfaces>([]);
  const [active, setActive] = useState<string>('');

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
    id--;
  }
  function drag(ev: any) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  function drop(listItem: any) {
    listItem.preventDefault();
    let data = listItem.dataTransfer.getData("text");
    listItem.target.appendChild(document.getElementById(data));
  }
  function checkMessage(listID: number, checkMark: boolean) {
    const updateCheck = checklist.map((list) => {
      if (list.checklistId === listID) {
        return { ...list, checked: !checkMark };
      } else {
        return list;
      }
    });
    setChecklist(updateCheck);
  }
  function todoFilter() {
    const filterMap = checklist.map((list) => {

    })
  }
  function setActiveButton(event:any) {
    setActive(event.target.id);
  }
  function buttonClicks() {
    setActiveButton(event);
    todoFilter();
  }




  return (
    <div className="w-full flex flex-col">
      <input
        className={`text-lg p-4 rounded-md mb-2 ${Theme.background} ${Theme.body} ${Theme.border} ${transition}`}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Create a new todo..."
      />
      <button onClick={addCheckList}>Click Me</button>

      <ul onDrop={drop}>
        {checklist.map((list) => (
          <li
            draggable="true"
            className={`text-lg p-4 border-b-2 rounded-md ${Theme.background} ${Theme.body} ${Theme.border} flex justify-start items-center ${transition}`}
            key={list.checklistId}
          >
            <button
              className={`mr-6 rounded-full border-2 ${Theme.border} ${transition} w-[22px] h-[22px]`}
              onClick={() => checkMessage(list.checklistId, list.checked)}
            >
              <Image
                src={Theme.check}
                height={22}
                width={22}
                alt={"Checklist"}
                className={`${Theme.gradient} ${transition}
                object-fit ${list.checked}`}
              />
            </button>
            {list.message}
            <button onClick={removeCheckList}>X</button>
          </li>
        ))}
      </ul>
      <div className={`w-full flex justify-between p-4 ${Theme.background} ${Theme.body} ${Theme.border} rounded-md`}>
        <p>{checklist.length} items left </p>
        <p>
          <button onClick={setActiveButton} id="1" className={active === "1" ? "active p-2" : "px-2"}>All</button>
          <button onClick={setActiveButton} id="2" className={active === "2" ? "active p-2" : "px-2"}>Active</button>
          <button onClick={setActiveButton} id="3" className= {active === "3" ? "active p-2" : "px-2"}>Completed</button>
        </p>
        <p>
          <button>Clear Completed</button>
        </p>
      </div>
    </div>
  );
}
