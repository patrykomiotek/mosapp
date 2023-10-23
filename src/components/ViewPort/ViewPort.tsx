import { useViewPort } from "../../hooks/useViewPort";

export const ViewPort = () => {
  const size = useViewPort();
  return (
    <div>
      <p>
        X: {size.x}, Y: {size.y}
      </p>
    </div>
  );
};
