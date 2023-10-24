import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../ui/atoms/Button";
import { Text } from "../../ui/atoms/Text";
import { MouseEventHandler } from "react";

// npm i --save-dev @types/uuid

export const Generator = () => {
  // const state = useState(uuidv4()); // [currentValue, setNewValue]
  const [id, setId] = useState(uuidv4()); // [currentValue, setNewValue]

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setId(uuidv4());
    // console.log(id);
  };

  return (
    <div>
      <Text>{id}</Text>
      <Button onClick={handleClick} label="Refresh" />
    </div>
  );
};
