import { useDrag } from "react-dnd";
const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  cursor: "move",
  width: 100,
  height: 100
};
export const Element = function Element({ link, name }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId()
    })
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div
      ref={drag}
      role="image"
      style={{ ...style, opacity }}
      data-testid={`box-${name}`}
    >
      <img style={{ width: "100%", height: "100%" }} alt={name} src={link} />
    </div>
  );
};
