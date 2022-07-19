import React, { Component } from 'react'
import ReactPlayer from 'react-player';
import './content.css';



class ResponsivePlayer extends Component {
    render () {
        return (
            <div className='player-wrapper'>
                <ReactPlayer
                className = 'react-player'
                url='https://www.youtube.com/watch?v=goy4lZfDtCE'
                width='100%'
                height='100%'
                />
            </div>
        )
    }
}

