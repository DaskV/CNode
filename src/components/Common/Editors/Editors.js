import React, { Component, PropTypes } from 'react';
import {Editor,EditorState} from 'draft-js'
class Editors extends Component {
    constructor(props) {       
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = (editorState) => this.setState({editorState});       

    }
    render() {
        return (
            <div>
                <Editor editorState={this.state.editorState}  onChange={this.onChange}/>
            </div>
        );
    }
}

export default Editors;