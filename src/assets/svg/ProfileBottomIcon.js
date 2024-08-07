import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ProfileBottomIcon(props) {
    return (
        <Svg
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M12.66 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 01-4.27-4.43C8.06 3.99 10.04 2 12.5 2a4.435 4.435 0 01.16 8.87zM7.66 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0z"
                stroke={props.stroke}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ProfileBottomIcon
