import React from 'react';



class ScrollButton extends React.Component{
    render(){
        return(
            <div>
                 <a className="scroll-to-top rounded">
                 <i className="fas fa-angle-up" />
                 </a>
            </div>
        )
    }
}
export default ScrollButton;