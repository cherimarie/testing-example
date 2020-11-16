window.addEventListener('DOMContentLoaded', (event) => {

  document.querySelector('#pay').addEventListener('submit', function (event){
    event.preventDefault()

    const nameStatement = `Hi, ${this['name'].value}. `

    const hours = this['hours']
    const rate = this['rate']

    let hoursNum = parseInt(hours.value)
    let rateNum = parseInt(rate.value)

    if(isNaN(hoursNum) || isNaN(rateNum)){
      alert('Please only enter numeric values')
      return
    }
    const weekly =  hoursNum * rateNum
    hours.value = ''
    rate.value = ''

    const grossStatement = `You gross $${weekly} per week. `

    const currentAveragePay = getAverageWeeklyPay()
    const comparison = weekly > currentAveragePay ? 'more' : 'less'

    const comparisonStatement = `That's ${comparison} than the average US worker makes. `

    const currentPriceOfBread = getPriceOfBread()
    const buyingPower = weekly/currentPriceOfBread

    const buyingPowerStatement = `That's enough to buy ${buyingPower} loaves of bread. `

    document.querySelector('#output').innerHTML = nameStatement + grossStatement + comparisonStatement + buyingPowerStatement
  })
})

function getAverageWeeklyPay(){
  // This function simulates a call to an external API to fetch the current average weekly pay for US workers.
  const payRange = [1001, 1139, 1190, 1254, 1301, 'server error']
  const currentAverage = payRange[Math.floor(Math.random() * payRange.length)]
  return currentAverage
}

function getPriceOfBread(){
  // This function simulates a call to an external API to fetch the current price of bread.
  const priceRange = [1.25, 1.99, 2.25, 3.00, 'server error']
  const todaysPrice = priceRange[Math.floor(Math.random() * priceRange.length)]
  return todaysPrice
}
