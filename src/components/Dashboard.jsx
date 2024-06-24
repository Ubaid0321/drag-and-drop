import React, { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  rectSwappingStrategy
} from "@dnd-kit/sortable";
import { Widget } from "./sortableComponent/Widget";
import predefineOrder from "./customArrayMove/predefineOrder";

const widgetsInitialValue = [
  { id: "1", order: 1 - 1, type: "green" },
  { id: "2", order: 2 - 1, type: "pink" },
  { id: "3", order: 3 - 1, type: "green" },
  { id: "4", order: 4 - 1, type: "pink" },
  { id: "5", order: 5 - 1, type: "fix" },
  { id: "6", order: 6 - 1, type: "green" },
  { id: "7", order: 7 - 1, type: "pink" },
  { id: "8", order: 8 - 1, type: "green" },
  { id: "9", order: 9 - 1, type: "pink" },
  { id: "10", order: 10 - 1, type: "green" },
  { id: "11", order: 11 - 1, type: "pink" },
];

function Dashboard() {
  const [widgets, setWidgets] = useState(widgetsInitialValue);
  const sortedWidgets = widgets.sort((a, b) => a.order - b.order);
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeIndex = widgets.findIndex((widget) => widget.id === active.id);
    const overIndex = widgets.findIndex((widget) => widget.id === over.id);

    if (activeIndex !== overIndex) {
      setWidgets((prevWidgets) => {
        const newWidgets = predefineOrder(prevWidgets, activeIndex, overIndex);
        return newWidgets.map((widget, index) => ({ ...widget, order: index }));
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <SortableContext
          items={sortedWidgets}
          strategy={rectSwappingStrategy}
        >
          {sortedWidgets.map((widget, index) => (
            <Widget
              key={widget.id}
              id={widget.id}
              props={widget.type}
              fixed={widget.type}
            />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
}

export default Dashboard;
