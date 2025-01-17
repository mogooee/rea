import type { SVGProps } from 'react'
const SvgEmojiLockedPen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path fill="url(#emoji-locked-pen_svg__a)" d="M0 0h16v16H0z" />
    <defs>
      <pattern
        id="emoji-locked-pen_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#emoji-locked-pen_svg__b" transform="scale(.01389)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="emoji-locked-pen_svg__b"
        width={72}
        height={72}
      />
    </defs>
  </svg>
)
export default SvgEmojiLockedPen
