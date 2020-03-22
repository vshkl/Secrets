import React from 'react'
import Svg, { Path } from 'react-native-svg'

type IconProps = {
  color: string,
  height: number,
  width: number,
}

const Plus = ({ color, height, width }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24">
    <Path
      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
      fill={color}
    />
  </Svg>
)

export default Plus
