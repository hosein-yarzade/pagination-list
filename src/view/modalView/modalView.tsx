import React, {useState} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

function ModalView(props:any) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const [formData, setFormData] = useState({title: "",text: ""});

    const handleChange = (event:any) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const setToList=(title : string , text :string)=>{
        props.ChangList(title,text)
    }
    const handleSubmit = (event :any ) => {
        if(formData.title =="" || formData.text==""){
            return
        }else {
        event.preventDefault();
            setFormData({title: "",text: ""})
        toggle()
        setToList(formData.title , formData.text)
        }
    };
    return (
        <div>
            <Button color="primary" onClick={toggle}>
                add post
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
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
                       add +
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
