import React, { Component } from 'react'
import InfoBar from './InfoBar'

export default class Products extends Component {
    constructor() {
        super()

        this.state = {
            products: [{
                id: 1, product: 'Custom Molded Ear Plugs', img: '', desc: 'This is our basic model. It is the foundation of most other custom ear pieces.', cover: 'cardCover'
            }, {
                id: 2, product: 'Communication', img: '', desc: 'Almost any two way radio communication system can be connected to the Insta-Mold hearing protection device.', cover: 'cardCover'
            }, {
                id: 3, product: 'iPlugz', img: '', desc: 'Listen to your music and not much else. Available in corded and Bluetooth.', cover: 'cardCover'
            }, {
                id: 4, product: 'iPlugz Pro', img: '', desc: 'Recreational auditiory enhancement and entertainment. Designed with bikers, fitness fans, and travelers in mind. Can be corded or Bluetooth compatible.', cover: 'cardCover'
            }, {
                id: 5, product: 'Metal Detectable', img: '', desc: 'Custom hearing protection that is, by nature, metal detectable. Used most commonly in the food and drug processing industry.', cover: 'cardCover'
            }, {
                id: 6, product: 'Acoustic Filters', img: '', desc: 'Do your employees need ear protection as well as the ability to communicate? Filter out the bad, without losing the good.', cover: 'cardCover'
            }, {
                id: 7, product: 'Z-Series', img: '', desc: 'Designed to help stage professionals hear their music without distortion, while enhancing their overall musical performance.', cover: 'cardCover'
            }, {
                id: 8, product: 'Chamelon Ears™', img: '', desc: 'Heat curable ear pieces that have a higher level of durability and flex. Chameleon Ear pieces can be customised with filter, audio, metal detection, and much more.', cover: 'cardCover'
            }, {
                id: 9, product: 'Chamelon Ears™ Water Sports Earplugs', img: '', desc: 'Optimal for swimming, water sports, and showering to prevent infection. Not intended as protection from noise.', cover: 'cardCover'
            }, {
                id: 10, product: 'Custom Electronic Earplug Series', img: '', desc: 'Digitally protect your hearing during activities that are strenuous on your ears. Simultaneously, you can amplify sounds you need to hear.', cover: 'cardCover'
            }, {
                id: 11, product: 'HearDefenders® Custom Series', img: '', desc: 'Distinguishes itself as one of the moste affordable custom-fit electronic hearing protection/enhancement systems in the marketplace. Some models are waterproof.', cover: 'cardCover'
            }, {
                id: 12, product: 'Racing Helmet Moniters', img: '', desc: 'Made with a standard 3.5mm mono jack and 18\' cord length to plug into a helmet communication system and help you isolate the radio  traffic coming from your pit crew.', cover: 'cardCover'
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
                        <div className="productImage"></div>
                    </div>
                </div>
            )
        })

        return (
            <div className='productsOuter'>
                <InfoBar />
                <div className="productsInfo">
                    <h2>We Offer the full range of Insta-Mold Custom Ear Pieces</h2>
                    <h2>OKC EarPro is an authorized provider of Insta-Mold Products.</h2>
                </div>
                <div className="productsShell">
                    {list}
                </div>
            </div>
        )
    }
}