import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


class Front extends Component {

    handleClick = (e, k) => {
        console.log(k)
    }

    render() {
        return(
            <div className="CardContainer">
                <Card.Group itemsPerRow={5} doubling={true}>
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
                            header='currency trade'
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

                        <Card
                            image={require('../assets/poe-racing.png')}
                            header='poe-racing.com'
                            description='Check out latest racing standings'
                            href='http://poe-racing.com'
                            target='_blank'
                        />

                        <Card
                            image={require('../assets/reddit.png')}
                            header='reddit'
                            description='Reddit about PoE'
                            href='https://www.reddit.com/r/pathofexile/'
                            target='_blank'
                        />
                        <Card
                            image={require('../assets/poe-wiki.png')}
                            header='PoE wiki'
                            description='Learn about PoE'
                            href='https://pathofexile.gamepedia.com/Path_of_Exile_Wiki'
                            target='_blank'
                        />
                        <Card
                            image={require('../assets/filter.png')}
                            header='Filterblade.xyz'
                            description='Create your own loot filters'
                            href='http://www.filterblade.xyz/'
                            target='_blank'
                        />
                        <Card
                            image={require('../assets/forum.png')}
                            header='Official PoE forums'
                            description='Discuss and learn about PoE'
                            href='https://www.pathofexile.com/forum'
                            target='_blank'
                        />
                </Card.Group>
            </div>            
        )
    }
}

export default Front
