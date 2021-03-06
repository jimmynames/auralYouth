import React from 'react'
import styled from 'styled-components'
// import { Wrap } from '../../components/Wrap'

import * as Scroll from 'react-scroll'
let Element = Scroll.Element

const Footer = styled.footer`
  height: auto;
  background: black;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  ${'' /* padding-top: 60px; */}
  ${'' /* padding-bottom: 80px; */}
  ${'' /* background: ${props => props.theme.background}; */}
`

const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`

const H3 = styled.h3`
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  font-size: 28px;
  color: #FFFFFF;
  letter-spacing: -0.05px;
  margin: 0;

  @media (max-width:589px) {
    font-size: 24px;
  }
  @media (max-width:453px) {
    font-size: 22px;
  }
`
const P = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 22px;
  color: #FFFFFF;
  letter-spacing: -0.04px;
  text-align: center;
  margin: 0;

  @media (max-width:589px) {
    font-size: 20px;
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width:453px) {
    font-size: 18px;
  }
`

const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
`

const RowShared = (theme) => {
  return `
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 25px 0;

  &:first-child {
  margin-top: 0;
  }

  &:last-child {
  margin-bottom: 0;
  }

  @media (max-width: 600px) {
    margin: 20px 0;
  }
  `
}

const Row1 = styled.div`
  ${props => props.flex ? RowShared(props.theme) : null};
  position: relative;
  &:after {
    display: block;
    content: '';
    width: 100%;
    height: 2px;
    background: white;
    position: absolute;
    bottom: -16px;
    left: 0;
  }
`

const Row2 = styled.div`
  ${props => props.flex ? RowShared(props.theme) : null};
`

const Row3 = styled.div`
  ${props => props.flex ? RowShared(props.theme) : null};
`

const Row4 = styled.div`
  ${props => props.flex ? RowShared(props.theme) : null};
`

const ConnectCta = styled.a`
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        color: white;
        text-decoration: none;
        margin: 0 35px;
        transition: all .2s ease-in-out;

        svg {
          margin-right: 25px;
        }

        p {
          margin: 0;
          font-family: 'Lato', sans-serif;
          font-weight: 900;
          font-size: 20px;
          color: #FFFFFF;
          letter-spacing: -0.03px;
        }

        &:hover {
          transform: scale(1.02666);
        }
        &:active,
        &:focus {
          transform: scale(1);
          outline: none;
        }

        @media (max-width: 674px) {
          margin-top: 17.5px;
        }
