import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      // var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home" >

      <nav id="nav-wrap" >

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
         <br/>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
         <br/>
      
         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            {/* <li><a className="smoothscroll" href="#about">Timeline</a></li> */}
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner"  >
         <div className="banner-text"style={{color: "#FFFFFF"}}>
            <h1 className="responsive-headline"style={{color: "#FFFFFF"}}>I'm {name}.</h1>
            <h3 style={{ color: "white", textShadow: "2px 2px 4px black" }}>
  <span>{occupation}</span>. {description}.
</h3>

            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
