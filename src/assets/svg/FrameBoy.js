import * as React from "react"
import Svg, { Rect, Path, Defs, Pattern, Use, Image } from "react-native-svg"

const FrameBoy = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        {...props}
    >
        <Rect width={50} height={50} fill="url(#a)" rx={25} />
        <Path
            fill="#6ACD75"
            stroke="#fff"
            strokeWidth={2}
            d="M44 45a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        />
        <Defs>
            <Pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#b" transform="translate(0 -.25) scale(.00135)" />
            </Pattern>
            <Image
                id="b"
                width={740}
                height={1110}
            />
        </Defs>
    </Svg>
)
export default FrameBoy