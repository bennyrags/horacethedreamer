import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button'

class Dream extends Component {
    render() {
        return (
            <>
            <h2>
Theme
            </h2>
            <section className='dreamContainer'>
                <h3>Theme Name</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
            
               <Button>Edit</Button>
               <Button>Delete</Button>
               <Button>All Themes</Button>
 
            </section>
        </>
        )
    }
}


const mapStateToProps = state => ({
    user: state.user,
  });
  
  export default connect(mapStateToProps)(Theme);
  