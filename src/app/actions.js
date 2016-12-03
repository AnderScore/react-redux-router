import axios from 'axios'

export const increment = (number) => {
  return { 
      type: 'INCREMENT',
      amount: number
    }
}

export const decrement = (number) => {
  return {
      type: 'DECREMENT',
      amount: number
    }
}

export const london = (dispatch) => {
  const url = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast ' +
          'where woeid in (select woeid from geo.places(1) where text="London")&format=json'

  return function (dispatch) {
    axios.get(url)
      .then((response) => dispatch({
          type: 'LONDON',
          data: response.data.query.results.channel.item.condition.text
        })).catch((error) => dispatch({
          type: 'LONDON',
          error: error
        }))
  }
}