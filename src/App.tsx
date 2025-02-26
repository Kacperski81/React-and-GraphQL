import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { PokemonsContainer } from './containers/PokemonsContainer';

export default function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
    cache: new InMemoryCache(),
  });


  return (
    <ApolloProvider client={client}>
      <main className="bg-[#fbfbfb] flex justify-center">
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  )
}