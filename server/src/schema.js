const gql = require("graphql-tag")

const typeDefs = gql`
"Query to get tracks array for the homepage grid"
type Query {
    tracksForHome: [Track!]!
}
"A track is a group of Modules that teaches about a specific topic."
type Track {
    id: ID!
    "The track title."
    title: String!
    "The tracks main author."
    author: Author!
    "The track's main illustration to display in track card or track page detail."
    thumbnail: String 
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
}

"Author of a complete track."
type Author {
    id: ID!
    "Author's first and last name."
    name: String!
    "Author's profile picture url."
    photo: String
}
`;

module.exports = typeDefs;