const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare().then(() => {
  const server = express()

  server.get('/vendors/:vendorId', (req: any, res: any) => {
    const { params, query } = req
    return app.render(req, res, '/vendors/[vendorId]', { params, search: query })
  })

  server.get('/vendors/:vendorId/assets/:assetId', (req: any, res: any) => {
    const { params, query } = req
    return app.render(req, res, '/vendors/gallery', { params, search: query })
  })

  server.get('*', (req: any, res: any) => {
    return handle(req, res)
  })

  server.listen(port, (err: any) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})