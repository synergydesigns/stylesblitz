import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const config = {
  link: new HttpLink({
    uri: 'https://zzq686r09i.execute-api.us-east-1.amazonaws.com/dev/graphql',
    opts: {
      credentials: 'same-origin'
    }
  })
}

export default withData(config)
