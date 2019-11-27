import React, { useState } from 'react'

export function FilterButton() {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <svg
      onClick={() => setIsClicked(!isClicked)}
      width="28px"
      height="34px"
      viewBox="0 0 28 34"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M19.03475,32.0045 L22.58025,34.815 L22.58025,26.4678333 C22.58025,26.1635 22.65375,25.8646667 22.79025,25.597 L30.31525,11 L11.62525,11 L18.83875,25.6263333 C18.96825,25.8866667 19.03475,26.1763333 19.03475,26.4678333 L19.03475,32.0045 Z M24.33025,40.3333333 C23.9575,40.3333333 23.58475,40.2086667 23.275,39.9611667 L16.2295,34.3786667 C15.792,34.0321667 15.53475,33.4913333 15.53475,32.9175 L15.53475,26.9151667 L7.196,10.0081667 C6.91425,9.43983333 6.937,8.75966667 7.2555,8.21333333 C7.57225,7.667 8.13925,7.33333333 8.75,7.33333333 L33.25,7.33333333 C33.866,7.33333333 34.4365,7.6725 34.75325,8.228 C35.06825,8.78166667 35.08225,9.46916667 34.79,10.0375 L26.08025,26.9316667 L26.08025,38.5 C26.08025,39.1948333 25.70575,39.831 25.11075,40.1408333 C24.864,40.2691667 24.59625,40.3333333 24.33025,40.3333333 L24.33025,40.3333333 Z"
          id="path-1"
        ></path>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Home-screen" transform="translate(-35.000000, -51.000000)">
          <g id="Background" transform="translate(-0.500000, 0.000000)">
            <g id="funnel" transform="translate(28.500000, 44.000000)">
              <mask id="mask-2" fill="white">
                <use xlinkHref="#path-1"></use>
              </mask>
              <use
                id="🎨-Icon-Сolor"
                fill={isClicked ? 'red' : '#6B6B6B'}
                fillRule="evenodd"
                xlinkHref="#path-1"
              ></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
