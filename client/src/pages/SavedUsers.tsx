import { useEffect, useState } from "react";
import { UserCard } from "../components/UserCard";
import { User } from "../types";
import { deleteUser, getSavedUsers } from "../services/userService";
import { DeleteBtn } from "../components/DeleteBtn";
import { LoadMoreBtn } from "../components/LoadMoreBtn";

export const SavedUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasNext, setHasNext] = useState<boolean>(true);

  const fetchUsers = async () => {
    try {
      const response = await getSavedUsers(page);
      setUsers((prev) => [...prev, ...response.results]);
      if (response.info.results === 0) {
        setHasNext(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const handleLoadMore = async () => {
    setPage((prev) => prev + 1);
  };

  const handleDeleteUser = async (userId: string) => {
    const response = await deleteUser(userId);
    setUsers((prev) => prev.filter((u) => u.login.uuid !== userId));
    return response;
  };

  return (
    <div>
      <UserCard
        users={users}
        actionButton={(user) => (
          <DeleteBtn user={user} onDelete={handleDeleteUser} />
        )}
      />

      {hasNext && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
    </div>
  );
};
