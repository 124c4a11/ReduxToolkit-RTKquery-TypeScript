import { IPost } from '../../store/models/post.model';
import { postAPI } from '../../store/services/post.service';

import styles from './PostList.module.scss';


export function PostList(): JSX.Element {
  const limit: number = 10;
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(limit);
  const [createPost, { }] = postAPI.useCreatePostMutation();
  const [updatePost, { }] = postAPI.useUpdatePostMutation();
  const [deletePost, { }] = postAPI.useDeletePostMutation();

  async function handleCreate(): Promise<void> {
    const title = prompt();

    await createPost({ title, body: title } as IPost);
  }

  function handleUpdate(post: IPost) {
    const title = prompt('', post.title) || '';

    updatePost({ ...post, title });
  }

  function handleRemove(post: IPost): void {
    deletePost(post);
  }

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>Something went wrong!</h2>

  return (
    <>
      <button
        onClick={handleCreate}
      >Add new post</button>
      {
        posts &&
        <ul className={styles['list']}>
          {posts.map((post) => (
            <li key={post.id} className={styles['list__item']}>
              <div>
                <h3>{post.id}. {post.title}</h3>
                <p>{post.body}</p>
              </div>
              <div>
                <button onClick={() => handleUpdate(post)}>Update</button>
                <button onClick={() => handleRemove(post)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      }
    </>
  );
}
