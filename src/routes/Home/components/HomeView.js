import React from 'react'
import {Country} from './country'
import {FlippingCard, UserCard, FlippingCardBack, FlippingCardFront} from 'react-ui-cards';
import './HomeView.scss'
import {Grid, Col, Nav, Table, NavItem, Pagination, Row} from "react-bootstrap";

class HomeView extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    componentWillMount = (props) => {
        this.props.fetchTwitterTeam()
    }

    render() {
        const {agregat} = this.props
        const sentimentTotalValue = this.props.team.team ? this.props.team.team.aggregations.tweet.buckets : []
        const total_hits = this.props.team.team ? this.props.team.team.hits.total : 0

        const sentimentTotalCardSort  = sentimentTotalValue.sort(function(a, b) {
                console.log("zaaa",a)

            return parseFloat(b.doc_count) - parseFloat(a.doc_count);
        });
        console.log("sentimentTotalCardSort",sentimentTotalCardSort)

        return (
        <div>
            <p>{total_hits}</p>

            <div className='card-container test-class-cont'>
            {sentimentTotalCardSort.map(function(value){
                    const country = value.key === " " ? "NO TEAM" : value.key
                    const header = value.key === " " ? "" : Country[value.key.toLowerCase()]['header']
                    const avatar = value.key === " " ? "" : Country[value.key.toLowerCase()]['avatar']
                    const score = value.total_score_sentiment.value/value.doc_count


                    var sentimentGlobal = ""
                            if(score <= 0.0)
                                 sentimentGlobal= "NOT_UNDERSTOOD"
                                else if (score < 1.4)
                                sentimentGlobal=  "NEGATIVE"
                                else if (score <= 1.85)
                                sentimentGlobal=  "NEUTRAL"
                                else if (score < 5.0)
                                sentimentGlobal=  "POSITIVE"
                                else sentimentGlobal="NOT_UNDERSTOOD"


                       return(<UserCard
                                                    header={header}
                                                    avatar={avatar}
                                                    name={country}
                                                    stats={[
                                                        {
                                                            name: 'Sentiment',
                                                            value: sentimentGlobal
                                                        },
                                                        {
                                                            name: 'Score',
                                                            value: score.toFixed(3)
                                                        },
                                                        {
                                                            name: 'Tweets count',
                                                            value: value.doc_count
                                                        }
                                                    ]}
                                                />

                        )})}
            </div>
      </div>
        )
    }
}



export default HomeView
