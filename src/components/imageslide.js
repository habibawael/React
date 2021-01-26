import React from 'react';

class Slideshow extends React.Component{
  constructor(){
    super()
  
    this.images = [
        'Images/1.jpg',
        'Images/2.jpg',
        'Images/3.jpg',
        'Images/4.jpg',
        'Images/5.jpg',
        'Images/6.jpg'
      ]
      this.state = {
        currentIndex: 0,
      }
      this.goToPrevSlide = this.goToPrevSlide.bind(this);
      this.goToNextSlide = this.goToNextSlide.bind(this);
      this.goToSlideShow = this.goToSlideShow.bind(this);
      this.goToStopSlideShow = this.goToStopSlideShow.bind(this);
  
  }
  
  goToPrevSlide () {
      const {currentIndex} = this.state;
      if ( currentIndex !== 0 ) 
      {
          const newPointer = currentIndex - 1;
          this.setState({currentIndex: newPointer});
      }
    }
      
  goToNextSlide ()  {
      const {currentIndex} = this.state;
      if (currentIndex !== this.images.length -1)
      {
          const newPointer = currentIndex + 1;
          this.setState({currentIndex: newPointer});
      }
    }
  goToSlideShow(){
        
      this.interval = setInterval(() => {
        const {currentIndex} = this.state;
        if ( currentIndex === this.images.length -1) {
          const newPointer = 0;
          this.setState({currentIndex: newPointer});
        }
        else
        {
          const newPointer = currentIndex + 1;
          this.setState({currentIndex: newPointer});
        }
      }, 1000);
    }
  goToStopSlideShow(){
    clearInterval (this.interval);
  }
      
  render(){ 
    return(
      <div>
        <img alt="" src={this.images[this.state.currentIndex]} width = "300" height = "300"/>
        <br/>
        <button  onClick={this.goToPrevSlide}>Previous</button>
        <button  onClick={this.goToNextSlide}>Next</button>
        <button onClick={this.goToSlideShow}>SlideShow</button>
        <button onClick={this.goToStopSlideShow}>Stop</button>
        <br/>
        Image {this.state.currentIndex + 1}
      </div>
    
    );
  }
    
}

export default Slideshow;