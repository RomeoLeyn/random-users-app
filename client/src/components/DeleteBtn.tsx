import { User } from "../types";

type Props = {
  user: User;
  onDelete: (userId: string) => void;
};

export const DeleteBtn = ({ user, onDelete }: Props) => {
  return (
    <div>
      <button
        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
        onClick={() => onDelete(user.login.uuid)}
      >
        Delete
      </button>
    </div>
  );
};
