import React, { Component } from 'react'
import InfoBar from './InfoBar'

import customMolded from '../../images/products/customMolded.jpeg'
import comm from '../../images/products/comm.jpg'
import iPlugz from '../../images/products/iPlugz.jpg'
import iPlugzPro from '../../images/products/iPlugzPro.jpg'
import metal from '../../images/products/metal.jpg'
import chameleon from '../../images/products/chameleon.jpg'
import chameleonWater from '../../images/products/chameleonWater.jpg'
import hearDefenders from '../../images/products/hearDefenders.jpg'
import helmet from '../../images/products/helmet.jpg'
import electric from '../../images/products/electric.jpg'
import filter from '../../images/products/filter.jpg'
import z from '../../images/products/z.jpg'

export default class Products extends Component {
    constructor() {
        super()

        this.state = {
            products: [{
                id: 1, product: 'Custom Molded Ear Plugs', img: customMolded, desc: 'This is our basic model. It is the foundation of most other custom ear pieces.', cover: 'cardCover'
            }, {
                id: 2, product: 'Communication', img: comm, desc: 'Almost any two way radio communication system can be connected to the Insta-Mold hearing protection device.', cover: 'cardCover'
            }, {
                id: 3, product: 'iPlugz', img: iPlugz, desc: 'Listen to your music and not much else. Available in corded and Bluetooth.', cover: 'cardCover'
            }, {
                id: 4, product: 'iPlugz Pro', img: iPlugzPro, desc: 'Recreational auditiory enhancement and entertainment. Designed with bikers, fitness fans, and travelers in mind. Can be corded or Bluetooth compatible.', cover: 'cardCover'
            }, {
                id: 5, product: 'Metal Detectable', img: metal, desc: 'Custom hearing protection that is, by nature, metal detectable. Used most commonly in the food and drug processing industry.', cover: 'cardCover'
            }, {
                id: 6, product: 'Acoustic Filters', img: filter, desc: 'Do your employees need ear protection as well as the ability to communicate? Filter out the bad, without losing the good.', cover: 'cardCover'
            }, {
                id: 7, product: 'Z-Series', img: z, desc: 'Designed to help stage professionals hear their music without distortion, while enhancing their overall musical performance.', cover: 'cardCover'
            }, {
                id: 8, product: 'Chameleon Ears™', img: chameleon, desc: 'Heat curable ear pieces that have a higher level of durability and flex. Chameleon Ear pieces can be customised with filter, audio, metal detection, and much more.', cover: 'cardCover'
            }, {
                id: 9, product: 'Chameleon Ears™ Water Sports Earplugs', img: chameleonWater, desc: 'Optimal for swimming, water sports, and showering to prevent infection. Not intended as protection from noise.', cover: 'cardCover'
            }, {
                id: 10, product: 'Custom Electronic Earplug Series', img: electric, desc: 'Digitally protect your hearing during activities that are strenuous on your ears. Simultaneously, you can amplify sounds you need to hear.', cover: 'cardCover'
            }, {
                id: 11, product: 'HearDefenders® Custom Series', img: hearDefenders, desc: 'Distinguishes itself as one of the moste affordable custom-fit electronic hearing protection/enhancement systems in the marketplace. Some models are waterproof.', cover: 'cardCover'
            }, {
                id: 12, product: 'Racing Helmet Moniters', img: helmet, desc: 'Made with a standard 3.5mm mono jack and 18\' cord length to plug into a helmet communication system and help you isolate the radio  traffic coming from your pit crew.', cover: 'cardCover'
            }]
        }
    }

    showCover = (id) => {
        var tempCover = ''
        var tempArr = this.state.products.map(val => {
            if (val.id === id) {
                tempCover = val.cover
                val.cover = 'cardCover cardCoverShow'
            }
            return val
        })
        this.setState({ products: tempArr }, _ => setTimeout(_ => {
            tempArr = this.state.products.map(val => {
                if (val.id === id) {
                    tempCover === 'cardCover' ? val.cover = 'cardCover cardCoverOpacity cardCoverShow' : val.cover = 'cardCover'
                }
                return val
            })
            this.setState({ products: tempArr })
        }, 1))
    }

    render() {
        var list = this.state.products.map(val => {
            return (
                <div key={val.id} className="cardShell" onMouseEnter={e => this.showCover(val.id)} onMouseLeave={e => this.showCover(val.id)}>
                    <div className={val.cover}>
                        {val.desc}
                    </div>

                    <div className="productCard">
                        <h2 className="productTitle">{val.product}</h2>
                        <div className="productImage">
                            <img src={val.img} alt="" className="productImageInner"/>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className='productsOuter'>
                <InfoBar />
                <div className="productsInfo">
                    <h2>We offer the full range of Insta-Mold Custom Ear Pieces</h2>
                    <h2>OKC EarPro is an authorized provider of Insta-Mold Products.</h2>
                </div>
                <div className="productsShell">
                    {list}
                </div>
            </div>
        )
    }
}