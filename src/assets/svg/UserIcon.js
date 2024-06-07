import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";

const UserIcon = (props) => (
    <Svg
        width={121}
        height={120}
        viewBox="0 0 121 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <Rect
            x={0.5}
            width={120}
            height={120}
            rx={60}
            fill="url(#pattern0_2076_2119)"
        />
        <Defs>
            <Pattern
                id="pattern0_2076_2119"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <Use
                    xlinkHref="#image0_2076_2119"
                    transform="translate(-0.25) scale(0.00108696)"
                />
            </Pattern>
            <Image
                id="image0_2076_2119"
                width={1380}
                height={920}
            />
        </Defs>
    </Svg>
);
export default UserIcon;