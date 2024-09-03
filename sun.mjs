#!/usr/bin env node

import { getSunrise, getSunset } from 'sunrise-sunset-js'

const now = new Date()
const hour = now.getHours()

const SYDNEY_LATITUDE = '-39.9197'
const SYDNEY_LONGITUDE = '151.0896'

const position = [ SYDNEY_LATITUDE, SYDNEY_LONGITUDE ]

const tomorrow = new Date()

tomorrow.setDate(now.getDate() + 1)

const sunrise = getSunrise(...position, tomorrow)
const sunset = getSunset(...position, now)

console.log()

if (hour > sunset.getHours()) {
  console.log('Sunrise: ', formatTime(sunrise))
  console.log('Sunset:  ', formatTime(sunset))
} else {
  console.log('Sunset:  ', formatTime(sunset))
  console.log('Sunrise: ', formatTime(sunrise))
}

function formatTime(date) {
  let h = date.getHours().toString()
  let m = date.getMinutes().toString()

  h = (h.length === 1 ? '0' : '') + h
  m = (m.length === 1 ? '0' : '') + m

  return `${h}:${m}`
}


