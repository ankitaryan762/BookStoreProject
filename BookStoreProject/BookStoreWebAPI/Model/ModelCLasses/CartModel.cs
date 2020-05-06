using System;
using System.Collections.Generic;
using System.Text;

namespace Model.ModelCLasses
{
    public class CartModel
    {
        /// <summary>
        /// property for name title of the book
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// property for the Authors of the book
        /// </summary>
        public string Authors { get; set; }

        /// <summary>
        /// property for the image of the book
        /// </summary>
        public string Image { get; set; }

        /// <summary>
        /// property for the price of the book
        /// </summary>
        public double Price { get; set; }

        /// <summary>
        /// property for TotalPrices
        /// </summary>
        public double TotalPrice { get; set; } 

        /// <summary>
        /// property for count i.e number of books selected.
        /// </summary>
        public int Count { get; set; } 
    }
}
