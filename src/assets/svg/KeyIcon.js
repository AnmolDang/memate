import * as React from "react"
import Svg, { Path } from "react-native-svg"

const KeyIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
        <Path
            stroke="#ADADB4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
            d="M4.21 14.93a7.575 7.575 0 0 0 7.6 1.87l4.71 4.7c.34.35 1.01.56 1.49.49l2.18-.3c.72-.1 1.39-.78 1.5-1.5l.3-2.18c.07-.48-.16-1.15-.49-1.49l-4.7-4.7c.8-2.6.18-5.55-1.88-7.6-2.95-2.95-7.74-2.95-10.7 0-2.96 2.95-2.96 7.76-.01 10.71ZM17.11 17.49l-2.3 2.3"
        />
        <Path
            stroke="#ADADB4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.5 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
        />
    </Svg>
)
export default KeyIcon
