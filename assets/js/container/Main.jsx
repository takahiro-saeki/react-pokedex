import React, {Component} from 'react';
import request from 'superagent';
const URL = 'http://pokeapi.co/api/v2/pokemon/';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  ajax() {
    request
    .get(URL)
    .end((err, res) => {
      if(err) {
        console.log(err);
      } else {
        console.log(res)
      }
    });
  }

  render() {
    return (
      <main>
        <div　onClick={this.ajax}>pokedexテスト！クリック！</div>
      </main>
    )
  }
}
