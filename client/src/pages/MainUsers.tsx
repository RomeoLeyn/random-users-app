import { useEffect, useState } from "react";
import { getRandomUsers, saveUser } from "../services/userService";
import { UserCard } from "../components/UserCard";
import { User } from "../types";
import { SaveBtn } from "../components/SaveBtn";
import { LoadMoreBtn } from "../components/LoadMoreBtn";

export const MainUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [savedIds, setSavedIds] = useState<string[]>([]);

  const fetchUsers = async () => {
    try {
      const usersResponse = await getRandomUsers(page);
      setUsers((prev) => [...prev, ...usersResponse.results]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveUser = async (user: User) => {
    try {
      await saveUser(user);
      setSavedIds((prev) => [...prev, user.login.uuid]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMore = async () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  return (
    <div>
      <div>
        <UserCard
          users={users}
          actionButton={(user) => (
            <SaveBtn
              user={user}
              onSave={handleSaveUser}
              isSaved={savedIds.includes(user.login.uuid)}
            />
          )}
        />
      </div>
      <LoadMoreBtn handleLoadMore={handleLoadMore} />
    </div>
  );
};
