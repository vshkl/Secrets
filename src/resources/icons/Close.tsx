import React from 'react'
import Svg, { Path } from 'react-native-svg'

type IconProps = {
  color: string,
  height: number,
  width: number,
}

const Close = ({ color, height, width }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
      fill={color}
    />
  </Svg>
)

export default Close
