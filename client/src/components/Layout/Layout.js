import React from 'react';

import './Layout.css';

class Layout extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          sidebarOpen: false
        }
    }

    handleSidebar = () => {
        this.setState({ sidebarOpen: !(this.state.sidebarOpen) });
    };

    onClick = (e) => {
        this.props.onClick(e.target.id);
    }

    render() {

        return (
            <div className="layout">
                
                <div className="menu-button" onClick={this.handleSidebar}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <h1 className="title">Dashboard</h1>

                { this.state.sidebarOpen ? 
                    (
                        <div className="sidebar">
                            <a href="#" className="btn-close" onClick={this.handleSidebar}>&times;</a>
                            <div className="list-item"><a id="Top" onClick={this.onClick}>Top</a></div>
                            <div className="list-item"><a id="Weekly" onClick={this.onClick}>Weekly</a></div>
                        </div>
                    ) : null 
                }

            </div>
            
        );
            
    }
}

export default Layout;