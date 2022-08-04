import React from 'react'
import './wheel/style.css'

const LuckyWheel = () => {
    return (
        <div style={{ backgroundColor: "tomato" }}>
            <link href="https://fonts.googleapis.com/css?family=Raleway:800" rel="stylesheet"></link>
            <div className="container">
                <div className="row">
                    <div className="luckywheel">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 730 730">

                            <g className="wheel">
                                <circle className="frame" cx="365" cy="365" r="347.6" />
                                <g className="sticks">
                                    <rect x="360.4" width="9.3" height="24.33" rx="4" ry="4" />
                                    <rect x="352.8" y="713.2" width="24.3" height="9.27" rx="4" ry="4" transform="translate(1082.8 352.8) rotate(90)" />
                                    <rect x="176.4" y="54.8" width="24.3" height="9.27" rx="4" ry="4" transform="translate(145.8 -133.6) rotate(60)" />
                                    <rect x="529.2" y="665.9" width="24.3" height="9.27" rx="4" ry="4" transform="translate(851.4 -133.6) rotate(60)" />
                                    <rect x="47.3" y="183.9" width="24.3" height="9.27" rx="4" ry="4" transform="translate(102.3 -4.5) rotate(30)" />
                                    <rect x="658.4" y="536.8" width="24.3" height="9.27" rx="4" ry="4" transform="translate(360.5 -262.7) rotate(30)" />
                                    <rect y="360.4" width="24.3" height="9.27" rx="4" ry="4" />
                                    <rect x="705.7" y="360.4" width="24.3" height="9.27" rx="4" ry="4" />
                                    <rect x="47.3" y="536.8" width="24.3" height="9.27" rx="4" ry="4" transform="translate(-262.7 102.3) rotate(-30)" />
                                    <rect x="658.4" y="183.9" width="24.3" height="9.27" rx="4" ry="4" transform="translate(-4.5 360.5) rotate(-30)" />
                                    <rect x="176.4" y="665.9" width="24.3" height="9.27" rx="4" ry="4" transform="translate(-486.4 498.6) rotate(-60)" />
                                    <rect x="529.2" y="54.8" width="24.3" height="9.27" rx="4" ry="4" transform="translate(219.2 498.6) rotate(-60)" />
                                </g>
                                <g className="sectors">
                                    <path id="_1" d="M365,365V35.9A328.1,328.1,0,0,0,200.5,80Z" transform="translate(0)" />
                                    <path id="_2" d="M365,365,529.5,80A328.1,328.1,0,0,0,365,35.9Z" transform="translate(0)" />
                                    <path id="_3" d="M365,365,650,200.5A328.5,328.5,0,0,0,529.5,80Z" transform="translate(0)" />
                                    <path id="_4" d="M365,365H694.1A328.1,328.1,0,0,0,650,200.5Z" transform="translate(0)" />
                                    <path id="_5" d="M365,365,650,529.5A328.1,328.1,0,0,0,694.1,365Z" transform="translate(0)" />
                                    <path id="_6" d="M365,365,529.5,650A328.5,328.5,0,0,0,650,529.5Z" transform="translate(0)" />
                                    <path id="_7" d="M365,365V694.1A328.1,328.1,0,0,0,529.5,650Z" transform="translate(0)" />
                                    <path id="_8" d="M365,365,200.5,650A328.1,328.1,0,0,0,365,694.1Z" transform="translate(0)" />
                                    <path id="_9" d="M365,365,80,529.5A328.5,328.5,0,0,0,200.5,650Z" transform="translate(0)" />
                                    <path id="_10" d="M365,365H35.9A328.1,328.1,0,0,0,80,529.5Z" transform="translate(0)" />
                                    <path id="_11" d="M365,365,80,200.5A328.1,328.1,0,0,0,35.9,365Z" transform="translate(0)" />
                                    <path id="_12" d="M365,365,200.5,80A328.5,328.5,0,0,0,80,200.5Z" transform="translate(0)" />

                                </g>
                                <g className="middle">
                                    <g id="shadow-1" opacity="0.2">
                                        <circle cx="368.5" cy="368.5" r="54.5" />
                                    </g>
                                    <g className="wheelMiddle">
                                        <circle cx="365" cy="365" r="54.5" fill="#fff" />
                                    </g>
                                    <circle id="middle-3" cx="365" cy="365" r="11.6" fill="#ccc" />
                                </g>
                            </g>
                            <g id="shadow-2" opacity="0.15">
                                <path d="M46.9,372.5c0-181.7,147.4-329,329.1-329A327.3,327.3,0,0,1,556.3,97.2,327.3,327.3,0,0,0,365,35.9C183.3,35.9,35.9,183.3,35.9,365c0,115.2,59.2,216.5,148.8,275.3C101.3,580.6,46.9,482.9,46.9,372.5Z" transform="translate(0)" />
                            </g>
                            <g className="active">
                                <g>
                                    <path d="M707,160.5c-11.4-17.9-35.8-22.8-54.5-11a41.7,41.7,0,0,0-13.6,14.1l-33.6,58.9a2.3,2.3,0,0,0,0,2.4,2.4,2.4,0,0,0,2.3,1.1l67.5-5.1a43.8,43.8,0,0,0,18.6-6.3C712.4,202.7,718.3,178.5,707,160.5Z" transform="translate(0)" fillOpacity="0.22" />
                                    <path className="winIndicator" d="M711.9,157.4a38.4,38.4,0,0,0-66,1.8l-31.5,57.5a2.1,2.1,0,0,0,0,2.4,2.6,2.6,0,0,0,2.2,1.2l65.6-3.9a39.6,39.6,0,0,0,17.9-5.9A38.5,38.5,0,0,0,711.9,157.4Z" transform="translate(0)" />
                                    <path d="M681.7,166.9a9.3,9.3,0,0,0-6.6,4.8l-.8,2.1a14.9,14.9,0,0,0-.2,2.1,8.8,8.8,0,0,0,1.1,4.2,9.2,9.2,0,0,0,2.9,3,7.6,7.6,0,0,0,2.9,1.3l1.1.2a8.6,8.6,0,0,0,4.2-.6,8.4,8.4,0,0,0,3.4-2.5,7.4,7.4,0,0,0,2-3.8,8.5,8.5,0,0,0-.1-4.2,8.4,8.4,0,0,0-2.1-3.8,7.4,7.4,0,0,0-3.5-2.3l-1-.3A12.2,12.2,0,0,0,681.7,166.9Z" transform="translate(0)" fill="#ccc" />
                                </g>
                            </g>
                        </svg>


                    </div>
                </div>
            </div>


            <div>
                <button id="btnPlay" style={{margin: "0 auto", display: "block"}} className="btn btn-primary">Start</button>
            </div>
            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
            <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js'></script>
            <script src="./wheel/script.js"></script>
        </div >
    )
}

export default LuckyWheel