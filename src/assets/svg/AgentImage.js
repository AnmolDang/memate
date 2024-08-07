import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";

const AgentImage = () => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
    >
        <Rect width={240} height={160} y={0.342} fill="url(#a)" rx={16} />
        <Defs>
            <Pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#b" transform="scale(.00072 .00109)" />
            </Pattern>
            <Image
                id="b"
                width={1380}
                height={920}
            />
        </Defs>
    </Svg>
)
export default AgentImage;