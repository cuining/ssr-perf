import React from 'react'
import ReactDOMServer from 'react-dom/server'
import T from './T'
import Benchmark from 'benchmark'

const depth = 4
const breadth = 11

const render = () => {
  ReactDOMServer.renderToString(<T depth={depth} breadth={breadth} />)
}

const suite = new Benchmark.Suite()

suite.add({ name: 'production mode', fn: render })

suite
  .on('complete', function() {
    for (let index = 0; index < this.length; index++) {
      const benchmark = this[index]
      console.log(benchmark.name)
      console.log(`Mean:    ${Math.round(benchmark.stats.mean * 1000)} ms`)
      console.log(`Std Dev: ${Math.round(benchmark.stats.deviation * 1000)} ms`)
      console.log('')
    }
  })
  .run({ async: true })
