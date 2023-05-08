
import '../style.css';
import  msg from '../img/mail.png'
import user from '../img/user.png'
import header_logo from '../img/header-logo.png'
import ksa from '../img/ksa.png'
import usa from '../img/usa.png'
import call from '../img/call.png'
const Navbar = () => {
    return(
        <div className="app-template__header">
            <div className="styles__Styles-sc-4zrfhp-0 laztMg">
                <header className="header">
                    <div className='header_top'>
                        <div className='container content'>
                            <div className='css-rfnosa'>
                               <div className='css-1d3bbye'>
                                   <div className='css-u3q3zq'>
                                   </div>
                                       <div className='css-1q2jn5f navbar-expand'>
                                           <div className='topbar_email'>
                                               <img src={msg} alt='not found'/>
                                               <a href="/#">info@example.com</a>
                                           </div>
                                       </div>
                                   <div className='css-1abayas'>
                                        <div className='topbar_login_section'>
                                            <img src={user} alt='' />
                                            <a href='/#'>Login</a>
                                             <span> / </span>
                                            <a href='/#'>Register </a>
                                        </div>
                                   </div>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav">
                        <div lang="en" className="styles__Styles-sc-14zwmw5-0 iDqAIY">
                            <div className="nav_container">
                                <div className="content_nav container ">
                                    <div className="logo_section">
                                        <a href="/">
                                        <img src={header_logo} alt="logo"/>
                                    </a>
                                    </div>
                                    <div className='rightSide'>
                                        <div className='nav_list'>
                                            <ul>
                                                <li className="false"><a className="current__page" href="/">Home</a>
                                                               </li>
                                                               <li className="false"><a className="false" href="/services">Services</a>
                                                               </li>
                                                               <li className="false"><a className="false" href="/property">Property</a>
                                                                </li>
                                                                <li className="false"><a className="false" href="/blogs">Blogs</a></li>
                                                                <li className="false"><a className="false" href="/project">Projects</a>
                                                               </li>
                                                               <li className="false">
                                                                   <a className='false' href="/about_us">
                                                                   <div className='dropdown'>
                                                                       <button className='dropbtn'>
                                                                           AboutAs
                                                                           <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge menuArrow css-6flbmm" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon">
                                                                               <path d="m7 10 5 5 5-5z"></path>
                                                                           </svg>
                                                                       </button>
                                                                       <div className='dropdown-content'>
                                                                           <a href="/#">About As</a>
                                                                           <a href="/#">Contact AS</a>
                                                                           <a href="/#">FAQ</a>
                                                                       </div>
                                                                   </div></a>
                                                               </li>
                                                                  <li className="false">
                                                                   <a className='false' href="/about_us">
                                                                   <div className='dropdown'>
                                                                       <button className='dropbtn'>
                                                                           <img src={usa} alt="" style={{width:"30",height:"30px"}} />
                                                                           <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge menuArrow css-6flbmm" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon">
                                                                               <path d="m7 10 5 5 5-5z"></path>
                                                                          </svg>
                                                                       </button>
                                                                       <div className='dropdown-content_flag'>
                                                                           <a href="/#">  <img src={usa} alt=""  style={{width:"30",height:"30px"}} /></a>
                                                                           <a href="/#">  <img src={ksa} alt=""  style={{width:"30",height:"30px"}} /></a>
                                                                       </div>
                                                                   </div></a>
                                                               </li>
                                                        <li className='false'>
                                                         <a className='false' href='/'>
                                                       <div className="callUs">
                                                              <a href="/#" className="animation-rotate-border btn-call">
                                                               <img src={call} alt="call" />
                                                           </a>
                                                       </div>
                                                   </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='responsive'>
                                        <div className="logo_section">
                                            <a href="/">
                                                <img src={header_logo} alt="logo"/>
                                            </a>
                                        </div>
                                        <ul>
                                            <li className="false">
                                                <a className='false' href="/about_us">
                                                    <div className='dropdown'>
                                                        <button className='dropbtn'>
                                                            <img src={usa} alt=""
                                                                 style={{width: "30", height: "30px"}}/>
                                                            <svg
                                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge menuArrow css-6flbmm"
                                                                focusable="false" aria-hidden="true"
                                                                viewBox="0 0 24 24" data-testid="ArrowDropDownIcon">
                                                                <path d="m7 10 5 5 5-5z"></path>
                                                            </svg>
                                                        </button>
                                                        <div className='dropdown-content_flag'>
                                                            <a href="/#"> <img src={usa} alt=""
                                                                              style={{width: "30", height: "30px"}}/></a>
                                                            <a href="/#"> <img src={ksa} alt=""
                                                                              style={{width: "30", height: "30px"}}/></a>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className='false'>
                                                <a className='false' href='/'>
                                                    <div className="callUs">
                                                        <a href="/#" className="animation-rotate-border btn-call">
                                                            <img src={call} alt="call"/>
                                                        </a>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>

                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Navbar;