import React, { Component } from 'react' 
import './Footer.css'

// Footer Component is charged of rendering the Footer of the application
// Files used are Footer.css
// fontawesome npm package is used to render 2 icons at the very bottom their class is className="social-icons" 
//  Fontawesome documentation here https://github.com/FortAwesome/react-fontawesome 
// href have currently no link, the only external links are the twitter icons and github icons that link to the designated SNS
// The only security issue that can encountered is due to opening an external window when clicking on the SNS icons
// It's currently solved using rel = "noopener noreferrer" 
// See ref about those issue with rel here https://web.dev/external-anchors-use-rel-noopener/

// further stylin optimisation can be done, there is overstyling in some classes.

// Bootstrap component are not imported in this Component, a pre made footer has been used, converted from html to JSX.
// If changed for Bootstrap modules Modal should be used
class Footer extends Component {
    render() {
        return(
            <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <h6>About</h6>
                    <p className="text-justify">
                    Currex.com is your go to Currency converter. 
                    Our conversions are done in real time to give you the most precise results.
                    Find 33 currencies represented in our easy conversion application.
                    Currex is commited to give you the most faultless results in a fraction of a second. 
                    </p>
                </div>
                <div className="col-xs-6 col-md-3">
                  <h6>Categories</h6>
                  <ul className="footer-links">
                    <li><a href="#">Currencies</a></li>
                    <li><a href="#/">Download</a></li>
                    <li><a href="#">Android</a></li>
                    <li><a href="#">iOS</a></li>
                    <li><a href="#">Trades</a></li>
                    <li><a href="#">Statistics</a></li>
                  </ul>
                </div>
                <div className="col-xs-6 col-md-3">
                  <h6>Quick Links</h6>
                  <ul className="footer-links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#de.com/contribute-at-scanfcode/">Contribute</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Sitemap</a></li>
                  </ul>
                </div>
              </div>
              <hr />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                  <p className="copyright-text">Copyright © 2020 All Rights Reserved by 
                    <a href="#"> Currex</a>.
                  </p>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <ul className="social-icons">
                    <li><a className="twitter" href="https://twitter.com/ArthurDav3" target = "_blank" 
                          rel = "noopener noreferrer"><i className="fa fa-twitter" /></a></li>
                    <li><a className="github" href="https://github.com/ArthurDav" target = "_blank" 
                          rel = "noopener noreferrer"><i className="fa fa-github" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}

export default Footer