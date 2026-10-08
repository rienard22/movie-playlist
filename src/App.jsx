import './App.css'
 
// Add a `poster` URL (e.g. "/posters/dory.jpg" from /public) to any movie to show a real poster.
const movies = [
  { time: '18:00', title: 'Finding Dory', tag: 'Unforgettable', genre: 'Comedy', color: '#1e7bd6', bar: '#1e7bd6', poster: '' },
  { time: '20:00', title: 'The Nice Guys', tag: 'Premiere', genre: 'Comedy', color: '#c4452b', bar: '#f26b21', poster: '' },
  { time: '22:00', title: 'The Purge: Election Year', tag: '', genre: 'Thriller', color: '#1f4a2c', bar: '#3fd13f', poster: '' },
]
 
function PosterCard({ m }) {
  const style = m.poster
    ? { backgroundImage: `linear-gradient(transparent 45%, rgba(0,0,0,.65)), url(${m.poster})` }
    : { background: `linear-gradient(160deg, ${m.color}, #111 130%)` }
  return (
    <article className="poster">
      <div className="poster-art" style={style}>
        <span className="genre">{m.genre}</span>
        <div className="poster-info">
          <strong className="time">{m.time}</strong>
          <span className="title">{m.title}</span>
          {m.tag && <span className="tag">{m.tag}</span>}
        </div>
      </div>
      <div className="bar" style={{ background: m.bar }} />
    </article>
  )
}
 
function SquareBlock({ m }) {
  return (
    <article className="block">
      <div className="block-body">
        <strong className="time">{m.time}</strong>
        <span className="title">{m.title}</span>
        {m.tag && <span className="tag">{m.tag}</span>}
      </div>
      <div className="bar" style={{ background: m.bar }} />
    </article>
  )
}
 
export default function App() {
  return (
    <main className="screen">
      <section>
        <h1>What's on today?</h1>
        <div className="row">
          {movies.map((m) => <PosterCard key={m.time} m={m} />)}
        </div>
      </section>
 
      <section>
        <h2>Square blocks</h2>
        <div className="row">
          {movies.map((m) => <SquareBlock key={m.time} m={m} />)}
        </div>
      </section>
    </main>
  )
}
