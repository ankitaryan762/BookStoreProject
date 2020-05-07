using Model.ModelCLasses;
using Repository.Context;
using Repository.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.RepositoryIMPL
{
    public class CartRepoIMPL : ICartRepo
    {
        private readonly UserDBContext _context;

        /// <summary>
        /// Initializes a new instance of the <see cref="EmployeeRepository"/> class.
        /// </summary>
        /// <param name="context">context.</param>
        public CartRepoIMPL(UserDBContext context)
        {
            this._context = context;
        }
        public Task<int> AddBookToCart(CartModel BookItem)
        {
            this._context.Cart.Add(BookItem);
            var result = this._context.SaveChangesAsync();
            return result;
        }

<<<<<<< HEAD
        public void Delete(CartModel BookItem)
        {
            this._context.Cart.Remove(BookItem);
            this._context.SaveChanges();
=======
        public CartModel Delete(int BookId)
        {
            CartModel cartModel = this._context.Cart.Find(BookId);
            if (cartModel != null)
            {
                this._context.Cart.Remove(cartModel);
                this._context.SaveChanges();
            }
            return cartModel;
>>>>>>> Ankit_Aryan_FullStack
        }

        public IEnumerable<CartModel> GetAllBooksInCart()
        {
            return this._context.Cart.ToList();
        }

<<<<<<< HEAD
        public void UpdateBookInCart(CartModel BookToUpdate, CartModel BookNewDetails)
=======
        public Task<int> UpdateBookInCart(CartModel BookToUpdate, CartModel BookNewDetails)
>>>>>>> Ankit_Aryan_FullStack
        {
            BookToUpdate.Title = BookNewDetails.Title;
            BookToUpdate.Authors  = BookNewDetails.Authors;
            BookToUpdate.Count  = BookNewDetails.Count;
            BookToUpdate.Price  = BookNewDetails.Price;
            BookToUpdate.TotalPrice  = BookNewDetails.TotalPrice;
            BookToUpdate.Image  = BookNewDetails.Image;
<<<<<<< HEAD
            this._context.SaveChanges();
=======
            var result = this._context.SaveChangesAsync();
            return result; 
>>>>>>> Ankit_Aryan_FullStack
        }
    }
}
