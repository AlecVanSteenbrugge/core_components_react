import { Badge } from '@acpaas-ui/react-components';

export function BadgeExamples() {
  return (
    <div className="u-margin">
      <h2>Badges</h2>
      <div className="u-margin">
        <Badge theme="primary" emphasis="low">
          2
        </Badge>
        <Badge theme="primary" emphasis="medium">
          3
        </Badge>
        <Badge ariaLabel="Four" theme="neutral" emphasis="medium">
          4
        </Badge>
      </div>
    </div>
  );
}

export default BadgeExamples;
