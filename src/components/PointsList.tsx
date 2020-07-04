import React, { Component } from 'react'
import { Card, CardColumns } from 'react-bootstrap';
import axios from 'axios'

// import api from '../utils/API'
interface Points {
    id: number
    image: string
    name: string
    email: string
    whatsapp: string
    latitude: string
    longitude: string
    city: string
    uf: string
}

interface Props {
    newList: boolean
}
interface State {
    points: Points[],
}

class PointsList extends Component<Props, State> {
    constructor(props: Props){
        super(props)

        this.state = {
            points: []
        }
    }

    async componentDidMount(){
        axios.get<[Points]>('http://localhost:8000/points')
        .then(response => {
            console.log('res', response)
            this.setState({
                points: response.data,
            })
        }).catch(err => {
            console.log(err)})
    }
    render() {
        console.log(this.state)

        return (
            <div>
                <CardColumns>
                    {this.state.points.length ?
                        this.state.points.map((point) =>
                        <Card style={{ width: '15rem', margin: '10px' }} key={point.id}>
                            <Card.Img variant="top" src={ point.image } />
                            <Card.Body>
                            <Card.Title>{ point.name }</Card.Title>
                                <Card.Text>
                                { point.email },
                                { point.city }- {point.uf}
                                </Card.Text>
                            </Card.Body>
                        </Card>) :
                        <h3>Not Found!</h3>
                    }
                </CardColumns>
            </div>
        );
    }
}

export default PointsList