import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label} from 'reactstrap';
function ModalView(args) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const [formData, setFormData] = useState({title: "",text: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.title}, Message: ${formData.text}`
        );
        toggle()
    };
    return (
        <div>
            <Button color="primary" onClick={toggle}>
                add post
            </Button>
            <Modal isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup floating>
                            <Input
                                id="Title"
                                name="title"
                                placeholder="Title"
                                type="text"
                                onChange={(e)=>handleChange(e)}
                            />
                            <Label for="Title">
                                Title
                            </Label>
                        </FormGroup>
                        {' '}
                        <FormGroup floating>
                            <Input
                                name="text"
                                placeholder="Password"
                                type="textarea"
                                onChange={(e)=>handleChange(e)} />
                            <Label for="Text">
                                Text
                            </Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit} >
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalView;
