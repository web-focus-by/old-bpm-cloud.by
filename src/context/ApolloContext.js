import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'isomorphic-fetch'
import { graphql, Link } from "gatsby"

const httpLink = createHttpLink({
  fetch,
  uri: 'https://wp-server.bpm-cloud.by/graphql',
});



//

//

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: '93V:A0e68o]|6}}m)|/J7+FvCJh/12Ebh2E:qpn+{)Me9m;_`f8__%p3Y8Bk[vG3',
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

// export const client = new ApolloClient({
//   uri: `https://wp-server.bpm-cloud.by/graphql`, // https://48p1r2roz4.sse.codesandbox.io https://wp-server.bpm-cloud.by/graphql
//   cache: new InMemoryCache(),
// })