import React from 'react'
import Svg, { Path } from 'react-native-svg'

type IconProps = {
  color: string,
  height: number,
  width: number,
}

const Share = ({ color, height, width }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Path
      d="M21 12l-7-7v4C7 10 4 15 3 20c2.5-3.5 6-5.1 11-5.1V19l7-7z"
      fill={color}
    />
  </Svg>
)

export default Share
