import React from 'react'
import './App.css'
import fire from './images/fire.png'
import road from './images/road.png'
import sleep from './images/sleep.png'
import sport from './images/sport.png'
import steps from './images/steps.png'
import water from './images/water.png'
import walkm from './images/walkm.png'
import challange from './images/challenge.png'


const e = React.createElement


function Car(props) {

    const classes = ['card']

    if(props.car.marked){
        classes.push('marked')
    }

    return(
        <div className={classes.join(' ')} onClick={props.onMark}>
            <div className="card-img">
                <img src = {props.car.img}
                     alt = {props.car.name}/>
            </div>
            <div className="challengeBlock">
                <img className="walkm" src={walkm} alt="walkm"/>
                <img className="challange" src={challange} alt="challange"/>
            </div>
            <h3>{props.car.name}</h3>
            <p><span>📅</span>{props.car.date.start} - {props.car.date.end}</p>
            <button className="post_button">+ JOIN CONTEST</button>
        </div>
    )
    /*return e('div', {className: 'card'}, [
        e('div', {className: 'card-img', key: 'div'}, e('img', {src: props.car.img, alt: props.car.name})),
        e('h3', {key: 'h3'}, props.car.name),
        e('p', {key: 'ppp'}, props.car.date)
    ])*/
}





class App extends React.Component{


