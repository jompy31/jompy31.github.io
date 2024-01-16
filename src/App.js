import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Timeline from './Components/Timeline';
import YoutubePlayer from './Components/video';
import Download from './Components/download';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  

  render() {
    return (
      <div className="App" >
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Timeline data={this.state.resumeData.portfolio}/>
        <Resume data={this.state.resumeData.resume}/>
        <br/>
        <h1>Ing. Jean Pierre Barnett Caruzo</h1>
        {/* <YoutubePlayer data={this.state.resumeData.main}/> */}
        <br/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <br/>
        <Download url="/images/recomendacion.pdf" />
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App; 

