import React, { Component } from 'react'
import classes from './Clock.module.css'
import Header from '../../../components/HomeContent/Header/Header'
import Button from '../../../components/UI/Button/Button'

class Clock extends Component {
    state = {
        time: {
            weeks: null,
            days: null,
            hour: null,
            minute: null,
            second: null
        },
        intervalValue: null
    }

    setTime = () => {
        const startDate = new Date("2019-09-01")
        const time = {
            days: new Date().getDate() - startDate.getDate(),
            hour: new Date().getHours() - startDate.getHours(),
            minute: new Date().getMinutes() - startDate.getMinutes(),
            second: new Date().getSeconds() - startDate.getSeconds()
        }
        time.weeks = parseInt(time.days / 7)
        this.setState({ time })
    }

    componentDidMount() {
        const intervalValue = setInterval(this.setTime, 1000)
        this.setState({ intervalValue })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalValue)
    }

    render() {
        return (
            <div className={classes.Clock}>
                <div className={classes.Header}>
                    <Header
                        subTitle="SPECIAL PROMO"
                        title="Summer Sale"
                        content="Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam." />
                </div>
                <div className={classes.ClockWrapper}>
                    <div>
                        <p>{this.state.time.weeks}</p>
                        <p>Weeks</p>
                    </div>
                    <div>
                        <p>{this.state.time.days}</p>
                        <p>Days</p>
                    </div>
                    <div>
                        <p>{this.state.time.hour}</p>
                        <p>Hours</p>
                    </div>
                    <div>
                        <p>{this.state.time.minute}</p>
                        <p>Minute</p>
                    </div>
                    <div>
                        <p>{this.state.time.second}</p>
                        <p>Second</p>
                    </div>
                </div>
                <Button>BUY NOW</Button>
            </div>
        )
    }
}

export default Clock