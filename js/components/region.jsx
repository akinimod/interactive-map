import React from 'react';
import ReactDOM from 'react-dom';
import attacks from './attacks.jsx'



  export class InfoRegion extends React.Component {
        render() {
          const lista = attacks.map((el) => {
                  if(el.id==this.props.region){
                      return  <div >
                          <div>Date : {el.date}</div>
                          <div>Type: {el.type}</div>
                          <div>Dead : {el.dead}</div>
                          <div>Injured: {el.injured}</div>
                          <div>Description: {el.description}</div>
                          <br/>
                          <hr />
                          <br/>
                        </div>
                  }


    })
            return <li>{lista}</li>
        }
    }
