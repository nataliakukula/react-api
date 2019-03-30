import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Thumbnail from "../Thumbnail";

class myModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: "",
      image: "",
      description: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleThumbnailClick(id) {
    console.log(id);
  }

  render() {
    return (
      <div className="thumbnail-container">
        {this.props.images.map((thumbnail, i) => (
          <Thumbnail
            key={i}
            src={thumbnail.thumbnailUrl}
            id={i}
            toggle={this.toggle}
            handleThumbnailClick={this.handleThumbnailClick}
          />))}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            {/* Image:
            this.props.image??
            */}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default myModal;