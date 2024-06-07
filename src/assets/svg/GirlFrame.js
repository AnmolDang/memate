import * as React from "react"
import Svg, { Rect, Path, Defs, Pattern, Use, Image } from "react-native-svg"

const GirlFrame = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        {...props}
    >
        <Rect width={30} height={30} fill="url(#a)" rx={15} />
        <Path
            fill="#6ACD75"
            stroke="#fff"
            strokeWidth={2}
            d="M31 25a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        />
        <Defs>
            <Pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#b" transform="translate(0 -.176) scale(.00135)" />
            </Pattern>
            <Image
                id="b"
                width={740}
                height={1001}
            />
        </Defs>
    </Svg>
)
export default GirlFrame