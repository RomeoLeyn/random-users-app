import { User } from "../types";

type Props = {
  user: User;
  onSave: (user: User) => void;
  isSaved: boolean;
};

export const SaveBtn = ({ user, onSave, isSaved }: Props) => {
  return (
    <div>
      {isSaved ? (
        <button
          className="w-full bg-gray-500 text-white py-2 rounded cursor-not-allowed"
          disabled
        >
          Saved ✅
        </button>
      ) : (
        <button
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
          onClick={() => onSave(user)}
        >
          Save
        </button>
      )}
    </div>
  );
};
