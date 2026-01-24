import { formatDistanceToNow } from "date-fns";

const Tags = ({ createdAt, status, Uid, Hid, style, size = 10 }) => {
  return (
    <div className="flex gap-2 absolute" style={style ? style : {}}>
      {createdAt && (
        <span
          className="bg-gray-400 px-2 py-0.5 font-bold text-white rounded-lg text-shadow-2xs"
          style={{ fontSize: `${size}px` }}
        >
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            addPrefix: true,
          })}
        </span>
      )}
      {status === "in-progress" && Hid && (
        <p
          className="bg-blue-400 px-2 py-0.5 uppercase font-bold text-white rounded-lg text-shadow-2xs"
          style={{ fontSize: `${size}px` }}
        >
          hId: {Hid}
        </p>
      )}
      {status === "open" && Uid && (
        <p
          className={
            "bg-green-600 px-2 py-0.5 uppercase font-bold text-white rounded-lg text-shadow-2xs"
          }
          style={{ fontSize: `${size}px` }}
        >
          UId: {Uid}
        </p>
      )}
    </div>
  );
};

export default Tags;
