import React from 'react'
import './HomeView.scss'
import {FlippingCard,UserCard,FlippingCardBack, FlippingCardFront} from 'react-ui-cards';

class HomeView extends React.PureComponent {
 constructor(props) {
   console.log("eze",props)

    super(props)
    this.state = {
      dataState: [],
      count:0,
      activePage:0,
    }
  }

  componentWillMount=(props) => {
     console.log("eze",props)

    this.props.fetchTwitterTeam()
  }

render(){
console.log("card")
    const {agregat} = this.props
        return(
          <div>
            <h4>Accueil</h4>
                 <UserCard
                      cardClass='float'
                      href='https://github.com/nukeop'
                      header='https://i.imgur.com/p5yXGQk.jpg'
                      avatar='https://i.imgur.com/kFkyYkZ.jpg'
                      name='Joseph Cheps'
                      positionName='Firmware Engineer'
                      stats={[
                        {
                          name: 'commits',
                          value: 365
                        },
                        {
                          name: 'stars',
                          value: 110
                        },
                        {
                          name: 'repositories',
                          value: 54
                        }
                      ]}
                    />
          </div>)
          }
}

export default HomeView
