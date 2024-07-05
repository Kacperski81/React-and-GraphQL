import { gql } from '@apollo/client'

export const GET_POKEMONS = gql(/* GraphQL */ `
    query GetPockemons($first: Int!) {
        pokemons(first: $first) {
            id
            name
            image
            maxHP
            maxCP
            attacks {
                special {
                    name
                    damage
                }
            }
        }
    }
`)