import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import Thumbnail from "../Thumbnail";

//Modal template from reactstrap documentation
class myModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      id: 0,
      title: "",
      imageUrl: "",
      description: ""
    };

    this.toggle = this.toggle.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleThumbnailClick(id) {
    //display data based on the tumbnail click
    let imageUrl;
    let title;

    for (let i = 0; i < this.props.images.length; i++) {
      if (this.props.images[i].id === id) {
        imageUrl = this.props.images[i].url;
        title = this.props.images[i].title;
      };
    };

    this.setState({
      id,
      imageUrl,
      title
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitDescription = event => {

    event.preventDefault();

    const newDescription = this.state.description;
    const id = this.state.id;
    console.log(newDescription);
    console.log(id);
    //send it to local storage TODO 
    // when component mounts retrive from local storate on id
    // [key] and [value] connection
  }

  render() {
    return (
      <div className="thumbnail-container">

        {this.props.images.map((thumbnail, i) => (
          <Thumbnail
            key={i}
            src={thumbnail.thumbnailUrl}
            id={i + 1}
            toggle={this.toggle}
            handleThumbnailClick={this.handleThumbnailClick}
          />))}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="my-modal">
          <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
          <ModalBody>
            <img src={this.state.imageUrl} alt="modal-img" />
          </ModalBody>
          <ModalBody>
            <Form>
              {/* <h2></h2> */}
              <FormGroup>
                <Label for="description">Personal image description:</Label>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  onChange={this.handleInputChange}
                  placeholder="This color gets me up in the morning..."
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(event) => { this.toggle(); this.submitDescription(event) }}>Save</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default myModal;