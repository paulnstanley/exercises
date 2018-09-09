import React, {Component} from 'react';
import axios from 'axios';

class GetData extends Component {
    constructor() {
        super()
    
        this.state = {
            name: '',
            model: '',
            color: ''
        }

        this.fetch = this.fetch.bind(this);

    }

    fetch = function () {
    let self = this;
    const URL = 'localhost:8000';
    //getting CORS error here

    const request = axios.get(URL)
      .then(function (response) {
        self.setState({
            name: response.name,
            model: response.model,
            color: response.color
          })
        })
    }

    render () {
        return (
            <div>
                {this.fetch()}
            </div>
        )
    }
}

export default GetData;