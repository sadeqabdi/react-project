import React, {Component} from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'

class Login extends Component{

    onClick = () => {
        
    }
    render(){
        return(
            <div id="Login-input">
            <Segment inverted>
            <Form inverted>
              <Form.Group widths='equal'>
                <Form.Input fluid label='First name' placeholder='First name' />
                <Form.Input fluid label='Last name' placeholder='Last name' />
              </Form.Group>
              <Form.Checkbox label='I agree to the Terms and Conditions' />
              <Button type='submit'>Submit</Button>
            </Form>
          </Segment>ppp
            </div>
        );
    }
}
export default Login;