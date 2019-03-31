import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import Thumbnail from "../Thumbnail";

//Modal template from Reactstrap documentation:
class myModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      id: 0,
      title: "",
      imageUrl: "",
      description: ""
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  //Display data based on the tumbnail click
  handleThumbnailClick = id => {
    let imageUrl;
    let title;

    for (let i = 0; i < this.props.images.length; i++) {
      if (this.props.images[i].id === id) {
        imageUrl = this.props.images[i].url;
        title = this.props.images[i].title;
        //Retrieve the description based on the id from local storage
        localStorage.getItem(this.props.images[i].id) && this.setState({
          "description": localStorage.getItem(this.props.images[i].id)
        });
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
    // [key] and [value] connection to save in local storage
    localStorage.setItem(id, newDescription);
  }

  removeDescription = event => {
    //On close remove the description from the modal
    event.preventDefault();

    this.setState({
      "description": ""
    })
  }

  render() {
    return (<div className="thumbnail-container">

      {this.props.images.map((thumbnail, i) => (
        <Thumbnail
          key={i}
          src={thumbnail.thumbnailUrl}
          id={i + 1}
          toggle={this.toggle}
          handleThumbnailClick={this.handleThumbnailClick}
        />))}

      <Modal isOpen={this.state.modal} toggle={this.toggle} className="my-modal">
        <ModalHeader toggle={(event) => { this.toggle(); this.removeDescription(event) }}>{this.state.title}</ModalHeader>
        <ModalBody>
          <img src={this.state.imageUrl} alt="modal-img" />
        </ModalBody>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="description">Image description:</Label>
              <h5>{this.state.description}</h5>
              <Input
                type="textarea"
                name="description"
                id="description"
                onChange={this.handleInputChange}
                placeholder="Add or change the description!"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(event) => { this.toggle(); this.submitDescription(event); this.removeDescription(event) }}>Save</Button>
          <Button color="secondary" onClick={(event) => { this.toggle(); this.removeDescription(event) }}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>);
  }
}

export default myModal;