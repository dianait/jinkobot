/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Emoji from 'components/Emoji';
import { GradientText } from './style';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Title({ text, emoji, label, size }) {
  return (
    <GradientText>
      <Emoji symbol={emoji} label={label} size={size} />
      {text}
    </GradientText>
  );
}
