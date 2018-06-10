import React from 'react'
import {Country} from './country'
import {FlippingCard, UserCard, FlippingCardBack, FlippingCardFront} from 'react-ui-cards';
import './HomeView.scss'
import {Grid, Col, Nav, Table, NavItem, Pagination, Row} from "react-bootstrap";

class HomeView extends React.PureComponent {
    constructor(props) {
        console.log("eze", props)

        super(props)
        this.state = {
            dataState: [],
            count: 0,
            activePage: 0,
        }
    }

    componentWillMount = (props) => {
        console.log("eze", props)

        this.props.fetchTwitterTeam()
    }

    render() {
        const divStyle = {
            margin: '5000px',
            border: '5px solid pink'
        };

        const {agregat} = this.props
        console.log("card", this.props)

        return (
            <div className='card-container test-class-cont'>
                {Object.keys(Country).map(function (key, index) {
                        return <UserCard
                            style={divStyle}
                            header={Country[key]['header']}
                            avatar={Country[key]['avatar']}
                            name={key}
                            positionName='Confiance'
                            stats={[
                                {
                                    name: 'Negatif',
                                    value: 12
                                },
                                {
                                    name: 'Neutre',
                                    value: 8
                                },
                                {
                                    name: 'Positif',
                                    value: 80
                                }
                            ]}
                        />
                    }
                )
                }
            </div>
        )
    }
}



export default HomeView
