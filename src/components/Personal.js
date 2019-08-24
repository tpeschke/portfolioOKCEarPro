import React, { Component } from 'react'

export default class Personal extends Component {
    constructor() {
        super()

        this.state = {
            pictures: [{
                id: 1, img: 'http://media.graytvinc.com/images/810*455/Hunting73.jpg', title: 'Shooting/Hunting', subtitle: 'Superior hearing protection that won\'t get in the way of eye protection or get bumped off. Can be filtered to let in the noises you want and keep out the noises you don\'t', cover: 'personalCover'
            }, {
                id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr5efRX9sLhwUQJVaLcS2Cmpy7oyL3ikBnmxU_g5mu16SD56r3', title: 'Musicians and Recreational Music Lovers', subtitle: 'Whether you are a professional musician, or you want great sound from your music player, we have options for you. From iPlugz to Z-Series Music Monitors, we can help enhance your musical experience.', cover: 'personalCover'
            }, {
                id: 3, img: 'data:image/jpeg;base64,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', title: 'Meditation', subtitle: 'Breathe in, breathe out to the rhythm of your heart beat as your personally-crafted ear plugs cut out the influence of the outside world.', cover: 'personalCover'
            }, {
                id: 4, img: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F19%2FNico_Rosberg_2015_Malaysia_FP1.jpg%2F1200px-Nico_Rosberg_2015_Malaysia_FP1.jpg&f=1', title: 'Motor Sports', subtitle: 'We offer everything from great hearing protection for a nice quiet ride, to in-ear radio systems to plug into a helmet communication system to help you isolate the radio traffic coming from your pit crew.', cover: 'personalCover'
            }, {
                id: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0AcjgyXU4s_fb4a339_b4svGaotBq9ZfJAspt0hkfr9KAepg_1w', title: 'Swimming/Water Sports', subtitle: 'No one likes swimmers ear. Protect your ears from harmful infections, while still being able to hear those around you.', cover: 'personalCover'
            }, {
                id: 6, img: 'https://durhamcollege.ca/wp-content/uploads/Paramedic-%E2%80%93-Advanced-Care-graduate-certificate.jpg', title: 'Law Enforement and Public Service', subtitle: 'Take advantage of custom for, earpieces that can connect directly to most radio systems. We also offer many solutions for lessening the impact of loud sirens while still enabling the wearer to hear important information and noises.', cover: 'personalCover'
            }, {
                id: 7, img: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.mnn.com%2Fassets%2Fimages%2F2014%2F07%2Fman-reading-woman-sleeping-plane.jpg.600x315_q80_crop-smart.jpg&f=1', title: 'Traveling', subtitle: 'Retreat into your own personal oasis, even when surrounded by other travelers. Get some shut eye or cut out the background noise so you can concentrate on your book.', cover: 'personalCover'
            }, {
                id: 8, img: 'http://blog.myskin.com/wp-content/uploads/2016/10/sleeping-beaut.jpg', title: 'Sleep', subtitle: 'A good night sleep is the foundation to a good day. Block out the noise of a loud dormitory, snoring spouse, airplane engines, and even sleep through the midnight train.', cover: 'personalCover'
            }]
        }
    }

    showCover = (id) => {
        var tempCover = ''
        var tempArr = this.state.pictures.map(val => {
            if (val.id === id) {
                tempCover = val.cover
                val.cover = 'personalCover personalCoverShow'
            }
            return val
        })
        this.setState({ pictures: tempArr }, _ => setTimeout(_ => {
            tempArr = this.state.pictures.map(val => {
                if (val.id === id) {
                    tempCover === 'personalCover' ? val.cover = 'personalCover personalCoverOpacity personalCoverShow' : val.cover = 'personalCover'
                }
                return val
            })
            this.setState({ pictures: tempArr })
        }, 1))
    }

    render() {
        var list = this.state.pictures.map(val => {
            return (
                <div key={val.id} className="personalCardShell" onMouseEnter={e => this.showCover(val.id)} onMouseLeave={e => this.showCover(val.id)}>
                    <div className={val.cover}>
                        <h1 className="personalCardTitleFlip">{val.title}</h1>
                        <br />
                        {val.subtitle}
                    </div>

                    <div className="personalCard">
                        <img src={val.img} className="personalImage" />
                    </div>
                </div>
            )
        })

        return (
            <div className='productsOuter'>
                <div className="productsHeader" id="professionHeader">
                    <div className="logoSmall"></div>
                    <h1>Personal</h1>
                </div>

                <div className="personalShell">
                    {list}
                </div>
            </div>
        )
    }
}