`

const SocialCta = styled.div`
    margin: 0 13px;
    transition: all .2s ease-in-out;
    &:hover {
      transform: scale(1.23666);
    }
    &:active,
    &:focus {
      transform: scale(1);
      outline: none;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
`

export default class FooterComp extends React.Component {
  render () {
    return (
      <Element name="footer" id="footer">
      <Footer>
        <Wrap>
        <Column>
          <Row1 flex>
            <H3>Get in touch</H3>
          </Row1>
          <Row2 flex>
            <P>For more information on the services we offer get in touch by email or phone.</P>
          </Row2>
          <Row3 flex>
            <ConnectCta href="mailto:info@auralyouth.co.uk">
              <svg width="27px" height="17px" viewBox="0 0 27 17" version="1.1">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Home-page" transform="translate(-359.000000, -2323.000000)" fill="#FFFFFF" fill-rule="nonzero">
                          <g id="Group-7" transform="translate(0.000000, 2093.000000)">
                              <g id="Group-3" transform="translate(285.000000, 58.000000)">
                                  <g id="Group" transform="translate(74.000000, 168.000000)">
                                      <g id="Message" transform="translate(0.000000, 4.000000)">
                                          <path d="M0.642400583,0 L13.5000003,11.1365762 L26.3575841,0 L0.642400583,0 Z M0,1.08217553 L0,16.085054 L7.7663354,7.811346 L0,1.08217553 Z M27,1.08217553 L19.2336652,7.811346 L27,16.085054 L27,1.08217553 Z M8.70596611,8.61805866 L0.843750019,17 L26.15625,17 L18.2940345,8.61805866 L13.8931111,12.4351869 C13.6654426,12.6300495 13.334558,12.6300495 13.1068895,12.4351869 L8.70596611,8.61805866 Z" id="Shape"></path>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </g>
              </svg>
                <p>info@auralyouth.co.uk</p>
            </ConnectCta>

            <ConnectCta href="tel:+447595484005">
              <svg width="21px" height="21px" viewBox="0 0 21 21" version="1.1">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Home-page" transform="translate(-689.000000, -2322.000000)" fill="#FFFFFF">
                          <g id="Group-7" transform="translate(0.000000, 2093.000000)">
                              <g id="Group-3" transform="translate(285.000000, 58.000000)">
                                  <g id="Group-2" transform="translate(404.000000, 169.000000)">
                                      <g id="Phone" transform="translate(0.000000, 2.000000)">
                                          <path d="M5.40241953,1.63261739 L7.77708105,4.09931402 C8.44198627,4.66855171 8.44198627,5.80702708 7.77708105,6.37626476 L5.87735184,8.27372371 C7.20716228,11.1199121 9.96176964,13.8712276 12.716377,15.1045759 L14.6161062,13.207117 C15.2810114,12.5430063 16.3258625,12.5430063 16.9907677,13.207117 L19.3654292,15.5789407 C20.0303344,16.2430513 20.0303344,17.2866537 19.3654292,17.9507643 L16.9907677,20.322588 C12.8113635,24.4969977 -3.43132129,8.17885076 0.65309651,4.09931402 L3.02775802,1.63261739 C3.69266324,1.06337971 4.73751431,1.06337971 5.40241953,1.63261739 Z M11.8614988,1.2531256 C11.1016072,1.06337971 11.3865665,-0.169968609 12.2414447,0.0197772858 C16.5158354,1.15825265 19.8403615,4.57367876 20.9801991,8.8429614 C21.170172,9.60194497 19.935348,9.88656382 19.7453751,9.12758024 C18.700524,5.33266234 15.7559437,2.29672802 11.8614988,1.2531256 Z M11.1016072,4.19418697 C10.3417155,4.00444108 10.6266749,2.77109276 11.3865665,2.96083866 C14.6161062,3.81469518 17.1807406,6.37626476 18.0356188,9.60194497 C18.2255917,10.3609286 17.0857542,10.7404203 16.8007948,9.88656382 C16.0409031,7.13524834 13.8562145,4.95317055 11.1016072,4.19418697 Z" id="Shape"></path>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </g>
              </svg>
                <p>+44 (0) 759 548 4005</p>
            </ConnectCta>
          </Row3>

          <Row4 flex>
            <SocialCta>
              <a id="insta" target='_blank' rel='noopener' href="https://www.instagram.com/auralyouth/">
                <svg width="25px" height="25px" viewBox="0 0 25 25" version="1.1">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Home-page" transform="translate(-612.000000, -2393.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g id="Group-7" transform="translate(0.000000, 2093.000000)">
                                <g id="Group-3" transform="translate(285.000000, 58.000000)">
                                    <g id="Insta-logo" transform="translate(327.000000, 242.000000)">
                                        <g id="Group-6">
                                            <path d="M20.7141667,0 L4.28583333,0 C1.91888889,0 0,1.91888889 0,4.28583333 L0,20.7144444 C0,23.0811111 1.91888889,25 4.28583333,25 L20.7144444,25 C23.0811111,25 25,23.0811111 25,20.7141667 L25,4.28583333 C25,1.91888889 23.0811111,0 20.7141667,0 Z M8.67708139,10.3759956 C8.67871477,10.3732733 8.68062037,10.3702789 8.68279821,10.3670123 C8.73152729,10.2793571 8.78379535,10.1941519 8.83851347,10.1103078 C8.87063655,10.0610358 8.90466524,10.0136694 8.93869392,9.96575849 C8.97653382,9.91294761 9.01519041,9.86122562 9.05520814,9.81004807 C9.08950905,9.76594826 9.12299328,9.72184846 9.1591998,9.67938198 C9.22725717,9.59880456 9.29830907,9.52067713 9.37208326,9.44499969 C9.40801755,9.40824985 9.44585745,9.37286112 9.48315288,9.33720017 C9.53623763,9.28656706 9.5904113,9.23729506 9.64621834,9.18938416 C9.68351378,9.15726208 9.72026476,9.12486778 9.75864912,9.09383458 C9.84494587,9.024146 9.93423714,8.95717963 10.0257062,8.89402436 C10.0589182,8.87115779 10.0937636,8.84992456 10.1277923,8.82814687 C10.2002053,8.78105264 10.2739795,8.73613617 10.3493871,8.69312525 C10.3855936,8.67270868 10.4215279,8.65174766 10.4582789,8.63214775 C10.5630872,8.57688688 10.669529,8.52462045 10.778693,8.47779843 C10.8040103,8.46690959 10.8301444,8.4579263 10.8554617,8.4475819 C10.9491086,8.40947096 11.0441167,8.37462667 11.1410304,8.34304903 C11.1756036,8.33161575 11.2099045,8.32045469 11.2444776,8.31011029 C11.3648031,8.27417711 11.4862174,8.24178281 11.6103541,8.21619404 C11.6239655,8.21319961 11.6383937,8.21156628 11.6520052,8.20884407 C11.7660693,8.18624973 11.8820391,8.16937203 11.9988255,8.15576097 C12.0333987,8.15194988 12.0679718,8.14841101 12.1022727,8.14514435 C12.2334873,8.13316663 12.3660631,8.125 12.5002722,8.125 C12.6344814,8.125 12.7667849,8.13316663 12.8982717,8.14514435 C12.9325726,8.14841101 12.9671458,8.15194988 13.0014467,8.15576097 C13.1187776,8.1690998 13.2344751,8.18624973 13.3485393,8.20884407 C13.362423,8.21156628 13.3768512,8.21319961 13.3901904,8.21619404 C13.514327,8.24178281 13.6357414,8.27417711 13.7560668,8.31011029 C13.79064,8.32072691 13.8246687,8.33188797 13.8592418,8.34304903 C13.9561555,8.37489889 14.051708,8.4100154 14.1456272,8.44785412 C14.1712168,8.45819852 14.1968064,8.46690959 14.2215792,8.47779843 C14.3307433,8.52462045 14.4374572,8.57688688 14.5425378,8.63241997 C14.5787443,8.65147544 14.6144064,8.67216423 14.6503407,8.69230859 C14.7265649,8.73531951 14.8011558,8.78105264 14.8746578,8.8284191 C14.9075975,8.85019678 14.9418985,8.87061335 14.9742938,8.8932077 C15.0665796,8.95663519 15.1561431,9.02387378 15.2429843,9.0941068 C15.2805519,9.12459556 15.3167584,9.15644542 15.3532372,9.18802305 C15.4095887,9.23675061 15.4648513,9.28683928 15.5187527,9.33828905 C15.5552315,9.37340556 15.5925269,9.40770541 15.6273723,9.4439108 C15.7019632,9.51986047 15.7732873,9.59880456 15.8421613,9.68019864 C15.8772789,9.72157624 15.9102187,9.76485938 15.9437029,9.8078703 C15.9845374,9.86013673 16.0242829,9.91321983 16.0629395,9.96739181 C16.0964237,10.0142138 16.1299079,10.0610358 16.1614865,10.109219 C16.6112096,10.7968492 16.875,11.6173234 16.875,12.5001361 C16.875,14.9158254 14.9157644,16.875 12.5,16.875 C10.0836911,16.875 8.125,14.9158254 8.125,12.5001361 C8.12554446,11.7286618 8.32672205,11.0056428 8.67708139,10.3759956 Z M21.875,19.903098 C21.875,21.6827909 20.4869616,23.125 18.7750658,23.125 L5.59993424,23.125 C3.88776445,23.125 2.5,21.6827909 2.5,19.903098 L2.5,10.625 L5.47444636,10.625 C5.25963741,11.3261688 5.14209527,12.0726202 5.14209527,12.8472665 C5.14209527,16.8913758 8.29682771,20.1705219 12.1875,20.1705219 C16.0781723,20.1705219 19.2329047,16.8913758 19.2329047,12.8472665 C19.2329047,12.0723354 19.1153626,11.3261688 18.9005536,10.625 L21.875,10.625 L21.875,19.903098 Z M21.875,4.66659753 C21.875,4.85066888 21.7259281,5 21.5415975,5 L19.7084025,5 C19.5240719,5 19.375,4.85092813 19.375,4.66659753 L19.375,2.83340247 C19.375,2.64933112 19.5240719,2.5 19.7084025,2.5 L21.5415975,2.5 C21.7259281,2.5 21.875,2.64933112 21.875,2.83340247 L21.875,4.66659753 Z" id="Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
              </a>
            </SocialCta>

            <SocialCta>
              <a id="fb" target='_blank' rel='noopener' href='https://www.facebook.com/auralyouth/'>
                <svg width="25px" height="25px" viewBox="0 0 25 25" version="1.1">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Home-page" transform="translate(-663.000000, -2393.000000)" fill="#FEFEFE">
                            <g id="Group-7" transform="translate(0.000000, 2093.000000)">
                                <g id="Group-3" transform="translate(285.000000, 58.000000)">
                                    <g id="Insta-logo" transform="translate(327.000000, 242.000000)">
                                        <g id="Group-6">
                                            <path d="M52.3739611,0 C51.6149712,0 51,0.615064464 51,1.37396111 L51,23.5209456 C51,24.279749 51.6149712,24.895 52.3739611,24.895 L64.2971079,24.895 L64.2971079,15.2543263 L61.0528621,15.2543263 L61.0528621,11.4971536 L64.2971079,11.4971536 L64.2971079,8.72637865 C64.2971079,5.51095521 66.2609489,3.76006424 69.1293842,3.76006424 C70.5033453,3.76006424 71.6843176,3.86229515 72.0285074,3.90800058 L72.0285074,7.26837552 L70.0390155,7.26930829 C68.4790612,7.26930829 68.176939,8.01057569 68.176939,9.09836486 L68.176939,11.4971536 L71.8974541,11.4971536 L71.4129766,15.2543263 L68.176939,15.2543263 L68.176939,24.895 L74.5208523,24.895 C75.2795624,24.895 75.8948134,24.279749 75.8948134,23.5209456 L75.8948134,1.37396111 C75.8948134,0.615064464 75.2795624,0 74.5208523,0 L52.3739611,0 Z" id="Fill-1"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
              </a>
            </SocialCta>
          </Row4>
        </Column>
      </Wrap>
    </Footer>
    </Element>
    )
  }
}
