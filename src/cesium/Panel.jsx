import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {togglePanel, toggleAbout, toggleLayers} from '../actions/index'

class Panel extends Component {

    render() {
        if (this.props.panel.display) {
            return (
                <div className="panel-main">
                    <div className="panel-module" onClick={() =>{
                            this.props.toggleLayers(this.props.layers.display);
                            this.props.togglePanel(this.props.panel.display);
                        }}>
                        Layers
                    </div>
                    <div className="panel-module disabled" onClick={() => this.props.togglePanel(this.props.panel.display)}>
                        Analysis
                    </div>
                    <div className="panel-module disabled" onClick={() => this.props.togglePanel(this.props.panel.display)}>
                        Statistics
                    </div>
                    <div className="panel-module disabled" onClick={() => this.props.togglePanel(this.props.panel.display)}>
                        Imagery
                    </div>
                    <div className="panel-module disabled" onClick={() => this.props.togglePanel(this.props.panel.display)}>
                        Search
                    </div>
                    <hr/>
                    <div className="panel-module about" onClick={() => {
                      this.props.togglePanel(this.props.panel.display);
                      this.props.toggleAbout(this.props.about.display);
                    }}>
                        About
                    </div>
                </div>
            );
        } else {
            return null;
        }

    }
}

function mapStateToProps(state) {
    return {
      panel: state.panel,
      about: state.about,
      layers: state.layers
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({togglePanel: togglePanel, toggleAbout: toggleAbout, toggleLayers: toggleLayers}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Panel);
