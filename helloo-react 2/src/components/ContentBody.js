import React, { Component } from "react";
//import '../Customers.css';

class ContentBody extends Component {

    render() {

        /// display a list 
        return (
            <div className="ContentBody"> 
                    <h1>{this.props.hello}</h1>
                    <h3>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. 
                    </h3> 
                    <div className="commentsLikes">
                        {this.props.likes}
                    </div>
                        
            </div>
        )

    }

}

export default ContentBody 