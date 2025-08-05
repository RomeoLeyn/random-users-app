type Props = {
  handleLoadMore: () => void;
};

export const LoadMoreBtn = ({ handleLoadMore }: Props) => {
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={handleLoadMore}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Load more
      </button>
    </div>
  );
};
