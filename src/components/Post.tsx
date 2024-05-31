import style from "./Post.module.css";
import Comment from "./Comment";
import Avatar from "./Avatar";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface PostProps {
  author: Author;
  content: string;
  publishedAt: Date;
}

interface CommentProps {
  id: number;
  content: string;
}

const Post = ({ author, content, publishedAt }: PostProps) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      content: "Muito bom, parabéns!",
    },
  ]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedAtDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'às' HH:mm",
    {
      locale: ptBR,
    }
  );

  const publishedAtDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([
      ...comments,
      { id: comments.length + 1, content: newCommentText },
    ]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteComment(comment: CommentProps) {
    const commentWhioutDeletedOne = comments.filter(
      (element) => element.id !== comment.id
    );
    setComments(commentWhioutDeletedOne);
  }

  const isNewCommentInvalid = newCommentText.length === 0;

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.avatarUrl} />
          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedAtDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedAtDateRelativeToNow}
        </time>
      </header>
      <div className={style.content}>{content}</div>
      <form onSubmit={handleCreateNewComment} className={style.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Escreva um comentário..."
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentInvalid}>
            Publicar
          </button>
        </footer>
      </form>
      <div className={style.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              comment={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};

export default Post;
