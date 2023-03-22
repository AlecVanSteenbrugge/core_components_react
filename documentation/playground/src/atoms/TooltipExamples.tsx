import { Tooltip } from '@a-ui/react';
import { useEffect, useState } from 'react';

export function TooltipExamples() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return (
    <div className="u-margin">
      <h2>Tooltips</h2>
      <div className="u-margin">
        <Tooltip
          text={`Test tooltip ${count}`}
          anchorId="tooltip-1"
          anchor={<span>Example text that has tooltip on BOTTOM of it</span>}
        ></Tooltip>
      </div>
      <Tooltip
        location="right"
        text="Test tooltip"
        anchorId="tooltip-2"
        anchor={<span>Example text that has tooltip RIGHT of it</span>}
      ></Tooltip>
      <div style={{ overflow: 'hidden', height: '100px', width: '400px', border: '1px solid black' }}>
        <Tooltip
          text="Test tooltip"
          anchorId="tooltip-5"
          anchor={
            <p>
              this is an example when parent element has hidden overflow but tooltip should still show on top of that
            </p>
          }
        ></Tooltip>
        <div style={{ marginLeft: '150px' }}>
          <Tooltip
            location="left"
            text="Test tooltip"
            anchorId="tooltip-3"
            anchor={<span>Example text that has tooltip LEFT of it</span>}
          ></Tooltip>
        </div>
        <Tooltip
          location="right"
          text="Test tooltip"
          anchor={<span>Example text that has tooltip RIGHT of it</span>}
        ></Tooltip>
        <div style={{ overflow: 'hidden', height: '100px', width: '400px', border: '1px solid black' }}>
          <Tooltip
            text="Test tooltip"
            anchorId="tooltip-4"
            anchor={
              <p>
                this is an example when parent element has hidden overflow but tooltip should still show on top of that
              </p>
            }
          ></Tooltip>
        </div>
      </div>
    </div>
  );
}

export default TooltipExamples;
