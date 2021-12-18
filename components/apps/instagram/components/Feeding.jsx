import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestion from './Suggestion';

const posts = [
  {
    id: '1',
    user: 'anvarovm',
    description: '',
  },
];

function Feeding() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <section className="col-span-2">
        {/* storys */}
        <Stories className="bg-yellow-300" />

        {/* posts */}
        {posts.map((posts) => {
          <Posts key={posts.id} user={posts.user} />;
        })}
        <Posts />
      </section>

      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed top-20">
          <MiniProfile />
          <Suggestion />
        </div>
      </section>
    </main>
  );
}

export default Feeding;
