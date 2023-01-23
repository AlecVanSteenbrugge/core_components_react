import { Checkbox } from '@acpaas-ui/react-components';
import { ChangeEvent, useState } from 'react';

export function CheckboxExamples() {
  const [firstChecked, setFirstChecked] = useState(false);
  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstChecked(e.target.checked);
  };
  return (
    <div className="u-margin-bottom">
      <h2>Checkboxes</h2>
      <Checkbox name="checkbox" id="check-1" label="Controlled" onChange={onCheckboxChange} checked={firstChecked} />
      <Checkbox name="checkbox" id="check-2" label="Controlled no onChange" checked={true} />
      <Checkbox name="checkbox" id="check-3" label="Indeterminate" indeterminate />
      <Checkbox name="checkbox" id="check-4" label="Uncontrolled" />
      <Checkbox name="checkbox" id="check-5" label="Disabled unchecked" disabled />
      <Checkbox name="checkbox" id="check-6" label="Disabled indeterminate" disabled indeterminate />
      <Checkbox name="checkbox" id="check-7" label="Disabled checked" disabled checked />
    </div>
  );
}

export default CheckboxExamples;
