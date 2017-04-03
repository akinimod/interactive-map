import React from 'react';
import ReactDOM from 'react-dom';
import "./style.scss";
import {InfoRegion} from './components/region.jsx';


document.addEventListener('DOMContentLoaded', function() {

    class App extends React.Component {
        constructor() {
            super()
            this.state = {
                value: false,
                region: " "
            }
        }

        mouseOver = (e) => {
            e.preventDefault();
            e.target.style.fill = "red";
            // console.log(this);
        }

        mouseOut = (e) => {
            e.preventDefault();
            e.target.style.fill = "#CCCCCC";
        }

        mouseClick = (e) => {
            e.preventDefault();
            e.target.style.fill = "red";

            if (this.state.value === false) {
                this.setState({value: true})
            } else {
                this.setState({value: false})
            }

            let id = e.target.getAttribute("id")
                this.setState({region: id});
        }

        maps() {

            let departament = document.getElementsByTagName("path");
            console.log(departament);

            for (var i = 0; i < departament.length; i++) {

                departament[i].addEventListener('mouseover', this.mouseOver)
                departament[i].addEventListener('mouseout', this.mouseOut);
                departament[i].addEventListener('click', this.mouseClick);

            }
        }

        componentDidMount() {
            this.maps();
        }

        render() {
            if (this.state.value === true) {
                return   <InfoRegion region={this.state.region}/>
            
            } else {
                return <div></div>
            }
        }
    }

    ReactDOM.render(
        <App/>, document.getElementById('app'));
});
