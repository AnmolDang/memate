import * as React from 'react';
import Svg, {Rect, Defs, Pattern, Use, Image} from 'react-native-svg';
const DummyUserIcon = props => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Rect width={40} height={40} rx={20} fill="url(#pattern0_5049_115)" />
    <Defs>
      <Pattern
        id="pattern0_5049_115"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use
          xlinkHref="#image0_5049_115"
          transform="translate(-0.25) scale(0.00108696)"
        />
      </Pattern>
      <Image
        id="image0_5049_115"
        width={1380}
        height={920}
      />
    </Defs>
  </Svg>
);
export default DummyUserIcon;