import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Enerlon Corp.</title>
          <meta
            name="description"
            content="Elevate comfort and efficiency with our HVAC repair, maintenance, and retrofit services. Specializing in energy-efficient solutions for commercial and institutional spaces. Partner with us for expert electrical services and smart building solutions."
          />
          <meta property="og:title" content="Enerlon Corp." />
          <meta
            property="og:description"
            content="Elevate comfort and efficiency with our HVAC repair, maintenance, and retrofit services. Specializing in energy-efficient solutions for commercial and institutional spaces. Partner with us for expert electrical services and smart building solutions."
          />
        </Head>
        <header data-role="Header" className="home-header">
          <Link href="/">
            <a className="home-link">
              <img
                alt="logo"
                src="/enerlon_logo_new-1500h-1500h.png"
                className="home-image"
              />
            </a>
          </Link>
          <div className="home-nav">
            <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav1">
              <div className="home-container01">
                <Link href="/">
                  <a className="home-link1">
                    <img
                      alt="image"
                      src="/enerlon_logo_new-1500h-1500h.png"
                      className="home-image1"
                    />
                  </a>
                </Link>
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName18"></NavigationLinks>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-container02">
          <div className="home-container03">
            <h1 className="home-text">
              <span className="home-text01">
                Commercial &amp; Institutional Energy Services
              </span>
              <br></br>
            </h1>
          </div>
        </div>
        <img
          alt="image"
          src="/enerlon_logo_new-1500h-1500h.png"
          className="home-image2"
        />
        <div className="home-container04">
          <div className="home-container05">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M298 86h428l-172 340h172l-300 512v-384h-128v-468z"></path>
            </svg>
            <h1 className="home-text03">
              <span>Energy Services</span>
              <br></br>
            </h1>
            <span className="home-text06">
              Get control of your energy usage. Our free system review will tell
              you exactly where you are spending your energy dollars and
              recommend enhancements to provide increased comfort and security
              all while reducing your energy costs
            </span>
          </div>
          <div className="home-container06">
            <svg viewBox="0 0 1024 1024" className="home-icon12">
              <path d="M682 554q56 0 122 16t122 52 56 82v106h-256v-106q0-88-84-148 14-2 40-2zM342 554q56 0 122 16t121 52 55 82v106h-598v-106q0-46 56-82t122-52 122-16zM342 470q-52 0-90-38t-38-90 38-90 90-38 89 38 37 90-37 90-89 38zM682 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38z"></path>
            </svg>
            <h1 className="home-text07">
              <span>Interoperable Systems</span>
              <br></br>
            </h1>
            <span className="home-text10">
              We specialize in building interoperable systems that can be
              serviced and upgraded by any solution provider. Say good bye to
              proprietary systems and service lock in
            </span>
          </div>
          <div className="home-container07">
            <svg viewBox="0 0 1024 1024" className="home-icon14">
              <path d="M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z"></path>
            </svg>
            <h1 className="home-text11">
              <span>Repair</span>
              <br></br>
            </h1>
            <span className="home-text14">
              We provide expert repair for systems that we install or for
              systems you may have had installed by other contractors. Whether
              it is broken or you just need monthly maintenance, we have a
              solution that fits your needs
            </span>
          </div>
        </div>
        <div className="home-container08"></div>
        <div className="home-container09">
          <h1 className="home-text15">
            <span>For over 20 years...</span>
            <br></br>
          </h1>
          <span className="home-text18">
            <span>
              EnerLon has provided installation, repair, maintenance, and
              retrofit of air conditioning and refrigeration systems, variable
              speed drives, lighting controls, and the tools, training, and
              expertise to implement interoperable networks of intelligent
              devices.
            </span>
            <br></br>
            <br></br>
            <span>
              In addition to traditional HVACR and electrical services, we
              provide training, and integration services focusing on
              interoperable ANSI 709.1 LonWorks technology control systems. Our
              objective is to design energy intelligence into every operational
              aspect of a smart building.
            </span>
            <br></br>
            <br></br>
            <span>
              Our customers include commercial and institutional end users,
              mechanical/electrical contractors, controls distributors, and OEM
              manufacturers.
            </span>
            <br></br>
            <br></br>
          </span>
        </div>
        <div className="home-container10">
          <h1 className="home-text28">Our Solutions Keep the Planet Green</h1>
        </div>
        <div id="about" className="home-container11">
          <div className="home-container12">
            <div className="home-container13">
              <h1 className="home-text29">About Us</h1>
              <span className="home-text30">
                EnerLon is a California Corporation licensed in air
                conditioning, refrigeration, electrical, and general building
                classifications. We make buildings smart
              </span>
            </div>
            <div className="home-container14">
              <h1 className="home-text31">Contact</h1>
              <span className="home-text32">
                <span>info@enerlon.com</span>
                <br></br>
                <span>888-Enerlon</span>
                <br></br>
                <span>(888) 363-7566</span>
                <br></br>
                <span>License # 405965</span>
                <br></br>
                <span>Certifications: B, C10, C20, C38, ASB</span>
              </span>
            </div>
          </div>
        </div>
        <div className="home-container15">
          <div className="home-container16">
            <span className="home-text42"> Copyright (c) Enerlon Corp.</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .home-link {
            display: contents;
          }
          .home-image {
            height: 3rem;
            text-decoration: none;
          }
          .home-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: flex;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-link1 {
            display: contents;
          }
          .home-image1 {
            height: 2rem;
            text-decoration: none;
          }
          .home-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 1;
            align-items: center;
            justify-content: center;
          }
          .home-container03 {
            width: 100%;
            height: 380px;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: url('/hero2a-1500w.jpg');
            background-position: center;
            background-attachment: fixed;
          }
          .home-text {
            top: 100px;
            left: 0px;
            right: 0px;
            margin: auto;
            position: absolute;
            font-size: 3.5em;
            font-style: normal;
            text-align: center;
            font-family: 'PT Sans';
            font-weight: 400;
          }
          .home-text01 {
            color: var(--dl-color-gray-white);
          }
          .home-image2 {
            width: 200px;
            display: none;
            object-fit: cover;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 70%;
            display: flex;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .home-container05 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            padding-bottom: 16px;
            justify-content: flex-start;
          }
          .home-icon10 {
            fill: #465497;
            width: 53px;
            height: 59px;
            margin: var(--dl-space-space-halfunit);
          }
          .home-text03 {
            margin: var(--dl-space-space-oneandhalfunits);
            font-size: 1.5em;
            font-style: normal;
            font-family: 'PT Sans';
            font-weight: 400;
          }
          .home-text06 {
            font-size: 1em;
            text-align: center;
            font-family: 'PT Sans';
            line-height: 2;
          }
          .home-container06 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-icon12 {
            fill: #465497;
            width: 53px;
            height: 59px;
            margin: var(--dl-space-space-halfunit);
          }
          .home-text07 {
            margin: var(--dl-space-space-oneandhalfunits);
            font-size: 1.5em;
            font-style: normal;
            text-align: center;
            font-family: 'PT Sans';
            font-weight: 400;
          }
          .home-text10 {
            font-size: 1em;
            text-align: center;
            font-family: 'PT Sans';
            line-height: 2;
          }
          .home-container07 {
            flex: 1;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-icon14 {
            fill: #465497;
            width: 53px;
            height: 59px;
            margin: var(--dl-space-space-halfunit);
          }
          .home-text11 {
            margin: var(--dl-space-space-oneandhalfunits);
            font-size: 1.5em;
            font-style: normal;
            font-family: 'PT Sans';
            font-weight: 400;
          }
          .home-text14 {
            font-size: 1em;
            text-align: center;
            font-family: 'PT Sans';
            line-height: 2;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: 380px;
            display: flex;
            align-items: flex-start;
            background-size: cover;
            background-image: url('/modern-office-design-1500w.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-attachment: fixed;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 70%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .home-text15 {
            font-style: normal;
            font-family: 'PT Sans';
            font-weight: 400;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text18 {
            font-size: 1em;
            font-family: 'PT Sans';
            line-height: 2;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 100%;
            height: 380px;
            display: flex;
            align-items: center;
            background-size: cover;
            justify-content: center;
            background-image: url('/green1-1500w.png');
            background-repeat: no-repeat;
            background-position: bottom;
            background-attachment: fixed;
          }
          .home-text28 {
            color: var(--dl-color-gray-white);
            font-size: 3em;
            font-style: normal;
            font-family: 'PT Sans';
            font-weight: 400;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            justify-content: center;
            background-color: #212121;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 75%;
            height: 100%;
            display: flex;
            justify-content: space-between;
          }
          .home-container13 {
            width: 60%;
            height: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: 0px;
            padding-top: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-text29 {
            color: var(--dl-color-gray-white);
            font-size: 1.5em;
            font-style: normal;
            font-family: 'PT Sans';
            font-weight: 400;
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text30 {
            color: var(--dl-color-gray-white);
            font-size: 1em;
            font-family: 'PT Sans';
            line-height: 2;
          }
          .home-container14 {
            width: 40%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text31 {
            color: var(--dl-color-gray-white);
            font-size: 1.5em;
            font-style: normal;
            font-family: 'PT Sans';
            font-weight: 400;
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text32 {
            color: var(--dl-color-gray-white);
            font-size: 1em;
            font-style: normal;
            font-family: 'PT Sans';
            font-weight: 400;
            line-height: 1.5;
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 100%;
            height: 30px;
            display: flex;
            align-items: center;
            padding-left: 0px;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-container16 {
            flex: 0 0 auto;
            width: 70%;
            height: auto;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .home-text42 {
            color: var(--dl-color-gray-white);
            font-family: 'PT Sans';
            padding-left: 0px;
          }
          @media (max-width: 991px) {
            .home-container04 {
              width: 90%;
            }
          }
          @media (max-width: 767px) {
            .home-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-nav {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-container04 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .home-header {
              padding: var(--dl-space-space-unit);
            }
            .home-image {
              display: none;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-text {
              font-size: 2em;
            }
            .home-text01 {
              color: var(--dl-color-gray-white);
              font-size: 1.5em;
            }
            .home-image2 {
              width: 250px;
              display: flex;
              padding-top: var(--dl-space-space-twounits);
            }
            .home-container04 {
              width: 90%;
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-container09 {
              width: 90%;
            }
            .home-text28 {
              color: var(--dl-color-gray-white);
              font-size: 2em;
              font-style: normal;
              text-align: center;
              font-family: PT Sans;
              font-weight: 400;
            }
            .home-container11 {
              flex-direction: row;
            }
            .home-container12 {
              width: 90%;
              flex-direction: column;
            }
            .home-container13 {
              width: 100%;
              padding: var(--dl-space-space-unit);
              margin-right: 0px;
            }
            .home-text30 {
              width: 100%;
            }
            .home-container14 {
              width: 100%;
              padding: var(--dl-space-space-unit);
            }
            .home-container16 {
              padding-left: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
