import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LessonForm extends Component {
  constructor() {
    super();
    this.state = {
      creator: '',
      title: '',
      subject: '',
      teks: '',
      materialsRequired: '',
      summary: '',
      timeEstimate: '',
      learningGoal: '',
      instruction: '',
      differentiation: '',
      assessment: ''
    };
  }

  handleSubmit = event => {
    const CLEAR_FORM_STATE = {
      creator: '',
      title: '',
      subject: '',
      teks: '',
      materialsRequired: '',
      summary: '',
      timeEstimate: '',
      learningGoal: '',
      instruction: '',
      differentiation: '',
      assessment: ''
    };

    // const emptyState = {
    //   message: {
    //     message: '',
    //   }
    // };

    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({...CLEAR_FORM_STATE});
    // this.setState(emptyState);
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const {creator, title, subject, teks, materialsRequired, summary,
      timeEstimate, learningGoal, instruction, differentiation, assessment} = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="creator"
            placeholder="your username"
            value={creator}
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="title"
            placeholder="what's a catchy name for this lesson?"
            value={title}
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="subject"
            placeholder="relevant subject"
            value={subject}
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="teks"
            placeholder="what are the teks this LP covers?"
            value={teks}
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="materialsRequired"
            placeholder="list the materials need for this LP"
            value={materialsRequired}
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="summary"
            placeholder="summarize the lesson"
            value={summary}
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="timeEstimate"
            placeholder="how long does this lesson take?"
            value={timeEstimate}
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="learningGoal"
            placeholder="What is our learning goal?"
            value={learningGoal}
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="instruction"
            placeholder="List out the instructions"
            value={instruction}
            onChange={this.handleInputChange}
          />
          &nbsp; &nbsp;
          <input
            type="text"
            name="differentiation"
            placeholder="Any differentiations we can use?"
            value={differentiation}
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="text"
            name="assessment"
            placeholder="how do we assess our learning goals?"
            value={assessment}
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
          />
        </form>
        <br/>
      </div>
    );
  }
}

LessonForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,

};

export default LessonForm;
