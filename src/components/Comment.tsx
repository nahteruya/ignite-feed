import { useState } from "react";
import Avatar from "./Avatar";
import style from "./Comment.module.css";
import { HandsClapping, Trash } from "phosphor-react";

interface Comment {
  id: number;
  content: string;
}

interface CommentProps {
  comment: Comment;
  onDeleteComment: (comment: Comment) => void;
}

const Comment = ({ comment, onDeleteComment }: CommentProps) => {
  const [linkCount, setLinkeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(comment);
  }

  function handleLikeComment() {
    setLinkeCount((prevLikeCount) => prevLikeCount + 1);
  }

  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src="https://github.com/nahteruya.png" />
      <div className={style.commentMain}>
        <div className={style.commentBox}>
          <header>
            <div className={style.authorInfo}>
              <strong>Naomi Teruya</strong>
              <time title="25 de Maio às 10h49" dateTime="2024-05-24 10:49:12">
                Cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <div className="content">
            <p>{comment.content}</p>
          </div>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <HandsClapping size={20} />
            Aplaudir
            <span>{linkCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
