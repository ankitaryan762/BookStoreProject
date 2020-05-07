using Model.ModelCLasses;
using System;
using System.Collections.Generic;
using System.Text;

namespace Manager.IManager
{
   public interface IBookManager
    {
        IEnumerable<BookModel> GetAllBook();
    }
}
