import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <a href="#about" className="navigation-links-link">
          {props.text}
        </a>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-link {
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-link {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  text2: 'Pricing',
  text4: 'Blog',
  text1: 'Features',
  text: 'About',
  text3: 'Team',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks
