const ContentDetailPage = ({ params }) => {
  /**
   * This is a catch all route that uses Dynamic Segments.
   * Dynamic Segments can be extended to catch-all subsequent
   * segments by adding an ellipsis inside the brackets [...segmentName].
   * For example, pages/shop/[...slug].js will match
   * /shop/clothes, but also /shop/clothes/tops,
   * /shop/clothes/tops/t-shirts, and so on.
   */
  return (
    <div>
      <p>
        This is a catch all route that uses Dynamic Segments. Dynamic Segments
        can be extended to catch-all subsequent segments by adding an ellipsis
        inside the brackets [...segmentName]. For example,
        pages/shop/[...slug].js will match /shop/clothes, but also
        /shop/clothes/tops, /shop/clothes/tops/t-shirts, and so on.
      </p>
      <p>
        The routes params are: {JSON.stringify(params.id)}
      </p>
    </div>
  );
};

export default ContentDetailPage;