    // __________________________information API____________________________
    state = {


        cars: [
            {"id": 28530, "type": "challenge", name: "10k steps or more challenge", "description": "This group is created to motivate each other to reach 10k steps or more everyday", "metric": 1, date: { "start": "2019-12-03", "end": "2025-12-10" }, img: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "isMember": false, "status": "ongoing" },
            {"id": 28747, "type": "competition", name: "Fitness", "description": null, "metric": 2, date: { "start": "2024-12-28", "end": "2024-12-29" }, img: "https://media.inquirer.com/storage/inquirer/projects/year-in-pictures-2019/photos/POY2019_RedC.JPG", "isMember": false, "status": "upcoming" },
            {"id": 29685, "type": "competition", name: "C2C Super Step Challenge!", "description": "The now annual C2C super step challenge is competed over the course of 3 days at the o2 in March, the (not really) coveted title of super step challenge champion will be conferred upon the winner if\/when we surface on Monday morning. I may or may not source a shit prize for the winner (Lu keep that butt plug cactus handy).", "metric": 1, date: { "start": "2021-03-13", "end": "2021-05-15" }, img: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg", "isMember": false, "status": "upcoming" },
            {"id": 28878, "type": "challenge", name: "Racha team", "description": "Team for racha activities", "metric": 1, date: { "start": "2020-01-10", "end": "2021-01-09" }, img: "https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "isMember": false, "status": "ongoing" },
            {"id": 29320, "type": "challenge", name: "Wk 2 EHPHoldings 8 wk challenge", "description": "Make 10000 steps to get 1 point and get 1 point for every 5000 steps after that ", "metric": 1, date: { "start": "2020-01-28", "end": "2021-01-02" }, img: "https:\/\/static.inkin.com\/uploads\/2020\/01\/26\/0e89ef414f3ded1669ad0ea40c9f0740a91be176.jpg", "isMember": false, "status": "ongoing" },
            {"id": 30548, "type": "challenge", name: "Liquidity Quarantine Fitness Challenge", "description": "Let\u2019s stay fit and justify the cookies we eat ", "metric": 2, date: { "start": "2020-04-14", "end": "2020-12-31" }, img: "https://images.befunky.com/wp/wp-2014-08-milky-way-1023340_1280.jpg?auto=format&fm=jpg&q=75&w=1184&ixlib=js-1.4.1", "isMember": false, "status": "ongoing" },
            {"id": 29855, "type": "challenge", name: "skinny peeps", "description": "wow", "metric": 1, date: { "start": "2020-03-07", "end": "2020-12-31" }, img: "https:\/\/static.inkin.com\/uploads\/2020\/03\/06\/1a660e24f187e6177fc98ee513862b5ce74465a5.jpg", "isMember": false, "status": "ongoing" },
            { "id": 29207, "type": "competition", name: "GPC 865 DC", "description": null, "metric": 1, date: { "start": "2020-01-21", "end": "2020-12-31" }, img: "https://dynaimage.cdn.cnn.com/cnn/q_auto,h_600/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200408055749-02-pink-moon-gallery.jpg", "isMember": false, "status": "ongoing" },
            {"id": 28857, "type": "challenge", name: "2020 Chang-ily Fitness Challenge", "description": "Let's get fit! Track your number of workouts over the course of the year. I'm thinking that this app will help, and unfortunately, the number of workouts is not an option, but hours is. No need to track your actual hours, just number of workouts. So on this app, each workout will count as 1 \"hour\". \n\nThere will be very few ground rules, as the point of this challenge is to get us exercising regularly. But just because there will be questions, here are a few:\n\nA workout constitutes as an exercise or set(s) of exercises conducted consecutively in one setting, without changing clothes (besides removing or adding layers). Ex, a series of ab, arm, and leg exercises completed one after the other is one workout, not 3. However, if you do those three exercises and then change into swim gear, that would count as 2 workouts - unless those exercises were part of the warmup \/ cool-down. \n\nLet's do this!!", "metric": 3, date: { "start": "2019-06-31", "end": "2019-12-31" }, img: "https://media.inquirer.com/storage/inquirer/projects/year-in-pictures-2019/photos/POY2019_RedE.JPG", "isMember": false, "status": "ongoing" },
            {"id": 28846, "type": "competition", name: "Logan's Family 2020 IN 2020", "description": null, "metric": 9, date: { "start": "2020-01-01", "end": "2020-12-31" }, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZqahnVNjaBrJPxm_HnTz1FJLu2X44deZ5VQB9-HVtAeEKG3au&usqp=CAU", "isMember": false, "status": "ongoing" }
        ],

        visible: true,
        funcPast: true,
        funcUpcoming: true,
        inProcess: true,
        redText: false


    }





    // _______________________add active effect if clicked in post___________________________
    handleMarked(name){
        const cars = this.state.cars.concat();
        const car = cars.find(c=>c.name === name);
        car.marked = !car.marked;
        this.setState({ cars: cars});
    }


    // ________________________if clicked toggleHandler, visible: true_________________________
    toggleHandler(e){
        this.setState({visible: !this.state.visible});
        console.log('working');
        this.setState({isActiveHandler: !this.state.isActiveHandler })
    }


    // _________________________if clicked funcPast, funcPast: true_________________________________
    funcPast(){
        this.setState({funcPast: !this.state.funcPast});
        this.setState({isActivePast: !this.state.isActivePast })
    }
    // _________________________if clicked funcUpcoming, funcUpcoming: true__________________________
    funcUpcoming(){
        this.setState({funcUpcoming: !this.state.funcUpcoming});
        this.setState({isActiveUpcoming: !this.state.isActiveUpcoming })
    }
    // _________________________if clicked inProcess, inProcess: true______________________________
    inProcess(){
        this.setState({inProcess: !this.state.inProcess});
        this.setState({isActiveProcess: !this.state.isActiveProcess })
    }

    // __________________________filter 2 if clicked_______________________________________________
    toggleHandler1(){
        this.setState({nonactiveCircle1: !this.state.nonactiveCircle1 })
    }
    toggleHandler2(){
        this.setState({nonactiveCircle2: !this.state.nonactiveCircle2 })
    }
    toggleHandler3(){
        this.setState({nonactiveCircle3: !this.state.nonactiveCircle3 })
    }
    toggleHandler4(){
        this.setState({nonactiveCircle4: !this.state.nonactiveCircle4 })
    }
    toggleHandler5(){
        this.setState({nonactiveCircle5: !this.state.nonactiveCircle5 })
    }
    toggleHandler6(){
        this.setState({nonactiveCircle6: !this.state.nonactiveCircle6 })
    }

    renderCars(){
        if(!this.state.visible){
            return null
        }


        // ___________________________check if event is past_____________________________
        if(!this.state.funcPast){
            let filterPast = this.state.cars.filter(function (item) {
                return ((new Date(item.date.end).getTime()) < new Date().getTime());
            });

            let sortedPast = filterPast.sort(function (a, b) {
                return (new Date(a.date.start)) - (new Date(b.date.start));
            });


            return sortedPast.map(car => {
                return (
                    <Car car = {car} key = {car.name + Math.random()} onMark = {this.handleMarked.bind(this, car.name)}/>
                )
            })
        }

        // __________________________check if event in process____________________________

        if(!this.state.inProcess){

            let filterPast = this.state.cars.filter(function (item) {
                return (((new Date(item.date.start).getTime()) < new Date().getTime()) && ((new Date(item.date.end).getTime()) > new Date().getTime()));
            });

            let sortedPast = filterPast.sort(function (a, b) {
                return (new Date(a.date.start)) - (new Date(b.date.start));
            });


            return sortedPast.map(car => {
                return (
                    <Car car = {car} key = {car.name + Math.random()} onMark = {this.handleMarked.bind(this, car.name)}/>
                )
            })


        }

        // __________________________check if event will be____________________________

        if(!this.state.funcUpcoming){

            let filterPast = this.state.cars.filter(function (item) {
                return (((new Date(item.date.start).getTime()) > new Date().getTime()));
            });

            let sortedPast = filterPast.sort(function (a, b) {
                return (new Date(a.date.start)) - (new Date(b.date.start));
            });

            return sortedPast.map(car => {
                return (
                    <Car car = {car} key = {car.name + Math.random()} onMark = {this.handleMarked.bind(this, car.name)}/>
                )
            })


        }



        return this.state.cars.map(car => {
                return (
                    <Car car = {car} key = {car.name + Math.random()} onMark = {this.handleMarked.bind(this, car.name)}/>
                )
            })
    }




    render(){
        return (

            <div className="app">
                <div className="filters">
                  <div className="filter_1">
                    {/*<button className={(this.state.isActiveHandler) ? 'non-active' : 'active'} onClick={() => this.toggleHandler()}>Toggle</button>*/}
                    <button className={(this.state.isActiveProcess) ? 'active' : 'non-active'} onClick={() => this.inProcess()}>Ongoing</button>
                    <button className={(this.state.isActiveUpcoming) ? 'active' : 'non-active'} onClick={() => this.funcUpcoming()}>Upcoming</button>
                    <button className={(this.state.isActivePast) ? 'active' : 'non-active'} onClick={() => this.funcPast()}>Ended</button>
                  </div>
                  <div className="filter_2">
                      <p>METRIC</p>
                      <button className={(this.state.nonactiveCircle1) ? 'nonactiveCircle1' : 'activeCircle'} onClick={() => this.toggleHandler1()}>
                          {/*👢*/}
                          <img src={fire} alt="fire"/>
                      </button>
                      <button className={(this.state.nonactiveCircle2) ? 'nonactiveCircle2' : 'activeCircle'} onClick={() => this.toggleHandler2()}>
                          {/*🚶*/}
                          <img src={road} alt="road"/>
                      </button>
                      <button className={(this.state.nonactiveCircle3) ? 'nonactiveCircle3' : 'activeCircle'} onClick={() => this.toggleHandler3()}>
                          {/*📏*/}
                          <img src={sleep} alt="sleep"/>
                      </button>
                      <button className={(this.state.nonactiveCircle4) ? 'nonactiveCircle4' : 'activeCircle'} onClick={() => this.toggleHandler4()}>
                          {/*🔥*/}
                          <img src={sport} alt="sport"/>
                      </button>
                      <button className={(this.state.nonactiveCircle5) ? 'nonactiveCircle5' : 'activeCircle'} onClick={() => this.toggleHandler5()}>
                          {/*😴*/}
                          <img src={steps} alt="steps"/>
                      </button>
                      <button className={(this.state.nonactiveCircle6) ? 'nonactiveCircle6' : 'activeCircle'} onClick={() => this.toggleHandler6()}>
                          {/*🌊*/}
                          <img src={water} alt="water"/>
                      </button>




                  </div>
                </div>

                <div className = "list">
                  {this.renderCars()}
                </div>
            </div>
        )

    }

}


export default App
