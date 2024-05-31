import { ImgHTMLAttributes } from "react";
import style from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

const Avatar = ({ hasBorder = true, src }: AvatarProps) => {
  return (
    <img
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      src={src}
    />
  );
};

export default Avatar;
