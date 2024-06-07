import * as React from "react"
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg"

const ChatGirl = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="none"
        {...props}
    >
        <Rect width={40} height={40} fill="url(#a)" rx={20} />
        <Defs>
            <Pattern
                id="a"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <Use xlinkHref="#b" transform="matrix(.00109 0 0 .00109 -.25 0)" />
            </Pattern>
            <Image
                id="b"
                width={1380}
                height={920}
            />
        </Defs>
    </Svg>
)
export default ChatGirl