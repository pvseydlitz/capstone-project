import styled from 'styled-components/macro'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Bookmark(props) {
  const Bookmark = styled.svg`
    position: absolute;
    top: -15px;
    right: 31px;
  `
  const color = props.color
  const [isBookmarked, setIsBookmarked] = useState(false)
  return (
    <Bookmark
      onClick={() => setIsBookmarked(!isBookmarked)}
      width="26px"
      height="34px"
      viewBox="0 0 26 34"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M21.6723833,28.4274833 C21.9822167,28.4274833 22.2938833,28.5063167 22.5743833,28.6639833 L31.1672167,33.52415 L31.1672167,9.77881667 C31.1672167,9.41031667 30.9453833,9.16648333 30.80055,9.16648333 L13.20055,9.16648333 C13.0538833,9.16648333 12.8338833,9.41031667 12.8338833,9.77881667 L12.8338833,33.4288167 L20.7282167,28.68965 C21.0197167,28.5154833 21.34605,28.4274833 21.6723833,28.4274833 M11.00055,38.4998167 C10.6888833,38.4998167 10.3772167,38.4209833 10.0967167,38.2614833 C9.52288333,37.9369833 9.16721667,37.3264833 9.16721667,36.6664833 L9.16721667,9.77881667 C9.16721667,7.41931667 10.9767167,5.49981667 13.20055,5.49981667 L30.80055,5.49981667 C33.0243833,5.49981667 34.8338833,7.41931667 34.8338833,9.77881667 L34.8338833,36.6664833 C34.8338833,37.31915 34.4873833,37.9223167 33.92455,38.2504833 C33.3598833,38.5804833 32.6668833,38.5859833 32.09855,38.2633167 L21.6998833,32.3819833 L11.9428833,38.2394833 C11.6532167,38.4118167 11.3268833,38.4998167 11.00055,38.4998167"
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
        <g id="Home-screen" transform="translate(-338.000000, -140.000000)">
          <g id="Card" transform="translate(20.000000, 135.000000)">
            <g id="bookmark" transform="translate(309.000000, 0.000000)">
              <mask id="mask-2" fill="white">
                <use xlinkHref="#path-1"></use>
              </mask>
              <use
                id="🎨-Icon-Сolor"
                fill={isBookmarked ? 'red' : '#6B6B6B'}
                fillRule="evenodd"
                xlinkHref="#path-1"
              ></use>
            </g>
          </g>
        </g>
      </g>
    </Bookmark>
  )
}

Bookmark.propTypes = {
  color: PropTypes.string,
}
