import * as React from "react";
import Svg, { Path } from "react-native-svg";

const AddressIcon = () => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none">
        <Path
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M9.25 11.325h5.5M12 14.075v-5.5"
        />
        <Path
            stroke="#fff"
            strokeWidth={1.5}
            d="M3.62 8.815c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z"
        />
    </Svg>
)
export default AddressIcon
