import type { SVGProps } from 'react'
const SvgIconHome = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <mask
      id="icon-home_svg__a"
      width={21}
      height={22}
      x={2}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}
    >
      <path fill="#fff" fillRule="evenodd" d="M2 1h20.5v21.505H2z" clipRule="evenodd" />
    </mask>
    <g mask="url(#icon-home_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.717 15.291a2.18 2.18 0 0 1 2.184 2.17v3.075c0 .257.206.463.47.47h1.906c1.502 0 2.723-1.207 2.723-2.689V9.593c-.007-.51-.25-.99-.667-1.309L13.74 3.026a2.416 2.416 0 0 0-3.011.002L4.181 8.282A1.68 1.68 0 0 0 3.5 9.61v8.707c0 1.482 1.221 2.688 2.723 2.688h1.924a.486.486 0 0 0 .491-.479q0-.088.019-.17V17.46c0-1.189.974-2.16 2.169-2.169zm4.56 7.214h-1.924c-1.102-.026-1.952-.89-1.952-1.969V17.46a.677.677 0 0 0-.684-.669h-2.886a.677.677 0 0 0-.674.67v3.065q0 .113-.031.215a1.99 1.99 0 0 1-1.979 1.764H6.223C3.894 22.505 2 20.626 2 18.317V9.603A3.15 3.15 0 0 1 3.259 7.1l6.535-5.245a3.91 3.91 0 0 1 4.88-.002l6.582 5.25a3.16 3.16 0 0 1 1.244 2.48v8.734c0 2.31-1.894 4.188-4.223 4.188"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default SvgIconHome
