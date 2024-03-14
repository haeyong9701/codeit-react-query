import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./api";

function HomePage() {
  const {
    data: postsData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    retry: 0,
  });

  if (isPending) return "로딩 중입니다...";

  if (isError) return "에러가 발생했습니다.";

  const posts = postsData?.results ?? [];

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.user.name}: {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
