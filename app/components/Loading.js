import React, {Component} from 'react';
import PropTypes from 'prop-types';

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
  }
}

export default class Loading extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: props.text
    };
  }

 componentDidMount () {
   let stopper = this.props.text + '...';
   this.interval = window.setInterval(()=>{
     if(this.state.text === stopper){
       this.setState({text: this.props.text})
     } else {
       this.setState((prevState)=> {return {text: prevState.text + '.'}})
     }
   }, 150)
 }

 componentWillUnmount(){
   window.clearInterval(this.interval);
 }
  render(){
    return(
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }

}

Loading.defaultProps = {
  text: 'Loading'
}

Loading.propTypes = {
  text: PropTypes.string.isRequired
}