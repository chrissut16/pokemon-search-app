const LoadMore = ({ loadMore }) => {
  return(
    <button
      className="text-lg text-sky-600 hover:scale-105 duration-300"
      onClick={() => {
        loadMore();
      }}
      >Load More
    </button>
  )
}

export default LoadMore;