import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


class Front extends Component {

    handleClick = (e, k) => {
        console.log(k)
    }

    render() {
        return(
            <div className="CardContainer">
                <Card.Group itemsPerRow={4} doubling={true}>
                        <Card
                            image={require('../assets/poeninja.png')}
                            header='poe.ninja'
                            description='Compare currency rates'
                            href='http://poe.ninja'
                            target='_blank'
                        />

                        <Card
                            image={require('../assets/trade.png')}
                            header='poe.trade'
                            description='Find items for sale'
                            href='http://poe.trade'
                            target='_blank'
                        />

                        <Card
                            image={require('../assets/currency.png')}
                            header='currency.poe.trade'
                            description='Find currency for sale'
                            href='http://currency.poe.trade'
                            target='_blank'
                        />

                        <Card
                            image={require('../assets/poe-lab.png')}
                            header='poelab.com'
                            description='Find todays labyrinth layout'
                            href='http://www.poelab.com/'
                            target='_blank'
                        />

                        <Card
                            image={require('../assets/vorici.png')}
                            header='Vorici Calculator'
                            description='Calculate most efficient way to chrome items'
                            href='https://siveran.github.io/calc.html'
                            target='_blank'
                        />
                </Card.Group>
            </div>            
        )
    }
}

export default Front
