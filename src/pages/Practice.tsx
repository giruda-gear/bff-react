import { useQuery } from 'urql'

const BOOKMARKS_QUERY = `
  query GetBookmarks($userId: Int!) {
    bookmarks(userId: $userId) {
      id
      title
      description
    }
  }
`

interface Bookmark {
  id: number
  title: string
  description: string
}

interface BookmarksData {
  bookmarks: Bookmark[]
}

export default function PracticePage() {
  const [result] = useQuery<BookmarksData, { userId: number }>({
    query: BOOKMARKS_QUERY,
    variables: { userId: 1 },
  })

  const { data, fetching, error } = result
  console.log(data)
  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  return (
    <ul>
      {data?.bookmarks.map((bookmark) => (
        <li key={bookmark.id}>
          <h3>{bookmark.title}</h3>
          <p>{bookmark.description}</p>
        </li>
      ))}
    </ul>
  )
}
