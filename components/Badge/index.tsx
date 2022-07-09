import { BadgeType } from './style';

interface IBadge {
  label: string;
  backgroundColor: string;
  width: string;
}

const Badge: React.FC<IBadge> = ({
  label,
  backgroundColor,
  width = 'inherit',
}: IBadge) => {
  return (
    <BadgeType
      style={{
        backgroundColor: backgroundColor,
        width: width,
      }}>
      {label}
    </BadgeType>
  );
};

export default Badge;
