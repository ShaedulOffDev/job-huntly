import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type CustomCheckboxProps = {
  label: string;
  checked?: boolean;
  name: string;
  onChange?: (checked: boolean) => void;
};

export default function CustomCheckbox({
  label,
  name,
  checked = false,
  onChange,
}: CustomCheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onChange && onChange(newChecked);
  };

  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
        name={name}
      />
      <span
        style={{ width: 20, height: 20, border: `2px solid ${isChecked ? '#4640DE' : "#ddd"}`}}
        className={`flex items-center text-center justify-center rounded text-white text-sm ${isChecked && "bg-primary"}`}
      >
        {isChecked && <FontAwesomeIcon icon={faCheck} />}
      </span>
      <span className="ml-1 text-gray-700">{label}</span>
    </label>
  );
}
