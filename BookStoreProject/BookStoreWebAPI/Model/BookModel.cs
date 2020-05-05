
namespace Model
{
    /// <summary>
    /// Model class for book
    /// </summary>
    public class BookModel
    {
        /// <summary>
        /// property BookId as a Primary Key of the Book Table.
        /// </summary>
        public long BookId { get; set; }

        /// <summary>
        /// property for the Title of the book
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// property for the Author of the book
        /// </summary>
        public string Author { get; set; }

        /// <summary>
        /// property for Price of the book
        /// </summary>
        public double Price { get; set; }

        /// <summary>
        /// property for Cover Image of the book
        /// </summary>
        public string Image { get; set; }
    }
}
