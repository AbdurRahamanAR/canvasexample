import React from "react";
import { useDrop } from "react-dnd";
import { Layer, Rect, Stage } from "react-konva";

function Canvas() {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));
  const isActive = canDrop && isOver;

  return (
    <Stage
      ref={drop}
      role="Dustbin"
      style={{ border: "2px solid red" }}
      width={300}
      height={200}
    >
      <Layer>
        <Rect width={50} height={50} fill="red" />
      </Layer>
    </Stage>
  );
}

export default Canvas;
