import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function Widget({ id, props }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
 transform: CSS.Transform.toString(transform),
  transition, 
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`text-xl text-center gap-4 rounded-lg cursor-pointer 4 w-full
       ${
         props === "green"
           ? "bg-green-400 h-8"
           : props === "pink"
           ? "bg-pink-400 h-8"
           : props === "fix"
           ? "bg-blue-300 h-40 col-span-2"
           : ""
       } 
      `}
      {...attributes}
      {...listeners}
    >
      {id}
    </div>
  );
}
