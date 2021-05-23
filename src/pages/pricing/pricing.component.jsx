import React from 'react'
import Card from '../../components/card/card.component'

import './pricing.styles.scss'

const PricingPage = () => (
    <div className='pricing'>
        <h2 className='title'>Cenovnik</h2>
        <div className='cards'>
            <Card>
                <h2>Slikanje</h2>
                <ul>
                    <li><h3>1000 dinara</h3></li>
                    <li>Broj slika: 30</li>
                </ul>
                <ul>
                    <li><h3>1500 dinara</h3></li>
                    <li>Broj slika: 31-50</li>
                </ul>
                <ul>
                    <li><h3>2000 dinara</h3></li>
                    <li>Broj slika: 51-80</li>
                </ul>
            </Card>
            <Card>
                <h2>Slikanje i obrada
                    <br/>Osnovna cena +
                </h2>
                <ul>
                    <li><h3>500 dinara</h3></li>
                    <li>Broj slika: 5</li>
                </ul>
                <ul>
                    <li><h3>700 dinara</h3></li>
                    <li>Broj slika: 10</li>
                </ul>
                <ul>
                    <li><h3>1000 dinara</h3></li>
                    <li>Broj slika: 15</li>
                </ul>
            </Card>
            <Card>
                <h2>Samo obrada
                    <br />(vaših HD slika)
                </h2>
                <ul>
                    <li><h3>200 dinara</h3></li>
                    <li>Broj slika: 1</li>
                </ul>
                <ul>
                    <li><h3>1200 dinara</h3></li>
                    <li>Broj slika: 10</li>
                </ul>
            </Card>
        </div>
    </div>
)

export default PricingPage