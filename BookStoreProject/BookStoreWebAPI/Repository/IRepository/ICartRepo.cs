﻿using Model.ModelCLasses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Repository.IRepository
{
    public interface ICartRepo
    {
        /// <summary>
        /// Declare GetAll Methods.
        /// </summary>
        /// <returns>AllEmployee.</returns>
        IEnumerable<CartModel> GetAllBooksInCart();

        /// <summary>
        /// Declare Add Method.
        /// </summary>
        /// <param name="entity">entity.</param>
        /// <returns>Task.</returns>
        Task<int> AddBookToCart(CartModel BookItem);

        /// <summary>
        /// Declare Update method.
        /// </summary>
        /// <param name="dbEntity">dbEntity.</param>
        /// <param name="entity">entity.</param>
<<<<<<< HEAD
        void UpdateBookInCart(CartModel BookToUpdate, CartModel BookNewDetails);
=======
        Task<int> UpdateBookInCart(CartModel BookToUpdate, CartModel BookNewDetails);
>>>>>>> Ankit_Aryan_FullStack

        /// <summary>
        /// Declare Delete method.
        /// </summary>
        /// <param name="entity">entity.</param>
<<<<<<< HEAD
        void Delete(CartModel BookItem);
=======
        CartModel Delete(int BookId);
>>>>>>> Ankit_Aryan_FullStack

    }
}
